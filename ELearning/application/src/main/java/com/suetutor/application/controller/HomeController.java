package com.suetutor.application.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class HomeController {

	private static final Logger LOGGER = LoggerFactory.getLogger(HomeController.class);

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String index() {
		return "forward:/login";
	}

	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String login(HttpServletRequest request) {
		HttpSession session = request.getSession(false);
		if (session != null && request.getUserPrincipal() != null) {
			LOGGER.info("post login...");
			LOGGER.info("Session id: {} is present for user {}.", session.getId(), request.getUserPrincipal().getName());
			return "home";
		}
		LOGGER.info("request for login...");
		return "login";
	}

	@RequestMapping(value = "/home", method = RequestMethod.GET)
	public String home(HttpServletRequest request) {
		LOGGER.info("home()");
		HttpSession session = request.getSession(false);
		if (session == null) {
			session = request.getSession(true);
			LOGGER.info("Sessoin not found, created new session");
		}
		return "home";
	}

	@RequestMapping(value = "/login-failed", method = RequestMethod.GET)
	public String onLoginFailed(HttpServletRequest request) {
		LOGGER.error("onLoginFailed()");
		return "login";
	}

}
