var app = angular.module('RepetirApp',[]);
app.controller("listasCtrl",['$scope',function($scope){
    $scope.listaProfesor = {
        profesores:[
            {
                id:1,
                nombre:"Víctor Hugo",
                edad:22,
                clase:"FrontEnd"
            },
            {
                id:2,
                nombre:"Abril de Jesus",
                edad:39,
                clase:"POP"
            },
            {
                id:3,
                nombre:"Leonardo",
                edad:15,
                clase:"Noob"
            }
        ]
    }
}]);
