package com.suetutor.service;

import com.suetutor.model.Contact;

public interface ContactService {
	Contact findByUserId(Long userId);
}
