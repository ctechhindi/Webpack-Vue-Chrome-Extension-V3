// Do this as the first thing so that any code reading it knows the right env.
process.env.NODE_ENV = 'development';

var webpack = require('webpack'),
  config = require('../webpack.config');

config.mode = 'development';
config.watch = true;

webpack(config, function (err) {
  if (err) throw err;
});
