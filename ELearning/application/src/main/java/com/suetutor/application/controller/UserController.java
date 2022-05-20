package com.suetutor.application.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.suetutor.model.User;
import com.suetutor.service.UserService;


@Controller
@RequestMapping("/user")
public class UserController {

	private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);

	@Autowired
	private UserService userService;

	@GetMapping("/fetch")
	@ResponseBody List<User> fetch() {
		LOGGER.info("fetchAll()");
		return userService.fetchAll();
	}

	@GetMapping("/fetch/{id}")
	@ResponseBody User fetch(@PathVariable Long id) {
		LOGGER.info("fetch({})", id);
		return userService.fetch(id);
	}

	@PostMapping(value = "/register")
	@ResponseBody ResponseEntity<?> register(User user) {
		LOGGER.info("register({})", user);
		userService.save(user);
		return ResponseEntity.ok().build();
	}
}
