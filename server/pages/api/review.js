"use strict";
(() => {
var exports = {};
exports.id = 514;
exports.ids = [514];
exports.modules = {

/***/ 3169:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const review = [
    {
        id: 0,
        clientName: "Mustafash",
        clientLocation: "Egypt",
        clientSource: "Fiverr",
        clientReview: "It is always nice to work with him. The work is finished quickly and he does more than is asked of him. It is also clear that he has a lot of knowledge of the work he does. I look forward to our next collaboration."
    },
    {
        id: 2,
        clientName: "Melissabrown255",
        clientLocation: "United States",
        clientSource: "Fiverr",
        clientReview: "He is very good with communication and experienced website developer, great experience to work with him. "
    },
    {
        id: 3,
        clientName: "Jake Corry",
        clientLocation: "Germany",
        clientSource: "Fiverr",
        clientReview: "Vilal is extremely knowledgeable and helpful. He knows in and out of web app development . His understanding of different technologies and frameworks in the space is also very impressive. I hope I get the chance to work with him again"
    },
    {
        id: 4,
        clientName: "Blaise Labriola",
        clientLocation: "France",
        clientSource: "Fiverr",
        clientReview: "I have worked with Vilal and he is very professional and excellent software  developer. I admire his speed of development and quality of work when given an assignment."
    }
];
function handler(req, res) {
    res.status(200).json(review);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3169));
module.exports = __webpack_exports__;

})();