const express = require('express');
const engineService = require('../services/EngineService.js');

const router = express.Router();

router.post('', async (req, res) => {
  try {
    await engineService.execute(req.body, (response) => {
      res.status(200).json(response);
    });
  } catch (e) {
    res.status(400).send(e.message || e);
  }
});

module.exports = router;
