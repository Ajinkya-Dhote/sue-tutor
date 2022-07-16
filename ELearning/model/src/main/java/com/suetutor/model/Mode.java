package com.suetutor.model;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
public enum Mode {
	ONLINE("Online"),
	OFFLINE("Offline");

	@Getter private String value;
}
