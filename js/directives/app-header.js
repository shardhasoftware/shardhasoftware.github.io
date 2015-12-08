'use strict';

app.directive("appHeader", function(){
	return {
		link: function(scope, ele, attrs){

		},
		restrict:'C',
		templateUrl: 'views/shared/header.html'
	}
});
