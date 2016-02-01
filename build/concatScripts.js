var concat = require('concat');

concat(
  [
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.min.js'
  ],
  'public/js/application.js', function (error) {
    if (error) {
      console.error(error);
    }
  }
);
