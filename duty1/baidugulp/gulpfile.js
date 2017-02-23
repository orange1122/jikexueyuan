var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-clean-css');
var imagemin = require('gulp-image-optimization');
var htmlmin = require('gulp-html-minify');
var gulprev = require('gulp-rev');
var collector = require('gulp-rev-collector');
var del = require('del');




//压缩图片
gulp.task('imagemin',function(callback){
	 gulp.src('./img/*.png')
	.pipe(imagemin())
	.pipe(gulprev())
	.pipe(gulp.dest('./baidu/img'))
	.pipe(gulprev.manifest())
	.pipe(gulp.dest('./baidu/rev/img'))
	.on('end',function(){
		console.log("图片输出")
		callback()
	})
});
gulp.task('revcss',['imagemin'],function(callback){
	//上边这里就是要注意插件执行的顺序，你得先执行cssmin任务，生成json文件才能进行下一步，要不会出现错误。[]里边插件是并行的关系。
	 gulp.src(['./baidu/rev/img/rev-manifest.json','./css/baidu.css'])
	.pipe(collector())
	.pipe(gulp.dest('./baidu/css'))
	.on('end',function(){
		console.log("revcss输出")
		callback()
	})
});
gulp.task('revjs',['revcss'],function(callback){
	//上边这里就是要注意插件执行的顺序，你得先执行cssmin任务，生成json文件才能进行下一步，要不会出现错误。[]里边插件是并行的关系。
	 gulp.src(['./baidu/rev/img/rev-manifest.json','./js/*.js'])
	.pipe(collector())
	.pipe(gulp.dest('./baidu/js'))
	.on('end',function(){
		console.log("revjs输出")
		callback()
	})
});
//压缩css
gulp.task('cssmin',['revjs'],function(callback){
     gulp.src('./baidu/css/*.css')
	.pipe(cssmin())
	.pipe(gulprev())
	.pipe(gulp.dest('./baidu/css'))
	.pipe(gulprev.manifest())
	.pipe(gulp.dest('./baidu/rev/css'))
	.on('end',function(){
		console.log("css输出")
		callback()
	})
});

//压缩js
gulp.task('uglify',['cssmin'],function(callback){
	 gulp.src('./baidu/js/*.js')
	.pipe(uglify())
	.pipe(gulprev())
	.pipe(gulp.dest('./baidu/js'))
	.pipe(gulprev.manifest())
	.pipe(gulp.dest('./baidu/rev/js'))
	.on('end',function(){
		console.log("js输出")
		callback()
	})
});



gulp.task('revhtml',['uglify'],function(){
	//上边这里就是要注意插件执行的顺序，你得先执行cssmin任务，生成json文件才能进行下一步，要不会出现错误。[]里边插件是并行的关系。
	 gulp.src(['./baidu/rev/**/rev-manifest.json','./baidu.html'])
	.pipe(collector())
	.pipe(htmlmin())
	.pipe(gulp.dest('./baidu'))
	.on('end',function(){
		console.log("html输出")
		// callback()
	})
});

gulp.task('clean',['revhtml'],function(){
	return gulp.src(['baidu/css/baidu.css','baidu/js/baidu.js','baidu/js/jquery-3.1.1.js']) 
		   .pipe(vinylPaths(del))
	
});
gulp.task('default',['clean']);




























