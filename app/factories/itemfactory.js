app.factory("itemStorage", function($q, $http){


  var getItemList=function(){
    var items=[];
    
    return $q(function(resolve,reject){
      $http.get("https://ngtododemo.firebaseio.com/.json")
          .success(function(itemObject){
            //change the format of the json object
            Object.keys(itemObject).forEach(function(key){
                itemObject[key].id=key;
                items.push(itemObject[key]);
            });//close forEach
            resolve(items);
          }).error(function(error){
            reject(error);
          });//close error
          //close success
    })//close return
  }

  var deleteItem=function(itemId){
    return $q(function(resolve,reject){
      $http.delete("https://ngtododemo.firebaseio.com/"+itemId+".json")
    .success(function(objectFromFirebase){
        resolve(objectFromFirebase);
        //!!!!!!!clear everything, then reload
        items=[];
        //recall the data(reload) to refresh
        getItemList();
    })
    })
    
  }
  

  return {getItemList:getItemList, deleteItem:deleteItem}

})