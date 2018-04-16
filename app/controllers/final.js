
function finalCtrl($scope,$state,dataService,$localStorage){
    var user=$localStorage.user
    console.log(user)
    $scope.result=user;
    dataService.updateUser(user)
    // dataService.getData(phone).then(function(res){
    //     console.log(res.data)
    //     $scope.result=res.data
    // })
    // $scope.result=dataService.getData();
    $scope.toHome=function(){
        $state.go('home')
    }
    $scope.edit= () =>{
        
    }
    $scope.submit=(obj)=>{
        console.log(obj)
    }
}
finalCtrl.$inject=['$scope','$state','dataService','$localStorage'];
export default finalCtrl;