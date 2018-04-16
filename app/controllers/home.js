import homeIcon from '../img/l-shape.png'


function homeCtrl($scope,$state,$stateParams,$localStorage){
    document.getElementById('pic').src=homeIcon
    $localStorage.user={}
    $scope.toProducts=function(){
        $state.go('register')
    }
}
homeCtrl.$inject=['$scope','$state','$stateParams','$localStorage'];
export default homeCtrl; 