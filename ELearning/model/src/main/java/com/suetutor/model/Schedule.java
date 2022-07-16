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
@Entity(name = "SCHEDULE")
public class Schedule {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID", nullable = false, updatable = false)
	private Long id;

	@Column(name = "TEACHER_ID")
	private long teacherId;

	@Column(name = "STUDENT_ID")
	private long studentId;

	@Column(name = "COURSE_ID")
	private long courseId;

	@Column(name = "TIMING")
	private long time;

	@Column(name = "MODE")
	@Enumerated(EnumType.STRING)
	private Mode mode;
}
