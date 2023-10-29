const { src, dest, series } = require("gulp");
const replace = require("gulp-replace");

const globs = {
  html: "lab5/*.html",
  js: "lab5/js/**/*.js",
  css: "lab5/**/*.css",
  img: "lab5/images/*",
};

const htmlMin = require("gulp-html-minifier-terser");
function htmlTask() {
  return src(globs.html)
    .pipe(htmlMin({ collapseWhitespace: true, removeComments: true }))
    .pipe(replace("lab5/", ""))
    .pipe(dest("dist"));
}

exports.html = htmlTask;

var concat = require("gulp-concat");
const terser = require("gulp-terser");
function jsTask() {
  return src(globs.js)
    .pipe(concat("script.min.js"))
    .pipe(terser())
    .pipe(dest("dist/assets"));
}

exports.js = jsTask;

const cleanCss = require("gulp-clean-css");
function cssTask() {
  return src(globs.css)
    .pipe(concat("style.min.css"))
    .pipe(cleanCss())
    .pipe(dest("dist/assets"));
}

exports.css = cssTask;

const imageOptimise = require("gulp-optimize-images");
function imgTask() {
  return src(globs.img)
    .pipe(
      imageOptimise({
        compressOptions: {
          jpeg: { quality: 70 },
          png: { quality: 70 },
        },
      })
    )
    .pipe(dest("dist/images"));
}

exports.img = imgTask;

function testTask() {
  return Promise.resolve();
}

exports.default = series(imgTask, htmlTask, cssTask, jsTask);

exports.t = testTask;
