/**
 * Created by beebe on 3/13/2017.
 */
angular.module("devmtnTravel").controller("locationsCtrl",function($scope,mainSrv){

    $scope.getTravel = mainSrv.travelInfo;




});