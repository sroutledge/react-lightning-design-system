'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

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

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addUniqueValue = function addUniqueValue(values, value) {
  return values.indexOf(value) < 0 ? [].concat((0, _toConsumableArray3.default)(values), [value]) : values;
};

var CheckboxGroup = function (_React$Component) {
  (0, _inherits3.default)(CheckboxGroup, _React$Component);

  function CheckboxGroup() {
    (0, _classCallCheck3.default)(this, CheckboxGroup);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(CheckboxGroup).apply(this, arguments));
  }

  (0, _createClass3.default)(CheckboxGroup, [{
    key: 'onChange',
    value: function onChange(e) {
      var value = this.props.value;


      var finalValue = e.target.checked ? addUniqueValue(value, e.target.value) : value.filter(function (i) {
        return i !== e.target.value;
      });

      if (this.props.onChange) {
        this.props.onChange(finalValue);
      }
    }
  }, {
    key: 'renderControl',
    value: function renderControl(checkbox, i) {
      var props = { grouped: true };
      if (this.props.name) {
        props.name = this.props.name;
      }
      return _react2.default.cloneElement(checkbox, props);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var label = _props.label;
      var totalCols = _props.totalCols;
      var cols = _props.cols;
      var style = _props.style;
      var required = _props.required;
      var error = _props.error;
      var onChange = _props.onChange;
      var children = _props.children;
      var props = (0, _objectWithoutProperties3.default)(_props, ['className', 'label', 'totalCols', 'cols', 'style', 'required', 'error', 'onChange', 'children']);

      var grpClassNames = (0, _classnames2.default)(className, 'slds-form-element', {
        'slds-has-error': error,
        'slds-is-required': required
      }, typeof totalCols === 'number' ? 'slds-size--' + (cols || 1) + '-of-' + totalCols : null);
      var grpStyles = typeof totalCols === 'number' ? (0, _extends3.default)({ display: 'inline-block' }, style) : style;
      var errorMessage = error ? typeof error === 'string' ? error : (typeof error === 'undefined' ? 'undefined' : (0, _typeof3.default)(error)) === 'object' ? error.message : undefined : undefined;
      return _react2.default.createElement(
        'fieldset',
        (0, _extends3.default)({ className: grpClassNames, style: grpStyles, onChange: this.onChange.bind(this) }, props),
        _react2.default.createElement(
          'legend',
          { className: 'slds-form-element__label slds-form-element__label--top' },
          label,
          required ? _react2.default.createElement(
            'abbr',
            { className: 'slds-required' },
            '*'
          ) : undefined
        ),
        _react2.default.createElement(
          'div',
          { className: 'slds-form-element__control' },
          _react2.default.Children.map(children, this.renderControl.bind(this)),
          errorMessage ? _react2.default.createElement(
            'div',
            { className: 'slds-form-element__help' },
            errorMessage
          ) : undefined
        )
      );
    }
  }]);
  return CheckboxGroup;
}(_react2.default.Component);

exports.default = CheckboxGroup;


CheckboxGroup.propTypes = {
  className: _react.PropTypes.string,
  label: _react.PropTypes.string,
  required: _react.PropTypes.bool,
  error: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.string, _react.PropTypes.shape({
    message: _react.PropTypes.string
  })]),
  name: _react.PropTypes.string,
  totalCols: _react.PropTypes.number,
  style: _react.PropTypes.object,
  cols: _react.PropTypes.number,
  onChange: _react.PropTypes.func,
  children: _react.PropTypes.node
};

CheckboxGroup.isFormElement = true;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0NoZWNrYm94R3JvdXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNLGlCQUFpQixTQUFqQixjQUFpQixDQUFDLE1BQUQsRUFBUyxLQUFULEVBQW1CO0FBQ3hDLFNBQU8sT0FBTyxPQUFQLENBQWUsS0FBZixJQUF3QixDQUF4Qiw4Q0FBaUMsTUFBakMsSUFBeUMsS0FBekMsS0FBa0QsTUFBekQ7QUFDRCxDQUZEOztJQUlxQixhOzs7Ozs7Ozs7OzZCQUNWLEMsRUFBRztBQUFBLFVBQ0YsS0FERSxHQUNRLEtBQUssS0FEYixDQUNGLEtBREU7OztBQUdWLFVBQU0sYUFBYSxFQUFFLE1BQUYsQ0FBUyxPQUFULEdBQ2pCLGVBQWUsS0FBZixFQUFzQixFQUFFLE1BQUYsQ0FBUyxLQUEvQixDQURpQixHQUVqQixNQUFNLE1BQU4sQ0FBYTtBQUFBLGVBQU8sTUFBTSxFQUFFLE1BQUYsQ0FBUyxLQUF0QjtBQUFBLE9BQWIsQ0FGRjs7QUFJQSxVQUFJLEtBQUssS0FBTCxDQUFXLFFBQWYsRUFBeUI7QUFDdkIsYUFBSyxLQUFMLENBQVcsUUFBWCxDQUFvQixVQUFwQjtBQUNEO0FBQ0Y7OztrQ0FFYSxRLEVBQVUsQyxFQUFHO0FBQ3pCLFVBQU0sUUFBUSxFQUFFLFNBQVMsSUFBWCxFQUFkO0FBQ0EsVUFBSSxLQUFLLEtBQUwsQ0FBVyxJQUFmLEVBQXFCO0FBQ25CLGNBQU0sSUFBTixHQUFhLEtBQUssS0FBTCxDQUFXLElBQXhCO0FBQ0Q7QUFDRCxhQUFPLGdCQUFNLFlBQU4sQ0FBbUIsUUFBbkIsRUFBNkIsS0FBN0IsQ0FBUDtBQUNEOzs7NkJBRVE7QUFBQSxtQkFDNkYsS0FBSyxLQURsRztBQUFBLFVBQ0MsU0FERCxVQUNDLFNBREQ7QUFBQSxVQUNZLEtBRFosVUFDWSxLQURaO0FBQUEsVUFDbUIsU0FEbkIsVUFDbUIsU0FEbkI7QUFBQSxVQUM4QixJQUQ5QixVQUM4QixJQUQ5QjtBQUFBLFVBQ29DLEtBRHBDLFVBQ29DLEtBRHBDO0FBQUEsVUFDMkMsUUFEM0MsVUFDMkMsUUFEM0M7QUFBQSxVQUNxRCxLQURyRCxVQUNxRCxLQURyRDtBQUFBLFVBQzRELFFBRDVELFVBQzRELFFBRDVEO0FBQUEsVUFDc0UsUUFEdEUsVUFDc0UsUUFEdEU7QUFBQSxVQUNtRixLQURuRjs7QUFFUCxVQUFNLGdCQUFnQiwwQkFDcEIsU0FEb0IsRUFFcEIsbUJBRm9CLEVBR3BCO0FBQ0UsMEJBQWtCLEtBRHBCO0FBRUUsNEJBQW9CO0FBRnRCLE9BSG9CLEVBT3BCLE9BQU8sU0FBUCxLQUFxQixRQUFyQixvQkFBOEMsUUFBUSxDQUF0RCxhQUE4RCxTQUE5RCxHQUE0RSxJQVB4RCxDQUF0QjtBQVNBLFVBQU0sWUFBWSxPQUFPLFNBQVAsS0FBcUIsUUFBckIsNEJBQWtDLFNBQVMsY0FBM0MsSUFBOEQsS0FBOUQsSUFBd0UsS0FBMUY7QUFDQSxVQUFNLGVBQ0osUUFDQyxPQUFPLEtBQVAsS0FBaUIsUUFBakIsR0FBNEIsS0FBNUIsR0FDQSxRQUFPLEtBQVAsdURBQU8sS0FBUCxPQUFpQixRQUFqQixHQUE0QixNQUFNLE9BQWxDLEdBQ0EsU0FIRCxHQUlBLFNBTEY7QUFNQSxhQUNFO0FBQUE7UUFBQSx5QkFBVSxXQUFZLGFBQXRCLEVBQXNDLE9BQVEsU0FBOUMsRUFBMEQsVUFBVyxLQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLElBQW5CLENBQXJFLElBQXFHLEtBQXJHO1FBQ0U7QUFBQTtVQUFBLEVBQVEsV0FBVSx3REFBbEI7VUFDSSxLQURKO1VBR0ksV0FDQTtBQUFBO1lBQUEsRUFBTSxXQUFVLGVBQWhCO1lBQUE7QUFBQSxXQURBLEdBRUE7QUFMSixTQURGO1FBU0U7QUFBQTtVQUFBLEVBQUssV0FBVSw0QkFBZjtVQUNJLGdCQUFNLFFBQU4sQ0FBZSxHQUFmLENBQW1CLFFBQW5CLEVBQTZCLEtBQUssYUFBTCxDQUFtQixJQUFuQixDQUF3QixJQUF4QixDQUE3QixDQURKO1VBR0ksZUFDQTtBQUFBO1lBQUEsRUFBSyxXQUFVLHlCQUFmO1lBQTJDO0FBQTNDLFdBREEsR0FFQTtBQUxKO0FBVEYsT0FERjtBQW9CRDs7O0VBM0R3QyxnQkFBTSxTOztrQkFBNUIsYTs7O0FBK0RyQixjQUFjLFNBQWQsR0FBMEI7QUFDeEIsYUFBVyxpQkFBVSxNQURHO0FBRXhCLFNBQU8saUJBQVUsTUFGTztBQUd4QixZQUFVLGlCQUFVLElBSEk7QUFJeEIsU0FBTyxpQkFBVSxTQUFWLENBQW9CLENBQ3pCLGlCQUFVLElBRGUsRUFFekIsaUJBQVUsTUFGZSxFQUd6QixpQkFBVSxLQUFWLENBQWdCO0FBQ2QsYUFBUyxpQkFBVTtBQURMLEdBQWhCLENBSHlCLENBQXBCLENBSmlCO0FBV3hCLFFBQU0saUJBQVUsTUFYUTtBQVl4QixhQUFXLGlCQUFVLE1BWkc7QUFheEIsU0FBTyxpQkFBVSxNQWJPO0FBY3hCLFFBQU0saUJBQVUsTUFkUTtBQWV4QixZQUFVLGlCQUFVLElBZkk7QUFnQnhCLFlBQVUsaUJBQVU7QUFoQkksQ0FBMUI7O0FBbUJBLGNBQWMsYUFBZCxHQUE4QixJQUE5QiIsImZpbGUiOiJDaGVja2JveEdyb3VwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5cclxuY29uc3QgYWRkVW5pcXVlVmFsdWUgPSAodmFsdWVzLCB2YWx1ZSkgPT4ge1xyXG4gIHJldHVybiB2YWx1ZXMuaW5kZXhPZih2YWx1ZSkgPCAwID8gWyAuLi52YWx1ZXMsIHZhbHVlXSA6IHZhbHVlcztcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tib3hHcm91cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgb25DaGFuZ2UoZSkge1xyXG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICBjb25zdCBmaW5hbFZhbHVlID0gZS50YXJnZXQuY2hlY2tlZCA/XHJcbiAgICAgIGFkZFVuaXF1ZVZhbHVlKHZhbHVlLCBlLnRhcmdldC52YWx1ZSkgOlxyXG4gICAgICB2YWx1ZS5maWx0ZXIoaSA9PiAoIGkgIT09IGUudGFyZ2V0LnZhbHVlICkpO1xyXG5cclxuICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XHJcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZmluYWxWYWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXJDb250cm9sKGNoZWNrYm94LCBpKSB7XHJcbiAgICBjb25zdCBwcm9wcyA9IHsgZ3JvdXBlZDogdHJ1ZSB9O1xyXG4gICAgaWYgKHRoaXMucHJvcHMubmFtZSkge1xyXG4gICAgICBwcm9wcy5uYW1lID0gdGhpcy5wcm9wcy5uYW1lO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGVja2JveCwgcHJvcHMpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGxhYmVsLCB0b3RhbENvbHMsIGNvbHMsIHN0eWxlLCByZXF1aXJlZCwgZXJyb3IsIG9uQ2hhbmdlLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCBncnBDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcclxuICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICAnc2xkcy1mb3JtLWVsZW1lbnQnLFxyXG4gICAgICB7XHJcbiAgICAgICAgJ3NsZHMtaGFzLWVycm9yJzogZXJyb3IsXHJcbiAgICAgICAgJ3NsZHMtaXMtcmVxdWlyZWQnOiByZXF1aXJlZCxcclxuICAgICAgfSxcclxuICAgICAgdHlwZW9mIHRvdGFsQ29scyA9PT0gJ251bWJlcicgPyBgc2xkcy1zaXplLS0ke2NvbHMgfHwgMX0tb2YtJHt0b3RhbENvbHN9YCA6IG51bGxcclxuICAgICk7XHJcbiAgICBjb25zdCBncnBTdHlsZXMgPSB0eXBlb2YgdG90YWxDb2xzID09PSAnbnVtYmVyJyA/IHsgZGlzcGxheTogJ2lubGluZS1ibG9jaycsIC4uLnN0eWxlIH0gOiBzdHlsZTtcclxuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9XHJcbiAgICAgIGVycm9yID9cclxuICAgICAgKHR5cGVvZiBlcnJvciA9PT0gJ3N0cmluZycgPyBlcnJvciA6XHJcbiAgICAgICB0eXBlb2YgZXJyb3IgPT09ICdvYmplY3QnID8gZXJyb3IubWVzc2FnZSA6XHJcbiAgICAgICB1bmRlZmluZWQpIDpcclxuICAgICAgdW5kZWZpbmVkO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT17IGdycENsYXNzTmFtZXMgfSBzdHlsZT17IGdycFN0eWxlcyB9IG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpIH0geyAuLi5wcm9wcyB9ID5cclxuICAgICAgICA8bGVnZW5kIGNsYXNzTmFtZT0nc2xkcy1mb3JtLWVsZW1lbnRfX2xhYmVsIHNsZHMtZm9ybS1lbGVtZW50X19sYWJlbC0tdG9wJz5cclxuICAgICAgICAgIHsgbGFiZWwgfVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICByZXF1aXJlZCA/XHJcbiAgICAgICAgICAgIDxhYmJyIGNsYXNzTmFtZT0nc2xkcy1yZXF1aXJlZCc+KjwvYWJicj4gOlxyXG4gICAgICAgICAgICB1bmRlZmluZWRcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2xlZ2VuZD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1mb3JtLWVsZW1lbnRfX2NvbnRyb2wnPlxyXG4gICAgICAgICAgeyBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIHRoaXMucmVuZGVyQ29udHJvbC5iaW5kKHRoaXMpKSB9XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSA/XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLWZvcm0tZWxlbWVudF9faGVscCc+eyBlcnJvck1lc3NhZ2UgfTwvZGl2PiA6XHJcbiAgICAgICAgICAgIHVuZGVmaW5lZFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5DaGVja2JveEdyb3VwLnByb3BUeXBlcyA9IHtcclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gIGVycm9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgIFByb3BUeXBlcy5ib29sLFxyXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgIG1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB9KSxcclxuICBdKSxcclxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHRvdGFsQ29sczogUHJvcFR5cGVzLm51bWJlcixcclxuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBjb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbn07XHJcblxyXG5DaGVja2JveEdyb3VwLmlzRm9ybUVsZW1lbnQgPSB0cnVlO1xyXG4iXX0=