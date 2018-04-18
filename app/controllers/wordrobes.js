import bed1Image from '../img/Wadrobe 1.png';
import bed2Image from '../img/Wardrobe 2.png';
import bed3Image from '../img/Wardrobe 3.png';
function wordrobesCtrl($scope,$state,dataService,$localStorage){
    var bed_image= document.getElementById("image")
    bed_image.src=bed1Image;
    var user=$localStorage.user
    $scope.products=user.products;
    $scope.kitchenShape=user.kitchenShape
    $scope.kitchenAamount=user.kitchenAamount;
    $scope.kitchenCost1=user.kitchenCost1
    $scope.kitchenCost2=user.kitchenCost2;
    $scope.bedroomType=""
    $scope.isWordrobe=true
    var selected=false
    $scope.selectShape=function(number){
        selected=true
        if(number == '1'){
            if(number ==1 ) bed_image.src=bed1Image
            $scope.bedroomType='singleBed'
        }else if(number == '2'){
            if(number ==2 ) bed_image.src=bed2Image
            $scope.bedroomType='doubleBed';
        }
        else if(number == '3'){ 
            if(number ==3 ) bed_image.src=bed3Image
            $scope.bedroomType='tripleBed';
        }
    }
    $scope.toShape=function(){
            $localStorage.user.bedroomType= $scope.bedroomType;
            $state.go($scope.bedroomType)
    }
    $scope.over=function(number){ 
        if(!selected){
            if(number ==1 ) bed_image.src=bed1Image
            if(number ==2 ) bed_image.src=bed2Image
            if(number ==3 ) bed_image.src=bed3Image
        }
    }
    $scope.back=function(){
        $state.go('kitchenSheets') 
    }
}
wordrobesCtrl.$inject=['$scope','$state','dataService','$localStorage'];
export default wordrobesCtrl; 