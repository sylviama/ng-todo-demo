"use strict"

app.factory("authFactory", function(firebaseURL){
  let ref=new Firebase(firebaseURL);//firebase thing, allow all the firebase methods
  let currentUserData=null;

  return{

    isAuthenticated(){
      let authData=ref.getAuth();//getAuth is firebase function
      return(authData)?true:false;
    },

    getUser(){
      return currentUserData;
    },

    authenticate(credentials){
      return new Promise((resolve,reject)=>{
        ref.authWithPassword({
          "email":credentials.email,
          "password":credentials.password
        },(error,authData)=>{
          if(error){
            reject(error);
          }else{
            currentUserData=authData;
            resolve(authData);
          };
        });
      });
    }








  };
});