var circuitApp = angular.module("circuitApp", ["mainApp", "paragraphsApp"]);
circuitApp.controller('circuitController', ["$scope", "RepoFactory", function($scope, RepoFactory) {
    var link = window.location.href.toString();
    var path = link.substring(link.indexOf("circuite.html"));
    if (path != "circuite.html") {
        $scope.model = RepoFactory.GetCircuitByLink(path);
    }
}]);