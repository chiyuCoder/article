angular
.module('recommends')
.component('recommends', {
    templateUrl: 'web/recommends.html',
    controller: function recommends($http) {
        var self = this;
        
        $http.get("json/recommends.json").then(function (response) {
            self.books = response.data;
        });
    }
});
//json/recommends.json