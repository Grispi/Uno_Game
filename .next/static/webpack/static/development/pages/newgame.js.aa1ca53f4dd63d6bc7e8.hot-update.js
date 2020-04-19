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
    className: "jsx-1523079843",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, "This is the New game Page"), __jsx("form", {
    onSubmit: onSubmit,
    className: "jsx-1523079843",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("label", {
    className: "jsx-1523079843",
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
    className: "jsx-1523079843",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, __jsx("option", {
    value: "2",
    className: "jsx-1523079843",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, "2"), __jsx("option", {
    value: "3",
    className: "jsx-1523079843",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, "3"), __jsx("option", {
    value: "4",
    className: "jsx-1523079843",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, "4"))), __jsx("label", {
    className: "jsx-1523079843",
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
    className: "jsx-1523079843",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  })), __jsx("button", {
    type: "submit",
    className: "jsx-1523079843",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, "Aceptar")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1523079843",
    __self: this
  }, "form.jsx-1523079843{margin:1em;font-family:sans-serif;font-size:18px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;text-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}label.jsx-1523079843{text-align:left;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:500px;}select.jsx-1523079843{display:center;width:500px;font-size:20px;margin:1em 0;border-radius:8px;border-style:none;border:1px solid #e4e6e8;background-color:white;}input.jsx-1523079843{display:block;font-size:15px;margin:1em 0;padding:10px;width:500px;border-radius:8px;border-style:none;border:1px solid #e4e6e8;-webkit-transition:0.1s ease;transition:0.1s ease;}input.jsx-1523079843:hover{border-color:palevioletred;}button.jsx-1523079843{width:500px;margin:0.8em;padding:1em;border:1px solid #e4e6e8;border-radius:5px;cursor:pointer;-webkit-transition:0.1s ease-in;transition:0.1s ease-in;}button.jsx-1523079843:hover{background-color:palevioletred;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9ncmljaGkvRGVza3RvcC9HcmkvcmVhY3QvdW5vLWdhbWUvcGFnZXMvbmV3Z2FtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQ2tCLEFBR3NCLEFBU0ssQUFLRCxBQVlELEFBV2EsQUFHZixBQVNtQixXQWhEUixDQXdDVixFQWRFLENBWkgsQ0FMTyxTQWdDUCxFQTFCRyxBQXNCakIsRUFWZSxFQXNCRCxHQWhERyxHQXlDVSxLQTFCWixBQVlBLENBc0JmLE1BaERlLE1BZ0JLLEFBV04sT0FjTSxLQWJBLE1BWEEsT0F5QkgsS0FiRyxNQVhPLElBeUJELFFBYkMsTUF0QmIsT0FXVyxLQVZ6QixFQVJvQixLQThCRyxXQVh2QixFQWxCcUIsVUEwQ3JCLDJCQVpBLHdEQTdCd0IsOEVBQ3hCIiwiZmlsZSI6Ii9Vc2Vycy9ncmljaGkvRGVza3RvcC9HcmkvcmVhY3QvdW5vLWdhbWUvcGFnZXMvbmV3Z2FtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanNcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdHYW1lKCkge1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKFwiMlwiKTtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IG9uU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgYWxlcnQoXG4gICAgICBcIkxhIGNhbnRpZGFkIGRlIGp1Z2Fkb3JlcyBlczogXCIgKyB2YWx1ZSArIFwiXFxuXCIgKyBcIlR1IGp1Z2Fkb3IgZXM6IFwiICsgbmFtZVxuICAgICk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8cD5UaGlzIGlzIHRoZSBOZXcgZ2FtZSBQYWdlPC9wPlxuXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgQ3VhbnRvcyBqdWdhZG9yZXMgdmFuIGEganVnYXI6XG4gICAgICAgICAgPHNlbGVjdCB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpfT5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+Mjwvb3B0aW9uPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjNcIj4zPC9vcHRpb24+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNFwiPjQ8L29wdGlvbj5cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIE5vbWJyZSBvIE5pY2tuYW1lOlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIG5pY2tuYW1lIG8gTm9tYnJlXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+QWNlcHRhcjwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBmb3JtIHtcbiAgICAgICAgICBtYXJnaW46IDFlbTtcbiAgICAgICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDUwMHB4O1xuICAgICAgICB9XG4gICAgICAgIHNlbGVjdCB7XG4gICAgICAgICAgZGlzcGxheTogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiA1MDBweDtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgbWFyZ2luOiAxZW0gMDtcblxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICBib3JkZXItc3R5bGU6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U0ZTZlODtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgbWFyZ2luOiAxZW0gMDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIHdpZHRoOiA1MDBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNGU2ZTg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4xcyBlYXNlO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0OmhvdmVyIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHBhbGV2aW9sZXRyZWQ7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICB3aWR0aDogNTAwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwLjhlbTtcbiAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U0ZTZlODtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHRyYW5zaXRpb246IDAuMXMgZWFzZS1pbjtcbiAgICAgICAgfVxuICAgICAgICBidXR0b246aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHBhbGV2aW9sZXRyZWQ7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/grichi/Desktop/Gri/react/uno-game/pages/newgame.js */"));
}

/***/ })

})
//# sourceMappingURL=newgame.js.aa1ca53f4dd63d6bc7e8.hot-update.js.map