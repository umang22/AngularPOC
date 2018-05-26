var app = angular.module("app", []);
app.controller('emp', ['$scope', 'empService', function($scope, empService){
    empService.getEmployees(function(r){
        $scope.employees = r;
    });
}]);

app.service('empService', ['$http', '$log', function($http, $log){
    this.getEmployees = function(cb){
        $http({
            url: 'http://www.mocky.io/v2/5b0162d9300000730020a75f/',
            method: 'GET'
        }).then(function(resp){
            //$log.log(resp.data);
            cb(resp.data);
        },function(resp){
            $log.error("ERROR occurred");
        });
    };
}]);

app.directive('empDetails', function(){
    return{
        templateUrl: 'emp-details.htm'
    }
});