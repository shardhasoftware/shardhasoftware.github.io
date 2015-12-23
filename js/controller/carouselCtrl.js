'use strict';

app.controller('carouselCtrl', ['$scope', function (scope) {
  scope.myInterval = 5000;
  scope.noWrapSlides = false;
  var slides = scope.slides = [];
  scope.slides=[
            {'image':'/css/images/img1.jpg', 'text':''},
            {'image':'/css/images/img2.jpg', 'text':''},
            {'image':'/css/images/img3.jpg', 'text':''},
            {'image':'/css/images/img4.jpg', 'text':''},
            {'image':'/css/images/img5.jpg', 'text':''}
            ];
}]);