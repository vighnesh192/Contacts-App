const express = require("express");
const dotenv = require('dotenv').config()
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose')

const conn = mongoose.connect(process.env.MONGO_URI)
    .then((res) => {
        console.log(`MongoDB Connected`)
    })
    .catch((err) => console.log('MONGODB CONNECTION ERROR:-', err))

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(cors());

app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/public/signup.html');
})

app.use('/user', require('./routes/user'));
app.use('/contact', require('./routes/contact'));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})