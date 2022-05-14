package com.suetutor.application.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

@ControllerAdvice
public class ApplicationErrorController {

	@ExceptionHandler(value = Exception.class)
	@ResponseBody Map<String, Object> handleException(HttpServletRequest req, Exception e) {
		Map<String, Object> response = new HashMap<>();
		response.put("Error", e.getLocalizedMessage());
		return response;
	}
}
