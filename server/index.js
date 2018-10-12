const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
const massive = require("massive");
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const {
    SERVER_PORT,
    CONNECTION_STRING
} = process.env;

massive(CONNECTION_STRING).then( db => {
    console.log('connected to db')
    app.set( 'db', db )
})
.catch(err => console.log(err))

app.post('/register', controller.register);
app.post('/login', controller.login);





app.listen(SERVER_PORT, () => console.log(`I am listening on port: ${SERVER_PORT}`))