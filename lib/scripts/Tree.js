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

var Tree = function (_React$Component) {
  (0, _inherits3.default)(Tree, _React$Component);

  function Tree() {
    (0, _classCallCheck3.default)(this, Tree);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Tree).apply(this, arguments));
  }

  (0, _createClass3.default)(Tree, [{
    key: 'renderTreeNode',
    value: function renderTreeNode(tnode) {
      var _props = this.props;
      var onNodeClick = _props.onNodeClick;
      var onNodeToggle = _props.onNodeToggle;
      var onNodeLabelClick = _props.onNodeLabelClick;
      var toggleOnNodeClick = _props.toggleOnNodeClick;

      return _react2.default.cloneElement(tnode, { level: 1, onNodeClick: onNodeClick, onNodeToggle: onNodeToggle, onNodeLabelClick: onNodeLabelClick, toggleOnNodeClick: toggleOnNodeClick });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var className = _props2.className;
      var label = _props2.label;
      var children = _props2.children;
      var props = (0, _objectWithoutProperties3.default)(_props2, ['className', 'label', 'children']);

      var treeClassNames = (0, _classnames2.default)(className, 'slds-tree-container');
      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: treeClassNames, role: 'application' }, props),
        label ? _react2.default.createElement(
          'h4',
          { className: 'slds-text-heading--label' },
          label
        ) : null,
        _react2.default.createElement(
          'ul',
          { className: 'slds-tree', role: 'tree' },
          _react2.default.Children.map(children, this.renderTreeNode.bind(this))
        )
      );
    }
  }]);
  return Tree;
}(_react2.default.Component);

exports.default = Tree;


Tree.propTypes = {
  className: _react.PropTypes.string,
  label: _react.PropTypes.string,
  onNodeClick: _react.PropTypes.func,
  onNodeToggle: _react.PropTypes.func,
  onNodeLabelClick: _react.PropTypes.func,
  toggleOnNodeClick: _react.PropTypes.bool,
  children: _react.PropTypes.node
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1RyZWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztJQUdxQjs7Ozs7Ozs7OzttQ0FDSixPQUFPO21CQUN1RCxLQUFLLEtBQUwsQ0FEdkQ7VUFDWixpQ0FEWTtVQUNDLG1DQUREO1VBQ2UsMkNBRGY7VUFDaUMsNkNBRGpDOztBQUVwQixhQUFPLGdCQUFNLFlBQU4sQ0FBbUIsS0FBbkIsRUFBMEIsRUFBRSxPQUFPLENBQVAsRUFBVSx3QkFBWixFQUF5QiwwQkFBekIsRUFBdUMsa0NBQXZDLEVBQXlELG9DQUF6RCxFQUExQixDQUFQLENBRm9COzs7OzZCQUtiO29CQUMwQyxLQUFLLEtBQUwsQ0FEMUM7VUFDQyw4QkFERDtVQUNZLHNCQURaO1VBQ21CLDRCQURuQjtVQUNnQyw0RkFEaEM7O0FBRVAsVUFBTSxpQkFBaUIsMEJBQVcsU0FBWCxFQUFzQixxQkFBdEIsQ0FBakIsQ0FGQztBQUdQLGFBQ0U7O2lDQUFLLFdBQVksY0FBWixFQUE2QixNQUFLLGFBQUwsSUFBd0IsTUFBMUQ7UUFFSSxRQUNBOztZQUFJLFdBQVUsMEJBQVYsRUFBSjtVQUEyQyxLQUEzQztTQURBLEdBRUEsSUFGQTtRQUlGOztZQUFJLFdBQVUsV0FBVixFQUFzQixNQUFLLE1BQUwsRUFBMUI7VUFDSSxnQkFBTSxRQUFOLENBQWUsR0FBZixDQUFtQixRQUFuQixFQUE2QixLQUFLLGNBQUwsQ0FBb0IsSUFBcEIsQ0FBeUIsSUFBekIsQ0FBN0IsQ0FESjtTQU5GO09BREYsQ0FITzs7O1NBTlU7RUFBYSxnQkFBTSxTQUFOOztrQkFBYjs7O0FBd0JyQixLQUFLLFNBQUwsR0FBaUI7QUFDZixhQUFXLGlCQUFVLE1BQVY7QUFDWCxTQUFPLGlCQUFVLE1BQVY7QUFDUCxlQUFhLGlCQUFVLElBQVY7QUFDYixnQkFBYyxpQkFBVSxJQUFWO0FBQ2Qsb0JBQWtCLGlCQUFVLElBQVY7QUFDbEIscUJBQW1CLGlCQUFVLElBQVY7QUFDbkIsWUFBVSxpQkFBVSxJQUFWO0NBUFoiLCJmaWxlIjoiVHJlZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyZWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlclRyZWVOb2RlKHRub2RlKSB7XHJcbiAgICBjb25zdCB7IG9uTm9kZUNsaWNrLCBvbk5vZGVUb2dnbGUsIG9uTm9kZUxhYmVsQ2xpY2ssIHRvZ2dsZU9uTm9kZUNsaWNrIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudCh0bm9kZSwgeyBsZXZlbDogMSwgb25Ob2RlQ2xpY2ssIG9uTm9kZVRvZ2dsZSwgb25Ob2RlTGFiZWxDbGljaywgdG9nZ2xlT25Ob2RlQ2xpY2sgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgbGFiZWwsIGNoaWxkcmVuLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IHRyZWVDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhjbGFzc05hbWUsICdzbGRzLXRyZWUtY29udGFpbmVyJyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IHRyZWVDbGFzc05hbWVzIH0gcm9sZT0nYXBwbGljYXRpb24nIHsgLi4ucHJvcHMgfT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBsYWJlbCA/XHJcbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPSdzbGRzLXRleHQtaGVhZGluZy0tbGFiZWwnPnsgbGFiZWwgfTwvaDQ+IDpcclxuICAgICAgICAgIG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT0nc2xkcy10cmVlJyByb2xlPSd0cmVlJz5cclxuICAgICAgICAgIHsgUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCB0aGlzLnJlbmRlclRyZWVOb2RlLmJpbmQodGhpcykpIH1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5UcmVlLnByb3BUeXBlcyA9IHtcclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgb25Ob2RlQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxyXG4gIG9uTm9kZVRvZ2dsZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgb25Ob2RlTGFiZWxDbGljazogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgdG9nZ2xlT25Ob2RlQ2xpY2s6IFByb3BUeXBlcy5ib29sLFxyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxufTtcclxuIl19