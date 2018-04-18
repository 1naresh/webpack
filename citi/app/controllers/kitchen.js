import lShapeImg from '../img/l-shape.png';
import pShapeImg from '../img/p-shape.png';
import uShapeImg from '../img/u-shape.png';
import sShapeImg from '../img/s-shape.png';

function kitchenCtrl($scope,$state,dataService,$window,$localStorage){
    if($state.current.name == "LShape" ){
        document.getElementById('lShapeImg').src=lShapeImg        
    }
    if($state.current.name == "UShape" ){
        document.getElementById('uShapeImg').src=uShapeImg       
    }
    if($state.current.name == "parallelShape" ){
        document.getElementById('pShapeImg').src=pShapeImg       
    }
    if($state.current.name == "straightShape" ){
        document.getElementById('sShapeImg').src=sShapeImg     
    }    
    $scope.heading='What is the size of your kitchen?';
    $scope.products=$localStorage.user.products;
    $scope.kitchenShape=$localStorage.user.kitchenShape
    $scope.Math = $window.Math;
    var amount=0;
    var size=0;
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
            size=wallA+wallB+wallC
            amount+=(wallA+wallB+wallC)*100
            $scope.goNext=true
        }else if(wallA+wallB+wallC > 5){
            size=wallA+wallB+wallC
            amount+=500+((wallA+wallB+wallC-5)*200)
            $scope.goNext=true
        }
        if($state.current.name == 'LShape' || $state.current.name == 'parallelShape'){
            if(wallA == 0 || wallB ==0){
                $scope.goNext=false;
                $scope.warning=true;
            }
        }else if($state.current.name == 'UShape'){
            if(wallA == 0 || wallB ==0 ||wallC ==0){
                $scope.goNext=false;
                $scope.warning=true;
            }
        }else if($state.current.name == 'straightShape'){
            if(wallA == 0){
                $scope.goNext=false;
                $scope.warning=true;
            }
        }
        $localStorage.user.kitchenAamount=amount
        $localStorage.user.kitchenSize=size
        $localStorage.user.kitchenwallA=parseFloat(($scope.wallA/12).toFixed(1))
        $localStorage.user.kitchenwallB=parseFloat(($scope.wallB/12).toFixed(1))
        $localStorage.user.kitchenwallC=parseFloat(($scope.wallC/12).toFixed(1))
    }
    $scope.toRegister=function(){
        calculate()
        if($scope.goNext){
            // if(dataService.user.products.indexOf('wardrobe') == 1){
            //     $state.go('wordrobes')
            // }else if(dataService.user.products.indexOf('fulllInteriors') == 1){
            //     $state.go('fulllInteriors')
            // }else{
            //     $state.go('register')
            // }
            $state.go('kitchenSheets') 
        }        
    }
    $scope.back=function(){
        $state.go('shapes')
    }
} 
 
kitchenCtrl.$inject=['$scope','$state','dataService','$window','$localStorage'];
export default kitchenCtrl;