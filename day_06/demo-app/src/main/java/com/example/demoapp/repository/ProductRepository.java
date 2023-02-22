package com.example.demoapp.repository;

import com.example.demoapp.db.ProductDB;
import com.example.demoapp.model.Product;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ProductRepository {
    public List<Product> findAll() {
        return ProductDB.products;
    }

    public List<Product> findByBrandIngoreCase(String brand) {
        return ProductDB.products.stream()
                .filter(product -> product.getBrand().equalsIgnoreCase(brand))
                .toList();
    }

    // Tìm kiếm các sản phẩm có giá > ?
    public List<Product> findByPriceGreater(Integer price) {
        return null;
    }

    // Tìm kiếm các sản phẩm có chứa trong tên (không phân biệt hoa thường)
    public List<Product> findByNameContainsIngoreCase(String name) {
        return null;
    }

    // Lưu sản phẩm vào DB
    public Product save(Product product) {
        return null;
    }

    // Xóa sản phẩm
    public void delete(Product product) {

    }

    // Xóa sản phẩm theo ID
    public void deleteById(Integer id) {

    }
}
