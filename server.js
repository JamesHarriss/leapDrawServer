var express = require('express'),
    config = require('./server/configure');
    app = express();

    app.set('port', process.env.PORT || 3000);
    config(app);

    app.listen(app.get('port'), function(){
      console.log("Server succesfully started, listening on port " + app.get('port'));
    });
