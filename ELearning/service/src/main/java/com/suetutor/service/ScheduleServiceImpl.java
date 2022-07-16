package com.suetutor.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.suetutor.dao.ScheduleRepository;
import com.suetutor.model.Schedule;

@Service
public class ScheduleServiceImpl implements ScheduleService {

	@Autowired
	private ScheduleRepository repo;

	@Override
	public void save(Schedule schedule) {
		repo.save(schedule);
	}

	@Override
	public List<Schedule> getAll() {
		return (List<Schedule>) repo.findAll();
	}

	@Override
	public List<Schedule> getAllForTeacher(Long teacherId) {
		return (List<Schedule>) repo.findByTeacherId(teacherId);
	}

	@Override
	public List<Schedule> getAllForStudent(Long studentId) {
		return (List<Schedule>) repo.findByStudentId(studentId);
	}

	@Override
	public void update(Schedule schedule) {
		repo.save(schedule);
	}

	@Override
	public void delete(List<Long> schedules) {
		repo.deleteAllById(schedules);
	}
}
