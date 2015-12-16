# qqip

腾讯 webservice api 中间接口 

>获取用户ip地址的详细信息

http://lbs.qq.com/webservice_v1/guide-ip.html

user qqip in Node.js



## install

```bash
npm i qqip
```

## usage

```js
/**
 * uip
 * 
 * */
/**
 * @uip = 要查询用户的ip
 * @ukey = 腾讯开发者注册的 key
 * @param {String} path
 * @return {Object} exports
 * @api public
 */

qqip(uip,ukey,function (err, ipinfo) {
  console.log(ipinfo); 
});
```
