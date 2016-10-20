angular
.module('ranklist')
.component('ranklist',{
    templateUrl: 'web/ranklist.html',
    controller: function ($http, $routeParams) {
        var self = this;
        self.listby = 'vistor';
        self.query = $routeParams.pyClass ? $routeParams.pyClass : $routeParams.bookWriter;
        $http.get('json/recommends.json').then(function (response) {
            self.books = response.data;
        });
    }
});