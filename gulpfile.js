//--载入外挂 
var gulp = require('gulp'),  
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    minifyInline = require('gulp-minify-inline-scripts');

// 样式
gulp.task('styles', function() {  
  return gulp.src(
        dev_url + 'css_extend/main.css'
    )
    .pipe(minifycss())
    .pipe(concat('bundle.css'))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest(product_url + 'css'))
    .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('scripts', function() {  
 return gulp.src(
    arrScripts
    )

    .pipe(uglify())
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest(product_url + 'js'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('inline_scripts', function() {  
 gulp.src('views/**/*.html')
        .pipe(minifyInline())
        .pipe(gulp.dest('views_dist'))
        .pipe(notify({ message: 'inline Scripts task complete' }));
});