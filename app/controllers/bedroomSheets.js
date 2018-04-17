import img2 from '../img/2.jpg';
import img3 from '../img/3.jpg';
import img4 from '../img/4.jpg';
import img5 from '../img/5.jpg';
import img6 from '../img/6.jpg';
function bedroomSheetsCtrl($scope,$window,dataService,$state,$localStorage){
    document.getElementById('2img').src=img2 
    document.getElementById('3img').src=img3 
    document.getElementById('4img').src=img4 
    document.getElementById('5img').src=img5 
    document.getElementById('6img').src=img6 
    $scope.isBedSheets=true;
    $scope.heading="bedroom sheets"
    var user=$localStorage.user;
    $scope.products=user.products;
    $scope.kitchenShape=user.kitchenShape
    $scope.kitchenAamount=user.kitchenAamount; 
    $scope.kitchenCost1=user.kitchenCost1
    $scope.kitchenCost2=user.kitchenCost2;
    $scope.bedroomType=user.bedroomType;
    $scope.bedRoomAmount=user.bedRoomAmount;
    user.bedroomCost1=0
    user.bedroomCost2=0
     $scope.costs1=[75,100,125,150,175,200,225,250]   
     $scope.costs2=[75,100,125,150,175,200,225,250]   
     $scope.onSelect1=function(cost){
         user.bedroomCost1=cost * user.bedRoomSize;
         $scope.bedroomCost1=user.bedroomCost1
         $scope.warning=false
     }
     $scope.onSelect2=function(cost){
        user.bedroomCost2 = cost * user.bedRoomSize;
        $scope.bedroomCost2=user.bedroomCost2;
        $scope.warning=false        
    }
    $scope.toRegister=function(){
        if(user.bedroomCost1 && user.bedroomCost2){
            if((user.products.indexOf('fullInteriors') == 2) || (user.products.indexOf('fulllInteriors') == 1)){
                $state.go('fullInteriors')
            }else{
                $state.go('hardware')
            }
        }
        else{
            $scope.warning=true;
        }        
    }
    $scope.back=function(){
        $state.go(user.bedroomType)
    }
}
bedroomSheetsCtrl.$inject=['$scope','$window','dataService','$state','$localStorage'];
export default bedroomSheetsCtrl;