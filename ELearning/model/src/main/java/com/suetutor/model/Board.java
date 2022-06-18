package com.suetutor.model;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
public enum Board {
	CBSE ("CBSE"),
	ISCE ("ISCE"),
	MAHARASHTRA_BOARD("Maharashtra Board");
	
	@Getter private String value;
}
