package com.suetutor.service;

import java.util.List;

import com.suetutor.model.Schedule;

public interface ScheduleService {

	void save(Schedule schedule);

	void update(Schedule schedule);

	void delete(List<Long> schedules);

	List<Schedule> getAll();

	List<Schedule> getAllForTeacher(Long teacherId);

	List<Schedule> getAllForStudent(Long studentId);

}
