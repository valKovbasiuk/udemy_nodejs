const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, resp, next) => {
    resp.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
});

module.exports = router;