package com.suetutor.application.service;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.google.common.collect.ImmutableMap;
import com.suetutor.model.Contact;
import com.suetutor.model.User;
import com.suetutor.service.ContactService;
import com.suetutor.service.ContactServiceImpl;
import com.suetutor.service.CourseService;
import com.suetutor.service.UserService;

import graphql.schema.DataFetcher;

@Component
public class GraphQLDataFetchers {
	@Autowired
	UserService userService;
	
	@Autowired
	ContactService contactService;
	
	@Autowired
	CourseService courseService;
	
	public DataFetcher<List<User>> getUsersDataFetcher() {
		return dataFetchingEnvironment -> {
			return userService.fetchAll();
		};
	}
	
	public DataFetcher<User> getUserByIdDataFetcher() {
		return dataFetchingEnvironment -> {
			String username = dataFetchingEnvironment.getArgument("username");
			return userService.fetchByUsername(username);
		};
	}
	
	public DataFetcher<Contact> getContactDataFetcher() {
		return dataFetchingEnvironment -> {
			User user = dataFetchingEnvironment.getSource();
			Long userId = user.getId();
			return contactService.findByUserId(userId);
		};
	}

	public DataFetcher getCourses() {
		return dataFetchingEnvironment -> {
			return courseService.findAll();
		};
	}
}
