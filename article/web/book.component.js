angular
.module('bookpage')
.component('bookpage', {
    templateUrl:'web/book.html',
    
    controller: function ($http,  $routeParams) {
        var self = this;
        $http.get("json/recommends." + $routeParams.id + ".json").then(function (response) {
           self.book = response.data; 
        });
    }
})