var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('webdriver', function () {
  exec('./node_modules/.bin/webdriver-manager start', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
  });
});

gulp.task('default', function() {
  exec('./node_modules/.bin/protractor protractor.conf.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
  });
});
