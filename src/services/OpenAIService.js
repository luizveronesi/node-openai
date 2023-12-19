const OpenAI = require('openai');
const constants = require('../config/constants.js');

const execute = async (request, callback) => {
  const client = new OpenAI({
    apiKey: constants.NODE_OPENAI_KEY,
    temperature: 0,
  });

  const response = await client.chat.completions
    .create({
      messages: [{ role: 'user', content: request.prompt }],
      model: 'gpt-3.5-turbo',
      temperature: 0,
    })
    .catch((err) => {
      throw err;
    });

  callback(response.choices);
};

const openai = {
  execute,
};

module.exports = openai;
