var app = angular.module('ejemplosApp',[ ]);

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
    $scope.profesores = {}
    $http.get('json/profesores.json')
    .then(function(respuesta){
        console.log(respuesta)
        $scope.profesores = respuesta.data.profesores;
    })
    .catch(function(err){

    })
    .finally(function(){

    })
}]);