var mainApp = angular.module("mainApp", ['ngRoute']);
mainApp.config(function($routeProvider) {
 $routeProvider.
  when('/home', {
   templateUrl: 'html/home.html',
  }).
  when('/addnewmenu', {
   templateUrl: 'html/addnewmenu.html',
  }).
  when('/viewmenus', {
   templateUrl: 'html/viewmenus.html',
   controller: 'menusController'
  }).
  when('/deletemenu', {
   templateUrl: 'html/deletemenu.html',
   controller: 'deleteMenuController'
  }).
  when('/editmenu', {
   templateUrl: 'html/editmenu.html',
   controller: 'editMenuController'
  }).
  when('/addnewdiet', {
   templateUrl: 'html/addnewdiet.html'
  }).
  when('/addnewresource', {
   templateUrl: 'html/addnewresource.html'
   
  }).
  when('/viewresources', {
   templateUrl: 'html/viewresources.html',
   controller: 'dietsController'
   
  }).
  otherwise({
   redirectTo: '/home'
  });
 });
 
 mainApp.controller('menusController', ['$scope', '$http', function($scope, $http) {
  $http.get('/menus').then(function(response) {
   $scope.menus = response.data;
  });
 }]);
 
 mainApp.controller('deleteMenuController', ['$scope', '$http', function($scope, $http) {
  $http.get('/menus').then(function(response) {
   $scope.menus = response.data;
  });
  $scope.deleteMenu = function() {
   $http.delete('/menus/' + $scope.x.menu_id)
    .success(function(response, status, headers, config) {})
    .error(function(response, status, headers, config) {
     $scope.error_message = response.error_message;
    });
  }
 }]);
 
 
 
 mainApp.controller('editMenuController', ['$scope', '$http', function($scope, $http) {
  $http.get('/menus').then(function(response) {
   $scope.menus = response.data;
  });
 
 
 $scope.currentItem = null; 
 $scope.editItem = function(item){
   $scope.currentItem = item;
 }  
  $scope.updateMenu = function() {
   $http.put('/menus/' + $scope.x.menu_id, $scope.currentItem).
   success(function(data) {
    console.log("put successful");
   }).error(function(data) {
    console.error("error in put http request");
   })
   $scope.bookEdit = "";
  }
  
   
 
 
 }]);

mainApp.controller('dietsController', ['$scope', '$http', function($scope, $http) {
  $http.get('/diets').then(function(response) {
   $scope.diets = response.data;
  });
 }]);

 