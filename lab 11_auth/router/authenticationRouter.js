const express = require('express');
const { isLogged } = require('../util/auth');

const { register, registrationPage, login, loginPage, logout } = require('../controller/authenticationController');

const router = express.Router();

// Get registration page
router.get('/register', registrationPage);

router.post('/register/v1/', register);

router.get('/login', isLogged, loginPage);

router.post('/login/v1/', login);

router.get('/logout/', logout);

module.exports = router;