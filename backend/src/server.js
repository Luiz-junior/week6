const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://admin:admin123@ds237713.mlab.com:37713/week6', { useNewUrlParser: true });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./routes'));

app.listen(3000, () => console.log('server running...'));