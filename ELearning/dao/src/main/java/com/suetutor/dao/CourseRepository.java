package com.suetutor.dao;

import org.springframework.data.repository.CrudRepository;

import com.suetutor.model.Course;


public interface CourseRepository extends CrudRepository<Course, Long> {

}
