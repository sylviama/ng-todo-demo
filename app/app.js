var app= angular.module("TodoApp",["ngRoute"])
.constant("firebaseURL","https://ngtododemo.firebaseio.com/");

let isAuth=(authFactory)=> new Promise((resolve,reject)=>{
  if(authFactory.isAuthenticated()){
    console.log("Use is authenticated, resolve route promise");
    resolve();
  }else{
    console.log("Use is not authenticated, reject route promise");
  };
});

app.config(function($routeProvider){
  $routeProvider.
    when("/", {
      templateUrl:'partials/log-list.html',
      controller:"loginCtrl",
      resolve:{isAuth}
    }).
    when('/logout', {
      templateUrl:'partials/login.html',
      controller:"loginCtrl"
    }).
    when("/items/list",{
      templateUrl:"partials/item-list.html",
      controller:"itemListCtrl",
      resolve:{isAuth}
    }).
    when("/items/new",{
      templateUrl:"partials/item-new.html",
      controller:"itemNewCtrl",
      resolve:{isAuth}
    }).
    when('/items/login',{
      templateUrl:'partials/login.html',
      controller:"loginCtrl"
    }).
    //detail page
    when("/items/:itemId",{
      templateUrl:"partials/item-details.html",
      controller:"itemViewCtrl",
      resolve:{isAuth}
    }).
    when('/items/:itemId/edit',{
      templateUrl:'partials/item-new.html',
      controller:"itemEditCtrl",
      resolve:{isAuth}
    }).
    otherwise("/");
});

app.run(($location)=>{
  let todoRef=new Firebase("https://ngtododemo.firebaseio.com/");

  todoRef.onAuth(authData=>{
    if(!authData){
      $location.path("/logout");
    };
  })
})




