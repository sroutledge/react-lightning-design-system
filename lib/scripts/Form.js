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

var Form = function (_React$Component) {
  (0, _inherits3.default)(Form, _React$Component);

  function Form() {
    (0, _classCallCheck3.default)(this, Form);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Form).apply(this, arguments));
  }

  (0, _createClass3.default)(Form, [{
    key: 'renderFormElement',
    value: function renderFormElement(element) {
      var klass = element.type;
      if (!klass.isFormElement) {
        var _element$props = element.props;
        var _element$props$id = _element$props.id;
        var id = _element$props$id === undefined ? 'form-element-' + (0, _uuid2.default)() : _element$props$id;
        var label = _element$props.label;
        var required = _element$props.required;
        var error = _element$props.error;
        var totalCols = _element$props.totalCols;
        var cols = _element$props.cols;
        var children = _element$props.children;
        var props = (0, _objectWithoutProperties3.default)(_element$props, ['id', 'label', 'required', 'error', 'totalCols', 'cols', 'children']);

        var formElemProps = { id: id, label: label, required: required, error: error, totalCols: totalCols, cols: cols };
        return _react2.default.createElement(
          _FormElement2.default,
          formElemProps,
          _react2.default.cloneElement(element, { id: id, label: undefined, required: undefined, error: undefined })
        );
      }
      return element;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var type = _props.type;
      var children = _props.children;
      var props = (0, _objectWithoutProperties3.default)(_props, ['className', 'type', 'children']);

      var formClassNames = (0, _classnames2.default)(className, 'slds-form--' + type);
      return _react2.default.createElement(
        'form',
        (0, _extends3.default)({ className: formClassNames }, props),
        _react2.default.Children.map(children, this.renderFormElement.bind(this))
      );
    }
  }]);
  return Form;
}(_react2.default.Component);

exports.default = Form;


var FORM_TYPES = ['stacked', 'horizontal', 'inline', 'compound'];

Form.propTypes = {
  className: _react.PropTypes.string,
  type: _react.PropTypes.oneOf(FORM_TYPES),
  children: _react.PropTypes.node
};

Form.defaultProps = {
  type: 'stacked'
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0Zvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFHcUIsSTs7Ozs7Ozs7OztzQ0FDRCxPLEVBQVM7QUFDekIsVUFBTSxRQUFRLFFBQVEsSUFBdEI7QUFDQSxVQUFJLENBQUMsTUFBTSxhQUFYLEVBQTBCO0FBQUEsNkJBQytFLFFBQVEsS0FEdkY7QUFBQSwrQ0FDaEIsRUFEZ0I7QUFBQSxZQUNoQixFQURnQix1REFDSyxxQkFETDtBQUFBLFlBQ2UsS0FEZixrQkFDZSxLQURmO0FBQUEsWUFDc0IsUUFEdEIsa0JBQ3NCLFFBRHRCO0FBQUEsWUFDZ0MsS0FEaEMsa0JBQ2dDLEtBRGhDO0FBQUEsWUFDdUMsU0FEdkMsa0JBQ3VDLFNBRHZDO0FBQUEsWUFDa0QsSUFEbEQsa0JBQ2tELElBRGxEO0FBQUEsWUFDd0QsUUFEeEQsa0JBQ3dELFFBRHhEO0FBQUEsWUFDcUUsS0FEckU7O0FBRXhCLFlBQU0sZ0JBQWdCLEVBQUUsTUFBRixFQUFNLFlBQU4sRUFBYSxrQkFBYixFQUF1QixZQUF2QixFQUE4QixvQkFBOUIsRUFBeUMsVUFBekMsRUFBdEI7QUFDQSxlQUNFO0FBQUE7VUFBa0IsYUFBbEI7VUFDSSxnQkFBTSxZQUFOLENBQW1CLE9BQW5CLEVBQTRCLEVBQUUsTUFBRixFQUFNLE9BQU8sU0FBYixFQUF3QixVQUFVLFNBQWxDLEVBQTZDLE9BQU8sU0FBcEQsRUFBNUI7QUFESixTQURGO0FBS0Q7QUFDRCxhQUFPLE9BQVA7QUFDRDs7OzZCQUVRO0FBQUEsbUJBQ3lDLEtBQUssS0FEOUM7QUFBQSxVQUNDLFNBREQsVUFDQyxTQUREO0FBQUEsVUFDWSxJQURaLFVBQ1ksSUFEWjtBQUFBLFVBQ2tCLFFBRGxCLFVBQ2tCLFFBRGxCO0FBQUEsVUFDK0IsS0FEL0I7O0FBRVAsVUFBTSxpQkFBaUIsMEJBQVcsU0FBWCxrQkFBb0MsSUFBcEMsQ0FBdkI7QUFDQSxhQUNFO0FBQUE7UUFBQSx5QkFBTSxXQUFZLGNBQWxCLElBQXdDLEtBQXhDO1FBQ0ksZ0JBQU0sUUFBTixDQUFlLEdBQWYsQ0FBbUIsUUFBbkIsRUFBNkIsS0FBSyxpQkFBTCxDQUF1QixJQUF2QixDQUE0QixJQUE1QixDQUE3QjtBQURKLE9BREY7QUFLRDs7O0VBdkIrQixnQkFBTSxTOztrQkFBbkIsSTs7O0FBMEJyQixJQUFNLGFBQWEsQ0FBQyxTQUFELEVBQVksWUFBWixFQUEwQixRQUExQixFQUFvQyxVQUFwQyxDQUFuQjs7QUFFQSxLQUFLLFNBQUwsR0FBaUI7QUFDZixhQUFXLGlCQUFVLE1BRE47QUFFZixRQUFNLGlCQUFVLEtBQVYsQ0FBZ0IsVUFBaEIsQ0FGUztBQUdmLFlBQVUsaUJBQVU7QUFITCxDQUFqQjs7QUFNQSxLQUFLLFlBQUwsR0FBb0I7QUFDbEIsUUFBTTtBQURZLENBQXBCIiwiZmlsZSI6IkZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHV1aWQgZnJvbSAndXVpZCc7XHJcbmltcG9ydCBGb3JtRWxlbWVudCBmcm9tICcuL0Zvcm1FbGVtZW50JztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXJGb3JtRWxlbWVudChlbGVtZW50KSB7XHJcbiAgICBjb25zdCBrbGFzcyA9IGVsZW1lbnQudHlwZTtcclxuICAgIGlmICgha2xhc3MuaXNGb3JtRWxlbWVudCkge1xyXG4gICAgICBjb25zdCB7IGlkID0gYGZvcm0tZWxlbWVudC0ke3V1aWQoKX1gLCBsYWJlbCwgcmVxdWlyZWQsIGVycm9yLCB0b3RhbENvbHMsIGNvbHMsIGNoaWxkcmVuLCAuLi5wcm9wcyB9ID0gZWxlbWVudC5wcm9wcztcclxuICAgICAgY29uc3QgZm9ybUVsZW1Qcm9wcyA9IHsgaWQsIGxhYmVsLCByZXF1aXJlZCwgZXJyb3IsIHRvdGFsQ29scywgY29scyB9O1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGb3JtRWxlbWVudCB7IC4uLmZvcm1FbGVtUHJvcHMgfT5cclxuICAgICAgICAgIHsgUmVhY3QuY2xvbmVFbGVtZW50KGVsZW1lbnQsIHsgaWQsIGxhYmVsOiB1bmRlZmluZWQsIHJlcXVpcmVkOiB1bmRlZmluZWQsIGVycm9yOiB1bmRlZmluZWQgfSkgfVxyXG4gICAgICAgIDwvRm9ybUVsZW1lbnQ+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCB0eXBlLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCBmb3JtQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoY2xhc3NOYW1lLCBgc2xkcy1mb3JtLS0ke3R5cGV9YCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9eyBmb3JtQ2xhc3NOYW1lcyB9IHsgLi4ucHJvcHMgfT5cclxuICAgICAgICB7IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgdGhpcy5yZW5kZXJGb3JtRWxlbWVudC5iaW5kKHRoaXMpKSB9XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBGT1JNX1RZUEVTID0gWydzdGFja2VkJywgJ2hvcml6b250YWwnLCAnaW5saW5lJywgJ2NvbXBvdW5kJ107XHJcblxyXG5Gb3JtLnByb3BUeXBlcyA9IHtcclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKEZPUk1fVFlQRVMpLFxyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxufTtcclxuXHJcbkZvcm0uZGVmYXVsdFByb3BzID0ge1xyXG4gIHR5cGU6ICdzdGFja2VkJyxcclxufTtcclxuIl19