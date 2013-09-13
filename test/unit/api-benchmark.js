var apiBenchmark = require('./../../lib/api-benchmark');
var should = require('should');

describe('compare function', function(){

  var endpoints = { simpleRoute: '/getJson', secondaryRoute: '/getJson2' };

  var servers = {
      'Slow server': "http://localhost:3006",
      'Fast server': "http://localhost:3007"
    };

  it('should correctly raise exception if the endpoints parameter is not valid', function(done){
    (function(){
      apiBenchmark.compare(servers, null, function(results){

      });
    }).should.throw("Endpoints argument is not valid");
    done();
  });

  it('should correctly raise exception if the services parameter is not valid', function(done){
    (function(){
      apiBenchmark.compare(null, endpoints, function(results){

      });
    }).should.throw("Services argument is not valid");
    done();
  });

  it('should correctly raise exception if the callback parameter is not valid', function(done){
    (function(){
      apiBenchmark.compare(servers, endpoints, null);
    }).should.throw("Callback argument is not valid");
    done();
  });

});