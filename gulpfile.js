/* required methods */
var gulp = require("gulp");
var concat = require("gulp-concat"); /* CSS ve JS dosyalarınızı tek bir dosyada toplayabilirsiniz */
var rename = require("gulp-rename"); /* isim değiştirme */
var uglify = require("gulp-uglify"); /* Javascript dosyalarınızı  */
var runSequence = require("run-sequence"); /* Belirtilen sırayla gulp methodları çalıştırır */
var watch = require("gulp-watch"); /* Değişiklikleri takip eder otomatik değiştirir */
var sass = require("gulp-sass"); /* Sass */
var autoprefixer = require("gulp-autoprefixer"); /* CSS kodlarına eski browserlara göre  -webkit gibi eklentiler ekler */
var sourcemaps = require("gulp-sourcemaps"); /* Birleştirilmiş sass kodlarının hangi sass da olduğunu bulur */
var sassGlob = require("gulp-sass-glob");
/* task */

gulp.task("scripts", function() {
  /* Master */
  gulp
    .src([
      "./assets/javascripts/jquery-3.3.1.min.js",
      "./assets/javascripts/3rdParty/jquery.fancybox.min.js",
      "./assets/javascripts/3rdParty/swiper.min.js",
      "./assets/javascripts/3rdParty/select2.js",
      "./assets/javascripts/3rdParty/lax.js",
      "./assets/javascripts/main.js"
    ])
    .pipe(concat("master.js"))
    .pipe(rename("master.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./assets/js"));

  /* Contact */
  gulp
    .src([
      "./assets/javascripts/3rdParty/parsley.min.js",
      "./assets/javascripts/contact.js"
    ])
    .pipe(concat("contact.js"))
    .pipe(rename("contact.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./assets/js"));
});

gulp.task("sass", function() {
  gulp
    .src(["./assets/stylesheets/main.scss"])
    //.pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(autoprefixer("last 15 version"))
    .pipe(concat("style.css"))
    .pipe(rename("style.min.css"))
    //.pipe(sourcemaps.write())
    .pipe(gulp.dest("./assets/css"));
});

gulp.task("watch", function() {
  gulp.watch("./assets/javascripts/**/**/*.js", ["scripts"]);
  gulp.watch("./assets/stylesheets/**/**/*.scss", ["sass"]);
});

gulp.task("default", function(callback) {
  runSequence("scripts", "sass", "watch", callback);
});
