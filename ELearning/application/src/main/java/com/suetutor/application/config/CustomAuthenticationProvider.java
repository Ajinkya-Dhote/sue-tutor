/**
 * 
 */
package com.suetutor.application.config;

import java.util.Collection;
import java.util.Collections;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

import com.suetutor.model.User;
import com.suetutor.service.UserService;

/**
 * @author VISHAL KANGANE.
 *
 */
@Component
public class CustomAuthenticationProvider implements AuthenticationProvider {

	private static final Logger LOGGER = LoggerFactory.getLogger(CustomAuthenticationProvider.class);

	@Autowired
	private UserService service;

	@Override
	public Authentication authenticate(Authentication authentication) throws AuthenticationException {
		LOGGER.info("authenticate({})", authentication.getName());
		User user = new User();
		user.setUsername(authentication.getName());
		user.setPassword(authentication.getCredentials() + "");
		if (!service.authenticate(user)) {
			throw new BadCredentialsException("Either username or password not matched.");
		}
		Collection<? extends GrantedAuthority> authorities = Collections.singleton(new SimpleGrantedAuthority("ROLE_USER"));
		UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(user, authentication.getCredentials(), authorities);
		SecurityContextHolder.getContext().setAuthentication(authenticationToken);
		return authenticationToken;
	}

	@Override
	public boolean supports(Class<?> authentication) {
		return UsernamePasswordAuthenticationToken.class.equals(authentication);
	}

}
