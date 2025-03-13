// src/domain/product/product.value-objects.js
class Price {
    constructor(value) {
      if (value < 0) {
        throw new Error('Price cannot be negative');
      }
      this.value = value;
    }
  }
  
  module.exports = { Price };