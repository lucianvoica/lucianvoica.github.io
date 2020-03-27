var circuitApp = angular.module("circuitApp", ["mainApp"]);
circuitApp.controller('circuitController', ["$scope", "RepoFactory", function($scope, RepoFactory) {
    var link = window.location.href.toString();
    var path = link.substring(link.indexOf("circuit.html"));
    $scope.model = RepoFactory.GetCircuitByLink(path);

}]);