package com.suetutor.service;

import java.util.List;

import com.suetutor.model.Student;

public interface StudentService {
	public Student fetch(Long id);
	public List<Student> fetchAll();
	public void save(Student student);
}
