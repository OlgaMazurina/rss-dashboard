/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/chart.js":
/*!**********************!*\
  !*** ./src/chart.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createChart\": () => /* binding */ createChart\n/* harmony export */ });\nfunction createChart() {\n  const ctx = document.querySelector('#chart').getContext('2d');\n  const chartConfig = {\n    type: 'line',\n    data: {\n      labels: [\"Task 1\", \"Task 2\", \"Task 3\", \"Task 4\", \"Task 5\", \"Task 6\", \"Task 7\", \"Task 8\", \"Task 9\", \"Task 10\"],\n      datasets: []\n    },\n    options: {\n      // title: {\n      //     display: true,\n      //     text: 'Comparison of results',\n      // },\n      scales: {\n        yAxes: [{\n          ticks: {\n            beginAtZero: true\n          }\n        }]\n      }\n    }\n  };\n  const chart = new Chart(ctx, chartConfig);\n  const colorSet = new Set();\n\n  const generateRandomName = () => {\n    const length = Math.floor(Math.random() * (8 - 4)) + 4;\n    let name = '';\n\n    for (let i = 0; i < length; i += 1) {\n      name += String.fromCharCode(Math.floor(Math.random() * (122 - 97)) + 97);\n    }\n\n    return name;\n  };\n\n  const generateRandomTime = () => Math.floor(Math.random() * 200);\n\n  const generateRandomColor = () => {\n    let color = '';\n\n    for (let i = 0; i < 3; i += 1) {\n      const colorComponent = Math.floor(Math.random() * 255);\n      color += colorComponent.toString(16);\n    }\n\n    return color;\n  };\n\n  const addUserToChart = (config, setName) => {\n    const name = setName || generateRandomName();\n    const data = Array(10).fill(0).map(() => generateRandomTime());\n    let randomColor;\n\n    do {\n      randomColor = generateRandomColor();\n    } while (colorSet.has(randomColor));\n\n    colorSet.add(randomColor);\n    const color = `#${randomColor}`;\n    const newUser = {\n      label: name,\n      data: data,\n      backgroundColor: color,\n      borderColor: color,\n      borderWidth: 2,\n      fill: false\n    };\n    config.data.datasets.push(newUser);\n    chart.update();\n  };\n\n  const removeUserFromChart = ({\n    data: {\n      datasets\n    }\n  }, name) => {\n    if (name) {\n      const names = datasets.map(user => user.label);\n      const index = names.indexOf(name);\n\n      if (index === -1) {\n        return;\n      }\n\n      datasets.splice(index, 1);\n    } else {\n      datasets.pop();\n    }\n\n    chart.update();\n  };\n\n  addUserToChart(chartConfig, 'new');\n  document.querySelector('#add').addEventListener('click', () => {\n    const name = document.querySelector('#name').value || null;\n    addUserToChart(chartConfig, name);\n  });\n  document.querySelector('#remove').addEventListener('click', () => {\n    const name = document.querySelector('#name').value || null;\n    removeUserFromChart(chartConfig, name);\n  });\n}\n\n//# sourceURL=webpack://rss-dashboard/./src/chart.js?");

/***/ }),

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ App\n/* harmony export */ });\n/* harmony import */ var _services_create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/create.js */ \"./src/services/create.js\");\n/* harmony import */ var _services_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/component.js */ \"./src/services/component.js\");\n/* harmony import */ var _Header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.js */ \"./src/components/Header.js\");\n/* harmony import */ var _CountryBlock_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CountryBlock.js */ \"./src/components/CountryBlock.js\");\n/* harmony import */ var _Map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Map.js */ \"./src/components/Map.js\");\n/* harmony import */ var _Table_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Table.js */ \"./src/components/Table.js\");\n/* harmony import */ var _Chart_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Chart.js */ \"./src/components/Chart.js\");\n/* harmony import */ var _Footer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Footer.js */ \"./src/components/Footer.js\");\n\n // create('', { classes: [''] }, '', [])\n\n\n\n\n\n\n\nclass App extends _services_component_js__WEBPACK_IMPORTED_MODULE_1__.default {\n  constructor() {\n    super();\n    this.header = new _Header_js__WEBPACK_IMPORTED_MODULE_2__.default().init();\n    this.countryBlock = new _CountryBlock_js__WEBPACK_IMPORTED_MODULE_3__.default().init();\n    this.map = new _Map_js__WEBPACK_IMPORTED_MODULE_4__.default().init();\n    this.table = new _Table_js__WEBPACK_IMPORTED_MODULE_5__.default().init();\n    this.chart = new _Chart_js__WEBPACK_IMPORTED_MODULE_6__.default().init();\n    this.footer = new _Footer_js__WEBPACK_IMPORTED_MODULE_7__.default().init();\n  }\n\n  render() {\n    this.component = (0,_services_create_js__WEBPACK_IMPORTED_MODULE_0__.default)('div', {\n      classes: ['wrapper']\n    }, '', [this.header, (0,_services_create_js__WEBPACK_IMPORTED_MODULE_0__.default)('main', {\n      classes: ['main_content']\n    }, '', [(0,_services_create_js__WEBPACK_IMPORTED_MODULE_0__.default)('div', {\n      classes: ['main_body']\n    }, '', [this.countryBlock, this.map, (0,_services_create_js__WEBPACK_IMPORTED_MODULE_0__.default)('div', {\n      classes: ['wrap'],\n      attributes: [['data-wrap', true]]\n    }, '', [this.table, this.chart])])]), this.footer]);\n  }\n\n}\n\n//# sourceURL=webpack://rss-dashboard/./src/components/App.js?");

/***/ }),

/***/ "./src/components/Chart.js":
/*!*********************************!*\
  !*** ./src/components/Chart.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Chart\n/* harmony export */ });\n/* harmony import */ var _services_create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/create.js */ \"./src/services/create.js\");\n/* harmony import */ var _services_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/component.js */ \"./src/services/component.js\");\n\n // create('', { classes: [''] }, '', [])\n\nclass Chart extends _services_component_js__WEBPACK_IMPORTED_MODULE_1__.default {\n  constructor() {\n    super();\n    this.state = {\n      btns: [{\n        id: 'add',\n        label: 'Add'\n      }, {\n        id: 'remove',\n        label: 'Remove'\n      }]\n    };\n  }\n\n  render() {\n    this.component = (0,_services_create_js__WEBPACK_IMPORTED_MODULE_0__.default)('div', {\n      classes: ['chart'],\n      attributes: [['data-chart', true]]\n    }, '', [(0,_services_create_js__WEBPACK_IMPORTED_MODULE_0__.default)('canvas', {\n      attributes: [['id', 'chart']]\n    }), (0,_services_create_js__WEBPACK_IMPORTED_MODULE_0__.default)('div', null, '', [...this.state.btns.map(({\n      id,\n      label\n    }) => (0,_services_create_js__WEBPACK_IMPORTED_MODULE_0__.default)('button', {\n      attributes: [['id', id]]\n    }, label)), (0,_services_create_js__WEBPACK_IMPORTED_MODULE_0__.default)('input', {\n      attributes: [['type', 'text'], ['placeholder', 'name'], ['id', 'name']]\n    })]), (0,_services_create_js__WEBPACK_IMPORTED_MODULE_0__.default)('div', {\n      classes: ['btn'],\n      attributes: [['data-btn-chart', true]]\n    }, '', [(0,_services_create_js__WEBPACK_IMPORTED_MODULE_0__.default)('i', {\n      classes: ['fas', 'fa-expand-arrows-alt']\n    })])]);\n  }\n\n}\n\n//# sourceURL=webpack://rss-dashboard/./src/components/Chart.js?");

/***/ }),

/***/ "./src/components/CountryBlock.js":
/*!****************************************!*\
  !*** ./src/components/CountryBlock.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ CountryBlock\n/* harmony export */ });\n/* harmony import */ var _services_create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/create.js */ \"./src/services/create.js\");\n/* harmony import */ var _services_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/component.js */ \"./src/services/component.js\");\n\n\nclass CountryBlock extends _services_component_js__WEBPACK_IMPORTED_MODULE_1__.default {\n  render() {\n    this.component = (0,_services_create_js__WEBPACK_IMPORTED_MODULE_0__.default)('div', {\n      classes: ['country'],\n      attributes: [['data-country', true]]\n    }, '', [(0,_services_create_js__WEBPACK_IMPORTED_MODULE_0__.default)('div', {\n      classes: ['btn'],\n      attributes: [['data-btn-country', true]]\n    }, '', [(0,_services_create_js__WEBPACK_IMPORTED_MODULE_0__.default)('i', {\n      classes: ['fas', 'fa-expand-arrows-alt']\n    })])]);\n  }\n\n}\n\n//# sourceURL=webpack://rss-dashboard/./src/components/CountryBlock.js?");

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Footer\n/* harmony export */ });\n/* harmony import */ var _services_create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/create.js */ \"./src/services/create.js\");\n/* harmony import */ var _services_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/component.js */ \"./src/services/component.js\");\n\n\nclass Footer extends _services_component_js__WEBPACK_IMPORTED_MODULE_1__.default {\n  constructor() {\n    super();\n    this.state = {\n      links: [{\n        label: 'temirWlan',\n        path: 'https://github.com/temirWlan'\n      }, {\n        label: 'spaceragga',\n        path: 'https://github.com/spaceragga'\n      }, {\n        label: 'AksultanAitkozha',\n        path: 'https://github.com/AksultanAitkozha'\n      }]\n    };\n  }\n\n  render() {\n    this.component = (0,_services_create_js__WEBPACK_IMPORTED_MODULE_0__.default)('footer', {\n      classes: ['footer_content']\n    }, '', [(0,_services_create_js__WEBPACK_IMPORTED_MODULE_0__.default)('div', {\n      classes: ['footer_body']\n    }, '', [(0,_services_create_js__WEBPACK_IMPORTED_MODULE_0__.default)('a', {\n      classes: ['footer_logo'],\n      attributes: [['href', 'https://rs.school/js/']]\n    }), (0,_services_create_js__WEBPACK_IMPORTED_MODULE_0__.default)('div', {\n      classes: ['footer_year']\n    }, 'Dec 2020'), (0,_services_create_js__WEBPACK_IMPORTED_MODULE_0__.default)('div', {\n      classes: ['footer_github']\n    }, '', [(0,_services_create_js__WEBPACK_IMPORTED_MODULE_0__.default)('div', null, '', [(0,_services_create_js__WEBPACK_IMPORTED_MODULE_0__.default)('span', {\n      classes: ['footer_list-title']\n    }, 'authors:'), (0,_services_create_js__WEBPACK_IMPORTED_MODULE_0__.default)('ul', {\n      classes: ['footer_list']\n    }, '', [...this.state.links.map(({\n      label,\n      path\n    }) => {\n      return (0,_services_create_js__WEBPACK_IMPORTED_MODULE_0__.default)('li', null, '', [(0,_services_create_js__WEBPACK_IMPORTED_MODULE_0__.default)('a', {\n        attributes: [['href', path], ['target', '_blank']]\n      }, label)]);\n    })])])])])]); // add 'br' after each 'a' tag\n  }\n\n}\n\n//# sourceURL=webpack://rss-dashboard/./src/components/Footer.js?");

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Header\n/* harmony export */ });\n/* harmony import */ var _services_create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/create.js */ \"./src/services/create.js\");\n/* harmony import */ var _services_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/component.js */ \"./src/services/component.js\");\n\n\nclass Header extends _services_component_js__WEBPACK_IMPORTED_MODULE_1__.default {\n  render() {\n    this.component = (0,_services_create_js__WEBPACK_IMPORTED_MODULE_0__.default)('header', {\n      classes: ['header_content']\n    }, '', [(0,_services_create_js__WEBPACK_IMPORTED_MODULE_0__.default)('div', {\n      classes: ['header_body']\n    }, '', [(0,_services_create_js__WEBPACK_IMPORTED_MODULE_0__.default)('div', {\n      classes: ['header_title']\n    }, 'COVID-19 Dashboard')])]);\n  }\n\n}\n\n//# sourceURL=webpack://rss-dashboard/./src/components/Header.js?");

/***/ }),

/***/ "./src/components/Map.js":
/*!*******************************!*\
  !*** ./src/components/Map.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Map\n/* harmony export */ });\n/* harmony import */ var _services_create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/create.js */ \"./src/services/create.js\");\n/* harmony import */ var _services_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/component.js */ \"./src/services/component.js\");\n\n\nclass Map extends _services_component_js__WEBPACK_IMPORTED_MODULE_1__.default {\n  render() {\n    this.component = (0,_services_create_js__WEBPACK_IMPORTED_MODULE_0__.default)('div', {\n      classes: ['map'],\n      attributes: [['data-map', true]]\n    }, '', [(0,_services_create_js__WEBPACK_IMPORTED_MODULE_0__.default)('div', {\n      classes: ['btn'],\n      attributes: [['data-btn-map', true]]\n    }, '', [(0,_services_create_js__WEBPACK_IMPORTED_MODULE_0__.default)('i', {\n      classes: ['fas', 'fa-expand-arrows-alt']\n    })])]);\n  }\n\n}\n\n//# sourceURL=webpack://rss-dashboard/./src/components/Map.js?");

/***/ }),

/***/ "./src/components/Table.js":
/*!*********************************!*\
  !*** ./src/components/Table.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Table\n/* harmony export */ });\n/* harmony import */ var _services_create_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/create.js */ \"./src/services/create.js\");\n/* harmony import */ var _services_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/component.js */ \"./src/services/component.js\");\n\n\nclass Table extends _services_component_js__WEBPACK_IMPORTED_MODULE_1__.default {\n  render() {\n    this.component = (0,_services_create_js__WEBPACK_IMPORTED_MODULE_0__.default)('div', {\n      classes: ['table'],\n      attributes: [['data-table', true]]\n    }, '', [(0,_services_create_js__WEBPACK_IMPORTED_MODULE_0__.default)('div', {\n      classes: ['btn'],\n      attributes: [['data-btn-table', true]]\n    }, '', [(0,_services_create_js__WEBPACK_IMPORTED_MODULE_0__.default)('i', {\n      classes: ['fas', 'fa-expand-arrows-alt']\n    })])]);\n  }\n\n}\n\n//# sourceURL=webpack://rss-dashboard/./src/components/Table.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_App_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/App.js */ \"./src/components/App.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart.js */ \"./src/chart.js\");\n\n\n\n\nwindow.onload = () => {\n  document.body.append(new _components_App_js__WEBPACK_IMPORTED_MODULE_0__.default().init());\n  (0,_chart_js__WEBPACK_IMPORTED_MODULE_2__.createChart)();\n};\n\n//# sourceURL=webpack://rss-dashboard/./src/index.js?");

/***/ }),

/***/ "./src/services/component.js":
/*!***********************************!*\
  !*** ./src/services/component.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Component\n/* harmony export */ });\nclass Component {\n  constructor() {\n    this.state = {};\n    this.component = document.createElement('div');\n  }\n\n  init() {\n    this.render();\n    this.addEventHandlers();\n    return this.component;\n  }\n\n  render() {}\n\n  addEventHandlers() {}\n\n}\n\n//# sourceURL=webpack://rss-dashboard/./src/services/component.js?");

/***/ }),

/***/ "./src/services/create.js":
/*!********************************!*\
  !*** ./src/services/create.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ create\n/* harmony export */ });\nfunction create(tag, selectors, text, children) {\n  try {\n    const element = document.createElement(tag);\n\n    if (selectors) {\n      const {\n        classes,\n        attributes\n      } = selectors;\n\n      if (Array.isArray(classes) && classes.length) {\n        classes.forEach(className => element.classList.add(className));\n      }\n\n      if (Array.isArray(attributes) && attributes.length) {\n        attributes.forEach(attribute => {\n          const [name, value] = attribute;\n          element.setAttribute(name, value);\n        });\n      }\n    }\n\n    if (text) {\n      element.textContent = text;\n    }\n\n    if (Array.isArray(children) && children.length) {\n      children.forEach(child => element.append(child));\n    }\n\n    return element;\n  } catch (e) {\n    console.log(e);\n  }\n}\n\n//# sourceURL=webpack://rss-dashboard/./src/services/create.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.css":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.css ***!
  \***********************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_images_logo_rsschool_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/logo-rsschool.png */ \"./src/assets/images/logo-rsschool.png\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;700;900&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_images_logo_rsschool_png__WEBPACK_IMPORTED_MODULE_2__);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html {\\n  -webkit-box-sizing: border-box;\\n          box-sizing: border-box; }\\n\\n*, *:before, *:after {\\n  -webkit-box-sizing: inherit;\\n          box-sizing: inherit; }\\n\\n:focus, :active {\\n  outline: none; }\\n\\na:focus, a:active {\\n  outline: none; }\\n\\nnav, footer, header, aside {\\n  display: block; }\\n\\nhtml, body {\\n  height: 100%;\\n  width: 100%;\\n  line-height: 1.15;\\n  font-size: 14px;\\n  -ms-text-size-adjust: 100%;\\n  -moz-text-size-adjust: 100%;\\n  -webkit-text-size-adjust: 100%; }\\n\\ninput ::-ms-clear {\\n  display: none; }\\n\\nbutton {\\n  cursor: pointer; }\\n\\na, a:visited {\\n  text-decoration: none; }\\n\\na:hover {\\n  text-decoration: none; }\\n\\nul li {\\n  list-style: none; }\\n\\nimg {\\n  vertical-align: top; }\\n\\nh1, h2, h3, h4, h5, h6 {\\n  font-size: inherit;\\n  font-weight: 400; }\\n\\n/* Sections\\r\\n    ========================================================================== */\\n/**\\r\\n* Remove the margin in all browsers.\\r\\n*/\\nbody {\\n  margin: 0; }\\n\\n/**\\r\\n* Render the `main` element consistently in IE.\\r\\n*/\\nmain {\\n  display: block; }\\n\\n/**\\r\\n* Correct the font size and margin on `h1` elements within `section` and\\r\\n* `article` contexts in Chrome, Firefox, and Safari.\\r\\n*/\\nh1 {\\n  font-size: 2em;\\n  margin: 0.67em 0; }\\n\\n/* Grouping content\\r\\n    ========================================================================== */\\n/**\\r\\n* 1. Add the correct box sizing in Firefox.\\r\\n* 2. Show the overflow in Edge and IE.\\r\\n*/\\nhr {\\n  -webkit-box-sizing: content-box;\\n          box-sizing: content-box;\\n  /* 1 */\\n  height: 0;\\n  /* 1 */\\n  overflow: visible;\\n  /* 2 */ }\\n\\n/**\\r\\n* 1. Correct the inheritance and scaling of font size in all browsers.\\r\\n* 2. Correct the odd `em` font sizing in all browsers.\\r\\n*/\\npre {\\n  font-family: monospace, monospace;\\n  /* 1 */\\n  font-size: 1em;\\n  /* 2 */ }\\n\\n/* Text-level semantics\\r\\n    ========================================================================== */\\n/**\\r\\n* Remove the gray background on active links in IE 10.\\r\\n*/\\na {\\n  background-color: transparent; }\\n\\n/**\\r\\n* 1. Remove the bottom border in Chrome 57-\\r\\n* 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\\r\\n*/\\nabbr[title] {\\n  border-bottom: none;\\n  /* 1 */\\n  text-decoration: underline;\\n  /* 2 */\\n  -webkit-text-decoration: underline dotted;\\n  text-decoration: underline dotted;\\n  /* 2 */ }\\n\\n/**\\r\\n* Add the correct font weight in Chrome, Edge, and Safari.\\r\\n*/\\nb,\\nstrong {\\n  font-weight: bolder; }\\n\\n/**\\r\\n* 1. Correct the inheritance and scaling of font size in all browsers.\\r\\n* 2. Correct the odd `em` font sizing in all browsers.\\r\\n*/\\ncode,\\nkbd,\\nsamp {\\n  font-family: monospace, monospace;\\n  /* 1 */\\n  font-size: 1em;\\n  /* 2 */ }\\n\\n/**\\r\\n* Add the correct font size in all browsers.\\r\\n*/\\nsmall {\\n  font-size: 80%; }\\n\\n/**\\r\\n* Prevent `sub` and `sup` elements from affecting the line height in\\r\\n* all browsers.\\r\\n*/\\nsub,\\nsup {\\n  font-size: 75%;\\n  line-height: 0;\\n  position: relative;\\n  vertical-align: baseline; }\\n\\nsub {\\n  bottom: -0.25em; }\\n\\nsup {\\n  top: -0.5em; }\\n\\n/* Embedded content\\r\\n    ========================================================================== */\\n/**\\r\\n* Remove the border on images inside links in IE 10.\\r\\n*/\\nimg {\\n  border-style: none; }\\n\\n/* Forms\\r\\n    ========================================================================== */\\n/**\\r\\n* 1. Change the font styles in all browsers.\\r\\n* 2. Remove the margin in Firefox and Safari.\\r\\n*/\\nbutton,\\ninput,\\noptgroup,\\nselect,\\ntextarea {\\n  font-family: inherit;\\n  /* 1 */\\n  font-size: 100%;\\n  /* 1 */\\n  line-height: 1.15;\\n  /* 1 */\\n  margin: 0;\\n  /* 2 */ }\\n\\n/**\\r\\n* Show the overflow in IE.\\r\\n* 1. Show the overflow in Edge.\\r\\n*/\\nbutton,\\ninput {\\n  /* 1 */\\n  overflow: visible; }\\n\\n/**\\r\\n* Remove the inheritance of text transform in Edge, Firefox, and IE.\\r\\n* 1. Remove the inheritance of text transform in Firefox.\\r\\n*/\\nbutton,\\nselect {\\n  /* 1 */\\n  text-transform: none; }\\n\\n/**\\r\\n* Correct the inability to style clickable types in iOS and Safari.\\r\\n*/\\nbutton,\\n[type=button],\\n[type=reset],\\n[type=submit] {\\n  -webkit-appearance: button; }\\n\\n/**\\r\\n* Remove the inner border and padding in Firefox.\\r\\n*/\\nbutton::-moz-focus-inner,\\n[type=button]::-moz-focus-inner,\\n[type=reset]::-moz-focus-inner,\\n[type=submit]::-moz-focus-inner {\\n  border-style: none;\\n  padding: 0; }\\n\\n/**\\r\\n* Restore the focus styles unset by the previous rule.\\r\\n*/\\nbutton:-moz-focusring,\\n[type=button]:-moz-focusring,\\n[type=reset]:-moz-focusring,\\n[type=submit]:-moz-focusring {\\n  outline: 1px dotted ButtonText; }\\n\\n/**\\r\\n* Correct the padding in Firefox.\\r\\n*/\\nfieldset {\\n  padding: 0.35em 0.75em 0.625em; }\\n\\n/**\\r\\n* 1. Correct the text wrapping in Edge and IE.\\r\\n* 2. Correct the color inheritance from `fieldset` elements in IE.\\r\\n* 3. Remove the padding so developers are not caught out when they zero out\\r\\n*    `fieldset` elements in all browsers.\\r\\n*/\\nlegend {\\n  -webkit-box-sizing: border-box;\\n          box-sizing: border-box;\\n  /* 1 */\\n  color: inherit;\\n  /* 2 */\\n  display: table;\\n  /* 1 */\\n  max-width: 100%;\\n  /* 1 */\\n  padding: 0;\\n  /* 3 */\\n  white-space: normal;\\n  /* 1 */ }\\n\\n/**\\r\\n* Add the correct vertical alignment in Chrome, Firefox, and Opera.\\r\\n*/\\nprogress {\\n  vertical-align: baseline; }\\n\\n/**\\r\\n* Remove the default vertical scrollbar in IE 10+.\\r\\n*/\\ntextarea {\\n  overflow: auto; }\\n\\n/**\\r\\n* 1. Add the correct box sizing in IE 10.\\r\\n* 2. Remove the padding in IE 10.\\r\\n*/\\n[type=checkbox],\\n[type=radio] {\\n  -webkit-box-sizing: border-box;\\n          box-sizing: border-box;\\n  /* 1 */\\n  padding: 0;\\n  /* 2 */ }\\n\\n/**\\r\\n* Correct the cursor style of increment and decrement buttons in Chrome.\\r\\n*/\\n[type=number]::-webkit-inner-spin-button,\\n[type=number]::-webkit-outer-spin-button {\\n  height: auto; }\\n\\n/**\\r\\n* 1. Correct the odd appearance in Chrome and Safari.\\r\\n* 2. Correct the outline style in Safari.\\r\\n*/\\n[type=search] {\\n  -webkit-appearance: textfield;\\n  /* 1 */\\n  outline-offset: -2px;\\n  /* 2 */ }\\n\\n/**\\r\\n* Remove the inner padding in Chrome and Safari on macOS.\\r\\n*/\\n[type=search]::-webkit-search-decoration {\\n  -webkit-appearance: none; }\\n\\n/**\\r\\n* 1. Correct the inability to style clickable types in iOS and Safari.\\r\\n* 2. Change font properties to `inherit` in Safari.\\r\\n*/\\n::-webkit-file-upload-button {\\n  -webkit-appearance: button;\\n  /* 1 */\\n  font: inherit;\\n  /* 2 */ }\\n\\n/* Interactive\\r\\n    ========================================================================== */\\n/*\\r\\n* Add the correct display in Edge, IE 10+, and Firefox.\\r\\n*/\\ndetails {\\n  display: block; }\\n\\n/*\\r\\n* Add the correct display in all browsers.\\r\\n*/\\nsummary {\\n  display: list-item; }\\n\\n/* Misc\\r\\n    ========================================================================== */\\n/**\\r\\n* Add the correct display in IE 10+.\\r\\n*/\\ntemplate {\\n  display: none; }\\n\\n/**\\r\\n* Add the correct display in IE 10.\\r\\n*/\\n[hidden] {\\n  display: none; }\\n\\nbody {\\n  font-family: \\\"Open Sans\\\", sans-serif;\\n  font-weight: 400;\\n  color: #b9b9b9;\\n  background-color: #000; }\\n\\n.content {\\n  width: 100%;\\n  padding: 0 20px;\\n  margin: 0 auto; }\\n\\n/**Header Styles*/\\n.header_body {\\n  height: 100px;\\n  margin-bottom: 10px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-align: center;\\n  -ms-flex-align: center;\\n      align-items: center;\\n  -webkit-box-pack: center;\\n  -ms-flex-pack: center;\\n      justify-content: center;\\n  background-color: #222222; }\\n\\n.header_title {\\n  font-size: 20px;\\n  justify_content: center; }\\n\\n/**Main Styles*/\\n.main_body {\\n  height: calc(100vh - 220px);\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -ms-flex-wrap: wrap;\\n      flex-wrap: wrap; }\\n\\n/**left-side bar*/\\n.country {\\n  position: relative;\\n  margin-right: 10px;\\n  height: 100%;\\n  -webkit-box-flex: 1;\\n  -ms-flex: 1 1 calc(17% - 10px);\\n      flex: 1 1 calc(17% - 10px);\\n  background-color: #222222; }\\n\\n/**map where countries are*/\\n.map {\\n  position: relative;\\n  height: 100%;\\n  -webkit-box-flex: 1;\\n  -ms-flex: 1 1 55%;\\n      flex: 1 1 55%;\\n  background-color: #000f1a; }\\n\\n.wrap {\\n  height: 100%;\\n  margin-left: 10px;\\n  -webkit-box-flex: 1;\\n  -ms-flex: 1 1 calc(28% - 10px);\\n      flex: 1 1 calc(28% - 10px);\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-orient: vertical;\\n  -webkit-box-direction: normal;\\n  -ms-flex-direction: column;\\n      flex-direction: column;\\n  -webkit-box-align: center;\\n  -ms-flex-align: center;\\n      align-items: center; }\\n\\n.table {\\n  position: relative;\\n  margin-bottom: 10px;\\n  width: 100%;\\n  -webkit-box-flex: 0;\\n  -ms-flex: 0 0 calc(60% - 5px);\\n      flex: 0 0 calc(60% - 5px);\\n  background-color: #222222; }\\n\\n.chart {\\n  position: relative;\\n  width: 100%;\\n  -webkit-box-flex: 0;\\n  -ms-flex: 0 0 calc(40% - 5px);\\n      flex: 0 0 calc(40% - 5px);\\n  background-color: #222222; }\\n\\n.fullscreen {\\n  -webkit-box-flex: 1;\\n  -ms-flex: 1 1 100%;\\n      flex: 1 1 100%;\\n  margin-right: 0;\\n  margin-left: 0;\\n  margin-bottom: 0; }\\n\\n.hide {\\n  display: none; }\\n\\n/**Footer Styles*/\\n.footer_body {\\n  padding: 20px;\\n  height: 100px;\\n  margin-top: 10px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-align: center;\\n  -ms-flex-align: center;\\n      align-items: center;\\n  -webkit-box-pack: justify;\\n  -ms-flex-pack: justify;\\n      justify-content: space-between;\\n  background-color: #222222; }\\n\\n.footer_logo {\\n  cursor: pointer;\\n  height: 50px;\\n  width: 140px;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat center center/cover; }\\n\\n.footer_year {\\n  font-size: 20px; }\\n\\n.footer_list-title {\\n  font-weight: bold;\\n  text-transform: uppercase; }\\n\\n.footer_list {\\n  margin-top: 10px;\\n  padding: 0; }\\n\\n.footer_github a {\\n  color: #b9b9b9; }\\n\\n.footer_github a:hover {\\n  color: #ffffff; }\\n\\n/**Btns Styles*/\\n.btn {\\n  cursor: pointer;\\n  position: absolute;\\n  top: -10px;\\n  right: -10px;\\n  width: 20px;\\n  height: 20px;\\n  display: none;\\n  -webkit-box-align: center;\\n  -ms-flex-align: center;\\n      align-items: center;\\n  -webkit-box-pack: center;\\n  -ms-flex-pack: center;\\n      justify-content: center;\\n  background-color: #222222;\\n  border-radius: 50%;\\n  border: 1px solid #111824;\\n  color: #b9b9b9; }\\n\\n.visible {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex; }\\n\\n@media (max-width: 767px) {\\n  .main__body {\\n    height: 200vh;\\n    -webkit-box-pack: center;\\n    -ms-flex-pack: center;\\n        justify-content: center; }\\n  .country {\\n    margin-right: 0px;\\n    margin-bottom: 10px;\\n    height: calc(33.333% - 10px);\\n    -webkit-box-flex: 1;\\n    -ms-flex: 1 1 calc(100%);\\n        flex: 1 1 calc(100%); }\\n  .map {\\n    height: calc(33.333% - 10px);\\n    margin-bottom: 10px;\\n    -webkit-box-flex: 1;\\n    -ms-flex: 1 1 100%;\\n        flex: 1 1 100%;\\n    background-color: #222222; }\\n  .wrap {\\n    height: 33.333%;\\n    margin-left: 0px;\\n    -webkit-box-flex: 1;\\n    -ms-flex: 1 1 calc(28% - 10px);\\n        flex: 1 1 calc(28% - 10px); }\\n  .visible {\\n    display: none; } }\\n\\n@media (max-width: 499px) {\\n  .footer_year {\\n    display: none; } }\\n\\n#chart {\\n  -webkit-box-flex: 1;\\n      -ms-flex: auto;\\n          flex: auto;\\n  position: relative;\\n  left: 0;\\n  top: 0;\\n  width: 100% !important;\\n  height: 80% !important; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://rss-dashboard/./src/styles.css?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://rss-dashboard/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://rss-dashboard/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://rss-dashboard/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://rss-dashboard/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/assets/images/logo-rsschool.png":
/*!*********************************************!*\
  !*** ./src/assets/images/logo-rsschool.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"bc18f9082523c03addf3.png\";\n\n//# sourceURL=webpack://rss-dashboard/./src/assets/images/logo-rsschool.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;