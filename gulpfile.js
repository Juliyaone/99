"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var rename = require("gulp-rename");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var sourcemap = require("gulp-sourcemaps");
var csso = require("gulp-csso");
var imagemin = require("gulp-imagemin");
var webp = require("gulp-webp");
var svgstore = require("gulp-svgstore");
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");
var del = require("del");
var server = require("browser-sync").create();


gulp.task("css", function () {
  return gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(less())
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest("build/css"))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("images", function () {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true}),
      imagemin.svgo()
      ]))
    .pipe(gulp.dest("source/img"));
});

gulp.task("webp", function () {
  return gulp.src("source/img/**/*.{png,jpg}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("source/img"));
});

gulp.task("html", function (){
  return gulp.src("source/*.html")
    .pipe(posthtml([
        include()
      ]))
    .pipe(gulp.dest("build"));
});

gulp.task("refresh", function(done) {
  server.reload();
  done();
});

gulp.task("copy", function () {
  return gulp.src([
      "source/img/**/*",
      "source/js/**/*"
    ], {
      base: "source"
    })
    .pipe(gulp.dest("build"));
});



gulp.task("server", function () {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/less/**/*.less", gulp.series("css"));
  gulp.watch("source/img/icon-*.svg", gulp.series("html", "refresh"));
  gulp.watch("source/*.html", gulp.series("html", "refresh"));
  gulp.watch("source/js/**/*.js", gulp.series("copy", "html", "refresh"));

});

gulp.task("clean", function() {
  return del("build");
});


gulp.task("build", gulp.series("clean", "copy", "css", "html"));
gulp.task("start", gulp.series("build", "server"));