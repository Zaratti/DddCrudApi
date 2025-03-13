// index.js
const express = require('express');
const admin = require('firebase-admin');

const serviceAccount = require('./serviceAccountKey.json');
admin.initializeApp({ credential: admin.credential.cert(serviceAccount) });

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);

  // Require and use routes AFTER Firebase initialization
  const productRoutes = require('./src/api/product.routes');
  app.use('/products', productRoutes);
});