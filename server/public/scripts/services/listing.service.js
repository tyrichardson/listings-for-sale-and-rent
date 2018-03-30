//Angular client-side routing
listingApp.service('ListingService', ['$http', function($http) {
  console.log('listing service is loaded');

  let self = this;

  self.listings = { list: [] };

  //GET
  self.getListing
}])