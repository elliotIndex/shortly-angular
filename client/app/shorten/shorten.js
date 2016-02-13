angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.addLink = function () {
    console.log('The thing you just input: ', $scope.inputLink);
    Links.addOne( { url: $scope.inputLink } ); // note that the url property of $location is a function. This may bite us later
    $scope.inputLink = '';
  };
  $scope.link = {};
});
