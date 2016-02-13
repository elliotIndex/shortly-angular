angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.links = Links.getAll();
  $scope.data = {};
  Links.getAll()
    .then(function (links) {
      $scope.data.links = links;
    });
});
