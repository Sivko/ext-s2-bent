/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/lib/dasreda.ts":
/*!****************************!*\
  !*** ./src/lib/dasreda.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const dasreda = {
    ls_auth: {
        "id": "Z6SlqM",
        "eo_token": "b1e54558e8af53b4f51730db738743609400c7f8d03ead79059942a73a7a3b5f",
        "ws_ticket": "82153e50c11d2dac42c429c994a5ec92bbfe8452a2231e4802122ab7c28340c9"
    },
    setLs_auth(obj) {
        this.ls_auth = obj;
    },
    options() {
        const time = new Date().getTime();
        const _time = time % 10000 + 65;
        const parent = this;
        let tokenService = this.ls_auth["eo_token"].split('').map(function (item, index) {
            return parent.ls_auth["eo_token"][_time % (index + 1)];
        }).join('');
        return ({
            headers: {
                Authorization: `Token token=${tokenService}`,
                "Content-Type": "application/json, text/plain, */*",
                Source: "ui",
                Userid: "Z6SlqM",
                Usertime: `${time}`,
            },
            "method": "GET",
            "referrer": "https://partners.dasreda.ru/",
        });
    },
    getOrder(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const _res = yield fetch(`https://ppapi.dasreda.ru/api/v1/sber_mq/order/${id}`, this.options());
            const res = yield _res.json();
            return res;
        });
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dasreda);


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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./src/service_worker.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_dasreda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/dasreda */ "./src/lib/dasreda.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

console.log("sw-omnibox.js");
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    (() => __awaiter(void 0, void 0, void 0, function* () {
        if (message === "getOrder") {
            const result = yield _lib_dasreda__WEBPACK_IMPORTED_MODULE_0__["default"].getOrder(3679489);
            sendResponse(result);
        }
    }))();
    return true;
});

})();

/******/ })()
;
//# sourceMappingURL=service_worker.js.map