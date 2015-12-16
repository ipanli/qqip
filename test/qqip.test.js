var qqip = require('../');
var should = require('should');

describe('qqip.test.js', function () {
  it('should return qq ip', function (done) {
    qqip('27.115.98.238','K44BZ-YQGCR-DMGWC-WI3OF-SXRO5-CKB5R',function (err, ip) {
      ip.should;
      done(err);
    });
  });
});
