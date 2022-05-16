package com.suetutor.dao;

import org.springframework.data.repository.CrudRepository;

import com.suetutor.model.Student;

public interface StudentRepository extends CrudRepository<Student, Long>{
	
}
