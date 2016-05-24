app.controller("itemViewCtrl", function($scope, $http, $routeParams, $location){
  $scope.selectedItem={};
  $scope.items=[];

  //get the specific one from firebase by using its passed id (see app.js)
  $http.get("https://ngtododemo.firebaseio.com/.json")
      .success(function(itemObject){
        //change the format of the json object
        Object.keys(itemObject).forEach(function(key){
            itemObject[key].id=key;
            $scope.items.push(itemObject[key]);

            $scope.selectedItem=$scope.items.filter(function(item){
              return item.id=== $routeParams.itemId;
            })[0];

        });
      });

  $scope.backToList=function(){
    $location.url("/items/list");
  }

});
