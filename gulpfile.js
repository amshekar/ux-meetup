﻿/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. https://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');

gulp.task('default', function () {
    // JS Libraries
    
});
gulp.task('copy', function () {
    gulp.src('./bower_components/angular/angular.js').pipe(gulp.dest('./client/vendor'));
    gulp.src('./bower_components/angular-animate/angular-animate.js').pipe(gulp.dest('./client/vendor'));
    gulp.src('./bower_components/angular-sanitize/angular-sanitize.js').pipe(gulp.dest('./client/vendor'));
    gulp.src('./bower_components/angular-ui-router/release/angular-ui-router.js').pipe(gulp.dest('./client/vendor'));
    gulp.src('./bower_components/angular-ui-select/dist/select.js').pipe(gulp.dest('./client/vendor'));
    gulp.src('./node_modules/angucomplete-alt/dist/angucomplete-alt.min.js').pipe(gulp.dest('./client/vendor'));
    gulp.src('./node_modules/Propeller/dist/propeller.min.js').pipe(gulp.dest('./client/vendor'));
    gulp.src('./node_modules/angular-radial-color-picker/dist/js/color-picker.min.js').pipe(gulp.dest('./client/vendor'));
    gulp.src('./node_modules/angucomplete-alt/dist/angucomplete-alt.min.js').pipe(gulp.dest('./client/vendor'));
    
});