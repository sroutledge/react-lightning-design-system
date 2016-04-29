'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonIcon = exports.BUTTON_TYPES = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function (_React$Component) {
  (0, _inherits3.default)(Button, _React$Component);

  function Button() {
    (0, _classCallCheck3.default)(this, Button);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Button).apply(this, arguments));
  }

  (0, _createClass3.default)(Button, [{
    key: 'renderIcon',
    value: function renderIcon() {
      var _props = this.props;
      var icon = _props.icon;
      var iconAlign = _props.iconAlign;
      var iconSize = _props.iconSize;
      var type = _props.type;
      var inverse = this.props.inverse;

      inverse = inverse || /\-?inverse$/.test(type);
      return _react2.default.createElement(ButtonIcon, { icon: icon, align: iconAlign, size: iconSize, inverse: inverse });
    }
  }, {
    key: 'renderIconMore',
    value: function renderIconMore() {
      var _props2 = this.props;
      var iconMore = _props2.iconMore;
      var icon = _props2.icon;
      var iconAlign = _props2.iconAlign;
      var label = _props2.label;
      var children = _props2.children;

      var adjoining = icon && (iconAlign === 'right' || !(label || children));
      var iconMoreSize = this.props.iconMoreSize || adjoining ? 'x-small' : 'small';
      return _react2.default.createElement(ButtonIcon, { icon: iconMore, align: 'right', size: iconMoreSize });
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      var _props3 = this.props;
      var className = _props3.className;
      var type = _props3.type;
      var size = _props3.size;
      var icon = _props3.icon;
      var iconSize = _props3.iconSize;
      var iconAlign = _props3.iconAlign;
      var iconMore = _props3.iconMore;
      var selected = _props3.selected;
      var alt = _props3.alt;
      var label = _props3.label;
      var _props3$htmlType = _props3.htmlType;
      var htmlType = _props3$htmlType === undefined ? 'button' : _props3$htmlType;
      var children = _props3.children;
      var props = (0, _objectWithoutProperties3.default)(_props3, ['className', 'type', 'size', 'icon', 'iconSize', 'iconAlign', 'iconMore', 'selected', 'alt', 'label', 'htmlType', 'children']);

      var typeClassName = type ? 'slds-button--' + type : null;
      var btnClassNames = (0, _classnames3.default)(className, 'slds-button', typeClassName, (_classnames = {
        'slds-is-selected': selected
      }, (0, _defineProperty3.default)(_classnames, 'slds-button--' + size, size && !/^icon-/.test(type)), (0, _defineProperty3.default)(_classnames, 'slds-button--icon-' + size, /^(x-small|small)$/.test(size) && /^icon-/.test(type)), _classnames));
      return _react2.default.createElement(
        'button',
        (0, _extends3.default)({ className: btnClassNames, type: htmlType }, props),
        icon && iconAlign !== 'right' ? this.renderIcon() : null,
        children || label,
        icon && iconAlign === 'right' ? this.renderIcon() : null,
        iconMore ? this.renderIconMore() : null,
        alt ? _react2.default.createElement(
          'span',
          { className: 'slds-assistive-text' },
          alt
        ) : null
      );
    }
  }]);
  return Button;
}(_react2.default.Component);

exports.default = Button;
var BUTTON_TYPES = exports.BUTTON_TYPES = ['neutral', 'brand', 'destructive', 'inverse', 'icon-bare', 'icon-container', 'icon-inverse', 'icon-more', 'icon-border', 'icon-border-filled'];

var BUTTON_SIZES = ['x-small', 'small', 'medium', 'large'];

var ICON_SIZES = ['x-small', 'small', 'medium', 'large'];

var ICON_ALIGNS = ['left', 'right'];

Button.propTypes = {
  className: _react.PropTypes.string,
  label: _react.PropTypes.node,
  alt: _react.PropTypes.string,
  type: _react.PropTypes.oneOf(BUTTON_TYPES),
  size: _react.PropTypes.oneOf(BUTTON_SIZES),
  htmlType: _react.PropTypes.string,
  disabled: _react.PropTypes.bool,
  selected: _react.PropTypes.bool,
  inverse: _react.PropTypes.bool,
  icon: _react.PropTypes.string,
  iconSize: _react.PropTypes.oneOf(ICON_SIZES),
  iconAlign: _react.PropTypes.oneOf(ICON_ALIGNS),
  iconMore: _react.PropTypes.string,
  iconMoreSize: _react.PropTypes.oneOf(ICON_SIZES),
  children: _react.PropTypes.node
};

var ButtonIcon = exports.ButtonIcon = function (_React$Component2) {
  (0, _inherits3.default)(ButtonIcon, _React$Component2);

  function ButtonIcon() {
    (0, _classCallCheck3.default)(this, ButtonIcon);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ButtonIcon).apply(this, arguments));
  }

  (0, _createClass3.default)(ButtonIcon, [{
    key: 'render',
    value: function render() {
      var _props4 = this.props;
      var icon = _props4.icon;
      var align = _props4.align;
      var size = _props4.size;
      var inverse = _props4.inverse;
      var className = _props4.className;
      var props = (0, _objectWithoutProperties3.default)(_props4, ['icon', 'align', 'size', 'inverse', 'className']);

      var alignClassName = ICON_ALIGNS.indexOf(align) >= 0 ? 'slds-button__icon--' + align : null;
      var sizeClassName = ICON_SIZES.indexOf(size) >= 0 ? 'slds-button__icon--' + size : null;
      var inverseClassName = inverse ? 'slds-button__icon--inverse' : null;
      var iconClassNames = (0, _classnames3.default)('slds-button__icon', alignClassName, sizeClassName, inverseClassName, className);
      return _react2.default.createElement(_Icon2.default, (0, _extends3.default)({ className: iconClassNames, icon: icon, textColor: null }, props));
    }
  }]);
  return ButtonIcon;
}(_react2.default.Component);

ButtonIcon.propTypes = {
  className: _react.PropTypes.string,
  icon: _react.PropTypes.string,
  align: _react.PropTypes.oneOf(['left', 'right']),
  size: _react.PropTypes.oneOf(['x-small', 'small', 'medium', 'large']),
  inverse: _react.PropTypes.bool
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0J1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUVxQjs7Ozs7Ozs7OztpQ0FDTjttQkFDaUMsS0FBSyxLQUFMLENBRGpDO1VBQ0gsbUJBREc7VUFDRyw2QkFESDtVQUNjLDJCQURkO1VBQ3dCLG1CQUR4QjtVQUVMLFVBQVksS0FBSyxLQUFMLENBQVosUUFGSzs7QUFHWCxnQkFBVSxXQUFXLGNBQWMsSUFBZCxDQUFtQixJQUFuQixDQUFYLENBSEM7QUFJWCxhQUFPLDhCQUFDLFVBQUQsSUFBWSxNQUFPLElBQVAsRUFBYyxPQUFRLFNBQVIsRUFBb0IsTUFBTyxRQUFQLEVBQWtCLFNBQVUsT0FBVixFQUFoRSxDQUFQLENBSlc7Ozs7cUNBT0k7b0JBQ3dDLEtBQUssS0FBTCxDQUR4QztVQUNQLDRCQURPO1VBQ0csb0JBREg7VUFDUyw4QkFEVDtVQUNvQixzQkFEcEI7VUFDMkIsNEJBRDNCOztBQUVmLFVBQU0sWUFBWSxTQUFTLGNBQWMsT0FBZCxJQUF5QixFQUFFLFNBQVMsUUFBVCxDQUFGLENBQWxDLENBRkg7QUFHZixVQUFNLGVBQWUsS0FBSyxLQUFMLENBQVcsWUFBWCxJQUEyQixTQUEzQixHQUF1QyxTQUF2QyxHQUFtRCxPQUFuRCxDQUhOO0FBSWYsYUFBTyw4QkFBQyxVQUFELElBQVksTUFBTyxRQUFQLEVBQWtCLE9BQU0sT0FBTixFQUFjLE1BQU8sWUFBUCxFQUE1QyxDQUFQLENBSmU7Ozs7NkJBT1I7OztvQkFDK0gsS0FBSyxLQUFMLENBRC9IO1VBQ0MsOEJBREQ7VUFDWSxvQkFEWjtVQUNrQixvQkFEbEI7VUFDd0Isb0JBRHhCO1VBQzhCLDRCQUQ5QjtVQUN3Qyw4QkFEeEM7VUFDbUQsNEJBRG5EO1VBQzZELDRCQUQ3RDtVQUN1RSxrQkFEdkU7VUFDNEUsc0JBRDVFO3FDQUNtRixTQURu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LEVBQTZCLE1BQU8sSUFBUCxFQUFjLFdBQVksSUFBWixJQUF3QixNQUF6RSxDQUFQLENBTk87OztTQURFO0VBQW1CLGdCQUFNLFNBQU47O0FBV2hDLFdBQVcsU0FBWCxHQUF1QjtBQUNyQixhQUFXLGlCQUFVLE1BQVY7QUFDWCxRQUFNLGlCQUFVLE1BQVY7QUFDTixTQUFPLGlCQUFVLEtBQVYsQ0FBZ0IsQ0FBQyxNQUFELEVBQVMsT0FBVCxDQUFoQixDQUFQO0FBQ0EsUUFBTSxpQkFBVSxLQUFWLENBQWdCLENBQUMsU0FBRCxFQUFZLE9BQVosRUFBcUIsUUFBckIsRUFBK0IsT0FBL0IsQ0FBaEIsQ0FBTjtBQUNBLFdBQVMsaUJBQVUsSUFBVjtDQUxYIiwiZmlsZSI6IkJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXJJY29uKCkge1xyXG4gICAgY29uc3QgeyBpY29uLCBpY29uQWxpZ24sIGljb25TaXplLCB0eXBlIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgbGV0IHsgaW52ZXJzZSB9ID0gdGhpcy5wcm9wcztcclxuICAgIGludmVyc2UgPSBpbnZlcnNlIHx8IC9cXC0/aW52ZXJzZSQvLnRlc3QodHlwZSk7XHJcbiAgICByZXR1cm4gPEJ1dHRvbkljb24gaWNvbj17IGljb24gfSBhbGlnbj17IGljb25BbGlnbiB9IHNpemU9eyBpY29uU2l6ZSB9IGludmVyc2U9eyBpbnZlcnNlIH0gLz47XHJcbiAgfVxyXG5cclxuICByZW5kZXJJY29uTW9yZSgpIHtcclxuICAgIGNvbnN0IHsgaWNvbk1vcmUsIGljb24sIGljb25BbGlnbiwgbGFiZWwsIGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgYWRqb2luaW5nID0gaWNvbiAmJiAoaWNvbkFsaWduID09PSAncmlnaHQnIHx8ICEobGFiZWwgfHwgY2hpbGRyZW4pKTtcclxuICAgIGNvbnN0IGljb25Nb3JlU2l6ZSA9IHRoaXMucHJvcHMuaWNvbk1vcmVTaXplIHx8IGFkam9pbmluZyA/ICd4LXNtYWxsJyA6ICdzbWFsbCc7XHJcbiAgICByZXR1cm4gPEJ1dHRvbkljb24gaWNvbj17IGljb25Nb3JlIH0gYWxpZ249J3JpZ2h0JyBzaXplPXsgaWNvbk1vcmVTaXplIH0gLz47XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgdHlwZSwgc2l6ZSwgaWNvbiwgaWNvblNpemUsIGljb25BbGlnbiwgaWNvbk1vcmUsIHNlbGVjdGVkLCBhbHQsIGxhYmVsLCBodG1sVHlwZSA9ICdidXR0b24nLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCB0eXBlQ2xhc3NOYW1lID0gdHlwZSA/IGBzbGRzLWJ1dHRvbi0tJHt0eXBlfWAgOiBudWxsO1xyXG4gICAgY29uc3QgYnRuQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXHJcbiAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgJ3NsZHMtYnV0dG9uJyxcclxuICAgICAgdHlwZUNsYXNzTmFtZSxcclxuICAgICAge1xyXG4gICAgICAgICdzbGRzLWlzLXNlbGVjdGVkJzogc2VsZWN0ZWQsXHJcbiAgICAgICAgW2BzbGRzLWJ1dHRvbi0tJHtzaXplfWBdOiBzaXplICYmICEvXmljb24tLy50ZXN0KHR5cGUpLFxyXG4gICAgICAgIFtgc2xkcy1idXR0b24tLWljb24tJHtzaXplfWBdOiAvXih4LXNtYWxsfHNtYWxsKSQvLnRlc3Qoc2l6ZSkgJiYgL15pY29uLS8udGVzdCh0eXBlKSxcclxuICAgICAgfVxyXG4gICAgKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXsgYnRuQ2xhc3NOYW1lcyB9IHR5cGU9eyBodG1sVHlwZSB9IHsgLi4ucHJvcHMgfT5cclxuICAgICAgICB7IGljb24gJiYgaWNvbkFsaWduICE9PSAncmlnaHQnID8gdGhpcy5yZW5kZXJJY29uKCkgOiBudWxsIH1cclxuICAgICAgICB7IGNoaWxkcmVuIHx8IGxhYmVsIH1cclxuICAgICAgICB7IGljb24gJiYgaWNvbkFsaWduID09PSAncmlnaHQnID8gdGhpcy5yZW5kZXJJY29uKCkgOiBudWxsIH1cclxuICAgICAgICB7IGljb25Nb3JlID8gdGhpcy5yZW5kZXJJY29uTW9yZSgpIDogbnVsbCB9XHJcbiAgICAgICAgeyBhbHQgPyA8c3BhbiBjbGFzc05hbWU9J3NsZHMtYXNzaXN0aXZlLXRleHQnPnsgYWx0IH08L3NwYW4+IDogbnVsbCB9XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBCVVRUT05fVFlQRVMgPSBbXHJcbiAgJ25ldXRyYWwnLFxyXG4gICdicmFuZCcsXHJcbiAgJ2Rlc3RydWN0aXZlJyxcclxuICAnaW52ZXJzZScsXHJcbiAgJ2ljb24tYmFyZScsXHJcbiAgJ2ljb24tY29udGFpbmVyJyxcclxuICAnaWNvbi1pbnZlcnNlJyxcclxuICAnaWNvbi1tb3JlJyxcclxuICAnaWNvbi1ib3JkZXInLFxyXG4gICdpY29uLWJvcmRlci1maWxsZWQnLFxyXG5dO1xyXG5cclxuY29uc3QgQlVUVE9OX1NJWkVTID0gWyd4LXNtYWxsJywgJ3NtYWxsJywgJ21lZGl1bScsICdsYXJnZSddO1xyXG5cclxuY29uc3QgSUNPTl9TSVpFUyA9IFsneC1zbWFsbCcsICdzbWFsbCcsICdtZWRpdW0nLCAnbGFyZ2UnXTtcclxuXHJcbmNvbnN0IElDT05fQUxJR05TID0gWydsZWZ0JywgJ3JpZ2h0J107XHJcblxyXG5CdXR0b24ucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBsYWJlbDogUHJvcFR5cGVzLm5vZGUsXHJcbiAgYWx0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHR5cGU6IFByb3BUeXBlcy5vbmVPZihCVVRUT05fVFlQRVMpLFxyXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihCVVRUT05fU0laRVMpLFxyXG4gIGh0bWxUeXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICBzZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgaW52ZXJzZTogUHJvcFR5cGVzLmJvb2wsXHJcbiAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcclxuICBpY29uU2l6ZTogUHJvcFR5cGVzLm9uZU9mKElDT05fU0laRVMpLFxyXG4gIGljb25BbGlnbjogUHJvcFR5cGVzLm9uZU9mKElDT05fQUxJR05TKSxcclxuICBpY29uTW9yZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBpY29uTW9yZVNpemU6IFByb3BUeXBlcy5vbmVPZihJQ09OX1NJWkVTKSxcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEJ1dHRvbkljb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgaWNvbiwgYWxpZ24sIHNpemUsIGludmVyc2UsIGNsYXNzTmFtZSwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCBhbGlnbkNsYXNzTmFtZSA9IElDT05fQUxJR05TLmluZGV4T2YoYWxpZ24pID49IDAgPyBgc2xkcy1idXR0b25fX2ljb24tLSR7YWxpZ259YCA6IG51bGw7XHJcbiAgICBjb25zdCBzaXplQ2xhc3NOYW1lID0gSUNPTl9TSVpFUy5pbmRleE9mKHNpemUpID49IDAgPyBgc2xkcy1idXR0b25fX2ljb24tLSR7c2l6ZX1gIDogbnVsbDtcclxuICAgIGNvbnN0IGludmVyc2VDbGFzc05hbWUgPSBpbnZlcnNlID8gJ3NsZHMtYnV0dG9uX19pY29uLS1pbnZlcnNlJyA6IG51bGw7XHJcbiAgICBjb25zdCBpY29uQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoJ3NsZHMtYnV0dG9uX19pY29uJywgYWxpZ25DbGFzc05hbWUsIHNpemVDbGFzc05hbWUsIGludmVyc2VDbGFzc05hbWUsIGNsYXNzTmFtZSk7XHJcbiAgICByZXR1cm4gPEljb24gY2xhc3NOYW1lPXsgaWNvbkNsYXNzTmFtZXMgfSBpY29uPXsgaWNvbiB9IHRleHRDb2xvcj17IG51bGwgfSB7IC4uLnByb3BzIH0gLz47XHJcbiAgfVxyXG59XHJcblxyXG5CdXR0b25JY29uLnByb3BUeXBlcyA9IHtcclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcclxuICBhbGlnbjogUHJvcFR5cGVzLm9uZU9mKFsnbGVmdCcsICdyaWdodCddKSxcclxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoWyd4LXNtYWxsJywgJ3NtYWxsJywgJ21lZGl1bScsICdsYXJnZSddKSxcclxuICBpbnZlcnNlOiBQcm9wVHlwZXMuYm9vbCxcclxufTtcclxuIl19