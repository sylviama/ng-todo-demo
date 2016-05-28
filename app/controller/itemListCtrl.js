app.controller("itemListCtrl", function($scope, $http,$location, itemStorage){

  $scope.items= [];

  //get
  // $scope.getData=function(){
  //   $http.get("https://ngtododemo.firebaseio.com/.json")
  //     .success(function(itemObject){
  //       //change the format of the json object
  //       Object.keys(itemObject).forEach(function(key){
  //           itemObject[key].id=key;
  //           $scope.items.push(itemObject[key]);
  //       });
  //     });
  //   };

  //   //call get the data
  //   $scope.getData();

  //call from factory
  itemStorage.getItemList().then(function(itemObject){

    $scope.items=itemObject;
    console.log($scope.items);
  })

//delete
  $scope.deleteItem=function(itemId){
    itemStorage.deleteItem(itemId).then(function(response){
      itemStorage.getItemList().then(function(itemObject){
        $scope.items=itemObject;
      })
    })
  }
  //   $http.delete("https://ngtododemo.firebaseio.com/"+item_id+".json")
  //   .success(function(){
  //       //clear everything, then reload
  //       $scope.items=[];
  //       //recall the data(reload) to refresh
  //       $scope.getData();
  //   })
  // }

//for the checkbox
$scope.inputChange=function(item){
  itemStorage.updateCompletedStatus(item).then(function(response){
    
  })
}


});



