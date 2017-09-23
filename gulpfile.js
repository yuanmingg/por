// 本地安装gulp：为了在此处gulp
// require():commonjs的规范
var gulp=require('gulp');
var sass=require('gulp-sass');

// 编译sass
// 利用gulp任务来编译
// 创建gulp任务：gulp.task()
gulp.task('ceshi',function(){
    // 查找sass文件
    // 匹配文件成功后，返回文档流
    // gulp.src(['./src/sass/*.scss','!./src/sass/var.scss'])
    // gulp.src('./src/**/*.scss')
    gulp.src('./src/sass/index.scss')

    // 编译sass文件
    // .pipe(sass({outputStyle:'compact'}).on('error',sass.logError))
    .pipe(sass({outputStyle:'compact'}).on('error',sass.logError))
    // 输出文件到硬盘
    .pipe(gulp.dest('./src/css'));
});
//监听sass文件修改
gulp.task('jtSass',function(){
    // 监听home.scss文件，如果有修改，则自动compileSass任务
    gulp.watch('./src/sass/index.scss',['ceshi']);
});
// //合并压缩
// var concat=require('gulp-concat');
// var uglify=require('gulp-uglify');
// var rename=require('gulp-uglify');
// gulp.task('mergeJs',function(){
//     gulp.src(['./src/js/*.js','!./src/js/all.js'])
//     //合并所有js文件到all.js
//     .pipe(concat('all.js'))
//     // 输出文件
//     .pipe(gulp.dest('./src/js/'))
//     // 压缩
//     .pipe(uglify())
//     // 改名
//     .pipe(rename({suffix:'.xin'}))

//     .pipe(gulp.dest('./src/js/'))
// })