var express = require('express'),
    fs = require('fs'),
    router = express.Router();

router.get('/', function(req,res){
  fs.readdir('./public/uploads', function(err, files){
      if (err) { return err};

      var images = [];
      files.map(function(file){
        images.push({
            title: file,
            relUrl: '/uploads/' + file,
            url: 'http://' + req.headers.host + '/uploads/' + file
        });
      });

      res.json(images);
  });
});


module.exports = router;
