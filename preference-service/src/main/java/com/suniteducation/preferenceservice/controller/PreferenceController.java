package com.suniteducation.preferenceservice.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.suniteducation.preferenceservice.model.GlobalPreference;
import com.suniteducation.preferenceservice.service.GlobalpreferenceService;

@RestController
@RequestMapping("/")
public class PreferenceController {
	Logger logger = LoggerFactory.getLogger(PreferenceController.class);
	
	@Autowired
	GlobalpreferenceService globalPrefService;
	
	@GetMapping
	public ResponseEntity<GlobalPreference> getGlobalPreference() {
		logger.info("Getting global preference");
		return ResponseEntity.ok(globalPrefService.getGloablPreference());
	}

}
