const express = require('express');
const router = express.Router();
const ebookCtrl = require('../controllers/ebookCtrl.js');

router.get('/getAllEbooks', (req, res) => {
  res.json(ebookCtrl.getAllEbooks());
});

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

module.exports = router;