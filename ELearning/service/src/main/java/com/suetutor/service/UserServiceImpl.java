package com.suetutor.service;

import java.time.*;
import java.util.*;

import com.suetutor.core.constants.Constants;
import com.suetutor.core.utility.RandomUtility;
import com.suetutor.dao.ContactRepository;
import com.suetutor.dao.VerificationDetailsRepository;
import com.suetutor.model.Contact;
import com.suetutor.model.VerificationDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.suetutor.dao.UserRepository;
import com.suetutor.model.User;
import com.suetutor.model.notification.EmailNotification;
import com.suetutor.model.notification.Notification;
import com.suetutor.service.notification.Notifier;

import lombok.extern.slf4j.Slf4j;

import javax.annotation.PostConstruct;

@Slf4j
@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserRepository repo;
	@Autowired
	private VerificationDetailsRepository verificationDetailsRepository;
	@Autowired
	private ContactRepository contactRepository;
	@Autowired
	private Map<String, Notifier> notifiers;

	public boolean authenticate(User user) {
		log.info("authenticate({})", user.getUsername());
		User dbUser = repo.findByUsername(user.getUsername());
		if (dbUser != null) {
			return dbUser.getPassword().equals(user.getPassword());
		}
		return false;
	}

	public User fetch(Long id) {
		Optional<User> user = repo.findById(id);
		if (user.isPresent()) {
			return user.get();
		}
		return null;
	}
	
	public List<User> fetchAll() {
		List<User> users = new ArrayList<User>();
		repo.findAll().forEach(users::add);
		return users;
	}

	public void save(User user) {
		user.setCreatedOn(new Date().getTime());
		repo.save(user);
	}

	@Override
	public User fetchByUsername(String username) {
		return repo.findByUsername(username);
	}

	@Override
	public void update(User user) {
		log.info("update user: {}", user);
		Long id = user.getId();
		User existingUser = repo.findById(id).orElseGet(null);
		if (existingUser != null) {
			existingUser.setId(user.getId());
			existingUser.setFirstName(user.getFirstName());
			existingUser.setMiddleName(user.getMiddleName());
			existingUser.setLastName(user.getLastName());
			existingUser.setGender(user.getGender());
			existingUser.setAge(user.getAge());
			existingUser.setBoard(user.getBoard());
			existingUser.setGrade(user.getGrade());
			repo.save(existingUser);
		}
	}

	@Override
	public String verifyEmail(Long userId) {
		log.info("verifyEmail({})", userId);
		User user = repo.findById(userId).get();
		Notification verification = new EmailNotification();
		verification.setEmail(user.getUsername());
		verification.setSubject("OTP From SUE.");
		String otp = String.valueOf(RandomUtility.generateOTP(6));
		LocalDateTime time = LocalDateTime.now().plusMinutes(3).withNano(0);
		Long validTill = ZonedDateTime.of(time, TimeZone.getDefault().toZoneId()).toEpochSecond();
		log.info("OTP: {}", otp);
		String message = String.format("Hi %s %s, <br><br><b> %s </b>is your OTP for email verification. OTP will be valid till %s.<br><br> Please do not share your OTP with anyone. <br><br>Regards,<br> SUE Team.",
				user.getFirstName(), user.getLastName(), otp, time);
		verification.setMessage(message);
		for (Notifier service : notifiers.values()) {
			if (Constants.EMAIL.equals(service.getType())) {
				service.send(verification);
				break;
			}
		}
		VerificationDetails details = new VerificationDetails();
		details.setUserId(userId);
		details.setSentOn(validTill);
		details.setOtp(otp);
		details.setTarget(Constants.EMAIL);
		log.debug("details: {}", details);
		verificationDetailsRepository.save(details);
		return String.format("Verification OTP sent on %s", user.getUsername());
	}

	@Override
	public boolean validateOTP(Long userId, String otp) {
		List<VerificationDetails> details = verificationDetailsRepository.findAllByOtp(otp);
		for (VerificationDetails rcd : details) {
			log.info("rcd: {}", rcd);
			if (userId.equals(rcd.getUserId())
					&& LocalDateTime.now().isBefore(LocalDateTime.ofInstant(Instant.ofEpochSecond(rcd.getSentOn()), TimeZone.getDefault().toZoneId()))) {
				Contact contact = contactRepository.findByUserId(userId);
				contact.setEmailValidated(true);
				contactRepository.save(contact);
				return true;
			}
		}
		throw new RuntimeException("Invalid OTP");
	}

}
