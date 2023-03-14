package vn.techmaster.course.dto.mapper;

import vn.techmaster.course.dto.CourseDto;
import vn.techmaster.course.exception.NotFoundException;
import vn.techmaster.course.model.Course;
import vn.techmaster.course.model.User;
import vn.techmaster.course.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class CourseMapper {
    private final UserRepository userRepository;

    public CourseDto toCourseDto(Course course) {
        User user = userRepository.findById(course.getUserId())
                .orElseThrow(() -> {
                    throw new NotFoundException("Not found user");
                });

        return CourseDto.builder()
                .id(course.getId())
                .name(course.getName())
                .description(course.getDescription())
                .type(course.getType())
                .categories(course.getCategories())
                .thumbnail(course.getThumbnail())
                .price(course.getPrice())
                .rating(course.getRating())
                .user(user)
                .build();
    }
}
