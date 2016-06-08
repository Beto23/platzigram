var gulp = require('gulp');
var sass = require('gulp-sass');

var config = {
  styles:{
    main: './src/styles/index.scss',
    watch: './src/styles/**/*.scss',
    output: './public/css'
  },
  html: {
		main: './src/index.html',
		watch: './src/*.html',
		output: './public'
	}
};

gulp.task('styles', function(){
  gulp
    .src(config.styles.main)
    .pipe(sass())
    .pipe(gulp.dest(config.styles.output));
});

gulp.task('html', function(){
 return gulp
   .src(config.html.main)
   .pipe(gulp.dest(config.html.output));
});

gulp.task('default', ['styles', 'html']);
