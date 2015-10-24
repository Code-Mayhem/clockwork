var gulp = require('gulp');
var changed = require('gulp-changed');
var handlebars = require('gulp-compile-handlebars');
var jasmine = require('gulp-jasmine');
var jshint = require('gulp-jshint');
var minifyCSS = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
var rename = require('gulp-rename');
var runSeq = require('run-sequence');
var sass = require('gulp-sass');
var server = require('gulp-express');
var sgc = require('gulp-sass-generate-contents');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var zip = require('gulp-zip');

var config = {
	src: './_src',
	dest: './_build',
	views: '/views',
	styles: '/styles',
	scripts: '/javascript',
	data: '/data'
};

var src = {
	views: config.src + config.views,
	scripts: config.src + config.scripts,
	styles: config.src + config.styles,
	test: config.test + '/test.js',
	data: config.data + '/data.json'
};

var dest = {
	views: config.dest + config.views,
	scripts: config.dest + config.scripts,
	styles: config.dest + config.styles
};

gulp.task('sass-generate-contents', function () {
	gulp.src([
		src.styles + '/_settings/*.scss',
		src.styles + '/_settings/*.scss',
		src.styles + '/_tools/*.scss',
		src.styles + '/_tools/*.scss',
		src.styles + '/_tools/*.scss',
		src.styles + '/_scope/*.scss',
		src.styles + '/_generic/*.scss',
		src.styles + '/_elements/*.scss',
		src.styles + '/_objects/*.scss',
		src.styles + '/_components/*.scss',
		src.views + '/**/*.scss',
		src.styles + '/_trumps/*.scss'
	])
	.pipe(sgc(src.styles + '/main.scss'))
	.pipe(gulp.dest(src.styles));
});

gulp.task('sass', function(){
	gulp.src(src.styles + '/*.scss')
		.pipe(changed(dest.styles))
		.pipe(sass())
		.pipe(minifyCSS())
		.pipe(gulp.dest(dest.styles));
});

gulp.task('compile-html', function(){
	var data = require('./data/data.json');
	var options = {
		batch : ['_src/views']
	};
	gulp.src(src.views + '/*.hbs')
		.pipe(handlebars(data, options))
		.pipe(rename({extname: '.html'}))
		.pipe(minifyHTML())
		.pipe(gulp.dest(dest.views));
});

gulp.task('scripts', function(){
	gulp.src(src.scripts + '/*.js')
		.pipe(changed(dest.scripts))
		.pipe(uglify())
		.pipe(gulp.dest(dest.scripts));
});

gulp.task('jasmine', function() {
	gulp.src(src.test)
		.pipe(jasmine());
});

gulp.task('server', server.run(['./bin/www']));

gulp.task('default', function() {
	runSeq(['dev'], ['watch']);
});

gulp.task('watch', ['server'], function() {
	gulp.watch(src.views + '/**/*.hbs', ['compile-html']);
	gulp.watch(src.scripts + '/*.js', ['scripts']);
	gulp.watch(src.styles + '/*.scss', ['sass']);
	gulp.watch(src.views + '/**/*.scss', ['sass']);
	gulp.watch(src.data + '/*.json', ['compile-html']);
});

gulp.task('dev', function() {
	runSeq(['sass-generate-contents'], ['scripts', 'compile-html']);
});