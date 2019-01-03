
require('dotenv').config()
const session = require('express-session')
const massive = require('massive')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use( express.static( `${__dirname}/../build` ) );

const {
    SERVER_PORT
} = process.env

app.use(bodyParser.json())

app.listen(SERVER_PORT, ()=>{console.log(`Server is running on Port ${SERVER_PORT}`)})