const { AzureKeyCredential, OpenAIClient } = require('@azure/openai');
const constants = require('../config/constants.js');

const execute = async (request, callback) => {
  const client = new OpenAIClient(
    constants.NODE_AZURE_AI_KEY_ENDPOINT,
    new AzureKeyCredential(constants.NODE_AZURE_AI_KEY)
  );

  const messages = [{ role: 'user', content: request.prompt }];

  const { choices } = await client
    .getChatCompletions(constants.NODE_AZURE_AI_KEY_DEPLOYMENT_ID, messages, {
      temperature: 0,
    })
    .catch((err) => {
      throw err;
    });

  callback(choices);
};

const azure = {
  execute,
};

module.exports = azure;
