package com.suetutor.service;

import java.util.List;

import com.suetutor.model.User;

public interface UserService {

	boolean authenticate(User user);

	User fetch(Long id);

	User fetchByUsername(String username);

	void save(User user);
	
	List<User> fetchAll();
}
