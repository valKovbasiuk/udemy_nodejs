const express = require('express');
const path = require('path');

const router = express.Router();
const rootDir = require('../util/path');
const adminData = require('./admin');

router.get('/', (req, resp, next) => {
    console.log(adminData.products);
    resp.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;