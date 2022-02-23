package com.suniteducation.preferenceservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.suniteducation.preferenceservice.model.GlobalPreference;
import com.suniteducation.preferenceservice.service.GlobalpreferenceService;

@RestController
@RequestMapping("/")
public class PreferenceController {
	
	@Autowired
	GlobalpreferenceService globalPrefService;
	
	@GetMapping
	public GlobalPreference getGlobalPreference() {
		return globalPrefService.getGloablPreference();
	}

}
