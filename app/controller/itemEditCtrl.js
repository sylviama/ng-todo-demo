app.controller("itemEditCtrl", function($scope,$http,$location,itemStorage){
  //set up the initial, so that every field has a value even user missed one
  $scope.newTask={};
  
  //post
  // $scope.addNewItem=function(){
  //   itemStorage.postNewItem($scope.newTask).then(function(){
  //     $location.url("/items/list");
  //   })
  // }

  $scope.editItem=function(itemId){

    itemStorage.putItem(itemId,$scope.newTask).then(function(){

    })
  }
  

});