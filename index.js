const express = require("express");
const dotenv = require('dotenv').config()
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db')

connectDB();

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

app.listen(process.env.PORT || 3000, () => {
    console.log('Server running on port 3000');
})