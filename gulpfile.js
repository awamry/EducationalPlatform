var gulp = require('gulp')
var mocha = require('gulp-mocha')
var bg = require('gulp-bg')
var istanbul = require('gulp-istanbul');

var bgstart
gulp.task('start', bgstart = bg('node', './lib/index.js'))

function terminate() {
    bgstart.setCallback(function () {
        process.exit(0)
    })
    bgstart.stop(0)
}

gulp.task('pre-test', ['start'], function () {
    return gulp.src(['./lib/index.js'])
        .pipe(istanbul())
        // This overwrites `require` so it returns covered files
        .pipe(istanbul.hookRequire());
});



gulp.task('test', ['pre-test'], function () {
    return gulp.src(['./test/test.js'])
        .pipe(mocha({
            reporter: 'nyan'
        }))
        .pipe(istanbul.writeReports())
        .pipe(istanbul.enforceThresholds({
            thresholds: {
                global: 80
            }
        }))
        .once('end', terminate)
        .once('error', terminate)
})


gulp.task('default', ['start', 'test'])