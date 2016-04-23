webpackHotUpdate(0,{

/***/ 339:
/*!********************************************!*\
  !*** ./js/todo/cmps/TodoListContainer.jsx ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 32);
	
	var _todoActions = __webpack_require__(/*! ../todoActions */ 81);
	
	var _TodoList = __webpack_require__(/*! ./TodoList */ 338);
	
	var _TodoList2 = _interopRequireDefault(_TodoList);
	
	var _trackDecorator = __webpack_require__(/*! ../../decorators/trackDecorator */ 789);
	
	var _trackDecorator2 = _interopRequireDefault(_trackDecorator);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TodoListContainer = function (_Component) {
		_inherits(TodoListContainer, _Component);
	
		function TodoListContainer(props, context) {
			_classCallCheck(this, TodoListContainer);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TodoListContainer).call(this, props, context));
	
			console.log(_this.context);
			return _this;
		}
	
		_createClass(TodoListContainer, [{
			key: 'componentWillMount',
			value: function componentWillMount() {
				this.props.fetchTodos();
			}
		}, {
			key: 'render',
			value: function render() {
				var _props = this.props;
				var todos = _props.todos;
				var onTodoClick = _props.onTodoClick;
	
				return _react2.default.createElement(_TodoList2.default, _extends({ todos: todos }, this.props));
			}
		}]);
	
		return TodoListContainer;
	}(_react.Component);
	
	TodoListContainer = (0, _reactRedux.connect)(function (state) {
		return {
			todos: state.todoApp.todos
		};
	}, function (dispatch) {
		return {
			fetchTodos: function fetchTodos() {
				return dispatch((0, _todoActions.fetchTodos)());
			},
			toggleTodo: function toggleTodo(id, completed) {
				return dispatch((0, _todoActions.toggleTodo)(id, completed));
			},
			deleteTodo: function deleteTodo(id) {
				return dispatch((0, _todoActions.deleteTodo)(id));
			}
		};
	})(TodoListContainer);
	
	var _default = TodoListContainer;
	exports.default = _default;
	
	(function () {
		function tagSource(fn, localName) {
			if (typeof fn !== "function") {
				return;
			}
	
			if (fn.hasOwnProperty("__source")) {
				return;
			}
	
			try {
				Object.defineProperty(fn, "__source", {
					enumerable: false,
					configurable: true,
					value: {
						fileName: '/Users/yong/Workspace/ps_workspace/redux_todo_list/js/todo/cmps/TodoListContainer.jsx',
						localName: localName
					}
				});
			} catch (err) {}
		}
	
		tagSource(TodoListContainer, 'TodoListContainer');
		tagSource(_default, 'default');
	})();

/***/ }

})
//# sourceMappingURL=0.6a6cd0720331636e2f1a.hot-update.js.map