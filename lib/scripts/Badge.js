'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var Badge = function (_React$Component) {
  (0, _inherits3.default)(Badge, _React$Component);

  function Badge() {
    (0, _classCallCheck3.default)(this, Badge);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Badge).apply(this, arguments));
  }

  (0, _createClass3.default)(Badge, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var type = _props.type;
      var label = _props.label;

      var typeClassName = type ? 'slds-theme--' + type : null;
      var badgeClassNames = (0, _classnames2.default)('slds-badge', typeClassName);
      return _react2.default.createElement(
        'span',
        { className: badgeClassNames },
        label || children
      );
    }
  }]);
  return Badge;
}(_react2.default.Component);

exports.default = Badge;


var BADGE_TYPES = ['default', 'shade', 'inverse'];

Badge.propTypes = {
  type: _react.PropTypes.oneOf(BADGE_TYPES),
  label: _react.PropTypes.string,
  children: _react.PropTypes.node
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0JhZGdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0lBRXFCOzs7Ozs7Ozs7OzZCQUNWO21CQUMyQixLQUFLLEtBQUwsQ0FEM0I7VUFDQywyQkFERDtVQUNXLG1CQURYO1VBQ2lCLHFCQURqQjs7QUFFUCxVQUFNLGdCQUFnQix3QkFBc0IsSUFBdEIsR0FBK0IsSUFBL0IsQ0FGZjtBQUdQLFVBQU0sa0JBQWtCLDBCQUN0QixZQURzQixFQUV0QixhQUZzQixDQUFsQixDQUhDO0FBT1AsYUFDRTs7VUFBTSxXQUFZLGVBQVosRUFBTjtRQUNJLFNBQVMsUUFBVDtPQUZOLENBUE87OztTQURVO0VBQWMsZ0JBQU0sU0FBTjs7a0JBQWQ7OztBQWdCckIsSUFBTSxjQUFjLENBQUMsU0FBRCxFQUFZLE9BQVosRUFBcUIsU0FBckIsQ0FBZDs7QUFFTixNQUFNLFNBQU4sR0FBa0I7QUFDaEIsUUFBTSxpQkFBVSxLQUFWLENBQWdCLFdBQWhCLENBQU47QUFDQSxTQUFPLGlCQUFVLE1BQVY7QUFDUCxZQUFVLGlCQUFVLElBQVY7Q0FIWiIsImZpbGUiOiJCYWRnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFkZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgY2hpbGRyZW4sIHR5cGUsIGxhYmVsIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgdHlwZUNsYXNzTmFtZSA9IHR5cGUgPyBgc2xkcy10aGVtZS0tJHt0eXBlfWAgOiBudWxsO1xyXG4gICAgY29uc3QgYmFkZ2VDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcclxuICAgICAgJ3NsZHMtYmFkZ2UnLFxyXG4gICAgICB0eXBlQ2xhc3NOYW1lXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXsgYmFkZ2VDbGFzc05hbWVzIH0+XHJcbiAgICAgICAgeyBsYWJlbCB8fCBjaGlsZHJlbiB9XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBCQURHRV9UWVBFUyA9IFsnZGVmYXVsdCcsICdzaGFkZScsICdpbnZlcnNlJ107XHJcblxyXG5CYWRnZS5wcm9wVHlwZXMgPSB7XHJcbiAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKEJBREdFX1RZUEVTKSxcclxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbn07XHJcbiJdfQ==