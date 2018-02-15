var filestructureAppModule = angular.module("fileApp", []);    
 filestructureAppModule.controller("fileCtrl", function ($scope,$http) {    
   $http.get('datastructure.json')    
   .success(function(data){    
     $scope.filelisting = data;    
	 
	$scope.sortType     = 'name'; 
	$scope.sortReverse  = false; 
	$scope.sortAdded   = 'added';     		 
	 
   })  
   
   .error(function(data,status){    
       console.error('Fail to load data', status, data);
       $scope.filelisting = {};     
   });    
 });    