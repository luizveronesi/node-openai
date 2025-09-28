const { LLM } = require('langchain/llms/base');
const axios = require('axios');

class OllamaLLM extends LLM {
  constructor({ model, baseUrl = 'http://192.168.1.8:11434', ...rest } = {}) {
    super(rest);
    this.model = model;
    this.baseUrl = baseUrl;
  }

  _llmType() {
    return 'ollama';
  }

  async _call(prompt, _options) {
    const response = await axios.post(`${this.baseUrl}/api/generate`, {
      model: this.model,
      prompt: prompt,
    });

    return response.data.response;
  }
}

module.exports = { OllamaLLM };
