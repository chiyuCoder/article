angular
.module('article')
.config(['$locationProvider', '$routeProvider', function config($locationProvider,$routeProvider) {
    $locationProvider.hashPrefix("!");
    
    $routeProvider
    .when('/recommends/:id', {
        template:"<bookdetail></bookdetail>"
        //templateUrl: "web/bookdetail.html"
    })
        .when("/recommends", {
        template:"<recommends></recommends>"
    })  
        .otherwise("/recommends");
}])