package com.suetutor.application.jwtConfig;

import java.util.ArrayList;
import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.suetutor.service.UserService;

@Service
public class JwtUserDetailsService implements UserDetailsService {

	@Autowired
	UserService userService;

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		com.suetutor.model.User user = userService.fetchByUsername(username);
		if (Objects.isNull(user)) {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
		if (username.equals(user.getUsername())) {
			return new User(user.getUsername(), new BCryptPasswordEncoder().encode(user.getPassword()), new ArrayList<>());
		} else {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
	}
}