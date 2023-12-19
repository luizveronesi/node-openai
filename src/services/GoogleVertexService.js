const { GoogleVertexAI } = require('langchain/llms/googlevertexai');
const constants = require('../config/constants.js');

const execute = async (request, callback) => {
  const model = new GoogleVertexAI({
    authOptions: {
      credentials: {
        type: 'service_account',
        project_id: constants.NONE_VERTEX_PROJECT_ID,
      },
    },
    temperature: 0.1,
  });

  const response = await model.call(request.prompt);
  callback(response);
};

const vertex = {
  execute,
};

module.exports = vertex;
