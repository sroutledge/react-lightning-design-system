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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadioGroup = function (_React$Component) {
  (0, _inherits3.default)(RadioGroup, _React$Component);

  function RadioGroup() {
    (0, _classCallCheck3.default)(this, RadioGroup);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(RadioGroup).apply(this, arguments));
  }

  (0, _createClass3.default)(RadioGroup, [{
    key: 'onControlChange',
    value: function onControlChange(value, e) {
      if (this.props.onChange) {
        this.props.onChange(e, value);
      }
    }
  }, {
    key: 'renderControl',
    value: function renderControl(radio) {
      return this.props.name ? _react2.default.cloneElement(radio, { name: this.props.name, onChange: this.onControlChange.bind(this, radio.props.value) }) : radio;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var label = _props.label;
      var required = _props.required;
      var error = _props.error;
      var totalCols = _props.totalCols;
      var cols = _props.cols;
      var style = _props.style;
      var onChange = _props.onChange;
      var children = _props.children;
      var props = (0, _objectWithoutProperties3.default)(_props, ['className', 'label', 'required', 'error', 'totalCols', 'cols', 'style', 'onChange', 'children']);

      var grpClassNames = (0, _classnames2.default)(className, 'slds-form-element', {
        'slds-has-error': error,
        'slds-is-required': required
      }, typeof totalCols === 'number' ? 'slds-size--' + (cols || 1) + '-of-' + totalCols : null);
      var grpStyles = typeof totalCols === 'number' ? (0, _extends3.default)({ display: 'inline-block' }, style) : style;
      var errorMessage = error ? typeof error === 'string' ? error : (typeof error === 'undefined' ? 'undefined' : (0, _typeof3.default)(error)) === 'object' ? error.message : undefined : undefined;
      return _react2.default.createElement(
        'fieldset',
        (0, _extends3.default)({ className: grpClassNames, style: grpStyles }, props),
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
  return RadioGroup;
}(_react2.default.Component);

exports.default = RadioGroup;


RadioGroup.propTypes = {
  className: _react.PropTypes.string,
  label: _react.PropTypes.string,
  required: _react.PropTypes.bool,
  error: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.string, _react.PropTypes.shape({
    message: _react.PropTypes.string
  })]),
  name: _react.PropTypes.string,
  onChange: _react.PropTypes.func,
  totalCols: _react.PropTypes.number,
  cols: _react.PropTypes.number,
  style: _react.PropTypes.object,
  children: _react.PropTypes.node
};

RadioGroup.isFormElement = true;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1JhZGlvR3JvdXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7SUFHcUIsVTs7Ozs7Ozs7OztvQ0FDSCxLLEVBQU8sQyxFQUFHO0FBQ3hCLFVBQUksS0FBSyxLQUFMLENBQVcsUUFBZixFQUF5QjtBQUN2QixhQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLENBQXBCLEVBQXVCLEtBQXZCO0FBQ0Q7QUFDRjs7O2tDQUVhLEssRUFBTztBQUNuQixhQUNFLEtBQUssS0FBTCxDQUFXLElBQVgsR0FDQSxnQkFBTSxZQUFOLENBQW1CLEtBQW5CLEVBQTBCLEVBQUUsTUFBTSxLQUFLLEtBQUwsQ0FBVyxJQUFuQixFQUF5QixVQUFVLEtBQUssZUFBTCxDQUFxQixJQUFyQixDQUEwQixJQUExQixFQUFnQyxNQUFNLEtBQU4sQ0FBWSxLQUE1QyxDQUFuQyxFQUExQixDQURBLEdBRUEsS0FIRjtBQUtEOzs7NkJBRVE7QUFBQSxtQkFDNkYsS0FBSyxLQURsRztBQUFBLFVBQ0MsU0FERCxVQUNDLFNBREQ7QUFBQSxVQUNZLEtBRFosVUFDWSxLQURaO0FBQUEsVUFDbUIsUUFEbkIsVUFDbUIsUUFEbkI7QUFBQSxVQUM2QixLQUQ3QixVQUM2QixLQUQ3QjtBQUFBLFVBQ29DLFNBRHBDLFVBQ29DLFNBRHBDO0FBQUEsVUFDK0MsSUFEL0MsVUFDK0MsSUFEL0M7QUFBQSxVQUNxRCxLQURyRCxVQUNxRCxLQURyRDtBQUFBLFVBQzRELFFBRDVELFVBQzRELFFBRDVEO0FBQUEsVUFDc0UsUUFEdEUsVUFDc0UsUUFEdEU7QUFBQSxVQUNtRixLQURuRjs7QUFFUCxVQUFNLGdCQUFnQiwwQkFDcEIsU0FEb0IsRUFFcEIsbUJBRm9CLEVBR3BCO0FBQ0UsMEJBQWtCLEtBRHBCO0FBRUUsNEJBQW9CO0FBRnRCLE9BSG9CLEVBT3BCLE9BQU8sU0FBUCxLQUFxQixRQUFyQixvQkFBOEMsUUFBUSxDQUF0RCxhQUE4RCxTQUE5RCxHQUE0RSxJQVB4RCxDQUF0QjtBQVNBLFVBQU0sWUFBWSxPQUFPLFNBQVAsS0FBcUIsUUFBckIsNEJBQWtDLFNBQVMsY0FBM0MsSUFBOEQsS0FBOUQsSUFBd0UsS0FBMUY7QUFDQSxVQUFNLGVBQ0osUUFDQyxPQUFPLEtBQVAsS0FBaUIsUUFBakIsR0FBNEIsS0FBNUIsR0FDQSxRQUFPLEtBQVAsdURBQU8sS0FBUCxPQUFpQixRQUFqQixHQUE0QixNQUFNLE9BQWxDLEdBQ0EsU0FIRCxHQUlBLFNBTEY7QUFNQSxhQUNFO0FBQUE7UUFBQSx5QkFBVSxXQUFZLGFBQXRCLEVBQXNDLE9BQVEsU0FBOUMsSUFBK0QsS0FBL0Q7UUFDRTtBQUFBO1VBQUEsRUFBUSxXQUFVLHdEQUFsQjtVQUNJLEtBREo7VUFHSSxXQUNBO0FBQUE7WUFBQSxFQUFNLFdBQVUsZUFBaEI7WUFBQTtBQUFBLFdBREEsR0FFQTtBQUxKLFNBREY7UUFTRTtBQUFBO1VBQUEsRUFBSyxXQUFVLDRCQUFmO1VBQ0ksZ0JBQU0sUUFBTixDQUFlLEdBQWYsQ0FBbUIsUUFBbkIsRUFBNkIsS0FBSyxhQUFMLENBQW1CLElBQW5CLENBQXdCLElBQXhCLENBQTdCLENBREo7VUFHSSxlQUNBO0FBQUE7WUFBQSxFQUFLLFdBQVUseUJBQWY7WUFBMkM7QUFBM0MsV0FEQSxHQUVBO0FBTEo7QUFURixPQURGO0FBb0JEOzs7RUFyRHFDLGdCQUFNLFM7O2tCQUF6QixVOzs7QUF5RHJCLFdBQVcsU0FBWCxHQUF1QjtBQUNyQixhQUFXLGlCQUFVLE1BREE7QUFFckIsU0FBTyxpQkFBVSxNQUZJO0FBR3JCLFlBQVUsaUJBQVUsSUFIQztBQUlyQixTQUFPLGlCQUFVLFNBQVYsQ0FBb0IsQ0FDekIsaUJBQVUsSUFEZSxFQUV6QixpQkFBVSxNQUZlLEVBR3pCLGlCQUFVLEtBQVYsQ0FBZ0I7QUFDZCxhQUFTLGlCQUFVO0FBREwsR0FBaEIsQ0FIeUIsQ0FBcEIsQ0FKYztBQVdyQixRQUFNLGlCQUFVLE1BWEs7QUFZckIsWUFBVSxpQkFBVSxJQVpDO0FBYXJCLGFBQVcsaUJBQVUsTUFiQTtBQWNyQixRQUFNLGlCQUFVLE1BZEs7QUFlckIsU0FBTyxpQkFBVSxNQWZJO0FBZ0JyQixZQUFVLGlCQUFVO0FBaEJDLENBQXZCOztBQW1CQSxXQUFXLGFBQVgsR0FBMkIsSUFBM0IiLCJmaWxlIjoiUmFkaW9Hcm91cC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhZGlvR3JvdXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIG9uQ29udHJvbENoYW5nZSh2YWx1ZSwgZSkge1xyXG4gICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcclxuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlLCB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXJDb250cm9sKHJhZGlvKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0aGlzLnByb3BzLm5hbWUgP1xyXG4gICAgICBSZWFjdC5jbG9uZUVsZW1lbnQocmFkaW8sIHsgbmFtZTogdGhpcy5wcm9wcy5uYW1lLCBvbkNoYW5nZTogdGhpcy5vbkNvbnRyb2xDaGFuZ2UuYmluZCh0aGlzLCByYWRpby5wcm9wcy52YWx1ZSkgfSkgOlxyXG4gICAgICByYWRpb1xyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBsYWJlbCwgcmVxdWlyZWQsIGVycm9yLCB0b3RhbENvbHMsIGNvbHMsIHN0eWxlLCBvbkNoYW5nZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgZ3JwQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXHJcbiAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgJ3NsZHMtZm9ybS1lbGVtZW50JyxcclxuICAgICAge1xyXG4gICAgICAgICdzbGRzLWhhcy1lcnJvcic6IGVycm9yLFxyXG4gICAgICAgICdzbGRzLWlzLXJlcXVpcmVkJzogcmVxdWlyZWQsXHJcbiAgICAgIH0sXHJcbiAgICAgIHR5cGVvZiB0b3RhbENvbHMgPT09ICdudW1iZXInID8gYHNsZHMtc2l6ZS0tJHtjb2xzIHx8IDF9LW9mLSR7dG90YWxDb2xzfWAgOiBudWxsXHJcbiAgICApO1xyXG4gICAgY29uc3QgZ3JwU3R5bGVzID0gdHlwZW9mIHRvdGFsQ29scyA9PT0gJ251bWJlcicgPyB7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLCAuLi5zdHlsZSB9IDogc3R5bGU7XHJcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPVxyXG4gICAgICBlcnJvciA/XHJcbiAgICAgICh0eXBlb2YgZXJyb3IgPT09ICdzdHJpbmcnID8gZXJyb3IgOlxyXG4gICAgICAgdHlwZW9mIGVycm9yID09PSAnb2JqZWN0JyA/IGVycm9yLm1lc3NhZ2UgOlxyXG4gICAgICAgdW5kZWZpbmVkKSA6XHJcbiAgICAgIHVuZGVmaW5lZDtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxmaWVsZHNldCBjbGFzc05hbWU9eyBncnBDbGFzc05hbWVzIH0gc3R5bGU9eyBncnBTdHlsZXMgfSB7IC4uLnByb3BzIH0gPlxyXG4gICAgICAgIDxsZWdlbmQgY2xhc3NOYW1lPSdzbGRzLWZvcm0tZWxlbWVudF9fbGFiZWwgc2xkcy1mb3JtLWVsZW1lbnRfX2xhYmVsLS10b3AnPlxyXG4gICAgICAgICAgeyBsYWJlbCB9XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHJlcXVpcmVkID9cclxuICAgICAgICAgICAgPGFiYnIgY2xhc3NOYW1lPSdzbGRzLXJlcXVpcmVkJz4qPC9hYmJyPiA6XHJcbiAgICAgICAgICAgIHVuZGVmaW5lZFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvbGVnZW5kPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLWZvcm0tZWxlbWVudF9fY29udHJvbCc+XHJcbiAgICAgICAgICB7IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgdGhpcy5yZW5kZXJDb250cm9sLmJpbmQodGhpcykpIH1cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlID9cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsZHMtZm9ybS1lbGVtZW50X19oZWxwJz57IGVycm9yTWVzc2FnZSB9PC9kaXY+IDpcclxuICAgICAgICAgICAgdW5kZWZpbmVkXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblJhZGlvR3JvdXAucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcclxuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgZXJyb3I6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgbWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIH0pLFxyXG4gIF0pLFxyXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gIHRvdGFsQ29sczogUHJvcFR5cGVzLm51bWJlcixcclxuICBjb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxufTtcclxuXHJcblJhZGlvR3JvdXAuaXNGb3JtRWxlbWVudCA9IHRydWU7XHJcbiJdfQ==