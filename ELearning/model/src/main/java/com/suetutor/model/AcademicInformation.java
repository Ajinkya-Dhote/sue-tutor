package com.suetutor.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
@Entity(name = "ACADEMIC_INFORMATION")
public class AcademicInformation {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id")
	private Long id;
	
	@Column(name = "USER_ID")
	private Long userId;
	
	@Column(name= "qualification")
	@Enumerated(EnumType.STRING)
	private Qualification qualification;
	
	@Column(name= "year")
	private String year;
}
