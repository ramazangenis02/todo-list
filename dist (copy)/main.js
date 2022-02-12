/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ui */ \"./src/modules/ui.js\");\n/* harmony import */ var _modules_today__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/today */ \"./src/modules/today.js\");\n/* harmony import */ var _modules_inbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/inbox */ \"./src/modules/inbox.js\");\n/* harmony import */ var _modules_thisweek__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/thisweek */ \"./src/modules/thisweek.js\");\n\n\n\n\n\n//Open and close mobile bar\n_modules_ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].openMobileBar();\n\n//Projects stuff\n_modules_ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectsStuff();\n\n//Small stuff function\n_modules_ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].smallStuff();\n\n//Inbox function\n(0,_modules_inbox__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n//Today function\n(0,_modules_today__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//Thisweek function\n(0,_modules_thisweek__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/inbox.js":
/*!******************************!*\
  !*** ./src/modules/inbox.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst inboxFunction = () => {\n  const inboxWrapper = document.querySelector(\".inbox-wrapper\");\n  const todayWrapper = document.querySelector(\".today-wrapper\");\n  const weekWrapper = document.querySelector(\".week-wrapper\");\n\n  const inboxContainer = document.querySelector(\".inbox-container\");\n  const todayContainer = document.querySelector(\".today-container\");\n  const thisweekContainer = document.querySelector(\".thisweek-container\");\n\n  inboxWrapper.addEventListener(\"click\", () => {\n    if (\n      todayWrapper.classList.contains(\"default-active\") ||\n      weekWrapper.classList.contains(\"default-active\")\n    ) {\n      inboxWrapper.classList.add(\"default-active\");\n      todayWrapper.classList.remove(\"default-active\");\n      weekWrapper.classList.remove(\"default-active\");\n\n      inboxContainer.style.display = \"flex\";\n      todayContainer.style.display = \"none\";\n      thisweekContainer.style.display = \"none\";\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inboxFunction);\n\n\n//# sourceURL=webpack://todo-list/./src/modules/inbox.js?");

/***/ }),

/***/ "./src/modules/thisweek.js":
/*!*********************************!*\
  !*** ./src/modules/thisweek.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst thisweekFunction = () => {\n  const inboxWrapper = document.querySelector(\".inbox-wrapper\");\n  const todayWrapper = document.querySelector(\".today-wrapper\");\n  const weekWrapper = document.querySelector(\".week-wrapper\");\n\n  const inboxContainer = document.querySelector(\".inbox-container\");\n  const todayContainer = document.querySelector(\".today-container\");\n  const thisweekContainer = document.querySelector(\".thisweek-container\");\n\n  weekWrapper.addEventListener(\"click\", () => {\n    if (\n      inboxWrapper.classList.contains(\"default-active\") ||\n      todayWrapper.classList.contains(\"default-active\")\n    ) {\n      weekWrapper.classList.add(\"default-active\");\n      inboxWrapper.classList.remove(\"default-active\");\n      todayWrapper.classList.remove(\"default-active\");\n\n      thisweekContainer.style.display = \"flex\";\n      inboxContainer.style.display = \"none\";\n      todayContainer.style.display = \"none\";\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (thisweekFunction);\n\n\n//# sourceURL=webpack://todo-list/./src/modules/thisweek.js?");

/***/ }),

/***/ "./src/modules/today.js":
/*!******************************!*\
  !*** ./src/modules/today.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst todayFunction = () => {\n  const inboxWrapper = document.querySelector(\".inbox-wrapper\");\n  const todayWrapper = document.querySelector(\".today-wrapper\");\n  const weekWrapper = document.querySelector(\".week-wrapper\");\n\n  const inboxContainer = document.querySelector(\".inbox-container\");\n  const todayContainer = document.querySelector(\".today-container\");\n  const thisweekContainer = document.querySelector(\".thisweek-container\");\n\n  todayWrapper.addEventListener(\"click\", () => {\n    if (\n      inboxWrapper.classList.contains(\"default-active\") ||\n      weekWrapper.classList.contains(\"default-active\")\n    ) {\n      todayWrapper.classList.add(\"default-active\");\n      inboxWrapper.classList.remove(\"default-active\");\n      weekWrapper.classList.remove(\"default-active\");\n\n      todayContainer.style.display = \"flex\";\n      inboxContainer.style.display = \"none\";\n      thisweekContainer.style.display = \"none\";\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todayFunction);\n\n\n//# sourceURL=webpack://todo-list/./src/modules/today.js?");

/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ui = (() => {\n  //Open and close mobile bar function\n  const openMobileBar = () => {\n    const mobileBar = document.querySelector(\".mobile-bar\");\n    const sidebarContainer = document.querySelector(\".sidebar-container\");\n    mobileBar.addEventListener(\"click\", () => {\n      if (!sidebarContainer.classList.contains(\"active-sidebar\")) {\n        sidebarContainer.classList.add(\"active-sidebar\");\n        document.body.classList.add(\"active-sidebar-background\");\n      } else {\n        sidebarContainer.classList.remove(\"active-sidebar\");\n        document.body.classList.remove(\"active-sidebar-background\");\n      }\n    });\n  };\n\n  //Projects stuff function\n  const projectsStuff = () => {\n    //Show projects add and trash icon\n    const sidebarContainer = document.querySelector(\".sidebar-container\");\n    const addIcon = document.querySelector(\".fa-plus\");\n\n    const addedProjectAll = document.querySelectorAll(\".added-project\");\n    const trashIcon = document.querySelector(\".fa-trash-alt\");\n    sidebarContainer.addEventListener(\"mouseover\", () => {\n      addIcon.classList.add(\"active-add-icon\");\n    });\n\n    sidebarContainer.addEventListener(\"mouseout\", () => {\n      addIcon.classList.remove(\"active-add-icon\");\n    });\n\n    //TEST AREA\n    addedProjectAll.forEach(e => {\n      e.addEventListener(\"mouseover\", () => {\n        e.firstElementChild.classList.add(\"active-trash-icon\");\n      });\n\n      e.addEventListener(\"mouseout\", () => {\n        e.firstElementChild.classList.remove(\"active-trash-icon\");\n      });\n    });\n    //TEST AREA\n\n    //When click change projects chevron icon\n    const projectsWrapper = document.querySelector(\".projects-wrapper\");\n    const projectsChevron = document.querySelector(\".projects-chevron\");\n    const sidebarProjectsContainer = document.querySelector(\n      \".sidebar-projects-container\"\n    );\n    let projectStatus = false;\n    let checkClick = false;\n\n    addIcon.addEventListener(\"click\", () => {\n      checkClick = true;\n    });\n\n    projectsWrapper.addEventListener(\"click\", () => {\n      if (projectStatus == false && checkClick == false) {\n        projectStatus = true;\n        projectsChevron.classList.remove(\"fa-chevron-down\");\n        projectsChevron.classList.add(\"fa-chevron-right\");\n        sidebarProjectsContainer.style.marginLeft = \"35px\";\n      } else if (projectStatus == true && checkClick == false) {\n        projectStatus = false;\n        projectsChevron.classList.remove(\"fa-chevron-right\");\n        projectsChevron.classList.add(\"fa-chevron-down\");\n        sidebarProjectsContainer.style.marginLeft = \"30px\";\n      }\n      checkClick = false;\n    });\n\n    //Show projects modal function\n    const addProjectsModalContainer = document.querySelector(\n      \".add-projects-modal-container\"\n    );\n    const headerContainer = document.querySelector(\".header-container\");\n    addIcon.addEventListener(\"click\", () => {\n      addProjectsModalContainer.style.display = \"flex\";\n      headerContainer.style.pointerEvents = \"none\";\n    });\n    if (addProjectsModalContainer.style.display == \"flex\") {\n    }\n\n    //Show or Close color picker area\n    const colorPickerArea = document.querySelector(\".color-picker-area\");\n    const colorWrapper = document.querySelector(\".color-wrapper\");\n\n    colorWrapper.addEventListener(\"click\", () => {\n      if (colorPickerArea.style.display == \"block\") {\n        colorPickerArea.style.display = \"none\";\n      } else {\n        colorPickerArea.style.display = \"block\";\n      }\n    });\n\n    document.addEventListener(\"click\", e => {\n      if (!e.target.matches(\".color-wrapper\")) {\n        colorPickerArea.style.display = \"none\";\n      }\n    });\n\n    //Change color pick to input color\n    const colorPick = document.querySelector(\".color-pick\");\n    const colorPickerRed = document.querySelector(\".color-picker-red\");\n    const colorPickerBlue = document.querySelector(\".color-picker-blue\");\n    const colorPickerYellow = document.querySelector(\".color-picker-yellow\");\n    const colorPickerPurple = document.querySelector(\".color-picker-purple\");\n    const colorPickerGreen = document.querySelector(\".color-picker-green\");\n    const colorPickerSienna = document.querySelector(\".color-picker-sienna\");\n    const colorPickerCyan = document.querySelector(\".color-picker-cyan\");\n    const colorPickerSilver = document.querySelector(\".color-picker-silver\");\n    const colorPickerBlack = document.querySelector(\".color-picker-black\");\n\n    colorPickerRed.addEventListener(\"click\", () => {\n      colorPick.style.setProperty(\"--black\", \"#ff0000\");\n      colorPick.innerHTML = \"Red\";\n    });\n    colorPickerBlue.addEventListener(\"click\", () => {\n      colorPick.style.setProperty(\"--black\", \"#0000ff\");\n      colorPick.innerHTML = \"Blue\";\n    });\n    colorPickerYellow.addEventListener(\"click\", () => {\n      colorPick.style.setProperty(\"--black\", \"#ffff00\");\n      colorPick.innerHTML = \"Yellow\";\n    });\n    colorPickerPurple.addEventListener(\"click\", () => {\n      colorPick.style.setProperty(\"--black\", \"#800080\");\n      colorPick.innerHTML = \"Purple\";\n    });\n    colorPickerGreen.addEventListener(\"click\", () => {\n      colorPick.style.setProperty(\"--black\", \"#008000\");\n      colorPick.innerHTML = \"Green\";\n    });\n    colorPickerSienna.addEventListener(\"click\", () => {\n      colorPick.style.setProperty(\"--black\", \"#a0522d\");\n      colorPick.innerHTML = \"Sienna\";\n    });\n    colorPickerCyan.addEventListener(\"click\", () => {\n      colorPick.style.setProperty(\"--black\", \"#00ffff\");\n      colorPick.innerHTML = \"Cyan\";\n    });\n    colorPickerSilver.addEventListener(\"click\", () => {\n      colorPick.style.setProperty(\"--black\", \"#c0c0c0\");\n      colorPick.innerHTML = \"Silver\";\n    });\n    colorPickerBlack.addEventListener(\"click\", () => {\n      colorPick.style.setProperty(\"--black\", \"#000\");\n      colorPick.innerHTML = \"Black\";\n    });\n\n    //Cancel and add buttons functions\n    const cancelBtn = document.querySelector(\".cancel-btn\");\n    const addBtn = document.querySelector(\".add-btn\");\n    const addProjectInput = document.querySelector(\".add-projects-input\");\n\n    cancelBtn.addEventListener(\"click\", () => {\n      addProjectsModalContainer.style.display = \"none\";\n      headerContainer.style.pointerEvents = \"all\";\n      resetInput();\n    });\n\n    addProjectInput.addEventListener(\"keyup\", () => {\n      if (addProjectInput.value.length > 0) {\n        addBtn.style.opacity = \"1\";\n        addBtn.style.pointerEvents = \"all\";\n      }\n    });\n\n    addProjectInput.addEventListener(\"keyup\", () => {\n      if (addProjectInput.value.length === 0) {\n        addBtn.style.opacity = \"0.5\";\n        addBtn.style.pointerEvents = \"none\";\n      }\n    });\n\n    //Reset Input\n    const resetInput = () => {\n      addProjectInput.value = \"\";\n      colorPick.style.setProperty(\"--black\", \"#000\");\n      colorPick.innerHTML = \"Black\";\n    };\n\n    //Show and hide projects\n    const addedProjectsContainer = document.querySelector(\n      \".added-projects-container\"\n    );\n    projectsWrapper.addEventListener(\"click\", () => {\n      if (projectsChevron.classList.contains(\"fa-chevron-down\")) {\n        addedProjectsContainer.style.display = \"block\";\n      } else if (projectsChevron.classList.contains(\"fa-chevron-right\")) {\n        addedProjectsContainer.style.display = \"none\";\n      }\n    });\n\n    //When click trash icon delete to project\n    const addedProjectWrapper = document.querySelector(\n      \".added-projects-wrapper\"\n    );\n    const trashIconAll = document.querySelectorAll(\".fa-trash-alt\");\n    trashIconAll.forEach(e => {\n      e.addEventListener(\"click\", () => {\n        addedProjectWrapper.removeChild(e.parentElement);\n      });\n    });\n  };\n\n  const smallStuff = () => {\n    //When click add task section change border color\n    const addTaskSelect = document.querySelector(\".add-task-select\");\n    addTaskSelect.addEventListener(\"click\", () => {\n      addTaskSelect.style.borderColor = \"#606470\";\n    });\n\n    document.addEventListener(\"click\", e => {\n      if (!e.target.parentElement.matches(\".add-task-select\")) {\n        addTaskSelect.style.borderColor = \"#cecece\";\n      }\n    });\n\n    //When click add task icon opened add task select\n    const addTask = document.querySelector(\".add-task\");\n\n    addTask.addEventListener(\"click\", () => {\n      addTaskSelect.style.display = \"block\";\n      addTask.style.display = \"none\";\n    });\n\n    //Task add and cancel buttons function\n    const taskAddBtn = document.querySelector(\".task-add-btn\");\n    const taskCancelBtn = document.querySelector(\".task-cancel-btn\");\n\n    const nameTextInput = document.querySelector(\".name-text-input\");\n    const descTextInput = document.querySelector(\".desc-text-input\");\n\n    taskCancelBtn.addEventListener(\"click\", () => {\n      addTask.style.display = \"initial\";\n      addTaskSelect.style.display = \"none\";\n      nameTextInput.value = \"\";\n      descTextInput.value = \"\";\n    });\n  };\n\n  return { openMobileBar, projectsStuff, smallStuff };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ui);\n\n\n//# sourceURL=webpack://todo-list/./src/modules/ui.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;