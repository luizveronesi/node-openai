const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const constants = require('./constants.js');

const engineController = require('../controllers/EngineController.js');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.options('*', cors());

app.use('/', engineController);

app.listen(constants.LOCAL_PORT);
console.log('Node.js server running on port ' + constants.LOCAL_PORT);
