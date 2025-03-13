// src/domain/product/product.service.js
const { Price } = require('./product.value-objects');

class ProductService {
  validatePrice(price) {
    return new Price(price);
  }
}

module.exports = ProductService;