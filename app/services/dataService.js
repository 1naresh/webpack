function dataService($q,$http){
    var user
    var addDetails=function(User){
        user=User
        var defered=$q.defer()
        $http({
            method:'post',
            url:'/users/save',
            data:angular.toJson(User)
        }).then(function(positiveRes){
            defered.resolve(positiveRes)
        },function(negativeRes){
            defered.reject(negativeRes)
        })
        return defered.promise
    }
    var getData=function(phone){
        var defered=$q.defer()
        $http({
            method:'get',
            url:'/users/getByPhone/'+phone
        }).then(function(positiveRes){
            defered.resolve(positiveRes)
        },function(negativeRes){
            defered.reject(negativeRes)
        })
        return defered.promise;
        // return user
    }
    var getAll=function(){
        var defered=$q.defer()
        $http({
            method:'get',
            url:'/users/customers'
        }).then(function(positiveRes){
            defered.resolve(positiveRes)
        },function(negativeRes){
            defered.reject(negativeRes)
        })
        return defered.promise;
    }
    var sendOtp=function(phone){
        var defered=$q.defer();
        $http({
            method:"get",
            url:"/users/sendOtp/"+phone,
        })
        .then(function(positiveRes){
            defered.resolve(positiveRes)
        },function(negativeRes){
            defered.reject(negativeRes)
        })
        return defered.promise;
        return user
    }
    var updateUser=function(User){
        var defered=$q.defer()
        $http({
            method:'put',
            url:'/users/update',
            data:angular.toJson(User)
        })
    }
    return{
        addDetails:addDetails,
        getData:getData,
        getAll:getAll,
        sendOtp:sendOtp,
        updateUser:updateUser
    }
}
dataService.$inject=['$q','$http']
export default dataService;