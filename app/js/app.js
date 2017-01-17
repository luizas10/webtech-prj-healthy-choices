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
   templateUrl: 'html/addnewdiet.html'//,
   //controller: 'addDietController'
  }).
  when('/addnewresource', {
   templateUrl: 'html/addnewresource.html'
   
  }).
  when('/viewresources', {
   templateUrl: 'html/viewresources.html',
   controller: 'resourcesByDietController'
   
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
   $http.delete('/menus/' + $scope.x.menu_id).then(function(del) {
       $http.get('/menus').then(function(response) {
           $scope.menus = response.data;
       });
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
   // $scope.updateDiet = function() {
   //    setTimeout('', 3000);
   //    $http.get('/diets').then(function(response) {
   //     $scope.diets = response.data;
   //    });
    
   // }
 }]);
 
 

 mainApp.controller('resourcesController', ['$scope', '$http', function($scope, $http) {
  $http.get('/resources').then(function(response) {
   $scope.resources = response.data;
  });
 }]);
 
mainApp.controller('resourcesByDietController', ['$scope', '$http', function($scope, $http) {
   $scope.getResources = function(item){
       $http.get('/resourcesByDietController/' + item.diet_id).then(function(response) {
         $scope.resources = response.data;
      });
   
   }  
 }]);