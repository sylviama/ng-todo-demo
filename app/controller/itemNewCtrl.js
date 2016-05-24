app.controller("itemNewCtrl", function($scope,$http,$location){
  //set up the initial, so that every field has a value even user missed one
  $scope.newTask={
    assignedTo:"",
    dependencies: "",
    dueDate:"",
    isCompleted:false,
    location:"",
    task:"",
    urgency:""
  };
  
  //post to firebase
  $scope.addNewItem=function(){

    $http.post("https://ngtododemo.firebaseio.com/.json",
      JSON.stringify({
        assignedTo:$scope.newTask.assignedTo,
        dependencies:$scope.newTask.dependencies,
        dueDate:$scope.newTask.dueDate,
        isCompleted:$scope.newTask.isCompleted,
        location:$scope.newTask.location,
        task:$scope.newTask.task,
        urgency:$scope.newTask.urgency
      })
    )
    .success(function(response){
      //response capture the key
      // console.log(response);

      //change the page to list
      $location.url("/items/list");

      //clear the field, actually if you change the page, it clears itself...
      $scope.newTask={
        assignedTo:"",
        dependencies: "",
        dueDate:"",
        isCompleted:false,
        location:"",
        task:"",
        urgency:""
      };
    });

  };
});