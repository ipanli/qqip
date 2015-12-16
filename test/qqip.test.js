var qqip = require('../');
var should = require('should');

describe('qqip.test.js', function () {
  it('should return qq ip', function (done) {
    qqip(function (err, ip) {
      ip.should;
      done(err);
    });
  });
});
