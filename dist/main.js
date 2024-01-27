/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("console.log(\"Hie\")\r\n\r\n\r\nfunction getTemperature(){\r\n    fetch(\"https://api.weatherapi.com/v1/current.json?key=1fb9b24b0ecd46f3b25110719242301&q=london\",{\r\n        mode:'cors'\r\n    }).then(function(response){\r\n        console.log(response)\r\n        return response.json()\r\n    }).then(function(data){\r\n        console.log(data.location.name)\r\n        console.log(data.current.temp_c)\r\n        console.log(data.current.feelslike_c)\r\n        console.log(data.current.humidity)\r\n        console.log(data.current.wind_kph)\r\n        console.log(data)\r\n    })\r\n}\r\n\r\ngetTemperature()\n\n//# sourceURL=webpack://webpack-template-repo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;