"use strict"

app.controller("loginCtrl",function($scope, firebaseURL, authFactory, $location){
  let ref=new Firebase(firebaseURL);
  
  $scope.account={
    email:"",
    password:""
  };

  //check if logout
  if($location.path()==='/logout'){
    ref.unauth();//firebase thing
  }


  $scope.register=()=>{
    
    ref.createUser({
      email:$scope.account.email,
      password:$scope.account.password
      //firebase thing:first thing is the error message, second is success function
    },(error, userData)=>{
    if(error){
      console.log(`Error creating user: ${error}`)
    }else{
      console.log(`Created user account with uid:${userData.uid}`)
      $scope.login();
    };
  });
  };

  $scope.login=()=>{
    console.log("You clicked login");
    authFactory.authenticate($scope.account)
    .then(()=>{
      $location.path("/items/list");
      $scope.$apply();//firebase, make it work...
    })
  };

  


})