const express = require('express');
const router = express.Router();
const { addEmail } = require('../controllers/emailController');

router.post('/', addEmail);

module.exports = router;
