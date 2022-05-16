package com.suetutor.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.suetutor.dao.StudentRepository;
import com.suetutor.model.Student;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class StudenServiceImpl implements StudentService {
	
	@Autowired
	private StudentRepository repo;
	
	public Student fetch(Long id) {
		log.info("fetching student for id: {}", id);
		return repo.findById(id).orElse(null);
	}
	
	public List<Student> fetchAll() {
		log.info("fetching all students");
		List<Student> students = new ArrayList<>();
		repo.findAll().forEach(students::add);
		return students;
	}
	
	public void save(Student student) {
		student.setCreatedOn(new Date().getTime());
		repo.save(student);
	}

}
