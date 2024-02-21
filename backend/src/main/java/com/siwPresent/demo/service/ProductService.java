package com.siwPresent.demo.service;

import com.siwPresent.demo.mapper.ProductMapper;
import com.siwPresent.demo.domain.Product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ProductService {
    private final ProductMapper productMapper;

    @Autowired
    public ProductService(ProductMapper productMapper) {
        this.productMapper = productMapper;
    }

    public List<Product> findAll() {
        return productMapper.findAll();
    }

    public Product findById(int id) {
        return productMapper.findById(id);
    }

    @Transactional
    public void createProduct(Product product) {
        productMapper.insert(product);
    }

    @Transactional
    public void updateProduct(Product product) {
        productMapper.update(product);
    }

    @Transactional
    public void deleteProduct(int id) {
        productMapper.delete(id);
    }
}

