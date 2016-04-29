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

var Textarea = function (_React$Component) {
  (0, _inherits3.default)(Textarea, _React$Component);

  function Textarea(props) {
    (0, _classCallCheck3.default)(this, Textarea);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Textarea).call(this, props));

    _this.state = { id: 'form-element-' + (0, _uuid2.default)() };
    return _this;
  }

  (0, _createClass3.default)(Textarea, [{
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
          _react2.default.createElement(Textarea, (0, _extends3.default)({}, props, { id: id }))
        );
      }
      var className = props.className;
      var onChange = props.onChange;
      var pprops = (0, _objectWithoutProperties3.default)(props, ['className', 'onChange']);

      var taClassNames = (0, _classnames2.default)(className, 'slds-input');
      return _react2.default.createElement('textarea', (0, _extends3.default)({
        id: id,
        className: taClassNames,
        onChange: this.onChange.bind(this)
      }, pprops));
    }
  }]);
  return Textarea;
}(_react2.default.Component);

exports.default = Textarea;


Textarea.propTypes = {
  id: _react.PropTypes.string,
  className: _react.PropTypes.string,
  label: _react.PropTypes.string,
  required: _react.PropTypes.bool,
  error: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.string, _react.PropTypes.shape({
    message: _react.PropTypes.string
  })]),
  value: _react.PropTypes.string,
  defaultValue: _react.PropTypes.string,
  placeholder: _react.PropTypes.string,
  onChange: _react.PropTypes.func
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1RleHRhcmVhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBR3FCOzs7QUFDbkIsV0FEbUIsUUFDbkIsQ0FBWSxLQUFaLEVBQW1CO3dDQURBLFVBQ0E7OzZGQURBLHFCQUVYLFFBRFc7O0FBRWpCLFVBQUssS0FBTCxHQUFhLEVBQUUsc0JBQW9CLHFCQUFwQixFQUFmLENBRmlCOztHQUFuQjs7NkJBRG1COzs2QkFNVixHQUFHO0FBQ1YsVUFBTSxRQUFRLEVBQUUsTUFBRixDQUFTLEtBQVQsQ0FESjtBQUVWLFVBQUksS0FBSyxLQUFMLENBQVcsUUFBWCxFQUFxQjtBQUN2QixhQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLENBQXBCLEVBQXVCLEtBQXZCLEVBRHVCO09BQXpCOzs7OzZCQUtPO0FBQ1AsVUFBTSxLQUFLLEtBQUssS0FBTCxDQUFXLEVBQVgsSUFBaUIsS0FBSyxLQUFMLENBQVcsRUFBWCxDQURyQjttQkFFc0MsS0FBSyxLQUFMLENBRnRDO1VBRUMscUJBRkQ7VUFFUSwyQkFGUjtVQUVrQixxQkFGbEI7VUFFNEIsdUZBRjVCOztBQUdQLFVBQUksU0FBUyxRQUFULElBQXFCLEtBQXJCLEVBQTRCO0FBQzlCLFlBQU0sZ0JBQWdCLEVBQUUsTUFBRixFQUFNLFlBQU4sRUFBYSxrQkFBYixFQUF1QixZQUF2QixFQUFoQixDQUR3QjtBQUU5QixlQUNFOztVQUFrQixhQUFsQjtVQUNFLDhCQUFDLFFBQUQsNkJBQW9CLFNBQU8sU0FBM0IsQ0FERjtTQURGLENBRjhCO09BQWhDO1VBUVEsWUFBbUMsTUFBbkMsVUFYRDtVQVdZLFdBQXdCLE1BQXhCLFNBWFo7VUFXeUIsZ0RBQVcsa0NBWHBDOztBQVlQLFVBQU0sZUFBZSwwQkFBVyxTQUFYLEVBQXNCLFlBQXRCLENBQWYsQ0FaQztBQWFQLGFBQ0U7QUFDRSxZQUFLLEVBQUw7QUFDQSxtQkFBWSxZQUFaO0FBQ0Esa0JBQVcsS0FBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixJQUFuQixDQUFYO1NBQ0ssT0FKUCxDQURGLENBYk87OztTQWJVO0VBQWlCLGdCQUFNLFNBQU47O2tCQUFqQjs7O0FBcUNyQixTQUFTLFNBQVQsR0FBcUI7QUFDbkIsTUFBSSxpQkFBVSxNQUFWO0FBQ0osYUFBVyxpQkFBVSxNQUFWO0FBQ1gsU0FBTyxpQkFBVSxNQUFWO0FBQ1AsWUFBVSxpQkFBVSxJQUFWO0FBQ1YsU0FBTyxpQkFBVSxTQUFWLENBQW9CLENBQ3pCLGlCQUFVLElBQVYsRUFDQSxpQkFBVSxNQUFWLEVBQ0EsaUJBQVUsS0FBVixDQUFnQjtBQUNkLGFBQVMsaUJBQVUsTUFBVjtHQURYLENBSHlCLENBQXBCLENBQVA7QUFPQSxTQUFPLGlCQUFVLE1BQVY7QUFDUCxnQkFBYyxpQkFBVSxNQUFWO0FBQ2QsZUFBYSxpQkFBVSxNQUFWO0FBQ2IsWUFBVSxpQkFBVSxJQUFWO0NBZloiLCJmaWxlIjoiVGV4dGFyZWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHV1aWQgZnJvbSAndXVpZCc7XHJcbmltcG9ydCBGb3JtRWxlbWVudCBmcm9tICcuL0Zvcm1FbGVtZW50JztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXh0YXJlYSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7IGlkOiBgZm9ybS1lbGVtZW50LSR7dXVpZCgpfWAgfTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlKGUpIHtcclxuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xyXG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGUsIHZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGlkID0gdGhpcy5wcm9wcy5pZCB8fCB0aGlzLnN0YXRlLmlkO1xyXG4gICAgY29uc3QgeyBsYWJlbCwgcmVxdWlyZWQsIGVycm9yLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcclxuICAgIGlmIChsYWJlbCB8fCByZXF1aXJlZCB8fCBlcnJvcikge1xyXG4gICAgICBjb25zdCBmb3JtRWxlbVByb3BzID0geyBpZCwgbGFiZWwsIHJlcXVpcmVkLCBlcnJvciB9O1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGb3JtRWxlbWVudCB7IC4uLmZvcm1FbGVtUHJvcHMgfT5cclxuICAgICAgICAgIDxUZXh0YXJlYSB7IC4uLnsgLi4ucHJvcHMsIGlkIH0gfSAvPlxyXG4gICAgICAgIDwvRm9ybUVsZW1lbnQ+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgb25DaGFuZ2UsIC4uLnBwcm9wcyB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCB0YUNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSwgJ3NsZHMtaW5wdXQnKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgIGlkPXsgaWQgfVxyXG4gICAgICAgIGNsYXNzTmFtZT17IHRhQ2xhc3NOYW1lcyB9XHJcbiAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcykgfVxyXG4gICAgICAgIHsgLi4ucHByb3BzIH1cclxuICAgICAgLz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5UZXh0YXJlYS5wcm9wVHlwZXMgPSB7XHJcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICBlcnJvcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICBQcm9wVHlwZXMuYm9vbCxcclxuICAgIFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICBtZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgfSksXHJcbiAgXSksXHJcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcclxufTtcclxuIl19