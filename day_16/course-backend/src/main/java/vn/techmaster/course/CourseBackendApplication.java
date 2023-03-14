package vn.techmaster.course;

import com.github.javafaker.Faker;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import vn.techmaster.course.db.CourseDB;
import vn.techmaster.course.db.GenerateData;
import vn.techmaster.course.db.UserDB;

@SpringBootApplication
public class CourseBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(CourseBackendApplication.class, args);
    }

    // Tạo đối tượng Faker sử dụng để fake dữ liệu
    @Bean
    public Faker faker() {
        return new Faker();
    }

    // Sử dụng để khởi tạo dữ liệu ban đầu cho ứng dụng (users, courses)
    @Bean
    public CommandLineRunner commandLineRunner(GenerateData generateData) {
        return (args) -> {
            UserDB.users = generateData.initUsers();
            CourseDB.courses = generateData.initCourses(UserDB.users);
        };
    }
}
