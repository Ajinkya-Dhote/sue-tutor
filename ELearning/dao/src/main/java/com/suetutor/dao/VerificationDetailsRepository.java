package com.suetutor.dao;

import com.suetutor.model.VerificationDetails;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface VerificationDetailsRepository extends CrudRepository<VerificationDetails, Long> {
    List<VerificationDetails> findAllByOtp(String otp);
}
