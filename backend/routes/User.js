const express = require('express');
const {createUser,getUser} = require('../controller/User.js');
const router = express.Router();

router.post('/createUser', createUser);
router.get('/getUser/:id', getUser);
router.delete('/deleteUser/:id', deleteUser)

module.exports = router;