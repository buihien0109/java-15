package com.example.demoapp.model;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@ToString
public class Product {
    private Integer id;
    private String name;
    private Integer price;
    private String brand;
    private Integer count;
}
