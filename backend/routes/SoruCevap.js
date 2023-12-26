const express = require('express');
const router = express.Router();
const soruController = require('../controllers/SoruCevap');

router.post('/sorular', soruController.createSoru);
router.get('/sorular', soruController.getSorular);
router.get('/sorular/:id', soruController.soruGetirById);
router.put('/sorular/:id', soruController.soruGuncelle);
router.delete('/sorular/:id', soruController.soruSil);

module.exports = router;