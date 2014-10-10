'use strict';

var angularReactModule = angular.module('angularReactApp', [
    'ngSanitize',
    'ngRoute',
    'ngReact'
])
    .config(function ($routeProvider, $httpProvider, $locationProvider) {
        $routeProvider
            .when('/repeat', {templateUrl: 'pages/repeat.html', controller: 'RepeatCtrl'})
            .when('/trackBy',{templateUrl: 'pages/track-by.html', controller: 'TrackByCtrl'})
            .when('/ngReact', {templateUrl: 'pages/react.html', controller: 'NGReactCtrl'})
            .when('/ngReactRepeat', {templateUrl: 'pages/react-repeat.html', controller: 'ReactRepeatCtrl'})
            .otherwise({redirectTo: '/repeat'});
    });

angularReactModule.service('dataGetterSvc', function($http, $q){

    this.getData = function(start, end){
        var result = $q.defer();
        $http.get('/api/user/list').success(function(data){
            return result.resolve(data.slice(start, end));
        }).error(function(err){
            console.log(err);
            return result.reject(err);
        });
        return result.promise;
    }

    this.getAdditionalRecords = function(numRecs){
        var result = $q.defer();
        $http.get('/api/user/more').success(function(data){
            return result.resolve(data.slice(0, numRecs));
        }).error(function(err){
            console.log(err);
            return result.reject(err);
        });
        return result.promise;
    }

});


