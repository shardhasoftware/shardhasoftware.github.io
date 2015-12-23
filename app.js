'use strict'

var app = angular.module("app", ["restangular", "ui.bootstrap", "ui.router"]);

app.run(['$rootScope', '$state', '$stateParams', function (rootScope, state, stateParams) {

    // It's very handy to add references to $state and $stateParams to the $rootScope
    // so that you can access them from any scope within your applications.For example,
    // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
    // to active whenever 'contacts.list' or one of its decendents is active.
    rootScope.state = state;
    rootScope.stateParams = stateParams;

    rootScope.company={
      name:"Sharadha Software Solutions",
      alias:"SSS",
      domain:"shardhasoftware.com",
      slogon:"",
      logo:"",
      branches:[
            {branchId:"1001", location:{address:"6th Floor, Quadrant No: 3, Cyber Towers, Hitec City", city:"Hyderabad", state:"Andhra Pradesh", pin:"", country:"India"}, mobile:"091-9885514982", phone:"040-24601181", email:"info@shardhasoftware.com" },
            {branchId:"1002", location:{address:"38725 Lexington Street", city:"Fremont", state:"California", pin:"94538", country:"US"}, mobile:"", phone:"605-218-5163", email:"info@shardhasoftware.com" },
            {branchId:"1003", location:{address:"", city:"Seattle", state:"Washington", pin:"", country:"US"}, mobile:"", phone:"425-270-5178", email:"info@shardhasoftware.com" }
            ]
    };


    }]);

app.config(['$stateProvider', '$urlRouterProvider', function (stateProvider, urlRouterProvider) {

      /////////////////////////////
      // Redirects and Otherwise //
      /////////////////////////////

      // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
      urlRouterProvider

        // The `when` method says if the url is ever the 1st param, then redirect to the 2nd param
        // Here we are just setting up some convenience urls.
        /*.when('/c?id', '/contacts/:id')
        .when('/user/:id', '/contacts/:id')
*/

     //   .when('/home', '/home');

        // If the url is ever invalid, e.g. '/asdf', then redirect to '/' aka the home state
        .otherwise('/home');

      //////////////////////////
      // State Configurations //
      //////////////////////////

      // Use $stateProvider to configure your states.
      stateProvider

        .state("index", {
          abstract : true,
          templateUrl: 'views/home.html'
        })
        .state("home", {
            parent: 'index',
            url:"/home",
        		views:{
        		'carousel':{
        			templateUrl: 'views/shared/carousel.html'
        	   	}
          	}
    	   })

        .state('about', {
          url: '/about',
          templateUrl: 'views/about.html'
        })

        .state('career', {
          url: '/career',
          templateUrl: 'views/career.html'
        })

        .state('services', {
          url: '/services',
          templateUrl: 'views/services.html'
        })

        .state('contact', {
          url: '/contact',
          templateUrl: 'views/contact.html'
        });

}]);

