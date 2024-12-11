const Dotenv = require('dotenv-webpack');

module.exports = {
  plugins: [
    new Dotenv({
      path: '.env.local', // Path to your .env.local file
    }),
  ],
};