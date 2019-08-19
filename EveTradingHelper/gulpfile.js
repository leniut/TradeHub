/// <binding BeforeBuild='buildWebpack' />
/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    del = require("del");

//const gulp = require("gulp");
//const uglify = require("gulp-uglyfly");
//const del = require("del");

//var gulp = require('gulp');
//var del = require('del');

var paths = {
    styles: {
        src: 'ClientSrc/scss/*.scss',
        dest: 'wwwroot/dist/appstyle'
    },
    scripts: {
        src: 'ClientSrc/ts/**/*.js',
        dest: 'wwwroot/dist/appsrc'
    },
    fontawsome: {
        src: 'ClientSrc/selfhost/fontawsome/webfonts/**/*.*',
        dest: 'wwwroot/dist/webfonts'
    }
};

function styles() {
    return gulp
        .src(paths.styles.src, {
            sourcemaps: true
        })
        .pipe(sass())
        .pipe(rename({
            basename: 'main',
            suffix: '.min'
        }))
        .pipe(gulp.dest(paths.styles.dest));
}

function scripts() {
    return gulp
        .src(paths.scripts.src, {
            sourcemaps: true
        })
        .pipe(uglify())
        //.pipe(concat('main.min.js'))
        .pipe(gulp.dest(paths.scripts.dest));
}

function fontAwsome() {
    return gulp.src(paths.fontawsome.src, { sourcemaps: false })
        .pipe(gulp.dest(paths.fontawsome.dest));
}

function watch() {
    gulp
        .watch(paths.scripts.src, scripts);
    gulp
        .watch(paths.styles.src, styles);
}

var build = gulp.parallel(styles, scripts, fontAwsome, watch);
var buildWebpack = gulp.parallel(styles, scripts, fontAwsome);


gulp.task(build);
gulp.task('default', build);
gulp.task('buildWebpack', buildWebpack);