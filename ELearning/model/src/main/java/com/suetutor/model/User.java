package com.suetutor.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.MappedSuperclass;
import javax.persistence.OneToOne;

import org.hibernate.usertype.UserType;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
@Entity(name = "USERS")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID", nullable = false, updatable = false)
	private Long id;

	@Column(name = "FIRST_NAME", nullable = false)
	private String firstName;
	
	@Column(name = "MIDDLE_NAME")
	private String middleName;

	@Column(name = "LAST_NAME", nullable = false)
	private String lastName;
	
	@Column(name = "AGE")
	private Integer age;
	
	@Column(name = "GENDER")
	@Enumerated(EnumType.STRING)
	private Gender gender;

	@Column(name = "USER_NAME", nullable = false, updatable = false)
	private String username;

	@Column(name = "PASSWORD", nullable = false)
	private String password;


	@Column(name = "CREATED_ON", nullable = false, updatable = false)
	private Long createdOn;

	@Column(name = "MODIFIED_ON")
	private Long modifiedOn;

	@Column(name = "LAST_LOGIN_TIME")
	private Long lastLoginTime;

	@Column(name = "TYPE")
	@Enumerated(EnumType.STRING)
	private Type Type;
	
//	@OneToOne(cascade =  CascadeType.ALL)
//	@JoinColumn(name = "contact_id", referencedColumnName = "id")
//	private Contact contact;
}
