package com.suniteducation.preferenceservice.service;

import java.io.IOException;
import java.io.InputStream;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.suniteducation.preferenceservice.model.GlobalPreference;
import com.suniteducation.preferenceservice.model.Theme;

@Service
public class GlobalpreferenceServiceImpl implements GlobalpreferenceService {
	Logger logger = LoggerFactory.getLogger(GlobalpreferenceServiceImpl.class);

	@Override
	public GlobalPreference getGloablPreference() {

		GlobalPreference gPref = new GlobalPreference();
		try (InputStream in = Thread.currentThread().getContextClassLoader()
				.getResourceAsStream("global/theme-preference.json")

		) {
			ObjectMapper mapper = new ObjectMapper();
			mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
			Theme[] themes;
			themes = mapper.readValue(in, Theme[].class);
			gPref.setTheme(themes);
		} catch (IOException ex) {
			logger.error("Error in GlobalPreferenceServiceImpl: ", ex);
		}
		return gPref;

	}

}
