package com.suetutor.model;

import lombok.Data;

@Data
public class Student extends User {
	USerType userType = USerType.STUDENT;
}
