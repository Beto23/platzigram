var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var rename = require('gulp-rename');
var babel = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');




var config = {
  styles:{
    main: './assets/styles/index.scss',
    watch: './assets/styles/**/*.scss',
    output: './public/'
  },
  images: {
  main: ['./assets/img/*'],
  output: './public/',
  watch: ['./assets/img/**/*.jpg','./assets/img/**/*.png']
  },
  scripts:{
    main: './src/index.js',
    watch: './src/**/*.js',
    output: './public/'
  },
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

function compile(watch){
  var bundle = watchify(browserify(config.scripts.main, {debug: true}));

  function rebundle(){
    bundle
      .transform(babel)
      .bundle()
      .on('error', function(err){ console.log(err); this.emit('end');  })
      .pipe(source('index.js'))
      .pipe(rename('app.js'))
      .pipe(gulp.dest(config.scripts.output));
  }
  if (watch) {
    bundle.on('update', function(){
      console.log('--> Bundling...');
      rebundle();
    });
  }
  rebundle();
}

gulp.task('build', function () {
  return compile();
});

gulp.task('watch', function () { return compile(true); });


gulp.task('default', ['styles','img', 'build']);
