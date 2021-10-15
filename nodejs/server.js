const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');

require('./config/config')
require('./config/connection/dbconnect')

//midleware
app.use(bodyParser.json()); 


//start server
app.listen(3001, () => {
    console.log('server is started at port 3001')
})