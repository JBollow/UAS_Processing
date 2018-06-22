angular.module("main").controller("mainController", function ($scope) {
    // Controller body
    $scope.files = [];
    $scope.upload = function () {
       console.log($scope.files.length + " files selected");
    };
});