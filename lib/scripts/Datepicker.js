'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Picklist = require('./Picklist');

var _Picklist2 = _interopRequireDefault(_Picklist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createCalendarObject(date) {
  var d = (0, _moment2.default)(date, 'YYYY-MM-DD');
  if (!d.isValid()) {
    d = (0, _moment2.default)();
  }
  var year = d.year();
  var month = d.month();
  var first = (0, _moment2.default)(d).startOf('month').startOf('week');
  var last = (0, _moment2.default)(d).endOf('month').endOf('week');
  var weeks = [];
  var days = [];
  for (var dd = first; dd.isBefore(last); dd = dd.add(1, 'd')) {
    days.push({ year: dd.year(), month: dd.month(), date: dd.date(), value: dd.format('YYYY-MM-DD') });
    if (days.length === 7) {
      weeks.push(days);
      days = [];
    }
  }
  return { year: year, month: month, weeks: weeks };
}

function cancelEvent(e) {
  e.preventDefault();
  e.stopPropagation();
}

var Datepicker = function (_React$Component) {
  (0, _inherits3.default)(Datepicker, _React$Component);

  function Datepicker(props) {
    (0, _classCallCheck3.default)(this, Datepicker);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Datepicker).call(this, props));

    _this.state = {};
    return _this;
  }

  (0, _createClass3.default)(Datepicker, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.autoFocus) {
        var targetDate = this.props.selectedDate || (0, _moment2.default)().format('YYYY-MM-DD');
        this.focusDate(targetDate);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.state.focusDate && (this.state.targetDate || this.props.selectedDate)) {
        this.focusDate(this.state.targetDate || this.props.selectedDate);
        /* eslint-disable react/no-did-update-set-state */
        this.setState({ focusDate: false });
      }
    }
  }, {
    key: 'onDateKeyDown',
    value: function onDateKeyDown(date, e) {
      var targetDate = this.state.targetDate || this.props.selectedDate;
      if (e.keyCode === 13 || e.keyCode === 32) {
        // return / space
        this.onDateClick(date);
        e.preventDefault();
        e.stopPropagation();
      } else if (e.keyCode >= 37 && e.keyCode <= 40) {
        // cursor key
        if (e.keyCode === 37) {
          targetDate = (0, _moment2.default)(targetDate).add(-1, e.shiftKey ? 'months' : 'days');
        } else if (e.keyCode === 39) {
          // right arrow key
          targetDate = (0, _moment2.default)(targetDate).add(1, e.shiftKey ? 'months' : 'days');
        } else if (e.keyCode === 38) {
          // up arrow key
          targetDate = (0, _moment2.default)(targetDate).add(-1, e.shiftKey ? 'years' : 'weeks');
        } else if (e.keyCode === 40) {
          // down arrow key
          targetDate = (0, _moment2.default)(targetDate).add(1, e.shiftKey ? 'years' : 'weeks');
        }
        targetDate = targetDate.format('YYYY-MM-DD');
        this.setState({ targetDate: targetDate, focusDate: true });
        e.preventDefault();
        e.stopPropagation();
      }
    }
  }, {
    key: 'onDateClick',
    value: function onDateClick(date) {
      if (this.props.onSelect) {
        this.props.onSelect(date);
      }
    }
  }, {
    key: 'onDateFocus',
    value: function onDateFocus(date) {
      if (this.state.targetDate !== date) {
        this.setState({ targetDate: date });
      }
    }
  }, {
    key: 'onYearChange',
    value: function onYearChange(item) {
      var targetDate = this.state.targetDate || this.props.selectedDate;
      targetDate = (0, _moment2.default)(targetDate).year(item.value).format('YYYY-MM-DD');
      this.setState({ targetDate: targetDate });
    }
  }, {
    key: 'onMonthChange',
    value: function onMonthChange(month) {
      var targetDate = this.state.targetDate || this.props.selectedDate;
      targetDate = (0, _moment2.default)(targetDate).add(month, 'months').format('YYYY-MM-DD');
      this.setState({ targetDate: targetDate });
    }
  }, {
    key: 'onBlur',
    value: function onBlur(e) {
      var _this2 = this;

      setTimeout(function () {
        if (!_this2.isFocusedInComponent()) {
          if (_this2.props.onBlur) {
            _this2.props.onBlur(e);
          }
        }
      }, 10);
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(e) {
      if (e.keyCode === 27) {
        // ESC
        if (this.props.onClose) {
          this.props.onClose();
        }
      }
    }
  }, {
    key: 'focusDate',
    value: function focusDate(date) {
      var el = _reactDom2.default.findDOMNode(this.refs.month);
      var dateEl = el.querySelector('.slds-day[data-date-value="' + date + '"]');
      if (dateEl) {
        dateEl.focus();
      }
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
    key: 'renderFilter',
    value: function renderFilter(cal) {
      return _react2.default.createElement(
        'div',
        { className: 'slds-datepicker__filter slds-grid' },
        _react2.default.createElement(
          'div',
          { className: 'slds-datepicker__filter--month slds-grid slds-grid--align-spread slds-size--2-of-3' },
          _react2.default.createElement(
            'div',
            { className: 'slds-align-middle' },
            _react2.default.createElement(_Button2.default, { className: 'slds-align-middle', type: 'icon-container', icon: 'left', size: 'small', alt: 'Previous Month',
              onClick: this.onMonthChange.bind(this, -1)
            })
          ),
          _react2.default.createElement(
            'h2',
            { className: 'slds-align-middle' },
            _moment2.default.monthsShort()[cal.month]
          ),
          _react2.default.createElement(
            'div',
            { className: 'slds-align-middle' },
            _react2.default.createElement(_Button2.default, { className: 'slds-align-middle', type: 'icon-container', icon: 'right', size: 'small', alt: 'Next Month',
              onClick: this.onMonthChange.bind(this, 1)
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'slds-size--1-of-3' },
          _react2.default.createElement(
            _Picklist2.default,
            { className: 'slds-picklist--fluid slds-shrink-none', value: cal.year,
              onSelect: this.onYearChange.bind(this)
            },
            new Array(11).join('_').split('_').map(function (a, i) {
              var year = cal.year + i - 5;
              return _react2.default.createElement(_Picklist.PicklistItem, { key: year, label: year, value: year });
            })
          )
        )
      );
    }
  }, {
    key: 'renderMonth',
    value: function renderMonth(cal, selectedDate, today) {
      var _this3 = this;

      return _react2.default.createElement(
        'table',
        { className: 'datepicker__month', role: 'grid', 'aria-labelledby': 'month', ref: 'month' },
        _react2.default.createElement(
          'thead',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _moment2.default.weekdaysMin().map(function (wd, i) {
              return _react2.default.createElement(
                'th',
                { key: i },
                _react2.default.createElement(
                  'abbr',
                  { title: _moment2.default.weekdays(i) },
                  wd
                )
              );
            })
          )
        ),
        _react2.default.createElement(
          'tbody',
          null,
          cal.weeks.map(function (days, i) {
            return _react2.default.createElement(
              'tr',
              { key: i },
              days.map(_this3.renderDate.bind(_this3, cal, selectedDate, today))
            );
          })
        )
      );
    }
  }, {
    key: 'renderDate',
    value: function renderDate(cal, selectedDate, today, d, i) {
      var enabled = d.year === cal.year && d.month === cal.month;
      var selected = d.value === selectedDate;
      var isToday = d.value === today;
      var dateClassName = (0, _classnames2.default)({
        'slds-disabled-text': !enabled,
        'slds-is-selected': selected,
        'slds-is-today': isToday
      });
      return _react2.default.createElement(
        'td',
        { className: dateClassName, key: i, headers: _moment2.default.weekdays(i),
          role: 'gridcell', 'aria-disabled': !enabled, 'aria-selected': selected
        },
        _react2.default.createElement(
          'span',
          { className: 'slds-day', tabIndex: enabled ? 0 : -1,
            onClick: enabled ? this.onDateClick.bind(this, d.value) : null,
            onKeyDown: enabled ? this.onDateKeyDown.bind(this, d.value) : null,
            onFocus: enabled ? this.onDateFocus.bind(this, d.value) : cancelEvent,
            'data-date-value': d.value
          },
          d.date
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var selectedDate = _props.selectedDate;
      var props = (0, _objectWithoutProperties3.default)(_props, ['className', 'selectedDate']);

      var today = (0, _moment2.default)().format('YYYY-MM-DD');
      var targetDate = this.state.targetDate || selectedDate;
      var cal = createCalendarObject(targetDate);
      var datepickerClassNames = (0, _classnames2.default)('slds-datepicker', className);
      return _react2.default.createElement(
        'div',
        { className: datepickerClassNames, ref: 'datepicker', 'aria-hidden': false,
          onBlur: this.onBlur.bind(this), onKeyDown: this.onKeyDown.bind(this)
        },
        this.renderFilter(cal),
        this.renderMonth(cal, selectedDate, today)
      );
    }
  }]);
  return Datepicker;
}(_react2.default.Component);

exports.default = Datepicker;


Datepicker.propTypes = {
  className: _react.PropTypes.string,
  selectedDate: _react.PropTypes.string,
  autoFocus: _react.PropTypes.bool,
  onSelect: _react.PropTypes.func,
  onBlur: _react.PropTypes.func,
  onClose: _react.PropTypes.func
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0RhdGVwaWNrZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxTQUFTLG9CQUFULENBQThCLElBQTlCLEVBQW9DO0FBQ2xDLE1BQUksSUFBSSxzQkFBTyxJQUFQLEVBQWEsWUFBYixDQUFKLENBRDhCO0FBRWxDLE1BQUksQ0FBQyxFQUFFLE9BQUYsRUFBRCxFQUFjO0FBQ2hCLFFBQUksdUJBQUosQ0FEZ0I7R0FBbEI7QUFHQSxNQUFNLE9BQU8sRUFBRSxJQUFGLEVBQVAsQ0FMNEI7QUFNbEMsTUFBTSxRQUFRLEVBQUUsS0FBRixFQUFSLENBTjRCO0FBT2xDLE1BQU0sUUFBUSxzQkFBTyxDQUFQLEVBQVUsT0FBVixDQUFrQixPQUFsQixFQUEyQixPQUEzQixDQUFtQyxNQUFuQyxDQUFSLENBUDRCO0FBUWxDLE1BQU0sT0FBTyxzQkFBTyxDQUFQLEVBQVUsS0FBVixDQUFnQixPQUFoQixFQUF5QixLQUF6QixDQUErQixNQUEvQixDQUFQLENBUjRCO0FBU2xDLE1BQU0sUUFBUSxFQUFSLENBVDRCO0FBVWxDLE1BQUksT0FBTyxFQUFQLENBVjhCO0FBV2xDLE9BQUssSUFBSSxLQUFLLEtBQUwsRUFBWSxHQUFHLFFBQUgsQ0FBWSxJQUFaLENBQXJCLEVBQXdDLEtBQUssR0FBRyxHQUFILENBQU8sQ0FBUCxFQUFVLEdBQVYsQ0FBTCxFQUFxQjtBQUMzRCxTQUFLLElBQUwsQ0FBVSxFQUFFLE1BQU0sR0FBRyxJQUFILEVBQU4sRUFBaUIsT0FBTyxHQUFHLEtBQUgsRUFBUCxFQUFtQixNQUFNLEdBQUcsSUFBSCxFQUFOLEVBQWlCLE9BQU8sR0FBRyxNQUFILENBQVUsWUFBVixDQUFQLEVBQWpFLEVBRDJEO0FBRTNELFFBQUksS0FBSyxNQUFMLEtBQWdCLENBQWhCLEVBQW1CO0FB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O1VBQ1ksbUNBRFo7VUFDNkIsc0ZBRDdCOztBQUVQLFVBQU0sUUFBUSx3QkFBUyxNQUFULENBQWdCLFlBQWhCLENBQVIsQ0FGQztBQUdQLFVBQU0sYUFBYSxLQUFLLEtBQUwsQ0FBVyxVQUFYLElBQXlCLFlBQXpCLENBSFo7QUFJUCxVQUFNLE1BQU0scUJBQXFCLFVBQXJCLENBQU4sQ0FKQztBQUtQLFVBQU0sdUJBQXVCLDBCQUFXLGlCQUFYLEVBQThCLFNBQTlCLENBQXZCLENBTEM7QUFNUCxhQUNFOztVQUFLLFdBQVksb0JBQVosRUFBbUMsS0FBSSxZQUFKLEVBQWlCLGVBQWMsS0FBZDtBQUN2RCxrQkFBUyxLQUFLLE1BQUwsQ0FBWSxJQUFaLENBQWlCLElBQWpCLENBQVQsRUFBa0MsV0FBWSxLQUFLLFNBQUwsQ0FBZSxJQUFmLENBQW9CLElBQXBCLENBQVo7U0FEcEM7UUFHSSxLQUFLLFlBQUwsQ0FBa0IsR0FBbEIsQ0FISjtRQUlJLEtBQUssV0FBTCxDQUFpQixHQUFqQixFQUFzQixZQUF0QixFQUFvQyxLQUFwQyxDQUpKO09BREYsQ0FOTzs7O1NBekxVO0VBQW1CLGdCQUFNLFNBQU47O2tCQUFuQjs7O0FBMk1yQixXQUFXLFNBQVgsR0FBdUI7QUFDckIsYUFBVyxpQkFBVSxNQUFWO0FBQ1gsZ0JBQWMsaUJBQVUsTUFBVjtBQUNkLGFBQVcsaUJBQVUsSUFBVjtBQUNYLFlBQVUsaUJBQVUsSUFBVjtBQUNWLFVBQVEsaUJBQVUsSUFBVjtBQUNSLFdBQVMsaUJBQVUsSUFBVjtDQU5YIiwiZmlsZSI6IkRhdGVwaWNrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbic7XHJcbmltcG9ydCB7IGRlZmF1bHQgYXMgUGlja2xpc3QsIFBpY2tsaXN0SXRlbSB9IGZyb20gJy4vUGlja2xpc3QnO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2FsZW5kYXJPYmplY3QoZGF0ZSkge1xyXG4gIGxldCBkID0gbW9tZW50KGRhdGUsICdZWVlZLU1NLUREJyk7XHJcbiAgaWYgKCFkLmlzVmFsaWQoKSkge1xyXG4gICAgZCA9IG1vbWVudCgpO1xyXG4gIH1cclxuICBjb25zdCB5ZWFyID0gZC55ZWFyKCk7XHJcbiAgY29uc3QgbW9udGggPSBkLm1vbnRoKCk7XHJcbiAgY29uc3QgZmlyc3QgPSBtb21lbnQoZCkuc3RhcnRPZignbW9udGgnKS5zdGFydE9mKCd3ZWVrJyk7XHJcbiAgY29uc3QgbGFzdCA9IG1vbWVudChkKS5lbmRPZignbW9udGgnKS5lbmRPZignd2VlaycpO1xyXG4gIGNvbnN0IHdlZWtzID0gW107XHJcbiAgbGV0IGRheXMgPSBbXTtcclxuICBmb3IgKGxldCBkZCA9IGZpcnN0OyBkZC5pc0JlZm9yZShsYXN0KTsgZGQgPSBkZC5hZGQoMSwgJ2QnKSkge1xyXG4gICAgZGF5cy5wdXNoKHsgeWVhcjogZGQueWVhcigpLCBtb250aDogZGQubW9udGgoKSwgZGF0ZTogZGQuZGF0ZSgpLCB2YWx1ZTogZGQuZm9ybWF0KCdZWVlZLU1NLUREJykgfSk7XHJcbiAgICBpZiAoZGF5cy5sZW5ndGggPT09IDcpIHtcclxuICAgICAgd2Vla3MucHVzaChkYXlzKTtcclxuICAgICAgZGF5cyA9IFtdO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4geyB5ZWFyLCBtb250aCwgd2Vla3MgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2FuY2VsRXZlbnQoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlcGlja2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5hdXRvRm9jdXMpIHtcclxuICAgICAgY29uc3QgdGFyZ2V0RGF0ZSA9IHRoaXMucHJvcHMuc2VsZWN0ZWREYXRlIHx8IG1vbWVudCgpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xyXG4gICAgICB0aGlzLmZvY3VzRGF0ZSh0YXJnZXREYXRlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmZvY3VzRGF0ZSAmJiAodGhpcy5zdGF0ZS50YXJnZXREYXRlIHx8IHRoaXMucHJvcHMuc2VsZWN0ZWREYXRlKSkge1xyXG4gICAgICB0aGlzLmZvY3VzRGF0ZSh0aGlzLnN0YXRlLnRhcmdldERhdGUgfHwgdGhpcy5wcm9wcy5zZWxlY3RlZERhdGUpO1xyXG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby1kaWQtdXBkYXRlLXNldC1zdGF0ZSAqL1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXNEYXRlOiBmYWxzZSB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uRGF0ZUtleURvd24oZGF0ZSwgZSkge1xyXG4gICAgbGV0IHRhcmdldERhdGUgPSB0aGlzLnN0YXRlLnRhcmdldERhdGUgfHwgdGhpcy5wcm9wcy5zZWxlY3RlZERhdGU7XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMyB8fCBlLmtleUNvZGUgPT09IDMyKSB7IC8vIHJldHVybiAvIHNwYWNlXHJcbiAgICAgIHRoaXMub25EYXRlQ2xpY2soZGF0ZSk7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID49IDM3ICYmIGUua2V5Q29kZSA8PSA0MCkgeyAvLyBjdXJzb3Iga2V5XHJcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IDM3KSB7XHJcbiAgICAgICAgdGFyZ2V0RGF0ZSA9IG1vbWVudCh0YXJnZXREYXRlKS5hZGQoLTEsIGUuc2hpZnRLZXkgPyAnbW9udGhzJyA6ICdkYXlzJyk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAzOSkgeyAvLyByaWdodCBhcnJvdyBrZXlcclxuICAgICAgICB0YXJnZXREYXRlID0gbW9tZW50KHRhcmdldERhdGUpLmFkZCgxLCBlLnNoaWZ0S2V5ID8gJ21vbnRocycgOiAnZGF5cycpO1xyXG4gICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMzgpIHsgLy8gdXAgYXJyb3cga2V5XHJcbiAgICAgICAgdGFyZ2V0RGF0ZSA9IG1vbWVudCh0YXJnZXREYXRlKS5hZGQoLTEsIGUuc2hpZnRLZXkgPyAneWVhcnMnIDogJ3dlZWtzJyk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSA0MCkgeyAvLyBkb3duIGFycm93IGtleVxyXG4gICAgICAgIHRhcmdldERhdGUgPSBtb21lbnQodGFyZ2V0RGF0ZSkuYWRkKDEsIGUuc2hpZnRLZXkgPyAneWVhcnMnIDogJ3dlZWtzJyk7XHJcbiAgICAgIH1cclxuICAgICAgdGFyZ2V0RGF0ZSA9IHRhcmdldERhdGUuZm9ybWF0KCdZWVlZLU1NLUREJyk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0YXJnZXREYXRlLCBmb2N1c0RhdGU6IHRydWUgfSk7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uRGF0ZUNsaWNrKGRhdGUpIHtcclxuICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XHJcbiAgICAgIHRoaXMucHJvcHMub25TZWxlY3QoZGF0ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkRhdGVGb2N1cyhkYXRlKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS50YXJnZXREYXRlICE9PSBkYXRlKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB0YXJnZXREYXRlOiBkYXRlIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25ZZWFyQ2hhbmdlKGl0ZW0pIHtcclxuICAgIGxldCB0YXJnZXREYXRlID0gdGhpcy5zdGF0ZS50YXJnZXREYXRlIHx8IHRoaXMucHJvcHMuc2VsZWN0ZWREYXRlO1xyXG4gICAgdGFyZ2V0RGF0ZSA9IG1vbWVudCh0YXJnZXREYXRlKS55ZWFyKGl0ZW0udmFsdWUpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRhcmdldERhdGUgfSk7XHJcbiAgfVxyXG5cclxuICBvbk1vbnRoQ2hhbmdlKG1vbnRoKSB7XHJcbiAgICBsZXQgdGFyZ2V0RGF0ZSA9IHRoaXMuc3RhdGUudGFyZ2V0RGF0ZSB8fCB0aGlzLnByb3BzLnNlbGVjdGVkRGF0ZTtcclxuICAgIHRhcmdldERhdGUgPSBtb21lbnQodGFyZ2V0RGF0ZSkuYWRkKG1vbnRoLCAnbW9udGhzJykuZm9ybWF0KCdZWVlZLU1NLUREJyk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgdGFyZ2V0RGF0ZSB9KTtcclxuICB9XHJcblxyXG4gIG9uQmx1cihlKSB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKCF0aGlzLmlzRm9jdXNlZEluQ29tcG9uZW50KCkpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcclxuICAgICAgICAgIHRoaXMucHJvcHMub25CbHVyKGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSwgMTApO1xyXG4gIH1cclxuXHJcbiAgb25LZXlEb3duKGUpIHtcclxuICAgIGlmIChlLmtleUNvZGUgPT09IDI3KSB7IC8vIEVTQ1xyXG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkNsb3NlKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNsb3NlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvY3VzRGF0ZShkYXRlKSB7XHJcbiAgICBjb25zdCBlbCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy5tb250aCk7XHJcbiAgICBjb25zdCBkYXRlRWwgPSBlbC5xdWVyeVNlbGVjdG9yKGAuc2xkcy1kYXlbZGF0YS1kYXRlLXZhbHVlPVwiJHtkYXRlfVwiXWApO1xyXG4gICAgaWYgKGRhdGVFbCkge1xyXG4gICAgICBkYXRlRWwuZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzRm9jdXNlZEluQ29tcG9uZW50KCkge1xyXG4gICAgY29uc3Qgcm9vdEVsID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XHJcbiAgICBsZXQgdGFyZ2V0RWwgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xyXG4gICAgd2hpbGUgKHRhcmdldEVsICYmIHRhcmdldEVsICE9PSByb290RWwpIHtcclxuICAgICAgdGFyZ2V0RWwgPSB0YXJnZXRFbC5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICEhdGFyZ2V0RWw7XHJcbiAgfVxyXG5cclxuICByZW5kZXJGaWx0ZXIoY2FsKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1kYXRlcGlja2VyX19maWx0ZXIgc2xkcy1ncmlkJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1kYXRlcGlja2VyX19maWx0ZXItLW1vbnRoIHNsZHMtZ3JpZCBzbGRzLWdyaWQtLWFsaWduLXNwcmVhZCBzbGRzLXNpemUtLTItb2YtMyc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1hbGlnbi1taWRkbGUnPlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT0nc2xkcy1hbGlnbi1taWRkbGUnIHR5cGU9J2ljb24tY29udGFpbmVyJyBpY29uPSdsZWZ0JyBzaXplPSdzbWFsbCcgYWx0PSdQcmV2aW91cyBNb250aCdcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsgdGhpcy5vbk1vbnRoQ2hhbmdlLmJpbmQodGhpcywgLTEpIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT0nc2xkcy1hbGlnbi1taWRkbGUnPnsgbW9tZW50Lm1vbnRoc1Nob3J0KClbY2FsLm1vbnRoXSB9PC9oMj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLWFsaWduLW1pZGRsZSc+XHJcbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPSdzbGRzLWFsaWduLW1pZGRsZScgdHlwZT0naWNvbi1jb250YWluZXInIGljb249J3JpZ2h0JyBzaXplPSdzbWFsbCcgYWx0PSdOZXh0IE1vbnRoJ1xyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLm9uTW9udGhDaGFuZ2UuYmluZCh0aGlzLCAxKSB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1zaXplLS0xLW9mLTMnPlxyXG4gICAgICAgICAgPFBpY2tsaXN0IGNsYXNzTmFtZT0nc2xkcy1waWNrbGlzdC0tZmx1aWQgc2xkcy1zaHJpbmstbm9uZScgdmFsdWU9eyBjYWwueWVhciB9XHJcbiAgICAgICAgICAgIG9uU2VsZWN0PXsgdGhpcy5vblllYXJDaGFuZ2UuYmluZCh0aGlzKSB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBuZXcgQXJyYXkoMTEpLmpvaW4oJ18nKS5zcGxpdCgnXycpLm1hcCgoYSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeWVhciA9IGNhbC55ZWFyICsgaSAtIDU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPFBpY2tsaXN0SXRlbSBrZXk9eyB5ZWFyIH0gbGFiZWw9eyB5ZWFyIH0gdmFsdWU9eyB5ZWFyIH0gLz47XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9QaWNrbGlzdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyTW9udGgoY2FsLCBzZWxlY3RlZERhdGUsIHRvZGF5KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8dGFibGUgY2xhc3NOYW1lPSdkYXRlcGlja2VyX19tb250aCcgcm9sZT0nZ3JpZCcgYXJpYS1sYWJlbGxlZGJ5PSdtb250aCcgcmVmPSdtb250aCc+XHJcbiAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbW9tZW50LndlZWtkYXlzTWluKCkubWFwKCh3ZCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgPHRoIGtleT17IGkgfT5cclxuICAgICAgICAgICAgICAgICAgICA8YWJiciB0aXRsZT17IG1vbWVudC53ZWVrZGF5cyhpKSB9Pnsgd2QgfTwvYWJicj5cclxuICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgY2FsLndlZWtzLm1hcCgoZGF5cywgaSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiA8dHIga2V5PXsgaSB9PnsgZGF5cy5tYXAodGhpcy5yZW5kZXJEYXRlLmJpbmQodGhpcywgY2FsLCBzZWxlY3RlZERhdGUsIHRvZGF5KSkgfTwvdHI+O1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyRGF0ZShjYWwsIHNlbGVjdGVkRGF0ZSwgdG9kYXksIGQsIGkpIHtcclxuICAgIGNvbnN0IGVuYWJsZWQgPSBkLnllYXIgPT09IGNhbC55ZWFyICYmIGQubW9udGggPT09IGNhbC5tb250aDtcclxuICAgIGNvbnN0IHNlbGVjdGVkID0gZC52YWx1ZSA9PT0gc2VsZWN0ZWREYXRlO1xyXG4gICAgY29uc3QgaXNUb2RheSA9IGQudmFsdWUgPT09IHRvZGF5O1xyXG4gICAgY29uc3QgZGF0ZUNsYXNzTmFtZSA9IGNsYXNzbmFtZXMoe1xyXG4gICAgICAnc2xkcy1kaXNhYmxlZC10ZXh0JzogIWVuYWJsZWQsXHJcbiAgICAgICdzbGRzLWlzLXNlbGVjdGVkJzogc2VsZWN0ZWQsXHJcbiAgICAgICdzbGRzLWlzLXRvZGF5JzogaXNUb2RheSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHRkIGNsYXNzTmFtZT17IGRhdGVDbGFzc05hbWUgfSBrZXk9eyBpIH0gaGVhZGVycz17IG1vbWVudC53ZWVrZGF5cyhpKSB9XHJcbiAgICAgICAgcm9sZT0nZ3JpZGNlbGwnIGFyaWEtZGlzYWJsZWQ9eyAhZW5hYmxlZCB9IGFyaWEtc2VsZWN0ZWQ9eyBzZWxlY3RlZCB9XHJcbiAgICAgID5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NsZHMtZGF5JyB0YWJJbmRleD17IGVuYWJsZWQgPyAwIDogLTEgfVxyXG4gICAgICAgICAgb25DbGljaz17IGVuYWJsZWQgPyB0aGlzLm9uRGF0ZUNsaWNrLmJpbmQodGhpcywgZC52YWx1ZSkgOiBudWxsIH1cclxuICAgICAgICAgIG9uS2V5RG93bj17IGVuYWJsZWQgPyB0aGlzLm9uRGF0ZUtleURvd24uYmluZCh0aGlzLCBkLnZhbHVlKSA6IG51bGwgfVxyXG4gICAgICAgICAgb25Gb2N1cz17IGVuYWJsZWQgPyB0aGlzLm9uRGF0ZUZvY3VzLmJpbmQodGhpcywgZC52YWx1ZSkgOiBjYW5jZWxFdmVudCB9XHJcbiAgICAgICAgICBkYXRhLWRhdGUtdmFsdWU9eyBkLnZhbHVlIH1cclxuICAgICAgICA+eyBkLmRhdGUgfTwvc3Bhbj5cclxuICAgICAgPC90ZD5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgc2VsZWN0ZWREYXRlLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IHRvZGF5ID0gbW9tZW50KCkuZm9ybWF0KCdZWVlZLU1NLUREJyk7XHJcbiAgICBjb25zdCB0YXJnZXREYXRlID0gdGhpcy5zdGF0ZS50YXJnZXREYXRlIHx8IHNlbGVjdGVkRGF0ZTtcclxuICAgIGNvbnN0IGNhbCA9IGNyZWF0ZUNhbGVuZGFyT2JqZWN0KHRhcmdldERhdGUpO1xyXG4gICAgY29uc3QgZGF0ZXBpY2tlckNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKCdzbGRzLWRhdGVwaWNrZXInLCBjbGFzc05hbWUpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBkYXRlcGlja2VyQ2xhc3NOYW1lcyB9IHJlZj0nZGF0ZXBpY2tlcicgYXJpYS1oaWRkZW49eyBmYWxzZSB9XHJcbiAgICAgICAgb25CbHVyPXsgdGhpcy5vbkJsdXIuYmluZCh0aGlzKSB9IG9uS2V5RG93bj17IHRoaXMub25LZXlEb3duLmJpbmQodGhpcykgfVxyXG4gICAgICA+XHJcbiAgICAgICAgeyB0aGlzLnJlbmRlckZpbHRlcihjYWwpIH1cclxuICAgICAgICB7IHRoaXMucmVuZGVyTW9udGgoY2FsLCBzZWxlY3RlZERhdGUsIHRvZGF5KSB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5EYXRlcGlja2VyLnByb3BUeXBlcyA9IHtcclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgc2VsZWN0ZWREYXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGF1dG9Gb2N1czogUHJvcFR5cGVzLmJvb2wsXHJcbiAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxyXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXHJcbn07XHJcbiJdfQ==