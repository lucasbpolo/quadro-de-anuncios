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
    var congregations = {
      'congregacao-vila-real': 'https://congregacao-vila-real.firebaseio.com',
      'congregacao-jambeiro': 'https://congregacao-jambeiro.firebaseio.com',
      'congregacao-vila-cury': 'https://congregacao-vila-cury.firebaseio.com'
    };
    var name = location.hostname.split('.appspot')[0];
    var ref;

    if(congregations[name]){
      ref = new $window.Firebase(congregations[name]);
    }else{
      ref = new $window.Firebase('https://congregacao-jambeiro.firebaseio.com');
    }

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
    if(reuniao.semana_especial){
      return false;
    }
	  $window.$('#editReuniao').modal();
	  self.edicao = reuniao;
	};
  }]);
