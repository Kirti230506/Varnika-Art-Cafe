package com.artcafe.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.artcafe.entity.Booking;

public interface BookingRepository extends JpaRepository<Booking, Long> {}