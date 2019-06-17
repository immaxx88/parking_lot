require('./config/config')
require('./models/db')
require('./config/passportConfig')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')
const rtsIndex = require('./route/index.route.js') 

var app = express();

app.use(bodyParser.json())
app.use(cors())
app.use(passport.initialize())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api',rtsIndex); 

app.listen(process.env.PORT, () => console.log(`Server started at Port : ${process.env.PORT} `))

