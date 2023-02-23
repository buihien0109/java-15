package com.example.beandemo.config;

import com.example.beandemo.model.User;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class WebConfig {
    @Bean("user2")
    public User user() {
        return new User("duy");
    }
}
