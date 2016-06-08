var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

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
	},
  images: {
  main: ['./src/img/**/*.jpg','./src/img/**/*.png'],
  output: './public/img',
  watch: ['./src/img/**/*.jpg','./src/img/**/*.png']
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

gulp.task('img', function(){
 return gulp
   .src(config.images.main)
   .pipe(imagemin({
     progressive: true,
     svgoPlugins: [{removeViewBox: false}],
     use: [pngquant()]
   }))
   .pipe(gulp.dest(config.images.output));
});

gulp.task('default', ['styles', 'html', 'img']);
