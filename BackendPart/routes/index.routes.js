const express = require('express');
require('../models/user.model');
const router = express.Router();
const ctrlUser = require('../controller/user.controller');

router.get('/test', ctrlUser.test);

router.post('/', ctrlUser.createUser);
module.exports = router;