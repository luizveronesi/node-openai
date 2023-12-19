const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const constants = require('./constants.js');

const azureController = require('../controllers/AzureController.js');
const googleVertexController = require('../controllers/GoogleVertexController.js');
const openAIController = require('../controllers/OpenAIController.js');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.options('*', cors());

app.use('/vertex', googleVertexController);
app.use('/azure', azureController);
app.use('/openai', openAIController);

app.listen(constants.LOCAL_PORT);
console.log('Node.js server running on port ' + constants.LOCAL_PORT);
