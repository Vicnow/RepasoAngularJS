var app = angular.module('ejemplosApp',[ ]);

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
    
	$scope.profesores = {};
	$scope.tablaProfesores = 'parciales/tablaProfesores.html';

  	$http.get('json/profesores.json')
	.then(function(respuesta){
  		//Codigo cuando es correcta la petición
  		$scope.profesores = respuesta.data.profesores;
  	});
}]);