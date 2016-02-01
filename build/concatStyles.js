var concat = require('concat');

concat(
  [
    'node_modules/bootstrap/dist/css/bootstrap.min.css',
    'node_modules/bootswatch/darkly/bootstrap.min.css'
  ],
  'public/css/styles.css', function (error) {
    if (error) {
      console.error(error);
    }
  }
);
