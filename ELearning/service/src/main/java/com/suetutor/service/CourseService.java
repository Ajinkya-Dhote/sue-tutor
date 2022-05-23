package com.suetutor.service;

import java.util.List;

import com.suetutor.model.Course;

public interface CourseService {

	List<Course> findAll();
	void save(Course course);
	void delete(Course course);
}
