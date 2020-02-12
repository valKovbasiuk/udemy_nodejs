const express = require('express');

const app = express();

app.use('/users', (req, resp, next) => {
    console.log('get request');
    next();
});

app.use('/users', (req, resp, next) => {
    resp.send('<p>Hello, users!</p>');
});

app.use('/', (req, resp, next) => {
    resp.send('<p>this is not users page!</p>');
    next();
});

app.use('/', (req, resp, next) => {
    console.log('came to not users page!');
});

app.listen(3000);