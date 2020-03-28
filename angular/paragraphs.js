var paragraphsApp = angular.module("paragraphsApp", ['mainApp']);
paragraphsApp.component('paragraphs', {
    templateUrl: '../templates/paragraphs.html',
    controller: function($scope, RepoFactory, $sce) {
        $scope.$parent.model.paragraphs.forEach(function(item) {
            if (item.text != null) {
                item.text = $sce.trustAsHtml(item.text);
            }
            if (item.galery != null) {
                item.galeryPhotos = [];
                item.galery.forEach(function(imageId) {
                    item.galeryPhotos.push(RepoFactory.GetPhotoById(imageId));
                });
            }
            if (item.cityArticle != null) {
                item.city = RepoFactory.GetCityArticleById(item.cityArticle);
                item.city.thumbnail = RepoFactory.GetPhotoById(item.city.thumbnail).path;
            }
        });
    }
});

paragraphsApp.directive("photoCarousel", function() {
    return {
        restrict: "A",
        templateUrl: '../templates/photoCarousel.html',
        replace: true,
        scope: {
            photos: '=',
            'car-id': '='
        },
        link: function(scope, element, attrs) {}
    };
});