/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 49);
/******/ })
/************************************************************************/
/******/ ({

/***/ 49:
/* no static exports found */
/* all exports used */
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: Cannot find module '@babel/preset-es2015' from '/mnt/c/Users/Stu/Desktop/FEC/ImageCarousel'\\n    at Function.resolveSync [as sync] (/mnt/c/Users/Stu/Desktop/FEC/ImageCarousel/node_modules/resolve/lib/sync.js:89:15)\\n    at resolveStandardizedName (/mnt/c/Users/Stu/Desktop/FEC/ImageCarousel/node_modules/@babel/core/lib/config/files/plugins.js:101:31)\\n    at resolvePreset (/mnt/c/Users/Stu/Desktop/FEC/ImageCarousel/node_modules/@babel/core/lib/config/files/plugins.js:58:10)\\n    at loadPreset (/mnt/c/Users/Stu/Desktop/FEC/ImageCarousel/node_modules/@babel/core/lib/config/files/plugins.js:77:20)\\n    at createDescriptor (/mnt/c/Users/Stu/Desktop/FEC/ImageCarousel/node_modules/@babel/core/lib/config/config-descriptors.js:154:9)\\n    at items.map (/mnt/c/Users/Stu/Desktop/FEC/ImageCarousel/node_modules/@babel/core/lib/config/config-descriptors.js:109:50)\\n    at Array.map (<anonymous>)\\n    at createDescriptors (/mnt/c/Users/Stu/Desktop/FEC/ImageCarousel/node_modules/@babel/core/lib/config/config-descriptors.js:109:29)\\n    at createPresetDescriptors (/mnt/c/Users/Stu/Desktop/FEC/ImageCarousel/node_modules/@babel/core/lib/config/config-descriptors.js:101:10)\\n    at presets (/mnt/c/Users/Stu/Desktop/FEC/ImageCarousel/node_modules/@babel/core/lib/config/config-descriptors.js:47:19)\\n    at mergeChainOpts (/mnt/c/Users/Stu/Desktop/FEC/ImageCarousel/node_modules/@babel/core/lib/config/config-chain.js:384:26)\\n    at /mnt/c/Users/Stu/Desktop/FEC/ImageCarousel/node_modules/@babel/core/lib/config/config-chain.js:347:7\\n    at Generator.next (<anonymous>)\\n    at buildRootChain (/mnt/c/Users/Stu/Desktop/FEC/ImageCarousel/node_modules/@babel/core/lib/config/config-chain.js:129:29)\\n    at buildRootChain.next (<anonymous>)\\n    at loadPrivatePartialConfig (/mnt/c/Users/Stu/Desktop/FEC/ImageCarousel/node_modules/@babel/core/lib/config/partial.js:99:62)\\n    at loadPrivatePartialConfig.next (<anonymous>)\\n    at Function.<anonymous> (/mnt/c/Users/Stu/Desktop/FEC/ImageCarousel/node_modules/@babel/core/lib/config/partial.js:125:25)\\n    at Generator.next (<anonymous>)\\n    at evaluateSync (/mnt/c/Users/Stu/Desktop/FEC/ImageCarousel/node_modules/gensync/index.js:244:28)\\n    at Function.sync (/mnt/c/Users/Stu/Desktop/FEC/ImageCarousel/node_modules/gensync/index.js:84:14)\\n    at Object.<anonymous> (/mnt/c/Users/Stu/Desktop/FEC/ImageCarousel/node_modules/@babel/core/lib/config/index.js:43:61)\\n    at Object.<anonymous> (/mnt/c/Users/Stu/Desktop/FEC/ImageCarousel/node_modules/babel-loader/lib/index.js:151:26)\\n    at Generator.next (<anonymous>)\\n    at asyncGeneratorStep (/mnt/c/Users/Stu/Desktop/FEC/ImageCarousel/node_modules/babel-loader/lib/index.js:3:103)\\n    at _next (/mnt/c/Users/Stu/Desktop/FEC/ImageCarousel/node_modules/babel-loader/lib/index.js:5:194)\\n    at /mnt/c/Users/Stu/Desktop/FEC/ImageCarousel/node_modules/babel-loader/lib/index.js:5:364\\n    at new Promise (<anonymous>)\\n    at Object.<anonymous> (/mnt/c/Users/Stu/Desktop/FEC/ImageCarousel/node_modules/babel-loader/lib/index.js:5:97)\\n    at Object.loader (/mnt/c/Users/Stu/Desktop/FEC/ImageCarousel/node_modules/babel-loader/lib/index.js:64:18)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDkuanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///49\n");

/***/ })

/******/ });