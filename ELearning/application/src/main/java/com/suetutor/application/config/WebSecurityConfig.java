package com.suetutor.application.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import com.suetutor.application.service.CustomDefaultOAuth2UserService;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private CustomDefaultOAuth2UserService oauth2UserService;

    @Autowired
    OAuth2SavedRequestAwareAuthenticationSuccessHandler OAuth2SuccessHandler;

    @Autowired
    DBSavedRequestAwareAuthenticationSuccessHandler DBSuccessHandler;

	@Override
	protected void configure(HttpSecurity httpSecurity) throws Exception {
		httpSecurity.cors()
		.and().authorizeRequests()
		.antMatchers("/", "/user/register", "/register").permitAll()
		.antMatchers("/h2-console/**").permitAll()
		.anyRequest().authenticated()
		.and()
		.formLogin().failureUrl("/login-failed").loginPage("/login").defaultSuccessUrl("/home").successHandler(DBSuccessHandler).permitAll()
		.and().oauth2Login().loginPage("/login/oauth2/**").defaultSuccessUrl("/home").userInfoEndpoint().userService(oauth2UserService)
		.and().successHandler(OAuth2SuccessHandler).permitAll()
		.and()
		.logout().invalidateHttpSession(true).clearAuthentication(true).deleteCookies("JSESSIONID").logoutSuccessUrl("/login").permitAll();
		httpSecurity.csrf().disable();
		httpSecurity.headers().frameOptions().disable();
	}

}
