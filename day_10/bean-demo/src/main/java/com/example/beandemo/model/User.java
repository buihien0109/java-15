package com.example.beandemo.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import java.util.Random;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Component("user")
public class User {
    private String name;

//    @Autowired
//    @Qualifier("bus")
    private Vehicle vehicle;

//    @Autowired
//    public User( @Qualifier("bike") Vehicle vehicle) {
//        this.vehicle = vehicle;
//    }

    @Autowired
    public void setVehicle(@Qualifier("bus") Vehicle vehicle) {
        this.vehicle = vehicle;
    }

    @Autowired
    private Random random;

    public User(String name) {
        this.name = name;
    }

    public void showVehicle() {
        vehicle.run();
    }

    public void sayHello() {
        System.out.println("Xin chào");
    }

    public void randomNumber() {
        System.out.println("Số random được là : " + random.nextInt(1000));
    }
}
