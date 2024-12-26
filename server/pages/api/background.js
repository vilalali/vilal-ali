"use strict";
(() => {
var exports = {};
exports.id = 83;
exports.ids = [83];
exports.modules = {

/***/ 7955:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const background = [
    {
        eduCards: [
            {
                id: 0,
                title: "UET Peshawar",
                degree: "BS, Computer System Engineering",
                detail: "Bachelor's Degree in Computer System Engineering from UET Peshawar.",
                year: "2018-2022"
            },
            {
                id: 1,
                title: "Peshawar Model Degree College",
                degree: "HSSC, Pre Engineering",
                detail: "Completed FSC part 1 and part 2 in Pre-Engineering from Peshawar Model Degree College.",
                year: "2015-2017"
            },
            {
                id: 2,
                title: "Falcon Academy",
                degree: "SSC, Science Subjects",
                detail: "Completed SSC part 1 and part 2 in Science subjects from Falcon Academy Seni Gumbat Kohat",
                year: "2013-2015"
            }
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: "JMM Technologies",
                role: "Frontend Developer",
                url: "https://jmm.ltd/",
                desc: "As a frontend developer, I use React, Next & JavaScript to build user interfaces for web applications.",
                year: "02/2023 - Present",
                location: "Peshawar, Pakistan"
            },
            {
                id: 2,
                title: "HauzaTech",
                role: "Internee",
                url: "no website",
                desc: "As an Internee, I learned how to use React & JavaScript to build interactive websites.",
                year: "02/2023 - Present",
                location: "Peshawar, Pakistan"
            },
            {
                id: 3,
                title: "Encoder Bytes",
                role: "PHP Developer",
                url: "https://www.encoderbytes.com/",
                desc: "I work there as a PHP developer, there I learned how to do CRUD'S operations in PHP, also I worked on Firebase",
                year: "09/2020 - 02/2021",
                location: "Peshawar, Pakistan"
            }
        ]
    }
];
function handler(req, res) {
    res.status(200).json(background);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7955));
module.exports = __webpack_exports__;

})();