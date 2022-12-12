angular.module("cepCrud").service("ufsAPI",function($http,config){
    this.save = (uf)=>{
        return $http.post(config.baseUrl + "/ufs",uf)
    }
})