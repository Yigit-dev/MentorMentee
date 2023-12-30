const express = require('express');
const { getMentors, getMentorDetail, updateMentor, searchMentor } = require('../controllers/Mentor.js');
const role = require('../middleware/Role.js');
const router = express.Router();

router.get('/', role.isMentee, getMentors);
router.get('/detail/:id', role.isMentee, getMentorDetail);
router.patch('/update/:id', role.isMentor, updateMentor);
router.get('/search', searchMentor);

module.exports = router;