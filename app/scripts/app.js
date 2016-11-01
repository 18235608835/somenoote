'use strict';
/**
 * @ngdoc overview
 * @name aApp
 * @description
 * # aApp
 *
 * Main module of the application.
 */
angular
  .module('aApp', ["ui.router","ngCookies","zuce","denglu","he"])
  .constant("server","http://www.somenote.cn:1510")
  .controller("w",["$scope","$http",function ($scope,$http) {
  }]).config(["$stateProvider","$urlRouterProvider",function ($stateProvider,$urlRouterProvider){
  	$stateProvider.state("yi",{
  		url:"/yi",
  		templateUrl:"views/yi.html",
      controller:"yi"
  	})
    .state("er",{
      url:"/er",
      templateUrl:"views/er.html",
      controller:"er"
    })
    .state("san",{
      url:"/san",
      templateUrl:"views/ceng.html",
      controller:"san"
    })
    .state("si",{
      url:"/si?id&title&content",
      templateUrl:"views/bianji.html",
      controller:"san"
    })


   
  	$urlRouterProvider.when('','/yi');
  }])
