const compression = require('compression');
const express = require('express');
const { default: helmet } = require('helmet');
const morgan = require('morgan');
const app = express();

//init middleware
app.use(morgan("dev"))
// help log

// morgan("dev") for development
// morgan("combined") for production
// morgan("common")
// morgan("short")
// morgan("tiny")
app.use(helmet())
// help protect headers

app.use(compression())
// help reduce volume usage

//init db

//init routes
app.get("/", (req, res) => {
    return res.send({
        message: "Welcome"
    })
})
//handle error

module.exports = app