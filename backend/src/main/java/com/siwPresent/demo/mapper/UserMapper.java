package com.siwPresent.demo.mapper;

import com.siwPresent.demo.domain.User;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;


@Mapper
public interface UserMapper {

    @Insert("INSERT INTO users(email,password) VALUES(#{email}, #{password})")
    void insertUser(User user);

    @Select("SELECT * FROM users where email = #{email} ")
    User findByEmail(String email);

}