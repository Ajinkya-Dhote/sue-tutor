package com.suniteducation.preferenceservice.service;

import java.io.IOException;
import java.io.InputStream;

import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.suniteducation.preferenceservice.model.GlobalPreference;
import com.suniteducation.preferenceservice.model.Theme;

@Service
public class GlobalpreferenceServiceImpl implements GlobalpreferenceService {

	@Override
	public GlobalPreference getGloablPreference() {

		Theme[] themes;
		try (InputStream in = Thread.currentThread().getContextClassLoader()
				.getResourceAsStream("global/theme-preference.json")

		) {
			ObjectMapper mapper = new ObjectMapper();
			mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);

			themes = mapper.readValue(in, Theme[].class);
			GlobalPreference gPref = new GlobalPreference();
			gPref.setTheme(themes);
			System.out.println(gPref.toString());
			return gPref;
		} catch (IOException ex) {
			System.out.println(ex);
		}
		return null;

	}

}