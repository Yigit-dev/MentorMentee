const express = require('express');
const { mentees, menteeDetail, menteeUpdate } = require('../controllers/Mentee.js');
const role = require('../middleware/Role.js');
const router = express.Router();

router.get('/', role.isMentor, mentees)
router.get('/detail/:id', role.isMentor, menteeDetail)
router.patch('/update/:id', role.isMentee, menteeUpdate)

module.exports = router