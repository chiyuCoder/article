angular
.module('bookdetail')
.component('bookdetail',{/*
    template:"<span>{{$ctrl.id}}</span>",
    controller: function bookdetail($routeParams) {
        this.id = $routeParams.id;        
    }
    */
    templateUrl: 'web/bookdetail.html',
    controller:['$http','$routeParams', function ($http,$routeParams) {
        var self = this; $http.get("json/recommends." + $routeParams.id + ".json").then(function (response) {
            self.book = response.data;
        })
    }]
});