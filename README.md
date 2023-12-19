# Node.js AI Integrations

Simple project with endpoints to prompt Open AI, Azure OpenAI and Google Vertex.

## Installation

```bash
# Clone the repository
git clone https://github.com/luizveronesi/node-openai.git

# Navigate to the project directory
cd node-openai

# Install dependencies
npm install
```

```bash
# Docker installation
docker build . -t node-openai:latest
docker create --name node-openai --network your-network --ip x.x.x.x --restart unless-stopped roboto-node:latest
docker start node-openai
```

## Usage

```bash
# Run the application
npm start
```

## Configuration

You need to add your credentials for each service you want to use. They are all ate file src/config/constants.js.

### Open AI  
Set the variable NODE_OPENAI_KEY with the key as created at https://platform.openai.com/api-keys. You'll need a valid account with credits.

### Azure Open AI  
Azure needs three different variables defined at https://portal.azure.com/ on Azure AI Services section.

NODE_AZURE_AI_KEY - Generated API key at configuration console.  
NODE_AZURE_AI_KEY_DEPLOYMENT_ID - An ID configured at the service.  
NODE_AZURE_AI_KEY_ENDPOINT - Generated Azure endpoint based on the name you

### Google Vertex
Set the variable NODE_VERTEX_PROJECT_ID as given at https://console.cloud.google.com/ on section "Enabled APIs & Services", service "Vertex AI API".

You can also change default server port from 80 by changing LOCAL_PORT value.

## API Endpoints

### POST /azure or /vertex or /openai
Prompt the AI engine and receive a simple answer.

**Parameters**

|          Name | Required |  Type   | Description                                                                                                                                                           |
| -------------:|:--------:|:-------:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `engine` | required | string  | Valid values: azure, openai, google. Default: openai.                                                                     |
|     `prompt` | required | string  | The prompt value to be asked, just like in Chat GPT or Bard.                                                                     |

**Response**

```
{
    "value": "the AI engine answer",
}