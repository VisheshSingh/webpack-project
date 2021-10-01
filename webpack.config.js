const path = require('path');

module.exports = {
  mode: 'development',
  devtool: false,
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
  },
};
