const express = require('express');
const { postContact, getContacts } = require('../controllers/contactController');
const router = express.Router()

const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, postContact);
router.get('/', protect, getContacts);

router.get('/contacts.html', (req, res) => {
    res.sendFile(process.cwd() + '/public/contacts.html');
})

module.exports = router;