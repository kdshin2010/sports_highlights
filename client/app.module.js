 
(function(){
  'use strict';
  angular
  .module('myApp', ['ngRoute'])
  .config(ConfigFunction)

//Config Function
  function ConfigFunction($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: 'views/Register.html'
    }).
    when('/register', {
      templateUrl: 'views/Register.html'
    }).
    when('/login', {
      templateUrl: 'views/Login.html'
    }).
    when('/Profile/:person_id', {
      templateUrl: '/views/Profile.html'
    }).
    when('/single/:post_id', {
      templateUrl: 'views/SinglePost.html'
    }).
    when('/posts', {
      templateUrl: 'views/Posts.html'
    })
  }
})()






