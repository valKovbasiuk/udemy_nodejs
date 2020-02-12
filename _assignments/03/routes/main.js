const express = require('express');
const path = require('path');
const router = express.Router();
const rootdir = require('../utils/rootdir');

router.get('/', (req, resp, next) => {
  resp.sendFile(path.join(rootdir, 'view', 'users.html'));
})

module.exports = router;