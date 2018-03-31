listingApp.controller('SaleController', ['ListingService',
  function (ListingService) {
    console.log('Sale Controller Loaded')
    let self = this;

    let listingService = ListingService;

    //Link view to service data
    self.sale = listingService.sale;

    //Link view function calls to functions in service
    self.addSale = listingService.addSale;
    self.getSale = listingService.getSale;
  }]);