const listingApp = angular.module('ListingApp', ['ngRoute']);
//ListingApp is ng-app in index.html

//Angular client-side routing; makes nav and views work with controllers
listingApp.config(function($routeProvider){
  console.log('listingApp config in client.js loaded');


//using nav.html, determines which content to display on DOM  
$routeProvider
.when('/rent', {
  templateUrl: '/views/rent.html',
  controller: 'RentController as vm'
})
.when('/sale', {
  templateUrl: '/views/sale.html',
  controller: 'SaleController as vm'
})
.otherwise(
  {redirectTo: '/sale'}
)

});

