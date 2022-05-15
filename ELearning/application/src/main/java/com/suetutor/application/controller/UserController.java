package com.suetutor.application.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
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
	@ResponseBody User fetch(@RequestParam Long id) {
		LOGGER.info("fetch({})", id);
		return userService.fetch(id);
	}

//	@GetMapping("/fetch")
//	@ResponseBody User fetch(@RequestParam String username) {
//		LOGGER.info("fetch({})", username);
//		return userService.fetchByUsername(username);
//	}

	@PostMapping(value = "/register")
	public String register(User user) {
		LOGGER.info("register({})", user);
		userService.save(user);
		return "login";
	}
}
