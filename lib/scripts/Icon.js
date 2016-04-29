'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _svg4everybody = require('svg4everybody');

var _svg4everybody2 = _interopRequireDefault(_svg4everybody);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _svg4everybody2.default)();

var Icon = function (_React$Component) {
  (0, _inherits3.default)(Icon, _React$Component);

  function Icon(props) {
    (0, _classCallCheck3.default)(this, Icon);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Icon).call(this, props));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(Icon, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.checkIconColor();
      var svgEl = _reactDom2.default.findDOMNode(this.refs.svgIcon);
      svgEl.setAttribute('focusable', this.props.tabIndex >= 0);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.checkIconColor();
    }
  }, {
    key: 'getIconColor',
    value: function getIconColor(fillColor, category, icon) {
      return this.state.iconColor ? this.state.iconColor : category === 'doctype' ? null : fillColor === 'none' ? null : fillColor ? fillColor : category === 'utility' ? null : category === 'custom' ? icon.replace(/^custom/, 'custom-') : category === 'action' && /^new_custom/.test(icon) ? icon.replace(/^new_custom/, 'custom-') : category + '-' + (icon || '').replace(/_/g, '-');
    }
  }, {
    key: 'getSymbolsSvg',
    value: function getSymbolsSvg(category) {
      return (0, _util.getSymbolsFilePath)(category) || (0, _util.getAssetRoot)() + '/icons/' + category + '-sprite/svg/symbols.svg';
    }
  }, {
    key: 'checkIconColor',
    value: function checkIconColor() {
      var _props = this.props;
      var fillColor = _props.fillColor;
      var _props$category = _props.category;
      var category = _props$category === undefined ? 'utility' : _props$category;
      var container = _props.container;

      if (fillColor === 'none' || category === 'doctype' || !fillColor && category === 'utility') {
        return;
      }
      var el = _reactDom2.default.findDOMNode(container ? this.refs.iconContainer : this.refs.svgIcon);
      if (!el) {
        return;
      }
      var bgColorStyle = getComputedStyle(el)['background-color'];
      if (/^(transparent|rgba\(0,\s*0,\s*0,\s*0\))$/.test(bgColorStyle)) {
        // if no background color set to the icon
        this.setState({ iconColor: 'standard-default' });
      }
    }
  }, {
    key: 'renderSVG',
    value: function renderSVG(_ref) {
      var _classnames;

      var className = _ref.className;
      var _ref$category = _ref.category;
      var category = _ref$category === undefined ? 'utility' : _ref$category;
      var icon = _ref.icon;
      var size = _ref.size;
      var align = _ref.align;
      var fillColor = _ref.fillColor;
      var container = _ref.container;
      var _ref$textColor = _ref.textColor;
      var textColor = _ref$textColor === undefined ? 'default' : _ref$textColor;
      var props = (0, _objectWithoutProperties3.default)(_ref, ['className', 'category', 'icon', 'size', 'align', 'fillColor', 'container', 'textColor']);

      var iconColor = this.getIconColor(fillColor, category, icon);
      var iconClassNames = (0, _classnames3.default)((_classnames = {
        'slds-icon': !/slds\-button__icon/.test(className)
      }, (0, _defineProperty3.default)(_classnames, 'slds-icon--' + size, /^(x-small|small|large)$/.test(size)), (0, _defineProperty3.default)(_classnames, 'slds-icon-text-' + textColor, /^(default|warning|error)$/.test(textColor) && !container && !iconColor), (0, _defineProperty3.default)(_classnames, 'slds-icon-' + iconColor, !container && iconColor), (0, _defineProperty3.default)(_classnames, 'slds-m-left--x-small', align === 'right'), (0, _defineProperty3.default)(_classnames, 'slds-m-right--x-small', align === 'left'), _classnames), className);

      var useHtml = '<use xlink:href="' + this.getSymbolsSvg(category) + '#' + icon + '"></use>';

      return _react2.default.createElement('svg', (0, _extends3.default)({ className: iconClassNames,
        'aria-hidden': true,
        dangerouslySetInnerHTML: { __html: useHtml },
        ref: 'svgIcon'
      }, props));
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var container = _props2.container;
      var props = (0, _objectWithoutProperties3.default)(_props2, ['container']);
      var category = props.category;
      var icon = props.icon;


      if (icon.indexOf(':') > 0) {
        var _icon$split = icon.split(':');

        var _icon$split2 = (0, _slicedToArray3.default)(_icon$split, 2);

        category = _icon$split2[0];
        icon = _icon$split2[1];
      }
      if (container) {
        var className = props.className;
        var fillColor = props.fillColor;
        var pprops = (0, _objectWithoutProperties3.default)(props, ['className', 'fillColor']);

        var iconColor = this.getIconColor(fillColor, category, icon);
        var containerClassName = (0, _classnames3.default)('slds-icon__container', container === 'circle' ? 'slds-icon__container--circle' : null, iconColor ? 'slds-icon-' + iconColor : null, className);
        return _react2.default.createElement(
          'span',
          { className: containerClassName, ref: 'iconContainer' },
          this.renderSVG((0, _extends3.default)({ category: category, icon: icon, fillColor: iconColor, container: container }, pprops))
        );
      }

      return this.renderSVG((0, _extends3.default)({}, props, { category: category, icon: icon }));
    }
  }]);
  return Icon;
}(_react2.default.Component);

exports.default = Icon;


Icon.propTypes = {
  className: _react.PropTypes.string,
  category: _react.PropTypes.oneOf(['action', 'custom', 'doctype', 'standard', 'utility']),
  icon: _react.PropTypes.string,
  container: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.oneOf(['default', 'circle'])]),
  color: _react.PropTypes.string,
  textColor: _react.PropTypes.oneOf(['default', 'warning', 'error']),
  tabIndex: _react.PropTypes.number,
  fillColor: _react.PropTypes.string
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0ljb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztJQUVxQjs7O0FBQ25CLFdBRG1CLElBQ25CLENBQVksS0FBWixFQUFtQjt3Q0FEQSxNQUNBOzs2RkFEQSxpQkFFWCxRQURXOztBQUVqQixVQUFLLEtBQUwsR0FBYSxFQUFiLENBRmlCOztHQUFuQjs7NkJBRG1COzt3Q0FNQztBQUNsQixXQUFLLGNBQUwsR0FEa0I7QUFFbEIsVUFBTSxRQUFRLG1CQUFTLFdBQVQsQ0FBcUIsS0FBSyxJQUFMLENBQVUsT0FBVixDQUE3QixDQUZZO0FBR2xCLFlBQU0sWUFBTixDQUFtQixXQUFuQixFQUFnQyxLQUFLLEtBQUwsQ0FBVyxRQUFYLElBQXVCLENBQXZCLENBQWhDLENBSGtCOzs7O3lDQU1DO0FBQ25CLFdBQUssY0FBTCxHQURtQjs7OztpQ0FJUixXQUFXLFVBQVUsTUFBTTtBQUN0QyxhQUNFLEtBQUssS0FBTCxDQUFXLFNBQVgsR0FBdUIsS0FBSyxLQUFMLENBQVcsU0FBWCxHQUN2QixhQUFhLFNBQWIsR0FBeUIsSUFBekIsR0FDQSxjQUFjLE1BQWQsR0FBdUIsSUFBdkIsR0FDQSxZQUFZLFNBQVosR0FDQSxhQUFhLFNBQWIsR0FBeUIsSUFBekIsR0FDQSxhQUFhLFFBQWIsR0FBd0IsS0FBSyxPQUFMLENBQWEsU0FBYixFQUF3QixTQUF4QixDQUF4QixHQUNBLGFBQWEsUUFBYixJQUF5QixjQUFjLElBQWQsQ0FBbUIsSUFBbkIsQ0FBekIsR0FBb0QsS0FBSyxPQUFMLENBQWEsYUFBYixFQUE0QixTQUE1QixDQUFwRCxHQUNBLFdBQVcsR0FBWCxHQUFpQixDQUFDLFFBQVEsRUFBUixDQUFELENBQWEsT0FBYixDQUFxQixJQUFyQixFQUEyQixHQUEzQixDQUFqQixDQVRv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QUFjLE9BQXJFLENBREo7U0FERixDQVRhO09BQWY7O0FBZ0JBLGFBQU8sS0FBSyxTQUFMLDRCQUFvQixTQUFPLG9CQUFVLGFBQXJDLENBQVAsQ0F2Qk87OztTQXhFVTtFQUFhLGdCQUFNLFNBQU47O2tCQUFiOzs7QUFtR3JCLEtBQUssU0FBTCxHQUFpQjtBQUNmLGFBQVcsaUJBQVUsTUFBVjtBQUNYLFlBQVUsaUJBQVUsS0FBVixDQUFnQixDQUFDLFFBQUQsRUFBVyxRQUFYLEVBQXFCLFNBQXJCLEVBQWdDLFVBQWhDLEVBQTRDLFNBQTVDLENBQWhCLENBQVY7QUFDQSxRQUFNLGlCQUFVLE1BQVY7QUFDTixhQUFXLGlCQUFVLFNBQVYsQ0FBb0IsQ0FDN0IsaUJBQVUsSUFBVixFQUNBLGlCQUFVLEtBQVYsQ0FBZ0IsQ0FBQyxTQUFELEVBQVksUUFBWixDQUFoQixDQUY2QixDQUFwQixDQUFYO0FBSUEsU0FBTyxpQkFBVSxNQUFWO0FBQ1AsYUFBVyxpQkFBVSxLQUFWLENBQWdCLENBQUMsU0FBRCxFQUFZLFNBQVosRUFBdUIsT0FBdkIsQ0FBaEIsQ0FBWDtBQUNBLFlBQVUsaUJBQVUsTUFBVjtBQUNWLGFBQVcsaUJBQVUsTUFBVjtDQVhiIiwiZmlsZSI6Ikljb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBzdmc0ZXZlcnlib2R5IGZyb20gJ3N2ZzRldmVyeWJvZHknO1xyXG5pbXBvcnQgeyBnZXRBc3NldFJvb3QsIGdldFN5bWJvbHNGaWxlUGF0aCB9IGZyb20gJy4vdXRpbCc7XHJcblxyXG5zdmc0ZXZlcnlib2R5KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJY29uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLmNoZWNrSWNvbkNvbG9yKCk7XHJcbiAgICBjb25zdCBzdmdFbCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy5zdmdJY29uKTtcclxuICAgIHN2Z0VsLnNldEF0dHJpYnV0ZSgnZm9jdXNhYmxlJywgdGhpcy5wcm9wcy50YWJJbmRleCA+PSAwKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgIHRoaXMuY2hlY2tJY29uQ29sb3IoKTtcclxuICB9XHJcblxyXG4gIGdldEljb25Db2xvcihmaWxsQ29sb3IsIGNhdGVnb3J5LCBpY29uKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0aGlzLnN0YXRlLmljb25Db2xvciA/IHRoaXMuc3RhdGUuaWNvbkNvbG9yIDpcclxuICAgICAgY2F0ZWdvcnkgPT09ICdkb2N0eXBlJyA/IG51bGwgOlxyXG4gICAgICBmaWxsQ29sb3IgPT09ICdub25lJyA/IG51bGwgOlxyXG4gICAgICBmaWxsQ29sb3IgPyBmaWxsQ29sb3IgOlxyXG4gICAgICBjYXRlZ29yeSA9PT0gJ3V0aWxpdHknID8gbnVsbCA6XHJcbiAgICAgIGNhdGVnb3J5ID09PSAnY3VzdG9tJyA/IGljb24ucmVwbGFjZSgvXmN1c3RvbS8sICdjdXN0b20tJykgOlxyXG4gICAgICBjYXRlZ29yeSA9PT0gJ2FjdGlvbicgJiYgL15uZXdfY3VzdG9tLy50ZXN0KGljb24pID8gaWNvbi5yZXBsYWNlKC9ebmV3X2N1c3RvbS8sICdjdXN0b20tJykgOlxyXG4gICAgICBjYXRlZ29yeSArICctJyArIChpY29uIHx8ICcnKS5yZXBsYWNlKC9fL2csICctJylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBnZXRTeW1ib2xzU3ZnKGNhdGVnb3J5KSB7XHJcbiAgICByZXR1cm4gZ2V0U3ltYm9sc0ZpbGVQYXRoKGNhdGVnb3J5KSB8fCBgJHsgZ2V0QXNzZXRSb290KCkgfS9pY29ucy8ke2NhdGVnb3J5fS1zcHJpdGUvc3ZnL3N5bWJvbHMuc3ZnYDtcclxuICB9XHJcblxyXG4gIGNoZWNrSWNvbkNvbG9yKCkge1xyXG4gICAgY29uc3QgeyBmaWxsQ29sb3IsIGNhdGVnb3J5ID0gJ3V0aWxpdHknLCBjb250YWluZXIgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBpZiAoZmlsbENvbG9yID09PSAnbm9uZScgfHwgY2F0ZWdvcnkgPT09ICdkb2N0eXBlJyB8fCAoIWZpbGxDb2xvciAmJiBjYXRlZ29yeSA9PT0gJ3V0aWxpdHknKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBlbCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKGNvbnRhaW5lciA/IHRoaXMucmVmcy5pY29uQ29udGFpbmVyIDogdGhpcy5yZWZzLnN2Z0ljb24pO1xyXG4gICAgaWYgKCFlbCkgeyByZXR1cm47IH1cclxuICAgIGNvbnN0IGJnQ29sb3JTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWwpWydiYWNrZ3JvdW5kLWNvbG9yJ107XHJcbiAgICBpZiAoL14odHJhbnNwYXJlbnR8cmdiYVxcKDAsXFxzKjAsXFxzKjAsXFxzKjBcXCkpJC8udGVzdChiZ0NvbG9yU3R5bGUpKSB7IC8vIGlmIG5vIGJhY2tncm91bmQgY29sb3Igc2V0IHRvIHRoZSBpY29uXHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpY29uQ29sb3I6ICdzdGFuZGFyZC1kZWZhdWx0JyB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlclNWRyh7IGNsYXNzTmFtZSwgY2F0ZWdvcnkgPSAndXRpbGl0eScsIGljb24sIHNpemUsIGFsaWduLCBmaWxsQ29sb3IsIGNvbnRhaW5lciwgdGV4dENvbG9yID0gJ2RlZmF1bHQnLCAuLi5wcm9wcyB9KSB7XHJcbiAgICBjb25zdCBpY29uQ29sb3IgPSB0aGlzLmdldEljb25Db2xvcihmaWxsQ29sb3IsIGNhdGVnb3J5LCBpY29uKTtcclxuICAgIGNvbnN0IGljb25DbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcclxuICAgICAge1xyXG4gICAgICAgICdzbGRzLWljb24nOiAhL3NsZHNcXC1idXR0b25fX2ljb24vLnRlc3QoY2xhc3NOYW1lKSxcclxuICAgICAgICBbYHNsZHMtaWNvbi0tJHtzaXplfWBdOiAvXih4LXNtYWxsfHNtYWxsfGxhcmdlKSQvLnRlc3Qoc2l6ZSksXHJcbiAgICAgICAgW2BzbGRzLWljb24tdGV4dC0ke3RleHRDb2xvcn1gXTogL14oZGVmYXVsdHx3YXJuaW5nfGVycm9yKSQvLnRlc3QodGV4dENvbG9yKSAmJiAhY29udGFpbmVyICYmICFpY29uQ29sb3IsXHJcbiAgICAgICAgW2BzbGRzLWljb24tJHtpY29uQ29sb3J9YF06ICFjb250YWluZXIgJiYgaWNvbkNvbG9yLFxyXG4gICAgICAgICdzbGRzLW0tbGVmdC0teC1zbWFsbCc6IGFsaWduID09PSAncmlnaHQnLFxyXG4gICAgICAgICdzbGRzLW0tcmlnaHQtLXgtc21hbGwnOiBhbGlnbiA9PT0gJ2xlZnQnLFxyXG4gICAgICB9LFxyXG4gICAgICBjbGFzc05hbWVcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgdXNlSHRtbCA9IGA8dXNlIHhsaW5rOmhyZWY9XCIke3RoaXMuZ2V0U3ltYm9sc1N2ZyhjYXRlZ29yeSl9IyR7aWNvbn1cIj48L3VzZT5gO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxzdmcgY2xhc3NOYW1lPXsgaWNvbkNsYXNzTmFtZXMgfVxyXG4gICAgICAgIGFyaWEtaGlkZGVuXHJcbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9eyB7IF9faHRtbDogdXNlSHRtbCB9IH1cclxuICAgICAgICByZWY9J3N2Z0ljb24nXHJcbiAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAvPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgY29udGFpbmVyLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcclxuICAgIGxldCB7IGNhdGVnb3J5LCBpY29uIH0gPSBwcm9wcztcclxuXHJcbiAgICBpZiAoaWNvbi5pbmRleE9mKCc6JykgPiAwKSB7XHJcbiAgICAgIFtjYXRlZ29yeSwgaWNvbl0gPSBpY29uLnNwbGl0KCc6Jyk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29udGFpbmVyKSB7XHJcbiAgICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBmaWxsQ29sb3IsIC4uLnBwcm9wcyB9ID0gcHJvcHM7XHJcbiAgICAgIGNvbnN0IGljb25Db2xvciA9IHRoaXMuZ2V0SWNvbkNvbG9yKGZpbGxDb2xvciwgY2F0ZWdvcnksIGljb24pO1xyXG4gICAgICBjb25zdCBjb250YWluZXJDbGFzc05hbWUgPSBjbGFzc25hbWVzKFxyXG4gICAgICAgICdzbGRzLWljb25fX2NvbnRhaW5lcicsXHJcbiAgICAgICAgY29udGFpbmVyID09PSAnY2lyY2xlJyA/ICdzbGRzLWljb25fX2NvbnRhaW5lci0tY2lyY2xlJyA6IG51bGwsXHJcbiAgICAgICAgaWNvbkNvbG9yID8gYHNsZHMtaWNvbi0ke2ljb25Db2xvcn1gIDogbnVsbCxcclxuICAgICAgICBjbGFzc05hbWVcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9eyBjb250YWluZXJDbGFzc05hbWUgfSByZWY9J2ljb25Db250YWluZXInPlxyXG4gICAgICAgICAgeyB0aGlzLnJlbmRlclNWRyh7IGNhdGVnb3J5LCBpY29uLCBmaWxsQ29sb3I6IGljb25Db2xvciwgY29udGFpbmVyLCAuLi5wcHJvcHMgfSkgfVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJTVkcoeyAuLi5wcm9wcywgY2F0ZWdvcnksIGljb24gfSk7XHJcbiAgfVxyXG59XHJcblxyXG5JY29uLnByb3BUeXBlcyA9IHtcclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgY2F0ZWdvcnk6IFByb3BUeXBlcy5vbmVPZihbJ2FjdGlvbicsICdjdXN0b20nLCAnZG9jdHlwZScsICdzdGFuZGFyZCcsICd1dGlsaXR5J10pLFxyXG4gIGljb246IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgY29udGFpbmVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgIFByb3BUeXBlcy5ib29sLFxyXG4gICAgUHJvcFR5cGVzLm9uZU9mKFsnZGVmYXVsdCcsICdjaXJjbGUnXSksXHJcbiAgXSksXHJcbiAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgdGV4dENvbG9yOiBQcm9wVHlwZXMub25lT2YoWydkZWZhdWx0JywgJ3dhcm5pbmcnLCAnZXJyb3InXSksXHJcbiAgdGFiSW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgZmlsbENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG59O1xyXG4iXX0=