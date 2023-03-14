package vn.techmaster.course.repository;

import vn.techmaster.course.db.CategoryDB;
import vn.techmaster.course.model.Category;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CategoryRepository {
    public List<Category> findAll() {
        return CategoryDB.categories;
    }
}
