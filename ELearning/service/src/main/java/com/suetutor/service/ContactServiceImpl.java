package com.suetutor.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.suetutor.dao.ContactRepository;
import com.suetutor.model.Contact;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class ContactServiceImpl implements ContactService {
	@Autowired
	ContactRepository repo;

	@Override
	public Contact findByUserId(Long userId) {
		log.info("Get Contacts for userid: {}", userId);
		return repo.findByUserId(userId);
	}

}
