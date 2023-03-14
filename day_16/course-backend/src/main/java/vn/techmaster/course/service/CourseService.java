package vn.techmaster.course.service;

import vn.techmaster.course.dto.CourseDto;
import vn.techmaster.course.dto.mapper.CourseMapper;
import vn.techmaster.course.exception.NotFoundException;
import vn.techmaster.course.model.Course;
import vn.techmaster.course.repository.CourseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CourseService {
    private final CourseRepository courseRepository;
    private final CourseMapper courseMapper;

    // 1. Lấy danh sách course
    public List<Course> getAllCourse(String type, String name, String category) {
        return courseRepository.findAll()
                .stream()
                .filter(course -> (type == null || course.getType().equals(type))
                        && (name == null || course.getName().toLowerCase().contains(name.toLowerCase()))
                        && (category == null || course.getCategories().stream().anyMatch(c -> c.getName().equals(category))))
                .toList();
    }

    // 2. Lấy chi tiết course
    public CourseDto getCourseById(Integer id) {
        Course course = courseRepository.findById(id)
                .orElseThrow(() -> {
                    throw new NotFoundException("Not found course with id = " + id);
                });

        return courseMapper.toCourseDto(course);
    }
}
