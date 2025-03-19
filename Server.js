const express = require("express");
const productRoute = require('./Source/routes/product.route.js');

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

// Export the app
module.exports = app;
