// third-party dependencies
const gulp = require('gulp')
const gulpSize = require('gulp-size')
const autoprefixer = require('gulp-autoprefixer')
const myth = require('gulp-myth')
const gulpIf = require('gulp-if')

// browserify
const browserify = require('browserify')
const source     = require('vinyl-source-stream')
const buffer     = require('vinyl-buffer')

// browser-sync
var browserSync = require('browser-sync').create()
 
function isCss(file) {
  return /\.css/.test(file.path);
}

gulp.task('distribute:javascript', function () {
  // set up the browserify instance on a task basis
  var b = browserify({
    entries: 'src/index.js',
    debug: false,

    // defining transforms here will avoid crashing your stream
    transform: [
      // ['brfs', {}]
      // ['vueify', { global: true }],
      ['babelify', { 'presets': ['env'] }],
      // ['deamdify', {}]
    ],
  })

  return b.bundle()
    .pipe(source('index.js'))
    .pipe(buffer())
    .pipe(gulp.dest('dist'))
    .pipe(gulpSize())
})


gulp.task('distribute:css', () => {
  gulp.src('src/styles.css')
    .pipe(myth())
    .pipe(gulpIf(isCss, autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    })))
    .pipe(gulp.dest('dist'));
})

gulp.task('distribute', ['distribute:javascript', 'distribute:css'], function () {

  gulp.src([
    'src/index.html',
    'src/resources/**/*'
  ], { base: 'src' })
  .pipe(gulp.dest('dist'))
})

gulp.task('develop', ['distribute:javascript'], function () {

  gulp.watch('src/**/*.js', ['distribute:javascript'])

  gulp.watch([
    'dist/**/*.js',
    'src/index.html',
    'src/**/*.css',
  ], browserSync.reload)

  browserSync.init({
    server: ['dist', 'src'],
  })
})
