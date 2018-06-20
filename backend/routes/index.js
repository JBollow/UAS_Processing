var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Processing and Analysis Workflows for UAS-Borne Spatial Data' });
});

module.exports = router;
