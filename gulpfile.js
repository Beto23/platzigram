var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var rename = require('gulp-rename');

var config = {
  styles:{
    main: './assets/styles/index.scss',
    watch: './assets/styles/**/*.scss',
    output: './public/css'
  },
  images: {
  main: ['./assets/img/**/*.jpg','./assets/img/**/*.png'],
  output: './public/img',
  watch: ['./assets/img/**/*.jpg','./assets/img/**/*.png']
  }
};

gulp.task('styles', function(){
  gulp
    .src(config.styles.main)
    .pipe(sass())
    .pipe(rename('app.css'))
    .pipe(gulp.dest(config.styles.output));
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

gulp.task('default', ['styles','img']);
