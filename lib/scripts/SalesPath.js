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

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SalesPath = function (_React$Component) {
  (0, _inherits3.default)(SalesPath, _React$Component);

  function SalesPath(props) {
    (0, _classCallCheck3.default)(this, SalesPath);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(SalesPath).call(this, props));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(SalesPath, [{
    key: 'onItemClick',
    value: function onItemClick(itemKey) {
      if (this.props.onSelect) {
        this.props.onSelect(itemKey);
      }
      // Uncontrolled
      this.setState({ activeKey: itemKey });
    }
  }, {
    key: 'renderSalesPath',
    value: function renderSalesPath(activeKey, paths) {
      var _this2 = this;

      var typeTracker = -1;

      return _react2.default.Children.map(paths, function (path) {
        var _path$props = path.props;
        var eventKey = _path$props.eventKey;
        var type = _path$props.type;
        var onSelect = _path$props.onSelect;
        var props = (0, _objectWithoutProperties3.default)(_path$props, ['eventKey', 'type', 'onSelect']);

        var isActive = eventKey === activeKey;

        typeTracker = isActive ? 0 : typeTracker >= 0 ? 1 : -1;

        var evaluatedType = type || (isActive ? 'current' : typeTracker === -1 ? 'complete' : 'incomplete');

        return _react2.default.createElement(PathItem, (0, _extends3.default)({ eventKey: eventKey, type: evaluatedType, onSelect: _this2.onItemClick.bind(_this2) }, props));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var children = _props.children;
      var props = (0, _objectWithoutProperties3.default)(_props, ['className', 'children']);

      var activeKey = this.props.activeKey || this.state.activeKey || this.props.defaultActiveKey;

      var salesPathClassNames = (0, _classnames2.default)(className, 'slds-tabs--path');
      return _react2.default.createElement(
        'div',
        { className: salesPathClassNames, role: 'application tablist' },
        _react2.default.createElement(
          'ul',
          { className: 'slds-tabs--path__nav', role: 'presentation' },
          this.renderSalesPath(activeKey, children)
        )
      );
    }
  }]);
  return SalesPath;
}(_react2.default.Component);

SalesPath.propTypes = {
  className: _react.PropTypes.string,
  defaultActiveKey: _react.PropTypes.any,
  activeKey: _react.PropTypes.any,
  onSelect: _react.PropTypes.func,
  children: _react.PropTypes.node
};

var PathItem = function (_React$Component2) {
  (0, _inherits3.default)(PathItem, _React$Component2);

  function PathItem() {
    (0, _classCallCheck3.default)(this, PathItem);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(PathItem).apply(this, arguments));
  }

  (0, _createClass3.default)(PathItem, [{
    key: 'onItemClick',
    value: function onItemClick(itemKey) {
      if (this.props.onSelect) {
        this.props.onSelect(itemKey);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var className = _props2.className;
      var eventKey = _props2.eventKey;
      var title = _props2.title;
      var completedTitle = _props2.completedTitle;
      var type = _props2.type;


      var pathItemClassName = (0, _classnames2.default)('slds-tabs--path__item', 'slds-is-' + type, className);

      var tabIndex = type === 'current' ? 0 : -1;
      var completedText = completedTitle || 'Stage Complete';

      return _react2.default.createElement(
        'li',
        { className: pathItemClassName, role: 'presentation' },
        _react2.default.createElement(
          'a',
          { className: 'slds-tabs--path__link', 'aria-selected': 'false', tabIndex: tabIndex, role: 'tab', 'aria-live': 'assertive', onClick: this.onItemClick.bind(this, eventKey) },
          _react2.default.createElement(
            'span',
            { className: 'slds-tabs--path__stage' },
            _react2.default.createElement(_Icon2.default, { category: 'utility', icon: 'check', size: 'x-small' }),
            type === 'complete' ? _react2.default.createElement(
              'span',
              { className: 'slds-assistive-text' },
              completedText
            ) : null
          ),
          _react2.default.createElement(
            'span',
            { className: 'slds-tabs--path__title' },
            title
          )
        )
      );
    }
  }]);
  return PathItem;
}(_react2.default.Component);

PathItem.propTypes = {
  className: _react.PropTypes.string,
  eventKey: _react.PropTypes.any,
  type: _react.PropTypes.oneOf(['complete', 'current', 'incomplete']),
  title: _react.PropTypes.string,
  completedTitle: _react.PropTypes.string,
  onSelect: _react.PropTypes.func
};

SalesPath.PathItem = PathItem;

exports.default = SalesPath;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1NhbGVzUGF0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFFTTs7O0FBRUosV0FGSSxTQUVKLENBQVksS0FBWixFQUFtQjt3Q0FGZixXQUVlOzs2RkFGZixzQkFHSSxRQURXOztBQUVqQixVQUFLLEtBQUwsR0FBYSxFQUFiLENBRmlCOztHQUFuQjs7NkJBRkk7O2dDQU9RLFNBQVM7QUFDbkIsVUFBSSxLQUFLLEtBQUwsQ0FBVyxRQUFYLEVBQXFCO0FBQ3ZCLGFBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsT0FBcEIsRUFEdUI7T0FBekI7O0FBRG1CLFVBS25CLENBQUssUUFBTCxDQUFjLEVBQUUsV0FBVyxPQUFYLEVBQWhCLEVBTG1COzs7O29DQVFMLFdBQVcsT0FBTzs7O0FBQ2hDLFVBQUksY0FBYyxDQUFDLENBQUQsQ0FEYzs7QUFHaEMsYUFBTyxnQkFBTSxRQUFOLENBQWUsR0FBZixDQUFtQixLQUFuQixFQUEwQixVQUFDLElBQUQsRUFBVTswQkFDTSxLQUFLLEtBQUwsQ0FETjtZQUNqQyxnQ0FEaUM7WUFDdkIsd0JBRHVCO1lBQ2pCLGdDQURpQjtZQUNKLDhGQURJOztBQUV6QyxZQUFNLFdBQVcsYUFBYSxTQUFiLENBRndCOztBQUl6QyxzQkFBYyxXQUFhLENBQWIsR0FDWixXQUFDLElBQWUsQ0FBZixHQUFvQixDQUFyQixHQUF5QixDQUFDLENBQUQsQ0FMYzs7QUFPekMsWUFBTSxnQkFBZ0IsU0FDcEIsV0FBYSxTQUFiLEdBQ0MsV0FBQyxLQUFnQixDQUFDLENBQUQsR0FBTSxVQUF2QixHQUFvQyxZQUFwQyxDQUZtQixDQVBtQjs7QUFZekMsZUFBUSw4QkFBQyxRQUFELDJCQUFVLFVBQVcsUUFBWCxFQUFzQixNQUFPLGFBQVAsRUFBdUIsVUFBVyxPQUFLLFdBQUwsQ0FBaUIsSUFBakIsUUFBWCxJQUE4QyxNQUFyRyxDQUFSLENBWnlDO09BQVYsQ0FBakMsQ0FIZ0M7Ozs7NkJBbUJ6QjttQkFDbUMsS0FBSyxLQUFMLENBRG5DO1VBQ0MsNkJBREQ7VUFDWSwyQkFEWjtVQUN5QixrRkFEekI7O0FBRVAsVUFBTSxZQUFZLEtBQUssS0FBTCxDQUFXLFNBQVgsSUFBd0IsS0FBSyxLQUFMLENBQVcsU0FBWCxJQUF3QixLQUFLLEtBQUwsQ0FBVyxnQkFBWCxDQUYzRDs7QUFJUCxVQUFNLHNCQUFzQiwwQkFBVyxTQUFYLEVBQXNCLGlCQUF0QixDQUF0QixDQUpDO0FBS1AsYUFDRTs7VUFBSyxXQUFZLG1CQUFaLEVBQWtDLE1BQUsscUJBQUwsRUFBdkM7UUFDRTs7WUFBSSxXQUFVLHNCQUFWLEVBQWlDLE1BQUssY0FBTCxFQUFyQztVQUNJLEtBQUssZUFBTCxDQUFxQixTQUFyQixFQUFnQyxRQUFoQyxDQURKO1NBREY7T0FERixDQUxPOzs7U0FsQ0w7RUFBa0IsZ0JBQU0sU0FBTjs7QUFpRHhCLFVBQVUsU0FBVixHQUFzQjtBQUNwQixhQUFXLGlCQUFVLE1BQVY7QUFDWCxvQkFBa0IsaUJBQVUsR0FBVjtBQUNsQixhQUFXLGlCQUFVLEdBQVY7QUFDWCxZQUFVLGlCQUFVLElBQVY7QUFDVixZQUFVLGlCQUFVLElBQVY7Q0FMWjs7SUFTTTs7Ozs7Ozs7OztnQ0FFUSxTQUFTO0FBQ25CLFVBQUksS0FBSyxLQUFMLENBQVcsUUFBWCxFQUFxQjtBQUN2QixhQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLE9BQXBCLEVBRHVCO09BQXpCOzs7OzZCQUtPO29CQUNzRCxLQUFLLEtBQUwsQ0FEdEQ7VUFDQyw4QkFERDtVQUNZLDRCQURaO1VBQ3NCLHNCQUR0QjtVQUM2Qix3Q0FEN0I7VUFDNkMsb0JBRDdDOzs7QUFHUCxVQUFNLG9CQUFvQiwwQkFDeEIsdUJBRHdCLGVBRWIsSUFGYSxFQUd4QixTQUh3QixDQUFwQixDQUhDOztBQVNQLFVBQU0sV0FBVyxJQUFDLEtBQVMsU0FBVCxHQUFzQixDQUF2QixHQUEyQixDQUFDLENBQUQsQ0FUckM7QUFVUCxVQUFNLGdCQUFnQixrQkFBa0IsZ0JBQWxCLENBVmY7O0FBWVAsYUFDRTs7VUFBSSxXQUFZLGlCQUFaLEVBQWdDLE1BQUssY0FBTCxFQUFwQztRQUNFOztZQUFHLFdBQVUsdUJBQVYsRUFBa0MsaUJBQWMsT0FBZCxFQUFzQixVQUFXLFFBQVgsRUFBc0IsTUFBSyxLQUFMLEVBQVcsYUFBVSxXQUFWLEVBQXNCLFNBQVUsS0FBSyxXQUFMLENBQWlCLElBQWpCLENBQXNCLElBQXRCLEVBQTRCLFFBQTVCLENBQVYsRUFBbEg7VUFDRTs7Y0FBTSxXQUFVLHdCQUFWLEVBQU47WUFDRSxnREFBTSxVQUFTLFNBQVQsRUFBbUIsTUFBSyxPQUFMLEVBQWEsTUFBSyxTQUFMLEVBQXRDLENBREY7WUFFSSxJQUFDLEtBQVMsVUFBVCxHQUF3Qjs7Z0JBQU0sV0FBVSxxQkFBVixFQUFOO2NBQXdDLGFBQXhDO2FBQXpCLEdBQTJGLElBQTNGO1dBSE47VUFLRTs7Y0FBTSxXQUFVLHdCQUFWLEVBQU47WUFBMkMsS0FBM0M7V0FMRjtTQURGO09BREYsQ0FaTzs7O1NBUkw7RUFBaUIsZ0JBQU0sU0FBTjs7QUFrQ3ZCLFNBQVMsU0FBVCxHQUFxQjtBQUNuQixhQUFXLGlCQUFVLE1BQVY7QUFDWCxZQUFVLGlCQUFVLEdBQVY7QUFDVixRQUFNLGlCQUFVLEtBQVYsQ0FBZ0IsQ0FBQyxVQUFELEVBQWEsU0FBYixFQUF3QixZQUF4QixDQUFoQixDQUFOO0FBQ0EsU0FBTyxpQkFBVSxNQUFWO0FBQ1Asa0JBQWdCLGlCQUFVLE1BQVY7QUFDaEIsWUFBVSxpQkFBVSxJQUFWO0NBTlo7O0FBU0EsVUFBVSxRQUFWLEdBQXFCLFFBQXJCOztrQkFFZSIsImZpbGUiOiJTYWxlc1BhdGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcclxuXHJcbmNsYXNzIFNhbGVzUGF0aCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge307XHJcbiAgfVxyXG5cclxuICBvbkl0ZW1DbGljayhpdGVtS2V5KSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xyXG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KGl0ZW1LZXkpO1xyXG4gICAgfVxyXG4gICAgLy8gVW5jb250cm9sbGVkXHJcbiAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlS2V5OiBpdGVtS2V5IH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyU2FsZXNQYXRoKGFjdGl2ZUtleSwgcGF0aHMpIHtcclxuICAgIGxldCB0eXBlVHJhY2tlciA9IC0xO1xyXG5cclxuICAgIHJldHVybiBSZWFjdC5DaGlsZHJlbi5tYXAocGF0aHMsIChwYXRoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgZXZlbnRLZXksIHR5cGUsIG9uU2VsZWN0LCAuLi5wcm9wcyB9ID0gcGF0aC5wcm9wcztcclxuICAgICAgY29uc3QgaXNBY3RpdmUgPSBldmVudEtleSA9PT0gYWN0aXZlS2V5O1xyXG5cclxuICAgICAgdHlwZVRyYWNrZXIgPSAoaXNBY3RpdmUpID8gMCA6XHJcbiAgICAgICAgKHR5cGVUcmFja2VyID49IDApID8gMSA6IC0xO1xyXG5cclxuICAgICAgY29uc3QgZXZhbHVhdGVkVHlwZSA9IHR5cGUgfHwgKFxyXG4gICAgICAgIChpc0FjdGl2ZSkgPyAnY3VycmVudCcgOlxyXG4gICAgICAgICgodHlwZVRyYWNrZXIgPT09IC0xKSA/ICdjb21wbGV0ZScgOiAnaW5jb21wbGV0ZScpXHJcbiAgICAgICk7XHJcblxyXG4gICAgICByZXR1cm4gKDxQYXRoSXRlbSBldmVudEtleT17IGV2ZW50S2V5IH0gdHlwZT17IGV2YWx1YXRlZFR5cGUgfSBvblNlbGVjdD17IHRoaXMub25JdGVtQ2xpY2suYmluZCh0aGlzKSB9IHsgLi4ucHJvcHMgfSAvPik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCBhY3RpdmVLZXkgPSB0aGlzLnByb3BzLmFjdGl2ZUtleSB8fCB0aGlzLnN0YXRlLmFjdGl2ZUtleSB8fCB0aGlzLnByb3BzLmRlZmF1bHRBY3RpdmVLZXk7XHJcblxyXG4gICAgY29uc3Qgc2FsZXNQYXRoQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoY2xhc3NOYW1lLCAnc2xkcy10YWJzLS1wYXRoJyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IHNhbGVzUGF0aENsYXNzTmFtZXMgfSByb2xlPSdhcHBsaWNhdGlvbiB0YWJsaXN0Jz5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPSdzbGRzLXRhYnMtLXBhdGhfX25hdicgcm9sZT0ncHJlc2VudGF0aW9uJz5cclxuICAgICAgICAgIHsgdGhpcy5yZW5kZXJTYWxlc1BhdGgoYWN0aXZlS2V5LCBjaGlsZHJlbikgfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcblNhbGVzUGF0aC5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGRlZmF1bHRBY3RpdmVLZXk6IFByb3BUeXBlcy5hbnksXHJcbiAgYWN0aXZlS2V5OiBQcm9wVHlwZXMuYW55LFxyXG4gIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbn07XHJcblxyXG5cclxuY2xhc3MgUGF0aEl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICBvbkl0ZW1DbGljayhpdGVtS2V5KSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xyXG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KGl0ZW1LZXkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGV2ZW50S2V5LCB0aXRsZSwgY29tcGxldGVkVGl0bGUsIHR5cGUgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgY29uc3QgcGF0aEl0ZW1DbGFzc05hbWUgPSBjbGFzc25hbWVzKFxyXG4gICAgICAnc2xkcy10YWJzLS1wYXRoX19pdGVtJyxcclxuICAgICAgYHNsZHMtaXMtJHt0eXBlfWAsXHJcbiAgICAgIGNsYXNzTmFtZVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCB0YWJJbmRleCA9ICh0eXBlID09PSAnY3VycmVudCcpID8gMCA6IC0xO1xyXG4gICAgY29uc3QgY29tcGxldGVkVGV4dCA9IGNvbXBsZXRlZFRpdGxlIHx8ICdTdGFnZSBDb21wbGV0ZSc7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGxpIGNsYXNzTmFtZT17IHBhdGhJdGVtQ2xhc3NOYW1lIH0gcm9sZT0ncHJlc2VudGF0aW9uJz5cclxuICAgICAgICA8YSBjbGFzc05hbWU9J3NsZHMtdGFicy0tcGF0aF9fbGluaycgYXJpYS1zZWxlY3RlZD0nZmFsc2UnIHRhYkluZGV4PXsgdGFiSW5kZXggfSByb2xlPSd0YWInIGFyaWEtbGl2ZT0nYXNzZXJ0aXZlJyBvbkNsaWNrPXsgdGhpcy5vbkl0ZW1DbGljay5iaW5kKHRoaXMsIGV2ZW50S2V5KSB9PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzbGRzLXRhYnMtLXBhdGhfX3N0YWdlJz5cclxuICAgICAgICAgICAgPEljb24gY2F0ZWdvcnk9J3V0aWxpdHknIGljb249J2NoZWNrJyBzaXplPSd4LXNtYWxsJyAvPlxyXG4gICAgICAgICAgICB7ICh0eXBlID09PSAnY29tcGxldGUnKSA/ICg8c3BhbiBjbGFzc05hbWU9J3NsZHMtYXNzaXN0aXZlLXRleHQnPnsgY29tcGxldGVkVGV4dCB9PC9zcGFuPikgOiBudWxsIH1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2xkcy10YWJzLS1wYXRoX190aXRsZSc+eyB0aXRsZSB9PC9zcGFuPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9saT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5QYXRoSXRlbS5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGV2ZW50S2V5OiBQcm9wVHlwZXMuYW55LFxyXG4gIHR5cGU6IFByb3BUeXBlcy5vbmVPZihbJ2NvbXBsZXRlJywgJ2N1cnJlbnQnLCAnaW5jb21wbGV0ZSddKSxcclxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBjb21wbGV0ZWRUaXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXHJcbn07XHJcblxyXG5TYWxlc1BhdGguUGF0aEl0ZW0gPSBQYXRoSXRlbTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNhbGVzUGF0aDtcclxuIl19