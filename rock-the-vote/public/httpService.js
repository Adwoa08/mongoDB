var app = angular.module("votingApp");
app.service("httpService",["$http", function($http){
    
    var self = this;
    
    this.getOldPost = function(){
        
        return $http.get("/votes").then(function(response){
            return self.OldPost = response.data;
        })
        
    }
    
    
   this.posting = function(issue){
       
       return $http.post("/votes", issue).then(function(response){
           return response.data;
       }) 
   } 
    
    
    
}])