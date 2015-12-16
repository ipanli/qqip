var superagent = require('superagent');

var getip = function (uip,ukey,callback) {
  superagent
    .get('http://apis.map.qq.com/ws/location/v1/ip?ip='+ uip +'8&key='+ukey)
    .set('User-Agent', 'curl/7.37.1')
    .end(function (err, res) {
      if (err) {
        return callback(err);
      }
      var ipinfo = res.text;
      callback(null, JSON.parse(ipinfo));
    });
};

module.exports = exports = getip;
