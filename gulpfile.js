const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const uglify = require("gulp-uglify");
const obfuscate = require("gulp-obfuscate");
const imagens = require("gulp-imagemin");

function compilaSass(){
    return gulp.src("./source/styles/main.scss")
        .pipe(sass({outputStyle: "compressed"}))
        .pipe(gulp.dest("build/styles"))
}
function comprimeJavascript(){
    return gulp.src("./source/scripts/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./build/scripts"))
}
function comprimeJavascriptCodificado(){
    return gulp.src("./source/scripts/*.js")
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest("./build/scripts/codificado"))
}
function comprimeImagens(){
    return gulp.src("./source/imagens/*")
        .pipe(imagens())
        .pipe(gulp.dest("./build/imagens"))
}



exports.default = function(){
    gulp.watch("./source/styles/*scss", {ignoreInitial:false}, gulp.series(compilaSass))
    gulp.watch("./source/scripts/*.js", {ignoreInitial:false}, gulp.series(comprimeJavascript))
    gulp.watch("./source/scripts/*.js", {ignoreInitial:false}, gulp.series(comprimeJavascriptCodificado))
    gulp.watch("./source/imagens/*", {ignoreInitial:false}, gulp.series(comprimeImagens))
}
