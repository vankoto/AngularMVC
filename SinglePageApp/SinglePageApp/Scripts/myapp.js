var app = angular.module("myapp", []);

app.controller('MainController', ['$scope', function ($scope) {
    $scope.message = "Hello Angular";
}]);