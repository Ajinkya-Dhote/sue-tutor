package com.suetutor.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
@Entity(name = "Contact")
public class Contact {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private Long id;
	
	@Column(name = "USER_ID")
	private Long userId;
	
	@Column(name = "EMAIL")
	private String email;
	
	@Column(name = "MOBILE_NUMBER")
	private Long mobileNumber;
	
	@Column(name = "ADDRESS")
	private String address;
	
//	@OneToOne(mappedBy = "contact")
//	private User user;

}