const express = require('express');
var router = express.Router();
var shell = require('shelljs');
var randomstring = require("randomstring");
var fs = require('fs');
var path = require('path');
var imagesDirectory = path.join(__dirname, '../../docker_images/docker-qgis-model/workspace/example');
// F:\Bilder\2018\may\tumblr_inline_oqwf99a1Iu1ty99rh_540.png

router.post('/ndvi', function (req, res) {
  console.log("one");
  var data = req.body;
  console.log(data.path);

  shell.exec('cp ' + data.path + " " + imagesDirectory, function (code, stdout, stderr) {
    if (stderr) {
      res.status(500).send(stderr);
    } else {
      //navigating to the folder to execute the next steps there
      shell.cd('docker_images/docker-qgis-model/workspace/example');
      console.log("two");
      if (!stderr) {
        console.log("three");
        var filename = data.path.replace(/^.*[\\\/]/, '');
        //rename the image
        shell.exec('mv ' + filename + " orthophoto.jpg", function (code, stdout, stderr) {
          if (!stderr) {
            console.log("four");
            //do the computations
            var randomqgis;
            randomqgis = randomstring.generate(7);
            //run a build a qgis docker image
            shell.exec('docker build -t qgis-model-example .', function (code, stdout, stderr) {
              if (!stderr) {
                console.log("five");
                //run a docker qgis ndvi image
                shell.exec('docker run --name ' + randomqgis + ' qgis-model-example', function (code, stdout, stderr) {
                  if (stdout || code == 0) {
                    console.log("six");
                    //copy the files to a local directory
                    shell.exec('docker cp ' + randomqgis + ':/results results', function (code, stdout, stderr) {
                      console.log("seven");
                      shell.exec('docker rm ' + randomqgis, function (code, stdout, stderr) {
                        console.log("eight");
                        res.send("Fertig!");
                      });
                    });
                  } else if (stderr) {
                    console.log('Program stderr:', stderr);
                    res.status(500).send(stderr);
                  }
                });
              } else {
                res.status(500).send(stderr);
              }
            });
          } else {
            res.status(500).send(stderr);
          }
        });
      } else {
        res.status(500).send(stderr);
      }
    }
  });;
});



// TODO same for the 3D


module.exports = router;