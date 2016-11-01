var app=angular.module('zuce',[]).controller("er",["$scope","$http",function ($scope,$http) {
      $scope.zuce=function(){
         //alert()
         $http({
           url:"http://www.somenote.cn:1510/users",
           method:"post",
           data:$scope.updata
         }).success(function(e){

            window.location.href="index.html#/yi"                              
         })

      }
  }])

