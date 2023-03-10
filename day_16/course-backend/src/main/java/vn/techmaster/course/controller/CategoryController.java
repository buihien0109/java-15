package vn.techmaster.course.controller;

import vn.techmaster.course.model.Category;
import vn.techmaster.course.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/categories")
@RequiredArgsConstructor
public class CategoryController {
    private final CategoryService categoryService;

    @GetMapping("")
    public List<Category> getAllCategory() {
        return categoryService.getAllCategory();
    }
}
