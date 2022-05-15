package com.suetutor.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.suetutor.dao.UserRepository;
import com.suetutor.model.User;

@Service
public class UserServiceImpl implements UserService {

	private static final Logger LOGGER = LoggerFactory.getLogger(UserServiceImpl.class);

	@Autowired
	private UserRepository repo;

	public boolean authenticate(User user) {
		LOGGER.info("authenticate({})", user.getUsername());
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
}
