//const browserSync = require('browser-sync');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
// const sass = require('gulp-sass')(require('sass'));

// compile scss into css
function style(){
    // 1. where is my scss file
    return gulp.src('./scss/**/*.scss')
    // 2. pass that file through sass compiler
   .pipe(sass().on('error', sass.logError))
     // 3. where do I save the compiled css?
   .pipe(gulp.dest('./css'))
    // 4. stream changes to all browsers
    .pipe(browserSync.stream())

}

function watch(){
    browserSync.init({
        server:{
            baseDir: './'
        }

    });
    gulp.watch('./scss/**/*.scss');
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./*.tpl').on('change', browserSync.reload);
    gulp.watch('./*.php').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);

}
exports.style = style;
exports.watch = watch;