var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber');


function swallow(err) {
  console.log(err);
  this.emit('end');
}

gulp.task('js', function(){
  gulp.src('./public/js-dev/app.js')
  .pipe(browserify({transform: 'reactify'}))
  .pipe(concat('app.js'))
  .pipe(gulp.dest('./public/js/'));
});

gulp.task('sass', function(){
	gulp.src('./public/scss/style.scss')
  .pipe(plumber({ errorHandler: swallow }))
	.pipe(sass({
    style: "expanded"
  }))
	.pipe(prefix({
		browsers: ['last 2 versions'],
		cascade: false
		}))
	.pipe(gulp.dest('./public/css/'));
});

gulp.task('copy', function(){
  gulp.src('src/index.html')
  .pipe(gulp.dest('./dist/'));

  gulp.src('./src/assets/images/*.*')
  .pipe(gulp.dest('./dist/assets/images/'));
});

gulp.task('default', ['js','copy']);

gulp.task('watch', function(){
  gulp.watch('./public/js-dev/**/*.*', ['js']);
  gulp.watch('./public/scss/**/*.scss', ['sass']);
});
