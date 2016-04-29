'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalFooter = exports.ModalContent = exports.ModalHeader = undefined;

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

var _reactLightningDesignSystem = require('react-lightning-design-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = function (_Component) {
  (0, _inherits3.default)(Modal, _Component);

  function Modal() {
    (0, _classCallCheck3.default)(this, Modal);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Modal).apply(this, arguments));
  }

  (0, _createClass3.default)(Modal, [{
    key: 'hide',
    value: function hide() {
      if (this.props.onHide) {
        this.props.onHide();
      }
    }
  }, {
    key: 'renderChildComponent',
    value: function renderChildComponent(comp) {
      /* eslint-disable no-use-before-define */
      if (comp.type === ModalHeader) {
        return _react2.default.cloneElement(comp, { onClose: this.hide.bind(this) });
      }
      return comp;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var opened = _props.opened;
      var children = _props.children;
      var size = _props.size;
      var props = (0, _objectWithoutProperties3.default)(_props, ['className', 'opened', 'children', 'size']);

      var modalClassNames = (0, _classnames2.default)(className, 'slds-modal', {
        'slds-fade-in-open': opened,
        'slds-modal--large': size === 'large'
      });
      var backdropClassNames = (0, _classnames2.default)(className, 'slds-modal-backdrop', {
        'slds-modal-backdrop--open': opened
      });
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          (0, _extends3.default)({ className: modalClassNames, 'aria-hidden': !opened, role: 'dialog' }, props),
          _react2.default.createElement(
            'div',
            { className: 'slds-modal__container' },
            _react2.default.Children.map(children, this.renderChildComponent.bind(this))
          )
        ),
        _react2.default.createElement('div', { className: backdropClassNames })
      );
    }
  }]);
  return Modal;
}(_react.Component);

var MODAL_SIZES = ['large'];

Modal.propTypes = {
  className: _react.PropTypes.string,
  size: _react.PropTypes.oneOf(MODAL_SIZES),
  opened: _react.PropTypes.bool,
  onHide: _react.PropTypes.func,
  children: _react.PropTypes.node
};

var ModalHeader = exports.ModalHeader = function (_Component2) {
  (0, _inherits3.default)(ModalHeader, _Component2);

  function ModalHeader() {
    (0, _classCallCheck3.default)(this, ModalHeader);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ModalHeader).apply(this, arguments));
  }

  (0, _createClass3.default)(ModalHeader, [{
    key: 'onClose',
    value: function onClose() {
      if (this.props.onClose) {
        this.props.onClose();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var className = _props2.className;
      var title = _props2.title;
      var tagline = _props2.tagline;
      var closeButton = _props2.closeButton;
      var props = (0, _objectWithoutProperties3.default)(_props2, ['className', 'title', 'tagline', 'closeButton']);

      var hdClassNames = (0, _classnames2.default)(className, 'slds-modal__header');
      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: hdClassNames }, props),
        _react2.default.createElement(
          'h2',
          { className: 'slds-text-heading--medium' },
          title
        ),
        tagline ? _react2.default.createElement(
          'p',
          { className: 'slds-m-top--x-small' },
          tagline
        ) : null,
        closeButton ? _react2.default.createElement(_reactLightningDesignSystem.Button, {
          className: 'slds-modal__close',
          icon: 'close',
          iconSize: 'large',
          alt: 'Close',
          inverse: true,
          onClick: this.onClose.bind(this)
        }) : null
      );
    }
  }]);
  return ModalHeader;
}(_react.Component);

ModalHeader.propTypes = {
  title: _react.PropTypes.string,
  tagline: _react.PropTypes.any,
  onClose: _react.PropTypes.func,
  className: _react.PropTypes.string,
  closeButton: _react.PropTypes.bool
};

var ModalContent = exports.ModalContent = function (_Component3) {
  (0, _inherits3.default)(ModalContent, _Component3);

  function ModalContent() {
    (0, _classCallCheck3.default)(this, ModalContent);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ModalContent).apply(this, arguments));
  }

  (0, _createClass3.default)(ModalContent, [{
    key: 'render',
    value: function render() {
      var _props3 = this.props;
      var className = _props3.className;
      var children = _props3.children;
      var props = (0, _objectWithoutProperties3.default)(_props3, ['className', 'children']);

      var ctClassNames = (0, _classnames2.default)(className, 'slds-modal__content');
      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: ctClassNames }, props),
        children
      );
    }
  }]);
  return ModalContent;
}(_react.Component);

ModalContent.propTypes = {
  className: _react.PropTypes.string,
  children: _react.PropTypes.node
};

var ModalFooter = exports.ModalFooter = function (_Component4) {
  (0, _inherits3.default)(ModalFooter, _Component4);

  function ModalFooter() {
    (0, _classCallCheck3.default)(this, ModalFooter);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(ModalFooter).apply(this, arguments));
  }

  (0, _createClass3.default)(ModalFooter, [{
    key: 'render',
    value: function render() {
      var _props4 = this.props;
      var className = _props4.className;
      var directional = _props4.directional;
      var children = _props4.children;
      var props = (0, _objectWithoutProperties3.default)(_props4, ['className', 'directional', 'children']);

      var ftClassNames = (0, _classnames2.default)(className, 'slds-modal__footer', { 'slds-modal__footer--directional': directional });
      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: ftClassNames }, props),
        children
      );
    }
  }]);
  return ModalFooter;
}(_react.Component);

ModalFooter.propTypes = {
  className: _react.PropTypes.string,
  directional: _react.PropTypes.bool,
  children: _react.PropTypes.node
};

Modal.Header = ModalHeader;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;

exports.default = Modal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL01vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0lBR007Ozs7Ozs7Ozs7MkJBQ0c7QUFDTCxVQUFJLEtBQUssS0FBTCxDQUFXLE1BQVgsRUFBbUI7QUFDckIsYUFBSyxLQUFMLENBQVcsTUFBWCxHQURxQjtPQUF2Qjs7Ozt5Q0FLbUIsTUFBTTs7QUFFekIsVUFBSSxLQUFLLElBQUwsS0FBYyxXQUFkLEVBQTJCO0FBQzdCLGVBQU8sZ0JBQU0sWUFBTixDQUFtQixJQUFuQixFQUF5QixFQUFFLFNBQVMsS0FBSyxJQUFMLENBQVUsSUFBVixDQUFlLElBQWYsQ0FBVCxFQUEzQixDQUFQLENBRDZCO09BQS9CO0FBR0EsYUFBTyxJQUFQLENBTHlCOzs7OzZCQVFsQjttQkFDaUQsS0FBSyxLQUFMLENBRGpEO1VBQ0MsNkJBREQ7VUFDWSx1QkFEWjtVQUNvQiwyQkFEcEI7VUFDOEIsbUJBRDlCO1VBQ3VDLG9HQUR2Qzs7QUFFUCxVQUFNLGtCQUFrQiwwQkFBVyxTQUFYLEVBQXNCLFlBQXRCLEVBQW9DO0FBQzFELDZCQUFxQixNQUFyQjtBQUNBLDZCQUFxQixTQUFTLE9BQVQ7T0FGQyxDQUFsQixDQUZDO0FBTVAsVUFBTSxxQkFBcUIsMEJBQVcsU0FBWCxFQUFzQixxQkFBdEIsRUFBNkM7QUFDdEUscUNBQTZCLE1BQTdCO09BRHlCLENBQXJCLENBTkM7QUFTUCxhQUNFOzs7UUFDRTs7bUNBQUssV0FBWSxlQUFaLEVBQThCLGVBQWMsQ0FBQyxNQUFELEVBQVUsTUFBSyxRQUFMLElBQW1CLE1BQTlFO1VBQ0U7O2NBQUssV0FBVSx1QkFBVixFQUFMO1lBQ0ksZ0JBQU0sUUFBTixDQUFlLEdBQWYsQ0FBbUIsUUFBbkIsRUFBNkIsS0FBSyxvQkFBTCxDQUEwQixJQUExQixDQUErQixJQUEvQixDQUE3QixDQURKO1dBREY7U0FERjtRQU1FLHVDQUFLLFdBQVksa0JBQVosRUFBTCxDQU5GO09BREYsQ0FUTzs7O1NBZkw7OztBQXFDTixJQUFNLGNBQWMsQ0FBQyxPQUFELENBQWQ7O0FBRU4sTUFBTSxTQUFOLEdBQWtCO0FBQ2hCLGFBQVcsaUJBQVUsTUFBVjtBQUNYLFFBQU0saUJBQVUsS0FBVixDQUFnQixXQUFoQixDQUFOO0FBQ0EsVUFBUSxpQkFBVSxJQUFWO0FBQ1IsVUFBUSxpQkFBVSxJQUFWO0FBQ1IsWUFBVSxpQkFBVSxJQUFWO0NBTFo7O0lBU2E7Ozs7Ozs7Ozs7OEJBQ0Q7QUFDUixVQUFJLEtBQUssS0FBTCxDQUFXLE9BQVgsRUFBb0I7QUFDdEIsYUFBSyxLQUFMLENBQVcsT0FBWCxHQURzQjtPQUF4Qjs7Ozs2QkFLTztvQkFDc0QsS0FBSyxLQUFMLENBRHREO1VBQ0MsOEJBREQ7VUFDWSxzQkFEWjtVQUNtQiwwQkFEbkI7VUFDNEIsa0NBRDVCO1VBQzRDLDBHQUQ1Qzs7QUFFUCxVQUFNLGVBQWUsMEJBQVcsU0FBWCxFQUFzQixvQkFBdEIsQ0FBZixDQUZDO0FBR1AsYUFDRTs7aUNBQUssV0FBWSxZQUFaLElBQWdDLE1BQXJDO1FBQ0U7O1lBQUksV0FBVSwyQkFBVixFQUFKO1VBQTRDLEtBQTVDO1NBREY7UUFHSSxVQUNBOztZQUFHLFdBQVUscUJBQVYsRUFBSDtVQUFxQyxPQUFyQztTQURBLEdBRUEsSUFGQTtRQUtBLGNBQ0E7QUFDRSxxQkFBVSxtQkFBVjtBQUNBLGdCQUFLLE9BQUw7QUFDQSxvQkFBUyxPQUFUO0FBQ0EsZUFBSSxPQUFKO0FBQ0E7QUFDQSxtQkFBVSxLQUFLLE9BQUwsQ0FBYSxJQUFiLENBQWtCLElBQWxCLENBQVY7U0FORixDQURBLEdBU0EsSUFUQTtPQVROLENBSE87OztTQVBFOzs7QUFvQ2IsWUFBWSxTQUFaLEdBQXdCO0FBQ3RCLFNBQU8saUJBQVUsTUFBVjtBQUNQLFdBQVMsaUJBQVUsR0FBVjtBQUNULFdBQVMsaUJBQVUsSUFBVjtBQUNULGFBQVcsaUJBQVUsTUFBVjtBQUNYLGVBQWEsaUJBQVUsSUFBVjtDQUxmOztJQVNhOzs7Ozs7Ozs7OzZCQUNGO29CQUNtQyxLQUFLLEtBQUwsQ0FEbkM7VUFDQyw4QkFERDtVQUNZLDRCQURaO1VBQ3lCLG1GQUR6Qjs7QUFFUCxVQUFNLGVBQWUsMEJBQVcsU0FBWCxFQUFzQixxQkFBdEIsQ0FBZixDQUZDO0FBR1AsYUFDRTs7aUNBQUssV0FBWSxZQUFaLElBQWdDLE1BQXJDO1FBQStDLFFBQS9DO09BREYsQ0FITzs7O1NBREU7OztBQVViLGFBQWEsU0FBYixHQUF5QjtBQUN2QixhQUFXLGlCQUFVLE1BQVY7QUFDWCxZQUFVLGlCQUFVLElBQVY7Q0FGWjs7SUFNYTs7Ozs7Ozs7Ozs2QkFDRjtvQkFDZ0QsS0FBSyxLQUFMLENBRGhEO1VBQ0MsOEJBREQ7VUFDWSxrQ0FEWjtVQUN5Qiw0QkFEekI7VUFDc0Msa0dBRHRDOztBQUVQLFVBQU0sZUFBZSwwQkFDbkIsU0FEbUIsRUFFbkIsb0JBRm1CLEVBR25CLEVBQUUsbUNBQW1DLFdBQW5DLEVBSGlCLENBQWYsQ0FGQztBQU9QLGFBQ0U7O2lDQUFLLFdBQVksWUFBWixJQUFnQyxNQUFyQztRQUErQyxRQUEvQztPQURGLENBUE87OztTQURFOzs7QUFjYixZQUFZLFNBQVosR0FBd0I7QUFDdEIsYUFBVyxpQkFBVSxNQUFWO0FBQ1gsZUFBYSxpQkFBVSxJQUFWO0FBQ2IsWUFBVSxpQkFBVSxJQUFWO0NBSFo7O0FBT0EsTUFBTSxNQUFOLEdBQWUsV0FBZjtBQUNBLE1BQU0sT0FBTixHQUFnQixZQUFoQjtBQUNBLE1BQU0sTUFBTixHQUFlLFdBQWY7O2tCQUVlIiwiZmlsZSI6Ik1vZGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAncmVhY3QtbGlnaHRuaW5nLWRlc2lnbi1zeXN0ZW0nO1xyXG5cclxuXHJcbmNsYXNzIE1vZGFsIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBoaWRlKCkge1xyXG4gICAgaWYgKHRoaXMucHJvcHMub25IaWRlKSB7XHJcbiAgICAgIHRoaXMucHJvcHMub25IaWRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXJDaGlsZENvbXBvbmVudChjb21wKSB7XHJcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xyXG4gICAgaWYgKGNvbXAudHlwZSA9PT0gTW9kYWxIZWFkZXIpIHtcclxuICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjb21wLCB7IG9uQ2xvc2U6IHRoaXMuaGlkZS5iaW5kKHRoaXMpIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGNvbXA7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgb3BlbmVkLCBjaGlsZHJlbiwgc2l6ZSwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCBtb2RhbENsYXNzTmFtZXMgPSBjbGFzc25hbWVzKGNsYXNzTmFtZSwgJ3NsZHMtbW9kYWwnLCB7XHJcbiAgICAgICdzbGRzLWZhZGUtaW4tb3Blbic6IG9wZW5lZCxcclxuICAgICAgJ3NsZHMtbW9kYWwtLWxhcmdlJzogc2l6ZSA9PT0gJ2xhcmdlJyxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgYmFja2Ryb3BDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhjbGFzc05hbWUsICdzbGRzLW1vZGFsLWJhY2tkcm9wJywge1xyXG4gICAgICAnc2xkcy1tb2RhbC1iYWNrZHJvcC0tb3Blbic6IG9wZW5lZCxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IG1vZGFsQ2xhc3NOYW1lcyB9IGFyaWEtaGlkZGVuPXsgIW9wZW5lZCB9IHJvbGU9J2RpYWxvZycgeyAuLi5wcm9wcyB9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsZHMtbW9kYWxfX2NvbnRhaW5lcic+XHJcbiAgICAgICAgICAgIHsgUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCB0aGlzLnJlbmRlckNoaWxkQ29tcG9uZW50LmJpbmQodGhpcykpIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgYmFja2Ryb3BDbGFzc05hbWVzIH0+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IE1PREFMX1NJWkVTID0gWydsYXJnZSddO1xyXG5cclxuTW9kYWwucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoTU9EQUxfU0laRVMpLFxyXG4gIG9wZW5lZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgb25IaWRlOiBQcm9wVHlwZXMuZnVuYyxcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIE1vZGFsSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBvbkNsb3NlKCkge1xyXG4gICAgaWYgKHRoaXMucHJvcHMub25DbG9zZSkge1xyXG4gICAgICB0aGlzLnByb3BzLm9uQ2xvc2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCB0aXRsZSwgdGFnbGluZSwgY2xvc2VCdXR0b24sIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgaGRDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhjbGFzc05hbWUsICdzbGRzLW1vZGFsX19oZWFkZXInKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgaGRDbGFzc05hbWVzIH0geyAuLi5wcm9wcyB9PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9J3NsZHMtdGV4dC1oZWFkaW5nLS1tZWRpdW0nPnsgdGl0bGUgfTwvaDI+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGFnbGluZSA/XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9J3NsZHMtbS10b3AtLXgtc21hbGwnPnsgdGFnbGluZSB9PC9wPiA6XHJcbiAgICAgICAgICBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNsb3NlQnV0dG9uID9cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdzbGRzLW1vZGFsX19jbG9zZSdcclxuICAgICAgICAgICAgaWNvbj0nY2xvc2UnXHJcbiAgICAgICAgICAgIGljb25TaXplPSdsYXJnZSdcclxuICAgICAgICAgICAgYWx0PSdDbG9zZSdcclxuICAgICAgICAgICAgaW52ZXJzZVxyXG4gICAgICAgICAgICBvbkNsaWNrPXsgdGhpcy5vbkNsb3NlLmJpbmQodGhpcykgfVxyXG4gICAgICAgICAgLz4gOlxyXG4gICAgICAgICAgbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbk1vZGFsSGVhZGVyLnByb3BUeXBlcyA9IHtcclxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICB0YWdsaW5lOiBQcm9wVHlwZXMuYW55LFxyXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBjbG9zZUJ1dHRvbjogUHJvcFR5cGVzLmJvb2wsXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIE1vZGFsQ29udGVudCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGNoaWxkcmVuLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IGN0Q2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoY2xhc3NOYW1lLCAnc2xkcy1tb2RhbF9fY29udGVudCcpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBjdENsYXNzTmFtZXMgfSB7IC4uLnByb3BzIH0+eyBjaGlsZHJlbiB9PC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuTW9kYWxDb250ZW50LnByb3BUeXBlcyA9IHtcclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBNb2RhbEZvb3RlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGRpcmVjdGlvbmFsLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCBmdENsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxyXG4gICAgICBjbGFzc05hbWUsXHJcbiAgICAgICdzbGRzLW1vZGFsX19mb290ZXInLFxyXG4gICAgICB7ICdzbGRzLW1vZGFsX19mb290ZXItLWRpcmVjdGlvbmFsJzogZGlyZWN0aW9uYWwgfVxyXG4gICAgKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgZnRDbGFzc05hbWVzIH0geyAuLi5wcm9wcyB9PnsgY2hpbGRyZW4gfTwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbk1vZGFsRm9vdGVyLnByb3BUeXBlcyA9IHtcclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgZGlyZWN0aW9uYWw6IFByb3BUeXBlcy5ib29sLFxyXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcclxufTtcclxuXHJcblxyXG5Nb2RhbC5IZWFkZXIgPSBNb2RhbEhlYWRlcjtcclxuTW9kYWwuQ29udGVudCA9IE1vZGFsQ29udGVudDtcclxuTW9kYWwuRm9vdGVyID0gTW9kYWxGb290ZXI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbDtcclxuIl19