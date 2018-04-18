function hardwareCtrl($scope,$localStorage,$state){
    var user=$localStorage.user
    user.hardWareCost=0
    $scope.submit=function(){
        user.selectedHardware=$scope.selectedHardware
        if($scope.selectedHardware == 'hetich'){
            user.hardWareCost += 1000;
            if(user.products.indexOf("wordrobe") != -1){
                user.hardWareCost += 1000
            }
            if(user.products.indexOf('fullInteriors') != -1){
                user.hardWareCost +=1000
            }
        }else if($scope.selectedHardware == 'hefele'){
            user.hardWareCost += 2000
            if(user.products.indexOf("wordrobe") != -1){
                user.hardWareCost += 2000
            }
            if(user.products.indexOf('fullInteriors') != -1){
                user.hardWareCost += 2000
            }
        }
        if($scope.selectedHardware){
            $state.go('final')
        }else if(!$scope.selectedHardware){
            alert("please select")
        }
    }
    $scope.back=function(){
        if(user.products.indexOf('fullInteriors') == 2 ){
            $state.go('fullInteriors')
        }else if(user.products.indexOf('wordrobe') == 1){
            $state.go('wordrobes')
        }
    }
}
hardwareCtrl.$inject=['$scope','$localStorage','$state']
export default hardwareCtrl;