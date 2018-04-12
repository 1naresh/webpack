
function homeCtrl($scope,$state,$stateParams,$localStorage){
    $localStorage.user={}
    $scope.toProducts=function(){
        $state.go('register')
    }
}
homeCtrl.$inject=['$scope','$state','$stateParams','$localStorage'];
export default homeCtrl;