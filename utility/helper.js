"use strict";
exports.__esModule = true;
exports.fnPipe = void 0;
// Shared functions
var fnCompose = function () {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return function (value) {
        return fns.reduceRight(function (prevFn, currFn) { return currFn(prevFn); }, value);
    };
};
var fnPipe = function () {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return function (value) {
        return fns.reduce(function (prevFn, currFn) { return currFn(prevFn); }, value);
    };
};
exports.fnPipe = fnPipe;
var compose = function () {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return function (value) {
        return fns.reduceRight(function (prevFunc, curFunc) { return curFunc(prevFunc); }, value);
    };
};
var pipeNumber = function () {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return function (value) {
        return fns.reduce(function (prevFunc, curFunc) { return curFunc(prevFunc); }, value);
    };
};
var pipe = function () {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return function (value) {
        return fns.reduce(function (prevFunc, curFunc) { return curFunc(prevFunc); }, value);
    };
};
