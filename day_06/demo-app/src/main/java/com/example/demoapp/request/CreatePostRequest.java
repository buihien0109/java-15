package com.example.demoapp.request;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class CreatePostRequest {
    private Integer id;
    private String title;
    private String author;
}
