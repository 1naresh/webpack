function dataService($q,$http){
    var user={}
    var addDetails=function(User){
        user.name=User.name
        user.email=User.email
        user.phone=User.phone
        user.city=User.city
        console.log(user)
        var defered=$q.defer()
        $http({
            method:'post',
            url:'/data/save',
            data:angular.toJson(user)
        })
    }
    var getData=function(){
        var defered=$q.defer()
        $http({
            method:'get',
            url:'/data/getByPhone/'+user.phone
        }).then(function(positiveRes){
            defered.resolve(positiveRes)
            console.log(positiveRes.data)
        },function(negativeRes){
            defered.reject(negativeRes)
        })
        return defered.promise;
        // return user
    }
    var getAll=function(){
        var defered=$q.defer()
        // $http({
        //     method:'get',
        //     url:'/data/customers'
        // }).then(function(positiveRes){
        //     defered.resolve(positiveRes)
        // },function(negativeRes){
        //     defered.reject(negativeRes)
        // })
        // return defered.promise;
    }
    return{
        addDetails:addDetails,
        getData:getData,
        getAll:getAll,
        user:user
    }
}
dataService.$inject=['$q','$http']
export default dataService;