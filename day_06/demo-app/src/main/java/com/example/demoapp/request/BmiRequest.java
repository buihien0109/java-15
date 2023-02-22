package com.example.demoapp.request;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class BmiRequest {
    private Double weight;
    private Double height;
}
