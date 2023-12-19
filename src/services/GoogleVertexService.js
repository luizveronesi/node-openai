const { GoogleVertexAI } = require('langchain/llms/googlevertexai');
const constants = require('../config/constants.js');

const execute = async (request) => {
  const model = new GoogleVertexAI({
    authOptions: {
      credentials: {
        type: 'service_account',
        project_id: constants.NODE_VERTEX_PROJECT_ID,
      },
    },
    temperature: 0,
  });

  return await model.call(request.prompt);
};

const vertex = {
  execute,
};

module.exports = vertex;
