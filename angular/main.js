var app = angular.module("mainApp", ['repositoryModule']);

app.directive("navbar", function() {
    return {
        restrict: "E",
        templateUrl: '../templates/navbar.html',
        replace: true,
        scope: {
            item: '=',
        },
        link: function(scope, element, attrs) {}
    };
});

app.directive("footerPart", function() {
    return {
        restrict: "E",
        templateUrl: '../templates/footer.html',
        replace: true
    };
});