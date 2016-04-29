'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuItem = exports.DropdownMenuItem = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DropdownMenuItem = exports.DropdownMenuItem = function (_React$Component) {
  (0, _inherits3.default)(DropdownMenuItem, _React$Component);

  function DropdownMenuItem() {
    (0, _classCallCheck3.default)(this, DropdownMenuItem);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(DropdownMenuItem).apply(this, arguments));
  }

  (0, _createClass3.default)(DropdownMenuItem, [{
    key: 'onKeyDown',
    value: function onKeyDown(e) {
      if (e.keyCode === 13 || e.keyCode === 32) {
        // return or space
        e.preventDefault();
        e.stopPropagation();
        if (this.props.onClick) {
          var _props;

          for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          (_props = this.props).onClick.apply(_props, [e].concat(args));
        }
      } else if (e.keyCode === 40 || e.keyCode === 38) {
        e.preventDefault();
        e.stopPropagation();
        var currentEl = e.target.parentElement;
        var itemEl = e.keyCode === 40 ? currentEl.nextSibling : currentEl.previousSibling;
        while (itemEl) {
          var anchorEl = itemEl.querySelector('.react-slds-menuitem[tabIndex]');
          if (anchorEl && !anchorEl.disabled) {
            anchorEl.focus();
            return;
          }
          itemEl = e.keyCode === 40 ? itemEl.nextSibling : itemEl.previousSibling;
        }
      }
    }
  }, {
    key: 'onBlur',
    value: function onBlur(e) {
      if (this.props.onBlur) {
        this.props.onBlur(e);
      }
    }
  }, {
    key: 'onFocus',
    value: function onFocus(e) {
      if (this.props.onFocus) {
        this.props.onFocus(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var className = _props2.className;
      var label = _props2.label;
      var icon = _props2.icon;
      var iconRight = _props2.iconRight;
      var selected = _props2.selected;
      var disabled = _props2.disabled;
      var _props2$tabIndex = _props2.tabIndex;
      var tabIndex = _props2$tabIndex === undefined ? 0 : _props2$tabIndex;
      var onClick = _props2.onClick;
      var children = _props2.children;
      var props = (0, _objectWithoutProperties3.default)(_props2, ['className', 'label', 'icon', 'iconRight', 'selected', 'disabled', 'tabIndex', 'onClick', 'children']);

      var menuItemClass = (0, _classnames3.default)('slds-dropdown__item', { 'slds-is-selected': selected }, className);
      return _react2.default.createElement(
        'li',
        { className: menuItemClass, disabled: disabled },
        _react2.default.createElement(
          'a',
          (0, _extends3.default)({
            className: 'slds-truncate react-slds-menuitem',
            role: 'menuitem',
            'aria-disabled': disabled,
            tabIndex: disabled ? null : tabIndex,
            onClick: disabled ? null : onClick,
            onKeyDown: disabled ? null : this.onKeyDown.bind(this),
            onBlur: disabled ? null : this.onBlur.bind(this),
            onFocus: disabled ? null : this.onFocus.bind(this)
          }, props),
          _react2.default.createElement(
            'p',
            { className: 'slds-truncate' },
            icon ? _react2.default.createElement(_Icon2.default, { icon: icon, size: 'x-small', align: 'left' }) : null,
            label || children
          ),
          iconRight ? _react2.default.createElement(_Icon2.default, { icon: iconRight, size: 'x-small', align: 'right' }) : null
        )
      );
    }
  }]);
  return DropdownMenuItem;
}(_react2.default.Component);

DropdownMenuItem.propTypes = {
  className: _react.PropTypes.string,
  label: _react.PropTypes.string,
  icon: _react.PropTypes.string,
  iconRight: _react.PropTypes.string,
  disabled: _react.PropTypes.bool,
  tabIndex: _react.PropTypes.number,
  selected: _react.PropTypes.bool,
  onClick: _react.PropTypes.func,
  onBlur: _react.PropTypes.func,
  onFocus: _react.PropTypes.func,
  children: _react.PropTypes.node
};

var MenuItem = exports.MenuItem = DropdownMenuItem;

var DropdownMenu = function (_React$Component2) {
  (0, _inherits3.default)(DropdownMenu, _React$Component2);

  function DropdownMenu() {
    (0, _classCallCheck3.default)(this, DropdownMenu);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(DropdownMenu).apply(this, arguments));
  }

  (0, _createClass3.default)(DropdownMenu, [{
    key: 'onMenuItemBlur',
    value: function onMenuItemBlur(e) {
      if (this.props.onBlur) {
        this.props.onBlur(e);
      }
    }
  }, {
    key: 'onMenuItemFocus',
    value: function onMenuItemFocus(e) {
      if (this.props.onFocus) {
        this.props.onFocus(e);
      }
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(e) {
      if (e.keyCode === 27) {
        // ESC
        if (this.props.onMenuClose) {
          this.props.onMenuClose();
        }
      }
    }
  }, {
    key: 'renderMenuItem',
    value: function renderMenuItem(menuItem) {
      var _this3 = this;

      var _menuItem$props = menuItem.props;
      var onClick = _menuItem$props.onClick;
      var onBlur = _menuItem$props.onBlur;
      var onFocus = _menuItem$props.onFocus;
      var props = (0, _objectWithoutProperties3.default)(_menuItem$props, ['onClick', 'onBlur', 'onFocus']);

      var onMenuItemClick = function onMenuItemClick() {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        if (onClick) {
          onClick.apply(undefined, args);
        }
        if (_this3.props.onMenuItemClick) {
          var _props3;

          (_props3 = _this3.props).onMenuItemClick.apply(_props3, [props].concat(args));
        }
      };
      var onMenuItemFocus = function onMenuItemFocus(e) {
        if (onFocus) {
          onFocus(e);
        }
        _this3.onMenuItemFocus(e);
      };
      var onMenuItemBlur = function onMenuItemBlur(e) {
        if (onBlur) {
          onBlur(e);
        }
        _this3.onMenuItemBlur(e);
      };
      return _react2.default.cloneElement(menuItem, {
        onClick: onMenuItemClick,
        onBlur: onMenuItemBlur,
        onFocus: onMenuItemFocus
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      var _props4 = this.props;
      var className = _props4.className;
      var _props4$align = _props4.align;
      var align = _props4$align === undefined ? 'left' : _props4$align;
      var size = _props4.size;
      var header = _props4.header;
      var nubbinTop = _props4.nubbinTop;
      var hoverPopup = _props4.hoverPopup;
      var children = _props4.children;
      var props = (0, _objectWithoutProperties3.default)(_props4, ['className', 'align', 'size', 'header', 'nubbinTop', 'hoverPopup', 'children']);

      var dropdownMenuClassNames = (0, _classnames3.default)(className, 'slds-dropdown', 'slds-dropdown--menu', 'slds-dropdown--' + align, (_classnames = {}, (0, _defineProperty3.default)(_classnames, 'slds-dropdown--' + size, size), (0, _defineProperty3.default)(_classnames, 'slds-dropdown--nubbin-top', nubbinTop), (0, _defineProperty3.default)(_classnames, 'react-slds-no-hover-popup', !hoverPopup), _classnames));
      return _react2.default.createElement(
        'div',
        { className: dropdownMenuClassNames, onKeyDown: this.onKeyDown.bind(this) },
        header ? _react2.default.createElement(
          'div',
          { className: 'slds-dropdown__header' },
          _react2.default.createElement(
            'span',
            { className: 'slds-text-heading--label' },
            header
          )
        ) : null,
        _react2.default.createElement(
          'ul',
          { className: 'slds-dropdown__list', role: 'menu' },
          _react2.default.Children.map(children, this.renderMenuItem.bind(this))
        )
      );
    }
  }]);
  return DropdownMenu;
}(_react2.default.Component);

exports.default = DropdownMenu;


DropdownMenu.propTypes = {
  className: _react.PropTypes.string,
  align: _react.PropTypes.oneOf(['left', 'center', 'right']),
  size: _react.PropTypes.oneOf(['small', 'medium', 'large']),
  header: _react.PropTypes.string,
  nubbinTop: _react.PropTypes.bool,
  hoverPopup: _react.PropTypes.bool,
  onMenuItemClick: _react.PropTypes.func,
  onMenuClose: _react.PropTypes.func,
  onBlur: _react.PropTypes.func,
  onFocus: _react.PropTypes.func,
  children: _react.PropTypes.node
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0Ryb3Bkb3duTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUdhOzs7Ozs7Ozs7OzhCQUNELEdBQVk7QUFDcEIsVUFBSSxFQUFFLE9BQUYsS0FBYyxFQUFkLElBQW9CLEVBQUUsT0FBRixLQUFjLEVBQWQsRUFBa0I7O0FBQ3hDLFVBQUUsY0FBRixHQUR3QztBQUV4QyxVQUFFLGVBQUYsR0FGd0M7QUFHeEMsWUFBSSxLQUFLLEtBQUwsQ0FBVyxPQUFYLEVBQW9COzs7NENBSlo7O1dBSVk7O0FBQ3RCLHlCQUFLLEtBQUwsRUFBVyxPQUFYLGdCQUFtQixVQUFNLEtBQXpCLEVBRHNCO1NBQXhCO09BSEYsTUFNTyxJQUFJLEVBQUUsT0FBRixLQUFjLEVBQWQsSUFBb0IsRUFBRSxPQUFGLEtBQWMsRUFBZCxFQUFrQjtBQUMvQyxVQUFFLGNBQUYsR0FEK0M7QUFFL0MsVUFBRSxlQUFGLEdBRitDO0FBRy9DLFlBQU0sWUFBWSxFQUFFLE1BQUYsQ0FBUyxhQUFULENBSDZCO0FBSS9DLFlBQUksU0FBUyxFQUFFLE9BQUYsS0FBYyxFQUFkLEdBQW1CLFVBQVUsV0FBVixHQUF3QixVQUFVLGVBQVYsQ0FKVDtBQUsvQyxlQUFPLE1BQVAsRUFBZTtBQUNiLGNBQU0sV0FBVyxPQUFPLGFBQVAsQ0FBcUIsZ0NBQXJCLENBQVgsQ0FETztBQUViLGNBQUksWUFBWSxDQUFDLFNBQVMsUUFBVCxFQUFtQjtBQUNsQyxxQkFBUyxLQUFULEdBRGtDO0FBRWxDLG1CQUZrQztXQUFwQztBQUlBLG1CQUFTLEVBQUUsT0FBRixLQUFjLEVBQWQsR0FBbUIsT0FBTyxXQUFQLEdBQXFCLE9BQU8sZUFBUCxDQU5wQztTQUFmO09BTEs7Ozs7MkJBZ0JGLEdBQUc7QUFDUixVQUFJLEtBQUssS0FBTCxDQUFXLE1BQVgsRUFBbUI7QUFDckIs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O1lBQUssV0FBVSx1QkFBVixFQUFMO1VBQ0U7O2NBQU0sV0FBVSwwQkFBVixFQUFOO1lBQTZDLE1BQTdDO1dBREY7U0FEQSxHQUlBLElBSkE7UUFNRjs7WUFBSSxXQUFVLHFCQUFWLEVBQWdDLE1BQUssTUFBTCxFQUFwQztVQUNJLGdCQUFNLFFBQU4sQ0FBZSxHQUFmLENBQW1CLFFBQW5CLEVBQTZCLEtBQUssY0FBTCxDQUFvQixJQUFwQixDQUF5QixJQUF6QixDQUE3QixDQURKO1NBUkY7T0FERixDQWJPOzs7U0E1Q1U7RUFBcUIsZ0JBQU0sU0FBTjs7a0JBQXJCOzs7QUE0RXJCLGFBQWEsU0FBYixHQUF5QjtBQUN2QixhQUFXLGlCQUFVLE1BQVY7QUFDWCxTQUFPLGlCQUFVLEtBQVYsQ0FBZ0IsQ0FBQyxNQUFELEVBQVMsUUFBVCxFQUFtQixPQUFuQixDQUFoQixDQUFQO0FBQ0EsUUFBTSxpQkFBVSxLQUFWLENBQWdCLENBQUMsT0FBRCxFQUFVLFFBQVYsRUFBb0IsT0FBcEIsQ0FBaEIsQ0FBTjtBQUNBLFVBQVEsaUJBQVUsTUFBVjtBQUNSLGFBQVcsaUJBQVUsSUFBVjtBQUNYLGNBQVksaUJBQVUsSUFBVjtBQUNaLG1CQUFpQixpQkFBVSxJQUFWO0FBQ2pCLGVBQWEsaUJBQVUsSUFBVjtBQUNiLFVBQVEsaUJBQVUsSUFBVjtBQUNSLFdBQVMsaUJBQVUsSUFBVjtBQUNULFlBQVUsaUJBQVUsSUFBVjtDQVhaIiwiZmlsZSI6IkRyb3Bkb3duTWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBEcm9wZG93bk1lbnVJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBvbktleURvd24oZSwgLi4uYXJncykge1xyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMgfHwgZS5rZXlDb2RlID09PSAzMikgeyAvLyByZXR1cm4gb3Igc3BhY2VcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrKGUsIC4uLmFyZ3MpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gNDAgfHwgZS5rZXlDb2RlID09PSAzOCkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRFbCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgIGxldCBpdGVtRWwgPSBlLmtleUNvZGUgPT09IDQwID8gY3VycmVudEVsLm5leHRTaWJsaW5nIDogY3VycmVudEVsLnByZXZpb3VzU2libGluZztcclxuICAgICAgd2hpbGUgKGl0ZW1FbCkge1xyXG4gICAgICAgIGNvbnN0IGFuY2hvckVsID0gaXRlbUVsLnF1ZXJ5U2VsZWN0b3IoJy5yZWFjdC1zbGRzLW1lbnVpdGVtW3RhYkluZGV4XScpO1xyXG4gICAgICAgIGlmIChhbmNob3JFbCAmJiAhYW5jaG9yRWwuZGlzYWJsZWQpIHtcclxuICAgICAgICAgIGFuY2hvckVsLmZvY3VzKCk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGl0ZW1FbCA9IGUua2V5Q29kZSA9PT0gNDAgPyBpdGVtRWwubmV4dFNpYmxpbmcgOiBpdGVtRWwucHJldmlvdXNTaWJsaW5nO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkJsdXIoZSkge1xyXG4gICAgaWYgKHRoaXMucHJvcHMub25CbHVyKSB7XHJcbiAgICAgIHRoaXMucHJvcHMub25CbHVyKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Gb2N1cyhlKSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5vbkZvY3VzKSB7XHJcbiAgICAgIHRoaXMucHJvcHMub25Gb2N1cyhlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBsYWJlbCwgaWNvbiwgaWNvblJpZ2h0LCBzZWxlY3RlZCwgZGlzYWJsZWQsIHRhYkluZGV4ID0gMCwgb25DbGljaywgY2hpbGRyZW4sIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgbWVudUl0ZW1DbGFzcyA9IGNsYXNzbmFtZXMoXHJcbiAgICAgICdzbGRzLWRyb3Bkb3duX19pdGVtJyxcclxuICAgICAgeyAnc2xkcy1pcy1zZWxlY3RlZCc6IHNlbGVjdGVkIH0sXHJcbiAgICAgIGNsYXNzTmFtZVxyXG4gICAgKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxsaSBjbGFzc05hbWU9eyBtZW51SXRlbUNsYXNzIH0gZGlzYWJsZWQ9eyBkaXNhYmxlZCB9PlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBjbGFzc05hbWU9J3NsZHMtdHJ1bmNhdGUgcmVhY3Qtc2xkcy1tZW51aXRlbSdcclxuICAgICAgICAgIHJvbGU9J21lbnVpdGVtJ1xyXG4gICAgICAgICAgYXJpYS1kaXNhYmxlZD17IGRpc2FibGVkIH1cclxuICAgICAgICAgIHRhYkluZGV4PXsgZGlzYWJsZWQgPyBudWxsIDogdGFiSW5kZXggfVxyXG4gICAgICAgICAgb25DbGljaz17IGRpc2FibGVkID8gbnVsbCA6IG9uQ2xpY2sgfVxyXG4gICAgICAgICAgb25LZXlEb3duPXsgZGlzYWJsZWQgPyBudWxsIDogdGhpcy5vbktleURvd24uYmluZCh0aGlzKSB9XHJcbiAgICAgICAgICBvbkJsdXI9eyBkaXNhYmxlZCA/IG51bGwgOiB0aGlzLm9uQmx1ci5iaW5kKHRoaXMpIH1cclxuICAgICAgICAgIG9uRm9jdXM9eyBkaXNhYmxlZCA/IG51bGwgOiB0aGlzLm9uRm9jdXMuYmluZCh0aGlzKSB9XHJcbiAgICAgICAgICB7IC4uLnByb3BzIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9J3NsZHMtdHJ1bmNhdGUnPlxyXG4gICAgICAgICAgICB7IGljb24gPyA8SWNvbiBpY29uPXsgaWNvbiB9IHNpemU9J3gtc21hbGwnIGFsaWduPSdsZWZ0JyAvPiA6IG51bGwgfVxyXG4gICAgICAgICAgICB7IGxhYmVsIHx8IGNoaWxkcmVuIH1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIHsgaWNvblJpZ2h0ID8gPEljb24gaWNvbj17IGljb25SaWdodCB9IHNpemU9J3gtc21hbGwnIGFsaWduPSdyaWdodCcgLz4gOiBudWxsIH1cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvbGk+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuRHJvcGRvd25NZW51SXRlbS5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGljb246IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgaWNvblJpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICB0YWJJbmRleDogUHJvcFR5cGVzLm51bWJlcixcclxuICBzZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcclxuICBvbkZvY3VzOiBQcm9wVHlwZXMuZnVuYyxcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IE1lbnVJdGVtID0gRHJvcGRvd25NZW51SXRlbTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcm9wZG93bk1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIG9uTWVudUl0ZW1CbHVyKGUpIHtcclxuICAgIGlmICh0aGlzLnByb3BzLm9uQmx1cikge1xyXG4gICAgICB0aGlzLnByb3BzLm9uQmx1cihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uTWVudUl0ZW1Gb2N1cyhlKSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5vbkZvY3VzKSB7XHJcbiAgICAgIHRoaXMucHJvcHMub25Gb2N1cyhlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uS2V5RG93bihlKSB7XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSAyNykgeyAvLyBFU0NcclxuICAgICAgaWYgKHRoaXMucHJvcHMub25NZW51Q2xvc2UpIHtcclxuICAgICAgICB0aGlzLnByb3BzLm9uTWVudUNsb3NlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlck1lbnVJdGVtKG1lbnVJdGVtKSB7XHJcbiAgICBjb25zdCB7IG9uQ2xpY2ssIG9uQmx1ciwgb25Gb2N1cywgLi4ucHJvcHMgfSA9IG1lbnVJdGVtLnByb3BzO1xyXG4gICAgY29uc3Qgb25NZW51SXRlbUNsaWNrID0gKC4uLmFyZ3MpID0+IHtcclxuICAgICAgaWYgKG9uQ2xpY2spIHsgb25DbGljayguLi5hcmdzKTsgfVxyXG4gICAgICBpZiAodGhpcy5wcm9wcy5vbk1lbnVJdGVtQ2xpY2spIHtcclxuICAgICAgICB0aGlzLnByb3BzLm9uTWVudUl0ZW1DbGljayhwcm9wcywgLi4uYXJncyk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBvbk1lbnVJdGVtRm9jdXMgPSAoZSkgPT4ge1xyXG4gICAgICBpZiAob25Gb2N1cykgeyBvbkZvY3VzKGUpOyB9XHJcbiAgICAgIHRoaXMub25NZW51SXRlbUZvY3VzKGUpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IG9uTWVudUl0ZW1CbHVyID0gKGUpID0+IHtcclxuICAgICAgaWYgKG9uQmx1cikgeyBvbkJsdXIoZSk7IH1cclxuICAgICAgdGhpcy5vbk1lbnVJdGVtQmx1cihlKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KG1lbnVJdGVtLCB7XHJcbiAgICAgIG9uQ2xpY2s6IG9uTWVudUl0ZW1DbGljayxcclxuICAgICAgb25CbHVyOiBvbk1lbnVJdGVtQmx1cixcclxuICAgICAgb25Gb2N1czogb25NZW51SXRlbUZvY3VzLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgYWxpZ24gPSAnbGVmdCcsIHNpemUsIGhlYWRlciwgbnViYmluVG9wLCBob3ZlclBvcHVwLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCBkcm9wZG93bk1lbnVDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcclxuICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICAnc2xkcy1kcm9wZG93bicsXHJcbiAgICAgICdzbGRzLWRyb3Bkb3duLS1tZW51JyxcclxuICAgICAgYHNsZHMtZHJvcGRvd24tLSR7YWxpZ259YCxcclxuICAgICAge1xyXG4gICAgICAgIFtgc2xkcy1kcm9wZG93bi0tJHtzaXplfWBdOiBzaXplLFxyXG4gICAgICAgICdzbGRzLWRyb3Bkb3duLS1udWJiaW4tdG9wJzogbnViYmluVG9wLFxyXG4gICAgICAgICdyZWFjdC1zbGRzLW5vLWhvdmVyLXBvcHVwJzogIWhvdmVyUG9wdXAsXHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IGRyb3Bkb3duTWVudUNsYXNzTmFtZXMgfSBvbktleURvd249eyB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpIH0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGVhZGVyID9cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLWRyb3Bkb3duX19oZWFkZXInPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NsZHMtdGV4dC1oZWFkaW5nLS1sYWJlbCc+eyBoZWFkZXIgfTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PiA6XHJcbiAgICAgICAgICBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9J3NsZHMtZHJvcGRvd25fX2xpc3QnIHJvbGU9J21lbnUnPlxyXG4gICAgICAgICAgeyBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIHRoaXMucmVuZGVyTWVudUl0ZW0uYmluZCh0aGlzKSkgfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuRHJvcGRvd25NZW51LnByb3BUeXBlcyA9IHtcclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgYWxpZ246IFByb3BUeXBlcy5vbmVPZihbJ2xlZnQnLCAnY2VudGVyJywgJ3JpZ2h0J10pLFxyXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbJ3NtYWxsJywgJ21lZGl1bScsICdsYXJnZSddKSxcclxuICBoZWFkZXI6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgbnViYmluVG9wOiBQcm9wVHlwZXMuYm9vbCxcclxuICBob3ZlclBvcHVwOiBQcm9wVHlwZXMuYm9vbCxcclxuICBvbk1lbnVJdGVtQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxyXG4gIG9uTWVudUNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcclxuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxyXG4gIG9uRm9jdXM6IFByb3BUeXBlcy5mdW5jLFxyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxufTtcclxuIl19