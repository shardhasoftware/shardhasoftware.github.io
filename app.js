'use strict'

var app = angular.module("app", ["restangular", "ui.bootstrap", "ui.router"]);
app.config(['$stateProvider', '$urlRouterProvider', function(stateProvider, urlRouterProvider) {

	/*scope.org={
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
//		abstract: true,
		templateUrl : 'views/home/home.html'
	}).state("home.home", {
		url : '/home',
		views : {
			'header' : {
				templateUrl : 'views/shared/header.html'
				},
				'footer':{
				templateUrl : 'views/shared/footer.html'

				}
			}
	})

	.state("about", {
//		abstract: true,
		templateUrl : 'views/about/about.html'
	}).state("about.about", {
		url : '/about',
		views : {
			'header' : {
				templateUrl : 'views/shared/header.html'
				},
				'footer':{
				templateUrl : 'views/shared/footer.html'

				}
			}
	})

/*	.state("career", {
		abstract: true,
		templateUrl : 'views/career/career.html'
	}).state("career.career", {
		url : '/career',
		views : {
			'header' : {
				templateUrl : 'views/shared/header.html'
				},
				'footer':{
				templateUrl : 'views/shared/footer.html'

				}
			}
	})

	.state("contact", {
		abstract: true,
		templateUrl : 'views/contact/contact.html'
	}).state("contact.contact", {
		url : '/contact',
		views : {
			'header' : {
				templateUrl : 'views/shared/header.html'
				},
				'footer':{
				templateUrl : 'views/shared/footer.html'

				}
			}
	})

	.state("services", {
		abstract: true,
		templateUrl : 'views/services/services.html'
	}).state("services.services", {
		url : '/services',
		views : {
			'header' : {
				templateUrl : 'views/shared/header.html'
				},
				'footer':{
				templateUrl : 'views/shared/footer.html'
				}
			}
	});
*/

}]);
