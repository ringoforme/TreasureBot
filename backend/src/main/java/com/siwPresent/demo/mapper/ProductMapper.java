package com.siwPresent.demo.mapper;

import com.siwPresent.demo.domain.Product;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Select;


import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface ProductMapper {
    @Select("SELECT * FROM products")
    List<Product> findAll();

    @Select("SELECT * FROM products WHERE product_id = #{id}")
    Product findById(int id);

    @Insert("INSERT INTO products(name, price, rating, description) VALUES(#{name}, #{price}, #{rating}, #{description})")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    void insert(Product product);

    @Update("UPDATE products SET name=#{name}, price=#{price}, rating=#{rating}, description=#{description} WHERE product_id=#{id}")
    void update(Product product);

    @Delete("DELETE FROM products WHERE product_id = #{id}")
    void delete(int id);
}

