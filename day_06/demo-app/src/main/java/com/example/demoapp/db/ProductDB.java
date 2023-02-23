package com.example.demoapp.db;

import com.example.demoapp.model.Product;
import com.opencsv.CSVReader;
import com.opencsv.CSVReaderBuilder;
import com.opencsv.exceptions.CsvValidationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Component;

import java.io.*;
import java.util.ArrayList;
import java.util.List;

public class ProductDB {

//    public static List<Product> products = new ArrayList<>(List.of(
//            new Product(1, "Iphone 13 Pro max", 30_000_000, "Apple", 1),
//            new Product(2, "Samsung s23 ultra", 41_000_000, "Samsung", 2),
//            new Product(3, "Iphone 11", 11_000_000, "Apple", 1),
//            new Product(4, "Oppo findX3 pro", 19_000_000, "Oppo", 3)
//    ));

    public static List<Product> products;
}
