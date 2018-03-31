listingApp.controller('RentController', ['ListingService',
  function (ListingService) {
    console.log('Rent Controller Loaded')
    let self = this;

    let listingService = ListingService;

    //Link view to service data
    self.rent = listingService.rent;

    //Link view function calls to functions in service
    self.addRental = listingService.addRental;
    self.getRental = listingService.getRental;
  }]);