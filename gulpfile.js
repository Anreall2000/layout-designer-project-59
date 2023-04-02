const { src, dest, parallel, watch } = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

const pugCompile = () => {
    return src('./app/pug/pages/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(dest('./build'))
        .pipe(browserSync.stream())
};

const scssCompile = () => {
    return src('./app/sass/app.scss')
        .pipe(sass())
        .pipe(dest('./build/styles'))
        .pipe(browserSync.stream())
}

const browserSyncJob = () => {
    browserSync.init({
      server: "build/"
    });
  
    watch('./app/pug/**/*.pug', pugCompile);
    watch('./app/sass/**/*.scss', scssCompile);
  };

exports.pug = pugCompile;
exports.sass = scssCompile;
exports.server = browserSyncJob;
exports.default = parallel(pugCompile, scssCompile);