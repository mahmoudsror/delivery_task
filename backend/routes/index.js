module.exports = function(app,config){
  require('./tasks.js')(app,config)
  app.get('/',function(req,res){
    res.send("Welcome to Tasks Service")
  })
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
}
