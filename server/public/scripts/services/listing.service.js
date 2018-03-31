//Angular client-side routing
listingApp.service('ListingService', ['$http', function($http) {
  console.log('listing service is loaded');

  let self = this;

  self.rental = { list: [] };

  self.sale = { list: []};

  //GET rental
  self.getRental = function(){
    console.log('called getRental function in service');
    $http.get('/rent').then(function(response) {
      self.rental.list = response.data;
    })
  }

  //GET sale
  self.getSale = function () {
    console.log('called getSale function in service');
    $http.get('/sale').then(function(response) {
      self.sale.list = response.data;
    })
  }

  //POST rental
  self.addRental = function (rental) {
    console.log('called add rental', rental)

    $http.post('/rent', rental).then(function (response) {
      console.log('Rental Successfully Posted!');
      self.getRental();
    }).catch(function (error) {
      console.log('ERROR IN POST', error)
    });
  };


  //POST sale
  self.addSale = function (sale) {
    console.log('called add sale', sale)

    $http.post('/sale', sale).then(function (response) {
      console.log('Sale Successfully Posted!');
      self.getSale();
    }).catch(function (error) {
      console.log('ERROR IN POST', error)
    });
  };

}])