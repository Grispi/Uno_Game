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
    className: "jsx-3493248384",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, "This is the New game Page"), __jsx("form", {
    onSubmit: onSubmit,
    className: "jsx-3493248384",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("label", {
    className: "jsx-3493248384",
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
    className: "jsx-3493248384",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, __jsx("option", {
    value: "2",
    className: "jsx-3493248384",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, "2"), __jsx("option", {
    value: "3",
    className: "jsx-3493248384",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, "3"), __jsx("option", {
    value: "4",
    className: "jsx-3493248384",
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
    className: "jsx-3493248384",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  })), __jsx("input", {
    type: "submit",
    value: "Aceptar",
    className: "jsx-3493248384",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3493248384",
    __self: this
  }, "form.jsx-3493248384{font-family:sans-serif;font-size:18px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;text-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}select.jsx-3493248384{display:block;min-width:90%;font-size:15px;margin:1em;padding:1em;width:35em;border-radius:8px;border-style:none;border:1px solid #e4e6e8;color-background:white;}input.jsx-3493248384{display:block;min-width:90%;margin:1em;padding:1em;width:35em;border-radius:8px;border-style:none;border:1px solid #e4e6e8;-webkit-transition:0.1s ease;transition:0.1s ease;}input.jsx-3493248384:hover{border-color:palevioletred;}button.jsx-3493248384{display:block;margin:1em;min-width:90%;padding:1em;width:35em;border:1px solid #e4e6e8;border-radius:5px;cursor:pointer;-webkit-transition:0.1s ease-in;transition:0.1s ease-in;}button.jsx-3493248384:hover{background-color:palevioletred;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmljaGkvRGVza3RvcC9HcmkvcmVhY3QvdW5vLWdhbWUvcGFnZXMvbmV3Z2FtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ2tCLEFBR2tDLEFBUVQsQUFZQSxBQVdhLEFBR2IsQUFXaUIsY0FwQ2pCLEFBWUEsQUFjSCxTQWxDSSxFQW1DRCxFQUpoQixDQXRCaUIsQUFZSixHQXdCQyxPQTVDQyxDQXFCRCxBQWNBLElBMUJELEFBb0NiLFFBdkJhLEFBY0EsR0ExQkMsUUFhTSxBQWNPLElBMUJkLFdBQ08sR0FZQSxPQWNBLFFBekJBLEdBWU8sT0FjVixPQXRDRyxDQWFPLE9BMEJELEdBZEgsT0F4QkYsUUFhSSx1QkFDekIsWUFXQSxHQWNBLCtDQXRDd0IsOEVBQ3hCIiwiZmlsZSI6Ii9Vc2Vycy9ncmljaGkvRGVza3RvcC9HcmkvcmVhY3QvdW5vLWdhbWUvcGFnZXMvbmV3Z2FtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanNcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdHYW1lKCkge1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKFwiMlwiKTtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IG9uU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgYWxlcnQoXG4gICAgICBcIkxhIGNhbnRpZGFkIGRlIGp1Z2Fkb3JlcyBlczogXCIgKyB2YWx1ZSArIFwiXFxuXCIgKyBcIlR1IGp1Z2Fkb3IgZXM6IFwiICsgbmFtZVxuICAgICk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8cD5UaGlzIGlzIHRoZSBOZXcgZ2FtZSBQYWdlPC9wPlxuXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgQ3VhbnRvcyBqdWdhZG9yZXMgdmFuIGEganVnYXI6XG4gICAgICAgICAgPHNlbGVjdCB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpfT5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+Mjwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj4zPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNFwiPjQ8L29wdGlvbj5cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBuaWNrbmFtZSBvIE5vbWJyZVwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJBY2VwdGFyXCIgLz5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgZm9ybSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgICBzZWxlY3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1pbi13aWR0aDogOTAlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICBtYXJnaW46IDFlbTtcbiAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgICAgd2lkdGg6IDM1ZW07XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTRlNmU4O1xuICAgICAgICAgIGNvbG9yLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtaW4td2lkdGg6IDkwJTtcbiAgICAgICAgICBtYXJnaW46IDFlbTtcbiAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgICAgd2lkdGg6IDM1ZW07XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTRlNmU4O1xuICAgICAgICAgIHRyYW5zaXRpb246IDAuMXMgZWFzZTtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dDpob3ZlciB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiBwYWxldmlvbGV0cmVkO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWFyZ2luOiAxZW07XG4gICAgICAgICAgbWluLXdpZHRoOiA5MCU7XG4gICAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICAgIHdpZHRoOiAzNWVtO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNGU2ZTg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjFzIGVhc2UtaW47XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwYWxldmlvbGV0cmVkO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/grichi/Desktop/Gri/react/uno-game/pages/newgame.js */"));
}

/***/ })

})
//# sourceMappingURL=newgame.js.c1527693b92411da3154.hot-update.js.map