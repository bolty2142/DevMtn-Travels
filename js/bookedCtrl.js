/**
 * Created by beebe on 3/13/2017.
 */
angular.module("devmtnTravel").controller("bookedCtrl",function($scope,mainSrv,$stateParams){

$scope.gettingParams = mainSrv.travelInfo;

    for(var i =0;i< mainSrv.travelInfo.length;i++){
        if (mainSrv.travelInfo[i].id == $stateParams.id) {
            $scope.city = mainSrv.travelInfo[i].city;
            $scope.background = {
                "background-image": "url(" + mainSrv.travelInfo[i].image + ")",
                "background-size": "contain"
            };
        }

    }





});
