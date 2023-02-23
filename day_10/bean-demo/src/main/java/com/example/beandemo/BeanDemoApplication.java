package com.example.beandemo;

import com.example.beandemo.model.User;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;

import java.util.Random;

// Bean là gì? Spring IOC container
// 1. Đánh dấu lên class (@Component, @Controller, @RestController, @Service, ...)
// 2. Đánh dấu lên method (@Bean)
@SpringBootApplication
public class BeanDemoApplication {

    @Bean
    public Random random() {
        return new Random();
    }

    @Bean("user1")
    public User user() {
        return new User("hien");
    }

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(BeanDemoApplication.class, args);

        User user = context.getBean("user", User.class);
        System.out.println(user.getName());
        user.sayHello();
        user.randomNumber();
        user.showVehicle();

        Random rd = context.getBean(Random.class);
        System.out.println(rd.nextInt(1000));
    }

}
