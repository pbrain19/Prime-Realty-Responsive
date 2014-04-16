'use strict';


// Declare app level module which depends on filters, and services
angular.module('PrimeWebsite', ['PrimeWebsite.filters', 'PrimeWebsite.services', 'PrimeWebsite.directives',  'ui.bootstrap']).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home.html' });
    $routeProvider.when('/contact', {templateUrl: 'partials/form.html' });
    $routeProvider.when('/listings', {templateUrl: 'partials/ListingD.html' });
    $routeProvider.when('/openhouses', {templateUrl: 'partials/openhouses.html' });
    
    $routeProvider.when('/agents', {templateUrl: 'partials/agents.html' });
    $routeProvider.when('/sell', {templateUrl: 'partials/sell.html' });
        $routeProvider.otherwise({redirectTo: '/home'});
    
  }]);

