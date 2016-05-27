app.controller("itemEditCtrl", function($scope,$location,$routeParams, itemStorage){
  //($routeParams is the way to access the url)

  $scope.newTask={};
  $scope.title="Edit Item";
  $scope.button_name= "Update";

  //get single item first
  itemStorage.getSingleItem($routeParams.itemId).then(function(response){
    $scope.newTask=response;
  })

  
  //update,this has the same name as the function in itemNewCtrl, but it's actually edit function
  $scope.addNewItem=function(){
    itemStorage.putItem($routeParams.itemId, $scope.newTask).then(function(){
      $location.url("/items/list");
    })
  }

  

});