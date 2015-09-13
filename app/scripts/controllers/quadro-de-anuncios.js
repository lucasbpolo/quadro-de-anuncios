'use strict';

/**
 * @ngdoc function
 * @name boardApp.controller:QuadroDeAnunciosCtrl
 * @description
 * # QuadroDeAnunciosCtrl
 * Controller of the boardApp
 */
angular.module('boardApp')
  .controller('QuadroDeAnunciosCtrl', ['$scope', 'quadroDeAnunciosService','$firebaseArray', '$window', '$timeout', function ($scope, quadroDeAnunciosService, $firebaseArray, $window, $timeout) {
    var self = this;

	var ref = new $window.Firebase("https://congregacao-jambeiro.firebaseio.com");

    self.json = $firebaseArray(ref);

    $scope.$watch(function(){
      return self.json;
    }, function() {	
	  $timeout(function(){
	   	self.json.$save(self.edicao);
	  }, 500);
   	}, true);



    self.mesAtivo = 'Setembro';

    self.porMeses = function(item){
      return item.mes === self.mesAtivo;
	};

	self.editReuniao = function(reuniao){
	  self.edicao = reuniao;
	};
  }]);
