/// <reference path="angular.min.js" />
var app = angular.module('app', [])
.controller('myCtrl', ['$scope', function ($scope) {
    var times = ["1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "0:00", ];
    $scope.times = times;
    var todos = [
        {
            name: 'Get up',
            time: '6:00',
            nameClass: '',
            stt:'Uncomplete'
        }
    ];
    $scope.todos = todos;

    $scope.save = function () {
        if ($scope.name && $scope.time) {
            $scope.todos.push(
                { name: $scope.name, time: $scope.time, stt: 'Uncomplete' }
                );
        }
    }

    $scope.delete = function (index) {
        $scope.todos.splice(index, 1);
    }

    $scope.complete = function (index,event) {
        console.log("abc"); 
        $scope.todos[index].nameClass = 'complete';
        $scope.todos[index].stt = 'Completed';
    }
}])

;
