
function finalCtrl($scope,$state,dataService){
    dataService.getData().then(function(res){
        $scope.result=res.data
    })
    // $scope.result=dataService.getData();
    $scope.toHome=function(){
        dataService.user={}
        $state.go('home')
    }
}
finalCtrl.$inject=['$scope','$state','dataService'];
export default finalCtrl;