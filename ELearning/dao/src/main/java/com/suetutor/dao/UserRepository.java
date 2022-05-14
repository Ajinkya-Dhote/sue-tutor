package com.suetutor.dao;

import org.springframework.data.repository.CrudRepository;

import com.suetutor.model.User;


public interface UserRepository extends CrudRepository<User, Long>{

	User findByUsername(String username);
}
