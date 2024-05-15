/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/*!*******************************!*\
  !*** ./src/service_worker.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
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
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => __awaiter(void 0, void 0, void 0, function* () {
    // 2. A page requested user data, respond with a copy of `user`
    if (message === 'test') {
        console.log("LIST RESPONSE2");
        const time = new Date().getTime();
        const x = yield fetch("https://ppapi.dasreda.ru/api/v1/sber_mq/order/3670666", {
            headers: {
                Authorization: "Token token=77f1fc11f51a51fa7a152b5a15a1a2aae72a2533e295f5eaf8591ae15af3f8e5",
                "Content-Type": "application/json, text/plain, */*",
                Source: "ui",
                Userid: "Z6SlqM",
                Usertime: `${time}`,
            },
            "referrer": "https://partners.dasreda.ru/",
            "referrerPolicy": "origin",
            "mode": "cors",
            "credentials": "include"
        });
        sendResponse(x);
    }
}));


/******/ })()
;
//# sourceMappingURL=service_worker.js.map