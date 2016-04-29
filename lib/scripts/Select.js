'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Option = undefined;

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

var Select = function (_React$Component) {
  (0, _inherits3.default)(Select, _React$Component);

  function Select(props) {
    (0, _classCallCheck3.default)(this, Select);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Select).call(this, props));

    _this.state = { id: 'form-element-' + (0, _uuid2.default)() };
    return _this;
  }

  (0, _createClass3.default)(Select, [{
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
      var id = this.props.id || this.state.id;
      var _props = this.props;
      var label = _props.label;
      var required = _props.required;
      var error = _props.error;
      var props = (0, _objectWithoutProperties3.default)(_props, ['label', 'required', 'error']);

      if (label || required || error) {
        var formElemProps = { id: id, label: label, required: required, error: error };
        return _react2.default.createElement(
          _FormElement2.default,
          formElemProps,
          _react2.default.createElement(Select, (0, _extends3.default)({}, props, { id: id }))
        );
      }
      var className = props.className;
      var children = props.children;
      var onChange = props.onChange;
      var pprops = (0, _objectWithoutProperties3.default)(props, ['className', 'children', 'onChange']);

      var selectClassNames = (0, _classnames2.default)(className, 'slds-select');
      return _react2.default.createElement(
        'select',
        (0, _extends3.default)({
          id: id,
          className: selectClassNames,
          onChange: this.onChange.bind(this)
        }, pprops),
        children
      );
    }
  }]);
  return Select;
}(_react2.default.Component);

exports.default = Select;


Select.propTypes = {
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
  onChange: _react.PropTypes.func
};

var Option = exports.Option = function (_React$Component2) {
  (0, _inherits3.default)(Option, _React$Component2);

  function Option() {
    (0, _classCallCheck3.default)(this, Option);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Option).apply(this, arguments));
  }

  (0, _createClass3.default)(Option, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('option', this.props);
    }
  }]);
  return Option;
}(_react2.default.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1NlbGVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFHcUI7OztBQUNuQixXQURtQixNQUNuQixDQUFZLEtBQVosRUFBbUI7d0NBREEsUUFDQTs7NkZBREEsbUJBRVgsUUFEVzs7QUFFakIsVUFBSyxLQUFMLEdBQWEsRUFBRSxzQkFBb0IscUJBQXBCLEVBQWYsQ0FGaUI7O0dBQW5COzs2QkFEbUI7OzZCQU1WLEdBQUc7QUFDVixVQUFNLFFBQVEsRUFBRSxNQUFGLENBQVMsS0FBVCxDQURKO0FBRVYsVUFBSSxLQUFLLEtBQUwsQ0FBVyxRQUFYLEVBQXFCO0FBQ3ZCLGFBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsQ0FBcEIsRUFBdUIsS0FBdkIsRUFEdUI7T0FBekI7Ozs7NkJBS087QUFDUCxVQUFNLEtBQUssS0FBSyxLQUFMLENBQVcsRUFBWCxJQUFpQixLQUFLLEtBQUwsQ0FBVyxFQUFYLENBRHJCO21CQUVzQyxLQUFLLEtBQUwsQ0FGdEM7VUFFQyxxQkFGRDtVQUVRLDJCQUZSO1VBRWtCLHFCQUZsQjtVQUU0Qix1RkFGNUI7O0FBR1AsVUFBSSxTQUFTLFFBQVQsSUFBcUIsS0FBckIsRUFBNEI7QUFDOUIsWUFBTSxnQkFBZ0IsRUFBRSxNQUFGLEVBQU0sWUFBTixFQUFhLGtCQUFiLEVBQXVCLFlBQXZCLEVBQWhCLENBRHdCO0FBRTlCLGVBQ0U7O1VBQWtCLGFBQWxCO1VBQ0UsOEJBQUMsTUFBRCw2QkFBa0IsU0FBTyxTQUF6QixDQURGO1NBREYsQ0FGOEI7T0FBaEM7VUFRUSxZQUE2QyxNQUE3QyxVQVhEO1VBV1ksV0FBa0MsTUFBbEMsU0FYWjtVQVdzQixXQUF3QixNQUF4QixTQVh0QjtVQVdtQyxnREFBVyw4Q0FYOUM7O0FBWVAsVUFBTSxtQkFBbUIsMEJBQVcsU0FBWCxFQUFzQixhQUF0QixDQUFuQixDQVpDO0FBYVAsYUFDRTs7O0FBQ0UsY0FBSyxFQUFMO0FBQ0EscUJBQVksZ0JBQVo7QUFDQSxvQkFBVyxLQUFLLFFBQUwsQ0FBYyxJQUFkLENBQW1CLElBQW5CLENBQVg7V0FDSyxPQUpQO1FBTUksUUFOSjtPQURGLENBYk87OztTQWJVO0VBQWUsZ0JBQU0sU0FBTjs7a0JBQWY7OztBQXdDckIsT0FBTyxTQUFQLEdBQW1CO0FBQ2pCLE1BQUksaUJBQVUsTUFBVjtBQUNKLGFBQVcsaUJBQVUsTUFBVjtBQUNYLFNBQU8saUJBQVUsTUFBVjtBQUNQLFlBQVUsaUJBQVUsSUFBVjtBQUNWLFNBQU8saUJBQVUsU0FBVixDQUFvQixDQUN6QixpQkFBVSxJQUFWLEVBQ0EsaUJBQVUsTUFBVixFQUNBLGlCQUFVLEtBQVYsQ0FBZ0I7QUFDZCxhQUFTLGlCQUFVLE1BQVY7R0FEWCxDQUh5QixDQUFwQixDQUFQO0FBT0EsU0FBTyxpQkFBVSxHQUFWO0FBQ1AsZ0JBQWMsaUJBQVUsR0FBVjtBQUNkLGVBQWEsaUJBQVUsTUFBVjtBQUNiLFlBQVUsaUJBQVUsSUFBVjtDQWZaOztJQWtCYTs7Ozs7Ozs7Ozs2QkFDRjtBQUNQLGFBQU8sd0NBQWEsS0FBSyxLQUFMLENBQXBCLENBRE87OztTQURFO0VBQWUsZ0JBQU0sU0FBTiIsImZpbGUiOiJTZWxlY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHV1aWQgZnJvbSAndXVpZCc7XHJcbmltcG9ydCBGb3JtRWxlbWVudCBmcm9tICcuL0Zvcm1FbGVtZW50JztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWxlY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0geyBpZDogYGZvcm0tZWxlbWVudC0ke3V1aWQoKX1gIH07XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZShlKSB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcclxuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlLCB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBpZCA9IHRoaXMucHJvcHMuaWQgfHwgdGhpcy5zdGF0ZS5pZDtcclxuICAgIGNvbnN0IHsgbGFiZWwsIHJlcXVpcmVkLCBlcnJvciwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBpZiAobGFiZWwgfHwgcmVxdWlyZWQgfHwgZXJyb3IpIHtcclxuICAgICAgY29uc3QgZm9ybUVsZW1Qcm9wcyA9IHsgaWQsIGxhYmVsLCByZXF1aXJlZCwgZXJyb3IgfTtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8Rm9ybUVsZW1lbnQgeyAuLi5mb3JtRWxlbVByb3BzIH0+XHJcbiAgICAgICAgICA8U2VsZWN0IHsgLi4ueyAuLi5wcm9wcywgaWQgfSB9IC8+XHJcbiAgICAgICAgPC9Gb3JtRWxlbWVudD5cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgb25DaGFuZ2UsIC4uLnBwcm9wcyB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBzZWxlY3RDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhjbGFzc05hbWUsICdzbGRzLXNlbGVjdCcpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHNlbGVjdFxyXG4gICAgICAgIGlkPXsgaWQgfVxyXG4gICAgICAgIGNsYXNzTmFtZT17IHNlbGVjdENsYXNzTmFtZXMgfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpIH1cclxuICAgICAgICB7IC4uLnBwcm9wcyB9XHJcbiAgICAgID5cclxuICAgICAgICB7IGNoaWxkcmVuIH1cclxuICAgICAgPC9zZWxlY3Q+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblNlbGVjdC5wcm9wVHlwZXMgPSB7XHJcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICBlcnJvcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICBQcm9wVHlwZXMuYm9vbCxcclxuICAgIFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICBtZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgfSksXHJcbiAgXSksXHJcbiAgdmFsdWU6IFByb3BUeXBlcy5hbnksXHJcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuYW55LFxyXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBPcHRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiA8b3B0aW9uIHsgLi4udGhpcy5wcm9wcyB9IC8+O1xyXG4gIH1cclxufVxyXG4iXX0=