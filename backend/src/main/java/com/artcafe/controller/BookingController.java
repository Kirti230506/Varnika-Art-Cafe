package com.artcafe.controller;

import com.artcafe.entity.Booking;
import com.artcafe.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/bookings")
public class BookingController {

    @Autowired
    private BookingRepository repo;

    @PostMapping
    public Booking createBooking(@RequestBody Booking booking) {
        return repo.save(booking);
    }

    @GetMapping
    public List<Booking> getAllBookings() {
        return repo.findAll();
    }
}

