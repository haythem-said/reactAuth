var express = require('express');
const { Register } = require('../controllers/register.controller');
var router = express.Router();


router.post('/register',Register);

module.exports = router;
