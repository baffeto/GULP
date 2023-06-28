var gulp = require('gulp');
var rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));
var autoprefixer = require('gulp-autoprefixer'); // npm install --save-dev gulp-autoprefixer
var sourcemaps = require('gulp-sourcemaps');

function copy(done) {
    gulp.src('./scss/**/*.scss')
      .pipe(sourcemaps.init())
      .pipe( sass({
        errorLogToConsole: true,
        outputStyle: 'compressed'
      }) )
      .on('error', console.error.bind(console))
      .pipe(autoprefixer({
        overrideBrowserslist:  ['last 2 versions'],
        cascade: false
      }))
      .pipe( rename({suffix: '.min'}) )
      .pipe(sourcemaps.write('./'))
      // .pipe( rename('main.css') ) // npm install --save-dev gulp-rename
      .pipe( gulp.dest('./css/') );
    //   .pipe();
    done();
} 

function print(done) {
  console.log("Hello!")
  done();
}

function watchSass() {
  gulp.watch("./scss/**/*", copy);
}

// gulp.task(copy)
// gulp.task(print)
gulp.task('default', gulp.series(print, watchSass));



// function defaultSomeTask(done) {
//     console.log('all is working!');
//     done();
// };

// function check_math(done) {
//     math = 1 === 3;
//     if (math){
//         console.log('+');
//     } else {
//         console.log('-');
//     }
//     done();
// }


// Еще один способ:

// var gulp = require('gulp');


// gulp.task(check_math)
// gulp.task('default', defaultSomeTask);

// Первый способ подключения

// exports.default = defaultSomeTask;
// exports.check_mathematic = check_math;


