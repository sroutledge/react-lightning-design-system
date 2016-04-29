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

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _FormElement = require('./FormElement');

var _FormElement2 = _interopRequireDefault(_FormElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = function (_React$Component) {
  (0, _inherits3.default)(Input, _React$Component);

  function Input() {
    (0, _classCallCheck3.default)(this, Input);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Input).apply(this, arguments));
  }

  (0, _createClass3.default)(Input, [{
    key: 'onChange',
    value: function onChange(e) {
      var value = e.target.value;
      if (this.props.onChange) {
        this.props.onChange(e, value);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var _props$id = _props.id;
      var id = _props$id === undefined ? 'input-' + (0, _uuid2.default)() : _props$id;
      var label = _props.label;
      var required = _props.required;
      var error = _props.error;
      var props = (0, _objectWithoutProperties3.default)(_props, ['id', 'label', 'required', 'error']);

      if (label || required || error) {
        var formElemProps = { id: id, label: label, required: required, error: error };
        return _react2.default.createElement(
          _FormElement2.default,
          formElemProps,
          _react2.default.createElement(Input, (0, _extends3.default)({}, props, { id: id }))
        );
      }
      var className = props.className;
      var type = props.type;
      var bare = props.bare;
      var onChange = props.onChange;
      var pprops = (0, _objectWithoutProperties3.default)(props, ['className', 'type', 'bare', 'onChange']);

      var inputClassNames = (0, _classnames2.default)(className, bare ? 'slds-input--bare' : 'slds-input');
      return _react2.default.createElement('input', (0, _extends3.default)({ className: inputClassNames,
        id: id,
        type: type,
        onChange: this.onChange.bind(this)
      }, pprops));
    }
  }]);
  return Input;
}(_react2.default.Component);

exports.default = Input;


Input.propTypes = {
  id: _react.PropTypes.string,
  className: _react.PropTypes.string,
  label: _react.PropTypes.string,
  required: _react.PropTypes.bool,
  error: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.string, _react.PropTypes.shape({
    message: _react.PropTypes.string
  })]),
  value: _react.PropTypes.any,
  defaultValue: _react.PropTypes.any,
  placeholder: _react.PropTypes.string,
  bare: _react.PropTypes.bool,
  onChange: _react.PropTypes.func
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0lucHV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBR3FCOzs7Ozs7Ozs7OzZCQUNWLEdBQUc7QUFDVixVQUFNLFFBQVEsRUFBRSxNQUFGLENBQVMsS0FBVCxDQURKO0FBRVYsVUFBSSxLQUFLLEtBQUwsQ0FBVyxRQUFYLEVBQXFCO0FBQ3ZCLGFBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsQ0FBcEIsRUFBdUIsS0FBdkIsRUFEdUI7T0FBekI7Ozs7NkJBS087bUJBQzhELEtBQUssS0FBTCxDQUQ5RDs2QkFDQyxHQUREO1VBQ0MsMENBQWMsa0NBRGY7VUFDeUIscUJBRHpCO1VBQ2dDLDJCQURoQztVQUMwQyxxQkFEMUM7VUFDb0QsNkZBRHBEOztBQUVQLFVBQUksU0FBUyxRQUFULElBQXFCLEtBQXJCLEVBQTRCO0FBQzlCLFlBQU0sZ0JBQWdCLEVBQUUsTUFBRixFQUFNLFlBQU4sRUFBYSxrQkFBYixFQUF1QixZQUF2QixFQUFoQixDQUR3QjtBQUU5QixlQUNFOztVQUFrQixhQUFsQjtVQUNFLDhCQUFDLEtBQUQsNkJBQWlCLFNBQU8sU0FBeEIsQ0FERjtTQURGLENBRjhCO09BQWhDO1VBUVEsWUFBK0MsTUFBL0MsVUFWRDtVQVVZLE9BQW9DLE1BQXBDLEtBVlo7VUFVa0IsT0FBOEIsTUFBOUIsS0FWbEI7VUFVd0IsV0FBd0IsTUFBeEIsU0FWeEI7VUFVcUMsZ0RBQVcsa0RBVmhEOztBQVdQLFVBQU0sa0JBQWtCLDBCQUFXLFNBQVgsRUFBc0IsT0FBTyxrQkFBUCxHQUE0QixZQUE1QixDQUF4QyxDQVhDO0FBWVAsYUFDRSxnRUFBTyxXQUFZLGVBQVo7QUFDTCxZQUFLLEVBQUw7QUFDQSxjQUFPLElBQVA7QUFDQSxrQkFBVyxLQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLElBQW5CLENBQVg7U0FDSyxPQUpQLENBREYsQ0FaTzs7O1NBUlU7RUFBYyxnQkFBTSxTQUFOOztrQkFBZDs7O0FBK0JyQixNQUFNLFNBQU4sR0FBa0I7QUFDaEIsTUFBSSxpQkFBVSxNQUFWO0FBQ0osYUFBVyxpQkFBVSxNQUFWO0FBQ1gsU0FBTyxpQkFBVSxNQUFWO0FBQ1AsWUFBVSxpQkFBVSxJQUFWO0FBQ1YsU0FBTyxpQkFBVSxTQUFWLENBQW9CLENBQ3pCLGlCQUFVLElBQVYsRUFDQSxpQkFBVSxNQUFWLEVBQ0EsaUJBQVUsS0FBVixDQUFnQjtBQUNkLGFBQVMsaUJBQVUsTUFBVjtHQURYLENBSHlCLENBQXBCLENBQVA7QUFPQSxTQUFPLGlCQUFVLEdBQVY7QUFDUCxnQkFBYyxpQkFBVSxHQUFWO0FBQ2QsZUFBYSxpQkFBVSxNQUFWO0FBQ2IsUUFBTSxpQkFBVSxJQUFWO0FBQ04sWUFBVSxpQkFBVSxJQUFWO0NBaEJaIiwiZmlsZSI6IklucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB1dWlkIGZyb20gJ3V1aWQnO1xyXG5pbXBvcnQgRm9ybUVsZW1lbnQgZnJvbSAnLi9Gb3JtRWxlbWVudCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIG9uQ2hhbmdlKGUpIHtcclxuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xyXG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGUsIHZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgaWQgPSBgaW5wdXQtJHt1dWlkKCl9YCwgbGFiZWwsIHJlcXVpcmVkLCBlcnJvciwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBpZiAobGFiZWwgfHwgcmVxdWlyZWQgfHwgZXJyb3IpIHtcclxuICAgICAgY29uc3QgZm9ybUVsZW1Qcm9wcyA9IHsgaWQsIGxhYmVsLCByZXF1aXJlZCwgZXJyb3IgfTtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8Rm9ybUVsZW1lbnQgeyAuLi5mb3JtRWxlbVByb3BzIH0+XHJcbiAgICAgICAgICA8SW5wdXQgeyAuLi57IC4uLnByb3BzLCBpZCB9IH0gLz5cclxuICAgICAgICA8L0Zvcm1FbGVtZW50PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgY29uc3QgeyBjbGFzc05hbWUsIHR5cGUsIGJhcmUsIG9uQ2hhbmdlLCAuLi5wcHJvcHMgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgaW5wdXRDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhjbGFzc05hbWUsIGJhcmUgPyAnc2xkcy1pbnB1dC0tYmFyZScgOiAnc2xkcy1pbnB1dCcpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGlucHV0IGNsYXNzTmFtZT17IGlucHV0Q2xhc3NOYW1lcyB9XHJcbiAgICAgICAgaWQ9eyBpZCB9XHJcbiAgICAgICAgdHlwZT17IHR5cGUgfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpIH1cclxuICAgICAgICB7IC4uLnBwcm9wcyB9XHJcbiAgICAgIC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuSW5wdXQucHJvcFR5cGVzID0ge1xyXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcclxuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgZXJyb3I6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgbWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIH0pLFxyXG4gIF0pLFxyXG4gIHZhbHVlOiBQcm9wVHlwZXMuYW55LFxyXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLmFueSxcclxuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICBiYXJlOiBQcm9wVHlwZXMuYm9vbCxcclxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXHJcbn07XHJcbiJdfQ==