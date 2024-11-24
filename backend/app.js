const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const postFuncionarios = require('./routes/funcionariosRouter');
const postCategoriakits = require('./routes/categoriakitsRouter');
const postKits = require('./routes/kitsRouter');
const postInstrumentos = require('./routes/instrumentosRouter');
const app = express();

app.set('port', process.env.PORT || 3005);
app.use(cors());
app.use(express.json());
app.use('/api', postFuncionarios);
app.use('/api', postCategoriakits);
app.use('/api', postInstrumentos);
app.use('/api', postKits);

module.exports = app;
