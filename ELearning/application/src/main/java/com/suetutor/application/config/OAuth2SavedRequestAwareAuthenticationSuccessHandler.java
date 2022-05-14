package com.suetutor.application.config;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

@Component
public class OAuth2SavedRequestAwareAuthenticationSuccessHandler extends SavedRequestAwareAuthenticationSuccessHandler {

	private static final Logger LOGGER = LoggerFactory.getLogger(OAuth2SavedRequestAwareAuthenticationSuccessHandler.class);

	@Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
            Authentication authentication) throws IOException, ServletException {
		LOGGER.info("Login with Social sites, onAuthenticationSuccess()");
        super.onAuthenticationSuccess(request, response, authentication);
    }
}
