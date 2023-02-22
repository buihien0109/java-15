package com.example.demoapp.controller;

import com.example.demoapp.model.Product;
import com.example.demoapp.service.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api")
@AllArgsConstructor
public class ProductController {
    private final ProductService productService;


    @GetMapping("products")
    public List<Product> getAllProduct() {
        return productService.getAllProduct();
    }

    @GetMapping("products/total-money")
    public Integer getTotalMoney() {
        return productService.getTotalMoney();
    }

    // api/products/brand?name=apple
    @GetMapping("products/brand")
    public List<Product> findByBrand(@RequestParam String name) {
        return productService.findByBrand(name);
    }
}
