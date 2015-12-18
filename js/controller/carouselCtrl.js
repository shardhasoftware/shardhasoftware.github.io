'use strict';

app.controller('carouselCtrl', ['$scope', function (scope) {
  scope.myInterval = 5000;
  scope.noWrapSlides = false;
  var slides = scope.slides = [];
  scope.slides=[
            {'image':'/css/images/about.jpg', 'text':''},
            {'image':'/css/images/book.jpg', 'text':''},
            {'image':'/css/images/meeting.jpg', 'text':''},
            {'image':'/css/images/nature.jpg', 'text':''},
            {'image':'/css/images/screens.jpg', 'text':''}
            ];
}]);