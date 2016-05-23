app.controller("itemNewCtrl", function($scope){
  $scope.newTask={};

  $scope.addNewItem=function(){
    $scope.newTask.isCompleted=false;
    $scope.newTask.id=$scope.items.length;
    $scope.items.push($scope.newTask);
    console.log($scope.items);
    $scope.newTask="";
  };
});