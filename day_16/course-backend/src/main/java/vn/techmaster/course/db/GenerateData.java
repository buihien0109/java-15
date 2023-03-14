package vn.techmaster.course.db;

import vn.techmaster.course.model.Category;
import vn.techmaster.course.model.Course;
import vn.techmaster.course.model.User;
import com.github.javafaker.Faker;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

// Dùng để tạo dữ liệu cho ứng dụng
// Sử dụng Java Faker để fake dữ liệu
@Component
@RequiredArgsConstructor
public class GenerateData {
    private final Faker faker;

    // Tạo ngẫu nhiên danh sách user
    public List<User> initUsers() {
        List<User> users = new ArrayList<>();
        for (int i = 1; i < 4; i++) {
            User user = new User(
                    i,
                    faker.name().fullName(),
                    faker.internet().emailAddress(),
                    faker.phoneNumber().phoneNumber(),
                    faker.company().logo());
            users.add(user);
        }
        return users;
    }

    // Tạo ngẫu nhiên danh sách khóa học
    public List<Course> initCourses(List<User> users) {
        List<Course> courses = new ArrayList<>();

        Random rd = new Random();
        List<Category> categories = CategoryDB.categories;

        for (int i = 1; i < 21; i++) {
            // Random topic
            List<Category> rdCategories = new ArrayList<>();
            for (int j = 0; j < 3; j++) {
                Category rdCategory = categories.get(rd.nextInt(categories.size()));
                if (!rdCategories.contains(rdCategory)) {
                    rdCategories.add(rdCategory);
                }
            }

            // Random user
            User rdUser = users.get(rd.nextInt(users.size()));

            // Tạo khóa học
            Course course = new Course(
                    i,
                    faker.funnyName().name(),
                    faker.lorem().sentence(20),
                    rd.nextInt(2) == 1 ? "online" : "onlab",
                    rdCategories,
                    faker.company().logo(),
                    faker.number().numberBetween(1_000_000, 5_000_000),
                    (double) faker.number().randomDouble(1,3, 5),
                    rdUser.getId()
            );

            courses.add(course);
        }

        return courses;
    }
}
