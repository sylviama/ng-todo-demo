app.controller("itemNewCtrl", function($scope){
  $scope.newTask={};
  $scope.items=[{
    id:0,
    task:"mow the lawn zoe",
    isCompleted:true,
    dueDate:"12/5/17",
    assignTo:"Greg",
    location:"Zoe's house",
    urgency:"low",
    dependencies:["sunshine", "clippers", "hat","water","headphones"]
  },
  {
    id:1,
    task:"Cry",
    isCompleted:false,
    dueDate:"12/5/16",
    assignTo:"Joe",
    location:"Zoe's house",
    urgency:"low",
    dependencies:["Wifi", "clippers", "hat","water","headphones"]
  },
  {
    id:2,
    task:"take a nap",
    isCompleted:true,
    dueDate:"12/5/17",
    assignTo:"Zoe",
    location:"Zoe's house",
    urgency:"low",
    dependencies:["pillow", "blanket", "bed","water","headphones"]
  },
  {
    id:3,
    task:"grade quizz",
    isCompleted:true,
    dueDate:"12/5/17",
    assignTo:"Greg",
    location:"Zoe's house",
    urgency:"low",
    dependencies:["sunshine", "clippers", "hat","water","headphones"]
  }];

  $scope.addNewItem=function(){
    $scope.newTask.isCompleted=false;
    $scope.newTask.id=$scope.items.length;
    $scope.items.push($scope.newTask);
    console.log($scope.items);
    $scope.newTask="";
  };
});