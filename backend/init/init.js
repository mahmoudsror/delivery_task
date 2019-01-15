const expressSanitizer = require('express-sanitizer'),
    expressValidator = require('express-validator'),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    cors = require('cors'),
    path = require('path')

module.exports = async (app,config)=>{

    app.use(cors());
    app.use(expressValidator())
    app.use(expressSanitizer())
	app.use(logger('dev'));
    app.use(bodyParser.json());
    require(path.resolve('routes','index.js'))(app,config)

}
