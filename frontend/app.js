angular.module("App", ['main', 'ngRoute']);

angular.module("main", ['ngRoute']);


// configure our routes
angular.module("main").config(function ($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })
});