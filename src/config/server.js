import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import constants from './constants.js';
import engineController from '../controllers/EngineController.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.options('*', cors());

app.use('/', engineController);

app.listen(constants.LOCAL_PORT);
console.log('Node.js server running on port ' + constants.LOCAL_PORT);
