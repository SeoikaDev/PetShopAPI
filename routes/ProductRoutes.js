const express = require('express');
const router = express.Router()
const ProductController = require('../controllers/ProductController')

//Get all route

router.get('/products', ProductController.getProducts)

module.exports = {
    "router": router
}