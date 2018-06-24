/**
 *  @author Jan-Patrick Bollow 349891
 * @author Anna Formaniuk 427493
 */

const express = require('express');
var router = express.Router();

var shell = require('shelljs');
var randomstring = require("randomstring");


function initMap() {
  var map = L.map('map').setView([51.505, -0.09], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

};


module.exports = router;