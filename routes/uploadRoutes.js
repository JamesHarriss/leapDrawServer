var express = require('express'),
    router = express.Router();

router.get('/', function(req,res) {
  res.json({
    'message': 'Hello World'
  })
});

router.post('/', function(req,res){
  res.json(req.files);
});

module.exports = router;
