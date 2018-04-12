
function wordrobesCtrl($scope,$state,dataService,$localStorage){
    var user=$localStorage.user
    $scope.products=user.products;
    $scope.kitchenShape=user.kitchenShape
    $scope.kitchenAamount=user.kitchenAamount;
    $scope.kitchenCost1=user.kitchenCost1
    $scope.kitchenCost2=user.kitchenCost2;
    $scope.bedroomType=""
    $scope.selectShape=function(number){
        if(number == '1'){
            $scope.bedroomType='singleBed'
        }else if(number == '2'){
            $scope.bedroomType='doubleBed';
        }
        else if(number == '3'){ 
            $scope.bedroomType='tripleBed';
        }
    }
    $scope.toShape=function(){
            $localStorage.user.bedroomType= $scope.bedroomType;
            $state.go($scope.bedroomType)
    }
    $scope.back=function(){
        $state.go('kitchenSheets') 
    }
}
wordrobesCtrl.$inject=['$scope','$state','dataService','$localStorage'];
export default wordrobesCtrl;