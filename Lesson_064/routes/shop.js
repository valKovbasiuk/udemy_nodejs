const express = require('express');
const path = require('path');

const router = express.Router();
const rootDir = require('../util/path');

router.get('/', (req, resp, next) => {
    resp.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;