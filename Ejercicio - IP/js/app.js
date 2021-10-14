var app = angular.module('myApp',[]);
app.controller('ipCtrl',['$scope','$http',function($scope,$http) {
    // http://www.geoplugin.net/json.gp?ip=xx.xx.xx.xx
    $scope.geo = {};
    var url = "http://www.geoplugin.net/json.gp?ip=187.188.8.62";
    $http.jsonp(url, {jsonpCallbackParam: 'jsoncallback'})
        .then(function(respuesta) {
        $scope.geo = respuesta.data;
        console.log(respuesta.data);
        })
}])