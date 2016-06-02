var personRouter = require('./../person/router.person.js');
var rootRouter = require('./../root/router.root.js');

var routing = {
  '/': function (req, res, cookies) {
    if (req.method == 'GET')  return rootRouter.get(req, res, cookies);
  },
  '/person': function (req, res, cookies) {
    if(req.method == 'GET') return personRouter.get(req, res, cookies);
    else if (req.method == 'POST') return personRouter.post(req, res, cookies);
  }
};

module.exports.routing = routing;
