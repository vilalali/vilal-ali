"use strict";
(() => {
var exports = {};
exports.id = 731;
exports.ids = [731];
exports.modules = {

/***/ 8468:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const recommendationCard = [
    {
        id: 0,
        name: "Prof. Krishna Reddy P.",
        image: "images/prof-krishna.png",
        designation: "Professor|IIIT Hyderabad",
        view: "Hi everyone! I highly recommend Vilal for Data Science and Engineering opportunities. He worked for me on multiple projects, showcasing a deep understanding of React.js, React Native, Next.js, and Python. Vilal consistently delivered high-quality code, demonstrated a strong willingness to learn, and approached new challenges with enthusiasm and determination. He is a reliable and dedicated professional who would be a valuable asset to any Engineering team.. Highly recommended! \uD83D\uDC4D! \uD83C\uDF1F",
        linkednURL: "https://www.linkedin.com/in/shahmir-minhas/"
    },
    {
        id: 1,
        name: "Dr. Rashid Ahmed",
        image: "images/rashid.jpeg",
        designation: "Data Scientist | Machine Learning Engineer | Python Developer | NLP Expert",
        view: "I had the privilege of working alongside Vilal on multiple NLP projects, and I must say, his talent and work ethic truly stood out. Recently, we were both part of the dynamic team at Data Science Technologies, where Vilal's professionalism and attention to detail shone brightly. I wholeheartedly endorse Vilal for any opportunity that calls for a highly skilled and dedicated individual.",
        linkednURL: "https://faculty.iiit.ac.in/~pkreddy/"
    },
    {
        id: 2,
        name: "Karthik Vaidhyanathan",
        image: "images/prof-karthik.jpeg",
        designation: "Assistant Professor at IIIT Hyderabad (IIITH) | Researcher | Teacher | Consultant",
        view: "I wholeheartedly recommend Vilal as a talented software engineer with an incredible flair for System Design. His proficiency in Node.js further enhances his capabilities, allowing him to build robust and scalable applications. Vilal Ali's attention to detail, problem-solving skills, and dedication to delivering exceptional results make him a valuable addition to any development team.",
        linkednURL: "https://www.linkedin.com/in/karthikv1392/"
    },
    {
        id: 3,
        name: "Amit Pandey",
        image: "images/amit.jpeg",
        designation: "Data Science Researcher",
        view: "I highly recommend Vilal Ali for web frontend development positions. Their expertise in ReactJS and Node.js, combined with their professionalism and dedication, make them an invaluable asset to any team.",
        linkednURL: "https://www.linkedin.com/in/amitpandey2910/"
    }
];
function handler(req, res) {
    res.status(200).json(recommendationCard);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8468));
module.exports = __webpack_exports__;

})();