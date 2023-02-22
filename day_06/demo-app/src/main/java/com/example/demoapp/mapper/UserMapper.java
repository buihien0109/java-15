package com.example.demoapp.mapper;

import com.example.demoapp.dto.UserDto;
import com.example.demoapp.model.User;

public class UserMapper {
    public static UserDto toUserDto(User user) {
        return new UserDto(user.getUsername(), user.getEmail(), user.getAvatar());
    }
}
