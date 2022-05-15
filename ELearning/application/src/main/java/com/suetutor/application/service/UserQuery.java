package com.suetutor.application.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import com.suetutor.model.User;
import com.suetutor.service.UserService;

import net.bytebuddy.asm.Advice.This;

@Component
public class UserQuery implements GraphQLQueryResolver {
	
	@Autowired
	private UserService  userSservice;
	
	public List<User> getUsers() {
		return this.userSservice.fetchAll();
	}

}