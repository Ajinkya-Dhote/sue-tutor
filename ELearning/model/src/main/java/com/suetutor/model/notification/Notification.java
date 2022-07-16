package com.suetutor.model.notification;

public interface Notification {

	Long getMobileNumber();

	void setMobileNumber(Long mobileNumber);

	String getEmail();

	void setEmail(String email);

	String getMessage();

	void setMessage(String message);

	String getSubject();

	void setSubject(String subject);
}
