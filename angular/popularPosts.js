app.component('popularPosts', {
    templateUrl: '../templates/popularPosts.html',
    controller: function($scope, RepoFactory) {
        $scope.popularPosts = RepoFactory.GetPopularArticles()
    }
});