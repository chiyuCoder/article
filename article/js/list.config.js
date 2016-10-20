angular
.module('bookList')
.config(['$locationProvider', '$routeProvider',function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix("!");
    
    $routeProvider
    .when("/class", {
        template:"<ranklist></ranklist>"
    })
    .when("/class/:pyClass", {
        template: "<ranklist></ranklist>"
    })
    .when("/class/:bookWriter", {
        template: "<ranklist></ranklist>"
    })
    .otherwise("/class");
}])