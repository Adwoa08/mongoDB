var app = angular.module("votingApp", []);

app.controller("voteCtrl", ["$scope", "httpService", function($scope, httpService){
    
    $scope.issues = [];
    $scope.totalVote = 0;
    
    
    httpService.getOldPost().then(function(oldPost){
        $scope.issues = oldPost;
    })
    
    
    $scope.postIssue = function(issue){
        console.log("here")
        
        httpService.posting(issue).then(function(data){
            $scope.issues.push(data);
        })
        
        $scope.issue = {};
    }
    
//    $scope.upVote = function(issue){
//        issue.votes++
//        httpService.edit(issue)
//    }
//    
    
    
}])