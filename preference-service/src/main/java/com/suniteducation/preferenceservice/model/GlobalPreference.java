package com.suniteducation.preferenceservice.model;

import java.util.Arrays;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@ToString
@NoArgsConstructor
public class GlobalPreference {
	private Theme[] theme;

	@Override
	public String toString() {
		return "{\"theme\":\"" + Arrays.toString(theme) + "\"}\n";
	}

	public Theme[] getTheme() {
		return theme;
	}

	public void setTheme(Theme[] theme) {
		this.theme = theme;
	}
}
