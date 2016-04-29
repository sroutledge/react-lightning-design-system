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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1JhZGlvR3JvdXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7SUFHcUI7Ozs7Ozs7Ozs7b0NBQ0gsT0FBTyxHQUFHO0FBQ3hCLFVBQUksS0FBSyxLQUFMLENBQVcsUUFBWCxFQUFxQjtBQUN2QixhQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLENBQXBCLEVBQXVCLEtBQXZCLEVBRHVCO09BQXpCOzs7O2tDQUtZLE9BQU87QUFDbkIsYUFDRSxLQUFLLEtBQUwsQ0FBVyxJQUFYLEdBQ0EsZ0JBQU0sWUFBTixDQUFtQixLQUFuQixFQUEwQixFQUFFLE1BQU0sS0FBSyxLQUFMLENBQVcsSUFBWCxFQUFpQixVQUFVLEtBQUssZUFBTCxDQUFxQixJQUFyQixDQUEwQixJQUExQixFQUFnQyxNQUFNLEtBQU4sQ0FBWSxLQUFaLENBQTFDLEVBQW5ELENBREEsR0FFQSxLQUZBLENBRmlCOzs7OzZCQVFaO21CQUM2RixLQUFLLEtBQUwsQ0FEN0Y7VUFDQyw2QkFERDtVQUNZLHFCQURaO1VBQ21CLDJCQURuQjtVQUM2QixxQkFEN0I7VUFDb0MsNkJBRHBDO1VBQytDLG1CQUQvQztVQUNxRCxxQkFEckQ7VUFDNEQsMkJBRDVEO1VBQ3NFLDJCQUR0RTtVQUNtRiwwSkFEbkY7O0FBRVAsVUFBTSxnQkFBZ0IsMEJBQ3BCLFNBRG9CLEVBRXBCLG1CQUZvQixFQUdwQjtBQUNFLDBCQUFrQixLQUFsQjtBQUNBLDRCQUFvQixRQUFwQjtPQUxrQixFQU9wQixPQUFPLFNBQVAsS0FBcUIsUUFBckIsb0JBQThDLFFBQVEsQ0FBUixhQUFnQixTQUE5RCxHQUE0RSxJQUE1RSxDQVBJLENBRkM7QUFXUCxVQUFNLFlBQVksT0FBTyxTQUFQLEtBQXFCLFFBQXJCLDRCQUFrQyxTQUFTLGNBQVQsSUFBNEIsTUFBOUQsR0FBd0UsS0FBeEUsQ0FYWDtBQVlQLFVBQU0sZUFDSixRQUNDLE9BQU8sS0FBUCxLQUFpQixRQUFqQixHQUE0QixLQUE1QixHQUNBLFFBQU8sbUVBQVAsS0FBaUIsUUFBakIsR0FBNEIsTUFBTSxPQUFOLEdBQzVCLFNBREEsR0FFRCxTQUpBLENBYks7QUFrQlAsYUFDRTs7aUNBQVUsV0FBWSxhQUFaLEVBQTRCLE9BQVEsU0FBUixJQUF5QixNQUEvRDtRQUNFOztZQUFRLFdBQVUsd0RBQVYsRUFBUjtVQUNJLEtBREo7VUFHSSxXQUNBOztjQUFNLFdBQVUsZUFBVixFQUFOOztXQURBLEdBRUEsU0FGQTtTQUpOO1FBU0U7O1lBQUssV0FBVSw0QkFBVixFQUFMO1VBQ0ksZ0JBQU0sUUFBTixDQUFlLEdBQWYsQ0FBbUIsUUFBbkIsRUFBNkIsS0FBSyxhQUFMLENBQW1CLElBQW5CLENBQXdCLElBQXhCLENBQTdCLENBREo7VUFHSSxlQUNBOztjQUFLLFdBQVUseUJBQVYsRUFBTDtZQUEyQyxZQUEzQztXQURBLEdBRUEsU0FGQTtTQVpOO09BREYsQ0FsQk87OztTQWZVO0VBQW1CLGdCQUFNLFNBQU47O2tCQUFuQjs7O0FBeURyQixXQUFXLFNBQVgsR0FBdUI7QUFDckIsYUFBVyxpQkFBVSxNQUFWO0FBQ1gsU0FBTyxpQkFBVSxNQUFWO0FBQ1AsWUFBVSxpQkFBVSxJQUFWO0FBQ1YsU0FBTyxpQkFBVSxTQUFWLENBQW9CLENBQ3pCLGlCQUFVLElBQVYsRUFDQSxpQkFBVSxNQUFWLEVBQ0EsaUJBQVUsS0FBVixDQUFnQjtBQUNkLGFBQVMsaUJBQVUsTUFBVjtHQURYLENBSHlCLENBQXBCLENBQVA7QUFPQSxRQUFNLGlCQUFVLE1BQVY7QUFDTixZQUFVLGlCQUFVLElBQVY7QUFDVixhQUFXLGlCQUFVLE1BQVY7QUFDWCxRQUFNLGlCQUFVLE1BQVY7QUFDTixTQUFPLGlCQUFVLE1BQVY7QUFDUCxZQUFVLGlCQUFVLElBQVY7Q0FoQlo7O0FBbUJBLFdBQVcsYUFBWCxHQUEyQixJQUEzQiIsImZpbGUiOiJSYWRpb0dyb3VwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFkaW9Hcm91cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgb25Db250cm9sQ2hhbmdlKHZhbHVlLCBlKSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZSkge1xyXG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKGUsIHZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlckNvbnRyb2wocmFkaW8pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHRoaXMucHJvcHMubmFtZSA/XHJcbiAgICAgIFJlYWN0LmNsb25lRWxlbWVudChyYWRpbywgeyBuYW1lOiB0aGlzLnByb3BzLm5hbWUsIG9uQ2hhbmdlOiB0aGlzLm9uQ29udHJvbENoYW5nZS5iaW5kKHRoaXMsIHJhZGlvLnByb3BzLnZhbHVlKSB9KSA6XHJcbiAgICAgIHJhZGlvXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGxhYmVsLCByZXF1aXJlZCwgZXJyb3IsIHRvdGFsQ29scywgY29scywgc3R5bGUsIG9uQ2hhbmdlLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCBncnBDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcclxuICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICAnc2xkcy1mb3JtLWVsZW1lbnQnLFxyXG4gICAgICB7XHJcbiAgICAgICAgJ3NsZHMtaGFzLWVycm9yJzogZXJyb3IsXHJcbiAgICAgICAgJ3NsZHMtaXMtcmVxdWlyZWQnOiByZXF1aXJlZCxcclxuICAgICAgfSxcclxuICAgICAgdHlwZW9mIHRvdGFsQ29scyA9PT0gJ251bWJlcicgPyBgc2xkcy1zaXplLS0ke2NvbHMgfHwgMX0tb2YtJHt0b3RhbENvbHN9YCA6IG51bGxcclxuICAgICk7XHJcbiAgICBjb25zdCBncnBTdHlsZXMgPSB0eXBlb2YgdG90YWxDb2xzID09PSAnbnVtYmVyJyA/IHsgZGlzcGxheTogJ2lubGluZS1ibG9jaycsIC4uLnN0eWxlIH0gOiBzdHlsZTtcclxuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9XHJcbiAgICAgIGVycm9yID9cclxuICAgICAgKHR5cGVvZiBlcnJvciA9PT0gJ3N0cmluZycgPyBlcnJvciA6XHJcbiAgICAgICB0eXBlb2YgZXJyb3IgPT09ICdvYmplY3QnID8gZXJyb3IubWVzc2FnZSA6XHJcbiAgICAgICB1bmRlZmluZWQpIDpcclxuICAgICAgdW5kZWZpbmVkO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGZpZWxkc2V0IGNsYXNzTmFtZT17IGdycENsYXNzTmFtZXMgfSBzdHlsZT17IGdycFN0eWxlcyB9IHsgLi4ucHJvcHMgfSA+XHJcbiAgICAgICAgPGxlZ2VuZCBjbGFzc05hbWU9J3NsZHMtZm9ybS1lbGVtZW50X19sYWJlbCBzbGRzLWZvcm0tZWxlbWVudF9fbGFiZWwtLXRvcCc+XHJcbiAgICAgICAgICB7IGxhYmVsIH1cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcmVxdWlyZWQgP1xyXG4gICAgICAgICAgICA8YWJiciBjbGFzc05hbWU9J3NsZHMtcmVxdWlyZWQnPio8L2FiYnI+IDpcclxuICAgICAgICAgICAgdW5kZWZpbmVkXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9sZWdlbmQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsZHMtZm9ybS1lbGVtZW50X19jb250cm9sJz5cclxuICAgICAgICAgIHsgUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCB0aGlzLnJlbmRlckNvbnRyb2wuYmluZCh0aGlzKSkgfVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgP1xyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1mb3JtLWVsZW1lbnRfX2hlbHAnPnsgZXJyb3JNZXNzYWdlIH08L2Rpdj4gOlxyXG4gICAgICAgICAgICB1bmRlZmluZWRcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9maWVsZHNldD5cclxuICAgICk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuUmFkaW9Hcm91cC5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICBlcnJvcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICBQcm9wVHlwZXMuYm9vbCxcclxuICAgIFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICBtZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgfSksXHJcbiAgXSksXHJcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgdG90YWxDb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIGNvbHM6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG59O1xyXG5cclxuUmFkaW9Hcm91cC5pc0Zvcm1FbGVtZW50ID0gdHJ1ZTtcclxuIl19