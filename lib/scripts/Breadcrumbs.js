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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Breadcrumbs = function (_React$Component) {
  (0, _inherits3.default)(Breadcrumbs, _React$Component);

  function Breadcrumbs() {
    (0, _classCallCheck3.default)(this, Breadcrumbs);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Breadcrumbs).apply(this, arguments));
  }

  (0, _createClass3.default)(Breadcrumbs, [{
    key: 'render',
    value: function render() {
      var items = this.props.items;


      return _react2.default.createElement(
        'nav',
        { role: 'navigation' },
        _react2.default.createElement(
          'ol',
          {
            className: 'slds-breadcrumb slds-list--horizontal',
            'aria-labelledby': 'bread-crumb-label'
          },
          items.map(function (item, index) {
            return _react2.default.createElement(
              'li',
              {
                key: index,
                className: 'slds-list__item slds-text-heading--label'
              },
              _react2.default.createElement(
                'a',
                { href: item.href },
                item.label
              )
            );
          })
        )
      );
    }
  }]);
  return Breadcrumbs;
}(_react2.default.Component);

exports.default = Breadcrumbs;


Breadcrumbs.propTypes = {
  items: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    label: _react2.default.PropTypes.string,
    href: _react2.default.PropTypes.string
  })).isRequired
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0JyZWFkY3J1bWJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztJQUVxQjs7Ozs7Ozs7Ozs2QkFDVjtVQUNDLFFBQVUsS0FBSyxLQUFMLENBQVYsTUFERDs7O0FBR1AsYUFDRTs7VUFBSyxNQUFLLFlBQUwsRUFBTDtRQUNFOzs7QUFDRSx1QkFBVSx1Q0FBVjtBQUNBLCtCQUFnQixtQkFBaEI7V0FGRjtVQUlHLE1BQU0sR0FBTixDQUFVLFVBQUMsSUFBRCxFQUFPLEtBQVAsRUFBaUI7QUFDMUIsbUJBQ0U7OztBQUNFLHFCQUFNLEtBQU47QUFDQSwyQkFBVSwwQ0FBVjtlQUZGO2NBSUU7O2tCQUFHLE1BQU8sS0FBSyxJQUFMLEVBQVY7Z0JBQXdCLEtBQUssS0FBTDtlQUoxQjthQURGLENBRDBCO1dBQWpCLENBSmI7U0FERjtPQURGLENBSE87OztTQURVO0VBQW9CLGdCQUFNLFNBQU47O2tCQUFwQjs7O0FBMEJyQixZQUFZLFNBQVosR0FBd0I7QUFDdEIsU0FBTyxpQkFBVSxPQUFWLENBQWtCLGlCQUFVLEtBQVYsQ0FBZ0I7QUFDdkMsV0FBTyxnQkFBTSxTQUFOLENBQWdCLE1BQWhCO0FBQ1AsVUFBTSxnQkFBTSxTQUFOLENBQWdCLE1BQWhCO0dBRmlCLENBQWxCLEVBR0gsVUFIRztDQURUIiwiZmlsZSI6IkJyZWFkY3J1bWJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyZWFkY3J1bWJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGl0ZW1zIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxuYXYgcm9sZT0nbmF2aWdhdGlvbic+XHJcbiAgICAgICAgPG9sXHJcbiAgICAgICAgICBjbGFzc05hbWU9J3NsZHMtYnJlYWRjcnVtYiBzbGRzLWxpc3QtLWhvcml6b250YWwnXHJcbiAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9J2JyZWFkLWNydW1iLWxhYmVsJ1xyXG4gICAgICAgID5cclxuICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICBrZXk9eyBpbmRleCB9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NsZHMtbGlzdF9faXRlbSBzbGRzLXRleHQtaGVhZGluZy0tbGFiZWwnXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj17IGl0ZW0uaHJlZiB9PnsgaXRlbS5sYWJlbCB9PC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L29sPlxyXG4gICAgICA8L25hdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5CcmVhZGNydW1icy5wcm9wVHlwZXMgPSB7XHJcbiAgaXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICBsYWJlbDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIGhyZWY6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXHJcbiAgfSkpLmlzUmVxdWlyZWQsXHJcbn07XHJcbiJdfQ==