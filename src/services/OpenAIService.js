const OpenAI = require('openai');
const constants = require('../config/constants.js');

const execute = async (request) => {
  const client = new OpenAI({
    apiKey: constants.NODE_OPENAI_KEY,
    temperature: 0,
  });

  console.time('openai');
  const { choices } = await client.chat.completions.create({
    model: 'gpt-5-mini',
    messages: [
      {
        role: 'system',
        content:
          'You are a precise JSON generator. Always follow instructions exactly and output only valid JSON arrays.',
      },
      { role: 'user', content: request.prompt },
    ],
  });
  console.timeEnd('openai');

  return choices;
};

const openai = {
  execute,
};

module.exports = openai;
