package com.suetutor.application;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(basePackages = {"com.suetutor.application", "com.suetutor.service"})
@EntityScan(basePackages = {"com.suetutor.model"})
@EnableJpaRepositories(basePackages = {"com.suetutor.dao"})
public class SUETutorAppliaction {

	private static final Logger LOGGER = LoggerFactory.getLogger(SUETutorAppliaction.class.getClass().getName());
	private static ApplicationContext context;

	public static void main(String[] args) {
		context = SpringApplication.run(SUETutorAppliaction.class, args);
		LOGGER.info("****** Application started successfully ******");
	}

	public static ApplicationContext getContext() {
		return context;
	}

}
