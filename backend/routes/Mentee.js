const express = require('express');
const { getMentee, getMenteeDetail, getMenteeUpdate, deleteMentee } = require('../controllers/Mentee.js');
const role = require('../middleware/Role.js');
const router = express.Router();

router.get('/getMentee',getMentee)
router.get('/getMenteeDetail/:id', role.isMentee, getMenteeDetail)
router.patch('/getMenteeUpdate/:id', role.isMentee, getMenteeUpdate)

module.exports = router