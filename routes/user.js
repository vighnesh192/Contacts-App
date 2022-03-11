const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');

router.get('/signup', (req, res) => {
    res.sendFile(process.cwd() + '/public/signup.html');
})

router.get('/signup.html', (req, res) => {
    res.sendFile(process.cwd() + '/public/signup.html');
})

router.get('/signin.html', (req, res) => {
    res.sendFile(process.cwd() + '/public/signin.html');
})

router.post('/signup', registerUser);
router.post('/signin', loginUser);

module.exports = router;