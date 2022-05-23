package com.suetutor.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.suetutor.dao.CourseRepository;
import com.suetutor.model.Course;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class CourseServiceImpl implements CourseService {
	
	@Autowired
	CourseRepository repo;
	
	public List<Course> findAll() {
		log.info("fetching all courses");
		List<Course> course = new ArrayList<Course>();
		repo.findAll().forEach(course::add);
		return course;
	}
	
	public void save(Course course) {
		log.info("saving a course: {}", course);
		repo.save(course);
	}
	
	public void delete(Course course) {
		log.info("deleting a course: {}", course);
		repo.delete(course);
	}

}
