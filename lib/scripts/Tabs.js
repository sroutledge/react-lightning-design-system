'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _util = require('./util');

var _DropdownButton = require('./DropdownButton');

var _DropdownButton2 = _interopRequireDefault(_DropdownButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tabs = function (_React$Component) {
  (0, _inherits3.default)(Tabs, _React$Component);

  function Tabs(props) {
    (0, _classCallCheck3.default)(this, Tabs);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Tabs).call(this, props));

    _this.state = {};
    (0, _util.registerStyle)('tab-menu', [['.slds-tabs__item.react-slds-tab-with-menu', '{ position: relative !important; overflow: visible !important; }'], ['.slds-tabs__item.react-slds-tab-with-menu > .react-slds-tab-item-inner', '{ overflow: hidden }'], ['.slds-tabs__item.react-slds-tab-with-menu > .react-slds-tab-item-inner > a', '{ padding-right: 2rem; }'], ['.react-slds-tab-menu', '{ position: absolute; top: 0; right: 0; visibility: hidden }'], ['.react-slds-tab-menu button', '{ height: 3rem; line-height: 3rem; width: 2rem; }'], ['.slds-tabs__item.slds-active .react-slds-tab-menu', '.slds-tabs__item:hover .react-slds-tab-menu', '{ visibility: visible }']]);
    return _this;
  }

  (0, _createClass3.default)(Tabs, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.state.focusTab) {
        var el = _reactDom2.default.findDOMNode(this.refs.activeTab);
        if (el) {
          el.focus();
        }
        /* eslint-disable react/no-did-update-set-state */
        this.setState({ focusTab: false });
      }
    }
  }, {
    key: 'onTabClick',
    value: function onTabClick(tabKey) {
      if (this.props.onSelect) {
        this.props.onSelect(tabKey);
      }
      // Uncontrolled
      this.setState({ activeKey: tabKey, focusTab: true });
    }
  }, {
    key: 'onTabKeyDown',
    value: function onTabKeyDown(tabKey, e) {
      var _this2 = this;

      if (e.keyCode === 37 || e.keyCode === 39) {
        (function () {
          // left/right cursor key
          var idx = 0;
          var tabKeys = [];
          _react2.default.Children.forEach(_this2.props.children, function (tab, i) {
            tabKeys.push(tab.props.eventKey);
            if (tabKey === tab.props.eventKey) {
              idx = i;
            }
          });
          var dir = e.keyCode === 37 ? -1 : 1;
          var activeIdx = (idx + dir + tabKeys.length) % tabKeys.length;
          var activeKey = tabKeys[activeIdx];
          _this2.onTabClick(activeKey);
          e.preventDefault();
          e.stopPropagation();
        })();
      }
    }
  }, {
    key: 'renderTabNav',
    value: function renderTabNav(type, tabs) {
      var _this3 = this;

      var activeKey = typeof this.props.activeKey !== 'undefined' ? this.props.activeKey : typeof this.state.activeKey !== 'undefined' ? this.state.activeKey : this.props.defaultActiveKey;
      var tabNavClassName = 'slds-tabs--' + type + '__nav';
      return _react2.default.createElement(
        'ul',
        { className: tabNavClassName, role: 'tablist' },
        _react2.default.Children.map(tabs, function (tab) {
          var _tab$props = tab.props;
          var title = _tab$props.title;
          var eventKey = _tab$props.eventKey;
          var menu = _tab$props.menu;
          var menuIcon = _tab$props.menuIcon;
          var menuItems = tab.props.menuItems;

          menuItems = menu ? menu.props.children : menuItems;
          var menuProps = menu ? menu.props : {};
          var isActive = eventKey === activeKey;
          var tabItemClassName = (0, _classnames2.default)('slds-tabs__item', 'slds-tabs--' + type + '__item', 'slds-text-heading---label', { 'slds-active': isActive }, { 'react-slds-tab-with-menu': menu || menuItems });
          var tabLinkClassName = 'slds-tabs--' + type + '__link';
          return _react2.default.createElement(
            'li',
            { className: tabItemClassName, role: 'presentation' },
            _react2.default.createElement(
              'span',
              { className: 'react-slds-tab-item-inner' },
              _react2.default.createElement(
                'a',
                { className: tabLinkClassName,
                  onClick: _this3.onTabClick.bind(_this3, eventKey),
                  onKeyDown: _this3.onTabKeyDown.bind(_this3, eventKey),
                  role: 'tab',
                  ref: isActive ? 'activeTab' : null,
                  tabIndex: isActive ? 0 : -1,
                  'aria-selected': isActive
                },
                title
              ),
              menuItems ? _this3.renderTabMenu(menuIcon, menuItems, menuProps) : null
            )
          );
        })
      );
    }
  }, {
    key: 'renderTabMenu',
    value: function renderTabMenu() {
      var menuIcon = arguments.length <= 0 || arguments[0] === undefined ? 'down' : arguments[0];
      var menuItems = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
      var menuProps = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

      return _react2.default.createElement(
        _DropdownButton2.default,
        (0, _extends3.default)({ className: 'react-slds-tab-menu', icon: menuIcon, type: 'icon-bare', iconSize: 'small', nubbinTop: true }, menuProps),
        menuItems
      );
    }
  }, {
    key: 'renderTabPanel',
    value: function renderTabPanel(tab) {
      var activeKey = this.props.activeKey || this.state.activeKey || this.props.defaultActiveKey;
      var eventKey = tab.props.eventKey;

      var isActive = eventKey === activeKey;
      return _react2.default.cloneElement(tab, { active: isActive });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var children = _props.children;
      var props = (0, _objectWithoutProperties3.default)(_props, ['className', 'children']);

      var type = this.props.type === 'scoped' ? 'scoped' : 'default';
      var tabsClassNames = (0, _classnames2.default)(className, 'slds-tabs--' + type);
      return _react2.default.createElement(
        'div',
        { className: tabsClassNames },
        this.renderTabNav(type, children),
        _react2.default.Children.map(children, this.renderTabPanel.bind(this))
      );
    }
  }]);
  return Tabs;
}(_react2.default.Component);

exports.default = Tabs;


var TAB_TYPES = ['default', 'scoped'];

Tabs.propTypes = {
  className: _react.PropTypes.string,
  type: _react.PropTypes.oneOf(TAB_TYPES),
  defaultActiveKey: _react.PropTypes.any,
  activeKey: _react.PropTypes.any,
  onSelect: _react.PropTypes.func,
  children: _react.PropTypes.node
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1RhYnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7SUFFcUI7OztBQUVuQixXQUZtQixJQUVuQixDQUFZLEtBQVosRUFBbUI7d0NBRkEsTUFFQTs7NkZBRkEsaUJBR1gsUUFEVzs7QUFFakIsVUFBSyxLQUFMLEdBQWEsRUFBYixDQUZpQjtBQUdqQiw2QkFBYyxVQUFkLEVBQTBCLENBQ3hCLENBQ0UsMkNBREYsRUFFRSxrRUFGRixDQUR3QixFQUt4QixDQUNFLHdFQURGLEVBRUUsc0JBRkYsQ0FMd0IsRUFTeEIsQ0FDRSw0RUFERixFQUVFLDBCQUZGLENBVHdCLEVBYXhCLENBQ0Usc0JBREYsRUFFRSw4REFGRixDQWJ3QixFQWlCeEIsQ0FDRSw2QkFERixFQUVFLG1EQUZGLENBakJ3QixFQXFCeEIsQ0FDRSxtREFERixFQUVFLDZDQUZGLEVBR0UseUJBSEYsQ0FyQndCLENBQTFCLEVBSGlCOztHQUFuQjs7NkJBRm1COzt5Q0FrQ0U7QUFDbkIsVUFBSSxLQUFLLEtBQUwsQ0FBVyxRQUFYLEVBQXFCO0FBQ3ZCLFlBQU0sS0FBSyxtQkFBUyxXQUFULENBQXFCLEtBQUssSUFBTCxDQUFVLFNBQVYsQ0FBMUIsQ0FEaUI7QUFFdkIsWUFBSSxFQUFKLEVBQVE7QUFDTixhQUFHLEtBQUgsR0FETTtTQUFSOztBQUZ1QixZQU12QixDQUFLLFFBQUwsQ0FBYyxFQUFFLFVBQVUsS0FBVixFQUFoQixFQU51QjtPQUF6Qjs7OzsrQkFVUyxRQUFRO0FBQ2pCLFVBQUksS0FBSyxLQUFMLENBQVcsUUFBWCxFQUFxQjtBQUN2QixhQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLE1BQXBCLEVBRHVCO09BQXpCOztBQURpQixVQUtqQixDQUFLLFFBQUwsQ0FBYyxFQUFFLFdBQVcsTUFBWCxFQUFtQixVQUFVLElBQVYs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QUFnQixTQUFoQixDQUFOO0FBQ0Esb0JBQWtCLGlCQUFVLEdBQVY7QUFDbEIsYUFBVyxpQkFBVSxHQUFWO0FBQ1gsWUFBVSxpQkFBVSxJQUFWO0FBQ1YsWUFBVSxpQkFBVSxJQUFWO0NBTloiLCJmaWxlIjoiVGFicy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgcmVnaXN0ZXJTdHlsZSB9IGZyb20gJy4vdXRpbCc7XHJcbmltcG9ydCBEcm9wZG93bkJ1dHRvbiBmcm9tICcuL0Ryb3Bkb3duQnV0dG9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xyXG4gICAgcmVnaXN0ZXJTdHlsZSgndGFiLW1lbnUnLCBbXHJcbiAgICAgIFtcclxuICAgICAgICAnLnNsZHMtdGFic19faXRlbS5yZWFjdC1zbGRzLXRhYi13aXRoLW1lbnUnLFxyXG4gICAgICAgICd7IHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50OyBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50OyB9JyxcclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgICcuc2xkcy10YWJzX19pdGVtLnJlYWN0LXNsZHMtdGFiLXdpdGgtbWVudSA+IC5yZWFjdC1zbGRzLXRhYi1pdGVtLWlubmVyJyxcclxuICAgICAgICAneyBvdmVyZmxvdzogaGlkZGVuIH0nLFxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgJy5zbGRzLXRhYnNfX2l0ZW0ucmVhY3Qtc2xkcy10YWItd2l0aC1tZW51ID4gLnJlYWN0LXNsZHMtdGFiLWl0ZW0taW5uZXIgPiBhJyxcclxuICAgICAgICAneyBwYWRkaW5nLXJpZ2h0OiAycmVtOyB9JyxcclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgICcucmVhY3Qtc2xkcy10YWItbWVudScsXHJcbiAgICAgICAgJ3sgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IHJpZ2h0OiAwOyB2aXNpYmlsaXR5OiBoaWRkZW4gfScsXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICAnLnJlYWN0LXNsZHMtdGFiLW1lbnUgYnV0dG9uJyxcclxuICAgICAgICAneyBoZWlnaHQ6IDNyZW07IGxpbmUtaGVpZ2h0OiAzcmVtOyB3aWR0aDogMnJlbTsgfScsXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICAnLnNsZHMtdGFic19faXRlbS5zbGRzLWFjdGl2ZSAucmVhY3Qtc2xkcy10YWItbWVudScsXHJcbiAgICAgICAgJy5zbGRzLXRhYnNfX2l0ZW06aG92ZXIgLnJlYWN0LXNsZHMtdGFiLW1lbnUnLFxyXG4gICAgICAgICd7IHZpc2liaWxpdHk6IHZpc2libGUgfScsXHJcbiAgICAgIF0sXHJcbiAgICBdKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmZvY3VzVGFiKSB7XHJcbiAgICAgIGNvbnN0IGVsID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLmFjdGl2ZVRhYik7XHJcbiAgICAgIGlmIChlbCkge1xyXG4gICAgICAgIGVsLmZvY3VzKCk7XHJcbiAgICAgIH1cclxuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3Qvbm8tZGlkLXVwZGF0ZS1zZXQtc3RhdGUgKi9cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzVGFiOiBmYWxzZSB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uVGFiQ2xpY2sodGFiS2V5KSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xyXG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KHRhYktleSk7XHJcbiAgICB9XHJcbiAgICAvLyBVbmNvbnRyb2xsZWRcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVLZXk6IHRhYktleSwgZm9jdXNUYWI6IHRydWUgfSk7XHJcbiAgfVxyXG5cclxuICBvblRhYktleURvd24odGFiS2V5LCBlKSB7XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSAzNyB8fCBlLmtleUNvZGUgPT09IDM5KSB7IC8vIGxlZnQvcmlnaHQgY3Vyc29yIGtleVxyXG4gICAgICBsZXQgaWR4ID0gMDtcclxuICAgICAgY29uc3QgdGFiS2V5cyA9IFtdO1xyXG4gICAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKHRoaXMucHJvcHMuY2hpbGRyZW4sICh0YWIsIGkpID0+IHtcclxuICAgICAgICB0YWJLZXlzLnB1c2godGFiLnByb3BzLmV2ZW50S2V5KTtcclxuICAgICAgICBpZiAodGFiS2V5ID09PSB0YWIucHJvcHMuZXZlbnRLZXkpIHtcclxuICAgICAgICAgIGlkeCA9IGk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3QgZGlyID0gZS5rZXlDb2RlID09PSAzNyA/IC0xIDogMTtcclxuICAgICAgY29uc3QgYWN0aXZlSWR4ID0gKGlkeCArIGRpciArIHRhYktleXMubGVuZ3RoKSAlIHRhYktleXMubGVuZ3RoO1xyXG4gICAgICBjb25zdCBhY3RpdmVLZXkgPSB0YWJLZXlzW2FjdGl2ZUlkeF07XHJcbiAgICAgIHRoaXMub25UYWJDbGljayhhY3RpdmVLZXkpO1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXJUYWJOYXYodHlwZSwgdGFicykge1xyXG4gICAgY29uc3QgYWN0aXZlS2V5ID1cclxuICAgICAgdHlwZW9mIHRoaXMucHJvcHMuYWN0aXZlS2V5ICE9PSAndW5kZWZpbmVkJyA/IHRoaXMucHJvcHMuYWN0aXZlS2V5IDpcclxuICAgICAgdHlwZW9mIHRoaXMuc3RhdGUuYWN0aXZlS2V5ICE9PSAndW5kZWZpbmVkJyA/IHRoaXMuc3RhdGUuYWN0aXZlS2V5IDpcclxuICAgICAgdGhpcy5wcm9wcy5kZWZhdWx0QWN0aXZlS2V5O1xyXG4gICAgY29uc3QgdGFiTmF2Q2xhc3NOYW1lID0gYHNsZHMtdGFicy0tJHt0eXBlfV9fbmF2YDtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDx1bCBjbGFzc05hbWU9eyB0YWJOYXZDbGFzc05hbWUgfSByb2xlPSd0YWJsaXN0Jz5cclxuICAgICAge1xyXG4gICAgICAgIFJlYWN0LkNoaWxkcmVuLm1hcCh0YWJzLCAodGFiKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCB7IHRpdGxlLCBldmVudEtleSwgbWVudSwgbWVudUljb24gfSA9IHRhYi5wcm9wcztcclxuICAgICAgICAgIGxldCB7IG1lbnVJdGVtcyB9ID0gdGFiLnByb3BzO1xyXG4gICAgICAgICAgbWVudUl0ZW1zID0gbWVudSA/IG1lbnUucHJvcHMuY2hpbGRyZW4gOiBtZW51SXRlbXM7XHJcbiAgICAgICAgICBjb25zdCBtZW51UHJvcHMgPSBtZW51ID8gbWVudS5wcm9wcyA6IHt9O1xyXG4gICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBldmVudEtleSA9PT0gYWN0aXZlS2V5O1xyXG4gICAgICAgICAgY29uc3QgdGFiSXRlbUNsYXNzTmFtZSA9IGNsYXNzbmFtZXMoXHJcbiAgICAgICAgICAgICdzbGRzLXRhYnNfX2l0ZW0nLFxyXG4gICAgICAgICAgICBgc2xkcy10YWJzLS0ke3R5cGV9X19pdGVtYCxcclxuICAgICAgICAgICAgJ3NsZHMtdGV4dC1oZWFkaW5nLS0tbGFiZWwnLFxyXG4gICAgICAgICAgICB7ICdzbGRzLWFjdGl2ZSc6IGlzQWN0aXZlIH0sXHJcbiAgICAgICAgICAgIHsgJ3JlYWN0LXNsZHMtdGFiLXdpdGgtbWVudSc6IG1lbnUgfHwgbWVudUl0ZW1zIH1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBjb25zdCB0YWJMaW5rQ2xhc3NOYW1lID0gYHNsZHMtdGFicy0tJHt0eXBlfV9fbGlua2A7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXsgdGFiSXRlbUNsYXNzTmFtZSB9IHJvbGU9J3ByZXNlbnRhdGlvbic+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdyZWFjdC1zbGRzLXRhYi1pdGVtLWlubmVyJz5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17IHRhYkxpbmtDbGFzc05hbWUgfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsgdGhpcy5vblRhYkNsaWNrLmJpbmQodGhpcywgZXZlbnRLZXkpIH1cclxuICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXsgdGhpcy5vblRhYktleURvd24uYmluZCh0aGlzLCBldmVudEtleSkgfVxyXG4gICAgICAgICAgICAgICAgICByb2xlPSd0YWInXHJcbiAgICAgICAgICAgICAgICAgIHJlZj17IGlzQWN0aXZlID8gJ2FjdGl2ZVRhYicgOiBudWxsIH1cclxuICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9eyBpc0FjdGl2ZSA/IDAgOiAtMSB9XHJcbiAgICAgICAgICAgICAgICAgIGFyaWEtc2VsZWN0ZWQ9eyBpc0FjdGl2ZSB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIHsgdGl0bGUgfVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgeyBtZW51SXRlbXMgPyB0aGlzLnJlbmRlclRhYk1lbnUobWVudUljb24sIG1lbnVJdGVtcywgbWVudVByb3BzKSA6IG51bGwgfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgICA8L3VsPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlclRhYk1lbnUobWVudUljb24gPSAnZG93bicsIG1lbnVJdGVtcyA9IFtdLCBtZW51UHJvcHMgPSB7fSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPERyb3Bkb3duQnV0dG9uIGNsYXNzTmFtZT0ncmVhY3Qtc2xkcy10YWItbWVudScgaWNvbj17IG1lbnVJY29uIH0gdHlwZT0naWNvbi1iYXJlJyBpY29uU2l6ZT0nc21hbGwnIG51YmJpblRvcCB7IC4uLm1lbnVQcm9wcyB9PlxyXG4gICAgICAgIHsgbWVudUl0ZW1zIH1cclxuICAgICAgPC9Ecm9wZG93bkJ1dHRvbj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJUYWJQYW5lbCh0YWIpIHtcclxuICAgIGNvbnN0IGFjdGl2ZUtleSA9IHRoaXMucHJvcHMuYWN0aXZlS2V5IHx8IHRoaXMuc3RhdGUuYWN0aXZlS2V5IHx8IHRoaXMucHJvcHMuZGVmYXVsdEFjdGl2ZUtleTtcclxuICAgIGNvbnN0IHsgZXZlbnRLZXkgfSA9IHRhYi5wcm9wcztcclxuICAgIGNvbnN0IGlzQWN0aXZlID0gZXZlbnRLZXkgPT09IGFjdGl2ZUtleTtcclxuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQodGFiLCB7IGFjdGl2ZTogaXNBY3RpdmUgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgdHlwZSA9IHRoaXMucHJvcHMudHlwZSA9PT0gJ3Njb3BlZCcgPyAnc2NvcGVkJyA6ICdkZWZhdWx0JztcclxuICAgIGNvbnN0IHRhYnNDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhjbGFzc05hbWUsIGBzbGRzLXRhYnMtLSR7dHlwZX1gKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgdGFic0NsYXNzTmFtZXMgfT5cclxuICAgICAgICB7IHRoaXMucmVuZGVyVGFiTmF2KHR5cGUsIGNoaWxkcmVuKSB9XHJcbiAgICAgICAgeyBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIHRoaXMucmVuZGVyVGFiUGFuZWwuYmluZCh0aGlzKSkgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBUQUJfVFlQRVMgPSBbJ2RlZmF1bHQnLCAnc2NvcGVkJ107XHJcblxyXG5UYWJzLnByb3BUeXBlcyA9IHtcclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKFRBQl9UWVBFUyksXHJcbiAgZGVmYXVsdEFjdGl2ZUtleTogUHJvcFR5cGVzLmFueSxcclxuICBhY3RpdmVLZXk6IFByb3BUeXBlcy5hbnksXHJcbiAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxufTtcclxuIl19