package com.example.demoapp.controller;

import com.example.demoapp.dto.UserDto;
import com.example.demoapp.model.User;
import com.example.demoapp.request.BmiRequest;
import com.example.demoapp.request.LoginRequest;
import com.example.demoapp.service.ColorService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
public class ColorController {
    private final ColorService colorService;

    @GetMapping("/random-color")
    public String randomColor(@RequestParam Integer type) {
        return colorService.randomColor(type);
    }

    @GetMapping("/bmi")
    public Double bmiGet(@RequestParam Double height, @RequestParam Double weight) {
        return colorService.calculate(weight, height);
    }

    @PostMapping("/bmi")
    public Double bmiPost(@RequestBody BmiRequest request) {
        return colorService.calculate(request.getWeight(), request.getHeight());
    }

    @PostMapping("/login")
    public UserDto login(@RequestBody LoginRequest request) {
        return colorService.login(request);
    }
}
