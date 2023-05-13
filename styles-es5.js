(function () {
  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"], {
    /***/
    3:
    /*!******************************!*\
      !*** multi ./src/styles.css ***!
      \******************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\bmartrod\Downloads\brandonmartinez-jar.github.io-main\src\styles.css */
      "OmL/");
      /***/
    },

    /***/
    "JPst":
    /*!*****************************************************!*\
      !*** ./node_modules/css-loader/dist/runtime/api.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function JPst(module, exports, __webpack_require__) {
      "use strict";
      /*
        MIT License http://www.opensource.org/licenses/mit-license.php
        Author Tobias Koppers @sokra
      */
      // css base code, injected by the css-loader
      // eslint-disable-next-line func-names

      module.exports = function (useSourceMap) {
        var list = []; // return the list of modules as css string

        list.toString = function toString() {
          return this.map(function (item) {
            var content = cssWithMappingToString(item, useSourceMap);

            if (item[2]) {
              return "@media ".concat(item[2], " {").concat(content, "}");
            }

            return content;
          }).join('');
        }; // import a list of modules into the list
        // eslint-disable-next-line func-names


        list.i = function (modules, mediaQuery, dedupe) {
          if (typeof modules === 'string') {
            // eslint-disable-next-line no-param-reassign
            modules = [[null, modules, '']];
          }

          var alreadyImportedModules = {};

          if (dedupe) {
            for (var i = 0; i < this.length; i++) {
              // eslint-disable-next-line prefer-destructuring
              var id = this[i][0];

              if (id != null) {
                alreadyImportedModules[id] = true;
              }
            }
          }

          for (var _i = 0; _i < modules.length; _i++) {
            var item = [].concat(modules[_i]);

            if (dedupe && alreadyImportedModules[item[0]]) {
              // eslint-disable-next-line no-continue
              continue;
            }

            if (mediaQuery) {
              if (!item[2]) {
                item[2] = mediaQuery;
              } else {
                item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
              }
            }

            list.push(item);
          }
        };

        return list;
      };

      function cssWithMappingToString(item, useSourceMap) {
        var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

        var cssMapping = item[3];

        if (!cssMapping) {
          return content;
        }

        if (useSourceMap && typeof btoa === 'function') {
          var sourceMapping = toComment(cssMapping);
          var sourceURLs = cssMapping.sources.map(function (source) {
            return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
          });
          return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
        }

        return [content].join('\n');
      } // Adapted from convert-source-map (MIT)


      function toComment(sourceMap) {
        // eslint-disable-next-line no-undef
        var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
        var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
        return "/*# ".concat(data, " */");
      }
      /***/

    },

    /***/
    "LboF":
    /*!****************************************************************************!*\
      !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
      \****************************************************************************/

    /*! no static exports found */

    /***/
    function LboF(module, exports, __webpack_require__) {
      "use strict";

      var isOldIE = function isOldIE() {
        var memo;
        return function memorize() {
          if (typeof memo === 'undefined') {
            // Test for IE <= 9 as proposed by Browserhacks
            // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
            // Tests for existence of standard globals is to allow style-loader
            // to operate correctly into non-standard environments
            // @see https://github.com/webpack-contrib/style-loader/issues/177
            memo = Boolean(window && document && document.all && !window.atob);
          }

          return memo;
        };
      }();

      var getTarget = function getTarget() {
        var memo = {};
        return function memorize(target) {
          if (typeof memo[target] === 'undefined') {
            var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

            if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
              try {
                // This will throw an exception if access to iframe is blocked
                // due to cross-origin restrictions
                styleTarget = styleTarget.contentDocument.head;
              } catch (e) {
                // istanbul ignore next
                styleTarget = null;
              }
            }

            memo[target] = styleTarget;
          }

          return memo[target];
        };
      }();

      var stylesInDom = [];

      function getIndexByIdentifier(identifier) {
        var result = -1;

        for (var i = 0; i < stylesInDom.length; i++) {
          if (stylesInDom[i].identifier === identifier) {
            result = i;
            break;
          }
        }

        return result;
      }

      function modulesToDom(list, options) {
        var idCountMap = {};
        var identifiers = [];

        for (var i = 0; i < list.length; i++) {
          var item = list[i];
          var id = options.base ? item[0] + options.base : item[0];
          var count = idCountMap[id] || 0;
          var identifier = "".concat(id, " ").concat(count);
          idCountMap[id] = count + 1;
          var index = getIndexByIdentifier(identifier);
          var obj = {
            css: item[1],
            media: item[2],
            sourceMap: item[3]
          };

          if (index !== -1) {
            stylesInDom[index].references++;
            stylesInDom[index].updater(obj);
          } else {
            stylesInDom.push({
              identifier: identifier,
              updater: addStyle(obj, options),
              references: 1
            });
          }

          identifiers.push(identifier);
        }

        return identifiers;
      }

      function insertStyleElement(options) {
        var style = document.createElement('style');
        var attributes = options.attributes || {};

        if (typeof attributes.nonce === 'undefined') {
          var nonce = true ? __webpack_require__.nc : undefined;

          if (nonce) {
            attributes.nonce = nonce;
          }
        }

        Object.keys(attributes).forEach(function (key) {
          style.setAttribute(key, attributes[key]);
        });

        if (typeof options.insert === 'function') {
          options.insert(style);
        } else {
          var target = getTarget(options.insert || 'head');

          if (!target) {
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
          }

          target.appendChild(style);
        }

        return style;
      }

      function removeStyleElement(style) {
        // istanbul ignore if
        if (style.parentNode === null) {
          return false;
        }

        style.parentNode.removeChild(style);
      }
      /* istanbul ignore next  */


      var replaceText = function replaceText() {
        var textStore = [];
        return function replace(index, replacement) {
          textStore[index] = replacement;
          return textStore.filter(Boolean).join('\n');
        };
      }();

      function applyToSingletonTag(style, index, remove, obj) {
        var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

        /* istanbul ignore if  */

        if (style.styleSheet) {
          style.styleSheet.cssText = replaceText(index, css);
        } else {
          var cssNode = document.createTextNode(css);
          var childNodes = style.childNodes;

          if (childNodes[index]) {
            style.removeChild(childNodes[index]);
          }

          if (childNodes.length) {
            style.insertBefore(cssNode, childNodes[index]);
          } else {
            style.appendChild(cssNode);
          }
        }
      }

      function applyToTag(style, options, obj) {
        var css = obj.css;
        var media = obj.media;
        var sourceMap = obj.sourceMap;

        if (media) {
          style.setAttribute('media', media);
        } else {
          style.removeAttribute('media');
        }

        if (sourceMap && btoa) {
          css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
        } // For old IE

        /* istanbul ignore if  */


        if (style.styleSheet) {
          style.styleSheet.cssText = css;
        } else {
          while (style.firstChild) {
            style.removeChild(style.firstChild);
          }

          style.appendChild(document.createTextNode(css));
        }
      }

      var singleton = null;
      var singletonCounter = 0;

      function addStyle(obj, options) {
        var style;
        var update;
        var remove;

        if (options.singleton) {
          var styleIndex = singletonCounter++;
          style = singleton || (singleton = insertStyleElement(options));
          update = applyToSingletonTag.bind(null, style, styleIndex, false);
          remove = applyToSingletonTag.bind(null, style, styleIndex, true);
        } else {
          style = insertStyleElement(options);
          update = applyToTag.bind(null, style, options);

          remove = function remove() {
            removeStyleElement(style);
          };
        }

        update(obj);
        return function updateStyle(newObj) {
          if (newObj) {
            if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
              return;
            }

            update(obj = newObj);
          } else {
            remove();
          }
        };
      }

      module.exports = function (list, options) {
        options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
        // tags it will allow on a page

        if (!options.singleton && typeof options.singleton !== 'boolean') {
          options.singleton = isOldIE();
        }

        list = list || [];
        var lastIdentifiers = modulesToDom(list, options);
        return function update(newList) {
          newList = newList || [];

          if (Object.prototype.toString.call(newList) !== '[object Array]') {
            return;
          }

          for (var i = 0; i < lastIdentifiers.length; i++) {
            var identifier = lastIdentifiers[i];
            var index = getIndexByIdentifier(identifier);
            stylesInDom[index].references--;
          }

          var newLastIdentifiers = modulesToDom(newList, options);

          for (var _i = 0; _i < lastIdentifiers.length; _i++) {
            var _identifier = lastIdentifiers[_i];

            var _index = getIndexByIdentifier(_identifier);

            if (stylesInDom[_index].references === 0) {
              stylesInDom[_index].updater();

              stylesInDom.splice(_index, 1);
            }
          }

          lastIdentifiers = newLastIdentifiers;
        };
      };
      /***/

    },

    /***/
    "OmL/":
    /*!************************!*\
      !*** ./src/styles.css ***!
      \************************/

    /*! no static exports found */

    /***/
    function OmL(module, exports, __webpack_require__) {
      var api = __webpack_require__(
      /*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
      "LboF");

      var content = __webpack_require__(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--12-1!../node_modules/postcss-loader/src??embedded!./styles.css */
      "W9N5");

      content = content.__esModule ? content["default"] : content;

      if (typeof content === 'string') {
        content = [[module.i, content, '']];
      }

      var options = {};
      options.insert = "head";
      options.singleton = false;
      var update = api(content, options);
      module.exports = content.locals || {};
      /***/
    },

    /***/
    "W9N5":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/css-loader/dist/cjs.js??ref--12-1!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function W9N5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../node_modules/css-loader/dist/runtime/api.js */
      "JPst");
      /* harmony import */


      var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__); // Imports


      var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true); // Module


      ___CSS_LOADER_EXPORT___.push([module.i, "/* You can add global styles to this file, and also import other style files */\n\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nhtml{\n    scroll-behavior: smooth;\n}\n\nbody{\n    margin: 0 0 var(--header-height) 0;\n    font-family: var(--body-font);\n    font-size: var(--normal-font-size);\n    background: var(--body-color);\n    color: var(--text-color);\n    transition: .2s;\n}\n\n:root{\n    --header-height: 3rem;\n\n    --hue-color: 230;\n\n    --primary-color: hsl(var(--hue-color), 69%, 61%);\n    --secondary-color: hsl(var(--hue-color), 69%, 61%);\n    --primary-alt-color: hsl(var(--hue-color), 57%, 53%);\n    --primary-color-light: hsl(var(--hue-color), 92%, 85%);\n    --title-color: hsl(var(--hue-color), 8%, 15%);\n    --text-color: hsl(var(--hue-color), 8%, 45%);\n    --text-color-light: hsl(var(--hue-color), 8%, 65%);\n    --input-color: hsl(var(--hue-color), 70%, 96%);\n    --body-color: hsl(var(--hue-color), 60%, 99%);\n    --container-color: #e7e8e9;\n\n    --body-font: 'Poppins', sans-serif;\n\n    --big-font-size: 2rem;\n    --h1-font-size: 1.5rem;\n    --h2-font-size: 1.25rem;\n    --h3-font-size: 1.125rem;\n    --normal-font-size: .938rem;\n    --small-font-size: .831rem;\n    --smaller-font-size: .75rem;\n\n    --font-medium: 500;\n    --font-semi-bold: 600;\n\n/* z index\n    z-tooltip: 10\n    z-fixed: 100\n    zmodel: 100 */\n\n    @media screen and (min-width: 968px) {\n        :root{\n            --big-font-size: 3rem;\n            --h1-font-size: 2.25rem;\n            --h2-font-size: 1.5rem;\n            --h3-font-size: 1.25rem;\n            --normal-font-size: 1rem;\n            --small-font-size: .875rem;\n            --smaller-font-size: .813rem;\n        }\n\n    }\n\n}\n\nbody.dark-theme{\n  --secondary-color: hsl(var(--hue-color), 30%, 8%);\n  --title-color: hsl(var(--hue-color), 8%, 95%);\n  --text-color: hsl(var(--hue-color), 8%, 75%);\n  --input-color: hsl(var(--hue-color), 29%, 16%);\n  --body-color: hsl(var(--hue-color), 28%, 12%);\n  --container-color: hsl(var(--hue-color), 29%, 16%);\n}\n\nh1, h2, h3, h4{\n  color: var(--title-color);\n  font-weight: var(--font-semi-bold);\n}\n\nimg{\n  max-width: 100%;\n  height: auto;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.section{\n  padding: 2rem 0 3rem;\n}\n\n.section__title{\n  font-size: var(--h1-font-size);\n}\n\n.section__subtitle{\n  display: block;\n  font-size: var(--small-font-size);\n  margin-bottom: 3rem;\n}\n\n.section__title,\n.section__subtitle{\n  text-align: center;\n}\n\n.container{\n  margin-left: 1.5rem;\n  margin-right: 1.5rem;\n  max-width: 1500px;\n}\n\n.grid{\n  display: grid;\n  gap: 1.5rem;\n}\n\nul{\n  list-style: none;\n}\n\na{\n  text-decoration: none;\n}\n\n.button{\ndisplay: inline-block;\nbackground: var(--primary-color);\ncolor: #ffffff;\npadding: 1rem;\nborder-radius: .5rem;\nfont-weight: var(--font-medium);\n}\n\n.button:hover{\nbackground: var(--primary-alt-color);\n}\n\n.button--flex{\ndisplay: inline-flex;\nalign-items: center;\n}\n\n.button__icon{\nfont-size: 1.25rem;\nmargin-left: .5rem;\ntransition: .3s;\n}\n\n@media screen and (max-width: 350px){\n  .container{\n    margin-left: 1rem;\n    margin-right: 1rem;\n  }\n}\n\n@media screen and (min-width: 768px){\n\n  body{\n    margin: 0;\n  }\n  .section{\n    padding: 2rem 0 6rem;\n  }\n  .section__subtitle{\n    margin-bottom: 4rem;\n  }\n\n}\n\n@media screen and (min-width: 1024px){\n\n  .container{\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n}\n\n", "", {
        "version": 3,
        "sources": ["webpack://src/styles.css"],
        "names": [],
        "mappings": "AAAA,8EAA8E;;AAE9E;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AACA;IACI,uBAAuB;AAC3B;;AACA;IACI,kCAAkC;IAClC,6BAA6B;IAC7B,kCAAkC;IAClC,6BAA6B;IAC7B,wBAAwB;IACxB,eAAe;AACnB;;AAEA;IACI,qBAAqB;;IAErB,gBAAgB;;IAEhB,gDAAgD;IAChD,kDAAkD;IAClD,oDAAoD;IACpD,sDAAsD;IACtD,6CAA6C;IAC7C,4CAA4C;IAC5C,kDAAkD;IAClD,8CAA8C;IAC9C,6CAA6C;IAC7C,0BAA0B;;IAE1B,kCAAkC;;IAElC,qBAAqB;IACrB,sBAAsB;IACtB,uBAAuB;IACvB,wBAAwB;IACxB,2BAA2B;IAC3B,0BAA0B;IAC1B,2BAA2B;;IAE3B,kBAAkB;IAClB,qBAAqB;;AAEzB;;;iBAGiB;;IAEb;QACI;YACI,qBAAqB;YACrB,uBAAuB;YACvB,sBAAsB;YACtB,uBAAuB;YACvB,wBAAwB;YACxB,0BAA0B;YAC1B,4BAA4B;QAChC;;IAEJ;;AAEJ;;AAEA;EACE,iDAAiD;EACjD,6CAA6C;EAC7C,4CAA4C;EAC5C,8CAA8C;EAC9C,6CAA6C;EAC7C,kDAAkD;AACpD;;AAEA;EACE,yBAAyB;EACzB,kCAAkC;AACpC;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,oBAAiB;KAAjB,iBAAiB;AACnB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,cAAc;EACd,iCAAiC;EACjC,mBAAmB;AACrB;;AACA;;EAEE,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,oBAAoB;EACpB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,WAAW;AACb;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;AACA,qBAAqB;AACrB,gCAAgC;AAChC,cAAc;AACd,aAAa;AACb,oBAAoB;AACpB,+BAA+B;AAC/B;;AAEA;AACA,oCAAoC;AACpC;;AAEA;AACA,oBAAoB;AACpB,mBAAmB;AACnB;;AAEA;AACA,kBAAkB;AAClB,kBAAkB;AAClB,eAAe;AACf;;AAEA;EACE;IACE,iBAAiB;IACjB,kBAAkB;EACpB;AACF;;AAEA;;EAEE;IACE,SAAS;EACX;EACA;IACE,oBAAoB;EACtB;EACA;IACE,mBAAmB;EACrB;;AAEF;;AAEA;;EAEE;IACE,iBAAiB;IACjB,kBAAkB;EACpB;;AAEF",
        "sourcesContent": ["/* You can add global styles to this file, and also import other style files */\n\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\nhtml{\n    scroll-behavior: smooth;\n}\nbody{\n    margin: 0 0 var(--header-height) 0;\n    font-family: var(--body-font);\n    font-size: var(--normal-font-size);\n    background: var(--body-color);\n    color: var(--text-color);\n    transition: .2s;\n}\n\n:root{\n    --header-height: 3rem;\n\n    --hue-color: 230;\n\n    --primary-color: hsl(var(--hue-color), 69%, 61%);\n    --secondary-color: hsl(var(--hue-color), 69%, 61%);\n    --primary-alt-color: hsl(var(--hue-color), 57%, 53%);\n    --primary-color-light: hsl(var(--hue-color), 92%, 85%);\n    --title-color: hsl(var(--hue-color), 8%, 15%);\n    --text-color: hsl(var(--hue-color), 8%, 45%);\n    --text-color-light: hsl(var(--hue-color), 8%, 65%);\n    --input-color: hsl(var(--hue-color), 70%, 96%);\n    --body-color: hsl(var(--hue-color), 60%, 99%);\n    --container-color: #e7e8e9;\n\n    --body-font: 'Poppins', sans-serif;\n\n    --big-font-size: 2rem;\n    --h1-font-size: 1.5rem;\n    --h2-font-size: 1.25rem;\n    --h3-font-size: 1.125rem;\n    --normal-font-size: .938rem;\n    --small-font-size: .831rem;\n    --smaller-font-size: .75rem;\n\n    --font-medium: 500;\n    --font-semi-bold: 600;\n\n/* z index\n    z-tooltip: 10\n    z-fixed: 100\n    zmodel: 100 */\n\n    @media screen and (min-width: 968px) {\n        :root{\n            --big-font-size: 3rem;\n            --h1-font-size: 2.25rem;\n            --h2-font-size: 1.5rem;\n            --h3-font-size: 1.25rem;\n            --normal-font-size: 1rem;\n            --small-font-size: .875rem;\n            --smaller-font-size: .813rem;\n        }\n\n    }\n\n}\n\nbody.dark-theme{\n  --secondary-color: hsl(var(--hue-color), 30%, 8%);\n  --title-color: hsl(var(--hue-color), 8%, 95%);\n  --text-color: hsl(var(--hue-color), 8%, 75%);\n  --input-color: hsl(var(--hue-color), 29%, 16%);\n  --body-color: hsl(var(--hue-color), 28%, 12%);\n  --container-color: hsl(var(--hue-color), 29%, 16%);\n}\n\nh1, h2, h3, h4{\n  color: var(--title-color);\n  font-weight: var(--font-semi-bold);\n}\n\nimg{\n  max-width: 100%;\n  height: auto;\n  object-fit: cover;\n}\n\n.section{\n  padding: 2rem 0 3rem;\n}\n\n.section__title{\n  font-size: var(--h1-font-size);\n}\n\n.section__subtitle{\n  display: block;\n  font-size: var(--small-font-size);\n  margin-bottom: 3rem;\n}\n.section__title,\n.section__subtitle{\n  text-align: center;\n}\n\n.container{\n  margin-left: 1.5rem;\n  margin-right: 1.5rem;\n  max-width: 1500px;\n}\n\n.grid{\n  display: grid;\n  gap: 1.5rem;\n}\n\nul{\n  list-style: none;\n}\n\na{\n  text-decoration: none;\n}\n\n.button{\ndisplay: inline-block;\nbackground: var(--primary-color);\ncolor: #ffffff;\npadding: 1rem;\nborder-radius: .5rem;\nfont-weight: var(--font-medium);\n}\n\n.button:hover{\nbackground: var(--primary-alt-color);\n}\n\n.button--flex{\ndisplay: inline-flex;\nalign-items: center;\n}\n\n.button__icon{\nfont-size: 1.25rem;\nmargin-left: .5rem;\ntransition: .3s;\n}\n\n@media screen and (max-width: 350px){\n  .container{\n    margin-left: 1rem;\n    margin-right: 1rem;\n  }\n}\n\n@media screen and (min-width: 768px){\n\n  body{\n    margin: 0;\n  }\n  .section{\n    padding: 2rem 0 6rem;\n  }\n  .section__subtitle{\n    margin-bottom: 4rem;\n  }\n\n}\n\n@media screen and (min-width: 1024px){\n\n  .container{\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n}\n\n"],
        "sourceRoot": ""
      }]); // Exports

      /* harmony default export */


      __webpack_exports__["default"] = ___CSS_LOADER_EXPORT___;
      /***/
    }
  }, [[3, "runtime"]]]);
})();
//# sourceMappingURL=styles-es5.js.map