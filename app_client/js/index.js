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
    if (code) {
      console.log("code" + code);
    } else if (stdout) {
      console.log("stdout" + stdout);
    } else if (stderr) {
      console.log("err");
      console.log(stderr);
      res.status(500).send(stderr);
    } else {
      //navigating to the folder to execute the next steps there
      shell.cd('docker_images/docker-qgis-model/workspace/example');
      console.log("two");
      if (!stderr) {
        console.log("three");
        var filename = data.path.replace(/^.*[\\\/]/, '');
        //rename the image
        console.log(filename);
        shell.exec('ls', function (code, stdout, stderr) {
          shell.exec('mv ' + filename + " orthophoto.jpg", function (code, stdout, stderr) {
            console.log("four");
            if (!stderr) {
              console.log("five");
              //do the computations
              var randomname;
              var randomqgis;
              //run a docker qgis ndvi image
              randomqgis = randomstring.generate(7);
              shell.exec('docker build -t qgis-model-example .', function (code, stdout, stderr) {
                console.log("six");
                if (!stderr) {
                  console.log("seven");
                  shell.exec('docker run --name ' + randomqgis + ' qgis-model-example', function (code, stdout, stderr) {
                    console.log("eight");
                    console.log('Exit code:', code);
                    if (stdout || code == 0) {
                      console.log('Program output:', stdout);
                      //copy the files to a local directory
                      randomname = randomstring.generate(7);
                      shell.exec('docker cp ' + randomqgis + ':/results results/' + randomname, function (code, stdout, stderr) {
                        console.log("nine");
                        console.log('copied');
                        shell.exec('docker rm ' + randomqgis, function (code, stdout, stderr) {});
                        //TODO Start GDALtotiles? Give feedback
                      });

                    };
                    if (stderr) {
                      console.log('Program stderr:', stderr);
                    }
                  });
                }
              });
            }
          });
        });
      }

    }
  });;
});



// TODO same for the 3D


module.exports = router;