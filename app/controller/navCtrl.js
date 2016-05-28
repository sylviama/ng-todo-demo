app.controller("NavCtrl", function($scope){
  $scope.navItems=[
  {name:"Logout",
    url: "#/items/login"},
  {name: "All Items",
    url: "#/items/list"},
  {name:"New Item",
    url:  "#/items/new"}];
});