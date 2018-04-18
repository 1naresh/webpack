
import img2 from '../img/2.jpg';
import img3 from '../img/3.jpg';
import img4 from '../img/4.jpg';
import img5 from '../img/5.jpg';
import img6 from '../img/6.jpg';
function kitchenSheetsCtrl($scope,$state,dataService,$window,$localStorage){
    document.getElementById('2img').src=img2 
    document.getElementById('3img').src=img3 
    document.getElementById('4img').src=img4 
    document.getElementById('5img').src=img5 
    document.getElementById('6img').src=img6 
    $scope.heading="kitchen sheets";
    var user=$localStorage.user;
    $scope.products=user.products;
    $scope.kitchenShape=user.kitchenShape;
    $scope.kitchenAamount=user.kitchenAamount;
    user.kitchenCost1=0
    user.kitchenCost2=0
    user.kitchenHardware=0
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
        user.kitchenHardware=$scope.selectedHardware;
        if(user.kitchenCost1 && user.kitchenCost2 && user.kitchenHardware){
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