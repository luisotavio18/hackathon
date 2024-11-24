const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const postFuncionarios = require('./routes/funcionariosRouter');
const postInstrumentos = require('./routes/instrumentosRouter');
const app = express();

app.set('port', process.env.PORT || 3005);
app.use(cors());
app.use(express.json());
app.use('/api', postFuncionarios);
app.use('/api', postInstrumentos);

module.exports = app;
