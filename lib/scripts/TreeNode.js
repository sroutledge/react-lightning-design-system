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

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Spinner = require('./Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TreeNode = function (_React$Component) {
  (0, _inherits3.default)(TreeNode, _React$Component);

  function TreeNode(props) {
    (0, _classCallCheck3.default)(this, TreeNode);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(TreeNode).call(this, props));

    _this.state = { opened: _this.props.defaultOpened };
    return _this;
  }

  // TODO: revert it babeljs bug https://phabricator.babeljs.io/T2892


  (0, _createClass3.default)(TreeNode, [{
    key: 'onToggleEvent',
    value: function onToggleEvent(e) {
      var _props = this.props;
      var onToggle = _props.onToggle;
      var onNodeToggle = _props.onNodeToggle;

      if (onToggle) {
        onToggle(e, this.props);
      }
      if (onNodeToggle) {
        onNodeToggle(e, this.props);
      }
      this.setState({ opened: !this.state.opened });
    }
  }, {
    key: 'onLabelClickEvent',
    value: function onLabelClickEvent(e) {
      var _props2 = this.props;
      var onLabelClick = _props2.onLabelClick;
      var onNodeLabelClick = _props2.onNodeLabelClick;

      if (onLabelClick) {
        onLabelClick(e, this.props);
      }
      if (onNodeLabelClick) {
        onNodeLabelClick(e, this.props);
      }
    }
  }, {
    key: 'onClickEvent',
    value: function onClickEvent(e) {
      var _props3 = this.props;
      var onClick = _props3.onClick;
      var onNodeClick = _props3.onNodeClick;
      var toggleOnNodeClick = _props3.toggleOnNodeClick;

      if (onClick) {
        onClick(e, this.props);
      }
      if (onNodeClick) {
        onNodeClick(e, this.props);
      }
      if (toggleOnNodeClick) {
        this.onToggleEvent(e);
      }
    }
  }, {
    key: 'renderTreeItem',
    value: function renderTreeItem(itemProps) {
      var className = itemProps.className;
      var label = itemProps.label;
      var _itemProps$icon = itemProps.icon;
      var icon = _itemProps$icon === undefined ? 'chevronright' : _itemProps$icon;
      var loading = itemProps.loading;
      var selected = itemProps.selected;
      var leaf = itemProps.leaf;
      var isOpened = itemProps.isOpened;
      var children = itemProps.children;
      var props = (0, _objectWithoutProperties3.default)(itemProps, ['className', 'label', 'icon', 'loading', 'selected', 'leaf', 'isOpened', 'children']);

      var itmClassNames = (0, _classnames2.default)(className, 'slds-tree__item', {
        'slds-is-open': isOpened,
        'slds-is-selected': selected
      });
      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: itmClassNames, onClick: this.onClickEvent.bind(this) }, props),
        loading ? _react2.default.createElement(_Spinner2.default, { size: 'small', className: 'slds-m-right--x-small' }) : !leaf ? _react2.default.createElement(_Button2.default, { className: 'slds-m-right--small',
          type: 'icon-bare',
          icon: icon,
          iconSize: 'small',
          onClick: this.onToggleEvent.bind(this)
        }) : null,
        _react2.default.createElement(
          'a',
          {
            className: 'slds-truncate',
            tabIndex: -1,
            role: 'presentation',
            onClick: this.onLabelClickEvent.bind(this)
          },
          label
        ),
        leaf ? children : null
      );
    }
  }, {
    key: 'renderChildNode',
    value: function renderChildNode(level, tnode) {
      var _props4 = this.props;
      var onNodeClick = _props4.onNodeClick;
      var onNodeToggle = _props4.onNodeToggle;
      var onNodeLabelClick = _props4.onNodeLabelClick;
      var toggleOnNodeClick = _props4.toggleOnNodeClick;

      return _react2.default.cloneElement(tnode, { level: level, onNodeClick: onNodeClick, onNodeToggle: onNodeToggle, onNodeLabelClick: onNodeLabelClick, toggleOnNodeClick: toggleOnNodeClick });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props5 = this.props;
      var defaultOpened = _props5.defaultOpened;
      var opened = _props5.opened;
      var leaf = _props5.leaf;
      var level = _props5.level;
      var onClick = _props5.onClick;
      var onToggle = _props5.onToggle;
      var onNodeClick = _props5.onNodeClick;
      var onNodeToggle = _props5.onNodeToggle;
      var onLabelClick = _props5.onLabelClick;
      var onNodeLabelClick = _props5.onNodeLabelClick;
      var toggleOnNodeClick = _props5.toggleOnNodeClick;
      var children = _props5.children;
      var props = (0, _objectWithoutProperties3.default)(_props5, ['defaultOpened', 'opened', 'leaf', 'level', 'onClick', 'onToggle', 'onNodeClick', 'onNodeToggle', 'onLabelClick', 'onNodeLabelClick', 'toggleOnNodeClick', 'children']);

      var isOpened = typeof opened !== 'undefined' ? opened : typeof this.state.opened !== 'undefined' ? this.state.opened : defaultOpened;
      var grpClassNames = (0, _classnames2.default)('slds-tree__group', {
        'slds-nested': !leaf,
        'is-expanded': isOpened,
        'slds-show': isOpened,
        'slds-hide': !isOpened
      });
      var itemProps = (0, _extends3.default)({ leaf: leaf, isOpened: isOpened, children: children }, props);
      if (leaf) {
        return _react2.default.createElement(
          'li',
          { role: 'treeitem', 'aria-level': level },
          this.renderTreeItem(itemProps)
        );
      }

      return _react2.default.createElement(
        'li',
        { role: 'treeitem', 'aria-level': level, 'aria-expanded': isOpened },
        this.renderTreeItem(itemProps),
        _react2.default.createElement(
          'ul',
          { className: grpClassNames, role: 'group' },
          _react2.default.Children.map(children, this.renderChildNode.bind(this, level + 1))
        )
      );
    }
  }]);
  return TreeNode;
}(_react2.default.Component);

exports.default = TreeNode;


TreeNode.propTypes = {
  className: _react.PropTypes.string,
  label: _react.PropTypes.string,
  onClick: _react.PropTypes.func,
  onToggle: _react.PropTypes.func,
  onNodeToggle: _react.PropTypes.func,
  onNodeLabelClick: _react.PropTypes.func,
  onLabelClick: _react.PropTypes.func,
  onNodeClick: _react.PropTypes.func,
  toggleOnNodeClick: _react.PropTypes.bool,
  defaultOpened: _react.PropTypes.bool,
  opened: _react.PropTypes.bool,
  leaf: _react.PropTypes.bool,
  level: _react.PropTypes.number,
  children: _react.PropTypes.node
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL1RyZWVOb2RlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0lBR3FCOzs7QUFDbkIsV0FEbUIsUUFDbkIsQ0FBWSxLQUFaLEVBQW1CO3dDQURBLFVBQ0E7OzZGQURBLHFCQUVYLFFBRFc7O0FBRWpCLFVBQUssS0FBTCxHQUFhLEVBQUUsUUFBUSxNQUFLLEtBQUwsQ0FBVyxhQUFYLEVBQXZCLENBRmlCOztHQUFuQjs7Ozs7NkJBRG1COztrQ0FPTCxHQUFHO21CQUNvQixLQUFLLEtBQUwsQ0FEcEI7VUFDUCwyQkFETztVQUNHLG1DQURIOztBQUVmLFVBQUksUUFBSixFQUFjO0FBQUUsaUJBQVMsQ0FBVCxFQUFZLEtBQUssS0FBTCxDQUFaLENBQUY7T0FBZDtBQUNBLFVBQUksWUFBSixFQUFrQjtBQUFFLHFCQUFhLENBQWIsRUFBZ0IsS0FBSyxLQUFMLENBQWhCLENBQUY7T0FBbEI7QUFDQSxXQUFLLFFBQUwsQ0FBYyxFQUFFLFFBQVEsQ0FBQyxLQUFLLEtBQUwsQ0FBVyxNQUFYLEVBQXpCLEVBSmU7Ozs7c0NBT0MsR0FBRztvQkFDd0IsS0FBSyxLQUFMLENBRHhCO1VBQ1gsb0NBRFc7VUFDRyw0Q0FESDs7QUFFbkIsVUFBSSxZQUFKLEVBQWtCO0FBQUUscUJBQWEsQ0FBYixFQUFnQixLQUFLLEtBQUwsQ0FBaEIsQ0FBRjtPQUFsQjtBQUNBLFVBQUksZ0JBQUosRUFBc0I7QUFBRSx5QkFBaUIsQ0FBakIsRUFBb0IsS0FBSyxLQUFMLENBQXBCLENBQUY7T0FBdEI7Ozs7aUNBR1csR0FBRztvQkFDc0MsS0FBSyxLQUFMLENBRHRDO1VBQ04sMEJBRE07VUFDRyxrQ0FESDtVQUNnQiw4Q0FEaEI7O0FBRWQsVUFBSSxPQUFKLEVBQWE7QUFBRSxnQkFBUSxDQUFSLEVBQVcsS0FBSyxLQUFMLENBQVgsQ0FBRjtP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QUFnQixRQUFoQixFQUF6QztRQUNJLEtBQUssY0FBTCxDQUFvQixTQUFwQixDQURKO1FBRUU7O1lBQUksV0FBWSxhQUFaLEVBQTRCLE1BQUssT0FBTCxFQUFoQztVQUNJLGdCQUFNLFFBQU4sQ0FBZSxHQUFmLENBQW1CLFFBQW5CLEVBQTZCLEtBQUssZUFBTCxDQUFxQixJQUFyQixDQUEwQixJQUExQixFQUFnQyxRQUFRLENBQVIsQ0FBN0QsQ0FESjtTQUZGO09BREYsQ0ExQk87OztTQXJFVTtFQUFpQixnQkFBTSxTQUFOOztrQkFBakI7OztBQTJHckIsU0FBUyxTQUFULEdBQXFCO0FBQ25CLGFBQVcsaUJBQVUsTUFBVjtBQUNYLFNBQU8saUJBQVUsTUFBVjtBQUNQLFdBQVMsaUJBQVUsSUFBVjtBQUNULFlBQVUsaUJBQVUsSUFBVjtBQUNWLGdCQUFjLGlCQUFVLElBQVY7QUFDZCxvQkFBa0IsaUJBQVUsSUFBVjtBQUNsQixnQkFBYyxpQkFBVSxJQUFWO0FBQ2QsZUFBYSxpQkFBVSxJQUFWO0FBQ2IscUJBQW1CLGlCQUFVLElBQVY7QUFDbkIsaUJBQWUsaUJBQVUsSUFBVjtBQUNmLFVBQVEsaUJBQVUsSUFBVjtBQUNSLFFBQU0saUJBQVUsSUFBVjtBQUNOLFNBQU8saUJBQVUsTUFBVjtBQUNQLFlBQVUsaUJBQVUsSUFBVjtDQWRaIiwiZmlsZSI6IlRyZWVOb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuL1NwaW5uZXInO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyZWVOb2RlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHsgb3BlbmVkOiB0aGlzLnByb3BzLmRlZmF1bHRPcGVuZWQgfTtcclxuICB9XHJcblxyXG4gIC8vIFRPRE86IHJldmVydCBpdCBiYWJlbGpzIGJ1ZyBodHRwczovL3BoYWJyaWNhdG9yLmJhYmVsanMuaW8vVDI4OTJcclxuICBvblRvZ2dsZUV2ZW50KGUpIHtcclxuICAgIGNvbnN0IHsgb25Ub2dnbGUsIG9uTm9kZVRvZ2dsZSB9ID0gdGhpcy5wcm9wcztcclxuICAgIGlmIChvblRvZ2dsZSkgeyBvblRvZ2dsZShlLCB0aGlzLnByb3BzKTsgfVxyXG4gICAgaWYgKG9uTm9kZVRvZ2dsZSkgeyBvbk5vZGVUb2dnbGUoZSwgdGhpcy5wcm9wcyk7IH1cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6ICF0aGlzLnN0YXRlLm9wZW5lZCB9KTtcclxuICB9XHJcblxyXG4gIG9uTGFiZWxDbGlja0V2ZW50KGUpIHtcclxuICAgIGNvbnN0IHsgb25MYWJlbENsaWNrLCBvbk5vZGVMYWJlbENsaWNrIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgaWYgKG9uTGFiZWxDbGljaykgeyBvbkxhYmVsQ2xpY2soZSwgdGhpcy5wcm9wcyk7IH1cclxuICAgIGlmIChvbk5vZGVMYWJlbENsaWNrKSB7IG9uTm9kZUxhYmVsQ2xpY2soZSwgdGhpcy5wcm9wcyk7IH1cclxuICB9XHJcblxyXG4gIG9uQ2xpY2tFdmVudChlKSB7XHJcbiAgICBjb25zdCB7IG9uQ2xpY2ssIG9uTm9kZUNsaWNrLCB0b2dnbGVPbk5vZGVDbGljayB9ID0gdGhpcy5wcm9wcztcclxuICAgIGlmIChvbkNsaWNrKSB7IG9uQ2xpY2soZSwgdGhpcy5wcm9wcyk7IH1cclxuICAgIGlmIChvbk5vZGVDbGljaykgeyBvbk5vZGVDbGljayhlLCB0aGlzLnByb3BzKTsgfVxyXG4gICAgaWYgKHRvZ2dsZU9uTm9kZUNsaWNrKSB7XHJcbiAgICAgIHRoaXMub25Ub2dnbGVFdmVudChlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlclRyZWVJdGVtKGl0ZW1Qcm9wcykge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBjbGFzc05hbWUsIGxhYmVsLCBpY29uID0gJ2NoZXZyb25yaWdodCcsIGxvYWRpbmcsIHNlbGVjdGVkLCBsZWFmLCBpc09wZW5lZCxcclxuICAgICAgY2hpbGRyZW4sIC4uLnByb3BzLFxyXG4gICAgfSA9IGl0ZW1Qcm9wcztcclxuICAgIGNvbnN0IGl0bUNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSwgJ3NsZHMtdHJlZV9faXRlbScsIHtcclxuICAgICAgJ3NsZHMtaXMtb3Blbic6IGlzT3BlbmVkLFxyXG4gICAgICAnc2xkcy1pcy1zZWxlY3RlZCc6IHNlbGVjdGVkLFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IGl0bUNsYXNzTmFtZXMgfSBvbkNsaWNrPXsgdGhpcy5vbkNsaWNrRXZlbnQuYmluZCh0aGlzKSB9IHsgLi4ucHJvcHMgfT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBsb2FkaW5nID8gPFNwaW5uZXIgc2l6ZT0nc21hbGwnIGNsYXNzTmFtZT0nc2xkcy1tLXJpZ2h0LS14LXNtYWxsJyAvPiA6XHJcbiAgICAgICAgICAhbGVhZiA/XHJcbiAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT0nc2xkcy1tLXJpZ2h0LS1zbWFsbCdcclxuICAgICAgICAgICAgdHlwZT0naWNvbi1iYXJlJ1xyXG4gICAgICAgICAgICBpY29uPXsgaWNvbiB9XHJcbiAgICAgICAgICAgIGljb25TaXplPSdzbWFsbCdcclxuICAgICAgICAgICAgb25DbGljaz17IHRoaXMub25Ub2dnbGVFdmVudC5iaW5kKHRoaXMpIH1cclxuICAgICAgICAgIC8+IDpcclxuICAgICAgICAgIG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGNsYXNzTmFtZT0nc2xkcy10cnVuY2F0ZSdcclxuICAgICAgICAgIHRhYkluZGV4PXsgLTEgfVxyXG4gICAgICAgICAgcm9sZT0ncHJlc2VudGF0aW9uJ1xyXG4gICAgICAgICAgb25DbGljaz17IHRoaXMub25MYWJlbENsaWNrRXZlbnQuYmluZCh0aGlzKSB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgeyBsYWJlbCB9XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIHsgbGVhZiA/IGNoaWxkcmVuIDogbnVsbCB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlckNoaWxkTm9kZShsZXZlbCwgdG5vZGUpIHtcclxuICAgIGNvbnN0IHsgb25Ob2RlQ2xpY2ssIG9uTm9kZVRvZ2dsZSwgb25Ob2RlTGFiZWxDbGljaywgdG9nZ2xlT25Ob2RlQ2xpY2sgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KHRub2RlLCB7IGxldmVsLCBvbk5vZGVDbGljaywgb25Ob2RlVG9nZ2xlLCBvbk5vZGVMYWJlbENsaWNrLCB0b2dnbGVPbk5vZGVDbGljayB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgZGVmYXVsdE9wZW5lZCwgb3BlbmVkLCBsZWFmLCBsZXZlbCxcclxuICAgICAgb25DbGljaywgb25Ub2dnbGUsIG9uTm9kZUNsaWNrLCBvbk5vZGVUb2dnbGUsIG9uTGFiZWxDbGljaywgb25Ob2RlTGFiZWxDbGljayxcclxuICAgICAgdG9nZ2xlT25Ob2RlQ2xpY2ssXHJcbiAgICAgIGNoaWxkcmVuLCAuLi5wcm9wcyxcclxuICAgIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgaXNPcGVuZWQgPVxyXG4gICAgICB0eXBlb2Ygb3BlbmVkICE9PSAndW5kZWZpbmVkJyA/IG9wZW5lZCA6XHJcbiAgICAgIHR5cGVvZiB0aGlzLnN0YXRlLm9wZW5lZCAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLnN0YXRlLm9wZW5lZCA6XHJcbiAgICAgIGRlZmF1bHRPcGVuZWQ7XHJcbiAgICBjb25zdCBncnBDbGFzc05hbWVzID0gY2xhc3NuYW1lcygnc2xkcy10cmVlX19ncm91cCcsIHtcclxuICAgICAgJ3NsZHMtbmVzdGVkJzogIWxlYWYsXHJcbiAgICAgICdpcy1leHBhbmRlZCc6IGlzT3BlbmVkLFxyXG4gICAgICAnc2xkcy1zaG93JzogaXNPcGVuZWQsXHJcbiAgICAgICdzbGRzLWhpZGUnOiAhaXNPcGVuZWQsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGl0ZW1Qcm9wcyA9IHsgbGVhZiwgaXNPcGVuZWQsIGNoaWxkcmVuLCAuLi5wcm9wcyB9O1xyXG4gICAgaWYgKGxlYWYpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8bGkgcm9sZT0ndHJlZWl0ZW0nIGFyaWEtbGV2ZWw9eyBsZXZlbCB9PlxyXG4gICAgICAgICAgeyB0aGlzLnJlbmRlclRyZWVJdGVtKGl0ZW1Qcm9wcykgfVxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGxpIHJvbGU9J3RyZWVpdGVtJyBhcmlhLWxldmVsPXsgbGV2ZWwgfSBhcmlhLWV4cGFuZGVkPXsgaXNPcGVuZWQgfT5cclxuICAgICAgICB7IHRoaXMucmVuZGVyVHJlZUl0ZW0oaXRlbVByb3BzKSB9XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT17IGdycENsYXNzTmFtZXMgfSByb2xlPSdncm91cCc+XHJcbiAgICAgICAgICB7IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgdGhpcy5yZW5kZXJDaGlsZE5vZGUuYmluZCh0aGlzLCBsZXZlbCArIDEpKSB9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9saT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuVHJlZU5vZGUucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcclxuICBvblRvZ2dsZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgb25Ob2RlVG9nZ2xlOiBQcm9wVHlwZXMuZnVuYyxcclxuICBvbk5vZGVMYWJlbENsaWNrOiBQcm9wVHlwZXMuZnVuYyxcclxuICBvbkxhYmVsQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxyXG4gIG9uTm9kZUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcclxuICB0b2dnbGVPbk5vZGVDbGljazogUHJvcFR5cGVzLmJvb2wsXHJcbiAgZGVmYXVsdE9wZW5lZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgb3BlbmVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICBsZWFmOiBQcm9wVHlwZXMuYm9vbCxcclxuICBsZXZlbDogUHJvcFR5cGVzLm51bWJlcixcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbn07XHJcbiJdfQ==