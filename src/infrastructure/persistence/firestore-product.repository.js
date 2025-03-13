// src/infrastructure/persistence/firestore-product.repository.js
const ProductRepository = require('../../domain/product/product.repository');
const Product = require('../../domain/product/product.entity');
const { Price } = require('../../domain/product/product.value-objects');
const admin = require('firebase-admin');

class FirestoreProductRepository extends ProductRepository {
  constructor() {
    super();
    this.db = admin.firestore(); // Initialize here, after super()
  }

  async save(product) {
    try {
      const docRef = product.id
        ? this.db.collection('products').doc(product.id)
        : this.db.collection('products').doc();
      await docRef.set({
        name: product.name,
        description: product.description,
        price: product.price.value,
      });
      return new Product(
        docRef.id,
        product.name,
        product.description,
        new Price(product.price.value)
      );
    } catch (error) {
      console.error('Error saving product to Firestore:', error);
      throw error; // Re-throw the error to be caught by the API
    }
  }

  async getById(id) {
    const doc = await this.db.collection('products').doc(id).get();
    if (!doc.exists) return null;
    const data = doc.data();
    return new Product(doc.id, data.name, data.description, new Price(data.price));
  }

  async getAll() {
    const products = [];
    const snapshot = await this.db.collection('products').get();
    snapshot.forEach((doc) => {
      const data = doc.data();
      products.push(new Product(doc.id, data.name, data.description, new Price(data.price)));
    });
    return products;
  }

  async delete(id) {
    await this.db.collection('products').doc(id).delete();
  }
}

module.exports = FirestoreProductRepository;