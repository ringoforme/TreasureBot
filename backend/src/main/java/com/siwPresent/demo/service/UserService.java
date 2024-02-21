package com.siwPresent.demo.service;


import com.siwPresent.demo.domain.User;
import com.siwPresent.demo.mapper.UserMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserService{
    @Autowired
    private final UserMapper userMapper;

    public UserService(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

    public void registerUser (User user) {
        //验证
        //加密
        userMapper.insertUser(user);
    }

    public User getUserByEmail(String email) {
        return userMapper.findByEmail(email);
    }

    public boolean emailExist(String email) 
    {
        return userMapper.findByEmail(email) != null;
    }

    public boolean validateLogin(String email, String password){
        User user = userMapper.findByEmail(email);
        if (user != null&& user.getPassword().equals(password)){
            //加密
            return true;
        }
        return false;
    }
}