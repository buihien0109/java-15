package com.example.beandemo.model;

import org.springframework.stereotype.Component;

@Component
public class Bike implements Vehicle {
    @Override
    public void run() {
        System.out.println("Di chuyển bằng xe đạp");
    }
}
