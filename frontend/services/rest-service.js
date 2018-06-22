'use strict';

angular.module("main").factory('restService', function ($http) {
    var url = 'http://localhost:7002/';
    return {
        ndvi: function (mosaic) {
            return $http({
                method: 'POST',
                url: url + 'ndvi',
                data: mosaic,
            });
        },
    }
});