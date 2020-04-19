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
    className: "jsx-3548640716",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, "This is the New game Page"), __jsx("form", {
    onSubmit: onSubmit,
    className: "jsx-3548640716",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("label", {
    className: "jsx-3548640716",
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
    className: "jsx-3548640716",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, __jsx("option", {
    value: "2",
    className: "jsx-3548640716",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, "2"), __jsx("option", {
    value: "3",
    className: "jsx-3548640716",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, "3"), __jsx("option", {
    value: "4",
    className: "jsx-3548640716",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, "4")), __jsx("input", {
    value: name,
    onChange: function onChange(e) {
      return setName(e.target.value);
    },
    placeholder: "Your nickname o Nombre",
    type: "text",
    required: true,
    className: "jsx-3548640716",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  })), __jsx("input", {
    type: "submit",
    value: "Aceptar",
    className: "jsx-3548640716",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3548640716",
    __self: this
  }, "body.jsx-3548640716{font-family:sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;text-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}select.jsx-3548640716{position:relative;display:block;width:100%;margin:0 auto;font-family:\"Open Sans\",\"Helvetica Neue\",\"Segoe UI\",\"Calibri\", \"Arial\",sans-serif;font-size:18px;color:#60666d;}input.jsx-3548640716{display:block;min-width:90%;margin:1em;padding:1em;width:35em;border-radius:8px;border-style:none;border:1px solid #e4e6e8;-webkit-transition:0.1s ease;transition:0.1s ease;}input.jsx-3548640716:hover{border-color:palevioletred;}button.jsx-3548640716{margin:0.8em;padding:1em;border:1px solid #e4e6e8;border-radius:5px;cursor:pointer;-webkit-transition:0.1s ease-in;transition:0.1s ease-in;}button.jsx-3548640716:hover{background-color:palevioletred;color:white;}h1.jsx-3548640716,a.jsx-3548640716{font-family:\"Arial\";}ul.jsx-3548640716{padding:0;}li.jsx-3548640716{list-style:none;margin:5px 0;}a.jsx-3548640716{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-3548640716:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmljaGkvRGVza3RvcC9HcmkvcmVhY3QvdW5vLWdhbWUvcGFnZXMvbmV3Z2FtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ2tCLEFBR2tDLEFBT0wsQUFVSixBQVdhLEFBR2QsQUFRa0IsQUFNWCxBQUdWLEFBR00sQUFJSyxBQUlULFVBVmQsRUFXQSxDQTVCYyxDQWRFLEVBa0NELEVBNUNDLEVBc0NoQixHQTdDZSxFQWdDWSxFQUozQixDQVZhLENBa0NiLEVBYmMsQ0EvQkQsT0FXQyxJQVZFLEFBK0JoQixPQVBvQixBQXNCUCxDQW5DQSxNQVRVLElBNkN2QixDQW5Db0IsTUFhSCxZQVpHLEdBYU0sY0FsQ04sQ0FzQk8saUJBckJOLFFBc0JFLGdCQVpOLEFBd0JqQixlQXZCZ0IsY0FDaEIsS0FXQSxtQ0F0QndCLDhFQUN4QiIsImZpbGUiOiIvVXNlcnMvZ3JpY2hpL0Rlc2t0b3AvR3JpL3JlYWN0L3Vuby1nYW1lL3BhZ2VzL25ld2dhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL015TGF5b3V0LmpzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3R2FtZSgpIHtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShcIjJcIik7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBvblN1Ym1pdCA9IChldmVudCkgPT4ge1xuICAgIGFsZXJ0KFxuICAgICAgXCJMYSBjYW50aWRhZCBkZSBqdWdhZG9yZXMgZXM6IFwiICsgdmFsdWUgKyBcIlxcblwiICsgXCJUdSBqdWdhZG9yIGVzOiBcIiArIG5hbWVcbiAgICApO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPHA+VGhpcyBpcyB0aGUgTmV3IGdhbWUgUGFnZTwvcD5cblxuICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIEN1YW50b3MganVnYWRvcmVzIHZhbiBhIGp1Z2FyOlxuICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17KGUpID0+IHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKX0+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMlwiPjI8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIzXCI+Mzwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjRcIj40PC9vcHRpb24+XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgbmlja25hbWUgbyBOb21icmVcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQWNlcHRhclwiIC8+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgICBzZWxlY3Qge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBcIlNlZ29lIFVJXCIsIFwiQ2FsaWJyaVwiLFxuICAgICAgICAgICAgXCJBcmlhbFwiLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICBjb2xvcjogIzYwNjY2ZDtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWluLXdpZHRoOiA5MCU7XG4gICAgICAgICAgbWFyZ2luOiAxZW07XG4gICAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICAgIHdpZHRoOiAzNWVtO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICBib3JkZXItc3R5bGU6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U0ZTZlODtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjFzIGVhc2U7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQ6aG92ZXIge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogcGFsZXZpb2xldHJlZDtcbiAgICAgICAgfVxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgIG1hcmdpbjogMC44ZW07XG4gICAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNGU2ZTg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjFzIGVhc2UtaW47XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwYWxldmlvbGV0cmVkO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGgxLFxuICAgICAgICBhIHtcbiAgICAgICAgICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xuICAgICAgICB9XG4gICAgICAgIHVsIHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG4gICAgICAgIGxpIHtcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAgIH1cbiAgICAgICAgYSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICB9XG4gICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/grichi/Desktop/Gri/react/uno-game/pages/newgame.js */"));
}

/***/ })

})
//# sourceMappingURL=newgame.js.3dcb3c7863f7676cc880.hot-update.js.map