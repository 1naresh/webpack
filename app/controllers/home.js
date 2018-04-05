function homeCtrl($scope,$state,dataService){
    $scope.getEstimate=function(){
        $state.go('products')
    }
}
homeCtrl.$inject=['$scope','$state','dataService']
export default homeCtrl;