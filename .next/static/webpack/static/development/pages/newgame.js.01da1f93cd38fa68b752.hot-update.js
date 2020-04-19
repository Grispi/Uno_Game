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
    className: "jsx-1430854274",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, "This is the New game Page"), __jsx("form", {
    onSubmit: onSubmit,
    className: "jsx-1430854274",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("label", {
    className: "jsx-1430854274",
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
    className: "jsx-1430854274",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, __jsx("option", {
    value: "2",
    className: "jsx-1430854274",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, "2"), __jsx("option", {
    value: "3",
    className: "jsx-1430854274",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, "3"), __jsx("option", {
    value: "4",
    className: "jsx-1430854274",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, "4"))), __jsx("label", {
    className: "jsx-1430854274",
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
    className: "jsx-1430854274",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  })), __jsx("button", {
    type: "submit",
    className: "jsx-1430854274",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, "Aceptar")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1430854274",
    __self: this
  }, "form.jsx-1430854274{margin:1em;font-family:sans-serif;font-size:18px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;text-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}label.jsx-1430854274{text-align:left;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:500px;}select.jsx-1430854274{display:center;width:500px;font-size:20px;margin:1em 0;border-radius:8px;border-style:none;border:1px solid #e4e6e8;background-color:white;}input.jsx-1430854274{display:center;font-size:15px;margin:1em 0;padding:20px;width:500px;border-radius:8px;border-style:none;border:1px solid #e4e6e8;-webkit-transition:0.1s ease;transition:0.1s ease;}input.jsx-1430854274:hover{border-color:palevioletred;}button.jsx-1430854274{width:500px;margin:0.8em;padding:1em;border:1px solid #e4e6e8;border-radius:5px;cursor:pointer;-webkit-transition:0.1s ease-in;transition:0.1s ease-in;}button.jsx-1430854274:hover{background-color:palevioletred;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmljaGkvRGVza3RvcC9HcmkvcmVhY3QvdW5vLWdhbWUvcGFnZXMvbmV3Z2FtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQ2tCLEFBR3NCLEFBU0ssQUFLRCxBQVlBLEFBV1ksQUFHZixBQVNtQixXQWhEUixDQXdDVixHQTFCRCxBQVlHLENBakJJLFNBZ0NQLEVBMUJHLEFBc0JqQixHQVZlLENBc0JELEdBaERHLEdBeUNVLEtBMUJaLENBWUEsQUFzQmYsTUFoRGUsTUFnQkssQ0FXTixNQWNNLE1BYkEsS0FYQSxPQXlCSCxNQWJHLEtBWE8sSUF5QkQsU0FiQyxLQXRCYixPQVdXLEtBVnpCLEVBUm9CLE1BOEJHLFVBWHZCLEVBbEJxQixVQTBDckIsNEJBWkEsdURBN0J3Qiw4RUFDeEIiLCJmaWxlIjoiL1VzZXJzL2dyaWNoaS9EZXNrdG9wL0dyaS9yZWFjdC91bm8tZ2FtZS9wYWdlcy9uZXdnYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9NeUxheW91dC5qc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld0dhbWUoKSB7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoXCIyXCIpO1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3Qgb25TdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICBhbGVydChcbiAgICAgIFwiTGEgY2FudGlkYWQgZGUganVnYWRvcmVzIGVzOiBcIiArIHZhbHVlICsgXCJcXG5cIiArIFwiVHUganVnYWRvciBlczogXCIgKyBuYW1lXG4gICAgKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxwPlRoaXMgaXMgdGhlIE5ldyBnYW1lIFBhZ2U8L3A+XG5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICBDdWFudG9zIGp1Z2Fkb3JlcyB2YW4gYSBqdWdhcjpcbiAgICAgICAgICA8c2VsZWN0IHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9PlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj4yPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiM1wiPjM8L29wdGlvbj5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0XCI+NDwvb3B0aW9uPlxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgTm9tYnJlIG8gTmlja25hbWU6XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgbmlja25hbWUgbyBOb21icmVcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5BY2VwdGFyPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGZvcm0ge1xuICAgICAgICAgIG1hcmdpbjogMWVtO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogNTAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZWN0IHtcbiAgICAgICAgICBkaXNwbGF5OiBjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDUwMHB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBtYXJnaW46IDFlbSAwO1xuXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTRlNmU4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIGRpc3BsYXk6IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgbWFyZ2luOiAxZW0gMDtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgIHdpZHRoOiA1MDBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNGU2ZTg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4xcyBlYXNlO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0OmhvdmVyIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHBhbGV2aW9sZXRyZWQ7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICB3aWR0aDogNTAwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwLjhlbTtcbiAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U0ZTZlODtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHRyYW5zaXRpb246IDAuMXMgZWFzZS1pbjtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHBhbGV2aW9sZXRyZWQ7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/grichi/Desktop/Gri/react/uno-game/pages/newgame.js */"));
}

/***/ })

})
//# sourceMappingURL=newgame.js.01da1f93cd38fa68b752.hot-update.js.map