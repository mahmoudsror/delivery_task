const express = require('express')
const path = require('path')
const app= express()
const config = require(path.resolve('config','index.js'))

require(path.resolve('init','init.js'))(app,config)

const listener = app.listen(config.PORT||5000,() => {
  console.log("Welcome to Tasks Management Service , listen to %s",listener.address().port)
})
module.exports = app