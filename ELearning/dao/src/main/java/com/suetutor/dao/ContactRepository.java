package com.suetutor.dao;

import org.springframework.data.repository.CrudRepository;

import com.suetutor.model.Contact;

public interface ContactRepository extends CrudRepository<Contact, Long> {
	Contact findByUserId(Long userId);
}
