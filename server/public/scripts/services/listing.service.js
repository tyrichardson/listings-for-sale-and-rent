//Angular client-side routing
listingApp.service('ListingService', ['$http', function($http) {
  console.log('listing service is loaded');

  let self = this;

  self.rent = { list: [] };

  self.sale = { list: [] };


  //GET
  self.getRent = function() {
    console.log('called getRent function in listing.service');
    $http.get('/rent').then(function(response) {
      console.log('rent get response listing.service', response),
      self.rent.list = response.data;
    })
  }

  //GET sale
  self.getSale = function () {
    console.log('called getSale function in listing.service');
    $http.get('/sale').then(function(response) {
      console.log('sale get response listing.service', response);
      self.sale.list = response.data;
    })
  }

  //POST rent
  self.addRent = function (rent) {
    console.log('called add rent post listing.service', rent)

    $http.post('/rent', rent).then(function (response) {
      console.log('Rent Successfully Posted says listing.service!');
      self.getRent();
    }).catch(function (error) {
      console.log('ERROR IN rent POST says listing.service', error)
    });
  };


  //POST sale
  self.addSale = function (sale) {
    console.log('called add sale post', sale)

    $http.post('/sale', sale).then(function (response) {
      console.log('Sale Successfully Posted says  listing.service!');
      self.getSale();
    }).catch(function (error) {
      console.log('ERROR IN sale POST says listing.service', error)
    });
  };

}])