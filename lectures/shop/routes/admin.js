const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

router.get('/add-product', (req, resp, next) => {
    resp.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
    products.push({title: req.body.title});
    // console.log(product);
    res.redirect('/');
})

router.get('/', (req, resp, next) => {
    resp.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

exports.router = router;
exports.products = products;