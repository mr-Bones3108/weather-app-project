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

eval("const getTemperature = (()=>{\r\n\r\n    const convertData = (data)=>{\r\n      const name = data.location.name\r\n      const {\r\n        temp_c:temp_c,\r\n        temp_f:temp_f\r\n        } = data.current;\r\n      console.log(name)\r\n      console.log(temp_c)\r\n      console.log(temp_f)\r\n    }\r\n\r\n    async function getWeatherData(city){\r\n        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=1fb9b24b0ecd46f3b25110719242301&q=${city}`;\r\n        \r\n        try{\r\n            const response = await fetch(apiUrl, {mode:'cors'})\r\n            if(!response.ok) throw new Error(`entered ${city} is not a city`)\r\n            const data = await response.json()\r\n            convertData(data)\r\n            console.log(data)\r\n            return data\r\n        }\r\n        catch(error){\r\n            alert(error)\r\n            return null\r\n        }\r\n}\r\nreturn{getWeatherData}\r\n})();\r\n\r\ngetTemperature.getWeatherData(\"nagpur\")\r\n\n\n//# sourceURL=webpack://webpack-template-repo/./src/index.js?");

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