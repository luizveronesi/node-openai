const OpenAI = require('openai');
const constants = require('../config/constants.js');

const execute = async (request) => {
  const client = new OpenAI({
    apiKey: constants.NODE_OPENAI_KEY,
    temperature: 0,
  });

  const { choices } = await client.chat.completions
    .create({
      messages: [{ role: 'user', content: request.prompt }],
      model: 'gpt-3.5-turbo',
    })
    .catch((err) => {
      throw err;
    });

  return choices;
};

const openai = {
  execute,
};

module.exports = openai;
