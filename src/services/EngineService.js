const azureService = require('../services/AzureService.js');
const googleVertexService = require('../services/GoogleVertexService.js');
const openAIService = require('../services/OpenAIService.js');

// TODO: implement strategy in the future
const execute = async (req, callback) => {
  let engine;
  if (req.engine === 'google' || engine == 'vertex') {
    engine = googleVertexService;
  } else if (req.engine === 'azure') {
    engine = azureService;
  } else if (req.engine === 'openai') {
    engine = openAIService;
  }

  if (!engine) throw new Error(`invalid engine: ${req.engine}`);

  const result = await engine.execute(req);

  let response;
  if (Array.isArray(result) && result.length > 0) {
    response = {
      value: result[0].message?.content,
    };
  } else {
    response = {
      value: result,
    };
  }

  callback(response);
};

const azure = {
  execute,
};

module.exports = azure;
