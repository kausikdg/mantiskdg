angular.module('app').controller('app_viewissues', app_viewissues);
function app_viewissues($scope, app) {
    'use strict';
    
    app.init($scope, function() {
        for (var i=0; i < $scope.data.issueslist.length; i++) {
            $scope.data.issueslist[i].id = 'Flex: ' + $scope.data.issueslist[i].id;
        }
    });
}