var app = angular.module("app",[]);


app.controller('emp',['$scope',function ($scope) {
    $scope.msg = "This is Message from controller via directive";
}]);

app.directive('myInfoMsg',function () {
    return {
        /*template : "<strong>this is directive</strong>"*/
        template : "<strong>{{msg}}</strong>"
    };
});


