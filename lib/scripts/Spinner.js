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

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Spinner = function (_React$Component) {
  (0, _inherits3.default)(Spinner, _React$Component);

  function Spinner() {
    (0, _classCallCheck3.default)(this, Spinner);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Spinner).apply(this, arguments));
  }

  (0, _createClass3.default)(Spinner, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var size = _props.size;
      var type = _props.type;
      var alt = _props.alt;
      var props = (0, _objectWithoutProperties3.default)(_props, ['className', 'size', 'type', 'alt']);

      var spinnerClassNames = (0, _classnames2.default)(className, 'slds-spinner--' + size);
      var spinnerImgName = type === 'brand' ? 'slds_spinner_brand' : type === 'inverse' ? 'slds_spinner_inverse' : 'slds_spinner';
      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: spinnerClassNames }, props),
        _react2.default.createElement('img', { src: _util2.default.getAssetRoot() + '/images/spinners/' + spinnerImgName + '.gif', alt: alt })
      );
    }
  }]);
  return Spinner;
}(_react2.default.Component);

exports.default = Spinner;


Spinner.propTypes = {
  className: _react.PropTypes.string,
  type: _react.PropTypes.string,
  size: _react.PropTypes.string,
  alt: _react.PropTypes.string
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1NwaW5uZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBR3FCOzs7Ozs7Ozs7OzZCQUNWO21CQUMwQyxLQUFLLEtBQUwsQ0FEMUM7VUFDQyw2QkFERDtVQUNZLG1CQURaO1VBQ2tCLG1CQURsQjtVQUN3QixpQkFEeEI7VUFDZ0MsNkZBRGhDOztBQUVQLFVBQU0sb0JBQW9CLDBCQUFXLFNBQVgscUJBQXVDLElBQXZDLENBQXBCLENBRkM7QUFHUCxVQUFNLGlCQUNKLFNBQVMsT0FBVCxHQUFtQixvQkFBbkIsR0FDQSxTQUFTLFNBQVQsR0FBcUIsc0JBQXJCLEdBQ0EsY0FEQSxDQUxLO0FBT1AsYUFDRTs7aUNBQUssV0FBWSxpQkFBWixJQUFxQyxNQUExQztRQUNFLHVDQUFLLEtBQVMsZUFBSyxZQUFMLDJCQUF1Qyx1QkFBaEQsRUFBdUUsS0FBTSxHQUFOLEVBQTVFLENBREY7T0FERixDQVBPOzs7U0FEVTtFQUFnQixnQkFBTSxTQUFOOztrQkFBaEI7OztBQWdCckIsUUFBUSxTQUFSLEdBQW9CO0FBQ2xCLGFBQVcsaUJBQVUsTUFBVjtBQUNYLFFBQU0saUJBQVUsTUFBVjtBQUNOLFFBQU0saUJBQVUsTUFBVjtBQUNOLE9BQUssaUJBQVUsTUFBVjtDQUpQIiwiZmlsZSI6IlNwaW5uZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHV0aWwgZnJvbSAnLi91dGlsJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTcGlubmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgc2l6ZSwgdHlwZSwgYWx0LCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IHNwaW5uZXJDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhjbGFzc05hbWUsIGBzbGRzLXNwaW5uZXItLSR7c2l6ZX1gKTtcclxuICAgIGNvbnN0IHNwaW5uZXJJbWdOYW1lID1cclxuICAgICAgdHlwZSA9PT0gJ2JyYW5kJyA/ICdzbGRzX3NwaW5uZXJfYnJhbmQnIDpcclxuICAgICAgdHlwZSA9PT0gJ2ludmVyc2UnID8gJ3NsZHNfc3Bpbm5lcl9pbnZlcnNlJyA6XHJcbiAgICAgICdzbGRzX3NwaW5uZXInO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBzcGlubmVyQ2xhc3NOYW1lcyB9IHsgLi4ucHJvcHMgfT5cclxuICAgICAgICA8aW1nIHNyYz17IGAke3V0aWwuZ2V0QXNzZXRSb290KCl9L2ltYWdlcy9zcGlubmVycy8ke3NwaW5uZXJJbWdOYW1lfS5naWZgIH0gYWx0PXsgYWx0IH0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuU3Bpbm5lci5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgc2l6ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBhbHQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbn07XHJcbiJdfQ==