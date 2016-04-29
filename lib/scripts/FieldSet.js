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

var FieldSet = function (_React$Component) {
  (0, _inherits3.default)(FieldSet, _React$Component);

  function FieldSet() {
    (0, _classCallCheck3.default)(this, FieldSet);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(FieldSet).apply(this, arguments));
  }

  (0, _createClass3.default)(FieldSet, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var label = _props.label;
      var children = _props.children;
      var props = (0, _objectWithoutProperties3.default)(_props, ['className', 'label', 'children']);

      var fsClassNames = (0, _classnames2.default)(className, 'slds-form--compound');
      return _react2.default.createElement(
        'fieldset',
        (0, _extends3.default)({ className: fsClassNames }, props),
        label ? _react2.default.createElement(
          'legend',
          { className: 'slds-form-element__label' },
          label
        ) : null,
        _react2.default.createElement(
          'div',
          { className: 'form-element__group' },
          children
        )
      );
    }
  }]);
  return FieldSet;
}(_react2.default.Component);

FieldSet.propTypes = {
  className: _react.PropTypes.string,
  label: _react.PropTypes.string,
  children: _react.PropTypes.node
};

FieldSet.isFormElement = true;

var Row = function (_React$Component2) {
  (0, _inherits3.default)(Row, _React$Component2);

  function Row() {
    (0, _classCallCheck3.default)(this, Row);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Row).apply(this, arguments));
  }

  (0, _createClass3.default)(Row, [{
    key: 'renderChild',
    value: function renderChild(totalCols, child) {
      var klass = child.type;
      if (!klass.isFormElement) {
        var _child$props = child.props;
        var _child$props$id = _child$props.id;
        var id = _child$props$id === undefined ? 'form-element-' + (0, _uuid2.default)() : _child$props$id;
        var label = _child$props.label;
        var required = _child$props.required;
        var error = _child$props.error;
        var cols = _child$props.cols;
        var children = _child$props.children;
        var props = (0, _objectWithoutProperties3.default)(_child$props, ['id', 'label', 'required', 'error', 'cols', 'children']);

        var formElemProps = { id: id, label: label, required: required, error: error, totalCols: totalCols, cols: cols };
        return _react2.default.createElement(
          _FormElement2.default,
          formElemProps,
          _react2.default.cloneElement(child, { id: id, label: undefined, required: undefined, error: undefined })
        );
      }
      return _react2.default.cloneElement(child, { totalCols: totalCols });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var className = _props2.className;
      var cols = _props2.cols;
      var children = _props2.children;

      var totalCols = cols || _react2.default.Children.count(children);
      var rowClassNames = (0, _classnames2.default)(className, 'slds-form-element__row');
      return _react2.default.createElement(
        'div',
        { className: rowClassNames },
        _react2.default.Children.map(children, this.renderChild.bind(this, totalCols))
      );
    }
  }]);
  return Row;
}(_react2.default.Component);

Row.propTypes = {
  className: _react.PropTypes.string,
  cols: _react.PropTypes.number,
  children: _react.PropTypes.node
};

Row.isFormElement = true;

FieldSet.Row = Row;

exports.default = FieldSet;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0ZpZWxkU2V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBR007Ozs7Ozs7Ozs7NkJBQ0s7bUJBQzBDLEtBQUssS0FBTCxDQUQxQztVQUNDLDZCQUREO1VBQ1kscUJBRFo7VUFDbUIsMkJBRG5CO1VBQ2dDLDJGQURoQzs7QUFFUCxVQUFNLGVBQWUsMEJBQVcsU0FBWCx3QkFBZixDQUZDO0FBR1AsYUFDRTs7aUNBQVUsV0FBWSxZQUFaLElBQWdDLE1BQTFDO1FBRUksUUFDQTs7WUFBUSxXQUFVLDBCQUFWLEVBQVI7VUFBK0MsS0FBL0M7U0FEQSxHQUVBLElBRkE7UUFJRjs7WUFBSyxXQUFVLHFCQUFWLEVBQUw7VUFDSSxRQURKO1NBTkY7T0FERixDQUhPOzs7U0FETDtFQUFpQixnQkFBTSxTQUFOOztBQW1CdkIsU0FBUyxTQUFULEdBQXFCO0FBQ25CLGFBQVcsaUJBQVUsTUFBVjtBQUNYLFNBQU8saUJBQVUsTUFBVjtBQUNQLFlBQVUsaUJBQVUsSUFBVjtDQUhaOztBQU1BLFNBQVMsYUFBVCxHQUF5QixJQUF6Qjs7SUFHTTs7Ozs7Ozs7OztnQ0FDUSxXQUFXLE9BQU87QUFDNUIsVUFBTSxRQUFRLE1BQU0sSUFBTixDQURjO0FBRTVCLFVBQUksQ0FBQyxNQUFNLGFBQU4sRUFBcUI7MkJBQ29FLE1BQU0sS0FBTixDQURwRTsyQ0FDaEIsR0FEZ0I7WUFDaEIsdURBQXFCLHdDQURMO1lBQ2UsMkJBRGY7WUFDc0IsaUNBRHRCO1lBQ2dDLDJCQURoQztZQUN1Qyx5QkFEdkM7WUFDNkMsaUNBRDdDO1lBQzBELHVIQUQxRDs7QUFFeEIsWUFBTSxnQkFBZ0IsRUFBRSxNQUFGLEVBQU0sWUFBTixFQUFhLGtCQUFiLEVBQXVCLFlBQXZCLEVBQThCLG9CQUE5QixFQUF5QyxVQUF6QyxFQUFoQixDQUZrQjtBQUd4QixlQUNFOztVQUFrQixhQUFsQjtVQUNJLGdCQUFNLFlBQU4sQ0FBbUIsS0FBbkIsRUFBMEIsRUFBRSxNQUFGLEVBQU0sT0FBTyxTQUFQLEVBQWtCLFVBQVUsU0FBVixFQUFxQixPQUFPLFNBQVAsRUFBdkUsQ0FESjtTQURGLENBSHdCO09BQTFCO0FBU0EsYUFBTyxnQkFBTSxZQUFOLENBQW1CLEtBQW5CLEVBQTBCLEVBQUUsb0JBQUYsRUFBMUIsQ0FBUCxDQVg0Qjs7Ozs2QkFjckI7b0JBQytCLEtBQUssS0FBTCxDQUQvQjtVQUNDLDhCQUREO1VBQ1ksb0JBRFo7VUFDa0IsNEJBRGxCOztBQUVQLFVBQU0sWUFBWSxRQUFRLGdCQUFNLFFBQU4sQ0FBZSxLQUFmLENBQXFCLFFBQXJCLENBQVIsQ0FGWDtBQUdQLFVBQU0sZ0JBQWdCLDBCQUFXLFNBQVgsRUFBc0Isd0JBQXRCLENBQWhCLENBSEM7QUFJUCxhQUNFOztVQUFLLFdBQVksYUFBWixFQUFMO1FBQ0ksZ0JBQU0sUUFBTixDQUFlLEdBQWYsQ0FBbUIsUUFBbkIsRUFBNkIsS0FBSyxXQUFMLENBQWlCLElBQWpCLENBQXNCLElBQXRCLEVBQTRCLFNBQTVCLENBQTdCLENBREo7T0FERixDQUpPOzs7U0FmTDtFQUFZLGdCQUFNLFNBQU47O0FBMkJsQixJQUFJLFNBQUosR0FBZ0I7QUFDZCxhQUFXLGlCQUFVLE1BQVY7QUFDWCxRQUFNLGlCQUFVLE1BQVY7QUFDTixZQUFVLGlCQUFVLElBQVY7Q0FIWjs7QUFNQSxJQUFJLGFBQUosR0FBb0IsSUFBcEI7O0FBRUEsU0FBUyxHQUFULEdBQWUsR0FBZjs7a0JBRWUiLCJmaWxlIjoiRmllbGRTZXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHV1aWQgZnJvbSAndXVpZCc7XHJcbmltcG9ydCBGb3JtRWxlbWVudCBmcm9tICcuL0Zvcm1FbGVtZW50JztcclxuXHJcblxyXG5jbGFzcyBGaWVsZFNldCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGxhYmVsLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCBmc0NsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSwgYHNsZHMtZm9ybS0tY29tcG91bmRgKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9eyBmc0NsYXNzTmFtZXMgfSB7IC4uLnByb3BzIH0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbGFiZWwgP1xyXG4gICAgICAgICAgPGxlZ2VuZCBjbGFzc05hbWU9J3NsZHMtZm9ybS1lbGVtZW50X19sYWJlbCc+eyBsYWJlbCB9PC9sZWdlbmQ+IDpcclxuICAgICAgICAgIG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tZWxlbWVudF9fZ3JvdXAnPlxyXG4gICAgICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuRmllbGRTZXQucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbn07XHJcblxyXG5GaWVsZFNldC5pc0Zvcm1FbGVtZW50ID0gdHJ1ZTtcclxuXHJcblxyXG5jbGFzcyBSb3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlckNoaWxkKHRvdGFsQ29scywgY2hpbGQpIHtcclxuICAgIGNvbnN0IGtsYXNzID0gY2hpbGQudHlwZTtcclxuICAgIGlmICgha2xhc3MuaXNGb3JtRWxlbWVudCkge1xyXG4gICAgICBjb25zdCB7IGlkID0gYGZvcm0tZWxlbWVudC0ke3V1aWQoKX1gLCBsYWJlbCwgcmVxdWlyZWQsIGVycm9yLCBjb2xzLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSA9IGNoaWxkLnByb3BzO1xyXG4gICAgICBjb25zdCBmb3JtRWxlbVByb3BzID0geyBpZCwgbGFiZWwsIHJlcXVpcmVkLCBlcnJvciwgdG90YWxDb2xzLCBjb2xzIH07XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZvcm1FbGVtZW50IHsgLi4uZm9ybUVsZW1Qcm9wcyB9PlxyXG4gICAgICAgICAgeyBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHsgaWQsIGxhYmVsOiB1bmRlZmluZWQsIHJlcXVpcmVkOiB1bmRlZmluZWQsIGVycm9yOiB1bmRlZmluZWQgfSkgfVxyXG4gICAgICAgIDwvRm9ybUVsZW1lbnQ+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7IHRvdGFsQ29scyB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBjb2xzLCBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IHRvdGFsQ29scyA9IGNvbHMgfHwgUmVhY3QuQ2hpbGRyZW4uY291bnQoY2hpbGRyZW4pO1xyXG4gICAgY29uc3Qgcm93Q2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoY2xhc3NOYW1lLCAnc2xkcy1mb3JtLWVsZW1lbnRfX3JvdycpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9eyByb3dDbGFzc05hbWVzIH0+XHJcbiAgICAgICAgeyBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIHRoaXMucmVuZGVyQ2hpbGQuYmluZCh0aGlzLCB0b3RhbENvbHMpKSB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcblJvdy5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGNvbHM6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG59O1xyXG5cclxuUm93LmlzRm9ybUVsZW1lbnQgPSB0cnVlO1xyXG5cclxuRmllbGRTZXQuUm93ID0gUm93O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmllbGRTZXQ7XHJcbiJdfQ==