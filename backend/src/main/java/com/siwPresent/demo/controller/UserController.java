package com.siwPresent.demo.controller;

import com.siwPresent.demo.domain.User;
import com.siwPresent.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/signup")
    public ResponseEntity<?> signUp(@RequestBody User user) {
        if(userService.emailExist(user.getEmail())){
            return new ResponseEntity<>("This email is already registered. Please try another email address or ", HttpStatus.BAD_REQUEST);
        }

        userService.registerUser(user);
        return ResponseEntity.ok("User registered successfully");
    }

    // 其他方法
    // @PostMapping("/signup")
    // public ResponseEntity<?> registerUser(@RequestBody User user) {
    //     if()

    // }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        boolean loginSuccess = userService.validateLogin(user.getEmail(), user.getPassword());
        if(loginSuccess){
            return ResponseEntity.ok("Login successful");
        }
        else{
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("INVALID CREDENTIALS");
        }
    }
}
