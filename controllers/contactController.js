const Contact = require('../models/contactModel')

const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find({ user: req.user.id })
        res.json(contacts)
    } catch (error) {
        res.status(400).json({error})
    }
}

const postContact = async (req, res) => {
    try {
        const contact = await Contact.create({...req.body, user: req.user.id});
        res.json(contact)
    } catch (error) {
        console.log("POST CONTACT ERROR:- ", error);
        res.status(400).json({error})
    }
}

module.exports = { postContact, getContacts }