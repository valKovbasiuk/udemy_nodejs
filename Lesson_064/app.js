const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');

const app = express();

const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin');

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, resp, next) => {
    resp.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(3000);