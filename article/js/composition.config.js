angular
.module('composition')
.config(['$locationProvider', '$routeProvider', function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix("!");
    
    $routeProvider
    .when("/book/:id", {
        template:"<bookpage></bookpage>"
    })
    .when("/book/zcgg", {
        template:"<bookpage></bookpage>"
    })
    .otherwise("/book/zcgg")
}])