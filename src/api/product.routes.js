// src/api/product.routes.js
const express = require('express');
const ProductAppService = require('../application/product/product.app-service');

const router = express.Router();
const appService = new ProductAppService();

router.post('/', async (req, res) => {
  const { name, description, price } = req.body;
  try {
    const product = await appService.createProduct(name, description, price);
    res.status(201).send(product); // Send the product object
  } catch (error) {
    res.status(500).send({ error: error.message }); //send error message.
  }
});

router.get('/', async (req, res) => {
  try {
    const products = await appService.getAllProducts();
    res.send(products);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const product = await appService.getProduct(req.params.id);
    if (product) {
      res.send(product);
    } else {
      res.status(404).send('Product not found');
    }
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

router.put('/:id', async (req, res) => {
  const { name, description, price } = req.body;
  try{
    const product = await appService.updateProduct(req.params.id, name, description, price);
    res.send(product);
  } catch (error) {
    res.status(500).send({error: error.message});
  }
});

router.delete('/:id', async (req, res) => {
  try{
    await appService.deleteProduct(req.params.id);
    res.send('Item deleted');
  } catch (error) {
    res.status(500).send({error: error.message});
  }
});

module.exports = router;