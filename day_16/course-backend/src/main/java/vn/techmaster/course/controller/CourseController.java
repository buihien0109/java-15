package vn.techmaster.course.controller;

import vn.techmaster.course.dto.CourseDto;
import vn.techmaster.course.model.Course;
import vn.techmaster.course.service.CourseService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/courses")
@RequiredArgsConstructor
@Slf4j
public class CourseController {
    private final CourseService courseService;

    // 1. Lấy danh sách course (có lọc course theo name, category type)
    @GetMapping("")
    public List<Course> getAllCourse(@RequestParam(required = false) String name,
                                     @RequestParam(required = false) String category,
                                     @RequestParam(required = false) String type) {
        log.info("name : {}, category : {}, type : {}", name, category, type);
        return courseService.getAllCourse(type, name, category);
    }

    // 2. Tìm kiếm course theo id
    @GetMapping("{id}")
    public CourseDto getCourseById(@PathVariable Integer id) {
        return courseService.getCourseById(id);
    }
}
