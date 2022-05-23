package com.suetutor.model;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
public enum Grade {
	
	FIRST_GRADE ("1st Grade"),
	SECOND_GRADE ("2nd Grade"),
	THIRD_GRADE ("3rd Grade"),
	FOURTH_GRADE ("4th Grade"),
	FIFTH_GRADE ("5th Grade"),
	SIXTH_GRADE ("6th Grade"),
	SEVENTH_GRADE("7th Grade"),
	EIGHT_GRADE("8th Grade"),
	NINTH_GRADE("9th Grade"),
	TENTH_GRADE("10th Grade");
	
	@Getter private String value;
}
