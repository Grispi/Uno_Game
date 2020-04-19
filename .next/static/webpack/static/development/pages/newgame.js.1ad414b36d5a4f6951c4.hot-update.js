webpackHotUpdate("static/development/pages/newgame.js",{

/***/ "./pages/newgame.js":
/*!**************************!*\
  !*** ./pages/newgame.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewGame; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/grichi/Desktop/Gri/react/uno-game/pages/newgame.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


function NewGame() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("2"),
      value = _useState[0],
      setValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      name = _useState2[0],
      setName = _useState2[1];

  var onSubmit = function onSubmit(event) {
    alert("La cantidad de jugadores es: " + value + "\n" + "Tu jugador es: " + name);
    event.preventDefault();
  };

  return __jsx(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx("p", {
    className: "jsx-1846871213",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, "This is the New game Page"), __jsx("form", {
    onSubmit: onSubmit,
    className: "jsx-1846871213",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("label", {
    className: "jsx-1846871213",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, "Cuantos jugadores van a jugar:", __jsx("select", {
    value: value,
    onChange: function onChange(e) {
      return setValue(e.target.value);
    },
    className: "jsx-1846871213",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, __jsx("option", {
    value: "2",
    className: "jsx-1846871213",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, "2"), __jsx("option", {
    value: "3",
    className: "jsx-1846871213",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, "3"), __jsx("option", {
    value: "4",
    className: "jsx-1846871213",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, "4"))), __jsx("label", {
    className: "jsx-1846871213",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, "Nombre o Nickname:", __jsx("input", {
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    placeholder: "Your nickname o Nombre",
    type: "text",
    required: true,
    className: "jsx-1846871213",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  })), __jsx("button", {
    type: "submit",
    className: "jsx-1846871213",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, "Aceptar")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1846871213",
    __self: this
  }, "form.jsx-1846871213{margin:1em;font-family:sans-serif;font-size:18px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;text-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}label.jsx-1846871213{text-align:left;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:500px;}select.jsx-1846871213{display:center;width:500px;font-size:20px;margin:1em 0;border-radius:8px;border-style:none;border:1px solid #e4e6e8;background-color:white;}input.jsx-1846871213{display:center;font-size:15px;margin:1em 0;width:500px;border-radius:8px;border-style:none;border:1px solid #e4e6e8;-webkit-transition:0.1s ease;transition:0.1s ease;}input.jsx-1846871213:hover{border-color:palevioletred;}button.jsx-1846871213{width:500px;margin:0.8em;padding:1em;border:1px solid #e4e6e8;border-radius:5px;cursor:pointer;-webkit-transition:0.1s ease-in;transition:0.1s ease-in;}button.jsx-1846871213:hover{background-color:palevioletred;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmljaGkvRGVza3RvcC9HcmkvcmVhY3QvdW5vLWdhbWUvcGFnZXMvbmV3Z2FtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQ2tCLEFBR3NCLEFBU0ssQUFLRCxBQVlBLEFBV1ksQUFHZixBQVNtQixXQWhEUixDQXdDVixHQTFCRCxBQVlHLENBakJJLFNBZ0NQLEVBMUJHLEFBc0JqQixHQVZlLENBc0JELEdBaERHLEdBeUNVLEtBMUJaLENBYUQsQUFxQmQsTUFoRGUsTUFnQkssQUFZQSxPQWFBLFdBeEJBLEFBWUEsT0FhSCxXQXhCVSxBQVlBLElBYUQsY0FuQ1osT0FXVyxBQVlGLEtBdEJ2QixFQVJvQixnQkFtQnBCLEVBbEJxQixVQTBDckIsZUFaQSxvRUE3QndCLDhFQUN4QiIsImZpbGUiOiIvVXNlcnMvZ3JpY2hpL0Rlc2t0b3AvR3JpL3JlYWN0L3Vuby1nYW1lL3BhZ2VzL25ld2dhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL015TGF5b3V0LmpzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3R2FtZSgpIHtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShcIjJcIik7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBvblN1Ym1pdCA9IChldmVudCkgPT4ge1xuICAgIGFsZXJ0KFxuICAgICAgXCJMYSBjYW50aWRhZCBkZSBqdWdhZG9yZXMgZXM6IFwiICsgdmFsdWUgKyBcIlxcblwiICsgXCJUdSBqdWdhZG9yIGVzOiBcIiArIG5hbWVcbiAgICApO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPHA+VGhpcyBpcyB0aGUgTmV3IGdhbWUgUGFnZTwvcD5cblxuICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIEN1YW50b3MganVnYWRvcmVzIHZhbiBhIGp1Z2FyOlxuICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17KGUpID0+IHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKX0+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPjI8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+Mzwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj40PC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICBOb21icmUgbyBOaWNrbmFtZTpcbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBuaWNrbmFtZSBvIE5vbWJyZVwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkFjZXB0YXI8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZm9ybSB7XG4gICAgICAgICAgbWFyZ2luOiAxZW07XG4gICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiA1MDBweDtcbiAgICAgICAgfVxuICAgICAgICBzZWxlY3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogNTAwcHg7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIG1hcmdpbjogMWVtIDA7XG5cbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNGU2ZTg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgZGlzcGxheTogY2VudGVyO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICBtYXJnaW46IDFlbSAwO1xuXG4gICAgICAgICAgd2lkdGg6IDUwMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICBib3JkZXItc3R5bGU6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U0ZTZlODtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjFzIGVhc2U7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQ6aG92ZXIge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogcGFsZXZpb2xldHJlZDtcbiAgICAgICAgfVxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIHdpZHRoOiA1MDBweDtcbiAgICAgICAgICBtYXJnaW46IDAuOGVtO1xuICAgICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTRlNmU4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLWluO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcGFsZXZpb2xldHJlZDtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/grichi/Desktop/Gri/react/uno-game/pages/newgame.js */"));
}

/***/ })

})
//# sourceMappingURL=newgame.js.1ad414b36d5a4f6951c4.hot-update.js.map