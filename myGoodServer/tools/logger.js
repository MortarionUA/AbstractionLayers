var log = function (req) {
  var date = new Date().toISOString();
  console.log([date, req.method, req.url].join('  '));
};

module.exports.log = log;
