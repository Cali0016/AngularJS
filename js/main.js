
var app = angular.module("myApp",[])

app.controller('firstCtrl', function($scope, $http) {
// $scope.myName = 'Jonte'

// console.log($scope.myName);
//
// $scope.logChanges = function(x) {
//   console.log(x);
//
//
// }
//
// $scope.nameArr = [ 'Jonte', 'John', 'Najla', 'Sam', 'Nashedah'];
//
// var Jonte = {
//   name: 'Jonte',
//   job: 'coder'
// }
// var John = {
//   name: 'John',
//   job: 'Lover'
// }
// var Najla = {
//   name: 'Najla',
//   job: 'School'
// }
//
// $scope.objArr = [Jonte, John, Najla];
// nyt api


$scope.logChanges = function(search) {
console.log(search);

$scope.userSearch = search




$http.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?q= '+ $scope.userSearch +' &api-key=87c2e63746674b13b6769c59938612f4').then(function(data){
  console.log(data.data.response.docs);

  $scope.articles = data.data.response.docs;

  console.log(data);


});

}
})
