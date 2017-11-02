'use strict';

const gulp      = require('gulp'),
    jshint      = require('gulp-jshint'),
    stylish     = require('jshint-stylish'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglify'),
    pump        = require('pump'),
    fs          = require('fs'),
    exec        = require('child_process').exec,
    cleanCSS    = require('gulp-clean-css'),
    //watch       = require('gulp-watch'),
    nodemon     = require('gulp-nodemon');

gulp.task('nodemon', function () {
  nodemon({
    script: 'server.js',
    tasks: ['jshint'],
    ignore: ['node_modules/','bower_components/','public/js/','test/', 'coverage/','*.html'],
  })
});

/********************************************************************************************************************************************************************************************************************************************************/

let watchFiles = [
    './public/app.js',
    './public/assets/js/*.js',
    './public/config/*.js',
    './public/assets/appjs/*.js',
    './public/modules/global-services/*.js',
    './public/modules/*/*/*.js', 
    './public/modules/*/*.js', 
];


gulp.task('jshint', ['uglify:front-js'], (cb) => {
    

    return gulp.src(watchFiles)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

gulp.task('uglify:front-js', (cb) => {
    pump([
        gulp.src(watchFiles),
        concat('main.js'),
        uglify(),
        gulp.dest('./public/js')
    ],cb);

});


//gulp.watch(watchFiles,['jshint']);


/********************************************************************************************************************************************************************************************************************************************************/

gulp.task('vendor:js', (cb) => {
    pump([
        gulp.src([
            './bower_components/angular/angular.min.js',
            './bower_components/angular-route/angular-route.min.js',
            './bower_components/angular-local-storage/dist/angular-local-storage.min.js',
            './bower_components/angular-animate/angular-animate.min.js',
            './bower_components/angular-aria/angular-aria.min.js',
            './bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
            './bower_components/angular-material/angular-material.min.js',
            './bower_components/angular-material-icons/angular-material-icons.min.js',
            './bower_components/ng-file-upload-shim/ng-file-upload-shim.min.js',
            './bower_components/ng-file-upload/ng-file-upload.min.js',           
            './bower_components/angularjs-datetime-picker/angularjs-datetime-picker.min.js',            
            './bower_components/owl.carousel/dist/owl.carousel.min.js',
            './bower_components/angular-sanitize/angular-sanitize.js',
            './bower_components/angular-nicescroll/angular-nicescroll.js',  
            './bower_components/angular-confirm/dist/angular-confirm.min.js',
            './bower_components/v-accordion/dist/v-accordion.min.js',
            './bower_components/angular-cookies/angular-cookies.js'
        ]),
        concat('vendor.js'),
       uglify(),
        gulp.dest('./public/js')
    ],cb);

});

/********************************************************************************************************************************************************************************************************************************************************/

let watchCssFiles = [
     './public/assets/css/*.css'
];



//gulp.watch(watchCssFiles,['uglify:css']);

gulp.task('uglify:css', (cb) => {
    pump([
        gulp.src(watchCssFiles),
         concat('main-style.css'),
        cleanCSS(),
        gulp.dest('./public/css')
    ],cb);
});





/********************************************************************************************************************************************************************************************************************************************************/

gulp.task('vendor:theme-css', (cb) => {
    pump([
        gulp.src([
            './bower_components/bootstrap/dist/css/bootstrap.min.css',
            './bower_components/components-font-awesome/css/font-awesome.min.css',
            './bower_components/angular-material/angular-material.min.css',
            './bower_components/angular-material-icons/angular-material-icons.css',
            './bower_components/angularjs-slider/dist/rzslider.min.css',
             './bower_components/angularjs-datetime-picker/angularjs-datetime-picker.css',
             './bower_components/owl.carousel/dist/assets/owl.carousel.min.css',
             './bower_components/angular-confirm/dist/angular-confirm.min.css', 
             './bower_components/v-accordion/dist/v-accordion.min.css'
        ]),
         concat('vendor-theme-css.css'),
        cleanCSS(),
        gulp.dest('./public/css')
    ],cb);
});



/********************************************************************************************************************************************************************************************************************************************************/


gulp.task('check:env', () => {
    fs.stat(`${__dirname}/.env`, (err, success) => {
        if(err){
            try{
                let path = `${__dirname}/.env`;
                if(fs.openSync(path,'w')){
                    fs.writeFileSync(path,'NODE_ENV=development');
                }
            } catch(e){
                console.error(`System is unable to create ".env" file, please create ".env" file in root directory and specify the "NODE_ENV" to either one of these (development, production) eg. NODE_ENV=development`);
            }
        }
    });
});


/******************************************************************************************************************************************************************************************************************************/

gulp.task('default',
    [
    'vendor:js',
    'uglify:front-js',
    'vendor:theme-css',
    'uglify:css',
    'jshint',
    'check:env',
    'nodemon'
    ],function(){
    console.log('Gulp finish');
});
