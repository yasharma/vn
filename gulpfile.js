'use strict';

const gulp      = require('gulp'),
    jshint      = require('gulp-jshint'),
    stylish     = require('jshint-stylish'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglify'),
    pump        = require('pump'),
    fs          = require('fs'),
    nodemon     = require('gulp-nodemon');

let watchFiles = [
    './public/app.js',
    './public/config/*.js',
    './public/assets/appjs/*.js',
    './public/modules/*/controllers/*.js', 
];

gulp.task('nodemon', function () {
  nodemon({
    script: 'server.js',
    tasks: ['jshint'],
    ignore: ['node_modules/','bower_components/','public/js/','test/', 'coverage/','*.html'],
  })
});


gulp.task('jshint', ['uglify:front-js'], (cb) => {
    return gulp.src(watchFiles)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

/**
Concat all frontend angular js files
*/
gulp.task('uglify:front-js', (cb) => {
    pump([
        gulp.src(watchFiles),
        concat('main.js'),
        gulp.dest('./public/js')
    ],cb);

});

gulp.task('vendor:js', (cb) => {
    pump([
        gulp.src([
            './public/assets/vendorjs/jquery.min.js',
            './bower_components/angular/angular.min.js',
            './bower_components/angular-route/angular-route.min.js',
            './bower_components/angular-local-storage/dist/angular-local-storage.min.js'
        ]),
        concat('vendor.js'),
        uglify(),
        gulp.dest('./public/js')
    ],cb);

});


gulp.task('css', (cb) => {
    pump([
        gulp.src([
            './public/assets/css/*.css'
        ]),
         concat('main-style.css'),
        /*uglify(),*/
        gulp.dest('./public/css')
    ],cb);

});


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

gulp.task('default',['vendor:js','uglify:front-js','css','jshint','check:env','nodemon'],function(){
// gulp.task('default',['vendor:js','uglify:front-js','css','nodemon'],function(){
    console.log('Gulp finish');
});