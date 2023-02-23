package com.example.demoapp;

import com.example.demoapp.db.FileUtils;
import com.example.demoapp.db.ProductDB;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoAppApplication implements CommandLineRunner {

    @Autowired
    private FileUtils fileUtils;

    public static void main(String[] args) {
        SpringApplication.run(DemoAppApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        ProductDB.products = fileUtils.readFile("product.csv");

        ProductDB.products.forEach(System.out::println);
    }
}
