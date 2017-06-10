var app = angular.module('myapp', []);

app.controller('MainController', function($scope, $http) {
    $http.get('http://swapi.co/api/people/1/').
        then(function (response) {
            $scope.person = response.data;
        });
    $http.get('http://swapi.co/api/planets/2/').
        then(function (response) {
            $scope.planet = response.data;
        });
    $scope.counter = 0;
    $scope.increment = function () {
        $scope.counter++;
    };
    $scope.decrement = function () {
        $scope.counter--;
    };
});