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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0Zvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFHcUI7Ozs7Ozs7Ozs7c0NBQ0QsU0FBUztBQUN6QixVQUFNLFFBQVEsUUFBUSxJQUFSLENBRFc7QUFFekIsVUFBSSxDQUFDLE1BQU0sYUFBTixFQUFxQjs2QkFDK0UsUUFBUSxLQUFSLENBRC9FOytDQUNoQixHQURnQjtZQUNoQix5REFBcUIsMENBREw7WUFDZSw2QkFEZjtZQUNzQixtQ0FEdEI7WUFDZ0MsNkJBRGhDO1lBQ3VDLHFDQUR2QztZQUNrRCwyQkFEbEQ7WUFDd0QsbUNBRHhEO1lBQ3FFLHNJQURyRTs7QUFFeEIsWUFBTSxnQkFBZ0IsRUFBRSxNQUFGLEVBQU0sWUFBTixFQUFhLGtCQUFiLEVBQXVCLFlBQXZCLEVBQThCLG9CQUE5QixFQUF5QyxVQUF6QyxFQUFoQixDQUZrQjtBQUd4QixlQUNFOztVQUFrQixhQUFsQjtVQUNJLGdCQUFNLFlBQU4sQ0FBbUIsT0FBbkIsRUFBNEIsRUFBRSxNQUFGLEVBQU0sT0FBTyxTQUFQLEVBQWtCLFVBQVUsU0FBVixFQUFxQixPQUFPLFNBQVAsRUFBekUsQ0FESjtTQURGLENBSHdCO09BQTFCO0FBU0EsYUFBTyxPQUFQLENBWHlCOzs7OzZCQWNsQjttQkFDeUMsS0FBSyxLQUFMLENBRHpDO1VBQ0MsNkJBREQ7VUFDWSxtQkFEWjtVQUNrQiwyQkFEbEI7VUFDK0IsMEZBRC9COztBQUVQLFVBQU0saUJBQWlCLDBCQUFXLFNBQVgsa0JBQW9DLElBQXBDLENBQWpCLENBRkM7QUFHUCxhQUNFOztpQ0FBTSxXQUFZLGNBQVosSUFBa0MsTUFBeEM7UUFDSSxnQkFBTSxRQUFOLENBQWUsR0FBZixDQUFtQixRQUFuQixFQUE2QixLQUFLLGlCQUFMLENBQXVCLElBQXZCLENBQTRCLElBQTVCLENBQTdCLENBREo7T0FERixDQUhPOzs7U0FmVTtFQUFhLGdCQUFNLFNBQU47O2tCQUFiOzs7QUEwQnJCLElBQU0sYUFBYSxDQUFDLFNBQUQsRUFBWSxZQUFaLEVBQTBCLFFBQTFCLEVBQW9DLFVBQXBDLENBQWI7O0FBRU4sS0FBSyxTQUFMLEdBQWlCO0FBQ2YsYUFBVyxpQkFBVSxNQUFWO0FBQ1gsUUFBTSxpQkFBVSxLQUFWLENBQWdCLFVBQWhCLENBQU47QUFDQSxZQUFVLGlCQUFVLElBQVY7Q0FIWjs7QUFNQSxLQUFLLFlBQUwsR0FBb0I7QUFDbEIsUUFBTSxTQUFOO0NBREYiLCJmaWxlIjoiRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkJztcclxuaW1wb3J0IEZvcm1FbGVtZW50IGZyb20gJy4vRm9ybUVsZW1lbnQnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlckZvcm1FbGVtZW50KGVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGtsYXNzID0gZWxlbWVudC50eXBlO1xyXG4gICAgaWYgKCFrbGFzcy5pc0Zvcm1FbGVtZW50KSB7XHJcbiAgICAgIGNvbnN0IHsgaWQgPSBgZm9ybS1lbGVtZW50LSR7dXVpZCgpfWAsIGxhYmVsLCByZXF1aXJlZCwgZXJyb3IsIHRvdGFsQ29scywgY29scywgY2hpbGRyZW4sIC4uLnByb3BzIH0gPSBlbGVtZW50LnByb3BzO1xyXG4gICAgICBjb25zdCBmb3JtRWxlbVByb3BzID0geyBpZCwgbGFiZWwsIHJlcXVpcmVkLCBlcnJvciwgdG90YWxDb2xzLCBjb2xzIH07XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZvcm1FbGVtZW50IHsgLi4uZm9ybUVsZW1Qcm9wcyB9PlxyXG4gICAgICAgICAgeyBSZWFjdC5jbG9uZUVsZW1lbnQoZWxlbWVudCwgeyBpZCwgbGFiZWw6IHVuZGVmaW5lZCwgcmVxdWlyZWQ6IHVuZGVmaW5lZCwgZXJyb3I6IHVuZGVmaW5lZCB9KSB9XHJcbiAgICAgICAgPC9Gb3JtRWxlbWVudD5cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHJldHVybiBlbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjbGFzc05hbWUsIHR5cGUsIGNoaWxkcmVuLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IGZvcm1DbGFzc05hbWVzID0gY2xhc3NuYW1lcyhjbGFzc05hbWUsIGBzbGRzLWZvcm0tLSR7dHlwZX1gKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT17IGZvcm1DbGFzc05hbWVzIH0geyAuLi5wcm9wcyB9PlxyXG4gICAgICAgIHsgUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCB0aGlzLnJlbmRlckZvcm1FbGVtZW50LmJpbmQodGhpcykpIH1cclxuICAgICAgPC9mb3JtPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IEZPUk1fVFlQRVMgPSBbJ3N0YWNrZWQnLCAnaG9yaXpvbnRhbCcsICdpbmxpbmUnLCAnY29tcG91bmQnXTtcclxuXHJcbkZvcm0ucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICB0eXBlOiBQcm9wVHlwZXMub25lT2YoRk9STV9UWVBFUyksXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG59O1xyXG5cclxuRm9ybS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgdHlwZTogJ3N0YWNrZWQnLFxyXG59O1xyXG4iXX0=