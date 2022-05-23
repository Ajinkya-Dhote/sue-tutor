package com.suetutor.application.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.suetutor.model.Course;
import com.suetutor.service.CourseService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController("/course")
public class CourseController {
	
	@Autowired
	CourseService service;
	
	@GetMapping("/")
	@ResponseBody List<Course> fetch() {
		log.info("fetchAll()");
		return service.findAll();
	}
	
	@PostMapping("/")
	ResponseEntity<?> save(@RequestBody Course course) {
		log.info("Saving new course");
		service.save(course);
		return ResponseEntity.ok().build();
	}

}
