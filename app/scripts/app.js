'use strict';

/**
 * @ngdoc overview
 * @name boardApp
 * @description
 * # boardApp
 *
 * Main module of the application.
 */
angular
  .module('boardApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/quadro-de-anuncios', {
        templateUrl: 'views/quadro-de-anuncios.html',
        controller: 'QuadroDeAnunciosCtrl',
        controllerAs: 'quadroDeAnuncios'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
