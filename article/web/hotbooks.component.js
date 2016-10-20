angular
.module('hotbooks')
.component('hotbooks', {
    templateUrl: 'web/hotbooks.html',
    controller : function ($http) {
        var self = this;
        
        $http.get("json/recommends.json").then(function (response) {
            self.hotbooks = response.data;
        });
    }
});