const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/add-product', (req, resp, next) => {
    resp.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

router.get('/', (req, resp, next) => {
    resp.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

module.exports = router;