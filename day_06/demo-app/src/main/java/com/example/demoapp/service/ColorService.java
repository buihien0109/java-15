package com.example.demoapp.service;

import com.example.demoapp.dto.UserDto;
import com.example.demoapp.exception.BadRequestException;
import com.example.demoapp.mapper.UserMapper;
import com.example.demoapp.model.User;
import com.example.demoapp.request.LoginRequest;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Random;

@Service
public class ColorService {
    public String randomColor(Integer type) {
        return switch (type) { // switch Expression
            case 1 -> randomColorName();
            case 2 -> randomHexColor();
            case 3 -> randomRgbColor();
            default -> throw new BadRequestException("type không hợp lệ");
        };
    }

    private String randomRgbColor() {
        Random rd = new Random();
        int r = rd.nextInt(256);
        int g = rd.nextInt(256);
        int b = rd.nextInt(256);
        return String.format("rgb(%d, %d, %d)", r, g, b);
    }

    private String randomHexColor() {
        Random random = new Random();
        String hex = "#";
        for (int i = 0; i < 6; i++) {
            hex += Integer.toHexString(random.nextInt(16));
        }
        return hex;
    }

    private String randomColorName() {
        List<String> colors = new ArrayList<>(List.of("black", "blue", "red", "green"));
        Random rd = new Random();
        return colors.get(rd.nextInt(colors.size()));
    }

    public Double calculate(Double weight, Double height) {
        if (weight <= 0 || height <= 0) {
            throw new BadRequestException("Cân nặng hoặc chiều cao phải > 0");
        }
        return weight / (height * 2);
    }

    // Danh sách user
    private final List<User> users = new ArrayList<>(List.of(
            new User(1, "a", "a@gmail.com", "111", "avatar1"),
            new User(2, "b", "b@gmail.com", "111", "avatar2"),
            new User(3, "c", "c@gmail.com", "111", "avatar3")
    ));

    // Xử lý login
    public UserDto login(LoginRequest request) {
        ModelMapper modelMapper = new ModelMapper();

        Optional<User> userOptional = users.stream()
                .filter(user -> user.getUsername().equals(request.getUsername())
                        && user.getPassword().equals(request.getPassword()))
                .findFirst();

        if(userOptional.isPresent()) {
            User user = userOptional.get();
            return modelMapper.map(user, UserDto.class);
        }
        throw new BadRequestException("username hoặc password chưa chính xác");

//        return users.stream()
//                .filter(user -> user.getUsername().equals(request.getUsername())
//                        && user.getPassword().equals(request.getPassword()))
//                .findFirst()
//                .orElseThrow(() -> {
//                    throw new BadRequestException("username hoặc password chưa chính xác");
//                });
    }
}
