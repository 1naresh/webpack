import kitchenImage from '../img/Kitchen 1.png';
import bedImage from '../img/Wardrobe 3.png';
import fullInteriorImage from '../img/tv unit.png';
function productsCtrl($scope,$state,dataService,$document,$stateParams,$localStorage){
    var productImage=document.getElementById('image')
    productImage.src=kitchenImage
    $scope.products=['kitchen']
    $scope.kitchenImg=true;    
    $scope.isWordrobe=function(){
        if($scope.wardrobe){          
            $scope.products[1]='wordrobe'
        }else{   
            $scope.products[1]=null
        }
    }
    $scope.isInterior=function(){ 
        if($scope.fullInteriors){
            $scope.products[2]='fullInteriors'
        }else{
            $scope.products[2]=null
        }
    }
    $scope.toShape=function(){
        $localStorage.user.products=$scope.products; 
        $state.go('shapes')
    }
    // $scope.back=function(){
    //     $state.go('register')
    // }
    $scope.over=function(product){
        $document[0].getElementById(product).style.background='#45d2b0'
        if(product == 'kitchen') productImage.src=kitchenImage
        if(product == 'wardrobe') productImage.src=bedImage
        if(product == 'fullInteriors') productImage.src=fullInteriorImage
    }
    $scope.leave=function(product){        
        $document[0].getElementById(product).style.background='#45d2b0'
        if(product=='wardrobe'){
            $scope.wardrobeImg=false
            $scope.kitchenImg=true;
        }
        if(product=='fullInteriors'){
            $scope.InteriorImage=false;
            $scope.kitchenImg=true;
        }
    } 
}
productsCtrl.$inject=['$scope','$state','dataService','$document','$stateParams','$localStorage']
export default productsCtrl;