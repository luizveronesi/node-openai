const constants = {
  LOCAL_PORT: 80,
  NODE_OPENAI_KEY: process.env.NODE_OPENAI_KEY,
  NODE_AZURE_AI_KEY: process.env.NODE_AZURE_AI_KEY,
  NODE_VERTEX_PROJECT_ID: process.env.NONE_VERTEX_PROJECT_ID,
  systemMessage:
    'You are a precise JSON generator. Always follow instructions exactly and output only valid JSON arrays.',
  azureOptions: {
    apiKey: process.env.NODE_AZURE_OPENAPI_KEY,
    endpoint: process.env.NODE_AZURE_OPENAI_ENDPOINT,
    deployment: 'gpt-4.1',
    apiVersion: '2024-12-01-preview',
  },
};

export default constants;
