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
        if($scope.counter === 4 || $scope.counter === 7) {
            $scope.counter += 3;
        }else if ($scope.counter === 12) {
            alert("Thank you for the good grade. :)");
        }else if ($scope.counter === 12) {
            return false;
        }else {
            $scope.counter += 2;
        }
    };
    $scope.decrement = function () {
        if ($scope.counter === 0) {
            return false;
        } else {
            $scope.counter--;
        }
    };
});