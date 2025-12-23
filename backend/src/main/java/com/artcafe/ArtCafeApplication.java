package com.artcafe;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ArtCafeApplication {

    public static void main(String[] args) {
        SpringApplication.run(ArtCafeApplication.class, args);
        System.out.println("🎨 ArtCafe Backend is running on http://localhost:8080");
    }
}
