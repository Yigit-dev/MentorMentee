const express = require('express');
const { mentors, mentorDetail, mentorUpdate, mentorDelete, searchMentor } = require('../controllers/Mentor.js');
const role = require('../middleware/Role.js');
const router = express.Router();

router.get('/mentors', role.isMentee, mentors)
router.get('/mentorDetail/:id', role.isMentee, mentorDetail)
router.patch('/mentorUpdate/:id', role.isMentor, mentorUpdate)
router.get('/searchMentor', searchMentor)

module.exports = router