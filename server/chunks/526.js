"use strict";
exports.id = 526;
exports.ids = [526];
exports.modules = {

/***/ 6636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Badge = ({ title  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: "py-2 px-3 text-xs text-Snow bg-EveningBlack rounded-full",
        children: title
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Badge);


/***/ }),

/***/ 5526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./constants/constants.js
const NAME = "Vilal Ali";
const DESIGNATION = `Fulll Stack | Open Source Contributor | Tech Blogger`;
const DETAILS = {
    Residence: "India",
    City: "Hyderabad",
    Age: "32"
};
const SKILLS = [
    {
        title: "MERN Stack Developer",
        level: "75%"
    },
    {
        title: "React Developer",
        level: "91%"
    },
    // {
    //   title: 'Desktop Application Developer',
    //   level: '75%',
    // },
    {
        title: "Backend Developer",
        level: "54%"
    },
    {
        title: "Technical Blogger",
        level: "83%"
    }
];
const TECH_STACK = [
    "JavaScript",
    "ReactJS",
    "ReactNative",
    "NextJS",
    "TypeScript",
    "NodeJS",
    "Redux",
    "TailwindCSS",
    "Material UI",
    "Next UI",
    "REST API",
    "MongoDB",
    "MySQL",
    "GitHub",
    "Jira",
    "Figma"
];
const CONTACTS = {
    EMAIL: "vilal.ali@research.iiit.ac.in",
    PHONE: "+91 998 736 691"
};
const SOCIAL_LINKS = {
    GITHUB: "https://github.com/vilalali",
    LINKEDIN: "https://www.linkedin.com/in/vilal-ali/",
    TWITTER: "#",
    FACEBOOK: "#"
};

;// CONCATENATED MODULE: ./components/Common/Intro/Contact.jsx




const Contact = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col space-y-2 pt-6",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "text-Snow text-xs font-bold",
                        children: "Email Address"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "text-xs text-gray-600",
                        mailto: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: `mailto:${CONTACTS.EMAIL}`,
                            children: CONTACTS.EMAIL
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "text-Snow text-xs font-bold",
                        children: "Phone"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "text-xs text-gray-600",
                        children: CONTACTS.PHONE
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Intro_Contact = (Contact);

;// CONCATENATED MODULE: ./components/Common/Intro/Download.jsx


const Download = ({ icon  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
            href: "./assets/VILAL_ALI_CV_SDE_II_2024_V4.pdf",
            target: "_blank",
            className: "flex flex-row text-LightGray items-center gap-x-4 pb-14 pt-4",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "text-Snow",
                    children: "Download Resume"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    children: icon
                })
            ]
        })
    });
};
/* harmony default export */ const Intro_Download = (Download);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
;// CONCATENATED MODULE: ./components/Common/Intro/Languages.jsx



const Languages = ()=>{
    const [urdu, setUrdu] = (0,external_react_.useState)(0);
    const [english, setEnglish] = (0,external_react_.useState)(0);
    (0,external_react_.useEffect)(()=>{
        const timer = setInterval(()=>{
            if (urdu < 98) {
                setUrdu((prevCount)=>prevCount + 1);
            }
            if (english < 88) {
                setEnglish((prevCount)=>prevCount + 1);
            }
        }, 30);
        return ()=>clearInterval(timer);
    }, [
        urdu,
        english
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex flex-col space-y-1 pt-6",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col gap-y-4",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "text-Snow text-xs font-bold",
                    children: "Languages"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-row items-center justify-center space-x-6",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col items-center justify-center gap-y-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Progress, {
                                    strokeColor: "#1fdf64",
                                    type: "circle",
                                    percent: urdu,
                                    size: 75
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-xs font-bold text-Snow",
                                    children: "Urdu"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col items-center justify-center gap-y-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Progress, {
                                    strokeColor: "#1fdf64",
                                    type: "circle",
                                    percent: english,
                                    size: 75
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-xs font-bold text-Snow",
                                    children: "English"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const Intro_Languages = (Languages);

;// CONCATENATED MODULE: ./utils/utils.js
const getObjectKeys = (obj)=>{
    const keys = Object.keys(obj);
    return keys;
};

;// CONCATENATED MODULE: ./components/Common/Intro/Location.jsx



const Location = ()=>{
    const keys = getObjectKeys(DETAILS);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex flex-col space-y-1 pt-6",
        children: keys.map((key, index)=>{
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "text-Snow text-xs font-bold",
                        children: key
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "text-xs text-gray-600",
                        children: DETAILS[key]
                    })
                ]
            }, index);
        })
    });
};
/* harmony default export */ const Intro_Location = (Location);

// EXTERNAL MODULE: ./components/Common/Badge.jsx
var Badge = __webpack_require__(6636);
;// CONCATENATED MODULE: ./components/Common/Intro/Tools.jsx



const Tools = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex flex-col space-y-1 pt-6",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col gap-y-4",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "text-Snow text-xs font-bold",
                    children: "Tools"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex flex-wrap gap-2",
                    children: TECH_STACK.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(Badge/* default */.Z, {
                            title: item
                        }, index))
                })
            ]
        })
    });
};
/* harmony default export */ const Intro_Tools = (Tools);

;// CONCATENATED MODULE: ./components/Common/Intro/LinearBar.jsx


const LinearBar = ({ title , percent , bgColor  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex justify-between mb-1",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "text-xs text-gray-400",
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "text-xs text-gray-400",
                        children: percent
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `${bgColor} h-2 rounded-full w-16 `,
                    style: {
                        width: `${percent}`
                    }
                })
            })
        ]
    });
};
/* harmony default export */ const Intro_LinearBar = (LinearBar);

;// CONCATENATED MODULE: ./components/Common/Intro/Skills.jsx



const Skills = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex flex-col space-y-1 pt-6",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col gap-y-4",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    className: "text-Snow text-xs font-bold bg-gradient-to-bl",
                    children: "Experties and Competencies"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex flex-col space-y-4",
                    children: SKILLS.map((skill, index)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx(Intro_LinearBar, {
                            title: skill.title,
                            percent: skill.level,
                            bgColor: "bg-Green"
                        }, index);
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const Intro_Skills = (Skills);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/images/Vilal.jpg
/* harmony default export */ const Vilal = ({"src":"/_next/static/media/Vilal.9ab33e4b.jpg","height":276,"width":276,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAgX/2gAMAwEAAhADEAAAAKgd3//EAB4QAAAEBwAAAAAAAAAAAAAAAAECAxIABAUREyLC/9oACAEBAAE/AFadJ4BXZqU7RV5tH//EABcRAAMBAAAAAAAAAAAAAAAAAAABAkL/2gAIAQIBAT8AdUtM/8QAGxEAAQQDAAAAAAAAAAAAAAAAAgABAxIEESL/2gAIAQMBAT8AjxIivu3JuK//2Q==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./components/Common/Intro/index.jsx












const Intro = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "headerr z-50 absolute bg-MidNightBlack backdrop-blur-sm inset-y-0 h-48 top-0 flex items-center justify-center w-full flex-col px-4 gap-y-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        className: "w-20 h-20 rounded-full",
                        src: Vilal,
                        alt: "profile picture"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col items-center justify-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "text-gray-300 text-base font-bold break-normal",
                                children: NAME
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "text-sm text-LightGray text-center mt-2",
                                children: DESIGNATION
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "beech z-20 flex flex-col overflow-y-scroll pt-48 top-48 space-y-6 divide-y divide-white overflow-x-hidden no-scrollbar px-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Intro_Location, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Intro_Languages, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Intro_Skills, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Intro_Tools, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Intro_Contact, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Intro_Download, {
                        icon: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaDownload, {})
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "footer absolute flex justify-center space-x-6 text-xl items-center bottom-0 z-50 h-10 w-full bg-MidNightBlack text-Snow",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: SOCIAL_LINKS.GITHUB,
                        target: "_blank",
                        rel: "noreferrer",
                        className: "",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaGithub, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: SOCIAL_LINKS.LINKEDIN,
                        target: "_blank",
                        rel: "noreferrer",
                        className: "",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaLinkedin, {})
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Common_Intro = (Intro);

// EXTERNAL MODULE: external "react-icons/im"
var im_ = __webpack_require__(924);
// EXTERNAL MODULE: external "react-icons/fi"
var fi_ = __webpack_require__(2750);
// EXTERNAL MODULE: external "react-icons/hi"
var hi_ = __webpack_require__(1111);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/Common/Nav/NavItem.jsx




const NavItem = ({ NavIcon , NavText , NavRoute , setIsOpen  })=>{
    const router = (0,router_.useRouter)();
    const className = router.asPath === `${NavRoute}` ? "rounded-xl !text-DeepNightBlack bg-Green font-bold tracking-widest" : "";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
        onClick: (e)=>setIsOpen(false),
        href: NavRoute,
        className: `${className} transition flex items-center px-2 hover:bg-EveningBlack text-SilverGray hover:text-SilverGray rounded-xl  py-1.5 font-semibold space-x-4 text-base`,
        children: [
            NavIcon,
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                children: NavText
            })
        ]
    });
};
/* harmony default export */ const Nav_NavItem = (NavItem);

;// CONCATENATED MODULE: ./components/Common/DrawerLayout.jsx


const DrawerLayout = ({ setIsOpen , isOpen , children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
        className: " fixed overflow-hidden z-[50000] bg-DeepNightBlack/10 backdrop-blur-sm inset-0 transform ease-in" + (isOpen ? "transition-opacity opacity-100 duration-10 translate-x-0" : "transition-all delay-200 opacity-0 translate-x-full"),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "w-screen max-w-[260px] right-0 absolute h-screen shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " + (isOpen ? " translate-x-0 " : " translate-x-full "),
                children: /*#__PURE__*/ jsx_runtime_.jsx("article", {
                    className: "relative h-screen",
                    children: children
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: " w-screen h-full cursor-pointer ",
                onClick: ()=>{
                    setIsOpen(false);
                }
            })
        ]
    });
};
/* harmony default export */ const Common_DrawerLayout = (DrawerLayout);

;// CONCATENATED MODULE: ./components/Common/Nav/Nav.jsx








const Nav = ({ setIsOpen , isOpen  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Common_DrawerLayout, {
        setIsOpen: setIsOpen,
        isOpen: isOpen,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "absolute z-50 flex flex-col justify-center lg:inset-y-0 -right-0 lg:right-0 w-64 h-screen lg:mt-3 lg:mr-3 lg:h-[96%] bg-DeepNightBlack shadow-2xl md:rounded-xl md:overflow-hidden",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    onClick: (e)=>setIsOpen(false),
                    className: "flex text-LightGray absolute top-0 w-full items-center justify-start pl-6 text-sm h-10 bg-EveningBlack",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(im_.ImCross, {})
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col gap-y-2 px-6 w-full transition",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Nav_NavItem, {
                            setIsOpen: setIsOpen,
                            NavRoute: "/",
                            NavIcon: /*#__PURE__*/ jsx_runtime_.jsx(im_.ImHome, {}),
                            NavText: "Home"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Nav_NavItem, {
                            setIsOpen: setIsOpen,
                            NavRoute: "/contact",
                            NavIcon: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaHandshake, {}),
                            NavText: "Contact"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Nav_NavItem, {
                            setIsOpen: setIsOpen,
                            NavRoute: "/background",
                            NavIcon: /*#__PURE__*/ jsx_runtime_.jsx(hi_.HiIdentification, {}),
                            NavText: "Background"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Nav_NavItem, {
                            setIsOpen: setIsOpen,
                            NavRoute: "/portfolio",
                            NavIcon: /*#__PURE__*/ jsx_runtime_.jsx(fi_.FiAward, {}),
                            NavText: "Portfolio"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const Nav_Nav = (Nav);

// EXTERNAL MODULE: external "react-icons/sl"
var sl_ = __webpack_require__(5065);
;// CONCATENATED MODULE: ./pages/layout.js






function Layout({ children  }) {
    const [isOpen, setIsOpen] = (0,external_react_.useState)(false);
    const [intro, setIntro] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `h-screen lg:p-[0.8rem] flex flex-col select-none font-circular`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "lg:hidden",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: " bg-DeepNightBlack text-LightGray w-full h-10 flex items-center justify-between px-2 lg:hidden relative",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "icon flex items-center gap-x-2",
                            onClick: (e)=>setIntro(!intro),
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "icon border-2 text-Green border-Green p-1 text-sm rounded-lg",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(sl_.SlOptionsVertical, {})
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-Snow absolute -right-1 -bottom-1",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaMousePointer, {})
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "icon flex items-center gap-x-2",
                            onClick: (e)=>setIsOpen(!isOpen),
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: "icon border-2 text-Green border-Green p-1 text-sm rounded-lg",
                                children: [
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaBars, {})
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex relative h-full justify-between gap-x-3",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: `w-64 h-screen left-0 lg:rounded-xl -top-10 lg:top-0 lg:left-0 lg:h-full overflow-hidden bg-DeepNightBlack shadow-2xl z-50 lg:flex flex-col  lg:relative ${intro ? "flex absolute" : "hidden"}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Common_Intro, {
                            isOpen: intro,
                            setIsOpen: setIntro
                        })
                    }),
                    intro && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        onClick: (e)=>setIntro(false),
                        className: "fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-[2px] z-40"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-full h-auto lg:w-9/12 shadow-2xl bg-DeepNightBlack relative overflow-auto overflow-x-hidden no-scrollbar",
                        children: children
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `hidden lg:block absolute lg:w-20 lg:relative bg-DeepNightBlack shadow-2xl rounded-xl overflow-hidden`,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                onClick: (e)=>setIsOpen(!isOpen),
                                className: "bg-MidNightBlack text-Green hidden lg:flex items-center h-16 justify-center text-2xl ",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    className: "icon border-2 border-Green p-2 rounded-xl",
                                    children: [
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaBars, {})
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 flex items-center justify-center text-center text-xl text-gray-600 font-extrabold tracking-widest",
                                children: "NavBar"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Nav_Nav, {
                        isOpen: isOpen,
                        setIsOpen: setIsOpen
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;