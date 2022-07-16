package com.suetutor.dao;

import org.springframework.data.repository.CrudRepository;

import com.suetutor.model.Schedule;

public interface ScheduleRepository extends CrudRepository<Schedule, Long>{

	Iterable<Schedule> findByTeacherId(Long teacherId);

	Iterable<Schedule> findByStudentId(Long studentId);
}
