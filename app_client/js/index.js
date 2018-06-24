/**
 *  @author Jan-Patrick Bollow 349891
 */

const express = require('express');
var router = express.Router();

var shell = require('shelljs');
var randomstring = require("randomstring");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('Processing and Analysis Workflows for UAS-Borne Spatial Data');
});

router.post('/ndvi', function (req, res) {
  var filepath = request.body
  var randomname;
  var randomqgis;

  
  // //TODO get photos, start WebODM (or just get a tif)
  // //run a docker qgis ndvi image
  // randomqgis = randomstring.generate(7);
  // shell.exec('docker run --name ' + randomqgis + ' nuest/docker-qgis-model:example', function (code, stdout, stderr) {
  //   console.log('Exit code:', code);
  //   if (stdout || code == 0) {
  //     console.log('Program output:', stdout);

  //     //copy the files to a local directory
  //     randomname = randomstring.generate(7);
  //     shell.exec('docker cp ' + randomqgis + ':/workspace/results results/' + randomname, function (code, stdout, stderr) {
  //       console.log('copied');
  //       shell.exec('docker rm ' + randomqgis, function (code, stdout, stderr) {});
  //       //TODO Start GDALtotiles? Give feedback
  //     });

  //   };
  //   if (stderr) {
  //     console.log('Program stderr:', stderr);
  //   }

  //   res.send(randomname);
  // });

  // TODO same for the 3D
});


module.exports = router;