app.factory("itemStorage", function($q, $http,firebaseURL,authFactory){


  var getItemList=function(){
    var items=[];
    
    return $q(function(resolve,reject){
      $http.get(firebaseURL+".json")
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
      $http.delete(firebaseURL+itemId+".json")
    .success(function(objectFromFirebase){
        resolve(objectFromFirebase);
        //!!!!!!!clear everything, then reload
        items=[];
        //recall the data(reload) to refresh
        getItemList();
    })
    })
    
  }
  
  //post
  var postNewItem=function(newTask){
    var user=authFactory.getUser();
    console.log(user);

    return $q(function(resolve,reject){
      $http.post(
        firebaseURL+".json",
        JSON.stringify({
          assignedTo:newTask.assignedTo,
          dueDate:newTask.dueDate,
          location:newTask.location,
          urgency:newTask.urgency,
          task:newTask.task,
          isCompleted:newTask.isCompleted,
          dependencies:newTask.dependencies,
          uid:user.uid
        })

        ).success(
          function(objectFromFirebase){
            resolve(objectFromFirebase);
          })//close success
    })//close return
  };//close function


  //edit/put
  var putItem=function(itemId,newTask){

    return $q(function(resolve,reject){
      $http.put(
        firebaseURL+itemId+".json",
        JSON.stringify({
          assignedTo:newTask.assignedTo,
          dueDate:newTask.dueDate,
          location:newTask.location,
          urgency:newTask.urgency,
          task:newTask.task,
          isCompleted:newTask.isCompleted,
          dependencies:newTask.dependencies
        })
        ).success(
        function(objectFromFirebase){
          resolve(objectFromFirebase);
        })
    })
  }

  //get Single Item first
  var getSingleItem=function(itemId){
    
    return $q(function(resolve,reject){
      $http.get(firebaseURL+itemId+".json")
          .success(function(itemObject){
            //change the format of the json object
            resolve(itemObject);
            })//close success
            .error(function(error){
            reject(error);
          });//close error
    })//close return
  }

   var updateCompletedStatus=function(newTask){

    return $q(function(resolve,reject){
      $http.put(
        firebaseURL+newTask.id+".json",
        JSON.stringify({
          assignedTo:newTask.assignedTo,
          dueDate:newTask.dueDate,
          location:newTask.location,
          urgency:newTask.urgency,
          task:newTask.task,
          isCompleted:newTask.isCompleted,
          dependencies:newTask.dependencies
        })
        ).success(
        function(objectFromFirebase){
          resolve(objectFromFirebase);
        })
    })
  }





  return {getItemList:getItemList, deleteItem:deleteItem, postNewItem:postNewItem, getSingleItem:getSingleItem, putItem:putItem,
    updateCompletedStatus:updateCompletedStatus}

})

