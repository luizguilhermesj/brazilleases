var brleases = angular.module('brleases', []);

brleases.controller('GalleryCtrl', function ($scope) {
  $scope.images = [
    {'path': 'images/apartments/rodolfo_dantas/1-3.JPG'},
    {'path': 'images/apartments/rodolfo_dantas/1-4.JPG'},
    {'path': 'images/apartments/rodolfo_dantas/1-5.JPG'}
  ];
});