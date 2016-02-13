angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.addLink = function () {
    Links.addOne($location); // note that the url property of $location is a function. This may bite us later
  };
  $scope.link = {};
});
