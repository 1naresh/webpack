
function phoneVerifyCtrl($scope,dataService,$state,$localStorage){
    var phone= $localStorage.user.phone
    var otp =""
    $scope.otpErr=false;
    dataService.sendOtp(phone).then(function(res){
        otp=res.data
    })
    $scope.resend=function(){
        
    }
    $scope.submit=function(){
        if($scope.enteredOtp == otp){
            $state.go("final")
        }else{
            $scope.otpErr=true
        }
    }
}
phoneVerifyCtrl.$inject=['$scope','dataService','$state','$localStorage']
export default phoneVerifyCtrl; 