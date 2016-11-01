var app=angular.module('denglu',[]).controller("yi",["$scope","$http","$state","$cookieStore","$cookies",function ($scope,$http,$state,$cookieStore,$cookies) {
      if($cookies.get('usernam',$scope.updata)){
          $state.go('san')
        }

      $scope.denglu=function(){
         //alert()
         $http({
           url:"http://www.somenote.cn:1510/users/login",
           method:"post",
           data:$scope.updata
         }).success(function(e){
          //debugger
            $cookieStore.put("abc",e.uid);    
            $state.go('san')
            if($scope.abc==true){
              $cookieStore.put("usernam",$scope.updata);        
              var expireDate = new Date();
              expireDate.setDate(expireDate.getDate() + 6);
              $cookies.put('usernam', $scope.updata, {'expires': expireDate});
            }
                                        
         })

      }
  }])

