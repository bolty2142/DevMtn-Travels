/**
 * Created by beebe on 3/13/2017.
 */
angular.module("devmtnTravel").controller("packagesCtrl",function($scope,mainSrv){

    $scope.getTravel = mainSrv.travelInfo;


});