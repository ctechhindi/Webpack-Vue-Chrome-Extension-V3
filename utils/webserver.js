// Do this as the first thing so that any code reading it knows the right env.
process.env.NODE_ENV = 'development';

var WebpackDevServer = require('webpack-dev-server'),
  webpack = require('webpack'),
  config = require('../webpack.config'),
  env = require('./env'),
  path = require('path');

for (var entryName in config.entry) {
  config.entry[entryName] = [
    'webpack-dev-server/client?http://localhost:' + env.PORT,
    'webpack/hot/dev-server',
  ].concat(config.entry[entryName]);
}

config.plugins = [new webpack.HotModuleReplacementPlugin()].concat(
  config.plugins || []
);

var compiler = webpack(config);

// https://webpack.js.org/configuration/dev-server/#devserver
var server = new WebpackDevServer(compiler, {
  https: false,
  hot: true,
  injectClient: false,
  writeToDisk: true,
  port: env.PORT,
  contentBase: path.join(__dirname, '../dist'),
  publicPath: `http://localhost:${env.PORT}`,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  disableHostCheck: true,
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept();
}

server.listen(env.PORT);
