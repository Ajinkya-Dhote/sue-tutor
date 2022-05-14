package com.suetutor.application.service;

import java.util.Date;
import java.util.Map.Entry;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import com.suetutor.application.config.CustomOAuth2User;
import com.suetutor.core.constants.Constants;
import com.suetutor.model.User;
import com.suetutor.service.UserService;


@Service
public class CustomDefaultOAuth2UserService extends DefaultOAuth2UserService {

	private static final Logger LOGGER = LoggerFactory.getLogger(CustomDefaultOAuth2UserService.class);

	@Autowired
	private UserService service;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
    	LOGGER.info("loadUser({}, {})", userRequest.getAccessToken(), userRequest.getClientRegistration().getClientName());
    	OAuth2User user =  super.loadUser(userRequest);
    	LOGGER.info("User details[name: {}, user: {}]", user.getName(), user.getAttribute(Constants.EMAIL));
    	User userDetails = new User();
    	userDetails.setUsername(user.getAttribute(Constants.EMAIL));
    	userDetails.setFirstName(user.getAttribute("given_name"));
    	userDetails.setLastName(user.getAttribute("family_name"));
    	userDetails.setPassword("****");
    	userDetails.setCreatedOn(new Date().getTime());
    	service.save(userDetails);
    	for (Entry<String, Object> entry : user.getAttributes().entrySet()) {
    		LOGGER.info("Key: {}, val: {}", entry.getKey(), entry.getValue());
    	}
        return new CustomOAuth2User(user);
    }

}
