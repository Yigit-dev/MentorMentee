const Soru = require('../models/SoruCevap');

async function createSoru(req, res) {
  try {
    const yeniSoru = new Soru(req.body);
    const kaydedilenSoru = await yeniSoru.save();
    res.status(201).json(kaydedilenSoru);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getSorular(req, res) {
  try {
    const tumSorular = await Soru.find();
    res.json(tumSorular);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function soruGetirById(req, res) {
  try {
    const bulunanSoru = await Soru.findById(req.params.id);
    if (!bulunanSoru) {
      return res.status(404).json({ message: 'Soru bulunamadı' });
    }
    res.json(bulunanSoru);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function soruGuncelle(req, res) {
  try {
    const guncellenmisSoru = await Soru.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    if (!guncellenmisSoru) {
      return res.status(404).json({ message: 'Soru bulunamadı' });
    }
    res.json(guncellenmisSoru);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function soruSil(req, res) {
  try {
    const silinenSoru = await Soru.findByIdAndRemove(req.params.id);
    if (!silinenSoru) {
      return res.status(404).json({ message: 'Soru bulunamadı' });
    }
    res.json(silinenSoru);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
    createSoru,
    getSorular,
  soruGetirById,
  soruGuncelle,
  soruSil,
};