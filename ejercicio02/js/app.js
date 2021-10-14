var app = angular.module('universidadApp',[]);
app.controller("profesorCtrl",function($scope){
    $scope.profesor = profesorData;
    $scope.profesorEdicion = {}; 
    $scope.mostrarEdicion = false;
    console.log($scope.profesor.nombre)

    $scope.EditarProfesor = function(){
        angular.copy($scope.profesor,$scope.profesorEdicion);
        $scope.mostrarEdicion = true;
    }
    $scope.GuardarInfo = function(){
        angular.copy($scope.profesorEdicion,$scope.profesor);
    }
    $scope.LimpiarInfo = function(){
        $scope.profesorEdicion = {};
    }
    $scope.CancelarInfo = function(){
        $scope.profesorEdicion = {};
        $scope.mostrarEdicion = false;
    }
});
var profesorData = {
    nombre: "Juan Carlos Pineda",
    bio: "Saludos estudiante, mi nombre es Juan Carlos, encantado de conocerte, soy una apasionado instructor de matemáticas aplicadas cuánticas, más orientado a la física termonuclear. Mi vocación es ser maestro y lograr transmitir mis conocimientos a todos mis estudiantes!.",
    edad: 47,
    foto: "img/juancarlos.jpg"
}