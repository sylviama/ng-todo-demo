app.controller("NavCtrl", function($scope){
  $scope.navItems=[
  {location: "house",
    name:"Logout",
    url: "#/logout"
    },
  {name: "All Items",
    url: "#/items/list"},
  {name:"New Item",
    url:  "#/items/new"}];
});