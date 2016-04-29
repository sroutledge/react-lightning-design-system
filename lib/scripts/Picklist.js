'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PicklistItem = undefined;

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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _FormElement = require('./FormElement');

var _FormElement2 = _interopRequireDefault(_FormElement);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _DropdownMenu = require('./DropdownMenu');

var _DropdownMenu2 = _interopRequireDefault(_DropdownMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Picklist = function (_React$Component) {
  (0, _inherits3.default)(Picklist, _React$Component);

  function Picklist(props) {
    (0, _classCallCheck3.default)(this, Picklist);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Picklist).call(this, props));

    _this.state = {
      id: 'form-element-' + (0, _uuid2.default)(),
      opened: props.defaultOpened,
      value: props.defaultValue
    };
    return _this;
  }

  (0, _createClass3.default)(Picklist, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.onValueChange && prevState.value !== this.state.value) {
        this.props.onValueChange(this.state.value, prevState.value);
      }
    }
  }, {
    key: 'onClick',
    value: function onClick() {
      var _this2 = this;

      this.setState({ opened: !this.state.opened });
      setTimeout(function () {
        _this2.focusToTargetItemEl();
      }, 10);
    }
  }, {
    key: 'onPicklistItemClick',
    value: function onPicklistItemClick(item, e) {
      var _this3 = this;

      this.setState({ value: item.value });
      if (this.props.onChange) {
        this.props.onChange(e, item.value);
      }
      if (this.props.onSelect) {
        this.props.onSelect(item);
      }
      setTimeout(function () {
        _this3.setState({ opened: false });
        if (_this3.props.onComplete) {
          _this3.props.onComplete();
        }
        var picklistButtonEl = _reactDom2.default.findDOMNode(_this3.refs.picklistButton);
        if (picklistButtonEl) {
          picklistButtonEl.focus();
        }
      }, 200);
      e.preventDefault();
      e.stopPropagation();
    }
  }, {
    key: 'onPicklistClose',
    value: function onPicklistClose() {
      var picklistButtonEl = _reactDom2.default.findDOMNode(this.refs.picklistButton);
      picklistButtonEl.focus();
      this.setState({ opened: false });
    }
  }, {
    key: 'onBlur',
    value: function onBlur() {
      var _this4 = this;

      setTimeout(function () {
        if (!_this4.isFocusedInComponent()) {
          _this4.setState({ opened: false });
          if (_this4.props.onBlur) {
            _this4.props.onBlur();
          }
          if (_this4.props.onComplete) {
            _this4.props.onComplete();
          }
        }
      }, 10);
    }
  }, {
    key: 'onKeydown',
    value: function onKeydown(e) {
      var _this5 = this;

      if (e.keyCode === 40) {
        // down
        e.preventDefault();
        e.stopPropagation();
        if (!this.state.opened) {
          this.setState({ opened: true });
          setTimeout(function () {
            _this5.focusToTargetItemEl();
          }, 10);
        } else {
          this.focusToTargetItemEl();
        }
      } else if (e.keyCode === 27) {
        // ESC
        e.preventDefault();
        e.stopPropagation();
        this.setState({ opened: false });
        if (this.props.onComplete) {
          this.props.onComplete();
        }
      }
      if (this.props.onKeyDown) {
        this.props.onKeyDown(e);
      }
    }
  }, {
    key: 'getSelectedValue',
    value: function getSelectedValue() {
      var _props = this.props;
      var defaultValue = _props.defaultValue;
      var value = _props.value;

      return typeof value !== 'undefined' ? value : typeof this.state.value !== 'undefined' ? this.state.value : defaultValue;
    }
  }, {
    key: 'getSelectedItemLabel',
    value: function getSelectedItemLabel() {
      var selectedValue = this.getSelectedValue();
      var selected = null;
      _react2.default.Children.forEach(this.props.children, function (item) {
        if (item.props.value === selectedValue) {
          selected = item.props.label || item.props.children;
        }
      });
      return selected || this.props.selectedText;
    }
  }, {
    key: 'isFocusedInComponent',
    value: function isFocusedInComponent() {
      var rootEl = _reactDom2.default.findDOMNode(this);
      var targetEl = document.activeElement;
      while (targetEl && targetEl !== rootEl) {
        targetEl = targetEl.parentNode;
      }
      return !!targetEl;
    }
  }, {
    key: 'focusToTargetItemEl',
    value: function focusToTargetItemEl() {
      var dropdownEl = _reactDom2.default.findDOMNode(this.refs.dropdown);
      var firstItemEl = dropdownEl.querySelector('.slds-is-selected > .react-slds-menuitem[tabIndex]') || dropdownEl.querySelector('.react-slds-menuitem[tabIndex]');
      if (firstItemEl) {
        firstItemEl.focus();
      }
    }
  }, {
    key: 'renderPicklist',
    value: function renderPicklist(props) {
      var className = props.className;
      var id = props.id;
      var menuSize = props.menuSize;
      var children = props.children;
      var pprops = (0, _objectWithoutProperties3.default)(props, ['className', 'id', 'menuSize', 'children']);

      var picklistClassNames = (0, _classnames2.default)(className, 'slds-picklist');
      return _react2.default.createElement(
        'div',
        { className: picklistClassNames, 'aria-expanded': this.state.opened },
        _react2.default.createElement(
          'button',
          (0, _extends3.default)({ id: id, ref: 'picklistButton', className: 'slds-picklist__label slds-button slds-button--neutral',
            type: 'button', 'aria-haspopup': true }, pprops, {
            onClick: this.onClick.bind(this),
            onBlur: this.onBlur.bind(this),
            onKeyDown: this.onKeydown.bind(this)
          }),
          _react2.default.createElement(
            'span',
            { className: 'slds-truncate' },
            this.getSelectedItemLabel() || _react2.default.createElement(
              'span',
              null,
              ' '
            )
          ),
          _react2.default.createElement(_Icon2.default, { icon: 'down' })
        )
      );
    }
  }, {
    key: 'renderDropdown',
    value: function renderDropdown() {
      var _props2 = this.props;
      var menuSize = _props2.menuSize;
      var children = _props2.children;

      return this.state.opened ? _react2.default.createElement(
        _DropdownMenu2.default,
        { ref: 'dropdown', size: menuSize,
          onMenuItemClick: this.onPicklistItemClick.bind(this),
          onMenuClose: this.onPicklistClose.bind(this)
        },
        _react2.default.Children.map(children, this.renderPicklistItem.bind(this))
      ) : _react2.default.createElement('div', { ref: 'dropdown' });
    }
  }, {
    key: 'renderPicklistItem',
    value: function renderPicklistItem(item) {
      var selected = item.props.value === this.getSelectedValue();
      var onBlur = this.onBlur.bind(this);
      return _react2.default.cloneElement(item, { selected: selected, onBlur: onBlur });
    }
  }, {
    key: 'render',
    value: function render() {
      var id = this.props.id || this.state.id;
      var _props3 = this.props;
      var label = _props3.label;
      var required = _props3.required;
      var error = _props3.error;
      var totalCols = _props3.totalCols;
      var cols = _props3.cols;
      var props = (0, _objectWithoutProperties3.default)(_props3, ['label', 'required', 'error', 'totalCols', 'cols']);

      var dropdown = this.renderDropdown();
      var formElemProps = { id: id, label: label, required: required, error: error, totalCols: totalCols, cols: cols, dropdown: dropdown };
      return _react2.default.createElement(
        _FormElement2.default,
        formElemProps,
        this.renderPicklist((0, _extends3.default)({}, props, { id: id }))
      );
    }
  }]);
  return Picklist;
}(_react2.default.Component);

exports.default = Picklist;


Picklist.propTypes = {
  id: _react.PropTypes.string,
  className: _react.PropTypes.string,
  label: _react.PropTypes.string,
  required: _react.PropTypes.bool,
  error: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.string, _react.PropTypes.shape({
    message: _react.PropTypes.string
  })]),
  totalCols: _react.PropTypes.number,
  cols: _react.PropTypes.number,
  name: _react.PropTypes.string,
  value: _react.PropTypes.any,
  defaultValue: _react.PropTypes.any,
  selectedText: _react.PropTypes.string,
  defaultOpened: _react.PropTypes.bool,
  onChange: _react.PropTypes.func,
  onValueChange: _react.PropTypes.func,
  onSelect: _react.PropTypes.func,
  onComplete: _react.PropTypes.func,
  onKeyDown: _react.PropTypes.func,
  onBlur: _react.PropTypes.func,
  menuSize: _react.PropTypes.string,
  children: _react.PropTypes.node
};

Picklist.isFormElement = true;

var PicklistItem = exports.PicklistItem = function (_React$Component2) {
  (0, _inherits3.default)(PicklistItem, _React$Component2);

  function PicklistItem() {
    (0, _classCallCheck3.default)(this, PicklistItem);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(PicklistItem).apply(this, arguments));
  }

  (0, _createClass3.default)(PicklistItem, [{
    key: 'render',
    value: function render() {
      var _props4 = this.props;
      var label = _props4.label;
      var selected = _props4.selected;
      var value = _props4.value;
      var children = _props4.children;
      var props = (0, _objectWithoutProperties3.default)(_props4, ['label', 'selected', 'value', 'children']);

      return _react2.default.createElement(
        _DropdownMenu.DropdownMenuItem,
        (0, _extends3.default)({ icon: selected ? 'check' : 'none', role: 'menuitemradio', selected: selected }, props),
        label || children
      );
    }
  }]);
  return PicklistItem;
}(_react2.default.Component);

PicklistItem.propTypes = {
  label: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  selected: _react.PropTypes.bool,
  value: _react.PropTypes.any,
  children: _react.PropTypes.node
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1BpY2tsaXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUdxQjs7O0FBQ25CLFdBRG1CLFFBQ25CLENBQVksS0FBWixFQUFtQjt3Q0FEQSxVQUNBOzs2RkFEQSxxQkFFWCxRQURXOztBQUVqQixVQUFLLEtBQUwsR0FBYTtBQUNYLDRCQUFvQixxQkFBcEI7QUFDQSxjQUFRLE1BQU0sYUFBTjtBQUNSLGFBQU8sTUFBTSxZQUFOO0tBSFQsQ0FGaUI7O0dBQW5COzs2QkFEbUI7O3VDQVVBLFdBQVcsV0FBVztBQUN2QyxVQUFJLEtBQUssS0FBTCxDQUFXLGFBQVgsSUFBNEIsVUFBVSxLQUFWLEtBQW9CLEtBQUssS0FBTCxDQUFXLEtBQVgsRUFBa0I7QUFDcEUsYUFBSyxLQUFMLENBQVcsYUFBWCxDQUF5QixLQUFLLEtBQUwsQ0FBVyxLQUFYLEVBQWtCLFVBQVUsS0FBVixDQUEzQyxDQURvRTtPQUF0RTs7Ozs4QkFLUTs7O0FBQ1IsV0FBSyxRQUFMLENBQWMsRUFBRSxRQUFRLENBQUMsS0FBSyxLQUFMLENBQVcsTUFBWCxFQUF6QixFQURRO0FBRVIsaUJBQVcsWUFBTTtBQUNmLGVBQUssbUJBQUwsR0FEZTtPQUFOLEVBRVIsRUFGSCxFQUZROzs7O3dDQU9VLE1BQU0sR0FBRzs7O0FBQzNCLFdBQUssUUFBTCxDQUFjLEVBQUUsT0FBTyxLQUFLLEtBQUwsRUFBdkIsRUFEMkI7QUFFM0IsVUFBSSxLQUFLLEtBQUwsQ0FBVyxRQUFYLEVBQXFCO0FBQ3ZCLGFBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsQ0FBcEIsRUFBdUIsS0FBSyxLQUFMLENBQXZCLENBRHVCO09BQXpCO0FBR0EsVUFBSSxLQUFLLEtBQUwsQ0FBVyxRQUFYLEVBQXFCO0FBQ3ZCLGFBQUssS0FB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LHNCQUREO1VBQ1EsNEJBRFI7VUFDa0Isc0JBRGxCO1VBQ3lCLDRCQUR6QjtVQUNzQyxvR0FEdEM7O0FBRVAsYUFDRTs7aUNBQWtCLE1BQU8sV0FBVyxPQUFYLEdBQXFCLE1BQXJCLEVBQThCLE1BQUssZUFBTCxFQUFxQixVQUFXLFFBQVgsSUFBMkIsTUFBdkc7UUFDSSxTQUFTLFFBQVQ7T0FGTixDQUZPOzs7U0FGRTtFQUFxQixnQkFBTSxTQUFOOztBQWFsQyxhQUFhLFNBQWIsR0FBeUI7QUFDdkIsU0FBTyxpQkFBVSxTQUFWLENBQW9CLENBQ3pCLGlCQUFVLE1BQVYsRUFDQSxpQkFBVSxNQUFWLENBRkssQ0FBUDtBQUlBLFlBQVUsaUJBQVUsSUFBVjtBQUNWLFNBQU8saUJBQVUsR0FBVjtBQUNQLFlBQVUsaUJBQVUsSUFBVjtDQVBaIiwiZmlsZSI6IlBpY2tsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkJztcclxuaW1wb3J0IEZvcm1FbGVtZW50IGZyb20gJy4vRm9ybUVsZW1lbnQnO1xyXG5pbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nO1xyXG5pbXBvcnQgeyBkZWZhdWx0IGFzIERyb3Bkb3duTWVudSwgRHJvcGRvd25NZW51SXRlbSB9IGZyb20gJy4vRHJvcGRvd25NZW51JztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaWNrbGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGlkOiBgZm9ybS1lbGVtZW50LSR7dXVpZCgpfWAsXHJcbiAgICAgIG9wZW5lZDogcHJvcHMuZGVmYXVsdE9wZW5lZCxcclxuICAgICAgdmFsdWU6IHByb3BzLmRlZmF1bHRWYWx1ZSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcclxuICAgIGlmICh0aGlzLnByb3BzLm9uVmFsdWVDaGFuZ2UgJiYgcHJldlN0YXRlLnZhbHVlICE9PSB0aGlzLnN0YXRlLnZhbHVlKSB7XHJcbiAgICAgIHRoaXMucHJvcHMub25WYWx1ZUNoYW5nZSh0aGlzLnN0YXRlLnZhbHVlLCBwcmV2U3RhdGUudmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DbGljaygpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6ICF0aGlzLnN0YXRlLm9wZW5lZCB9KTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmZvY3VzVG9UYXJnZXRJdGVtRWwoKTtcclxuICAgIH0sIDEwKTtcclxuICB9XHJcblxyXG4gIG9uUGlja2xpc3RJdGVtQ2xpY2soaXRlbSwgZSkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBpdGVtLnZhbHVlIH0pO1xyXG4gICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcclxuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlLCBpdGVtLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XHJcbiAgICAgIHRoaXMucHJvcHMub25TZWxlY3QoaXRlbSk7XHJcbiAgICB9XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XHJcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcclxuICAgICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUoKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBwaWNrbGlzdEJ1dHRvbkVsID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLnBpY2tsaXN0QnV0dG9uKTtcclxuICAgICAgaWYgKHBpY2tsaXN0QnV0dG9uRWwpIHtcclxuICAgICAgICBwaWNrbGlzdEJ1dHRvbkVsLmZvY3VzKCk7XHJcbiAgICAgIH1cclxuICAgIH0sIDIwMCk7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgb25QaWNrbGlzdENsb3NlKCkge1xyXG4gICAgY29uc3QgcGlja2xpc3RCdXR0b25FbCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy5waWNrbGlzdEJ1dHRvbik7XHJcbiAgICBwaWNrbGlzdEJ1dHRvbkVsLmZvY3VzKCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcclxuICB9XHJcblxyXG4gIG9uQmx1cigpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAoIXRoaXMuaXNGb2N1c2VkSW5Db21wb25lbnQoKSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQmx1cikge1xyXG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkJsdXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25Db21wbGV0ZSkge1xyXG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LCAxMCk7XHJcbiAgfVxyXG5cclxuICBvbktleWRvd24oZSkge1xyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gNDApIHsgLy8gZG93blxyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5vcGVuZWQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiB0cnVlIH0pO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5mb2N1c1RvVGFyZ2V0SXRlbUVsKCk7XHJcbiAgICAgICAgfSwgMTApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZm9jdXNUb1RhcmdldEl0ZW1FbCgpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHsgLy8gRVNDXHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XHJcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcclxuICAgICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucHJvcHMub25LZXlEb3duKSB7XHJcbiAgICAgIHRoaXMucHJvcHMub25LZXlEb3duKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0U2VsZWN0ZWRWYWx1ZSgpIHtcclxuICAgIGNvbnN0IHsgZGVmYXVsdFZhbHVlLCB2YWx1ZSB9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgPyB2YWx1ZSA6XHJcbiAgICAgIHR5cGVvZiB0aGlzLnN0YXRlLnZhbHVlICE9PSAndW5kZWZpbmVkJyA/IHRoaXMuc3RhdGUudmFsdWUgOlxyXG4gICAgICBkZWZhdWx0VmFsdWVcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXRTZWxlY3RlZEl0ZW1MYWJlbCgpIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkVmFsdWUgPSB0aGlzLmdldFNlbGVjdGVkVmFsdWUoKTtcclxuICAgIGxldCBzZWxlY3RlZCA9IG51bGw7XHJcbiAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKHRoaXMucHJvcHMuY2hpbGRyZW4sIChpdGVtKSA9PiB7XHJcbiAgICAgIGlmIChpdGVtLnByb3BzLnZhbHVlID09PSBzZWxlY3RlZFZhbHVlKSB7XHJcbiAgICAgICAgc2VsZWN0ZWQgPSBpdGVtLnByb3BzLmxhYmVsIHx8IGl0ZW0ucHJvcHMuY2hpbGRyZW47XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIChzZWxlY3RlZCB8fCB0aGlzLnByb3BzLnNlbGVjdGVkVGV4dCk7XHJcbiAgfVxyXG5cclxuICBpc0ZvY3VzZWRJbkNvbXBvbmVudCgpIHtcclxuICAgIGNvbnN0IHJvb3RFbCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xyXG4gICAgbGV0IHRhcmdldEVsID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcclxuICAgIHdoaWxlICh0YXJnZXRFbCAmJiB0YXJnZXRFbCAhPT0gcm9vdEVsKSB7XHJcbiAgICAgIHRhcmdldEVsID0gdGFyZ2V0RWwucGFyZW50Tm9kZTtcclxuICAgIH1cclxuICAgIHJldHVybiAhIXRhcmdldEVsO1xyXG4gIH1cclxuXHJcbiAgZm9jdXNUb1RhcmdldEl0ZW1FbCgpIHtcclxuICAgIGNvbnN0IGRyb3Bkb3duRWwgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnMuZHJvcGRvd24pO1xyXG4gICAgY29uc3QgZmlyc3RJdGVtRWwgPVxyXG4gICAgICBkcm9wZG93bkVsLnF1ZXJ5U2VsZWN0b3IoJy5zbGRzLWlzLXNlbGVjdGVkID4gLnJlYWN0LXNsZHMtbWVudWl0ZW1bdGFiSW5kZXhdJykgfHxcclxuICAgICAgZHJvcGRvd25FbC5xdWVyeVNlbGVjdG9yKCcucmVhY3Qtc2xkcy1tZW51aXRlbVt0YWJJbmRleF0nKTtcclxuICAgIGlmIChmaXJzdEl0ZW1FbCkge1xyXG4gICAgICBmaXJzdEl0ZW1FbC5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyUGlja2xpc3QocHJvcHMpIHtcclxuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBpZCwgbWVudVNpemUsIGNoaWxkcmVuLCAuLi5wcHJvcHMgfSA9IHByb3BzO1xyXG4gICAgY29uc3QgcGlja2xpc3RDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhjbGFzc05hbWUsICdzbGRzLXBpY2tsaXN0Jyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IHBpY2tsaXN0Q2xhc3NOYW1lcyB9IGFyaWEtZXhwYW5kZWQ9eyB0aGlzLnN0YXRlLm9wZW5lZCB9PlxyXG4gICAgICAgIDxidXR0b24gaWQ9eyBpZCB9IHJlZj0ncGlja2xpc3RCdXR0b24nIGNsYXNzTmFtZT0nc2xkcy1waWNrbGlzdF9fbGFiZWwgc2xkcy1idXR0b24gc2xkcy1idXR0b24tLW5ldXRyYWwnXHJcbiAgICAgICAgICB0eXBlPSdidXR0b24nIGFyaWEtaGFzcG9wdXAgeyAuLi5wcHJvcHMgfVxyXG4gICAgICAgICAgb25DbGljaz17IHRoaXMub25DbGljay5iaW5kKHRoaXMpIH1cclxuICAgICAgICAgIG9uQmx1cj17IHRoaXMub25CbHVyLmJpbmQodGhpcykgfVxyXG4gICAgICAgICAgb25LZXlEb3duPXsgdGhpcy5vbktleWRvd24uYmluZCh0aGlzKSB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzbGRzLXRydW5jYXRlJz57IHRoaXMuZ2V0U2VsZWN0ZWRJdGVtTGFiZWwoKSB8fCA8c3Bhbj4mbmJzcDs8L3NwYW4+IH08L3NwYW4+XHJcbiAgICAgICAgICA8SWNvbiBpY29uPSdkb3duJyAvPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJEcm9wZG93bigpIHtcclxuICAgIGNvbnN0IHsgbWVudVNpemUsIGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5zdGF0ZS5vcGVuZWQgP1xyXG4gICAgICA8RHJvcGRvd25NZW51IHJlZj0nZHJvcGRvd24nIHNpemU9eyBtZW51U2l6ZSB9XHJcbiAgICAgICAgb25NZW51SXRlbUNsaWNrPXsgdGhpcy5vblBpY2tsaXN0SXRlbUNsaWNrLmJpbmQodGhpcykgfVxyXG4gICAgICAgIG9uTWVudUNsb3NlPXsgdGhpcy5vblBpY2tsaXN0Q2xvc2UuYmluZCh0aGlzKSB9XHJcbiAgICAgID5cclxuICAgICAgICB7IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgdGhpcy5yZW5kZXJQaWNrbGlzdEl0ZW0uYmluZCh0aGlzKSkgfVxyXG4gICAgICA8L0Ryb3Bkb3duTWVudT4gOlxyXG4gICAgICA8ZGl2IHJlZj0nZHJvcGRvd24nIC8+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyUGlja2xpc3RJdGVtKGl0ZW0pIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkID0gaXRlbS5wcm9wcy52YWx1ZSA9PT0gdGhpcy5nZXRTZWxlY3RlZFZhbHVlKCk7XHJcbiAgICBjb25zdCBvbkJsdXIgPSB0aGlzLm9uQmx1ci5iaW5kKHRoaXMpO1xyXG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChpdGVtLCB7IHNlbGVjdGVkLCBvbkJsdXIgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBpZCA9IHRoaXMucHJvcHMuaWQgfHwgdGhpcy5zdGF0ZS5pZDtcclxuICAgIGNvbnN0IHsgbGFiZWwsIHJlcXVpcmVkLCBlcnJvciwgdG90YWxDb2xzLCBjb2xzLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IGRyb3Bkb3duID0gdGhpcy5yZW5kZXJEcm9wZG93bigpO1xyXG4gICAgY29uc3QgZm9ybUVsZW1Qcm9wcyA9IHsgaWQsIGxhYmVsLCByZXF1aXJlZCwgZXJyb3IsIHRvdGFsQ29scywgY29scywgZHJvcGRvd24gfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxGb3JtRWxlbWVudCB7IC4uLmZvcm1FbGVtUHJvcHMgfT5cclxuICAgICAgICB7IHRoaXMucmVuZGVyUGlja2xpc3QoeyAuLi5wcm9wcywgaWQgfSkgfVxyXG4gICAgICA8L0Zvcm1FbGVtZW50PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5QaWNrbGlzdC5wcm9wVHlwZXMgPSB7XHJcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICBlcnJvcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICBQcm9wVHlwZXMuYm9vbCxcclxuICAgIFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICBtZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgfSksXHJcbiAgXSksXHJcbiAgdG90YWxDb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIGNvbHM6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICB2YWx1ZTogUHJvcFR5cGVzLmFueSxcclxuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5hbnksXHJcbiAgc2VsZWN0ZWRUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGRlZmF1bHRPcGVuZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcclxuICBvblZhbHVlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcclxuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgb25Db21wbGV0ZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgb25LZXlEb3duOiBQcm9wVHlwZXMuZnVuYyxcclxuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxyXG4gIG1lbnVTaXplOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxufTtcclxuXHJcblxyXG5QaWNrbGlzdC5pc0Zvcm1FbGVtZW50ID0gdHJ1ZTtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgUGlja2xpc3RJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBsYWJlbCwgc2VsZWN0ZWQsIHZhbHVlLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RHJvcGRvd25NZW51SXRlbSBpY29uPXsgc2VsZWN0ZWQgPyAnY2hlY2snIDogJ25vbmUnIH0gcm9sZT0nbWVudWl0ZW1yYWRpbycgc2VsZWN0ZWQ9eyBzZWxlY3RlZCB9IHsgLi4ucHJvcHMgfT5cclxuICAgICAgICB7IGxhYmVsIHx8IGNoaWxkcmVuIH1cclxuICAgICAgPC9Ecm9wZG93bk1lbnVJdGVtPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5QaWNrbGlzdEl0ZW0ucHJvcFR5cGVzID0ge1xyXG4gIGxhYmVsOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgIFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIF0pLFxyXG4gIHNlbGVjdGVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICB2YWx1ZTogUHJvcFR5cGVzLmFueSxcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbn07XHJcbiJdfQ==