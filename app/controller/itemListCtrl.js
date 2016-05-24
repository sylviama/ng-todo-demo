app.controller("itemListCtrl", function($scope, $http,$location){

  $scope.items= [];

  //get
  $scope.getData=function(){
    $http.get("https://ngtododemo.firebaseio.com/.json")
      .success(function(itemObject){
        Object.keys(itemObject).forEach(function(key){
            itemObject[key].id=key;
            $scope.items.push(itemObject[key]);
        });
      });
    };

    //call get the data
    $scope.getData();

//delete
  $scope.deleteItem=function(item_id){
    $http.delete("https://ngtododemo.firebaseio.com/"+item_id+".json")
    .success(function(){
        //clear everything, then reload
        $scope.items=[];
        //recall the data(reload) to refresh
        $scope.getData();
    })
  }

});



