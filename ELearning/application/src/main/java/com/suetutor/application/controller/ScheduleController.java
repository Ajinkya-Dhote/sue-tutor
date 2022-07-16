package com.suetutor.application.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.suetutor.model.Schedule;
import com.suetutor.service.ScheduleService;

@RestController
@RequestMapping("/schedule")
public class ScheduleController {

	@Autowired
	private ScheduleService service;

	@GetMapping("/all")
	public List<Schedule> getAll() {
		return service.getAll();
	}

	@GetMapping("/teacher/{id}")
	public List<Schedule> getAllForTeacher(@PathVariable("id") Long id) {
		return service.getAllForTeacher(id);
	}

	@GetMapping("/student/{id}")
	public List<Schedule> getAllForStudent(@PathVariable("id") Long id) {
		return service.getAllForStudent(id);
	}

	@PostMapping
	public ResponseEntity<?> create(@RequestBody Schedule schedule) {
		service.save(schedule);
		return ResponseEntity.ok().build();
	}

	@PutMapping
	public ResponseEntity<?> update(@RequestBody Schedule schedule) {
		service.update(schedule);
		return ResponseEntity.ok().build();
	}

	@DeleteMapping
	public ResponseEntity<?> delete(@RequestBody List<Long> schedules) {
		service.delete(schedules);
		return ResponseEntity.ok().build();
	}
}
