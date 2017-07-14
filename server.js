'use strict';

var superstatic = require('superstatic');
var connect = require('connect');
var https = require('https');
var fs = require('fs');

var keyFile = process.argv[2];
var certFile = process.argv[3];

var spec = {
  config: {
    public: './app',
    rewrites: [{
      source: '**',
      destination: '/index.html'
    }]
  },
  cwd: process.cwd()
};

var httpsOptions = {
  key: fs.readFileSync(keyFile),
  cert: fs.readFileSync(certFile)
};

var app = connect().use(superstatic(spec));

https.createServer(httpsOptions, app).listen(process.argv[4], function(err) {
  if (err) { console.log(err); }
  console.log('Superstatic now serving on port ' + process.argv[4] + ' ...');
});
