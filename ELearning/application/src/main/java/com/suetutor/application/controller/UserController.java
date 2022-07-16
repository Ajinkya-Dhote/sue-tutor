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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.suetutor.model.User;
import com.suetutor.service.UserService;

import lombok.extern.slf4j.Slf4j;


@Controller
@RequestMapping("/user")
@Slf4j
public class UserController {

	@Autowired
	private UserService userService;

	@GetMapping("/")
	@ResponseBody List<User> fetch() {
		log.info("fetchAll()");
		return userService.fetchAll();
	}

	@GetMapping("/{id}")
	@ResponseBody User fetch(@PathVariable Long id) {
		log.info("fetch({})", id);
		return userService.fetch(id);
	}
	
	@PutMapping("/")
	ResponseEntity<Object> updateUser(@RequestBody User user) {
		userService.update(user);
		return ResponseEntity.ok().build();
	}

	@PostMapping(value = "/register")
	@ResponseBody ResponseEntity<?> register(User user) {
		log.info("register({})", user);
		userService.save(user);
		return ResponseEntity.ok().build();
	}

	@PostMapping("/verify-email")
	public ResponseEntity<String> verifyEmail(Long userId) {
		return ResponseEntity.ok(userService.verifyEmail(userId));
	}

	@PostMapping("/validate-otp")
	public ResponseEntity<String> validateOTP(Long userId, String otp) {
		userService.validateOTP(userId,otp);
		return ResponseEntity.ok("OTP verified successfully");
	}
}
