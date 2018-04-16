
function fulllInteriorsCtrl($scope,$state,dataService,$localStorage){
    var user=$localStorage.user;
    $scope.products=user.products;
    $scope.kitchenShape=user.kitchenShape
    $scope.kitchenAamount=user.kitchenAamount; 
    $scope.kitchenCost1=user.kitchenCost1
    $scope.kitchenCost2=user.kitchenCost2;
    $scope.bedroomType=user.bedroomType;
    $scope.bedRoomAmount=user.bedRoomAmount;
    $scope.bedroomCost1=user.bedroomCost1;
    $scope.bedroomCost2=user.bedroomCost2;
    $scope.interiors=[];
    $scope.isFullInteriors=true;
    $scope.isEntertainment=function(){
        if($scope.entertainment){
            $scope.interiors.push('Entertainment Unit')
        }else{
            var index=$scope.interiors.indexOf('Entertainment Unit')
            $scope.interiors.splice(index,1)
        }
    }
    $scope.isStudy=function(){
        if($scope.study){
            $scope.interiors.push('Study Unit')
        }else{
            var index=$scope.interiors.indexOf('Study Unit')
            $scope.interiors.splice(index,1)
        }
    }
    $scope.isCrockery=function(){
        if($scope.crockery){
            $scope.interiors.push('Crockery Unit')
        }else{
            var index=$scope.interiors.indexOf('Crockery Unit')
            $scope.interiors.splice(index,1)
        }
    }
    $scope.toRegister=function(){
        user.interiors=$scope.interiors;
        $state.go('hardware') 
    }
    $scope.back=function(){
        if(user.products.indexOf('wardrobe') == 1){
            $state.go('wordrobes')
        }else{
            $state.go('shapes')
        }
    }
}
fulllInteriorsCtrl.$inject=['$scope','$state','dataService','$localStorage'];
export default fulllInteriorsCtrl;