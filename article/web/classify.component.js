angular
.module('classes')
.component('classes', {
    templateUrl:'web/classify.html',
    controller: function classify ($http) {
        var self = this;
        
        $http.get('json/classify.json').then(function (response) {
            self.classes = response.data;
        });
    }
}
    );