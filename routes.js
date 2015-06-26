//This file loads in all the routes you want from the routes folder.
var uploadRoutes = require('./routes/uploadRoutes');
var imagesRoutes = require('./routes/imagesRoutes');

var serveStatic = require('serve-static');

module.exports.init = function(app) {
  app.use('/upload', uploadRoutes);
  app.use('/images', imagesRoutes);
  app.use('/', serveStatic('./public'));
}
