'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormElement = function (_React$Component) {
  (0, _inherits3.default)(FormElement, _React$Component);

  function FormElement(props) {
    (0, _classCallCheck3.default)(this, FormElement);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(FormElement).call(this, props));

    (0, _util.registerStyle)('dropdown', [['.react-slds-dropdown-control-wrapper', '{ height: 0; }'], ['.slds-has-error .react-slds-dropdown-control-wrapper', '{ height: auto; }'], ['.react-slds-dropdown-control-wrapper > .slds-form-element__control', '{ position: relative; padding-top: 0.1px; margin-top: -0.1px }'], ['.react-slds-dropdown-form-element', '{ position: static; }'], ['.slds-form--horizontal .react-slds-dropdown-control-wrapper .slds-dropdown', '{ top: -1em; }'], ['.slds-form--horizontal .react-slds-dropdown-control-wrapper .slds-lookup__menu', '{ top: -1em; }'], ['.slds-form--horizontal .slds-has-error .react-slds-dropdown-control-wrapper .slds-dropdown', '{ top: 0; }'], ['.slds-modal .react-slds-dropdown-control-wrapper > .slds-form-element__control', '{ position: absolute; }']]);
    return _this;
  }

  (0, _createClass3.default)(FormElement, [{
    key: 'renderFormElement',
    value: function renderFormElement(props) {
      var className = props.className;
      var error = props.error;
      var totalCols = props.totalCols;
      var _props$cols = props.cols;
      var cols = _props$cols === undefined ? 1 : _props$cols;
      var children = props.children;

      var formElementClassNames = (0, _classnames3.default)('slds-form-element', (0, _defineProperty3.default)({
        'slds-has-error': error
      }, 'slds-size--' + cols + '-of-' + totalCols, typeof totalCols === 'number'), className);
      return _react2.default.createElement(
        'div',
        { className: formElementClassNames },
        children
      );
    }
  }, {
    key: 'renderLabel',
    value: function renderLabel() {
      var _props = this.props;
      var id = _props.id;
      var label = _props.label;
      var required = _props.required;

      return label ? _react2.default.createElement(
        'label',
        { className: 'slds-form-element__label', htmlFor: id },
        label,
        required ? _react2.default.createElement(
          'abbr',
          { className: 'slds-required' },
          '*'
        ) : undefined
      ) : undefined;
    }
  }, {
    key: 'renderControl',
    value: function renderControl(props) {
      var error = props.error;
      var children = props.children;

      var errorMessage = error ? typeof error === 'string' ? error : (typeof error === 'undefined' ? 'undefined' : (0, _typeof3.default)(error)) === 'object' ? error.message : undefined : undefined;
      return _react2.default.createElement(
        'div',
        { className: 'slds-form-element__control' },
        children,
        errorMessage ? _react2.default.createElement(
          'span',
          { className: 'slds-form-element__help' },
          errorMessage
        ) : undefined
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var dropdown = _props2.dropdown;
      var className = _props2.className;
      var totalCols = _props2.totalCols;
      var cols = _props2.cols;
      var error = _props2.error;
      var children = _props2.children;
      var props = (0, _objectWithoutProperties3.default)(_props2, ['dropdown', 'className', 'totalCols', 'cols', 'error', 'children']);

      var labelElem = this.renderLabel();
      if (dropdown) {
        var _controlElem = this.renderControl({ children: children });
        var _formElemChildren = [labelElem, _controlElem];
        var innerFormElem = this.renderFormElement((0, _extends3.default)({}, props, { children: _formElemChildren }));
        var outerControlElem = this.renderControl({ error: error, children: dropdown });
        var outerFormElemChildren = [innerFormElem, _react2.default.createElement(
          'div',
          { className: 'react-slds-dropdown-control-wrapper' },
          outerControlElem
        )];
        var outerFormClassName = (0, _classnames3.default)('react-slds-dropdown-form-element', className);
        return this.renderFormElement((0, _extends3.default)({}, props, { error: error, totalCols: totalCols, cols: cols,
          className: outerFormClassName,
          children: outerFormElemChildren
        }));
      }
      var controlElem = this.renderControl({ children: children, error: error });
      var formElemChildren = [labelElem, controlElem];
      return this.renderFormElement((0, _extends3.default)({}, props, { className: className, error: error, totalCols: totalCols, cols: cols,
        children: formElemChildren
      }));
    }
  }]);
  return FormElement;
}(_react2.default.Component);

exports.default = FormElement;


FormElement.propTypes = {
  id: _react.PropTypes.string,
  className: _react.PropTypes.string,
  label: _react.PropTypes.string,
  required: _react.PropTypes.bool,
  error: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.string, _react.PropTypes.shape({
    message: _react.PropTypes.string
  })]),
  cols: _react.PropTypes.number,
  totalCols: _react.PropTypes.number,
  dropdown: _react.PropTypes.element,
  children: _react.PropTypes.element
};

FormElement.isFormElement = true;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0Zvcm1FbGVtZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztJQUdxQjs7O0FBRW5CLFdBRm1CLFdBRW5CLENBQVksS0FBWixFQUFtQjt3Q0FGQSxhQUVBOzs2RkFGQSx3QkFHWCxRQURXOztBQUVqQiw2QkFBYyxVQUFkLEVBQTBCLENBQ3hCLENBQ0Usc0NBREYsRUFFRSxnQkFGRixDQUR3QixFQUt4QixDQUNFLHNEQURGLEVBRUUsbUJBRkYsQ0FMd0IsRUFTeEIsQ0FDRSxvRUFERixFQUVFLGdFQUZGLENBVHdCLEVBYXhCLENBQ0UsbUNBREYsRUFFRSx1QkFGRixDQWJ3QixFQWlCeEIsQ0FDRSw0RUFERixFQUVFLGdCQUZGLENBakJ3QixFQXFCeEIsQ0FDRSxnRkFERixFQUVFLGdCQUZGLENBckJ3QixFQXlCeEIsQ0FDRSw0RkFERixFQUVFLGFBRkYsQ0F6QndCLEVBNkJ4QixDQUNFLGdGQURGLEVBRUUseUJBRkYsQ0E3QndCLENBQTFCLEVBRmlCOztHQUFuQjs7NkJBRm1COztzQ0F3Q0QsT0FBTztVQUNmLFlBQW9ELE1BQXBELFVBRGU7VUFDSixRQUF5QyxNQUF6QyxNQURJO1VBQ0csWUFBa0MsTUFBbEMsVUFESDt3QkFDcUMsTUFBdkIsS0FEZDtVQUNjLG1DQUFPLGdCQURyQjtVQUN3QixXQUFhLE1BQWIsU0FEeEI7O0FBRXZCLFVBQU0sd0JBQXdCLDBCQUM1QixtQkFENEI7QUFHMUIsMEJBQWtCLEtBQWxCO3lCQUNlLGdCQUFXLFdBQWMsT0FBTyxTQUFQLEtBQXFCLFFBQXJCLENBSmQsRUFNNUIsU0FONEIsQ0FBeEIsQ0FGaUI7QUFVdkIsYUFDRTs7VUFBSyxXQUFZLHFCQUFaLEVBQUw7UUFDSSxRQURKO09BREYsQ0FWdUI7Ozs7a0NBaUJYO21CQUNvQixLQUFLLEtBQUwsQ0FEcEI7VUFDSixlQURJO1VBQ0EscUJBREE7VUFDTywyQkFEUDs7QUFFWixhQUNFLFFBQ0E7O1VBQU8sV0FBVSwwQkFBVixFQUFxQyxTQUFVLEVBQVYsRUFBNUM7UUFDSSxLQURKO1FBR0ksV0FDQTs7WUFBTSxXQUFVLGVBQVYsRUFBTjs7U0FEQSxHQUVBLFNBRkE7T0FKSixHQVNBLFNBVEEsQ0FIVTs7OztrQ0FnQkEsT0FBTztVQUNYLFFBQW9CLE1BQXBCLE1BRFc7VUFDSixXQUFhLE1BQWIsU0FESTs7QUFFbkIsVUFBTSxlQUNKLFFBQ0MsT0FBTyxLQUFQLEtBQWlCLFFBQWpCLEdBQTRCLEtBQTVCLEdBQ0EsUUFBTyxtRUFBUCxLQUFpQixRQUFqQixHQUE0QixNQUFNLE9BQU4sR0FDNUIsU0FEQSxHQUVELFNBSkEsQ0FIaUI7QUFRbkIsYUFDRTs7VUFBSyxXQUFVLDRCQUFWLEVBQUw7UUFDSSxRQURKO1FBR0ksZUFDQTs7WUFBTSxXQUFVLHlCQUFWLEVBQU47VUFBNEMsWUFBNUM7U0FEQSxHQUVBLFNBRkE7T0FKTixDQVJtQjs7Ozs2QkFvQlo7b0JBQ3FFLEtBQUssS0FBTCxDQURyRTtVQUNDLDRCQUREO1VBQ1csOEJBRFg7VUFDc0IsOEJBRHRCO1VBQ2lDLG9CQURqQztVQUN1QyxzQkFEdkM7VUFDOEMsNEJBRDlDO1VBQzJELDZIQUQzRDs7QUFFUCxVQUFNLFlBQVksS0FBSyxXQUFMLEVBQVosQ0FGQztBQUdQLFVBQUksUUFBSixFQUFjO0FBQ1osWUFBTSxlQUFjLEtBQUssYUFBTCxDQUFtQixFQUFFLGtCQUFGLEVBQW5CLENBQWQsQ0FETTtBQUVaLFlBQU0sb0JBQW1CLENBQUMsU0FBRCxFQUFZLFlBQVosQ0FBbkIsQ0FGTTtBQUdaLFlBQU0sZ0JBQWdCLEtBQUssaUJBQUwsNEJBQTRCLFNBQU8sVUFBVSxpQkFBVixHQUFuQyxDQUFoQixDQUhNO0FBSVosWUFBTSxtQkFBbUIsS0FBSyxhQUFMLENBQW1CLEVBQUUsWUFBRixFQUFTLFVBQVUsUUFBVixFQUE1QixDQUFuQixDQUpNO0FBS1osWUFBTSx3QkFBd0IsQ0FDNUIsYUFENEIsRUFFNUI7O1lBQUssV0FBVSxxQ0FBVixFQUFMO1VBQXVELGdCQUF2RDtTQUY0QixDQUF4QixDQUxNO0FBU1osWUFBTSxxQkFBcUIsMEJBQVcsa0NBQVgsRUFBK0MsU0FBL0MsQ0FBckIsQ0FUTTtBQVVaLGVBQU8sS0FBSyxpQkFBTCw0QkFDRixTQUFPLGNBQU8sc0JBQVc7QUFDNUIscUJBQVcsa0JBQVg7QUFDQSxvQkFBVSxxQkFBVjtVQUhLLENBQVAsQ0FWWTtPQUFkO0FBZ0JBLFVBQU0sY0FBYyxLQUFLLGFBQUwsQ0FBbUIsRUFBRSxrQkFBRixFQUFZLFlBQVosRUFBbkIsQ0FBZCxDQW5CQztBQW9CUCxVQUFNLG1CQUFtQixDQUFDLFNBQUQsRUFBWSxXQUFaLENBQW5CLENBcEJDO0FBcUJQLGFBQU8sS0FBSyxpQkFBTCw0QkFDRixTQUFPLHNCQUFXLGNBQU8sc0JBQVc7QUFDdkMsa0JBQVUsZ0JBQVY7UUFGSyxDQUFQLENBckJPOzs7U0E3RlU7RUFBb0IsZ0JBQU0sU0FBTjs7a0JBQXBCOzs7QUEwSHJCLFlBQVksU0FBWixHQUF3QjtBQUN0QixNQUFJLGlCQUFVLE1BQVY7QUFDSixhQUFXLGlCQUFVLE1BQVY7QUFDWCxTQUFPLGlCQUFVLE1BQVY7QUFDUCxZQUFVLGlCQUFVLElBQVY7QUFDVixTQUFPLGlCQUFVLFNBQVYsQ0FBb0IsQ0FDekIsaUJBQVUsSUFBVixFQUNBLGlCQUFVLE1BQVYsRUFDQSxpQkFBVSxLQUFWLENBQWdCO0FBQ2QsYUFBUyxpQkFBVSxNQUFWO0dBRFgsQ0FIeUIsQ0FBcEIsQ0FBUDtBQU9BLFFBQU0saUJBQVUsTUFBVjtBQUNOLGFBQVcsaUJBQVUsTUFBVjtBQUNYLFlBQVUsaUJBQVUsT0FBVjtBQUNWLFlBQVUsaUJBQVUsT0FBVjtDQWZaOztBQWtCQSxZQUFZLGFBQVosR0FBNEIsSUFBNUIiLCJmaWxlIjoiRm9ybUVsZW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgcmVnaXN0ZXJTdHlsZSB9IGZyb20gJy4vdXRpbCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybUVsZW1lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgcmVnaXN0ZXJTdHlsZSgnZHJvcGRvd24nLCBbXHJcbiAgICAgIFtcclxuICAgICAgICAnLnJlYWN0LXNsZHMtZHJvcGRvd24tY29udHJvbC13cmFwcGVyJyxcclxuICAgICAgICAneyBoZWlnaHQ6IDA7IH0nLFxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgJy5zbGRzLWhhcy1lcnJvciAucmVhY3Qtc2xkcy1kcm9wZG93bi1jb250cm9sLXdyYXBwZXInLFxyXG4gICAgICAgICd7IGhlaWdodDogYXV0bzsgfScsXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICAnLnJlYWN0LXNsZHMtZHJvcGRvd24tY29udHJvbC13cmFwcGVyID4gLnNsZHMtZm9ybS1lbGVtZW50X19jb250cm9sJyxcclxuICAgICAgICAneyBwb3NpdGlvbjogcmVsYXRpdmU7IHBhZGRpbmctdG9wOiAwLjFweDsgbWFyZ2luLXRvcDogLTAuMXB4IH0nLFxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgJy5yZWFjdC1zbGRzLWRyb3Bkb3duLWZvcm0tZWxlbWVudCcsXHJcbiAgICAgICAgJ3sgcG9zaXRpb246IHN0YXRpYzsgfScsXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICAnLnNsZHMtZm9ybS0taG9yaXpvbnRhbCAucmVhY3Qtc2xkcy1kcm9wZG93bi1jb250cm9sLXdyYXBwZXIgLnNsZHMtZHJvcGRvd24nLFxyXG4gICAgICAgICd7IHRvcDogLTFlbTsgfScsXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICAnLnNsZHMtZm9ybS0taG9yaXpvbnRhbCAucmVhY3Qtc2xkcy1kcm9wZG93bi1jb250cm9sLXdyYXBwZXIgLnNsZHMtbG9va3VwX19tZW51JyxcclxuICAgICAgICAneyB0b3A6IC0xZW07IH0nLFxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgJy5zbGRzLWZvcm0tLWhvcml6b250YWwgLnNsZHMtaGFzLWVycm9yIC5yZWFjdC1zbGRzLWRyb3Bkb3duLWNvbnRyb2wtd3JhcHBlciAuc2xkcy1kcm9wZG93bicsXHJcbiAgICAgICAgJ3sgdG9wOiAwOyB9JyxcclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgICcuc2xkcy1tb2RhbCAucmVhY3Qtc2xkcy1kcm9wZG93bi1jb250cm9sLXdyYXBwZXIgPiAuc2xkcy1mb3JtLWVsZW1lbnRfX2NvbnRyb2wnLFxyXG4gICAgICAgICd7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgfScsXHJcbiAgICAgIF0sXHJcbiAgICBdKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckZvcm1FbGVtZW50KHByb3BzKSB7XHJcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgZXJyb3IsIHRvdGFsQ29scywgY29scyA9IDEsIGNoaWxkcmVuIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IGZvcm1FbGVtZW50Q2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXHJcbiAgICAgICdzbGRzLWZvcm0tZWxlbWVudCcsXHJcbiAgICAgIHtcclxuICAgICAgICAnc2xkcy1oYXMtZXJyb3InOiBlcnJvcixcclxuICAgICAgICBbYHNsZHMtc2l6ZS0tJHtjb2xzfS1vZi0ke3RvdGFsQ29sc31gXTogdHlwZW9mIHRvdGFsQ29scyA9PT0gJ251bWJlcicsXHJcbiAgICAgIH0sXHJcbiAgICAgIGNsYXNzTmFtZVxyXG4gICAgKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgZm9ybUVsZW1lbnRDbGFzc05hbWVzIH0+XHJcbiAgICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckxhYmVsKCkge1xyXG4gICAgY29uc3QgeyBpZCwgbGFiZWwsIHJlcXVpcmVkIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgbGFiZWwgP1xyXG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPSdzbGRzLWZvcm0tZWxlbWVudF9fbGFiZWwnIGh0bWxGb3I9eyBpZCB9PlxyXG4gICAgICAgIHsgbGFiZWwgfVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHJlcXVpcmVkID9cclxuICAgICAgICAgIDxhYmJyIGNsYXNzTmFtZT0nc2xkcy1yZXF1aXJlZCc+KjwvYWJicj4gOlxyXG4gICAgICAgICAgdW5kZWZpbmVkXHJcbiAgICAgICAgfVxyXG4gICAgICA8L2xhYmVsPiA6XHJcbiAgICAgIHVuZGVmaW5lZFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckNvbnRyb2wocHJvcHMpIHtcclxuICAgIGNvbnN0IHsgZXJyb3IsIGNoaWxkcmVuIH0gPSBwcm9wcztcclxuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9XHJcbiAgICAgIGVycm9yID9cclxuICAgICAgKHR5cGVvZiBlcnJvciA9PT0gJ3N0cmluZycgPyBlcnJvciA6XHJcbiAgICAgICB0eXBlb2YgZXJyb3IgPT09ICdvYmplY3QnID8gZXJyb3IubWVzc2FnZSA6XHJcbiAgICAgICB1bmRlZmluZWQpIDpcclxuICAgICAgdW5kZWZpbmVkO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NsZHMtZm9ybS1lbGVtZW50X19jb250cm9sJz5cclxuICAgICAgICB7IGNoaWxkcmVuIH1cclxuICAgICAgICB7XHJcbiAgICAgICAgICBlcnJvck1lc3NhZ2UgP1xyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzbGRzLWZvcm0tZWxlbWVudF9faGVscCc+eyBlcnJvck1lc3NhZ2UgfTwvc3Bhbj4gOlxyXG4gICAgICAgICAgdW5kZWZpbmVkXHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGRyb3Bkb3duLCBjbGFzc05hbWUsIHRvdGFsQ29scywgY29scywgZXJyb3IsIGNoaWxkcmVuLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IGxhYmVsRWxlbSA9IHRoaXMucmVuZGVyTGFiZWwoKTtcclxuICAgIGlmIChkcm9wZG93bikge1xyXG4gICAgICBjb25zdCBjb250cm9sRWxlbSA9IHRoaXMucmVuZGVyQ29udHJvbCh7IGNoaWxkcmVuIH0pO1xyXG4gICAgICBjb25zdCBmb3JtRWxlbUNoaWxkcmVuID0gW2xhYmVsRWxlbSwgY29udHJvbEVsZW1dO1xyXG4gICAgICBjb25zdCBpbm5lckZvcm1FbGVtID0gdGhpcy5yZW5kZXJGb3JtRWxlbWVudCh7IC4uLnByb3BzLCBjaGlsZHJlbjogZm9ybUVsZW1DaGlsZHJlbiB9KTtcclxuICAgICAgY29uc3Qgb3V0ZXJDb250cm9sRWxlbSA9IHRoaXMucmVuZGVyQ29udHJvbCh7IGVycm9yLCBjaGlsZHJlbjogZHJvcGRvd24gfSk7XHJcbiAgICAgIGNvbnN0IG91dGVyRm9ybUVsZW1DaGlsZHJlbiA9IFtcclxuICAgICAgICBpbm5lckZvcm1FbGVtLFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWFjdC1zbGRzLWRyb3Bkb3duLWNvbnRyb2wtd3JhcHBlcic+eyBvdXRlckNvbnRyb2xFbGVtIH08L2Rpdj4sXHJcbiAgICAgIF07XHJcbiAgICAgIGNvbnN0IG91dGVyRm9ybUNsYXNzTmFtZSA9IGNsYXNzbmFtZXMoJ3JlYWN0LXNsZHMtZHJvcGRvd24tZm9ybS1lbGVtZW50JywgY2xhc3NOYW1lKTtcclxuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyRm9ybUVsZW1lbnQoe1xyXG4gICAgICAgIC4uLnByb3BzLCBlcnJvciwgdG90YWxDb2xzLCBjb2xzLFxyXG4gICAgICAgIGNsYXNzTmFtZTogb3V0ZXJGb3JtQ2xhc3NOYW1lLFxyXG4gICAgICAgIGNoaWxkcmVuOiBvdXRlckZvcm1FbGVtQ2hpbGRyZW4sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY29udHJvbEVsZW0gPSB0aGlzLnJlbmRlckNvbnRyb2woeyBjaGlsZHJlbiwgZXJyb3IgfSk7XHJcbiAgICBjb25zdCBmb3JtRWxlbUNoaWxkcmVuID0gW2xhYmVsRWxlbSwgY29udHJvbEVsZW1dO1xyXG4gICAgcmV0dXJuIHRoaXMucmVuZGVyRm9ybUVsZW1lbnQoe1xyXG4gICAgICAuLi5wcm9wcywgY2xhc3NOYW1lLCBlcnJvciwgdG90YWxDb2xzLCBjb2xzLFxyXG4gICAgICBjaGlsZHJlbjogZm9ybUVsZW1DaGlsZHJlbixcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkZvcm1FbGVtZW50LnByb3BUeXBlcyA9IHtcclxuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gIGVycm9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgIFByb3BUeXBlcy5ib29sLFxyXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgIG1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB9KSxcclxuICBdKSxcclxuICBjb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIHRvdGFsQ29sczogUHJvcFR5cGVzLm51bWJlcixcclxuICBkcm9wZG93bjogUHJvcFR5cGVzLmVsZW1lbnQsXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5lbGVtZW50LFxyXG59O1xyXG5cclxuRm9ybUVsZW1lbnQuaXNGb3JtRWxlbWVudCA9IHRydWU7XHJcbiJdfQ==