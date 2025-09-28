const express = require('express');
const engineService = require('../services/EngineService.js');
const { OllamaLLM } = require('../services/OllamaService.js');

const router = express.Router();
const llm = new OllamaLLM({ model: 'llama3' });

router.post('', async (req, res) => {
  try {
    await engineService.execute(req.body, (response) => {
      res.status(200).json(response);
    });
  } catch (e) {
    res.status(400).send(e.message || e);
  }
});

router.get('/ollama', async (req, res) => {
  const result = await llm.invoke("Is 'Dr.' an abbreviation?");
  res.send(result.trim());
});

module.exports = router;
