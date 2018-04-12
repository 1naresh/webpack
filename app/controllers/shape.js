
function shapesCtrl($scope,$state,dataService,$localStorage){
    $scope.products=$localStorage.user.products
    $scope.isLShape=true
    $scope.selectShape=function(state){
        $scope.kitchenShape=state
    }
    $scope.continue=function(){
        $localStorage.user.kitchenShape=$scope.kitchenShape
        $state.go($scope.kitchenShape) 
    }
    $scope.back=function(){
        $state.go('products')
    }
    $scope.over=function(shape){
        if(shape == 'UShape'){
            $scope.isLShape=false
            $scope.isUShape=true
        }else if(shape == 'parallelShape'){
            $scope.isLShape=false
            $scope.isparallelShape=true
        } 
        else if(shape == 'straightShape'){
            $scope.isLShape=false;
            $scope.isstraightShape=true
        }
    }
    $scope.leave=function(shape){
        if(shape == 'UShape'){
            $scope.isLShape=true
            $scope.isUShape=false  
        }else if(shape == 'parallelShape'){
            $scope.isLShape=true
            $scope.isparallelShape=false
        }
        else if(shape == 'straightShape'){
            $scope.isLShape=true;
            $scope.isstraightShape=false
        }
    }
} 
shapesCtrl.$inject=['$scope','$state','dataService','$localStorage'];
export default shapesCtrl;