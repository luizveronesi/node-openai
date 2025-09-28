import AzureService from '../services/AzureService.js';
import GoogleService from './GoogleService.js';
import OpenAIService from '../services/OpenAIService.js';

const execute = async (req, callback) => {
  let engine;
  if (req.engine === 'google' || engine == 'vertex') {
    engine = GoogleService;
  } else if (req.engine === 'azure') {
    engine = AzureService;
  } else if (req.engine === 'openai') {
    engine = OpenAIService;
  }

  if (!engine) throw new Error(`invalid engine: ${req.engine}`);

  const result = await engine.execute(req);

  let response;
  if (Array.isArray(result) && result.length > 0) {
    let output = result[0].message?.content.trim();
    output = output.replace(/^```json\s*|```$/g, '');
    response = JSON.parse(output);
  } else {
    response = {
      value: result,
    };
  }

  callback(response);
};

const EngineService = {
  execute,
};

export default EngineService;
