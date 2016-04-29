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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheckboxGroup = function (_React$Component) {
  (0, _inherits3.default)(CheckboxGroup, _React$Component);

  function CheckboxGroup() {
    (0, _classCallCheck3.default)(this, CheckboxGroup);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(CheckboxGroup).apply(this, arguments));
  }

  (0, _createClass3.default)(CheckboxGroup, [{
    key: 'onChange',
    value: function onChange(e) {
      var _this2 = this;

      if (this.props.onChange) {
        (function () {
          var values = [];
          _react2.default.Children.forEach(_this2.props.children, function (check, i) {
            var ref = check.props.ref || 'check' + (i + 1);
            var el = _reactDom2.default.findDOMNode(_this2.refs[ref]);
            var checkEl = el.querySelector('input[type=checkbox]');
            if (checkEl && checkEl.checked) {
              values.push(check.props.value);
            }
          });
          _this2.props.onChange(e, values);
        })();
      }
    }
  }, {
    key: 'renderControl',
    value: function renderControl(checkbox, i) {
      var props = { grouped: true, ref: checkbox.props.ref || 'check' + (i + 1) };
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
          { className: 'slds-form-element__control', ref: 'controls' },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0NoZWNrYm94R3JvdXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUdxQjs7Ozs7Ozs7Ozs2QkFDVixHQUFHOzs7QUFDVixVQUFJLEtBQUssS0FBTCxDQUFXLFFBQVgsRUFBcUI7O0FBQ3ZCLGNBQU0sU0FBUyxFQUFUO0FBQ04sMEJBQU0sUUFBTixDQUFlLE9BQWYsQ0FBdUIsT0FBSyxLQUFMLENBQVcsUUFBWCxFQUFxQixVQUFDLEtBQUQsRUFBUSxDQUFSLEVBQWM7QUFDeEQsZ0JBQU0sTUFBTSxNQUFNLEtBQU4sQ0FBWSxHQUFaLElBQW1CLFdBQVcsSUFBSSxDQUFKLENBQVgsQ0FEeUI7QUFFeEQsZ0JBQU0sS0FBSyxtQkFBUyxXQUFULENBQXFCLE9BQUssSUFBTCxDQUFVLEdBQVYsQ0FBckIsQ0FBTCxDQUZrRDtBQUd4RCxnQkFBTSxVQUFVLEdBQUcsYUFBSCxDQUFpQixzQkFBakIsQ0FBVixDQUhrRDtBQUl4RCxnQkFBSSxXQUFXLFFBQVEsT0FBUixFQUFpQjtBQUM5QixxQkFBTyxJQUFQLENBQVksTUFBTSxLQUFOLENBQVksS0FBWixDQUFaLENBRDhCO2FBQWhDO1dBSjBDLENBQTVDO0FBUUEsaUJBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsQ0FBcEIsRUFBdUIsTUFBdkI7YUFWdUI7T0FBekI7Ozs7a0NBY1ksVUFBVSxHQUFHO0FBQ3pCLFVBQU0sUUFBUSxFQUFFLFNBQVMsSUFBVCxFQUFlLEtBQUssU0FBUyxLQUFULENBQWUsR0FBZixJQUFzQixXQUFXLElBQUksQ0FBSixDQUFYLEVBQXBELENBRG1CO0FBRXpCLFVBQUksS0FBSyxLQUFMLENBQVcsSUFBWCxFQUFpQjtBQUNuQixjQUFNLElBQU4sR0FBYSxLQUFLLEtBQUwsQ0FBVyxJQUFYLENBRE07T0FBckI7QUFHQSxhQUFPLGdCQUFNLFlBQU4sQ0FBbUIsUUFBbkIsRUFBNkIsS0FBN0IsQ0FBUCxDQUx5Qjs7Ozs2QkFRbEI7bUJBQzZGLEtBQUssS0FBTCxDQUQ3RjtVQUNDLDZCQUREO1VBQ1kscUJBRFo7VUFDbUIsNkJBRG5CO1VBQzhCLG1CQUQ5QjtVQUNvQyxxQkFEcEM7VUFDMkMsMkJBRDNDO1VBQ3FELHFCQURyRDtVQUM0RCwyQkFENUQ7VUFDc0UsMkJBRHRFO1VBQ21GLDBKQURuRjs7QUFFUCxVQUFNLGdCQUFnQiwwQkFDcEIsU0FEb0IsRUFFcEIsbUJBRm9CLEVBR3BCO0FBQ0UsMEJBQWtCLEtBQWxCO0FBQ0EsNEJBQW9CLFFBQXBCO09BTGtCLEVBT3BCLE9BQU8sU0FBUCxLQUFxQixRQUFyQixvQkFBOEMsUUFBUSxDQUFSLGFBQWdCLFNBQTlELEdBQTRFLElBQTVFLENBUEksQ0FGQztBQVdQLFVBQU0sWUFBWSxPQUFPLFNBQVAsS0FBcUIsUUFBckIsNEJBQWtDLFNBQVMsY0FBVCxJQUE0QixNQUE5RCxHQUF3RSxLQUF4RSxDQVhYO0FBWVAsVUFBTSxlQUNKLFFBQ0MsT0FBTyxLQUFQLEtBQWlCLFFBQWpCLEdBQTRCLEtBQTVCLEdBQ0EsUUFBTyxtRUFBUCxLQUFpQixRQUFqQixHQUE0QixNQUFNLE9BQU4sR0FDNUIsU0FEQSxHQUVELFNBSkEsQ0FiSztBQWtCUCxhQUNFOztpQ0FBVSxXQUFZLGFBQVosRUFBNEIsT0FBUSxTQUFSLEVBQW9CLFVBQVcsS0FBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixJQUFuQixDQUFYLElBQTJDLE1BQXJHO1FBQ0U7O1lBQVEsV0FBVSx3REFBVixFQUFSO1VBQ0ksS0FESjtVQUdJLFdBQ0E7O2NBQU0sV0FBVSxlQUFWLEVBQU47O1dBREEsR0FFQSxTQUZBO1NBSk47UUFTRTs7WUFBSyxXQUFVLDRCQUFWLEVBQXVDLEtBQUksVUFBSixFQUE1QztVQUNJLGdCQUFNLFFBQU4sQ0FBZSxHQUFmLENBQW1CLFFBQW5CLEVBQTZCLEtBQUssYUFBTCxDQUFtQixJQUFuQixDQUF3QixJQUF4QixDQUE3QixDQURKO1VBR0ksZUFDQTs7Y0FBSyxXQUFVLHlCQUFWLEVBQUw7WUFBMkMsWUFBM0M7V0FEQSxHQUVBLFNBRkE7U0FaTjtPQURGLENBbEJPOzs7U0F4QlU7RUFBc0IsZ0JBQU0sU0FBTjs7a0JBQXRCOzs7QUFrRXJCLGNBQWMsU0FBZCxHQUEwQjtBQUN4QixhQUFXLGlCQUFVLE1BQVY7QUFDWCxTQUFPLGlCQUFVLE1BQVY7QUFDUCxZQUFVLGlCQUFVLElBQVY7QUFDVixTQUFPLGlCQUFVLFNBQVYsQ0FBb0IsQ0FDekIsaUJBQVUsSUFBVixFQUNBLGlCQUFVLE1BQVYsRUFDQSxpQkFBVSxLQUFWLENBQWdCO0FBQ2QsYUFBUyxpQkFBVSxNQUFWO0dBRFgsQ0FIeUIsQ0FBcEIsQ0FBUDtBQU9BLFFBQU0saUJBQVUsTUFBVjtBQUNOLGFBQVcsaUJBQVUsTUFBVjtBQUNYLFNBQU8saUJBQVUsTUFBVjtBQUNQLFFBQU0saUJBQVUsTUFBVjtBQUNOLFlBQVUsaUJBQVUsSUFBVjtBQUNWLFlBQVUsaUJBQVUsSUFBVjtDQWhCWjs7QUFtQkEsY0FBYyxhQUFkLEdBQThCLElBQTlCIiwiZmlsZSI6IkNoZWNrYm94R3JvdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tib3hHcm91cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgb25DaGFuZ2UoZSkge1xyXG4gICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcclxuICAgICAgY29uc3QgdmFsdWVzID0gW107XHJcbiAgICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2godGhpcy5wcm9wcy5jaGlsZHJlbiwgKGNoZWNrLCBpKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVmID0gY2hlY2sucHJvcHMucmVmIHx8ICdjaGVjaycgKyAoaSArIDEpO1xyXG4gICAgICAgIGNvbnN0IGVsID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzW3JlZl0pO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrRWwgPSBlbC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPWNoZWNrYm94XScpO1xyXG4gICAgICAgIGlmIChjaGVja0VsICYmIGNoZWNrRWwuY2hlY2tlZCkge1xyXG4gICAgICAgICAgdmFsdWVzLnB1c2goY2hlY2sucHJvcHMudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZSwgdmFsdWVzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlckNvbnRyb2woY2hlY2tib3gsIGkpIHtcclxuICAgIGNvbnN0IHByb3BzID0geyBncm91cGVkOiB0cnVlLCByZWY6IGNoZWNrYm94LnByb3BzLnJlZiB8fCAnY2hlY2snICsgKGkgKyAxKSB9O1xyXG4gICAgaWYgKHRoaXMucHJvcHMubmFtZSkge1xyXG4gICAgICBwcm9wcy5uYW1lID0gdGhpcy5wcm9wcy5uYW1lO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGVja2JveCwgcHJvcHMpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGxhYmVsLCB0b3RhbENvbHMsIGNvbHMsIHN0eWxlLCByZXF1aXJlZCwgZXJyb3IsIG9uQ2hhbmdlLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCBncnBDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcclxuICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICAnc2xkcy1mb3JtLWVsZW1lbnQnLFxyXG4gICAgICB7XHJcbiAgICAgICAgJ3NsZHMtaGFzLWVycm9yJzogZXJyb3IsXHJcbiAgICAgICAgJ3NsZHMtaXMtcmVxdWlyZWQnOiByZXF1aXJlZCxcclxuICAgICAgfSxcclxuICAgICAgdHlwZW9mIHRvdGFsQ29scyA9PT0gJ251bWJlcicgPyBgc2xkcy1zaXplLS0ke2NvbHMgfHwgMX0tb2YtJHt0b3RhbENvbHN9YCA6IG51bGxcclxuICAgICk7XHJcbiAgICBjb25zdCBncnBTdHlsZXMgPSB0eXBlb2YgdG90YWxDb2xzID09PSAnbnVtYmVyJyA/IHsgZGlzcGxheTogJ2lubGluZS1ibG9jaycsIC4uLnN0eWxlIH0gOiBzdHlsZTtcclxuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9XHJcbiAgICAgIGVycm9yID9cclxuICAgICAgKHR5cGVvZiBlcnJvciA9PT0gJ3N0cmluZycgPyBlcnJvciA6XHJcbiAgICAgICB0eXBlb2YgZXJyb3IgPT09ICdvYmplY3QnID8gZXJyb3IubWVzc2FnZSA6XHJcbiAgICAgICB1bmRlZmluZWQpIDpcclxuICAgICAgdW5kZWZpbmVkO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT17IGdycENsYXNzTmFtZXMgfSBzdHlsZT17IGdycFN0eWxlcyB9IG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpIH0geyAuLi5wcm9wcyB9ID5cclxuICAgICAgICA8bGVnZW5kIGNsYXNzTmFtZT0nc2xkcy1mb3JtLWVsZW1lbnRfX2xhYmVsIHNsZHMtZm9ybS1lbGVtZW50X19sYWJlbC0tdG9wJz5cclxuICAgICAgICAgIHsgbGFiZWwgfVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICByZXF1aXJlZCA/XHJcbiAgICAgICAgICAgIDxhYmJyIGNsYXNzTmFtZT0nc2xkcy1yZXF1aXJlZCc+KjwvYWJicj4gOlxyXG4gICAgICAgICAgICB1bmRlZmluZWRcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2xlZ2VuZD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1mb3JtLWVsZW1lbnRfX2NvbnRyb2wnIHJlZj0nY29udHJvbHMnPlxyXG4gICAgICAgICAgeyBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIHRoaXMucmVuZGVyQ29udHJvbC5iaW5kKHRoaXMpKSB9XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZSA/XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLWZvcm0tZWxlbWVudF9faGVscCc+eyBlcnJvck1lc3NhZ2UgfTwvZGl2PiA6XHJcbiAgICAgICAgICAgIHVuZGVmaW5lZFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5DaGVja2JveEdyb3VwLnByb3BUeXBlcyA9IHtcclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gIGVycm9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgIFByb3BUeXBlcy5ib29sLFxyXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgIG1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB9KSxcclxuICBdKSxcclxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHRvdGFsQ29sczogUHJvcFR5cGVzLm51bWJlcixcclxuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcclxuICBjb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbn07XHJcblxyXG5DaGVja2JveEdyb3VwLmlzRm9ybUVsZW1lbnQgPSB0cnVlO1xyXG4iXX0=