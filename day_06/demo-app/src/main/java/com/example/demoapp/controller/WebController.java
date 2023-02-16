package com.example.demoapp.controller;

import com.example.demoapp.request.CreatePostRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
public class WebController {
    // GET, POST, PUT, DELETE
    // http status : 1x, 2x, 3x, 4x, 5x
    @RequestMapping(method = RequestMethod.GET, path = "/")
    public String getHome() {
        return "home";
    }

    @GetMapping(value = "/blogs", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.CREATED)
    public String getBlog() {
        return "blog";
    }

    // Chi tiết 1 blog : /blogs/1, /blogs/2
    @GetMapping(value = "/blogs/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    public String getBlogById(@PathVariable String id) {
        return "blogId = " + id;
    }

    // Lọc dữ liệu : queryString
    // /posts?title=sach&year=2019
    @GetMapping(value = "/posts", produces = MediaType.APPLICATION_JSON_VALUE)
    public String getPosts(@RequestParam(required = false) String title,
                           @RequestParam(required = false) Integer year) {
        return "title = " + title + " - " + "year = " + year;
    }

    // Tạo mới bài viết : id, title, author
    @PostMapping(value = "/posts", produces = MediaType.APPLICATION_JSON_VALUE)
    public String createPost(@RequestBody CreatePostRequest request) {
        return String.format("ID : %d - Title : %s - Author : %s", request.getId(), request.getTitle(), request.getAuthor());
    }
}
