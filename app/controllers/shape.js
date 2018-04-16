import lShapeImg from '../img/l-shape.png';
import pShapeImg from '../img/p-shape.png';
import sShapeImg from '../img/s-shape.png';
import uShapeImg from '../img/u-shape.png';

function shapesCtrl($scope,$state,dataService,$localStorage){
    var pic=document.getElementById('pics')
    pic.src=lShapeImg    
    $scope.products=$localStorage.user.products
    var isSelected=false
    $scope.selectShape=function(state){
        isSelected=true;
        $scope.kitchenShape=state;
        if(state == 'LShape') pic.src=lShapeImg 
        if(state == 'UShape') pic.src=uShapeImg 
        if(state == 'parallelShape') pic.src=pShapeImg 
        if(state == 'straightShape') pic.src=sShapeImg 
    }
    $scope.continue=function(){
        $localStorage.user.kitchenShape=$scope.kitchenShape
        $state.go($scope.kitchenShape)  
    }
    $scope.back=function(){
        $state.go('products')
    }
    $scope.over=function(shape){
        if(shape == 'UShape') if(!isSelected) pic.src=uShapeImg                                
        if(shape == 'parallelShape') if(!isSelected) pic.src=pShapeImg           
        if(shape == 'straightShape') if(!isSelected) pic.src=sShapeImg 
        if(shape == 'LShape') if(!isSelected) pic.src=lShapeImg; 
    }
    // $scope.leave=function(shape){
    //     if(shape == 'UShape'){
    //         $scope.isLShape=true
    //         $scope.isUShape=false  
    //     }else if(shape == 'parallelShape'){
    //         $scope.isLShape=true
    //         $scope.isparallelShape=false
    //     }
    //     else if(shape == 'straightShape'){
    //         $scope.isLShape=true;
    //         $scope.isstraightShape=false
    //     }
    // }
} 
shapesCtrl.$inject=['$scope','$state','dataService','$localStorage'];
export default shapesCtrl;