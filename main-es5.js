(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\bmartrod\Downloads\brandonmartinez-jar.github.io-main\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "54d4":
    /*!************************************************************!*\
      !*** ./src/app/qualifications/qualifications.component.ts ***!
      \************************************************************/

    /*! exports provided: QualificationsComponent */

    /***/
    function d4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QualificationsComponent", function () {
        return QualificationsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var QualificationsComponent = /*#__PURE__*/function () {
        function QualificationsComponent() {
          _classCallCheck(this, QualificationsComponent);
        }

        _createClass(QualificationsComponent, [{
          key: "ToggleActive",
          value: function ToggleActive(event) {
            var e = event.target;
            var id;

            while (!e.classList.contains('qualification__button')) {
              e = e.parentElement;
            }

            id = e.id;

            if (e.parentElement.children.item(0).id !== id) {
              if (!e.parentElement.children.item(1).classList.contains('qualification__active')) {
                e.parentElement.children.item(1).classList.add('qualification__active');
                e.parentElement.children.item(0).classList.remove('qualification__active');
              }
            } else {
              if (!e.parentElement.children.item(0).classList.contains('qualification__active')) {
                e.parentElement.children.item(0).classList.add('qualification__active');
                e.parentElement.children.item(1).classList.remove('qualification__active');
              }
            }

            while (!e.classList.contains('qualification__container')) {
              e = e.parentElement;
            }

            e = e.children.item(1);

            for (var i = 0; i < e.children.length; i++) {
              e.children.item(i).classList.remove('qualification__active');
            }

            for (var _i = 0; _i < e.children.length; _i++) {
              if (e.children.item(_i).classList.contains(id)) {
                e.children.item(_i).classList.add('qualification__active');
              }
            }

            console.log(e); // if (e.id === 'education') {
            //   if (!e.classList.contains('qualification__active')) {
            //     const work = document.getElementById('work');
            //     work.classList.remove('qualification__active')
            //   }
            // }else{
            //   if (!e.classList.contains('qualification__active')) {
            //     const education = document.getElementById('education');
            //     education.classList.remove('qualification__active')
            //   }
            // }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return QualificationsComponent;
      }();

      QualificationsComponent.ɵfac = function QualificationsComponent_Factory(t) {
        return new (t || QualificationsComponent)();
      };

      QualificationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: QualificationsComponent,
        selectors: [["app-qualifications"]],
        decls: 113,
        vars: 0,
        consts: [[1, "qualification", "section"], [1, "section__title"], [1, "section__subtitle"], [1, "qualification__container", "container"], [1, "qualification__tabs"], ["id", "education", "data-target", "#education", 1, "qualification__button", "button--flex", "qualification__active", 3, "click"], [1, "uil", "uil-graduation-cap", "qualification__icon"], ["id", "work", "data-target", "#work", 1, "qualification__button", "button--flex", 3, "click"], [1, "uil", "uil-bag", "qualification__icon"], [1, "qualification__sections"], ["data-content", "", 1, "qualification__content", "qualification__active", "education"], [1, "qualification__data"], [1, "qualification__title"], [1, "qualifiactions__subtitle"], [1, "qualification", "calendar"], [1, "uil", "uil-schedule"], [1, "qualification__rounder"], [1, "qualification__line"], ["data-content", "", 1, "qualification__content", "work"]],
        template: function QualificationsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Qualification");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "My personal journey");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QualificationsComponent_Template_div_click_7_listener($event) {
              return ctx.ToggleActive($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Education ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QualificationsComponent_Template_div_click_10_listener($event) {
              return ctx.ToggleActive($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Work ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Commercial High School");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Yolkin Institute");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " 2016 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Life skills");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "SENA");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " 2020 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Web Development Engineer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "AWS educate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " 2020 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h3", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Sistems Engineer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "UNAD");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Studying ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h3", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Azure Architect Expert");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Microsoft");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " Studying ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h3", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Software Developer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "CORPMAD");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " Feb 2019 - Jan 2021 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h3", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Software Engineer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Indra");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, " May 2021 - Nov 2021 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h3", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Web Development Engineer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "AWS educate");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, " Nov 2021 - Working ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "span", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".qualification__tabs[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  margin-bottom: 2rem;\r\n\r\n}\r\n\r\n.qualification__button[_ngcontent-%COMP%]{\r\n  font-size: var(--h3-font-size);\r\n  font-weight: var(--font-medium);\r\n  cursor: pointer;\r\n  width: 200px;\r\n  padding: 0 1rem;\r\n  justify-content: center;\r\n  transition: .3s;\r\n  border-radius: 10px;\r\n}\r\n\r\n.qualification__button[_ngcontent-%COMP%]:hover{\r\n  background: var(--input-color);\r\n}\r\n\r\n.qualification__icon[_ngcontent-%COMP%]{\r\n  font-size: 1.8rem;\r\n  margin-bottom: .25rem;\r\n  margin-right: 1rem;\r\n}\r\n\r\n.qualification__data[_ngcontent-%COMP%]{\r\n  display: grid;\r\n  grid-template-columns: 1fr -webkit-max-content 1fr;\r\n  grid-template-columns: 1fr max-content 1fr;\r\n  -moz-column-gap: 1.5rem;\r\n       column-gap: 1.5rem;\r\n  text-align: center;\r\n}\r\n\r\n.qualification__title[_ngcontent-%COMP%]{\r\n  font-size: var(--normal-font-size);\r\n  font-weight: var(--font-medium);\r\n}\r\n\r\n.qualification__subtitle[_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n  font-size: var(--small-font-size);\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.qualification__calendar[_ngcontent-%COMP%]{\r\n  font-size: var(--smaller-font-size);\r\n  color: var(--title-color-light);\r\n}\r\n\r\n.qualification__rounder[_ngcontent-%COMP%]{\r\n  display: inline-block;\r\n  width: 13px;\r\n  height: 13px;\r\n  background: var(--primary-color);\r\n  border-radius: 50%;\r\n}\r\n\r\n.qualification__line[_ngcontent-%COMP%]{\r\n  display: block;\r\n  width: 1px;\r\n  height: 100%;\r\n  background: var(--primary-color);\r\n  transform: translate(6px, -7px);\r\n}\r\n\r\n.qualification[_ngcontent-%COMP%]   [data-content][_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n\r\n.qualification[_ngcontent-%COMP%]   .qualification__active[data-content][_ngcontent-%COMP%]{\r\n  display: block;\r\n}\r\n\r\n.qualification__button.qualification__active[_ngcontent-%COMP%]{\r\n  color: var(--primary-color);\r\n  border: 2px solid var(--primary-color);\r\n}\r\n\r\n@media screen and (max-width: 350px){\r\n  .qualification__data[_ngcontent-%COMP%]{\r\n    gap: .5rem;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 700px){\r\n  .qualification__sections[_ngcontent-%COMP%]{\r\n    display: grid;\r\n    grid-template-columns: .6fr;\r\n    justify-content: center;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 768px){\r\n  .qualification__tabs[_ngcontent-%COMP%]{\r\n    justify-content: center;\r\n  }\r\n\r\n  .qualification__button[_ngcontent-%COMP%]{\r\n    margin: 0 1rem;\r\n  }\r\n\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVhbGlmaWNhdGlvbnMvcXVhbGlmaWNhdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjs7QUFFckI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsK0JBQStCO0VBQy9CLGVBQWU7RUFDZixZQUFZO0VBQ1osZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0RBQTBDO0VBQTFDLDBDQUEwQztFQUMxQyx1QkFBa0I7T0FBbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQywrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsaUNBQWlDO0VBQ2pDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQywrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFVBQVU7RUFDVixZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0Isc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQix1QkFBdUI7RUFDekI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7O0FBR0YiLCJmaWxlIjoic3JjL2FwcC9xdWFsaWZpY2F0aW9ucy9xdWFsaWZpY2F0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5xdWFsaWZpY2F0aW9uX190YWJze1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuXHJcbn1cclxuXHJcbi5xdWFsaWZpY2F0aW9uX19idXR0b257XHJcbiAgZm9udC1zaXplOiB2YXIoLS1oMy1mb250LXNpemUpO1xyXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LW1lZGl1bSk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBwYWRkaW5nOiAwIDFyZW07XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogLjNzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5xdWFsaWZpY2F0aW9uX19idXR0b246aG92ZXJ7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW5wdXQtY29sb3IpO1xyXG59XHJcblxyXG4ucXVhbGlmaWNhdGlvbl9faWNvbntcclxuICBmb250LXNpemU6IDEuOHJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAuMjVyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG4ucXVhbGlmaWNhdGlvbl9fZGF0YXtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1heC1jb250ZW50IDFmcjtcclxuICBjb2x1bW4tZ2FwOiAxLjVyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucXVhbGlmaWNhdGlvbl9fdGl0bGV7XHJcbiAgZm9udC1zaXplOiB2YXIoLS1ub3JtYWwtZm9udC1zaXplKTtcclxuICBmb250LXdlaWdodDogdmFyKC0tZm9udC1tZWRpdW0pO1xyXG59XHJcblxyXG4ucXVhbGlmaWNhdGlvbl9fc3VidGl0bGV7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0tc21hbGwtZm9udC1zaXplKTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4ucXVhbGlmaWNhdGlvbl9fY2FsZW5kYXJ7XHJcbiAgZm9udC1zaXplOiB2YXIoLS1zbWFsbGVyLWZvbnQtc2l6ZSk7XHJcbiAgY29sb3I6IHZhcigtLXRpdGxlLWNvbG9yLWxpZ2h0KTtcclxufVxyXG5cclxuLnF1YWxpZmljYXRpb25fX3JvdW5kZXJ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxM3B4O1xyXG4gIGhlaWdodDogMTNweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5xdWFsaWZpY2F0aW9uX19saW5le1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDZweCwgLTdweCk7XHJcbn1cclxuXHJcbi5xdWFsaWZpY2F0aW9uIFtkYXRhLWNvbnRlbnRde1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5xdWFsaWZpY2F0aW9uIC5xdWFsaWZpY2F0aW9uX19hY3RpdmVbZGF0YS1jb250ZW50XXtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnF1YWxpZmljYXRpb25fX2J1dHRvbi5xdWFsaWZpY2F0aW9uX19hY3RpdmV7XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXByaW1hcnktY29sb3IpO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTBweCl7XHJcbiAgLnF1YWxpZmljYXRpb25fX2RhdGF7XHJcbiAgICBnYXA6IC41cmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpe1xyXG4gIC5xdWFsaWZpY2F0aW9uX19zZWN0aW9uc3tcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IC42ZnI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcclxuICAucXVhbGlmaWNhdGlvbl9fdGFic3tcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLnF1YWxpZmljYXRpb25fX2J1dHRvbntcclxuICAgIG1hcmdpbjogMCAxcmVtO1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QualificationsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-qualifications',
            templateUrl: './qualifications.component.html',
            styleUrls: ['./qualifications.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "84zG":
    /*!******************************************!*\
      !*** ./src/app/about/about.component.ts ***!
      \******************************************/

    /*! exports provided: AboutComponent */

    /***/
    function zG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
        return AboutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AboutComponent = /*#__PURE__*/function () {
        function AboutComponent() {
          _classCallCheck(this, AboutComponent);
        }

        _createClass(AboutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AboutComponent;
      }();

      AboutComponent.ɵfac = function AboutComponent_Factory(t) {
        return new (t || AboutComponent)();
      };

      AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AboutComponent,
        selectors: [["app-about"]],
        decls: 28,
        vars: 0,
        consts: [["id", "about", 1, "about", "section"], [1, "section__title"], [1, "section__subtitle"], [1, "about__container", "container", "grid"], ["src", "assets/img/perfil.png", "alt", "", 1, "about__img"], [1, "about__data", "grid"], [1, "about__description"], [1, "about__info"], [1, "about__info-title"], [1, "about__info-name"], [1, "about__buttons"], ["download", "", "href", "assets/CV-BRANDON-MARTINEZ.pdf", "target", "_blank", 1, "button", "button--flex"], [1, "uil", "uil-airplay", "button__icon"]],
        template: function AboutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "About Me");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "My introduction");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Web development full stack with HTML, CSS, JavaScript or TypeScript, React and Angular for front-end and Node.js, MySQL and MongoDB (Stack MEAN) or Java Spring for backend, always learning something new, now studying Docker y linux. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "06 +");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Years ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " experience");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "multiple");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Completed ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " project");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Download CV ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["@media screen and (max-width: 1024px){\r\n\r\n  .container[_ngcontent-%COMP%]{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    max-width: 1500px;\r\n    padding: 0 8rem 0;\r\n  }\r\n\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n  display: block;\r\n  margin: auto;\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.about__img[_ngcontent-%COMP%]{\r\n  border-radius: .5rem;\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n.about__data[_ngcontent-%COMP%]{\r\n  grid-template-columns: 1fr 1.5fr;\r\n  grid-row: auto;\r\n}\r\n\r\n.about__description[_ngcontent-%COMP%]{\r\n  text-align: justify;\r\n  margin-bottom: 1rem;\r\n  grid-column: 1/3;\r\n  padding-right: 4rem;\r\n}\r\n\r\n.about__info[_ngcontent-%COMP%]{\r\n  margin: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-evenly;\r\n  margin-bottom: 2.5rem;\r\n}\r\n\r\n.about__info-name[_ngcontent-%COMP%]{\r\n  font-size: var(--smaller-font-size);\r\n  text-align: center;\r\n}\r\n\r\n.about__info-title[_ngcontent-%COMP%]{\r\n  font-size: var(--h2-font-size);\r\n  font-weight: var(--font-semi-bold);\r\n  color: var(--title-color);\r\n}\r\n\r\n.about__info-title[_ngcontent-%COMP%], .about__info-name[_ngcontent-%COMP%]{\r\n  display: block;\r\n  text-align: center;\r\n}\r\n\r\n.about__buttons[_ngcontent-%COMP%]{\r\n  grid-column: 1/3;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.button[_ngcontent-%COMP%]{\r\n  width: -webkit-max-content;\r\n  width: -moz-max-content;\r\n  width: max-content;\r\n}\r\n\r\n@media screen and (max-width: 700px){\r\n  .about__img[_ngcontent-%COMP%]{\r\n    height: 200px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 700px){\r\n\r\n  .about__container[_ngcontent-%COMP%]{\r\n    grid-template-columns: repeat(2, 1fr);\r\n  }\r\n  .about__container[_ngcontent-%COMP%]{\r\n    padding: 1rem;\r\n    -moz-column-gap: 2rem;\r\n         column-gap: 2rem;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1024px){\r\n\r\n  .about__img[_ngcontent-%COMP%]{\r\n    height: 380px;\r\n  }\r\n\r\n  .about__description[_ngcontent-%COMP%]{\r\n    margin-top: auto;\r\n    margin-bottom: auto;\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjs7QUFFRjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGtDQUFrQztFQUNsQyx5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBOztFQUVFO0lBQ0UscUNBQXFDO0VBQ3ZDO0VBQ0E7SUFDRSxhQUFhO0lBQ2IscUJBQWdCO1NBQWhCLGdCQUFnQjtFQUNsQjtBQUNGOztBQUVBOztFQUVFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjs7QUFFRiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpe1xyXG5cclxuICAuY29udGFpbmVye1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDE1MDBweDtcclxuICAgIHBhZGRpbmc6IDAgOHJlbSAwO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmltZ3tcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmFib3V0X19pbWd7XHJcbiAgYm9yZGVyLXJhZGl1czogLjVyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG59XHJcblxyXG4uYWJvdXRfX2RhdGF7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMS41ZnI7XHJcbiAgZ3JpZC1yb3c6IGF1dG87XHJcbn1cclxuXHJcbi5hYm91dF9fZGVzY3JpcHRpb257XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIGdyaWQtY29sdW1uOiAxLzM7XHJcbiAgcGFkZGluZy1yaWdodDogNHJlbTtcclxufVxyXG5cclxuLmFib3V0X19pbmZve1xyXG4gIG1hcmdpbjogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xyXG59XHJcblxyXG4uYWJvdXRfX2luZm8tbmFtZXtcclxuICBmb250LXNpemU6IHZhcigtLXNtYWxsZXItZm9udC1zaXplKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hYm91dF9faW5mby10aXRsZXtcclxuICBmb250LXNpemU6IHZhcigtLWgyLWZvbnQtc2l6ZSk7XHJcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtc2VtaS1ib2xkKTtcclxuICBjb2xvcjogdmFyKC0tdGl0bGUtY29sb3IpO1xyXG59XHJcblxyXG4uYWJvdXRfX2luZm8tdGl0bGUsXHJcbi5hYm91dF9faW5mby1uYW1le1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFib3V0X19idXR0b25ze1xyXG4gIGdyaWQtY29sdW1uOiAxLzM7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYnV0dG9ue1xyXG4gIHdpZHRoOiBtYXgtY29udGVudDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpe1xyXG4gIC5hYm91dF9faW1ne1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcwMHB4KXtcclxuXHJcbiAgLmFib3V0X19jb250YWluZXJ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gIH1cclxuICAuYWJvdXRfX2NvbnRhaW5lcntcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICBjb2x1bW4tZ2FwOiAycmVtO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KXtcclxuXHJcbiAgLmFib3V0X19pbWd7XHJcbiAgICBoZWlnaHQ6IDM4MHB4O1xyXG4gIH1cclxuXHJcbiAgLmFib3V0X19kZXNjcmlwdGlvbntcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gIH1cclxuXHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-about',
            templateUrl: './about.component.html',
            styleUrls: ['./about.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "9vUh":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function vUh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent() {
          _classCallCheck(this, HomeComponent);
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)();
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 12,
        vars: 0,
        consts: [["id", "home", 1, "home", "section"], [1, "home__container", "container", "grid"], [1, "home__content", "grid"], [1, "home__img"], ["src", "assets/img/about.jpeg", "alt", "Foto personal"], [1, "home__data"], [1, "home__title"], [1, "home__subtitle"], [1, "home__description"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Software developer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "UNAD Student");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " I\u2019m a person that never stops learning, my focus is software development, front-end and back-end with JavaScript and TypeScript. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["img[_ngcontent-%COMP%]{\r\n  display: block;\r\n  margin: auto;\r\n  max-width: auto;\r\n  height: 100%;\r\n  border-radius: 20%;\r\n  background: #fff;\r\n}\r\n\r\n.home__content[_ngcontent-%COMP%]{\r\n  grid-template-columns: .5fr 3fr;\r\n  align-items: center;\r\n}\r\n\r\n.home__img[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n}\r\n\r\n.home__title[_ngcontent-%COMP%]{\r\n  font-size: var(--big-font-size);\r\n  color: var(--text-color);\r\n  font-weight: var(--font-medium);\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.home__description[_ngcontent-%COMP%]{\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n@media screen and (max-width: 350px){\r\n  .home__content[_ngcontent-%COMP%]{\r\n    grid-template-columns: .25fr 3fr;\r\n  }\r\n  .home__img[_ngcontent-%COMP%]{\r\n    height: 300px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 700px){\r\n  .home__img[_ngcontent-%COMP%]{\r\n    grid-column: 1/3;\r\n  }\r\n\r\n  .home__data[_ngcontent-%COMP%]{\r\n    grid-column: 1/3;\r\n  }\r\n  .home__img[_ngcontent-%COMP%]{\r\n    height: 300px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 700px){\r\n  .home__content[_ngcontent-%COMP%]{\r\n    grid-template-columns:1fr 1fr;\r\n    -moz-column-gap: 1rem;\r\n         column-gap: 1rem;\r\n    padding: 2rem;\r\n  }\r\n  .home__data[_ngcontent-%COMP%]{\r\n    grid-column: initial;\r\n  }\r\n  .home__img[_ngcontent-%COMP%]{\r\n    height: 250px;\r\n    justify-content: center;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 768px){\r\n  .home__container[_ngcontent-%COMP%]{\r\n    row-gap: 5rem;\r\n  }\r\n  .home__content[_ngcontent-%COMP%]{\r\n    padding-top: 4rem;\r\n    -moz-column-gap: 2rem;\r\n         column-gap: 2rem;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1024px){\r\n  .home__img[_ngcontent-%COMP%]{\r\n    height: 350px;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUNBO0VBQ0UsK0JBQStCO0VBQy9CLHdCQUF3QjtFQUN4QiwrQkFBK0I7RUFDL0IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7SUFDRSxnQ0FBZ0M7RUFDbEM7RUFDQTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0U7SUFDRSw2QkFBNkI7SUFDN0IscUJBQWdCO1NBQWhCLGdCQUFnQjtJQUNoQixhQUFhO0VBQ2Y7RUFDQTtJQUNFLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtFQUN6QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixxQkFBZ0I7U0FBaEIsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbWd7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1heC13aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjAlO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbi5ob21lX19jb250ZW50e1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogLjVmciAzZnI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmhvbWVfX2ltZ3tcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uaG9tZV9fdGl0bGV7XHJcbiAgZm9udC1zaXplOiB2YXIoLS1iaWctZm9udC1zaXplKTtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtbWVkaXVtKTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbi5ob21lX19kZXNjcmlwdGlvbntcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTBweCl7XHJcbiAgLmhvbWVfX2NvbnRlbnR7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IC4yNWZyIDNmcjtcclxuICB9XHJcbiAgLmhvbWVfX2ltZ3tcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCl7XHJcbiAgLmhvbWVfX2ltZ3tcclxuICAgIGdyaWQtY29sdW1uOiAxLzM7XHJcbiAgfVxyXG5cclxuICAuaG9tZV9fZGF0YXtcclxuICAgIGdyaWQtY29sdW1uOiAxLzM7XHJcbiAgfVxyXG4gIC5ob21lX19pbWd7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpe1xyXG4gIC5ob21lX19jb250ZW50e1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOjFmciAxZnI7XHJcbiAgICBjb2x1bW4tZ2FwOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICB9XHJcbiAgLmhvbWVfX2RhdGF7XHJcbiAgICBncmlkLWNvbHVtbjogaW5pdGlhbDtcclxuICB9XHJcbiAgLmhvbWVfX2ltZ3tcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcclxuICAuaG9tZV9fY29udGFpbmVye1xyXG4gICAgcm93LWdhcDogNXJlbTtcclxuICB9XHJcbiAgLmhvbWVfX2NvbnRlbnR7XHJcbiAgICBwYWRkaW5nLXRvcDogNHJlbTtcclxuICAgIGNvbHVtbi1nYXA6IDJyZW07XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCl7XHJcbiAgLmhvbWVfX2ltZ3tcclxuICAgIGhlaWdodDogMzUwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./header/header.component */
      "fECr");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./about/about.component */
      "84zG");
      /* harmony import */


      var _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./skills/skills.component */
      "fGbd");
      /* harmony import */


      var _qualifications_qualifications_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./qualifications/qualifications.component */
      "54d4");
      /* harmony import */


      var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./portfolio/portfolio.component */
      "zyDg");
      /* harmony import */


      var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./contact/contact.component */
      "bzTf");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'portfolio';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 8,
        vars: 0,
        consts: [[1, "main"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-about");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-skills");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-qualifications");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-portfolio");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_4__["SkillsComponent"], _qualifications_qualifications_component__WEBPACK_IMPORTED_MODULE_5__["QualificationsComponent"], _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_6__["PortfolioComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./header/header.component */
      "fECr");
      /* harmony import */


      var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./about/about.component */
      "84zG");
      /* harmony import */


      var _skills_skills_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./skills/skills.component */
      "fGbd");
      /* harmony import */


      var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./portfolio/portfolio.component */
      "zyDg");
      /* harmony import */


      var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./contact/contact.component */
      "bzTf");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _qualifications_qualifications_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./qualifications/qualifications.component */
      "54d4");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_5__["SkillsComponent"], _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_6__["PortfolioComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _qualifications_qualifications_component__WEBPACK_IMPORTED_MODULE_9__["QualificationsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"], _skills_skills_component__WEBPACK_IMPORTED_MODULE_5__["SkillsComponent"], _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_6__["PortfolioComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], _qualifications_qualifications_component__WEBPACK_IMPORTED_MODULE_9__["QualificationsComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "bzTf":
    /*!**********************************************!*\
      !*** ./src/app/contact/contact.component.ts ***!
      \**********************************************/

    /*! exports provided: ContactComponent */

    /***/
    function bzTf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
        return ContactComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ContactComponent = /*#__PURE__*/function () {
        function ContactComponent() {
          _classCallCheck(this, ContactComponent);
        }

        _createClass(ContactComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ContactComponent;
      }();

      ContactComponent.ɵfac = function ContactComponent_Factory(t) {
        return new (t || ContactComponent)();
      };

      ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ContactComponent,
        selectors: [["app-contact"]],
        decls: 27,
        vars: 0,
        consts: [["id", "contact", 1, "contact", "section"], [1, "section__title"], [1, "section__subtitle"], [1, "contact__container", "container", "grid"], [1, "contact__information"], [1, "enlaces", "grid"], ["target", "_blank", "href", "https://api.whatsapp.com/send?phone=573188159100", 1, "button", "button--flex"], [1, "uil", "uil-whatsapp", "button__icon"], ["target", "_blank", "href", "https://www.linkedin.com/in/brandon-martinez-86561b203/", 1, "button", "button--flex"], [1, "uil", "uil-linkedin", "button__icon"], ["target", "_blank", "href", "https://goo.gl/maps/JhxRcJ46BMaqTkie9", 1, "button", "button--flex"], [1, "uil", "uil-map-marker", "button__icon"], ["target", "_blank", "href", "https://github.com/BrandonMartinez-jar", 1, "button", "button--flex"], [1, "uil", "uil-github", "button__icon"], ["target", "_blank", "href", "https://devchallenges.io/portfolio/BrandonMartinez-jar", 1, "button", "button--flex"], [1, "uil", "uil-arrow", "button__icon"], ["target", "_blank", "href", "mailto:m.desarrolloyprogramacion@outlook.com", 1, "button", "button--flex"], [1, "uil", "uil-at", "button__icon"]],
        template: function ContactComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Contact info");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Get in touch");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["h2[_ngcontent-%COMP%], span[_ngcontent-%COMP%]{\r\n  color: #fff;\r\n}\r\nspan[_ngcontent-%COMP%]{\r\n  margin-bottom: 2rem;\r\n}\r\n.section[_ngcontent-%COMP%]{\r\n  background: var(--primary-color);\r\n  margin-top: 3rem;\r\n  padding: 1rem;\r\n}\r\n.button[_ngcontent-%COMP%]{\r\n  background: var(--body-color);\r\n}\r\n.button[_ngcontent-%COMP%]:hover{\r\n  background: var(--input-color);\r\n}\r\n.button__icon[_ngcontent-%COMP%]{\r\n  color: var(--text-color);\r\n  font-size: 2rem;\r\n  transition: .3s;\r\n  margin: 0 .5rem ;\r\n}\r\n.button[_ngcontent-%COMP%]:hover   .button__icon[_ngcontent-%COMP%]{\r\ntransform: translateY(-5px);\r\n}\r\n.uil-envelope-alt[_ngcontent-%COMP%]{\r\n  margin-left: .5rem;\r\n}\r\n.contact__container[_ngcontent-%COMP%]{\r\n  row-gap: 3rem;\r\n  justify-content: center;\r\n}\r\n.contact__information[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  margin-bottom: 2rem;\r\n}\r\n.contact__icon[_ngcontent-%COMP%]{\r\n  font-size: 2rem;\r\n  color: var(--text-color);\r\n  margin-bottom: .75rem;\r\n}\r\n.enlaces[_ngcontent-%COMP%]{\r\n  grid-template-columns: repeat(3, 1fr);\r\n}\r\n@media screen and (min-width: 768px){\r\n  .enlaces[_ngcontent-%COMP%]{\r\n    grid-template-columns: repeat(6, 1fr);\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUdBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UscUNBQXFDO0FBQ3ZDO0FBR0E7RUFDRTtJQUNFLHFDQUFxQztFQUN2Qzs7QUFFRiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIsIHNwYW57XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuc3BhbntcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcbi5zZWN0aW9ue1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG4uYnV0dG9ue1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJvZHktY29sb3IpO1xyXG59XHJcbi5idXR0b246aG92ZXJ7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW5wdXQtY29sb3IpO1xyXG59XHJcbi5idXR0b25fX2ljb257XHJcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICB0cmFuc2l0aW9uOiAuM3M7XHJcbiAgbWFyZ2luOiAwIC41cmVtIDtcclxufVxyXG4uYnV0dG9uOmhvdmVyIC5idXR0b25fX2ljb257XHJcbnRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcclxufVxyXG5cclxuXHJcbi51aWwtZW52ZWxvcGUtYWx0e1xyXG4gIG1hcmdpbi1sZWZ0OiAuNXJlbTtcclxufVxyXG5cclxuLmNvbnRhY3RfX2NvbnRhaW5lcntcclxuICByb3ctZ2FwOiAzcmVtO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGFjdF9faW5mb3JtYXRpb257XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG4uY29udGFjdF9faWNvbntcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gIG1hcmdpbi1ib3R0b206IC43NXJlbTtcclxufVxyXG4uZW5sYWNlc3tcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpe1xyXG4gIC5lbmxhY2Vze1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-contact',
            templateUrl: './contact.component.html',
            styleUrls: ['./contact.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "fECr":
    /*!********************************************!*\
      !*** ./src/app/header/header.component.ts ***!
      \********************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function fECr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent() {
          _classCallCheck(this, HeaderComponent);
        }

        _createClass(HeaderComponent, [{
          key: "ShowMenu",
          value: function ShowMenu() {
            var menu = document.getElementById('nav-menu');
            menu.classList.add('show-menu');
          }
        }, {
          key: "HideMenu",
          value: function HideMenu() {
            var menu = document.getElementById('nav-menu');
            menu.classList.remove('show-menu');
          }
        }, {
          key: "DarkMode",
          value: function DarkMode() {
            var Btn = document.getElementById('theme-button'),
                DarkTheme = 'dark-theme',
                IconTheme = 'uil-sun';
            var selectedTheme = localStorage.getItem('selected-theme'),
                selectedIcon = localStorage.getItem('selected-icon');

            var getCurrentTheme = function getCurrentTheme() {
              return document.body.classList.contains(DarkTheme) ? 'dark' : 'light';
            };

            var getCurrentIcon = function getCurrentIcon() {
              return Btn.classList.contains(IconTheme) ? 'uil-moon' : 'uil-sun';
            };

            if (selectedTheme) {
              document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](DarkTheme);
              Btn.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](IconTheme);
            }

            document.body.classList.toggle(DarkTheme);
            Btn.classList.toggle(IconTheme);
            localStorage.setItem('selected-theme', getCurrentTheme());
            localStorage.setItem('selected-icon', getCurrentIcon());
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)();
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 31,
        vars: 0,
        consts: [[1, "header"], [1, "nav", "container"], ["href", "#", 1, "nav__logo"], ["id", "nav-menu", 1, "nav__menu"], [1, "nav__list", "grid"], [1, "nav__item"], ["href", "#home", 1, "nav__link", 3, "click"], [1, "uil", "uil-estate", "nav__icon"], ["href", "#about", 1, "nav__link", 3, "click"], [1, "uil", "uil-user-circle", "nav__icon"], ["href", "#skills", 1, "nav__link", 3, "click"], [1, "uil", "uil-file-alt", "nav__icon"], ["href", "#portfolio", 1, "nav__link", 3, "click"], [1, "uil", "uil-scenery", "nav__icon"], ["href", "#contact", 1, "nav__link", 3, "click"], [1, "uil", "uil-envelope", "nav__icon"], ["id", "nav-close", 1, "uil", "uil-times", "nav__close", 3, "click"], [1, "nav__btns"], ["id", "theme-button", 1, "uil", "uil-moon", "change-theme", 3, "click"], ["id", "nav-toggle", 1, "nav__toggle"], [1, "uil", "uil-apps", 3, "click"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Brandon Mart\xEDnez");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_7_listener() {
              return ctx.HideMenu();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Home ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_11_listener() {
              return ctx.HideMenu();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " About ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_15_listener() {
              return ctx.HideMenu();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Skills ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_19_listener() {
              return ctx.HideMenu();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Portfolio ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_23_listener() {
              return ctx.HideMenu();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Contact ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "i", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_i_click_26_listener() {
              return ctx.HideMenu();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_i_click_28_listener() {
              return ctx.DarkMode();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "i", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_i_click_30_listener() {
              return ctx.ShowMenu();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".header[_ngcontent-%COMP%]{\r\n    width: 100vw;\r\n    position: fixed;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 100;\r\n    background: var(--body-color);\r\n    transition: .2s;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]{\r\n    max-width: 768px;\r\n    margin-left: 1.5rem;\r\n    margin-right: 1.5rem;\r\n}\r\n\r\n.nav[_ngcontent-%COMP%]{\r\n  max-width: 968px;\r\n  height: var(--header-height);\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.nav__logo[_ngcontent-%COMP%], .nav__toggle[_ngcontent-%COMP%]{\r\n  color: var(--title-color);\r\n  font-weight: var(--font-medium);\r\n}\r\n\r\n.nav__logo[_ngcontent-%COMP%]:hover{\r\n  color: var(--primary-color);\r\n}\r\n\r\n.nav__toggle[_ngcontent-%COMP%]{\r\n  font-size: 1.1rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.nav__toggle[_ngcontent-%COMP%]:hover{\r\n  color: var(--primary-color);\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n\r\n    .nav__menu[_ngcontent-%COMP%]{\r\n        position: fixed;\r\n        bottom: -100%;\r\n        left: 0;\r\n        width: 100%;\r\n        background: var(--body-color);\r\n        padding: 2rem 1.5rem 4rem;\r\n        box-shadow: 0 -1px 4px rgba(0, 0, 0, .15);\r\n        border-radius: 1.5rem 1.5rem 0 0;\r\n        transition: .3s;\r\n    }\r\n\r\n}\r\n\r\n.nav__link[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    font-size: var(--small-font-size);\r\n    color: var(--title-color);\r\n    font-weight: var(--font-medium);\r\n}\r\n\r\n.nav__list[_ngcontent-%COMP%]{\r\n    grid-template-columns: repeat (3, 1fr);\r\n    gap: 2rem;\r\n}\r\n\r\n.nav__link[_ngcontent-%COMP%]:hover{\r\n    color: var(--primary-color);\r\n}\r\n\r\n.nav__icon[_ngcontent-%COMP%]{\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.nav__close[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    right: 1.3rem;\r\n    bottom: .5rem;\r\n    font-size: 1.5rem;\r\n    cursor: pointer;\r\n    color: var(--primary-color);\r\n}\r\n\r\n.nav__close[_ngcontent-%COMP%]:hover{\r\n    color: var(--primary-alt-color);\r\n}\r\n\r\n.show-menu[_ngcontent-%COMP%]{\r\n    bottom: 0;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n  width: 35px;\r\n  height: 35px;\r\n  border: none;\r\n  background: rgba(0, 0, 0, .0);\r\n  cursor: pointer;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.nav__btns[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.change-theme[_ngcontent-%COMP%]{\r\n  font-size: 1.25rem;\r\n  color: var(--title-color);\r\n  margin-right: 1rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.change-theme[_ngcontent-%COMP%]:hover{\r\n  color: var(--primary-color);\r\n}\r\n\r\n@media screen and (max-width: 350px){\r\n  .nav__menu[_ngcontent-%COMP%]{\r\n    padding: 2rem .25rem;\r\n  }\r\n  .nav__list[_ngcontent-%COMP%]{\r\n    -moz-columns: gap 0;\r\n         columns: gap 0;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 768px){\r\n  .header[_ngcontent-%COMP%]{\r\n    top: 0;\r\n    bottom: initial;\r\n    padding: 0 1rem;\r\n  }\r\n  .nav[_ngcontent-%COMP%]{\r\n    height: calc(var(--header-height) + 1.5rem);\r\n    -moz-column-gap: 1rem;\r\n         column-gap: 1rem;\r\n  }\r\n  .nav__icon[_ngcontent-%COMP%], .nav__close[_ngcontent-%COMP%], .nav__toggle[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n  .nav__list[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    -moz-column-gap: 2rem;\r\n         column-gap: 2rem;\r\n  }\r\n  .nav__menu[_ngcontent-%COMP%]{\r\n    margin-left: auto;\r\n  }\r\n\r\n  .change-theme[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 768px){\r\n  .container[_ngcontent-%COMP%]{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixTQUFTO0lBQ1QsT0FBTztJQUNQLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsb0JBQW9CO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtFQUM1QixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSx5QkFBeUI7RUFDekIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBR0E7O0lBRUk7UUFDSSxlQUFlO1FBQ2YsYUFBYTtRQUNiLE9BQU87UUFDUCxXQUFXO1FBQ1gsNkJBQTZCO1FBQzdCLHlCQUF5QjtRQUN6Qix5Q0FBeUM7UUFDekMsZ0NBQWdDO1FBQ2hDLGVBQWU7SUFDbkI7O0FBRUo7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixpQ0FBaUM7SUFDakMseUJBQXlCO0lBQ3pCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLHNDQUFzQztJQUN0QyxTQUFTO0FBQ2I7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRTtJQUNFLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsbUJBQWM7U0FBZCxjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLE1BQU07SUFDTixlQUFlO0lBQ2YsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsMkNBQTJDO0lBQzNDLHFCQUFnQjtTQUFoQixnQkFBZ0I7RUFDbEI7RUFDQTs7O0lBR0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxhQUFhO0lBQ2IscUJBQWdCO1NBQWhCLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsU0FBUztFQUNYO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7O0FBRUYiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVye1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJvZHktY29sb3IpO1xyXG4gICAgdHJhbnNpdGlvbjogLjJzO1xyXG59XHJcblxyXG4uY29udGFpbmVye1xyXG4gICAgbWF4LXdpZHRoOiA3NjhweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxLjVyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcclxufVxyXG5cclxuLm5hdntcclxuICBtYXgtd2lkdGg6IDk2OHB4O1xyXG4gIGhlaWdodDogdmFyKC0taGVhZGVyLWhlaWdodCk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm5hdl9fbG9nbyxcclxuLm5hdl9fdG9nZ2xle1xyXG4gIGNvbG9yOiB2YXIoLS10aXRsZS1jb2xvcik7XHJcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtbWVkaXVtKTtcclxufVxyXG5cclxuLm5hdl9fbG9nbzpob3ZlcntcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbn1cclxuXHJcbi5uYXZfX3RvZ2dsZXtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5uYXZfX3RvZ2dsZTpob3ZlcntcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG5cclxuICAgIC5uYXZfX21lbnV7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIGJvdHRvbTogLTEwMCU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ib2R5LWNvbG9yKTtcclxuICAgICAgICBwYWRkaW5nOiAycmVtIDEuNXJlbSA0cmVtO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgLTFweCA0cHggcmdiYSgwLCAwLCAwLCAuMTUpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEuNXJlbSAxLjVyZW0gMCAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246IC4zcztcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5uYXZfX2xpbmt7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IHZhcigtLXNtYWxsLWZvbnQtc2l6ZSk7XHJcbiAgICBjb2xvcjogdmFyKC0tdGl0bGUtY29sb3IpO1xyXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtbWVkaXVtKTtcclxufVxyXG5cclxuLm5hdl9fbGlzdHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0ICgzLCAxZnIpO1xyXG4gICAgZ2FwOiAycmVtO1xyXG59XHJcblxyXG4ubmF2X19saW5rOmhvdmVye1xyXG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG59XHJcblxyXG4ubmF2X19pY29ue1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuXHJcbi5uYXZfX2Nsb3Nle1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEuM3JlbTtcclxuICAgIGJvdHRvbTogLjVyZW07XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxufVxyXG5cclxuLm5hdl9fY2xvc2U6aG92ZXJ7XHJcbiAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1hbHQtY29sb3IpO1xyXG59XHJcblxyXG4uc2hvdy1tZW51e1xyXG4gICAgYm90dG9tOiAwO1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC4wKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbn1cclxuXHJcbi5uYXZfX2J0bnN7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY2hhbmdlLXRoZW1le1xyXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICBjb2xvcjogdmFyKC0tdGl0bGUtY29sb3IpO1xyXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jaGFuZ2UtdGhlbWU6aG92ZXJ7XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTBweCl7XHJcbiAgLm5hdl9fbWVudXtcclxuICAgIHBhZGRpbmc6IDJyZW0gLjI1cmVtO1xyXG4gIH1cclxuICAubmF2X19saXN0e1xyXG4gICAgY29sdW1uczogZ2FwIDA7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCl7XHJcbiAgLmhlYWRlcntcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogaW5pdGlhbDtcclxuICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICB9XHJcbiAgLm5hdntcclxuICAgIGhlaWdodDogY2FsYyh2YXIoLS1oZWFkZXItaGVpZ2h0KSArIDEuNXJlbSk7XHJcbiAgICBjb2x1bW4tZ2FwOiAxcmVtO1xyXG4gIH1cclxuICAubmF2X19pY29uLFxyXG4gIC5uYXZfX2Nsb3NlLFxyXG4gIC5uYXZfX3RvZ2dsZXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5uYXZfX2xpc3R7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgY29sdW1uLWdhcDogMnJlbTtcclxuICB9XHJcbiAgLm5hdl9fbWVudXtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmNoYW5nZS10aGVtZXtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcclxuICAuY29udGFpbmVye1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "fGbd":
    /*!********************************************!*\
      !*** ./src/app/skills/skills.component.ts ***!
      \********************************************/

    /*! exports provided: SkillsComponent */

    /***/
    function fGbd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SkillsComponent", function () {
        return SkillsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SkillsComponent = /*#__PURE__*/function () {
        function SkillsComponent() {
          _classCallCheck(this, SkillsComponent);
        }

        _createClass(SkillsComponent, [{
          key: "ToggleSkills",
          value: function ToggleSkills(event) {
            var e = event.target;

            while (!e.classList.contains('skills__content')) {
              e = e.parentElement;
            }

            if (e.classList.contains('skills__open')) {
              e.classList.remove('skills__open');
              e.classList.add('skills__close');
            } else {
              e.classList.remove('skills__close');
              e.classList.add('skills__open');
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SkillsComponent;
      }();

      SkillsComponent.ɵfac = function SkillsComponent_Factory(t) {
        return new (t || SkillsComponent)();
      };

      SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SkillsComponent,
        selectors: [["app-skills"]],
        decls: 90,
        vars: 0,
        consts: [["id", "skills", 1, "skills", "section"], [1, "section__title"], [1, "section__subtitle"], [1, "skills__container", "container", "grid"], [1, "skills__content", "skills__open"], [1, "skills__header", 3, "click"], [1, "uil", "uil-brackets-curly", "skills__icon"], [1, "skills__text"], [1, "skills__title"], [1, "skills__subtitle"], [1, "uil", "uil-angle-down", "skills__arrow"], [1, "skills__list", "grid"], [1, "skills__data"], [1, "skills__titles"], [1, "skills__name"], [1, "skills__number"], [1, "skills__bar"], [1, "skills__percentage", "skills__html"], [1, "skills__percentage", "skills__css"], [1, "skills__percentage", "skills__js-ts"], [1, "skills__percentage", "skills__angular"], [1, "skills__content", "skills__close"], [1, "uil", "uil-database", "skills__icon"], [1, "skills__percentage", "skills__nodejs"], [1, "skills__percentage", "skills__java"], [1, "skills__percentage", "skills__sql"], [1, "skills__percentage", "skills__mongo"]],
        template: function SkillsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Skills");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "My technical level");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillsComponent_Template_div_click_7_listener($event) {
              return ctx.ToggleSkills($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Frontend Developer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "More than 2 years");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "HTML");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "90%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "span", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "CSS");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "70%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "JavaScript / TypeScript");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "80%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Angular");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "80%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillsComponent_Template_div_click_49_listener($event) {
              return ctx.ToggleSkills($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h1", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Backend Developer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "More than 6 years");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h3", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Java Spring");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "80%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "span", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h3", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "JNodejs (JS / TS)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "60%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "span", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h3", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "PL/SQL");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "80%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "span", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "h3", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "MongoDB");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "90%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "span", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".skills__container[_ngcontent-%COMP%]{\r\n  row-gap: 0;\r\n\r\n}\r\n\r\n.skills__content[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n}\r\n\r\n.skills__header[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  align-items: center;\r\n  margin-bottom: 1rem;\r\n  margin-top: 1rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.skills__list[_ngcontent-%COMP%]{\r\n  margin-bottom: 1rem;\r\n  transition: .5s;\r\n}\r\n\r\n.skills__icon[_ngcontent-%COMP%], .skills__arrow[_ngcontent-%COMP%]{\r\n  font-size: 2rem;\r\n  color: var(--primary-color);\r\n}\r\n\r\n.skills_icon[_ngcontent-%COMP%]{\r\n  margin-right: .75rem;\r\n}\r\n\r\n.skills__title[_ngcontent-%COMP%]{\r\n  font-size: var(--h3-font-size);\r\n}\r\n\r\n.skills__subtitle[_ngcontent-%COMP%]{\r\n  font-size: var(--small-font-size);\r\n  color: var(--title-color-light);\r\n}\r\n\r\n.skills__arrow[_ngcontent-%COMP%]{\r\n  margin-left: auto;\r\n  transition: .4s;\r\n}\r\n\r\n.skills__text[_ngcontent-%COMP%]{\r\n  margin-left: .75rem;\r\n}\r\n\r\n.skills__titles[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-bottom: .5rem;\r\n}\r\n\r\n.skills__name[_ngcontent-%COMP%]{\r\n  font-size: var(--normal-font-size);\r\n  font-weight: var(--font-medium);\r\n}\r\n\r\n.skills__bar[_ngcontent-%COMP%], .skills__percentage[_ngcontent-%COMP%]{\r\n  height: 5px;\r\n  border-radius: .25rem;\r\n}\r\n\r\n.skills__bar[_ngcontent-%COMP%]{\r\n  background: var(--primary-color-light);\r\n}\r\n\r\n.skills__percentage[_ngcontent-%COMP%]{\r\n  display: block;\r\n  background: var(--primary-color);\r\n}\r\n\r\n.skills__html[_ngcontent-%COMP%], .skills__mongo[_ngcontent-%COMP%]{\r\n  width: 90%;\r\n}\r\n\r\n.skills__css[_ngcontent-%COMP%]{\r\n  width: 70%;\r\n}\r\n\r\n.skills__js-ts[_ngcontent-%COMP%], .skills__angular[_ngcontent-%COMP%], .skills__nodejs[_ngcontent-%COMP%], .skills__sql[_ngcontent-%COMP%]{\r\n  width: 80%;\r\n}\r\n\r\n.skills__java[_ngcontent-%COMP%]{\r\n  width: 60%;\r\n}\r\n\r\n@media screen and (max-width: 350px){\r\n  .skills__title[_ngcontent-%COMP%]{\r\n    font-size: var(--normal-font-size);\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 700px){\r\n  .skills__container[_ngcontent-%COMP%]{\r\n    justify-content: center;\r\n  }\r\n\r\n  .skills__content[_ngcontent-%COMP%]{\r\n    width: 600px;\r\n  }\r\n\r\n}\r\n\r\n@media screen and (max-width: 1400px){\r\n  .skills__close[_ngcontent-%COMP%]   .skills__list[_ngcontent-%COMP%]{\r\n    height: 0;\r\n    overflow: hidden;\r\n  }\r\n\r\n  .skills__open[_ngcontent-%COMP%]   .skills__list[_ngcontent-%COMP%]{\r\n    height: -webkit-max-content;\r\n    height: -moz-max-content;\r\n    height: max-content;\r\n  }\r\n\r\n  .skills__open[_ngcontent-%COMP%]   .skills__arrow[_ngcontent-%COMP%]{\r\n    transform: rotate(-180deg);\r\n  }\r\n\r\n}\r\n\r\n@media screen and (min-width: 1400px){\r\n  .container[_ngcontent-%COMP%]{\r\n    grid-template-columns: 600px 600px;\r\n    -moz-column-gap: 1rem;\r\n         column-gap: 1rem;\r\n  }\r\n  .skills__arrow[_ngcontent-%COMP%]{\r\n    visibility: hidden;\r\n  }\r\n  .skills__header[_ngcontent-%COMP%]{\r\n    cursor: initial;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2tpbGxzL3NraWxscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFVBQVU7O0FBRVo7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLGVBQWU7RUFDZiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQywrQkFBK0I7QUFDakM7O0FBRUE7O0VBRUUsV0FBVztFQUNYLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQ0FBZ0M7QUFDbEM7O0FBRUE7O0VBRUUsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBOzs7O0VBSUUsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUdBO0VBQ0U7SUFDRSxrQ0FBa0M7RUFDcEM7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsWUFBWTtFQUNkOztBQUVGOztBQUVBO0VBQ0U7SUFDRSxTQUFTO0lBQ1QsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0FBRUY7O0FBR0E7RUFDRTtJQUNFLGtDQUFrQztJQUNsQyxxQkFBZ0I7U0FBaEIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NraWxscy9za2lsbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uc2tpbGxzX19jb250YWluZXJ7XHJcbiAgcm93LWdhcDogMDtcclxuXHJcbn1cclxuXHJcbi5za2lsbHNfX2NvbnRlbnR7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5za2lsbHNfX2hlYWRlcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnNraWxsc19fbGlzdHtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIHRyYW5zaXRpb246IC41cztcclxufVxyXG5cclxuLnNraWxsc19faWNvbixcclxuLnNraWxsc19fYXJyb3d7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxufVxyXG5cclxuLnNraWxsc19pY29ue1xyXG4gIG1hcmdpbi1yaWdodDogLjc1cmVtO1xyXG59XHJcblxyXG4uc2tpbGxzX190aXRsZXtcclxuICBmb250LXNpemU6IHZhcigtLWgzLWZvbnQtc2l6ZSk7XHJcbn1cclxuXHJcbi5za2lsbHNfX3N1YnRpdGxle1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0tc21hbGwtZm9udC1zaXplKTtcclxuICBjb2xvcjogdmFyKC0tdGl0bGUtY29sb3ItbGlnaHQpO1xyXG59XHJcblxyXG4uc2tpbGxzX19hcnJvd3tcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICB0cmFuc2l0aW9uOiAuNHM7XHJcbn1cclxuXHJcbi5za2lsbHNfX3RleHR7XHJcbiAgbWFyZ2luLWxlZnQ6IC43NXJlbTtcclxufVxyXG5cclxuLnNraWxsc19fdGl0bGVze1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xyXG59XHJcblxyXG4uc2tpbGxzX19uYW1le1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0tbm9ybWFsLWZvbnQtc2l6ZSk7XHJcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtbWVkaXVtKTtcclxufVxyXG5cclxuLnNraWxsc19fYmFyLFxyXG4uc2tpbGxzX19wZXJjZW50YWdle1xyXG4gIGhlaWdodDogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxufVxyXG5cclxuLnNraWxsc19fYmFye1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3ItbGlnaHQpO1xyXG59XHJcblxyXG4uc2tpbGxzX19wZXJjZW50YWdle1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG59XHJcblxyXG4uc2tpbGxzX19odG1sLFxyXG4uc2tpbGxzX19tb25nb3tcclxuICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4uc2tpbGxzX19jc3N7XHJcbiAgd2lkdGg6IDcwJTtcclxufVxyXG5cclxuLnNraWxsc19fanMtdHMsXHJcbi5za2lsbHNfX2FuZ3VsYXIsXHJcbi5za2lsbHNfX25vZGVqcyxcclxuLnNraWxsc19fc3Fse1xyXG4gIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi5za2lsbHNfX2phdmF7XHJcbiAgd2lkdGg6IDYwJTtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM1MHB4KXtcclxuICAuc2tpbGxzX190aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tbm9ybWFsLWZvbnQtc2l6ZSk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MDBweCl7XHJcbiAgLnNraWxsc19fY29udGFpbmVye1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuc2tpbGxzX19jb250ZW50e1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MDBweCl7XHJcbiAgLnNraWxsc19fY2xvc2UgLnNraWxsc19fbGlzdHtcclxuICAgIGhlaWdodDogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAuc2tpbGxzX19vcGVuIC5za2lsbHNfX2xpc3R7XHJcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gIH1cclxuXHJcbiAgLnNraWxsc19fb3BlbiAuc2tpbGxzX19hcnJvd3tcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xODBkZWcpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDAwcHgpe1xyXG4gIC5jb250YWluZXJ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwMHB4IDYwMHB4O1xyXG4gICAgY29sdW1uLWdhcDogMXJlbTtcclxuICB9XHJcbiAgLnNraWxsc19fYXJyb3d7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG4gIC5za2lsbHNfX2hlYWRlcntcclxuICAgIGN1cnNvcjogaW5pdGlhbDtcclxuICB9XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-skills',
            templateUrl: './skills.component.html',
            styleUrls: ['./skills.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    },

    /***/
    "zyDg":
    /*!**************************************************!*\
      !*** ./src/app/portfolio/portfolio.component.ts ***!
      \**************************************************/

    /*! exports provided: PortfolioComponent */

    /***/
    function zyDg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function () {
        return PortfolioComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var PortfolioComponent = /*#__PURE__*/function () {
        function PortfolioComponent() {
          _classCallCheck(this, PortfolioComponent);
        }

        _createClass(PortfolioComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PortfolioComponent;
      }();

      PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) {
        return new (t || PortfolioComponent)();
      };

      PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PortfolioComponent,
        selectors: [["app-portfolio"]],
        decls: 26,
        vars: 0,
        consts: [["id", "portfolio", 1, "portfolio", "section"], [1, "section__title"], [1, "section__subtitle"], [1, "portfolio__container", "container", "grid"], [1, "portfolio__card"], [1, "card__img"], ["src", "assets/img/Social.png", "alt", ""], [1, "card__content"], ["href", "https://play.google.com/store/apps/details?id=co.com.porvenir.appmobile&hl=es_CO&gl=US"], ["src", "assets/img/Portfolio.png", "alt", ""], ["href", "https://brandonmartinez-jar.github.io/"]],
        template: function PortfolioComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Portfolio");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Most recent work");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Provenir App Mobile");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "This is a financial application for managing savings required by law in Colombia");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Demo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Portfolio");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "This is my personal portfolio, with a good design and a darkmode button");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Demo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".container[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n}\r\n.portfolio__card[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  min-width: 400px;\r\n  min-height: 250px;\r\n  max-width: 400px;\r\n  max-height: 250px;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  background: var(--body-color);\r\n  border-radius: 20px;\r\n  overflow: hidden;\r\n  transition: .2s;\r\n}\r\n.card__content[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 70px;\r\n  text-align: center;\r\n  transition: .3s;\r\n  padding-top: 30px;\r\n  border-radius: 15px;\r\n  z-index: 10;\r\n}\r\n.card__content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  visibility: hidden;\r\n  padding: .5rem 1rem;\r\n  margin-bottom: 10px;\r\n}\r\n.card__content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  color: #fff;\r\n  padding: 10px 20px;\r\n  background: var(--primary-color);\r\n  border-radius: 10px;\r\n}\r\n.card__content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n  background: var(--primary-alt-color);\r\n}\r\n.portfolio__img[_ngcontent-%COMP%]{\r\n  width: 400px;\r\n  height: 250px;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  transition: .5s;\r\n}\r\n.portfolio__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  height: 100%;\r\n  -o-object-fit:contain;\r\n     object-fit:contain;\r\n  transition: .5s;\r\n}\r\n.portfolio__card[_ngcontent-%COMP%]:hover   .card__content[_ngcontent-%COMP%]{\r\n  height: 100%;\r\n  background: var(--body-color);\r\n}\r\n.portfolio__card[_ngcontent-%COMP%]:hover   .card__content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  visibility: visible;\r\n}\r\n.card__content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n  position: relative;\r\n  font-weight: var(--font-semi-bold);\r\n  letter-spacing: 1px;\r\n\r\n}\r\n@media screen and (max-width: 350px){\r\n  .portfolio__card[_ngcontent-%COMP%]{\r\n    min-width: 300px;\r\n    min-height: 187.5px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsV0FBVztBQUNiO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHFCQUFrQjtLQUFsQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsa0NBQWtDO0VBQ2xDLG1CQUFtQjs7QUFFckI7QUFFQTtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcbi5wb3J0Zm9saW9fX2NhcmR7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1pbi13aWR0aDogNDAwcHg7XHJcbiAgbWluLWhlaWdodDogMjUwcHg7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICBtYXgtaGVpZ2h0OiAyNTBweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ib2R5LWNvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogLjJzO1xyXG59XHJcbi5jYXJkX19jb250ZW50e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiAuM3M7XHJcbiAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG4uY2FyZF9fY29udGVudCBwe1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmNhcmRfX2NvbnRlbnQgYXtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4uY2FyZF9fY29udGVudCBhOmhvdmVye1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktYWx0LWNvbG9yKTtcclxufVxyXG4ucG9ydGZvbGlvX19pbWd7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgdHJhbnNpdGlvbjogLjVzO1xyXG59XHJcbi5wb3J0Zm9saW9fX2ltZyBpbWd7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG9iamVjdC1maXQ6Y29udGFpbjtcclxuICB0cmFuc2l0aW9uOiAuNXM7XHJcbn1cclxuLnBvcnRmb2xpb19fY2FyZDpob3ZlciAuY2FyZF9fY29udGVudHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYm9keS1jb2xvcik7XHJcbn1cclxuLnBvcnRmb2xpb19fY2FyZDpob3ZlciAuY2FyZF9fY29udGVudCBwe1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuLmNhcmRfX2NvbnRlbnQgaDJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXNlbWktYm9sZCk7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM1MHB4KXtcclxuICAucG9ydGZvbGlvX19jYXJke1xyXG4gICAgbWluLXdpZHRoOiAzMDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDE4Ny41cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-portfolio',
            templateUrl: './portfolio.component.html',
            styleUrls: ['./portfolio.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map