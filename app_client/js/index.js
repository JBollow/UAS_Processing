const express = require('express');
var router = express.Router();
var shell = require('shelljs');
var randomstring = require("randomstring");
var fs = require('fs');
var path = require('path');
var imagesDirectory = path.join('"' + __dirname + '"', '../../docker_images/ndvi/docker-qgis-model/workspace/example');
var imagesDirectory2 = path.join('"' + __dirname + '"', '../../docker_images/ndvivector/docker-qgis-model/workspace/example');
var shapesDirectory = path.join('"' + __dirname + '"', '../../app_client/shapefile');
var main = path.join('"' + __dirname + '"');

router.post('/odm', function (req, res) {
  res.send("Under construction!");
});

router.post('/ndvi', function (req, res) {
  console.log("one");

  var data = req.body;
  console.log(data.path);
  console.log(data.output);

  shell.exec('cp ' + data.path + " " + imagesDirectory, function (code, stdout, stderr) {

    if (stderr) {
      res.status(500).send(stderr);
    } else {
      //navigating to the folder to execute the next steps there
      shell.cd('docker_images/ndvi/docker-qgis-model/workspace/example');
      console.log("two");

      if (!stderr) {
        console.log("three");
        var filename = data.path.replace(/^.*[\\\/]/, '');

        //rename the image
        shell.exec('mv ' + filename + " orthophoto.tif", function (code, stdout, stderr) {
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
                    shell.exec('docker cp ' + randomqgis + ':/results ' + data.output, function (code, stdout, stderr) {
                      console.log("seven");

                      shell.exec('rm orthophoto.tif', function (code, stdout, stderr) {
                        console.log("seven and half");
                      });

                      shell.exec('docker rm ' + randomqgis, function (code, stdout, stderr) {
                        console.log("eight");
                        navigateBack();
                        res.send("NDVI Berechnung abgeschlossen!");
                      });
                    });
                  } else if (stderr) {
                    console.log('Program stderr:', stderr);
                    navigateBack();
                    res.status(500).send(stderr);
                  }
                });
              } else {
                navigateBack();
                res.status(500).send(stderr);
              }
            });
          } else {
            navigateBack();
            res.status(500).send(stderr);
          }
        });
      } else {
        navigateBack();
        res.status(500).send(stderr);
      }
    }
  });;
});

router.post('/ndvivector', function (req, res) {
  console.log("one");

  var data = req.body;
  console.log(data.path);
  console.log(data.output);

  shell.exec('cp ' + data.path + " " + imagesDirectory2, function (code, stdout, stderr) {

    if (stderr) {
      res.status(500).send(stderr);
    } else {
      //navigating to the folder to execute the next steps there
      shell.cd('docker_images/ndvivector/docker-qgis-model/workspace/example');
      console.log("two");

      if (!stderr) {
        console.log("three");
        var filename = data.path.replace(/^.*[\\\/]/, '');

        //rename the image
        shell.exec('mv ' + filename + " orthophoto.tif", function (code, stdout, stderr) {
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
                    shell.exec('docker cp ' + randomqgis + ':/results ' + data.output, function (code, stdout, stderr) {
                      console.log("seven");

                      shell.exec('rm orthophoto.tif', function (code, stdout, stderr) {
                        console.log("seven and half");
                      });

                      shell.exec('docker rm ' + randomqgis, function (code, stdout, stderr) {
                        console.log("eight");
                        navigateBack();
                        res.send("NDVI Berechnung abgeschlossen!");
                      });
                    });
                  } else if (stderr) {
                    console.log('Program stderr:', stderr);
                    navigateBack();
                    res.status(500).send(stderr);
                  }
                });
              } else {
                navigateBack();
                res.status(500).send(stderr);
              }
            });
          } else {
            navigateBack();
            res.status(500).send(stderr);
          }
        });
      } else {
        navigateBack();
        res.status(500).send(stderr);
      }
    }
  });;
});

navigateBack = function () {
  shell.cd("..");
  shell.cd("..");
  shell.cd("..");
  shell.cd("..");
  shell.cd("..");
}

router.post('/las', function (req, res) {
  res.send("Under construction!");
});

router.post('/tiles', function (req, res) {
  var data = req.body;
  console.log(data);
  
  var randomtile;
  randomtile = randomstring.generate(7);
  console.log("list directory");
  shell.exec("ls");
  // Achtung Processes anpassen!!
  shell.exec('python scripts/gdal2tiles_multi.py --profile=mercator -z 14-22 --processes=' + data.processes + ' ' + data.path + " app_client/tiles/" + randomtile, function (code, stdout, stderr) {
    if (stderr) {
      console.log(stderr);
      res.status(500).send(stderr);
    } else {
      res.send(randomtile);
    }
  });
});

router.post('/copyshape', function (req, res) {
  var data = req.body;
  console.log(data.path);
  shell.exec('cp ' + data.path + " " + shapesDirectory, function (code, stdout, stderr) {
    if (stderr) {
      navigateBack();
      console.log(stderr);
      res.status(500).send(stderr);
    } else {
      var filename = data.path.replace(/^.*[\\\/]/, '');
      shell.cd(main);
      shell.exec("ls");
      //rename the archive
      shell.cd("app_client/shapefile");
      shell.exec('mv ' + filename + " shape.zip", function (code, stdout, stderr) {
        if (stderr) {
          console.log(stderr);
          shell.cd(main);
          res.status(500).send(stderr);
        } else {
          shell.cd(main);
          res.send({code: "Yay!"});
        }
      });
    }
  });
});

router.post('/deleteshape', function (req, res) {
  shell.exec('rm ' + shapesDirectory + "/shape.zip", function (code, stdout, stderr) {
    if (stderr) {
      console.log(stderr);
      res.status(500).send(stderr);
    } else {
      res.status(200).send({code: "Shapes no more"});
    }
  });
});

module.exports = router;