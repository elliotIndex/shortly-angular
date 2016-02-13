angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.addLink = function () {
    Links.addOne( { url: $scope.inputLink } );
    $scope.inputLink = '';
  };
  $scope.link = {};
});
