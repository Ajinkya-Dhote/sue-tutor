package com.suetutor.service.notification;

import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import com.suetutor.core.constants.Constants;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.suetutor.model.notification.Notification;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class EmailNotifier implements Notifier {

	@Value("${spring.mail.host}")
	String host;

	@Value("${spring.mail.port}")
	String port;

	@Value("${from.email}")
	String fromEmail;

	@Override
	public String getType() {
		return Constants.EMAIL;
	}

	@Override
	public void send(Notification notification) {
		log.info("send({}, {}, {}, {})", notification, fromEmail, host, port);
		System.out.println("notification = " + notification);
		Session session = getSession();
		if (log.isDebugEnabled()) {
			session.setDebug(true);
		}
		try {
			MimeMessage message = new MimeMessage(session);
			message.setFrom(new InternetAddress(fromEmail));
			message.addRecipient(Message.RecipientType.TO, new InternetAddress(notification.getEmail()));
			message.setSubject(notification.getSubject());
			message.setContent(notification.getMessage(), "text/html");
			Transport.send(message);
		} catch (MessagingException exception) {
		    log.error(exception.getMessage(), exception);
		}
	}

	private Session getSession () {
		Properties properties = System.getProperties();
		properties.put("mail.smtp.host", host);
		properties.put("mail.smtp.port", port);
		properties.put("mail.smtp.ssl.enable", "true");
		properties.put("mail.smtp.auth", "true");
        return Session.getInstance(properties, new javax.mail.Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(fromEmail, "*****");
			}
		});
	}
}
