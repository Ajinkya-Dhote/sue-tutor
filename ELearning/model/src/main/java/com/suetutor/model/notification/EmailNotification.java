package com.suetutor.model.notification;

import lombok.ToString;

@ToString
public class EmailNotification implements Notification {

	private Long mobileNumber;
	private String email;
	String message;
	String subject;

	@Override
	public Long getMobileNumber() {
		return mobileNumber;
	}

	@Override
	public void setMobileNumber(Long mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	@Override
	public String getEmail() {
		return email;
	}

	@Override
	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String getMessage() {
		return message;
	}

	@Override
	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String getSubject() {
		return subject;
	}

	@Override
	public void setSubject(String subject) {
		this.subject = subject;
	}
}
