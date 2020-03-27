var summaryArticleApp = angular.module("summaryArticleApp", ['mainApp', 'ui.bootstrap']);
summaryArticleApp.component('summaryArticles', {
    templateUrl: '../templates/summaryArticlesTemplate.html',
    controller: function($scope, RepoFactory) {
        $scope.dispArticleLines = RepoFactory.GetArticleLines();
        $scope.filteredArticleLines = [], $scope.currentPage = 1, $scope.numPerPage = 5, $scope.maxSize = 5;
        debugger;
        $scope.$watch("currentPage + numPerPage", function() {
            var begin = (($scope.currentPage - 1) * $scope.numPerPage),
                end = begin + $scope.numPerPage;

            $scope.filteredArticleLines = $scope.dispArticleLines.slice(begin, end);
        });
    }
});

summaryArticleApp.directive("singleSummaryArticle", function() {
    return {
        restrict: "A",
        templateUrl: '../templates/singleSummaryArticle.html',
        replace: true,
        scope: {
            item: '=',
        },
        link: function(scope, element, attrs) {}
    };
});

summaryArticleApp.directive("doubleSummaryArticle", function() {
    return {
        restrict: "A",
        templateUrl: '../templates/doubleSummaryArticle.html',
        replace: true,
        scope: {
            item: '=',
        },
        link: function(scope, element, attrs) {}
    };
});