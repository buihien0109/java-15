package vn.techmaster.course.repository;

import vn.techmaster.course.db.CourseDB;
import vn.techmaster.course.model.Course;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class CourseRepository {
    public List<Course> findAll() {
        return CourseDB.courses;
    }

    public Optional<Course> findById(Integer id) {
        return CourseDB.courses.stream()
                .filter(course -> course.getId().equals(id))
                .findFirst();
    }
}
