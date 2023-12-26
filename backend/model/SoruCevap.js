const mongoose = require('mongoose');

const soruSchema = new mongoose.Schema({
  soru: { type: String, required: true },
  ID: { type: String, required: true, unique: true },
  cevap: { type: String },
  tarih: { type: Date, default: Date.now },
});

const Soru = mongoose.model('Soru', soruSchema);

module.exports = Soru;