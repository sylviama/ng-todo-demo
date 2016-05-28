app.controller("itemNewCtrl", function($scope,$http,$location,itemStorage){
  //set up the initial, so that every field has a value even user missed one
  $scope.title="New Item";
  $scope.button_name= "Submit";
  $scope.newTask={
    assignedTo:"",
    dependencies: "",
    dueDate:"",
    isCompleted:false,
    location:"",
    task:"",
    urgency:"",
    uid:""
  };
  
  //post
  $scope.addNewItem=function(){
    itemStorage.postNewItem($scope.newTask).then(function(){
      $location.url("/items/list");
    })
  };

});