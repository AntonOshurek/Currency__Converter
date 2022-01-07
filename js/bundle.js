/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./source/scripts/blocks/clock.js":
/*!****************************************!*\
  !*** ./source/scripts/blocks/clock.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ clock; }
/* harmony export */ });
function clock() {
  const horse = document.querySelector('.clock__hourse');
  const minutes = document.querySelector('.clock__minutes'); // const seconds = document.querySelector('.time__item--seconds');

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  ;

  const checkHourse = hourse => {
    if (hourse > 1 && hourse < 5) {
      return 'часа';
    }

    if (hourse >= 5 && hourse < 21) {
      return 'часов';
    }

    if (hourse > 21 && hourse < 25) {
      return 'часа';
    }

    if (hourse === 1 || hourse === 21) {
      return 'час';
    }
  };

  const checkMinutes = minutes => {
    let minutesString = minutes.toString(); //  console.log(minutes)

    if (minutes === 1 || minutes > 11 && minutesString[1] == 1) {
      return 'минута';
    }

    if (minutes > 1 && minutes <= 4 || minutes > 20 && minutesString[1] < 5 && minutesString[1] > 1) {
      return 'минуты';
    }

    if (minutes >= 5 && minutes <= 20 || minutes >= 20 && minutesString[1] == 0 || minutes > 20 && minutesString[1] >= 5 && minutesString[1] <= 9 || minutes == 0) {
      return 'минут';
    }
  };

  const updateclock = () => {
    horse.textContent = `${getZero(new Date().getHours())} ${checkHourse(new Date().getHours())}`;
    minutes.textContent = `${getZero(new Date().getMinutes())} ${checkMinutes(new Date().getHours())}`; // ${checkMinutes(new Date().getHours())}
    // seconds.textContent = getZero(new Date().getSeconds());
  };

  updateclock();
  const timeInterva = setInterval(updateclock, 1000);
}
;

/***/ }),

/***/ "./source/scripts/blocks/servises.js":
/*!*******************************************!*\
  !*** ./source/scripts/blocks/servises.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getData": function() { return /* binding */ getData; }
/* harmony export */ });
const GET_DATA_SOURCE = 'https://www.cbr-xml-daily.ru/daily_json.js';

const getData = () => fetch(GET_DATA_SOURCE).then(response => {
  if (response.ok) {
    return response.json();
  }

  throw new Error(`${response.status} ${response.statusText}`);
});



/***/ }),

/***/ "./source/scripts/blocks/show-valute.js":
/*!**********************************************!*\
  !*** ./source/scripts/blocks/show-valute.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showValute": function() { return /* binding */ showValute; }
/* harmony export */ });
const selectFirst = document.querySelector('.converter__select--first');
const selectSecond = document.querySelector('.converter__select--second');
const valuteItem = document.querySelector('#valute-item');

const getValuteList = data => {
  let valuteObj = data.Valute;
  const fragment = new DocumentFragment();

  for (let key in valuteObj) {
    const templateItem = valuteItem.content.cloneNode(true);
    templateItem.querySelector('.converter__select--value').value = valuteObj[key].CharCode;
    templateItem.querySelector('.converter__select--value').textContent = valuteObj[key].Name;
    fragment.append(templateItem);
  }

  return fragment;
};

const showValute = data => {// selectFirst.append(getValuteList(data));
  // selectSecond.append(getValuteList(data));
};



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*********************************!*\
  !*** ./source/scripts/index.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_servises__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/servises */ "./source/scripts/blocks/servises.js");
/* harmony import */ var _blocks_show_valute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/show-valute */ "./source/scripts/blocks/show-valute.js");
/* harmony import */ var _blocks_clock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/clock */ "./source/scripts/blocks/clock.js");
//default



(0,_blocks_servises__WEBPACK_IMPORTED_MODULE_0__.getData)().then(data => {
  if (data) {
    (0,_blocks_show_valute__WEBPACK_IMPORTED_MODULE_1__.showValute)(data);
    console.log(data.Valute);
  }
}).catch(err => {//showAlert(`ошибка сервера - ${err}`);
});
window.addEventListener('DOMContentLoaded', () => {
  (0,_blocks_clock__WEBPACK_IMPORTED_MODULE_2__["default"])();
});
}();
/******/ })()
;
//# sourceMappingURL=bundle.js.map