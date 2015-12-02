var app = angular.module("app", ["restangular", "ui.bootstrap", "ui.router"]);
app.config(['$stateProvider', /*'$urlRouterProvider', */function(stateProvider/*, urlRouterProvider*/) {

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

	//	urlRouterProvider.otherwise('/home');
	
	// The `when` method says if the url is ever the 1st param, then redirect to the 2nd param
	// Here we are just setting up some convenience urls.
	// If the url is ever invalid, e.g. '/asdf', then redirect to '/' aka the home state


	//STATE CONFIGURATIONS

	// Use stateProvider to configure your states.
	stateProvider.state("home", {
	//	abstract: true,
		url : '/home',
		templateUrl : 'views/indexpage/home.html',
		views:{
			'header':{
				templateUrl: 'views/indexpage/header.html'
			}
		}
		
		*/
	})/*.state('about', {
		url:'/about',
		templateUrl: 'views/about.html',
		views:{
			'header':{
				templateUrl: 'views/indexpage/header.html',
				controller: headerCtrl
			}
		}

	});*/
}]);
app.run(['$rootScope', '$state', '$stateParams', function(rootScope, $state, $stateParams) {
	// It's very handy to add references to $state and $stateParams to the $rootScope
	// so that you can access them from any scope within your applications.For example,
	// <li ui-sref-active="active }"> will set the <li> // to active whenever
	// 'contacts.list' or one of its decendents is active.

	window.$state = $state;

	rootScope.$state = $state;
	rootScope.$stateParams = $stateParams;

}]);