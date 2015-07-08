var express = require('express');
var path = require('path');
var app = express();
app.use(express.static(path.join(__dirname, './client')));
var bodyParse = require('body-parser');
app.use(bodyParser.json());

require('./config/mongoose.js');
require('./config/routes.js')(app);