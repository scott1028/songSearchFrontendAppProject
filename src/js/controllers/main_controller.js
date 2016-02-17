angular.module('SongSearcher.controllers.Main', [])

.controller('MainController', ['$scope', 'SearchSong', function($scope, SearchSong){

    $scope.form = {
        keyword: ''
    };
    $scope.records = [];

    // constructor
    SearchSong.list(function(data, status) {
        console.log(data);
        $scope.records = data.data.RECORDS;
    }, function(data, status) {
        console.error(data);
        alert('Some errr here!');
    });


    $scope.$watch('form.keyword', function(newValue, oldValue) {
        if(newValue === oldValue) return;
        console.log(newValue);
    }, true);
}]);