webpackHotUpdate(0,{

/***/ 163:
/*!***************************!*\
  !*** ./js/rootReducer.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _redux = __webpack_require__(/*! redux */ 105);
	
	var _bookAppReducer = __webpack_require__(/*! ./book/bookAppReducer */ 250);
	
	var _bookAppReducer2 = _interopRequireDefault(_bookAppReducer);
	
	var _githubReducer = __webpack_require__(/*! ./github/githubReducer */ 261);
	
	var _githubReducer2 = _interopRequireDefault(_githubReducer);
	
	var _employeeReducer = __webpack_require__(/*! ./employee/employeeReducer */ 255);
	
	var _employeeReducer2 = _interopRequireDefault(_employeeReducer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	if (true) {
	    module.hot.accept();
	}
	
	var rootReducer = (0, _redux.combineReducers)({
	    bookApp: _bookAppReducer2.default,
	    githubApp: _githubReducer2.default,
	    employeeApp: _employeeReducer2.default
	});
	
	exports.default = rootReducer;

/***/ }

})
//# sourceMappingURL=0.5242f0dad4da28b8e3b6.hot-update.js.map