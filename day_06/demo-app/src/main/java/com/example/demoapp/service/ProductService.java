package com.example.demoapp.service;

import com.example.demoapp.model.Product;
import com.example.demoapp.repository.ProductRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class ProductService {
    private final ProductRepository productRepository;

    public List<Product> getAllProduct() {
        return productRepository.findAll();
    }

    public Integer getTotalMoney() {
        List<Product> products = productRepository.findAll();
        return products.stream()
                .map(product -> product.getPrice() * product.getCount())
                .reduce(0, Integer::sum);
    }

    public List<Product> findByBrand(String name) {
        return productRepository.findByBrandIngoreCase(name);
    }
}
