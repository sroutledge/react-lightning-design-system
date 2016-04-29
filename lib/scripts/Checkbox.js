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

var _FormElement = require('./FormElement');

var _FormElement2 = _interopRequireDefault(_FormElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkbox = function (_React$Component) {
  (0, _inherits3.default)(Checkbox, _React$Component);

  function Checkbox() {
    (0, _classCallCheck3.default)(this, Checkbox);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Checkbox).apply(this, arguments));
  }

  (0, _createClass3.default)(Checkbox, [{
    key: 'renderCheckbox',
    value: function renderCheckbox(_ref) {
      var className = _ref.className;
      var label = _ref.label;
      var props = (0, _objectWithoutProperties3.default)(_ref, ['className', 'label']);

      var checkClassNames = (0, _classnames2.default)(className, 'slds-checkbox');
      return _react2.default.createElement(
        'label',
        { className: checkClassNames },
        _react2.default.createElement('input', (0, _extends3.default)({ type: 'checkbox' }, props)),
        _react2.default.createElement('span', { className: 'slds-checkbox--faux' }),
        _react2.default.createElement(
          'span',
          { className: 'slds-form-element__label' },
          label
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var grouped = _props.grouped;
      var required = _props.required;
      var error = _props.error;
      var totalCols = _props.totalCols;
      var cols = _props.cols;
      var props = (0, _objectWithoutProperties3.default)(_props, ['grouped', 'required', 'error', 'totalCols', 'cols']);

      var formElemProps = { required: required, error: error, totalCols: totalCols, cols: cols };
      return grouped ? this.renderCheckbox(props) : _react2.default.createElement(
        _FormElement2.default,
        formElemProps,
        this.renderCheckbox(props)
      );
    }
  }]);
  return Checkbox;
}(_react2.default.Component);

exports.default = Checkbox;


Checkbox.propTypes = {
  className: _react.PropTypes.string,
  label: _react.PropTypes.string,
  required: _react.PropTypes.bool,
  error: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.string, _react.PropTypes.shape({
    message: _react.PropTypes.string
  })]),
  totalCols: _react.PropTypes.number,
  cols: _react.PropTypes.number,
  name: _react.PropTypes.string,
  value: _react.PropTypes.any,
  grouped: _react.PropTypes.bool,
  checked: _react.PropTypes.bool,
  defaultChecked: _react.PropTypes.bool
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0NoZWNrYm94LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUdxQjs7Ozs7Ozs7Ozt5Q0FFNEI7VUFBOUIsMkJBQThCO1VBQW5CLG1CQUFtQjtVQUFULDZFQUFTOztBQUM3QyxVQUFNLGtCQUFrQiwwQkFBVyxTQUFYLEVBQXNCLGVBQXRCLENBQWxCLENBRHVDO0FBRTdDLGFBQ0U7O1VBQU8sV0FBWSxlQUFaLEVBQVA7UUFDRSxnRUFBTyxNQUFLLFVBQUwsSUFBcUIsTUFBNUIsQ0FERjtRQUVFLHdDQUFNLFdBQVUscUJBQVYsRUFBTixDQUZGO1FBR0U7O1lBQU0sV0FBVSwwQkFBVixFQUFOO1VBQTZDLEtBQTdDO1NBSEY7T0FERixDQUY2Qzs7Ozs2QkFXdEM7bUJBQ3lELEtBQUssS0FBTCxDQUR6RDtVQUNDLHlCQUREO1VBQ1UsMkJBRFY7VUFDb0IscUJBRHBCO1VBQzJCLDZCQUQzQjtVQUNzQyxtQkFEdEM7VUFDK0MsOEdBRC9DOztBQUVQLFVBQU0sZ0JBQWdCLEVBQUUsa0JBQUYsRUFBWSxZQUFaLEVBQW1CLG9CQUFuQixFQUE4QixVQUE5QixFQUFoQixDQUZDO0FBR1AsYUFDRSxVQUNBLEtBQUssY0FBTCxDQUFvQixLQUFwQixDQURBLEdBRUE7O1FBQWtCLGFBQWxCO1FBQ0ksS0FBSyxjQUFMLENBQW9CLEtBQXBCLENBREo7T0FGQSxDQUpLOzs7U0FiVTtFQUFpQixnQkFBTSxTQUFOOztrQkFBakI7OztBQTJCckIsU0FBUyxTQUFULEdBQXFCO0FBQ25CLGFBQVcsaUJBQVUsTUFBVjtBQUNYLFNBQU8saUJBQVUsTUFBVjtBQUNQLFlBQVUsaUJBQVUsSUFBVjtBQUNWLFNBQU8saUJBQVUsU0FBVixDQUFvQixDQUN6QixpQkFBVSxJQUFWLEVBQ0EsaUJBQVUsTUFBVixFQUNBLGlCQUFVLEtBQVYsQ0FBZ0I7QUFDZCxhQUFTLGlCQUFVLE1BQVY7R0FEWCxDQUh5QixDQUFwQixDQUFQO0FBT0EsYUFBVyxpQkFBVSxNQUFWO0FBQ1gsUUFBTSxpQkFBVSxNQUFWO0FBQ04sUUFBTSxpQkFBVSxNQUFWO0FBQ04sU0FBTyxpQkFBVSxHQUFWO0FBQ1AsV0FBUyxpQkFBVSxJQUFWO0FBQ1QsV0FBUyxpQkFBVSxJQUFWO0FBQ1Qsa0JBQWdCLGlCQUFVLElBQVY7Q0FqQmxCIiwiZmlsZSI6IkNoZWNrYm94LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBGb3JtRWxlbWVudCBmcm9tICcuL0Zvcm1FbGVtZW50JztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVja2JveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIHJlbmRlckNoZWNrYm94KHsgY2xhc3NOYW1lLCBsYWJlbCwgLi4ucHJvcHMgfSkge1xyXG4gICAgY29uc3QgY2hlY2tDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhjbGFzc05hbWUsICdzbGRzLWNoZWNrYm94Jyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPXsgY2hlY2tDbGFzc05hbWVzIH0+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9J2NoZWNrYm94JyB7IC4uLnByb3BzIH0gLz5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NsZHMtY2hlY2tib3gtLWZhdXgnPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NsZHMtZm9ybS1lbGVtZW50X19sYWJlbCc+eyBsYWJlbCB9PC9zcGFuPlxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgZ3JvdXBlZCwgcmVxdWlyZWQsIGVycm9yLCB0b3RhbENvbHMsIGNvbHMsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgZm9ybUVsZW1Qcm9wcyA9IHsgcmVxdWlyZWQsIGVycm9yLCB0b3RhbENvbHMsIGNvbHMgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIGdyb3VwZWQgP1xyXG4gICAgICB0aGlzLnJlbmRlckNoZWNrYm94KHByb3BzKSA6XHJcbiAgICAgIDxGb3JtRWxlbWVudCB7IC4uLmZvcm1FbGVtUHJvcHMgfT5cclxuICAgICAgICB7IHRoaXMucmVuZGVyQ2hlY2tib3gocHJvcHMpIH1cclxuICAgICAgPC9Gb3JtRWxlbWVudD5cclxuICAgICk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQ2hlY2tib3gucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcclxuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgZXJyb3I6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgbWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIH0pLFxyXG4gIF0pLFxyXG4gIHRvdGFsQ29sczogUHJvcFR5cGVzLm51bWJlcixcclxuICBjb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgdmFsdWU6IFByb3BUeXBlcy5hbnksXHJcbiAgZ3JvdXBlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgY2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgZGVmYXVsdENoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxyXG59O1xyXG4iXX0=