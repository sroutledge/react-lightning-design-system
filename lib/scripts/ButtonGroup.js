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

var _DropdownButton = require('./DropdownButton');

var _DropdownButton2 = _interopRequireDefault(_DropdownButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonGroup = function (_React$Component) {
  (0, _inherits3.default)(ButtonGroup, _React$Component);

  function ButtonGroup() {
    (0, _classCallCheck3.default)(this, ButtonGroup);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ButtonGroup).apply(this, arguments));
  }

  (0, _createClass3.default)(ButtonGroup, [{
    key: 'renderButton',
    value: function renderButton(button, index) {
      var cnt = _react2.default.Children.count(this.props.children);
      if (button.type === _DropdownButton2.default) {
        return _react2.default.cloneElement(button, { key: index, grouped: true, isFirstInGroup: index === 0, isLastInGroup: index === cnt - 1 });
      }

      return button;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var children = _props.children;
      var props = (0, _objectWithoutProperties3.default)(_props, ['className', 'children']);

      var btnGrpClassNames = (0, _classnames2.default)(className, 'slds-button-group');
      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: btnGrpClassNames, role: 'group' }, props),
        _react2.default.Children.map(children, this.renderButton.bind(this))
      );
    }
  }]);
  return ButtonGroup;
}(_react2.default.Component);

exports.default = ButtonGroup;


ButtonGroup.propTypes = {
  className: _react.PropTypes.string,
  children: _react.PropTypes.node
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0J1dHRvbkdyb3VwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUVxQjs7Ozs7Ozs7OztpQ0FDTixRQUFRLE9BQU87QUFDMUIsVUFBTSxNQUFNLGdCQUFNLFFBQU4sQ0FBZSxLQUFmLENBQXFCLEtBQUssS0FBTCxDQUFXLFFBQVgsQ0FBM0IsQ0FEb0I7QUFFMUIsVUFBSSxPQUFPLElBQVAsNkJBQUosRUFBb0M7QUFDbEMsZUFBTyxnQkFBTSxZQUFOLENBQW1CLE1BQW5CLEVBQTJCLEVBQUUsS0FBSyxLQUFMLEVBQVksU0FBUyxJQUFULEVBQWUsZ0JBQWdCLFVBQVUsQ0FBVixFQUFhLGVBQWUsVUFBVSxNQUFNLENBQU4sRUFBOUcsQ0FBUCxDQURrQztPQUFwQzs7QUFJQSxhQUFPLE1BQVAsQ0FOMEI7Ozs7NkJBU25CO21CQUNtQyxLQUFLLEtBQUwsQ0FEbkM7VUFDQyw2QkFERDtVQUNZLDJCQURaO1VBQ3lCLGtGQUR6Qjs7QUFFUCxVQUFNLG1CQUFtQiwwQkFBVyxTQUFYLEVBQXNCLG1CQUF0QixDQUFuQixDQUZDO0FBR1AsYUFDRTs7aUNBQUssV0FBWSxnQkFBWixFQUErQixNQUFLLE9BQUwsSUFBa0IsTUFBdEQ7UUFDSSxnQkFBTSxRQUFOLENBQWUsR0FBZixDQUFtQixRQUFuQixFQUE2QixLQUFLLFlBQUwsQ0FBa0IsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBN0IsQ0FESjtPQURGLENBSE87OztTQVZVO0VBQW9CLGdCQUFNLFNBQU47O2tCQUFwQjs7O0FBcUJyQixZQUFZLFNBQVosR0FBd0I7QUFDdEIsYUFBVyxpQkFBVSxNQUFWO0FBQ1gsWUFBVSxpQkFBVSxJQUFWO0NBRloiLCJmaWxlIjoiQnV0dG9uR3JvdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IERyb3Bkb3duQnV0dG9uIGZyb20gJy4vRHJvcGRvd25CdXR0b24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uR3JvdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlckJ1dHRvbihidXR0b24sIGluZGV4KSB7XHJcbiAgICBjb25zdCBjbnQgPSBSZWFjdC5DaGlsZHJlbi5jb3VudCh0aGlzLnByb3BzLmNoaWxkcmVuKTtcclxuICAgIGlmIChidXR0b24udHlwZSA9PT0gRHJvcGRvd25CdXR0b24pIHtcclxuICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChidXR0b24sIHsga2V5OiBpbmRleCwgZ3JvdXBlZDogdHJ1ZSwgaXNGaXJzdEluR3JvdXA6IGluZGV4ID09PSAwLCBpc0xhc3RJbkdyb3VwOiBpbmRleCA9PT0gY250IC0gMSB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYnV0dG9uO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGNoaWxkcmVuLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IGJ0bkdycENsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSwgJ3NsZHMtYnV0dG9uLWdyb3VwJyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IGJ0bkdycENsYXNzTmFtZXMgfSByb2xlPSdncm91cCcgeyAuLi5wcm9wcyB9PlxyXG4gICAgICAgIHsgUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCB0aGlzLnJlbmRlckJ1dHRvbi5iaW5kKHRoaXMpKSB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbkJ1dHRvbkdyb3VwLnByb3BUeXBlcyA9IHtcclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG59O1xyXG4iXX0=