var http = require('http'),
  cookiesParser = require('./tools/cookiesParser'),
  logger = require('./tools/logger'),
  router = require('./tools/router'),
  caching = require('./tools/caching');

//config
var config = {
  'port' : 8080
};

http.createServer(function(req, res){
  //Parsin cookies
  var cookies = cookiesParser.parseCookies(req);
  //Logging
  logger.log(req);
  //Caching
  if (caching.cache[req.url] && req.method === 'GET') {
    console.log('Getting ' + req.url + ' from cache.');
    res.writeHead(200);
    res.end(caching.cache[req.url]);
  }else{
    //Routing
    var route = router.routing[req.url];
    if(typeof(route) == 'function') route(req, res, cookies);
    else {
      res.writeHead(404);
      res.end('Path not found');
    }
  }

}).listen(config.port);
