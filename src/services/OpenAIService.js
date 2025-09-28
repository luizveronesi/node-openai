import OpenAI from 'openai';
import constants from '../config/constants.js';

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
        content: constants.systemMessage,
      },
      { role: 'user', content: request.prompt },
    ],
  });
  console.timeEnd('openai');

  return choices;
};

const OpenAIService = {
  execute,
};

export default OpenAIService;
