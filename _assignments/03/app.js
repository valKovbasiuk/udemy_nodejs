const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');

const rootdir = require('./utils/rootdir');
const users = require('./routes/main');

const app = express();

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static(path.join(rootdir, 'public')));

app.use('/users', users);
app.use('/', (req,resp,next)=> {
  resp.sendFile(path.join(rootdir, 'view','index.html'));
})

app.listen(3000);