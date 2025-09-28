import { AzureOpenAI } from 'openai';
import constants from '../config/constants.js';

const execute = async (request) => {
  const client = new AzureOpenAI(constants.azureOptions);

  const messages = [
    {
      role: 'system',
      content: constants.systemMessage,
    },
    { role: 'user', content: request.prompt },
  ];

  const response = await client.chat.completions.create({
    messages,
    temperature: 1,
  });

  return response.choices;
};

const AzureService = {
  execute,
};

export default AzureService;
