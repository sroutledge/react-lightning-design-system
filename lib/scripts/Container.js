'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Container = function (_React$Component) {
  (0, _inherits3.default)(Container, _React$Component);

  function Container() {
    (0, _classCallCheck3.default)(this, Container);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Container).apply(this, arguments));
  }

  (0, _createClass3.default)(Container, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var size = _props.size;
      var align = _props.align;
      var children = _props.children;
      var props = (0, _objectWithoutProperties3.default)(_props, ['className', 'size', 'align', 'children']);

      var ctClassNames = (0, _classnames2.default)(className, 'slds-container--' + (size || 'fluid'), align ? 'slds-container--' + align : null);
      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: ctClassNames }, props),
        children
      );
    }
  }]);
  return Container;
}(_react2.default.Component);

exports.default = Container;


var CONTAINER_SIZES = ['small', 'medium', 'large'];

var CONTAINER_ALIGNS = ['left', 'center', 'right'];

Container.propTypes = {
  className: _react.PropTypes.string,
  size: _react.PropTypes.oneOf(CONTAINER_SIZES),
  align: _react.PropTypes.oneOf(CONTAINER_ALIGNS),
  children: _react.PropTypes.element
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0NvbnRhaW5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0lBRXFCOzs7Ozs7Ozs7OzZCQUNWO21CQUNnRCxLQUFLLEtBQUwsQ0FEaEQ7VUFDQyw2QkFERDtVQUNZLG1CQURaO1VBQ2tCLHFCQURsQjtVQUN5QiwyQkFEekI7VUFDc0MsbUdBRHRDOztBQUVQLFVBQU0sZUFBZSwwQkFDbkIsU0FEbUIsd0JBRUEsUUFBUSxPQUFSLENBRkEsRUFHbkIsNkJBQTJCLEtBQTNCLEdBQXFDLElBQXJDLENBSEksQ0FGQztBQU9QLGFBQ0U7O2lDQUFLLFdBQVksWUFBWixJQUFnQyxNQUFyQztRQUNJLFFBREo7T0FERixDQVBPOzs7U0FEVTtFQUFrQixnQkFBTSxTQUFOOztrQkFBbEI7OztBQWdCckIsSUFBTSxrQkFBa0IsQ0FDdEIsT0FEc0IsRUFFdEIsUUFGc0IsRUFHdEIsT0FIc0IsQ0FBbEI7O0FBTU4sSUFBTSxtQkFBbUIsQ0FDdkIsTUFEdUIsRUFFdkIsUUFGdUIsRUFHdkIsT0FIdUIsQ0FBbkI7O0FBTU4sVUFBVSxTQUFWLEdBQXNCO0FBQ3BCLGFBQVcsaUJBQVUsTUFBVjtBQUNYLFFBQU0saUJBQVUsS0FBVixDQUFnQixlQUFoQixDQUFOO0FBQ0EsU0FBTyxpQkFBVSxLQUFWLENBQWdCLGdCQUFoQixDQUFQO0FBQ0EsWUFBVSxpQkFBVSxPQUFWO0NBSloiLCJmaWxlIjoiQ29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWluZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBzaXplLCBhbGlnbiwgY2hpbGRyZW4sIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgY3RDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcclxuICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICBgc2xkcy1jb250YWluZXItLSR7c2l6ZSB8fCAnZmx1aWQnfWAsXHJcbiAgICAgIGFsaWduID8gYHNsZHMtY29udGFpbmVyLS0ke2FsaWdufWAgOiBudWxsXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBjdENsYXNzTmFtZXMgfSB7IC4uLnByb3BzIH0gPlxyXG4gICAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBDT05UQUlORVJfU0laRVMgPSBbXHJcbiAgJ3NtYWxsJyxcclxuICAnbWVkaXVtJyxcclxuICAnbGFyZ2UnLFxyXG5dO1xyXG5cclxuY29uc3QgQ09OVEFJTkVSX0FMSUdOUyA9IFtcclxuICAnbGVmdCcsXHJcbiAgJ2NlbnRlcicsXHJcbiAgJ3JpZ2h0JyxcclxuXTtcclxuXHJcbkNvbnRhaW5lci5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihDT05UQUlORVJfU0laRVMpLFxyXG4gIGFsaWduOiBQcm9wVHlwZXMub25lT2YoQ09OVEFJTkVSX0FMSUdOUyksXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5lbGVtZW50LFxyXG59O1xyXG4iXX0=