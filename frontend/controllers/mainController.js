angular.module("main").controller("mainController", function ($scope, restService) {
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
});