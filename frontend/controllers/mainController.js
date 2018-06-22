angular.module("main").controller("mainController", ['$scope', 'restService', 'leafletData', function ($scope, restService, leafletData) {
    // Controller body
    $scope.files = [];
    $scope.upload = function () {
        console.log($scope.files.length + " files selected");
    };

    $scope.ndvi = function () {
        //send a request to server
        restService.post($scope.selectedUser).then(function (response) {
            console.log("ndvi done!");
            //show buttons for download and tiles generation
        }, function (error) {
            swal({
                titel: 'Fehler',
                text: error.data.msg,
                type: 'error'
            });
        });
    }

    $scope.orthophoto = function () {
        swal({
            titel: 'Orthophoto',
            text: "kommt noch"
        });
    }

    $scope.las = function () {
        swal({
            titel: 'LAS',
            text: "kommt auch noch"
        });
    }

    //the map
    angular.extend($scope, {
        center: {
            lat: 51.82956,
            lng: 7.276709,
            zoom: 5
        },
        markers: $scope.markers,
        defaults: {
            tileLayer: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
            zoomControlPosition: 'bottomright',
            tileLayerOptions: {
                opacity: 0.9,
                detectRetina: true,
                reuseTiles: true,
            },
            scrollWheelZoom: true
        },
        layers: {
            baselayers: {
                Esri_WorldTopoMap: {
                    name: 'Esri WorldTopoMap',
                    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
                    attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community',
                    type: 'xyz',
                    layerOptions: {
                        minZoom: 3,
                        maxZoom: 13,
                        // apikey: ,
                        // mapid: ''
                    }
                }
            },
        },
        events: {
            map: {
                enable: ['click'],
                logic: 'emit'
            }
        }
    });
}]);