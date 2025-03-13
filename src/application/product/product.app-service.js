// src/application/product/product.app-service.js
const Product = require('../../domain/product/product.entity');
const ProductService = require('../../domain/product/product.service');
const FirestoreProductRepository = require('../../infrastructure/persistence/firestore-product.repository');

class ProductAppService {
  constructor() {
    this.productRepository = new FirestoreProductRepository();
    this.productService = new ProductService();
  }

  async createProduct(name, description, price) {
    const validPrice = this.productService.validatePrice(price);
    const product = new Product(null, name, description, validPrice);
    return this.productRepository.save(product);
  }

  async getProduct(id) {
    return this.productRepository.getById(id);
  }

  async getAllProducts() {
    return this.productRepository.getAll();
  }

  async updateProduct(id, name, description, price) {
    const validPrice = this.productService.validatePrice(price);
    const product = new Product(id, name, description, validPrice);
    return this.productRepository.save(product);
  }

  async deleteProduct(id) {
    return this.productRepository.delete(id);
  }
}

module.exports = ProductAppService;