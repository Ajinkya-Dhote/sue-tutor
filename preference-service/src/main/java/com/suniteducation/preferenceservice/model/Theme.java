package com.suniteducation.preferenceservice.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Theme {
	
	private String name;
	private String color;
	private String brightness;
	
	@Override
	public String toString() {
		return "{\"name\":\"" + name + "\", \"color\":\"" + color + "\", \"brightness\":\"" + brightness + "\"}\n";
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}
	public String getBrightness() {
		return brightness;
	}
	public void setBrightness(String brightness) {
		this.brightness = brightness;
	}

}
