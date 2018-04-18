
import bed1Image from '../img/Wadrobe 1.png';
import bed2Image from '../img/Wardrobe 2.png';
import bed3Image from '../img/Wardrobe 3.png';

function bedCtrl($scope,$window,dataService,$state,$localStorage){
    if($state.current.name == 'singleBed'){
        document.getElementById("image").src=bed1Image
    }
    if($state.current.name == 'doubleBed'){
        document.getElementById("image").src=bed2Image
    }
    if($state.current.name == 'tripleBed'){
        document.getElementById("image").src=bed3Image
    }
    var user=$localStorage.user;
    $scope.products=user.products;
    $scope.kitchenShape=user.kitchenShape
    $scope.kitchenAamount=user.kitchenAamount; 
    $scope.kitchenCost1=user.kitchenCost1
    $scope.kitchenCost2=user.kitchenCost2;
    $scope.bedroomType=user.bedroomType;
    $scope.Math = $window.Math;
    $scope.heading='My wardrobe length(s) are'
    var amount=0
    var size=0 
    $scope.wallA=0
    $scope.wallB=0
    $scope.wallC=0
    $scope.goNext=true;
    $scope.warning=false;
    function calculate(){
        var wallA=Math.floor($scope.wallA/12)
        var wallB=Math.floor($scope.wallB/12)
        var wallC=Math.floor($scope.wallC/12)
        if(wallA+wallB+wallC <= 5 && wallA+wallB+wallC > 0){
            amount+=(wallA+wallB+wallC)*100
            size=wallA+wallB+wallC
            $scope.goNext=true
        }else if(wallA+wallB+wallC > 5){
            amount+=500+((wallA+wallB+wallC-5)*200)
            size=wallA+wallB+wallC
            $scope.goNext=true
        }
        if($state.current.name == 'doubleBed'){
            if(wallA == 0 || wallB ==0){
                $scope.goNext=false;
                $scope.warning=true;
            }
        }else if($state.current.name == 'tripleBed'){
            if(wallA == 0 || wallB ==0 ||wallC ==0){
                $scope.goNext=false;
                $scope.warning=true;
            }
        }else if($state.current.name == 'singleBed'){
            if(wallA == 0){
                $scope.goNext=false;
                $scope.warning=true;
            }
        }
        $localStorage.user.bedRoomAmount=amount;
        $localStorage.user.bedRoomSize=size;
        $localStorage.user.bedwallA=parseFloat(($scope.wallA/12).toFixed(1))
        $localStorage.user.bedwallB=parseFloat(($scope.wallA/12).toFixed(1))
        $localStorage.user.bedwallC=parseFloat(($scope.wallA/12).toFixed(1))
    }
    $scope.toRegister=function(){
        calculate()
        if($scope.goNext){
            // if(dataService.user.products.indexOf('fulllInteriors') == 2){
            //     $state.go('fulllInteriors')
            // }else{
            //     $state.go('register')
            // }      
            $state.go('bedroomSheets')
        }        
    }
    $scope.back=function(){
        $state.go('wordrobes')
    }
}
bedCtrl.$inject=['$scope','$window','dataService','$state','$localStorage'];
export default bedCtrl;