package com.example.demoapp.request;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CreateTodoRequest {
    @NotEmpty(message = "title không được để trống")
    private String title;

    @NotEmpty(message = "level không được để trống")
    private String level;
}
