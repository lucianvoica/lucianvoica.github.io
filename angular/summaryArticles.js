app.controller("summaryArticlesCtrl", ['$scope','RepoFactory', function ($scope, RepoFactory) {
    $scope.dispArticleLines = RepoFactory.GetArticleLines();
    $scope.filteredArticleLines = []
        , $scope.currentPage = 1
        , $scope.numPerPage = 5
        , $scope.maxSize = 5;

    $scope.$watch("currentPage + numPerPage", function () {
        var begin = (($scope.currentPage - 1) * $scope.numPerPage)
            , end = begin + $scope.numPerPage;

        $scope.filteredArticleLines = $scope.dispArticleLines.slice(begin, end);
    });
}]);

app.directive("singleSummaryArticle", function () {
    return {
        restrict: "A",
        template: 
            '<article class= "blog_style1" >\
                <div class="blog_img">\
                    <img class="img-fluid" src="{{item[0].banner}}" alt="{{item[0].title}}">\
                </div>\
                <div class="blog_text">\
					<div class="blog_text_inner">\
						<div class="cat">\
							<a class="cat_btn" href="#">Citește</a>\
							<a href="#"><i class="fa fa-calendar" aria-hidden="true"></i> {{item[0].date}}</a>\
							<a href="#"><i class="fa fa-map-pin" aria-hidden="true"></i> {{item[0].country}} - {{item[0].category}}</a>\
						</div>\
						<a href="#"><h4>{{item[0].title}}</h4></a>\
                        <p>{{item[0].description}}</p>\
						<a class="blog_btn" href="{{item[0].page}}">Mai mult...</a>\
					</div>\
				</div>\
            </article>',
        replace: true,
        scope: {
            item: '=',
        },
        link: function (scope, element, attrs) {
        }
    };
});

app.directive("doubleSummaryArticle", function () {
    return {
        restrict: "A",
        template:
            '<div class="row">\
            <div class="col-md-6" ng-repeat="child in item">\
                <article class= "blog_style1 small">\
                    <div class="blog_img">\
                        <img class="img-fluid" src="{{child.banner}}" alt="{{child.title}}">\
                    </div>\
                    <div class="blog_text">\
					    <div class="blog_text_inner">\
						    <div class="cat">\
							    <a class="cat_btn" href="#">Citește</a>\
							    <a href="#"><i class="fa fa-calendar" aria-hidden="true"></i> {{child.date}}</a>\
							    <a href="#"><i class="fa fa-map-pin" aria-hidden="true"></i> {{child.country}} - {{child.category}}</a>\
						    </div>\
						    <a href="#"><h4>{{child.title}}</h4></a>\
                            <p>{{child.description}}</p>\
						    <a class="blog_btn" href="{{child.page}}">Mai mult...</a>\
					    </div>\
				    </div>\
                </article>\
            </div>\
        <div>',
        replace: true,
        scope: {
            item: '=',
        },
        link: function (scope, element, attrs) {
        }
    };
});