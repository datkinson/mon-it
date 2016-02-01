var watch = require('watch');
var command = require('exec-npm');

watch.createMonitor('resources/assets/css', function (monitor) {
  monitor.on('created', function (f, stat) {
    // Handle new files
    runBuild('styles');
  });
  monitor.on('changed', function (f, curr, prev) {
    // Handle file changes
    runBuild('styles');
  });
  monitor.on('removed', function (f, stat) {
    // Handle removed files
    runBuild('styles');
  });
});

watch.createMonitor('resources/assets/js', function (monitor) {
  monitor.on('created', function (f, stat) {
    // Handle new files
    runBuild('scripts');
  });
  monitor.on('changed', function (f, curr, prev) {
    // Handle file changes
    runBuild('scripts');
  });
  monitor.on('removed', function (f, stat) {
    // Handle removed files
    runBuild('scripts');
  });
});

function runBuild (type) {
  command(['run', 'build:' + type], function (err) {
    if (err) {
      console.log('Something went wrong: ' + err.message);
    } else {
      console.log('Successfully built ' + type);
    }
  });
}
