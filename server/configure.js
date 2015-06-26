//require in all our packages
var logger = require('morgan');
var bodyParser = require('body-parser');
var multer = require('multer');
var cors = require('cors');
var errorHandler = require('errorhandler');
var routes = require('../routes');

module.exports = function(app) {
  app.use(cors());
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(multer({
    dest: './public/uploads/',
    rename: function (fieldname, filename) {
      //return a filename and look for anywhite space and repalce it with a dash
      return filename.replace(/\W+/g, '-').toLowerCase()+Date.now();
    }
  }));

  routes.init(app);

  if ('development' === app.get('env')) {
    app.use(errorHandler());
    app.set('json spaces', 2);
  };

  return app;
};
