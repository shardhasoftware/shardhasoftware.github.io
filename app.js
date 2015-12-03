'use strict'

var app = angular.module("app", ["restangular", "ui.bootstrap", "ui.router"]);
app.config(['$stateProvider', '$urlRouterProvider', function(stateProvider, urlRouterProvider) {

/*	scope.org={
		'companyName':'Shardha Software Solutions',
		'slogan':'',
		'branch':{
			branchId:'',
			branchName:'', 
			branchDetails:{
				'phone':'',
				'address':'',
				'website':'',
				'email':'',
				'fb':'',
				'linkedIn':'',
				'twitter':''
			}
		}
	}
	*/

	//REDIRECTS AND SETTING URLS

	// Use urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).

	urlRouterProvider.otherwise('/home');
	
	// The `when` method says if the url is ever the 1st param, then redirect to the 2nd param
	// Here we are just setting up some convenience urls.
	// If the url is ever invalid, e.g. '/asdf', then redirect to '/' aka the home state


	//STATE CONFIGURATIONS

	// Use stateProvider to configure your states.
	stateProvider
	.state("home", {
		abstract: true,
		templateUrl : 'views/home/home.html'
	}).state("home.home", {
		url : '/home',
		views : {
			'header' : {
				templateUrl : 'views/header.html'
				},
				'footer':{
				templateUrl : 'views/footer.html'

				}
			}
	})

	.state("about", {
		abstract: true,
		templateUrl : 'views/about/about.html'
	}).state("about.about", {
		url : '/about',
		views : {
			'header' : {
				templateUrl : 'views/header.html'
				},
				'footer':{
				templateUrl : 'views/footer.html'

				}
			}
	});




/*	stateProvider
    .state('index', {
      url: "",
      views: {
        "viewA": { template: "index.viewA" },
        "viewB": { template: "index.viewB" }
      }
    })
    .state('route1', {
      url: "/route1",
      views: {
        "viewA": { template: "route1.viewA" },
        "viewB": { template: "route1.viewB" }
      }
    })
    .state('route2', {
      url: "/route2",
      views: {
        "viewA": { template: "route2.viewA" },
        "viewB": { template: "route2.viewB" }
      }
    })
*/
}]);
