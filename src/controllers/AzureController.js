const express = require('express');
const AzureService = require('../services/AzureService.js');

const router = express.Router();

router.post('', async (req, res) => {
  const payload = req.body;
  try {
    await AzureService.execute(payload, function (response) {
      res.json(response);
    });
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
