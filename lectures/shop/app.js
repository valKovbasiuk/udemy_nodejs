const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');

const app = express();

const shopRoutes = require('./routes/shop');
const adminData = require('./routes/admin');
const rootDir = require('./util/path');


app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static(path.join(rootDir, 'public')));

app.use('/admin', adminData.router);
app.use(shopRoutes);

app.use((req, resp, next) => {
    resp.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(3000);