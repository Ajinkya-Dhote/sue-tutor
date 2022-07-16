package com.suetutor.model;

import lombok.Data;
import lombok.ToString;

import javax.persistence.*;

@ToString
@Data
@Entity(name="VERIFICATION_DETAILS")
public class VerificationDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID", nullable = false, updatable = false)
    private Long id;

    @Column(name = "OTP", nullable = false)
    private String otp;

    @Column(name = "SENT_ON", nullable = false, updatable = false)
    private Long sentOn;

    @Column(name = "TARGET", nullable = false, updatable = false)
    private String target;

    @Column(name = "USER_ID", nullable = false, updatable = false)
    private Long userId;

}
