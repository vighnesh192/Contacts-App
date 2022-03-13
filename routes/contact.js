const express = require('express');
const router = express.Router()
const Contact = require('../models/contactModel')

const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, async (req, res) => {
    try {
        const contact = await Contact.create({...req.body, user: req.user.id});
        res.json(contact)
    } catch (error) {
        console.log("POST CONTACT ERROR:- ", error);
        res.status(400).json({error})
    }
});

router.get('/', protect, async (req, res) => {
    try {
        const contacts = await Contact.find({ user: req.user.id })
        res.json(contacts)
    } catch (error) {
        res.status(400).json({error})
    }
});

router.get('/contacts.html', (req, res) => {
    res.sendFile(process.cwd() + '/public/contacts.html');
})

module.exports = router;