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

var Tab = function (_React$Component) {
  (0, _inherits3.default)(Tab, _React$Component);

  function Tab() {
    (0, _classCallCheck3.default)(this, Tab);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Tab).apply(this, arguments));
  }

  (0, _createClass3.default)(Tab, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var active = _props.active;
      var children = _props.children;
      var props = (0, _objectWithoutProperties3.default)(_props, ['className', 'active', 'children']);

      var tabClassNames = (0, _classnames2.default)(className, 'slds-tabs__content', 'slds-' + (active ? 'show' : 'hide'));
      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: tabClassNames, role: 'tabpanel' }, props),
        children
      );
    }
  }]);
  return Tab;
}(_react2.default.Component);

exports.default = Tab;


Tab.propTypes = {
  className: _react.PropTypes.string,
  title: _react.PropTypes.string,
  active: _react.PropTypes.bool,
  menu: _react.PropTypes.element,
  menuItems: _react.PropTypes.arrayOf(_react.PropTypes.element),
  menuIcon: _react.PropTypes.string,
  children: _react.PropTypes.node
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1RhYi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0lBRXFCOzs7Ozs7Ozs7OzZCQUNWO21CQUMyQyxLQUFLLEtBQUwsQ0FEM0M7VUFDQyw2QkFERDtVQUNZLHVCQURaO1VBQ29CLDJCQURwQjtVQUNpQyw0RkFEakM7O0FBRVAsVUFBTSxnQkFBZ0IsMEJBQ3BCLFNBRG9CLEVBRXBCLG9CQUZvQixhQUdaLFNBQVMsTUFBVCxHQUFrQixNQUFsQixDQUhZLENBQWhCLENBRkM7QUFPUCxhQUNFOztpQ0FBSyxXQUFZLGFBQVosRUFBNEIsTUFBSyxVQUFMLElBQXFCLE1BQXREO1FBQ0ksUUFESjtPQURGLENBUE87OztTQURVO0VBQVksZ0JBQU0sU0FBTjs7a0JBQVo7OztBQWdCckIsSUFBSSxTQUFKLEdBQWdCO0FBQ2QsYUFBVyxpQkFBVSxNQUFWO0FBQ1gsU0FBTyxpQkFBVSxNQUFWO0FBQ1AsVUFBUSxpQkFBVSxJQUFWO0FBQ1IsUUFBTSxpQkFBVSxPQUFWO0FBQ04sYUFBVyxpQkFBVSxPQUFWLENBQWtCLGlCQUFVLE9BQVYsQ0FBN0I7QUFDQSxZQUFVLGlCQUFVLE1BQVY7QUFDVixZQUFVLGlCQUFVLElBQVY7Q0FQWiIsImZpbGUiOiJUYWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGFjdGl2ZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgdGFiQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXHJcbiAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgJ3NsZHMtdGFic19fY29udGVudCcsXHJcbiAgICAgIGBzbGRzLSR7YWN0aXZlID8gJ3Nob3cnIDogJ2hpZGUnfWBcclxuICAgICk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IHRhYkNsYXNzTmFtZXMgfSByb2xlPSd0YWJwYW5lbCcgeyAuLi5wcm9wcyB9PlxyXG4gICAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5UYWIucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBhY3RpdmU6IFByb3BUeXBlcy5ib29sLFxyXG4gIG1lbnU6IFByb3BUeXBlcy5lbGVtZW50LFxyXG4gIG1lbnVJdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLmVsZW1lbnQpLFxyXG4gIG1lbnVJY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxufTtcclxuIl19