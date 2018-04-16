
function kitchenSheetsCtrl($scope,$state,dataService,$window,$localStorage){
    $scope.heading="kitchen sheets";
    var user=$localStorage.user;
    $scope.products=user.products;
    $scope.kitchenShape=user.kitchenShape;
    $scope.kitchenAamount=user.kitchenAamount;
    user.kitchenCost1=0
    user.kitchenCost2=0
     $scope.costs1=[75,100,125,150,175,200,225,250]   
     $scope.costs2=[75,100,125,150,175,200,225,250]   
     $scope.onSelect1=function(cost){
         user.kitchenCost1=cost * user.kitchenSize;
         $scope.kitchenCost1=user.kitchenCost1
         $scope.warning=false
     }
     $scope.onSelect2=function(cost){
        user.kitchenCost2=cost * user.kitchenSize;
        $scope.kitchenCost2=user.kitchenCost2
        $scope.warning=false        
    } 
    $scope.toRegister=function(){
        if(user.kitchenCost1 && user.kitchenCost2){
            if(user.products.indexOf('wordrobe') == 1 ){
                $state.go('wordrobes')
            }else if(user.products.indexOf('fullInteriors') == 2){
                $state.go('fullInteriors')
            }else{
                $state.go('final')
            }
        }
        else{
            $scope.warning=true;
        }        
    }
    $scope.back=function(){
        $state.go(user.kitchenShape)
    }
} 
 
kitchenSheetsCtrl.$inject=['$scope','$state','dataService','$window','$localStorage'];
export default kitchenSheetsCtrl;