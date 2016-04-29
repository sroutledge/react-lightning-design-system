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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _FormElement = require('./FormElement');

var _FormElement2 = _interopRequireDefault(_FormElement);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Datepicker = require('./Datepicker');

var _Datepicker2 = _interopRequireDefault(_Datepicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DateInput = function (_React$Component) {
  (0, _inherits3.default)(DateInput, _React$Component);

  function DateInput(props) {
    (0, _classCallCheck3.default)(this, DateInput);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(DateInput).call(this, props));

    _this.state = {
      id: 'form-element-' + (0, _uuid2.default)(),
      opened: props.defaultOpened || false
    };
    return _this;
  }

  (0, _createClass3.default)(DateInput, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.onValueChange && prevState.value !== this.state.value) {
        this.props.onValueChange(this.state.value, prevState.value);
      }
    }
  }, {
    key: 'onDateIconClick',
    value: function onDateIconClick() {
      var _this2 = this;

      setTimeout(function () {
        _this2.showDatepicker();
      }, 10);
    }
  }, {
    key: 'onInputKeyDown',
    value: function onInputKeyDown(e) {
      var _this3 = this;

      if (e.keyCode === 13) {
        // return key
        e.preventDefault();
        e.stopPropagation();
        this.setValueFromInput(e.target.value);
        if (this.props.onComplete) {
          setTimeout(function () {
            _this3.props.onComplete();
          }, 10);
        }
      } else if (e.keyCode === 40) {
        // down key
        this.showDatepicker();
        e.preventDefault();
        e.stopPropagation();
      }
      if (this.props.onKeyDown) {
        this.props.onKeyDown(e);
      }
    }
  }, {
    key: 'onInputChange',
    value: function onInputChange(e) {
      var inputValue = e.target.value;
      this.setState({ inputValue: inputValue });
      if (this.props.onChange) {
        this.props.onChange(e, inputValue);
      }
    }
  }, {
    key: 'onInputBlur',
    value: function onInputBlur(e) {
      var _this4 = this;

      this.setValueFromInput(e.target.value);
      setTimeout(function () {
        if (!_this4.isFocusedInComponent()) {
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
    key: 'onDatepickerSelect',
    value: function onDatepickerSelect(value) {
      var _this5 = this;

      this.setState({ value: value, inputValue: undefined });
      setTimeout(function () {
        _this5.setState({ opened: false });
        var inputEl = _reactDom2.default.findDOMNode(_this5.refs.input);
        if (inputEl) {
          inputEl.focus();
          inputEl.select();
        }
        if (_this5.props.onComplete) {
          _this5.props.onComplete();
        }
      }, 200);
    }
  }, {
    key: 'onDatepickerBlur',
    value: function onDatepickerBlur() {
      var _this6 = this;

      this.setState({ opened: false });
      setTimeout(function () {
        if (!_this6.isFocusedInComponent()) {
          if (_this6.props.onBlur) {
            _this6.props.onBlur();
          }
          if (_this6.props.onComplete) {
            _this6.props.onComplete();
          }
        }
      }, 10);
    }
  }, {
    key: 'onDatepickerClose',
    value: function onDatepickerClose() {
      this.setState({ opened: false });
      var inputEl = _reactDom2.default.findDOMNode(this.refs.input);
      if (inputEl) {
        inputEl.focus();
        inputEl.select();
      }
    }
  }, {
    key: 'setValueFromInput',
    value: function setValueFromInput(inputValue) {
      var value = this.state.value;
      if (!inputValue) {
        value = '';
      } else {
        value = (0, _moment2.default)(inputValue, this.props.dateFormat);
        if (value.isValid()) {
          value = value.format('YYYY-MM-DD');
        } else {
          value = '';
        }
      }
      this.setState({ value: value, inputValue: undefined });
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
    key: 'showDatepicker',
    value: function showDatepicker() {
      var value = this.state.value;
      if (typeof this.state.inputValue !== 'undefined') {
        value = (0, _moment2.default)(this.state.inputValue, this.props.dateFormat);
        if (value.isValid()) {
          value = value.format('YYYY-MM-DD');
        } else {
          value = this.state.value;
        }
      }
      this.setState({ opened: true, value: value });
    }
  }, {
    key: 'renderInput',
    value: function renderInput(_ref) {
      var inputValue = _ref.inputValue;
      var props = (0, _objectWithoutProperties3.default)(_ref, ['inputValue']);

      return _react2.default.createElement(
        'div',
        { className: 'slds-input-has-icon slds-input-has-icon--right' },
        _react2.default.createElement(_Input2.default, (0, _extends3.default)({ ref: 'input', value: inputValue }, props, {
          onKeyDown: this.onInputKeyDown.bind(this),
          onChange: this.onInputChange.bind(this),
          onBlur: this.onInputBlur.bind(this)
        })),
        _react2.default.createElement(_Icon2.default, { icon: 'event', className: 'slds-input__icon', style: { cursor: 'pointer' },
          onClick: this.onDateIconClick.bind(this)
        })
      );
    }
  }, {
    key: 'renderDropdown',
    value: function renderDropdown(dateValue) {
      var datepickerClassNames = (0, _classnames2.default)('slds-dropdown', 'slds-dropdown--left');
      return this.state.opened ? _react2.default.createElement(_Datepicker2.default, { className: datepickerClassNames, selectedDate: dateValue, autoFocus: true,
        onSelect: this.onDatepickerSelect.bind(this),
        onBlur: this.onDatepickerBlur.bind(this),
        onClose: this.onDatepickerClose.bind(this)
      }) : _react2.default.createElement('div', null);
    }
  }, {
    key: 'render',
    value: function render() {
      var id = this.props.id || this.state.id;
      var _props = this.props;
      var totalCols = _props.totalCols;
      var cols = _props.cols;
      var label = _props.label;
      var required = _props.required;
      var error = _props.error;
      var defaultValue = _props.defaultValue;
      var value = _props.value;
      var dateFormat = _props.dateFormat;
      var onChange = _props.onChange;
      var onKeyDown = _props.onKeyDown;
      var onBlur = _props.onBlur;
      var props = (0, _objectWithoutProperties3.default)(_props, ['totalCols', 'cols', 'label', 'required', 'error', 'defaultValue', 'value', 'dateFormat', 'onChange', 'onKeyDown', 'onBlur']);

      var dateValue = typeof value !== 'undefined' ? value : typeof this.state.value !== 'undefined' ? this.state.value : defaultValue;
      var mvalue = (0, _moment2.default)(dateValue, 'YYYY-MM-DD');
      var inputValue = typeof this.state.inputValue !== 'undefined' ? this.state.inputValue : typeof dateValue !== 'undefined' && mvalue.isValid() ? mvalue.format(dateFormat) : null;
      var dropdown = this.renderDropdown(dateValue);
      var formElemProps = { id: id, totalCols: totalCols, cols: cols, label: label, required: required, error: error, dropdown: dropdown };
      return _react2.default.createElement(
        _FormElement2.default,
        formElemProps,
        this.renderInput((0, _extends3.default)({ id: id, inputValue: inputValue }, props))
      );
    }
  }]);
  return DateInput;
}(_react2.default.Component);

exports.default = DateInput;


DateInput.propTypes = {
  id: _react.PropTypes.string,
  className: _react.PropTypes.string,
  label: _react.PropTypes.string,
  required: _react.PropTypes.bool,
  error: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.string, _react.PropTypes.shape({
    message: _react.PropTypes.string
  })]),
  totalCols: _react.PropTypes.number,
  cols: _react.PropTypes.number,
  value: _react.PropTypes.string,
  onKeyDown: _react.PropTypes.func,
  onBlur: _react.PropTypes.func,
  defaultValue: _react.PropTypes.string,
  defaultOpened: _react.PropTypes.bool,
  dateFormat: _react.PropTypes.string,
  onChange: _react.PropTypes.func,
  onValueChange: _react.PropTypes.func,
  onComplete: _react.PropTypes.func
};

DateInput.defaultProps = {
  dateFormat: 'L'
};

DateInput.isFormElement = true;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0RhdGVJbnB1dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7SUFFcUI7OztBQUNuQixXQURtQixTQUNuQixDQUFZLEtBQVosRUFBbUI7d0NBREEsV0FDQTs7NkZBREEsc0JBRVgsUUFEVzs7QUFFakIsVUFBSyxLQUFMLEdBQWE7QUFDWCw0QkFBb0IscUJBQXBCO0FBQ0EsY0FBUyxNQUFNLGFBQU4sSUFBdUIsS0FBdkI7S0FGWCxDQUZpQjs7R0FBbkI7OzZCQURtQjs7dUNBU0EsV0FBVyxXQUFXO0FBQ3ZDLFVBQUksS0FBSyxLQUFMLENBQVcsYUFBWCxJQUE0QixVQUFVLEtBQVYsS0FBb0IsS0FBSyxLQUFMLENBQVcsS0FBWCxFQUFrQjtBQUNwRSxhQUFLLEtBQUwsQ0FBVyxhQUFYLENBQXlCLEtBQUssS0FBTCxDQUFXLEtBQVgsRUFBa0IsVUFBVSxLQUFWLENBQTNDLENBRG9FO09BQXRFOzs7O3NDQUtnQjs7O0FBQ2hCLGlCQUFXLFlBQU07QUFDZixlQUFLLGNBQUwsR0FEZTtPQUFOLEVBRVIsRUFGSCxFQURnQjs7OzttQ0FNSCxHQUFHOzs7QUFDaEIsVUFBSSxFQUFFLE9BQUYsS0FBYyxFQUFkLEVBQWtCOztBQUNwQixVQUFFLGNBQUYsR0FEb0I7QUFFcEIsVUFBRSxlQUFGLEdBRm9CO0FBR3BCLGFBQUssaUJBQUwsQ0FBdUIsRUFBRSxNQUFGLENBQVMsS0FBVCxDQUF2QixDQUhvQjtBQUlwQixZQUFJLEtBQUssS0FBTCxDQUFXLFVBQVgsRUFBdUI7QUFDekIscUJBQVcsWUFBTTtBQUNmLG1CQUFLLEtBQUwsQ0FBVyxVQUFYLEdBRGU7V0FBTixFQUVSLEVBRkgsRUFEeUI7U0FBM0I7T0FKRixNQVNPLElBQUksRUFBRSxPQUFGLEtBQWMsRUFBZCxFQUFrQjs7QUFDM0IsYUFBSyxjQUFMLEdBRDJCO0FBRTNCLFVBQUUsY0FBRixHQUYyQjtBQUczQixVQUFFLGVBQUYsR0FIMkI7T0FBdEI7QUFLUCxVQUFJLEtBQUssS0FBTCxDQUFXLFNBQVgsRUFBc0I7QUFDeEIsYUFBSyxLQUFMLENBQVcsU0FBWCxDQUFxQixDQUFyQixFQUR3QjtPQUExQjs7OztrQ0FLWSxHQUFHO0FBQ2YsVUFBTSxhQUFhLEVBQUUsTUFBRixDQUFTLEtBQVQsQ0FESjtBQUVmLFdBQUssUUFBTCxDQUFjLEVBQUUsc0JBQUYsRUFBZCxFQUZlO0FBR2YsVUFBSSxLQUFLLEtBQUwsQ0FBVyxRQUFYLEVBQXFCO0FBQ3ZCLGFBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsQ0FBcEIsRUFBdUIsVUFBdkIsRUFEdUI7T0FBekI7Ozs7Z0NBS1UsR0FBRzs7O0FBQ2IsV0FBSyxpQkFBTCxDQUF1QixFQUFFLE1BQUYsQ0FBUyxLQUFULENBQXZCLENBRGE7QUFFYixpQkFBVyxZQUFNO0FBQ2YsWUFBSSxDQUFDLE9BQUssb0JBQUwsRUFBRCxFQUE4QjtBQUNoQyxjQUFJLE9BQUssS0FBTCxDQUFXLE1BQVgsRUFBbUI7QUFDckIsbUJBQUssS0FBTCxDQUFXLE1BQVgsR0FEcUI7V0FBdkI7QUFHQSxjQUFJLE9BQUssS0FBTCxDQUFXLFVBQVgsRUFBdUI7QUFDekIsbUJBQUssS0FBTCxDQUFXLFVBQVgsR0FEeUI7V0FBM0I7U0FKRjtPQURTLEVBU1IsRUFUSCxFQUZhOzs7O3VDQWNJLE9BQU87OztBQUN4QixXQUFLLFFBQUwsQ0FBYyxFQUFFLFlBQUYsRUFBUyxZQUFZLFNBQVosRUFBdkIsRUFEd0I7QUFFeEIsaUJBQVcsWUFBTTtBQUNmLGVBQUssUUFBTCxDQUFjLEVBQUUsUUFBUSxLQUFSLEVBQWhCLEVBRGU7QUFFZixZQUFNLFVBQVUsbUJBQVMsV0FBVCxDQUFxQixPQUFLLElBQUwsQ0FBVSxLQUFWLENBQS9CLENBRlM7QUFHZixZQUFJLE9BQUosRUFBYTtBQUNYLGtCQUFRLEtBQVIsR0FEVztBQUVYLGtCQUFRLE1BQVIsR0FGVztTQUFiO0FBSUEsWUFBSSxPQUFLLEtBQUwsQ0FBVyxVQUFYLEVBQXVCO0FBQ3pCLGlCQUFLLEtBQUwsQ0FBVyxVQUFYLEdBRHlCO1NBQTNCO09BUFMsRUFVUixHQVZILEVBRndCOzs7O3VDQWVQOzs7QUFDakIsV0FBSyxRQUFMLENBQWMsRUFBRSxRQUFRLEtBQVIsRUFBaEIsRUFEaUI7QUFFakIsaUJBQVcsWUFBTTtBQUNmLFlBQUksQ0FBQyxPQUFLLG9CQUFMLEVBQUQsRUFBOEI7QUFDaEMsY0FBSSxPQUFLLEtBQUwsQ0FBVyxNQUFYLEVBQW1CO0FBQ3JCLG1CQUFLLEtBQUwsQ0FBVyxNQUFYLEdBRHFCO1dBQXZCO0FBR0EsY0FBSSxPQUFLLEtBQUwsQ0FBVyxVQUFYLEVBQXVCO0FBQ3pCLG1CQUFLLEtBQUwsQ0FBVyxVQUFYLEdBRHlCO1dBQTNCO1NBSkY7T0FEUyxFQVNSLEVBVEgsRUFGaUI7Ozs7d0NBY0M7QUFDbEIsV0FBSyxRQUFMLENBQWMsRUFBRSxRQUFRLEtBQVIsRUFBaEIsRUFEa0I7QUFFbEIsVUFBTSxVQUFVLG1CQUFTLFdBQVQsQ0FBcUIsS0FBSyxJQUFMLENBQVUsS0FBVixDQUEvQixDQUZZO0FBR2xCLFVBQUksT0FBSixFQUFhO0FBQ1gsZ0JBQVEsS0FBUixHQURXO0FBRVgsZ0JBQVEsTUFBUixHQUZXO09BQWI7Ozs7c0NBTWdCLFlBQVk7QUFDNUIsVUFBSSxRQUFRLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FEZ0I7QUFFNUIsVUFBSSxDQUFDLFVBQUQsRUFBYTtBQUNmLGdCQUFRLEVBQVIsQ0FEZTtPQUFqQixNQUVPO0FBQ0wsZ0JBQVEsc0JBQU8sVUFBUCxFQUFtQixLQUFLLEtBQUwsQ0FBVyxVQUFYLENBQTNCLENBREs7QUFFTCxZQUFJLE1BQU0sT0FBTixFQUFKLEVBQXFCO0FBQ25CLGtCQUFRLE1BQU0sTUFBTixDQUFhLFlBQWIsQ0FBUixDQURtQjtTQUFyQixNQUVPO0FBQ0wsa0JBQVEsRUFBUixDQURLO1NBRlA7T0FKRjtBQVVBLFdBQUssUUFBTCxDQUFjLEVBQUUsWUFBRixFQUFTLFlBQVksU0FBWixFQUF2QixFQVo0Qjs7OzsyQ0FlUDtBQUNyQixVQUFNLFNBQVMsbUJBQVMsV0FBVCxDQUFxQixJQUFyQixDQUFULENBRGU7QUFFckIsVUFBSSxXQUFXLFNBQVMsYUFBVCxDQUZNO0FBR3JCLGFBQU8sWUFBWSxhQUFhLE1BQWIsRUFBcUI7QUFDdEMsbUJBQVcsU0FBUyxVQUFULENBRDJCO09BQXhDO0FBR0EsYUFBTyxDQUFDLENBQUMsUUFBRCxDQU5hOzs7O3FDQVNOO0FBQ2YsVUFBSSxRQUFRLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FERztBQUVmLFVBQUksT0FBTyxLQUFLLEtBQUwsQ0FBVyxVQUFYLEtBQTBCLFdBQWpDLEVBQThDO0FBQ2hELGdCQUFRLHNCQUFPLEtBQUssS0FBTCxDQUFXLFVBQVgsRUFBdUIsS0FBSyxLQUFMLENBQVcsVUFBWCxDQUF0QyxDQURnRDtBQUVoRCxZQUFJLE1BQU0sT0FBTixFQUFKLEVBQXFCO0FBQ25CLGtCQUFRLE1BQU0sTUFBTixDQUFhLFlBQWIsQ0FBUixDQURtQjtTQUFyQixNQUVPO0FBQ0wsa0JBQVEsS0FBSyxLQUFMLENBQVcsS0FBWCxDQURIO1NBRlA7T0FGRjtBQVFBLFdBQUssUUFBTCxDQUFjLEVBQUUsUUFBUSxJQUFSLEVBQWMsWUFBaEIsRUFBZCxFQVZlOzs7O3NDQWFxQjtVQUF4Qiw2QkFBd0I7VUFBVCxxRUFBUzs7QUFDcEMsYUFDRTs7VUFBSyxXQUFVLGdEQUFWLEVBQUw7UUFDRSx3RUFBTyxLQUFJLE9BQUosRUFBWSxPQUFRLFVBQVIsSUFBMEI7QUFDM0MscUJBQVksS0FBSyxjQUFMLENBQW9CLElBQXBCLENBQXlCLElBQXpCLENBQVo7QUFDQSxvQkFBVyxLQUFLLGFBQUwsQ0FBbUIsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FBWDtBQUNBLGtCQUFTLEtBQUssV0FBTCxDQUFpQixJQUFqQixDQUFzQixJQUF0QixDQUFUO1VBSEYsQ0FERjtRQU1FLGdEQUFNLE1BQUssT0FBTCxFQUFhLFdBQVUsa0JBQVYsRUFBNkIsT0FBUSxFQUFFLFFBQVEsU0FBUixFQUFWO0FBQzlDLG1CQUFVLEtBQUssZUFBTCxDQUFxQixJQUFyQixDQUEwQixJQUExQixDQUFWO1NBREYsQ0FORjtPQURGLENBRG9DOzs7O21DQWV2QixXQUFXO0FBQ3hCLFVBQU0sdUJBQXVCLDBCQUMzQixlQUQyQixFQUUzQixxQkFGMkIsQ0FBdkIsQ0FEa0I7QUFLeEIsYUFDRSxLQUFLLEtBQUwsQ0FBVyxNQUFYLEdBQ0Esc0RBQVksV0FBWSxvQkFBWixFQUFtQyxjQUFlLFNBQWYsRUFBMkI7QUFDeEUsa0JBQVcsS0FBSyxrQkFBTCxDQUF3QixJQUF4QixDQUE2QixJQUE3QixDQUFYO0FBQ0EsZ0JBQVMsS0FBSyxnQkFBTCxDQUFzQixJQUF0QixDQUEyQixJQUEzQixDQUFUO0FBQ0EsaUJBQVUsS0FBSyxpQkFBTCxDQUF1QixJQUF2QixDQUE0QixJQUE1QixDQUFWO09BSEYsQ0FEQSxHQU1BLDBDQU5BLENBTnNCOzs7OzZCQWdCakI7QUFDUCxVQUFNLEtBQUssS0FBSyxLQUFMLENBQVcsRUFBWCxJQUFpQixLQUFLLEtBQUwsQ0FBVyxFQUFYLENBRHJCO21CQU1ILEtBQUssS0FBTCxDQU5HO1VBR0wsNkJBSEs7VUFHTSxtQkFITjtVQUdZLHFCQUhaO1VBR21CLDJCQUhuQjtVQUc2QixxQkFIN0I7VUFJTCxtQ0FKSztVQUlTLHFCQUpUO1VBSWdCLCtCQUpoQjtVQUtMLDJCQUxLO1VBS0ssNkJBTEw7VUFLZ0IsdUJBTGhCO1VBSzJCLHNMQUwzQjs7QUFPUCxVQUFNLFlBQ0osT0FBTyxLQUFQLEtBQWlCLFdBQWpCLEdBQStCLEtBQS9CLEdBQ0EsT0FBTyxLQUFLLEtBQUwsQ0FBVyxLQUFYLEtBQXFCLFdBQTVCLEdBQTBDLEtBQUssS0FBTCxDQUFXLEtBQVgsR0FDMUMsWUFEQSxDQVRLO0FBV1AsVUFBTSxTQUFTLHNCQUFPLFNBQVAsRUFBa0IsWUFBbEIsQ0FBVCxDQVhDO0FBWVAsVUFBTSxhQUNKLE9BQU8sS0FBSyxLQUFMLENBQVcsVUFBWCxLQUEwQixXQUFqQyxHQUErQyxLQUFLLEtBQUwsQ0FBVyxVQUFYLEdBQy9DLE9BQU8sU0FBUCxLQUFxQixXQUFyQixJQUFvQyxPQUFPLE9BQVAsRUFBcEMsR0FBdUQsT0FBTyxNQUFQLENBQWMsVUFBZCxDQUF2RCxHQUNBLElBREEsQ0FkSztBQWdCUCxVQUFNLFdBQVcsS0FBSyxjQUFMLENBQW9CLFNBQXBCLENBQVgsQ0FoQkM7QUFpQlAsVUFBTSxnQkFBZ0IsRUFBRSxNQUFGLEVBQU0sb0JBQU4sRUFBaUIsVUFBakIsRUFBdUIsWUFBdkIsRUFBOEIsa0JBQTlCLEVBQXdDLFlBQXhDLEVBQStDLGtCQUEvQyxFQUFoQixDQWpCQztBQWtCUCxhQUNFOztRQUFrQixhQUFsQjtRQUNJLEtBQUssV0FBTCwwQkFBbUIsUUFBSSwwQkFBZSxNQUF0QyxDQURKO09BREYsQ0FsQk87OztTQXpLVTtFQUFrQixnQkFBTSxTQUFOOztrQkFBbEI7OztBQW1NckIsVUFBVSxTQUFWLEdBQXNCO0FBQ3BCLE1BQUksaUJBQVUsTUFBVjtBQUNKLGFBQVcsaUJBQVUsTUFBVjtBQUNYLFNBQU8saUJBQVUsTUFBVjtBQUNQLFlBQVUsaUJBQVUsSUFBVjtBQUNWLFNBQU8saUJBQVUsU0FBVixDQUFvQixDQUN6QixpQkFBVSxJQUFWLEVBQ0EsaUJBQVUsTUFBVixFQUNBLGlCQUFVLEtBQVYsQ0FBZ0I7QUFDZCxhQUFTLGlCQUFVLE1BQVY7R0FEWCxDQUh5QixDQUFwQixDQUFQO0FBT0EsYUFBVyxpQkFBVSxNQUFWO0FBQ1gsUUFBTSxpQkFBVSxNQUFWO0FBQ04sU0FBTyxpQkFBVSxNQUFWO0FBQ1AsYUFBVyxpQkFBVSxJQUFWO0FBQ1gsVUFBUSxpQkFBVSxJQUFWO0FBQ1IsZ0JBQWMsaUJBQVUsTUFBVjtBQUNkLGlCQUFlLGlCQUFVLElBQVY7QUFDZixjQUFZLGlCQUFVLE1BQVY7QUFDWixZQUFVLGlCQUFVLElBQVY7QUFDVixpQkFBZSxpQkFBVSxJQUFWO0FBQ2YsY0FBWSxpQkFBVSxJQUFWO0NBdEJkOztBQXlCQSxVQUFVLFlBQVYsR0FBeUI7QUFDdkIsY0FBWSxHQUFaO0NBREY7O0FBSUEsVUFBVSxhQUFWLEdBQTBCLElBQTFCIiwiZmlsZSI6IkRhdGVJbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkJztcclxuaW1wb3J0IEZvcm1FbGVtZW50IGZyb20gJy4vRm9ybUVsZW1lbnQnO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9JbnB1dCc7XHJcbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbic7XHJcbmltcG9ydCBEYXRlcGlja2VyIGZyb20gJy4vRGF0ZXBpY2tlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpZDogYGZvcm0tZWxlbWVudC0ke3V1aWQoKX1gLFxyXG4gICAgICBvcGVuZWQ6IChwcm9wcy5kZWZhdWx0T3BlbmVkIHx8IGZhbHNlKSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUpIHtcclxuICAgIGlmICh0aGlzLnByb3BzLm9uVmFsdWVDaGFuZ2UgJiYgcHJldlN0YXRlLnZhbHVlICE9PSB0aGlzLnN0YXRlLnZhbHVlKSB7XHJcbiAgICAgIHRoaXMucHJvcHMub25WYWx1ZUNoYW5nZSh0aGlzLnN0YXRlLnZhbHVlLCBwcmV2U3RhdGUudmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25EYXRlSWNvbkNsaWNrKCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2hvd0RhdGVwaWNrZXIoKTtcclxuICAgIH0sIDEwKTtcclxuICB9XHJcblxyXG4gIG9uSW5wdXRLZXlEb3duKGUpIHtcclxuICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7IC8vIHJldHVybiBrZXlcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICB0aGlzLnNldFZhbHVlRnJvbUlucHV0KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgaWYgKHRoaXMucHJvcHMub25Db21wbGV0ZSkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKCk7XHJcbiAgICAgICAgfSwgMTApO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gNDApIHsgLy8gZG93biBrZXlcclxuICAgICAgdGhpcy5zaG93RGF0ZXBpY2tlcigpO1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wcm9wcy5vbktleURvd24pIHtcclxuICAgICAgdGhpcy5wcm9wcy5vbktleURvd24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbklucHV0Q2hhbmdlKGUpIHtcclxuICAgIGNvbnN0IGlucHV0VmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpbnB1dFZhbHVlIH0pO1xyXG4gICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcclxuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZShlLCBpbnB1dFZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uSW5wdXRCbHVyKGUpIHtcclxuICAgIHRoaXMuc2V0VmFsdWVGcm9tSW5wdXQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICghdGhpcy5pc0ZvY3VzZWRJbkNvbXBvbmVudCgpKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25CbHVyKSB7XHJcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQmx1cigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNvbXBsZXRlKSB7XHJcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sIDEwKTtcclxuICB9XHJcblxyXG4gIG9uRGF0ZXBpY2tlclNlbGVjdCh2YWx1ZSkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlLCBpbnB1dFZhbHVlOiB1bmRlZmluZWQgfSk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XHJcbiAgICAgIGNvbnN0IGlucHV0RWwgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnMuaW5wdXQpO1xyXG4gICAgICBpZiAoaW5wdXRFbCkge1xyXG4gICAgICAgIGlucHV0RWwuZm9jdXMoKTtcclxuICAgICAgICBpbnB1dEVsLnNlbGVjdCgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcclxuICAgICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUoKTtcclxuICAgICAgfVxyXG4gICAgfSwgMjAwKTtcclxuICB9XHJcblxyXG4gIG9uRGF0ZXBpY2tlckJsdXIoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAoIXRoaXMuaXNGb2N1c2VkSW5Db21wb25lbnQoKSkge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQmx1cikge1xyXG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkJsdXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25Db21wbGV0ZSkge1xyXG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LCAxMCk7XHJcbiAgfVxyXG5cclxuICBvbkRhdGVwaWNrZXJDbG9zZSgpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xyXG4gICAgY29uc3QgaW5wdXRFbCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy5pbnB1dCk7XHJcbiAgICBpZiAoaW5wdXRFbCkge1xyXG4gICAgICBpbnB1dEVsLmZvY3VzKCk7XHJcbiAgICAgIGlucHV0RWwuc2VsZWN0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRWYWx1ZUZyb21JbnB1dChpbnB1dFZhbHVlKSB7XHJcbiAgICBsZXQgdmFsdWUgPSB0aGlzLnN0YXRlLnZhbHVlO1xyXG4gICAgaWYgKCFpbnB1dFZhbHVlKSB7XHJcbiAgICAgIHZhbHVlID0gJyc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YWx1ZSA9IG1vbWVudChpbnB1dFZhbHVlLCB0aGlzLnByb3BzLmRhdGVGb3JtYXQpO1xyXG4gICAgICBpZiAodmFsdWUuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YWx1ZSA9ICcnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWUsIGlucHV0VmFsdWU6IHVuZGVmaW5lZCB9KTtcclxuICB9XHJcblxyXG4gIGlzRm9jdXNlZEluQ29tcG9uZW50KCkge1xyXG4gICAgY29uc3Qgcm9vdEVsID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XHJcbiAgICBsZXQgdGFyZ2V0RWwgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xyXG4gICAgd2hpbGUgKHRhcmdldEVsICYmIHRhcmdldEVsICE9PSByb290RWwpIHtcclxuICAgICAgdGFyZ2V0RWwgPSB0YXJnZXRFbC5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICEhdGFyZ2V0RWw7XHJcbiAgfVxyXG5cclxuICBzaG93RGF0ZXBpY2tlcigpIHtcclxuICAgIGxldCB2YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWU7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMuc3RhdGUuaW5wdXRWYWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgdmFsdWUgPSBtb21lbnQodGhpcy5zdGF0ZS5pbnB1dFZhbHVlLCB0aGlzLnByb3BzLmRhdGVGb3JtYXQpO1xyXG4gICAgICBpZiAodmFsdWUuaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YWx1ZSA9IHRoaXMuc3RhdGUudmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IHRydWUsIHZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVySW5wdXQoeyBpbnB1dFZhbHVlLCAuLi5wcm9wcyB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1pbnB1dC1oYXMtaWNvbiBzbGRzLWlucHV0LWhhcy1pY29uLS1yaWdodCc+XHJcbiAgICAgICAgPElucHV0IHJlZj0naW5wdXQnIHZhbHVlPXsgaW5wdXRWYWx1ZSB9IHsgLi4ucHJvcHMgfVxyXG4gICAgICAgICAgb25LZXlEb3duPXsgdGhpcy5vbklucHV0S2V5RG93bi5iaW5kKHRoaXMpIH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vbklucHV0Q2hhbmdlLmJpbmQodGhpcykgfVxyXG4gICAgICAgICAgb25CbHVyPXsgdGhpcy5vbklucHV0Qmx1ci5iaW5kKHRoaXMpIH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxJY29uIGljb249J2V2ZW50JyBjbGFzc05hbWU9J3NsZHMtaW5wdXRfX2ljb24nIHN0eWxlPXsgeyBjdXJzb3I6ICdwb2ludGVyJyB9IH1cclxuICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLm9uRGF0ZUljb25DbGljay5iaW5kKHRoaXMpIH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJEcm9wZG93bihkYXRlVmFsdWUpIHtcclxuICAgIGNvbnN0IGRhdGVwaWNrZXJDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcclxuICAgICAgJ3NsZHMtZHJvcGRvd24nLFxyXG4gICAgICAnc2xkcy1kcm9wZG93bi0tbGVmdCdcclxuICAgICk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0aGlzLnN0YXRlLm9wZW5lZCA/XHJcbiAgICAgIDxEYXRlcGlja2VyIGNsYXNzTmFtZT17IGRhdGVwaWNrZXJDbGFzc05hbWVzIH0gc2VsZWN0ZWREYXRlPXsgZGF0ZVZhbHVlIH0gYXV0b0ZvY3VzXHJcbiAgICAgICAgb25TZWxlY3Q9eyB0aGlzLm9uRGF0ZXBpY2tlclNlbGVjdC5iaW5kKHRoaXMpIH1cclxuICAgICAgICBvbkJsdXI9eyB0aGlzLm9uRGF0ZXBpY2tlckJsdXIuYmluZCh0aGlzKSB9XHJcbiAgICAgICAgb25DbG9zZT17IHRoaXMub25EYXRlcGlja2VyQ2xvc2UuYmluZCh0aGlzKSB9XHJcbiAgICAgIC8+IDpcclxuICAgICAgPGRpdiAvPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IGlkID0gdGhpcy5wcm9wcy5pZCB8fCB0aGlzLnN0YXRlLmlkO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICB0b3RhbENvbHMsIGNvbHMsIGxhYmVsLCByZXF1aXJlZCwgZXJyb3IsXHJcbiAgICAgIGRlZmF1bHRWYWx1ZSwgdmFsdWUsIGRhdGVGb3JtYXQsXHJcbiAgICAgIG9uQ2hhbmdlLCBvbktleURvd24sIG9uQmx1ciwgLi4ucHJvcHMsXHJcbiAgICB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IGRhdGVWYWx1ZSA9XHJcbiAgICAgIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgPyB2YWx1ZSA6XHJcbiAgICAgIHR5cGVvZiB0aGlzLnN0YXRlLnZhbHVlICE9PSAndW5kZWZpbmVkJyA/IHRoaXMuc3RhdGUudmFsdWUgOlxyXG4gICAgICBkZWZhdWx0VmFsdWU7XHJcbiAgICBjb25zdCBtdmFsdWUgPSBtb21lbnQoZGF0ZVZhbHVlLCAnWVlZWS1NTS1ERCcpO1xyXG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9XHJcbiAgICAgIHR5cGVvZiB0aGlzLnN0YXRlLmlucHV0VmFsdWUgIT09ICd1bmRlZmluZWQnID8gdGhpcy5zdGF0ZS5pbnB1dFZhbHVlIDpcclxuICAgICAgdHlwZW9mIGRhdGVWYWx1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbXZhbHVlLmlzVmFsaWQoKSA/IG12YWx1ZS5mb3JtYXQoZGF0ZUZvcm1hdCkgOlxyXG4gICAgICBudWxsO1xyXG4gICAgY29uc3QgZHJvcGRvd24gPSB0aGlzLnJlbmRlckRyb3Bkb3duKGRhdGVWYWx1ZSk7XHJcbiAgICBjb25zdCBmb3JtRWxlbVByb3BzID0geyBpZCwgdG90YWxDb2xzLCBjb2xzLCBsYWJlbCwgcmVxdWlyZWQsIGVycm9yLCBkcm9wZG93biB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEZvcm1FbGVtZW50IHsgLi4uZm9ybUVsZW1Qcm9wcyB9PlxyXG4gICAgICAgIHsgdGhpcy5yZW5kZXJJbnB1dCh7IGlkLCBpbnB1dFZhbHVlLCAuLi5wcm9wcyB9KSB9XHJcbiAgICAgIDwvRm9ybUVsZW1lbnQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuRGF0ZUlucHV0LnByb3BUeXBlcyA9IHtcclxuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gIGVycm9yOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcclxuICAgIFByb3BUeXBlcy5ib29sLFxyXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgIG1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB9KSxcclxuICBdKSxcclxuICB0b3RhbENvbHM6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgY29sczogUHJvcFR5cGVzLm51bWJlcixcclxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBvbktleURvd246IFByb3BUeXBlcy5mdW5jLFxyXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGRlZmF1bHRPcGVuZWQ6IFByb3BUeXBlcy5ib29sLFxyXG4gIGRhdGVGb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gIG9uVmFsdWVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gIG9uQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLFxyXG59O1xyXG5cclxuRGF0ZUlucHV0LmRlZmF1bHRQcm9wcyA9IHtcclxuICBkYXRlRm9ybWF0OiAnTCcsXHJcbn07XHJcblxyXG5EYXRlSW5wdXQuaXNGb3JtRWxlbWVudCA9IHRydWU7XHJcbiJdfQ==