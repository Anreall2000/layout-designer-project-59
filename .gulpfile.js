const { src, dest } = require('gulp');
const pug = require('gulp-pug');

const pugCompile = () => {
    return src('./app/pages/*.pug')
        .pipe(pug())
        .pipe(dest('./build'))
};

exports.pug = pugCompile;