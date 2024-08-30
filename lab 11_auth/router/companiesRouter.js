const express = require('express');
const { isAuth } = require('../util/auth');

const { add, companiesPage } = require('../controller/companiesController');

const router = express.Router();

router.post('/v1/', add);

router.get('/', isAuth, companiesPage);



module.exports = router;