'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

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

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _FormElement = require('./FormElement');

var _FormElement2 = _interopRequireDefault(_FormElement);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Spinner = require('./Spinner');

var _Spinner2 = _interopRequireDefault(_Spinner);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _DropdownButton = require('./DropdownButton');

var _DropdownButton2 = _interopRequireDefault(_DropdownButton);

var _DropdownMenu = require('./DropdownMenu');

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 */

var LookupSelection = function (_Component) {
  (0, _inherits3.default)(LookupSelection, _Component);

  function LookupSelection() {
    (0, _classCallCheck3.default)(this, LookupSelection);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(LookupSelection).apply(this, arguments));
  }

  (0, _createClass3.default)(LookupSelection, [{
    key: 'onKeyDown',
    value: function onKeyDown(e) {
      if (e.keyCode === 8 || e.keyCode === 46) {
        // Bacspace / DEL
        e.preventDefault();
        e.stopPropagation();
        if (this.props.onResetSelection) {
          this.props.onResetSelection();
        }
      }
    }
  }, {
    key: 'renderPill',
    value: function renderPill(selected) {
      var onPillClick = function onPillClick(e) {
        e.target.focus();
        e.preventDefault();
        e.stopPropagation();
      };
      return _react2.default.createElement(
        'a',
        { className: 'slds-pill',
          id: this.props.id,
          ref: 'pill',
          onKeyDown: this.onKeyDown.bind(this),
          onClick: onPillClick,
          tabIndex: 0
        },
        selected.icon ? _react2.default.createElement(_Icon2.default, { className: 'slds-pill__icon', category: selected.category, icon: selected.icon }) : undefined,
        _react2.default.createElement(
          'span',
          { className: 'slds-pill__label' },
          selected.label
        ),
        _react2.default.createElement(_Button2.default, { className: 'slds-pill__remove', type: 'icon-bare', icon: 'close', alt: 'Remove',
          tabIndex: -1,
          onClick: this.props.onResetSelection
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var hidden = _props.hidden;
      var selected = _props.selected;

      var lookupClassNames = (0, _classnames2.default)({ 'slds-hide': hidden });
      return _react2.default.createElement(
        'div',
        { className: lookupClassNames },
        _react2.default.createElement(
          'div',
          { className: 'slds-pill__container' },
          selected ? this.renderPill(selected) : undefined
        )
      );
    }
  }]);
  return LookupSelection;
}(_react.Component);

var LookupEntryType = _react.PropTypes.shape({
  category: _react.PropTypes.string,
  icon: _react.PropTypes.string,
  label: _react.PropTypes.string,
  value: _react.PropTypes.string
});

LookupSelection.propTypes = {
  id: _react.PropTypes.string,
  selected: LookupEntryType,
  hidden: _react.PropTypes.bool,
  onResetSelection: _react.PropTypes.func
};

/**
 *
 */

var LookupSearch = function (_Component2) {
  (0, _inherits3.default)(LookupSearch, _Component2);

  function LookupSearch(props) {
    (0, _classCallCheck3.default)(this, LookupSearch);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(LookupSearch).call(this, props));

    (0, _util.registerStyle)('lookupSearch', [['.react-slds-lookup-scope-selector', '{ width: 3rem; }'], ['.react-slds-lookup-scope-selector .slds-dropdown-trigger', '{ margin-left: 0; }'], ['.react-slds-lookup-scope-selector .slds-dropdown-trigger .slds-button', '{ padding: 0 0.25rem; }']]);
    return _this2;
  }

  (0, _createClass3.default)(LookupSearch, [{
    key: 'onLookupIconClick',
    value: function onLookupIconClick() {
      this.props.onSubmit();
    }
  }, {
    key: 'onInputKeyDown',
    value: function onInputKeyDown(e) {
      if (e.keyCode === 13) {
        // return key
        e.preventDefault();
        e.stopPropagation();
        var searchText = e.target.value;
        if (searchText) {
          this.props.onSubmit();
        } else {
          this.props.onComplete();
        }
      } else if (e.keyCode === 40) {
        // down key
        e.preventDefault();
        e.stopPropagation();
        this.props.onPressDown();
      } else if (e.keyCode === 27) {
        // ESC
        e.preventDefault();
        e.stopPropagation();
        this.props.onComplete();
      }
      if (this.props.onKeyDown) {
        this.props.onKeyDown(e);
      }
    }
  }, {
    key: 'onInputChange',
    value: function onInputChange(e) {
      var searchText = e.target.value;
      this.props.onChange(searchText);
    }
  }, {
    key: 'onInputBlur',
    value: function onInputBlur(e) {
      if (this.props.onBlur) {
        this.props.onBlur(e);
      }
    }
  }, {
    key: 'onScopeMenuClick',
    value: function onScopeMenuClick(e) {
      if (this.props.onScopeMenuClick) {
        this.props.onScopeMenuClick(e);
      }
    }
  }, {
    key: 'onMenuItemClick',
    value: function onMenuItemClick(scope) {
      if (this.props.onScopeChange) {
        this.props.onScopeChange(scope.value);
      }
    }
  }, {
    key: 'renderSearchInput',
    value: function renderSearchInput(props) {
      var className = props.className;
      var hidden = props.hidden;
      var searchText = props.searchText;

      var searchInputClassNames = (0, _classnames2.default)('slds-grid', 'slds-input-has-icon', 'slds-input-has-icon--right', { 'slds-hide': hidden }, className);
      return _react2.default.createElement(
        'div',
        { className: searchInputClassNames },
        _react2.default.createElement(_Input2.default, (0, _extends3.default)({}, props, {
          ref: 'input',
          value: searchText,
          onKeyDown: this.onInputKeyDown.bind(this),
          onChange: this.onInputChange.bind(this),
          onBlur: this.onInputBlur.bind(this)
        })),
        _react2.default.createElement(_Icon2.default, { icon: 'search', className: 'slds-input__icon', style: { cursor: 'pointer' },
          onClick: this.onLookupIconClick.bind(this)
        })
      );
    }
  }, {
    key: 'renderScopeSelector',
    value: function renderScopeSelector(scopes, target) {
      var targetScope = scopes[0] || {};
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(scopes), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var scope = _step.value;

          if (scope.value === target) {
            targetScope = scope;
            break;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var icon = _react2.default.createElement(_Icon2.default, { icon: targetScope.icon || 'none', size: 'x-small' });
      var selectorClassNames = (0, _classnames2.default)('slds-grid', 'slds-grid--align-center', 'slds-grid--vertical-align-center', 'react-slds-lookup-scope-selector');
      return _react2.default.createElement(
        'div',
        { className: selectorClassNames },
        _react2.default.createElement(
          _DropdownButton2.default,
          { label: icon,
            onClick: this.onScopeMenuClick.bind(this),
            onMenuItemClick: this.onMenuItemClick.bind(this)
          },
          scopes.map(function (scope) {
            return _react2.default.createElement(_DropdownMenu.DropdownMenuItem, (0, _extends3.default)({ key: scope.value }, scope));
          })
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var scopes = _props2.scopes;
      var hidden = _props2.hidden;
      var className = _props2.className;
      var targetScope = _props2.targetScope;
      var props = (0, _objectWithoutProperties3.default)(_props2, ['scopes', 'hidden', 'className', 'targetScope']);

      if (scopes) {
        var lookupSearchClassNames = (0, _classnames2.default)('slds-grid', 'slds-form-element__control', 'slds-box--border', { 'slds-hide': hidden });
        var styles = { 'WebkitFlexWrap': 'nowrap', 'msFlexWrap': 'nowrap', flexWrap: 'nowrap' };
        return _react2.default.createElement(
          'div',
          { className: lookupSearchClassNames, style: styles },
          this.renderScopeSelector(scopes, targetScope),
          this.renderSearchInput((0, _extends3.default)({}, props, { className: 'slds-col', bare: true }))
        );
      }
      return this.renderSearchInput(this.props);
    }
  }]);
  return LookupSearch;
}(_react.Component);

LookupSearch.propTypes = {
  className: _react.PropTypes.string,
  hidden: _react.PropTypes.bool,
  searchText: _react.PropTypes.string,
  scopes: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    label: _react.PropTypes.string,
    value: _react.PropTypes.string,
    icon: _react.PropTypes.string
  })),
  targetScope: _react.PropTypes.any,
  onKeyDown: _react.PropTypes.func,
  onBlur: _react.PropTypes.func,
  onChange: _react.PropTypes.func,
  onScopeMenuClick: _react.PropTypes.func,
  onScopeChange: _react.PropTypes.func,
  onPressDown: _react.PropTypes.func,
  onSubmit: _react.PropTypes.func,
  onComplete: _react.PropTypes.func
};

/**
 *
 */

var LookupCandidateList = function (_Component3) {
  (0, _inherits3.default)(LookupCandidateList, _Component3);

  function LookupCandidateList() {
    (0, _classCallCheck3.default)(this, LookupCandidateList);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(LookupCandidateList).apply(this, arguments));
  }

  (0, _createClass3.default)(LookupCandidateList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.focus) {
        this.focusToTargetItemEl(0);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.focus && !prevProps.focus) {
        this.focusToTargetItemEl(0);
      }
    }
  }, {
    key: 'onSelect',
    value: function onSelect(entry) {
      if (this.props.onSelect) {
        this.props.onSelect(entry);
      }
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(e) {
      if (e.keyCode === 38 || e.keyCode === 40) {
        // UP/DOWN
        e.preventDefault();
        e.stopPropagation();
        var currentEl = e.target.parentElement;
        var itemEl = e.keyCode === 40 ? currentEl.nextSibling : currentEl.previousSibling;
        while (itemEl) {
          var anchorEl = itemEl.querySelector('.react-slds-candidate[tabIndex]');
          if (anchorEl && !anchorEl.disabled) {
            anchorEl.focus();
            return;
          }
          itemEl = e.keyCode === 40 ? itemEl.nextSibling : itemEl.previousSibling;
        }
      } else if (e.keyCode === 27) {
        // ESC
        e.preventDefault();
        e.stopPropagation();
        this.onSelect(null);
      }
    }
  }, {
    key: 'focusToTargetItemEl',
    value: function focusToTargetItemEl(index) {
      var el = _reactDom2.default.findDOMNode(this);
      var anchors = el.querySelectorAll('.react-slds-candidate[tabIndex]');
      if (anchors[index]) {
        anchors[index].focus();
      }
    }
  }, {
    key: 'renderCandidate',
    value: function renderCandidate(entry) {
      var _this4 = this;

      return _react2.default.createElement(
        'li',
        { className: 'slds-lookup__item', key: entry.value },
        _react2.default.createElement(
          'a',
          { className: 'slds-truncate react-slds-candidate', tabIndex: -1, role: 'option',
            onKeyDown: function onKeyDown(e) {
              return e.keyCode === 13 && _this4.onSelect(entry);
            },
            onBlur: this.props.onBlur,
            onClick: function onClick() {
              return _this4.onSelect(entry);
            }
          },
          entry.icon ? _react2.default.createElement(_Icon2.default, { category: entry.category, icon: entry.icon, size: 'small' }) : undefined,
          entry.label
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props;
      var _props3$data = _props3.data;
      var data = _props3$data === undefined ? [] : _props3$data;
      var hidden = _props3.hidden;
      var loading = _props3.loading;
      var header = _props3.header;
      var footer = _props3.footer;
      var _props3$filter = _props3.filter;
      var filter = _props3$filter === undefined ? function () {
        return true;
      } : _props3$filter;

      var lookupMenuClassNames = (0, _classnames2.default)('slds-lookup__menu', { 'slds-hide': hidden });
      return _react2.default.createElement(
        'div',
        { className: lookupMenuClassNames, role: 'listbox',
          onKeyDown: this.onKeyDown.bind(this)
        },
        header ? _react2.default.createElement(
          'div',
          { className: 'slds-lookup__item' },
          header
        ) : undefined,
        _react2.default.createElement(
          'ul',
          { className: 'slds-lookup__list', role: 'presentation' },
          data.filter(filter).map(this.renderCandidate.bind(this)),
          loading ? _react2.default.createElement(
            'li',
            { className: 'slds-lookup__item', key: 'loading' },
            _react2.default.createElement(_Spinner2.default, { size: 'small', style: { margin: '0 auto' } })
          ) : undefined
        ),
        footer ? _react2.default.createElement(
          'div',
          { className: 'slds-lookup__item' },
          footer
        ) : undefined
      );
    }
  }]);
  return LookupCandidateList;
}(_react.Component);

LookupCandidateList.propTypes = {
  data: _react.PropTypes.arrayOf(LookupEntryType),
  focus: _react.PropTypes.bool,
  loading: _react.PropTypes.bool,
  hidden: _react.PropTypes.bool,
  filter: _react.PropTypes.func,
  onSelect: _react.PropTypes.func,
  onBlur: _react.PropTypes.func,
  header: _react.PropTypes.node,
  footer: _react.PropTypes.node
};

/**
 *
 */

var Lookup = function (_Component4) {
  (0, _inherits3.default)(Lookup, _Component4);

  function Lookup(props) {
    (0, _classCallCheck3.default)(this, Lookup);

    var _this5 = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Lookup).call(this, props));

    _this5.state = {
      id: 'form-element-' + (0, _uuid2.default)(),
      selected: props.defaultSelected,
      opened: props.defaultOpened,
      searchText: props.defaultSearchText,
      targetScope: props.defaultTargetScope,
      focusFirstCandidate: false
    };
    return _this5;
  }

  (0, _createClass3.default)(Lookup, [{
    key: 'onScopeMenuClick',
    value: function onScopeMenuClick(e) {
      this.setState({ opened: false });
      if (this.props.onScopeMenuClick) {
        this.props.onScopeMenuClick(e);
      }
    }
  }, {
    key: 'onScopeChange',
    value: function onScopeChange(targetScope) {
      this.setState({ targetScope: targetScope });
      if (this.props.onScopeChange) {
        this.props.onScopeChange(targetScope);
      }
    }
  }, {
    key: 'onSearchTextChange',
    value: function onSearchTextChange(searchText) {
      this.setState({ searchText: searchText });
      if (this.props.onSearchTextChange) {
        this.props.onSearchTextChange(searchText);
      }
    }
  }, {
    key: 'onLookupRequest',
    value: function onLookupRequest(searchText) {
      this.setState({ opened: true });
      if (this.props.onLookupRequest) {
        this.props.onLookupRequest(searchText);
      }
    }
  }, {
    key: 'onComplete',
    value: function onComplete() {
      if (this.props.onComplete) {
        this.props.onComplete();
      }
    }
  }, {
    key: 'onResetSelection',
    value: function onResetSelection() {
      var _this6 = this;

      this.setState({ selected: null });
      if (this.props.onSelect) {
        this.props.onSelect(null);
      }
      this.onSearchTextChange('');
      this.onLookupRequest('');
      setTimeout(function () {
        var searchElem = _reactDom2.default.findDOMNode(_this6.refs.search);
        var inputElem = searchElem.querySelector('input');
        inputElem.focus();
      }, 10);
    }
  }, {
    key: 'onLookupItemSelect',
    value: function onLookupItemSelect(selected) {
      var _this7 = this;

      if (selected) {
        this.setState({ selected: selected, opened: false });
        if (this.props.onSelect) {
          this.props.onSelect(selected);
        }
        setTimeout(function () {
          var selectionElem = _reactDom2.default.findDOMNode(_this7.refs.selection);
          var pillElem = selectionElem.querySelector('a');
          if (pillElem) {
            pillElem.focus();
          }
        }, 10);
      } else {
        this.setState({ opened: false });
        setTimeout(function () {
          var searchElem = _reactDom2.default.findDOMNode(_this7.refs.search);
          var inputElem = searchElem.querySelector('input');
          inputElem.focus();
        }, 10);
      }
      if (this.props.onComplete) {
        this.props.onComplete();
      }
    }
  }, {
    key: 'onFocusFirstCandidate',
    value: function onFocusFirstCandidate() {
      var _this8 = this;

      var _props$opened = this.props.opened;
      var opened = _props$opened === undefined ? this.state.opened : _props$opened;

      if (!opened) {
        this.onLookupRequest(this.state.searchText);
      } else {
        this.setState({ focusFirstCandidate: true });
        setTimeout(function () {
          _this8.setState({ focusFirstCandidate: false });
        }, 10);
      }
    }
  }, {
    key: 'onBlur',
    value: function onBlur() {
      var _this9 = this;

      setTimeout(function () {
        if (!_this9.isFocusedInComponent()) {
          _this9.setState({ opened: false });
          if (_this9.props.onBlur) {
            _this9.props.onBlur();
          }
          if (_this9.props.onComplete) {
            _this9.props.onComplete();
          }
        }
      }, 10);
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
    key: 'render',
    value: function render() {
      var _this10 = this;

      var id = this.props.id || this.state.id;
      var _props4 = this.props;
      var totalCols = _props4.totalCols;
      var cols = _props4.cols;
      var label = _props4.label;
      var required = _props4.required;
      var error = _props4.error;
      var className = _props4.className;
      var _props4$selected = _props4.selected;
      var selected = _props4$selected === undefined ? this.state.selected : _props4$selected;
      var defaultSelected = _props4.defaultSelected;
      var _props4$opened = _props4.opened;
      var opened = _props4$opened === undefined ? this.state.opened : _props4$opened;
      var defaultOpened = _props4.defaultOpened;
      var _props4$searchText = _props4.searchText;
      var searchText = _props4$searchText === undefined ? this.state.searchText : _props4$searchText;
      var defaultSearchText = _props4.defaultSearchText;
      var _props4$targetScope = _props4.targetScope;
      var targetScope = _props4$targetScope === undefined ? this.state.targetScope : _props4$targetScope;
      var defaultTargetScope = _props4.defaultTargetScope;
      var loading = _props4.loading;
      var lookupFilter = _props4.lookupFilter;
      var listHeader = _props4.listHeader;
      var listFooter = _props4.listFooter;
      var data = _props4.data;
      var onSelect = _props4.onSelect;
      var onBlur = _props4.onBlur;
      var onComplete = _props4.onComplete;
      var onScopeChange = _props4.onScopeChange;
      var onScopeMenuClick = _props4.onScopeMenuClick;
      var onSearchTextChange = _props4.onSearchTextChange;
      var onLookupRequest = _props4.onLookupRequest;
      var props = (0, _objectWithoutProperties3.default)(_props4, ['totalCols', 'cols', 'label', 'required', 'error', 'className', 'selected', 'defaultSelected', 'opened', 'defaultOpened', 'searchText', 'defaultSearchText', 'targetScope', 'defaultTargetScope', 'loading', 'lookupFilter', 'listHeader', 'listFooter', 'data', 'onSelect', 'onBlur', 'onComplete', 'onScopeChange', 'onScopeMenuClick', 'onSearchTextChange', 'onLookupRequest']);

      var dropdown = _react2.default.createElement(LookupCandidateList, {
        ref: 'candidateList',
        data: data,
        focus: this.state.focusFirstCandidate,
        hidden: !opened,
        loading: loading,
        filter: lookupFilter ? function (entry) {
          return lookupFilter(entry, searchText, targetScope);
        } : undefined,
        header: listHeader,
        footer: listFooter,
        onSelect: this.onLookupItemSelect.bind(this),
        onBlur: this.onBlur.bind(this)
      });
      var lookupClassNames = (0, _classnames2.default)('slds-lookup', { 'slds-has-selection': selected }, className);
      var formElemProps = { id: id, totalCols: totalCols, cols: cols, label: label, required: required, error: error, dropdown: dropdown };
      return _react2.default.createElement(
        _FormElement2.default,
        formElemProps,
        _react2.default.createElement(
          'div',
          { className: lookupClassNames,
            'data-select': 'single',
            'data-scope': props.scopes ? 'multi' : 'single',
            'data-typeahead': false
          },
          selected ? _react2.default.createElement(LookupSelection, {
            id: id,
            ref: 'selection',
            selected: selected,
            onResetSelection: this.onResetSelection.bind(this)
          }) : _react2.default.createElement(LookupSearch, (0, _extends3.default)({}, props, {
            id: id,
            ref: 'search',
            searchText: searchText,
            targetScope: targetScope,
            onScopeMenuClick: this.onScopeMenuClick.bind(this),
            onScopeChange: this.onScopeChange.bind(this),
            onChange: this.onSearchTextChange.bind(this),
            onSubmit: function onSubmit() {
              return _this10.onLookupRequest(searchText);
            },
            onPressDown: this.onFocusFirstCandidate.bind(this),
            onComplete: this.onComplete.bind(this),
            onBlur: this.onBlur.bind(this)
          }))
        )
      );
    }
  }]);
  return Lookup;
}(_react.Component);

exports.default = Lookup;


Lookup.propTypes = {
  id: _react.PropTypes.string,
  className: _react.PropTypes.string,
  label: _react.PropTypes.string,
  required: _react.PropTypes.bool,
  error: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.string, _react.PropTypes.shape({
    message: _react.PropTypes.string
  })]),
  value: _react.PropTypes.string,
  defaultValue: _react.PropTypes.string,
  selected: LookupEntryType,
  defaultSelected: LookupEntryType,
  opened: _react.PropTypes.bool,
  defaultOpened: _react.PropTypes.bool,
  searchText: _react.PropTypes.string,
  defaultSearchText: _react.PropTypes.string,
  loading: _react.PropTypes.bool,
  data: _react.PropTypes.arrayOf(LookupEntryType),
  lookupFilter: _react.PropTypes.func,
  listHeader: _react.PropTypes.node,
  listFooter: _react.PropTypes.node,
  scopes: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    label: _react.PropTypes.string,
    value: _react.PropTypes.string,
    icon: _react.PropTypes.string
  })),
  targetScope: _react.PropTypes.string,
  defaultTargetScope: _react.PropTypes.string,
  onSearchTextChange: _react.PropTypes.func,
  onScopeMenuClick: _react.PropTypes.func,
  onScopeChange: _react.PropTypes.func,
  onLookupRequest: _react.PropTypes.func,
  onBlur: _react.PropTypes.func,
  onSelect: _react.PropTypes.func,
  onComplete: _react.PropTypes.func,
  totalCols: _react.PropTypes.number,
  cols: _react.PropTypes.number
};

Lookup.isFormElement = true;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0xvb2t1cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0lBS00sZTs7Ozs7Ozs7Ozs4QkFDTSxDLEVBQUc7QUFDWCxVQUFJLEVBQUUsT0FBRixLQUFjLENBQWQsSUFBbUIsRUFBRSxPQUFGLEtBQWMsRUFBckMsRUFBeUM7O0FBQ3ZDLFVBQUUsY0FBRjtBQUNBLFVBQUUsZUFBRjtBQUNBLFlBQUksS0FBSyxLQUFMLENBQVcsZ0JBQWYsRUFBaUM7QUFDL0IsZUFBSyxLQUFMLENBQVcsZ0JBQVg7QUFDRDtBQUNGO0FBQ0Y7OzsrQkFFVSxRLEVBQVU7QUFDbkIsVUFBTSxjQUFjLFNBQWQsV0FBYyxDQUFDLENBQUQsRUFBTztBQUN6QixVQUFFLE1BQUYsQ0FBUyxLQUFUO0FBQ0EsVUFBRSxjQUFGO0FBQ0EsVUFBRSxlQUFGO0FBQ0QsT0FKRDtBQUtBLGFBQ0U7QUFBQTtRQUFBLEVBQUcsV0FBVSxXQUFiO0FBQ0UsY0FBSyxLQUFLLEtBQUwsQ0FBVyxFQURsQjtBQUVFLGVBQUksTUFGTjtBQUdFLHFCQUFZLEtBQUssU0FBTCxDQUFlLElBQWYsQ0FBb0IsSUFBcEIsQ0FIZDtBQUlFLG1CQUFVLFdBSlo7QUFLRSxvQkFBVztBQUxiO1FBUUksU0FBUyxJQUFULEdBQ0EsZ0RBQU0sV0FBVSxpQkFBaEIsRUFBa0MsVUFBVyxTQUFTLFFBQXRELEVBQWlFLE1BQU8sU0FBUyxJQUFqRixHQURBLEdBRUEsU0FWSjtRQVlFO0FBQUE7VUFBQSxFQUFNLFdBQVUsa0JBQWhCO1VBQXFDLFNBQVM7QUFBOUMsU0FaRjtRQWFFLGtEQUFRLFdBQVUsbUJBQWxCLEVBQXNDLE1BQUssV0FBM0MsRUFBdUQsTUFBSyxPQUE1RCxFQUFvRSxLQUFJLFFBQXhFO0FBQ0Usb0JBQVcsQ0FBQyxDQURkO0FBRUUsbUJBQVUsS0FBSyxLQUFMLENBQVc7QUFGdkI7QUFiRixPQURGO0FBb0JEOzs7NkJBRVE7QUFBQSxtQkFDc0IsS0FBSyxLQUQzQjtBQUFBLFVBQ0MsTUFERCxVQUNDLE1BREQ7QUFBQSxVQUNTLFFBRFQsVUFDUyxRQURUOztBQUVQLFVBQU0sbUJBQW1CLDBCQUN2QixFQUFFLGFBQWEsTUFBZixFQUR1QixDQUF6QjtBQUdBLGFBQ0U7QUFBQTtRQUFBLEVBQUssV0FBWSxnQkFBakI7UUFDRTtBQUFBO1VBQUEsRUFBSyxXQUFVLHNCQUFmO1VBQ0ksV0FBVyxLQUFLLFVBQUwsQ0FBZ0IsUUFBaEIsQ0FBWCxHQUF1QztBQUQzQztBQURGLE9BREY7QUFPRDs7Ozs7QUFJSCxJQUFNLGtCQUFrQixpQkFBVSxLQUFWLENBQWdCO0FBQ3RDLFlBQVUsaUJBQVUsTUFEa0I7QUFFdEMsUUFBTSxpQkFBVSxNQUZzQjtBQUd0QyxTQUFPLGlCQUFVLE1BSHFCO0FBSXRDLFNBQU8saUJBQVU7QUFKcUIsQ0FBaEIsQ0FBeEI7O0FBT0EsZ0JBQWdCLFNBQWhCLEdBQTRCO0FBQzFCLE1BQUksaUJBQVUsTUFEWTtBQUUxQixZQUFVLGVBRmdCO0FBRzFCLFVBQVEsaUJBQVUsSUFIUTtBQUkxQixvQkFBa0IsaUJBQVU7QUFKRixDQUE1Qjs7Ozs7O0lBV00sWTs7O0FBQ0osd0JBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLHVIQUNYLEtBRFc7O0FBRWpCLDZCQUFjLGNBQWQsRUFBOEIsQ0FDNUIsQ0FDRSxtQ0FERixFQUVFLGtCQUZGLENBRDRCLEVBSzVCLENBQ0UsMERBREYsRUFFRSxxQkFGRixDQUw0QixFQVM1QixDQUNFLHVFQURGLEVBRUUseUJBRkYsQ0FUNEIsQ0FBOUI7QUFGaUI7QUFnQmxCOzs7O3dDQUVtQjtBQUNsQixXQUFLLEtBQUwsQ0FBVyxRQUFYO0FBQ0Q7OzttQ0FFYyxDLEVBQUc7QUFDaEIsVUFBSSxFQUFFLE9BQUYsS0FBYyxFQUFsQixFQUFzQjs7QUFDcEIsVUFBRSxjQUFGO0FBQ0EsVUFBRSxlQUFGO0FBQ0EsWUFBTSxhQUFhLEVBQUUsTUFBRixDQUFTLEtBQTVCO0FBQ0EsWUFBSSxVQUFKLEVBQWdCO0FBQ2QsZUFBSyxLQUFMLENBQVcsUUFBWDtBQUNELFNBRkQsTUFFTztBQUNMLGVBQUssS0FBTCxDQUFXLFVBQVg7QUFDRDtBQUNGLE9BVEQsTUFTTyxJQUFJLEVBQUUsT0FBRixLQUFjLEVBQWxCLEVBQXNCOztBQUMzQixVQUFFLGNBQUY7QUFDQSxVQUFFLGVBQUY7QUFDQSxhQUFLLEtBQUwsQ0FBVyxXQUFYO0FBQ0QsT0FKTSxNQUlBLElBQUksRUFBRSxPQUFGLEtBQWMsRUFBbEIsRUFBc0I7O0FBQzNCLFVBQUUsY0FBRjtBQUNBLFVBQUUsZUFBRjtBQUNBLGFBQUssS0FBTCxDQUFXLFVBQVg7QUFDRDtBQUNELFVBQUksS0FBSyxLQUFMLENBQVcsU0FBZixFQUEwQjtBQUN4QixhQUFLLEtBQUwsQ0FBVyxTQUFYLENBQXFCLENBQXJCO0FBQ0Q7QUFDRjs7O2tDQUVhLEMsRUFBRztBQUNmLFVBQU0sYUFBYSxFQUFFLE1BQUYsQ0FBUyxLQUE1QjtBQUNBLFdBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsVUFBcEI7QUFDRDs7O2dDQUVXLEMsRUFBRztBQUNiLFVBQUksS0FBSyxLQUFMLENBQVcsTUFBZixFQUF1QjtBQUNyQixhQUFLLEtBQUwsQ0FBVyxNQUFYLENBQWtCLENBQWxCO0FBQ0Q7QUFDRjs7O3FDQUVnQixDLEVBQUc7QUFDbEIsVUFBSSxLQUFLLEtBQUwsQ0FBVyxnQkFBZixFQUFpQztBQUMvQixhQUFLLEtBQUwsQ0FBVyxnQkFBWCxDQUE0QixDQUE1QjtBQUNEO0FBQ0Y7OztvQ0FFZSxLLEVBQU87QUFDckIsVUFBSSxLQUFLLEtBQUwsQ0FBVyxhQUFmLEVBQThCO0FBQzVCLGFBQUssS0FBTCxDQUFXLGFBQVgsQ0FBeUIsTUFBTSxLQUEvQjtBQUNEO0FBQ0Y7OztzQ0FFaUIsSyxFQUFPO0FBQUEsVUFDZixTQURlLEdBQ21CLEtBRG5CLENBQ2YsU0FEZTtBQUFBLFVBQ0osTUFESSxHQUNtQixLQURuQixDQUNKLE1BREk7QUFBQSxVQUNJLFVBREosR0FDbUIsS0FEbkIsQ0FDSSxVQURKOztBQUV2QixVQUFNLHdCQUF3QiwwQkFDNUIsV0FENEIsRUFFNUIscUJBRjRCLEVBRzVCLDRCQUg0QixFQUk1QixFQUFFLGFBQWEsTUFBZixFQUo0QixFQUs1QixTQUw0QixDQUE5QjtBQU9BLGFBQ0U7QUFBQTtRQUFBLEVBQUssV0FBWSxxQkFBakI7UUFDRSwwRUFBWSxLQUFaO0FBQ0UsZUFBSSxPQUROO0FBRUUsaUJBQVEsVUFGVjtBQUdFLHFCQUFZLEtBQUssY0FBTCxDQUFvQixJQUFwQixDQUF5QixJQUF6QixDQUhkO0FBSUUsb0JBQVcsS0FBSyxhQUFMLENBQW1CLElBQW5CLENBQXdCLElBQXhCLENBSmI7QUFLRSxrQkFBUyxLQUFLLFdBQUwsQ0FBaUIsSUFBakIsQ0FBc0IsSUFBdEI7QUFMWCxXQURGO1FBUUUsZ0RBQU0sTUFBSyxRQUFYLEVBQW9CLFdBQVUsa0JBQTlCLEVBQWlELE9BQVEsRUFBRSxRQUFRLFNBQVYsRUFBekQ7QUFDRSxtQkFBVSxLQUFLLGlCQUFMLENBQXVCLElBQXZCLENBQTRCLElBQTVCO0FBRFo7QUFSRixPQURGO0FBY0Q7Ozt3Q0FFbUIsTSxFQUFRLE0sRUFBUTtBQUNsQyxVQUFJLGNBQWMsT0FBTyxDQUFQLEtBQWEsRUFBL0I7QUFEa0M7QUFBQTtBQUFBOztBQUFBO0FBRWxDLHdEQUFvQixNQUFwQiw0R0FBNEI7QUFBQSxjQUFqQixLQUFpQjs7QUFDMUIsY0FBSSxNQUFNLEtBQU4sS0FBZ0IsTUFBcEIsRUFBNEI7QUFDMUIsMEJBQWMsS0FBZDtBQUNBO0FBQ0Q7QUFDRjtBQVBpQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVFsQyxVQUFNLE9BQU8sZ0RBQU0sTUFBTyxZQUFZLElBQVosSUFBb0IsTUFBakMsRUFBMEMsTUFBSyxTQUEvQyxHQUFiO0FBQ0EsVUFBTSxxQkFBcUIsMEJBQ3pCLFdBRHlCLEVBRXpCLHlCQUZ5QixFQUd6QixrQ0FIeUIsRUFJekIsa0NBSnlCLENBQTNCO0FBTUEsYUFDRTtBQUFBO1FBQUEsRUFBSyxXQUFZLGtCQUFqQjtRQUNFO0FBQUE7VUFBQSxFQUFnQixPQUFRLElBQXhCO0FBQ0UscUJBQVUsS0FBSyxnQkFBTCxDQUFzQixJQUF0QixDQUEyQixJQUEzQixDQURaO0FBRUUsNkJBQWtCLEtBQUssZUFBTCxDQUFxQixJQUFyQixDQUEwQixJQUExQjtBQUZwQjtVQUlJLE9BQU8sR0FBUCxDQUFXLFVBQUMsS0FBRDtBQUFBLG1CQUFXLHVGQUFrQixLQUFNLE1BQU0sS0FBOUIsSUFBMkMsS0FBM0MsRUFBWDtBQUFBLFdBQVg7QUFKSjtBQURGLE9BREY7QUFVRDs7OzZCQUVRO0FBQUEsb0JBQ3NELEtBQUssS0FEM0Q7QUFBQSxVQUNDLE1BREQsV0FDQyxNQUREO0FBQUEsVUFDUyxNQURULFdBQ1MsTUFEVDtBQUFBLFVBQ2lCLFNBRGpCLFdBQ2lCLFNBRGpCO0FBQUEsVUFDNEIsV0FENUIsV0FDNEIsV0FENUI7QUFBQSxVQUM0QyxLQUQ1Qzs7QUFFUCxVQUFJLE1BQUosRUFBWTtBQUNWLFlBQU0seUJBQXlCLDBCQUM3QixXQUQ2QixFQUU3Qiw0QkFGNkIsRUFHN0Isa0JBSDZCLEVBSTdCLEVBQUUsYUFBYSxNQUFmLEVBSjZCLENBQS9CO0FBTUEsWUFBTSxTQUFTLEVBQUUsa0JBQWtCLFFBQXBCLEVBQThCLGNBQWMsUUFBNUMsRUFBc0QsVUFBVSxRQUFoRSxFQUFmO0FBQ0EsZUFDRTtBQUFBO1VBQUEsRUFBSyxXQUFZLHNCQUFqQixFQUEwQyxPQUFRLE1BQWxEO1VBQ0ksS0FBSyxtQkFBTCxDQUF5QixNQUF6QixFQUFpQyxXQUFqQyxDQURKO1VBRUksS0FBSyxpQkFBTCw0QkFBNEIsS0FBNUIsSUFBbUMsV0FBVyxVQUE5QyxFQUEwRCxNQUFNLElBQWhFO0FBRkosU0FERjtBQU1EO0FBQ0QsYUFBTyxLQUFLLGlCQUFMLENBQXVCLEtBQUssS0FBNUIsQ0FBUDtBQUNEOzs7OztBQUtILGFBQWEsU0FBYixHQUF5QjtBQUN2QixhQUFXLGlCQUFVLE1BREU7QUFFdkIsVUFBUSxpQkFBVSxJQUZLO0FBR3ZCLGNBQVksaUJBQVUsTUFIQztBQUl2QixVQUFRLGlCQUFVLE9BQVYsQ0FDTixpQkFBVSxLQUFWLENBQWdCO0FBQ2QsV0FBTyxpQkFBVSxNQURIO0FBRWQsV0FBTyxpQkFBVSxNQUZIO0FBR2QsVUFBTSxpQkFBVTtBQUhGLEdBQWhCLENBRE0sQ0FKZTtBQVd2QixlQUFhLGlCQUFVLEdBWEE7QUFZdkIsYUFBVyxpQkFBVSxJQVpFO0FBYXZCLFVBQVEsaUJBQVUsSUFiSztBQWN2QixZQUFVLGlCQUFVLElBZEc7QUFldkIsb0JBQWtCLGlCQUFVLElBZkw7QUFnQnZCLGlCQUFlLGlCQUFVLElBaEJGO0FBaUJ2QixlQUFhLGlCQUFVLElBakJBO0FBa0J2QixZQUFVLGlCQUFVLElBbEJHO0FBbUJ2QixjQUFZLGlCQUFVO0FBbkJDLENBQXpCOzs7Ozs7SUF5Qk0sbUI7Ozs7Ozs7Ozs7d0NBRWdCO0FBQ2xCLFVBQUksS0FBSyxLQUFMLENBQVcsS0FBZixFQUFzQjtBQUNwQixhQUFLLG1CQUFMLENBQXlCLENBQXpCO0FBQ0Q7QUFDRjs7O3VDQUVrQixTLEVBQVc7QUFDNUIsVUFBSSxLQUFLLEtBQUwsQ0FBVyxLQUFYLElBQW9CLENBQUMsVUFBVSxLQUFuQyxFQUEwQztBQUN4QyxhQUFLLG1CQUFMLENBQXlCLENBQXpCO0FBQ0Q7QUFDRjs7OzZCQUVRLEssRUFBTztBQUNkLFVBQUksS0FBSyxLQUFMLENBQVcsUUFBZixFQUF5QjtBQUN2QixhQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLEtBQXBCO0FBQ0Q7QUFDRjs7OzhCQUVTLEMsRUFBRztBQUNYLFVBQUksRUFBRSxPQUFGLEtBQWMsRUFBZCxJQUFvQixFQUFFLE9BQUYsS0FBYyxFQUF0QyxFQUEwQzs7QUFDeEMsVUFBRSxjQUFGO0FBQ0EsVUFBRSxlQUFGO0FBQ0EsWUFBTSxZQUFZLEVBQUUsTUFBRixDQUFTLGFBQTNCO0FBQ0EsWUFBSSxTQUFTLEVBQUUsT0FBRixLQUFjLEVBQWQsR0FBbUIsVUFBVSxXQUE3QixHQUEyQyxVQUFVLGVBQWxFO0FBQ0EsZUFBTyxNQUFQLEVBQWU7QUFDYixjQUFNLFdBQVcsT0FBTyxhQUFQLENBQXFCLGlDQUFyQixDQUFqQjtBQUNBLGNBQUksWUFBWSxDQUFDLFNBQVMsUUFBMUIsRUFBb0M7QUFDbEMscUJBQVMsS0FBVDtBQUNBO0FBQ0Q7QUFDRCxtQkFBUyxFQUFFLE9BQUYsS0FBYyxFQUFkLEdBQW1CLE9BQU8sV0FBMUIsR0FBd0MsT0FBTyxlQUF4RDtBQUNEO0FBQ0YsT0FiRCxNQWFPLElBQUksRUFBRSxPQUFGLEtBQWMsRUFBbEIsRUFBc0I7O0FBQzNCLFVBQUUsY0FBRjtBQUNBLFVBQUUsZUFBRjtBQUNBLGFBQUssUUFBTCxDQUFjLElBQWQ7QUFDRDtBQUNGOzs7d0NBRW1CLEssRUFBTztBQUN6QixVQUFNLEtBQUssbUJBQVMsV0FBVCxDQUFxQixJQUFyQixDQUFYO0FBQ0EsVUFBTSxVQUFVLEdBQUcsZ0JBQUgsQ0FBb0IsaUNBQXBCLENBQWhCO0FBQ0EsVUFBSSxRQUFRLEtBQVIsQ0FBSixFQUFvQjtBQUNsQixnQkFBUSxLQUFSLEVBQWUsS0FBZjtBQUNEO0FBQ0Y7OztvQ0FFZSxLLEVBQU87QUFBQTs7QUFDckIsYUFDRTtBQUFBO1FBQUEsRUFBSSxXQUFVLG1CQUFkLEVBQWtDLEtBQU0sTUFBTSxLQUE5QztRQUNFO0FBQUE7VUFBQSxFQUFHLFdBQVUsb0NBQWIsRUFBa0QsVUFBVyxDQUFDLENBQTlELEVBQWtFLE1BQUssUUFBdkU7QUFDRSx1QkFBWSxtQkFBQyxDQUFEO0FBQUEscUJBQU8sRUFBRSxPQUFGLEtBQWMsRUFBZCxJQUFvQixPQUFLLFFBQUwsQ0FBYyxLQUFkLENBQTNCO0FBQUEsYUFEZDtBQUVFLG9CQUFTLEtBQUssS0FBTCxDQUFXLE1BRnRCO0FBR0UscUJBQVU7QUFBQSxxQkFBTSxPQUFLLFFBQUwsQ0FBYyxLQUFkLENBQU47QUFBQTtBQUhaO1VBTUksTUFBTSxJQUFOLEdBQ0EsZ0RBQU0sVUFBVyxNQUFNLFFBQXZCLEVBQWtDLE1BQU8sTUFBTSxJQUEvQyxFQUFzRCxNQUFLLE9BQTNELEdBREEsR0FFQSxTQVJKO1VBVUksTUFBTTtBQVZWO0FBREYsT0FERjtBQWdCRDs7OzZCQUVRO0FBQUEsb0JBQ3FFLEtBQUssS0FEMUU7QUFBQSxpQ0FDQyxJQUREO0FBQUEsVUFDQyxJQURELGdDQUNRLEVBRFI7QUFBQSxVQUNZLE1BRFosV0FDWSxNQURaO0FBQUEsVUFDb0IsT0FEcEIsV0FDb0IsT0FEcEI7QUFBQSxVQUM2QixNQUQ3QixXQUM2QixNQUQ3QjtBQUFBLFVBQ3FDLE1BRHJDLFdBQ3FDLE1BRHJDO0FBQUEsbUNBQzZDLE1BRDdDO0FBQUEsVUFDNkMsTUFEN0Msa0NBQ3NEO0FBQUEsZUFBTSxJQUFOO0FBQUEsT0FEdEQ7O0FBRVAsVUFBTSx1QkFBdUIsMEJBQzNCLG1CQUQyQixFQUUzQixFQUFFLGFBQWEsTUFBZixFQUYyQixDQUE3QjtBQUlBLGFBQ0U7QUFBQTtRQUFBLEVBQUssV0FBWSxvQkFBakIsRUFBd0MsTUFBSyxTQUE3QztBQUNFLHFCQUFZLEtBQUssU0FBTCxDQUFlLElBQWYsQ0FBb0IsSUFBcEI7QUFEZDtRQUlJLFNBQ0E7QUFBQTtVQUFBLEVBQUssV0FBVSxtQkFBZjtVQUFxQztBQUFyQyxTQURBLEdBRUEsU0FOSjtRQVFFO0FBQUE7VUFBQSxFQUFJLFdBQVUsbUJBQWQsRUFBa0MsTUFBSyxjQUF2QztVQUVJLEtBQUssTUFBTCxDQUFZLE1BQVosRUFBb0IsR0FBcEIsQ0FBd0IsS0FBSyxlQUFMLENBQXFCLElBQXJCLENBQTBCLElBQTFCLENBQXhCLENBRko7VUFLSSxVQUNBO0FBQUE7WUFBQSxFQUFJLFdBQVUsbUJBQWQsRUFBa0MsS0FBSSxTQUF0QztZQUNFLG1EQUFTLE1BQUssT0FBZCxFQUFzQixPQUFRLEVBQUUsUUFBUSxRQUFWLEVBQTlCO0FBREYsV0FEQSxHQUlBO0FBVEosU0FSRjtRQXFCSSxTQUNBO0FBQUE7VUFBQSxFQUFLLFdBQVUsbUJBQWY7VUFBcUM7QUFBckMsU0FEQSxHQUVBO0FBdkJKLE9BREY7QUE0QkQ7Ozs7O0FBSUgsb0JBQW9CLFNBQXBCLEdBQWdDO0FBQzlCLFFBQU0saUJBQVUsT0FBVixDQUFrQixlQUFsQixDQUR3QjtBQUU5QixTQUFPLGlCQUFVLElBRmE7QUFHOUIsV0FBUyxpQkFBVSxJQUhXO0FBSTlCLFVBQVEsaUJBQVUsSUFKWTtBQUs5QixVQUFRLGlCQUFVLElBTFk7QUFNOUIsWUFBVSxpQkFBVSxJQU5VO0FBTzlCLFVBQVEsaUJBQVUsSUFQWTtBQVE5QixVQUFRLGlCQUFVLElBUlk7QUFTOUIsVUFBUSxpQkFBVTtBQVRZLENBQWhDOzs7Ozs7SUFnQnFCLE07OztBQUNuQixrQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsaUhBQ1gsS0FEVzs7QUFFakIsV0FBSyxLQUFMLEdBQWE7QUFDWCw0QkFBb0IscUJBRFQ7QUFFWCxnQkFBVSxNQUFNLGVBRkw7QUFHWCxjQUFRLE1BQU0sYUFISDtBQUlYLGtCQUFZLE1BQU0saUJBSlA7QUFLWCxtQkFBYSxNQUFNLGtCQUxSO0FBTVgsMkJBQXFCO0FBTlYsS0FBYjtBQUZpQjtBQVVsQjs7OztxQ0FFZ0IsQyxFQUFHO0FBQ2xCLFdBQUssUUFBTCxDQUFjLEVBQUUsUUFBUSxLQUFWLEVBQWQ7QUFDQSxVQUFJLEtBQUssS0FBTCxDQUFXLGdCQUFmLEVBQWlDO0FBQy9CLGFBQUssS0FBTCxDQUFXLGdCQUFYLENBQTRCLENBQTVCO0FBQ0Q7QUFDRjs7O2tDQUVhLFcsRUFBYTtBQUN6QixXQUFLLFFBQUwsQ0FBYyxFQUFFLHdCQUFGLEVBQWQ7QUFDQSxVQUFJLEtBQUssS0FBTCxDQUFXLGFBQWYsRUFBOEI7QUFDNUIsYUFBSyxLQUFMLENBQVcsYUFBWCxDQUF5QixXQUF6QjtBQUNEO0FBQ0Y7Ozt1Q0FFa0IsVSxFQUFZO0FBQzdCLFdBQUssUUFBTCxDQUFjLEVBQUUsc0JBQUYsRUFBZDtBQUNBLFVBQUksS0FBSyxLQUFMLENBQVcsa0JBQWYsRUFBbUM7QUFDakMsYUFBSyxLQUFMLENBQVcsa0JBQVgsQ0FBOEIsVUFBOUI7QUFDRDtBQUNGOzs7b0NBRWUsVSxFQUFZO0FBQzFCLFdBQUssUUFBTCxDQUFjLEVBQUUsUUFBUSxJQUFWLEVBQWQ7QUFDQSxVQUFJLEtBQUssS0FBTCxDQUFXLGVBQWYsRUFBZ0M7QUFDOUIsYUFBSyxLQUFMLENBQVcsZUFBWCxDQUEyQixVQUEzQjtBQUNEO0FBQ0Y7OztpQ0FFWTtBQUNYLFVBQUksS0FBSyxLQUFMLENBQVcsVUFBZixFQUEyQjtBQUN6QixhQUFLLEtBQUwsQ0FBVyxVQUFYO0FBQ0Q7QUFDRjs7O3VDQUVrQjtBQUFBOztBQUNqQixXQUFLLFFBQUwsQ0FBYyxFQUFFLFVBQVUsSUFBWixFQUFkO0FBQ0EsVUFBSSxLQUFLLEtBQUwsQ0FBVyxRQUFmLEVBQXlCO0FBQ3ZCLGFBQUssS0FBTCxDQUFXLFFBQVgsQ0FBb0IsSUFBcEI7QUFDRDtBQUNELFdBQUssa0JBQUwsQ0FBd0IsRUFBeEI7QUFDQSxXQUFLLGVBQUwsQ0FBcUIsRUFBckI7QUFDQSxpQkFBVyxZQUFNO0FBQ2YsWUFBTSxhQUFhLG1CQUFTLFdBQVQsQ0FBcUIsT0FBSyxJQUFMLENBQVUsTUFBL0IsQ0FBbkI7QUFDQSxZQUFNLFlBQVksV0FBVyxhQUFYLENBQXlCLE9BQXpCLENBQWxCO0FBQ0Esa0JBQVUsS0FBVjtBQUNELE9BSkQsRUFJRyxFQUpIO0FBS0Q7Ozt1Q0FFa0IsUSxFQUFVO0FBQUE7O0FBQzNCLFVBQUksUUFBSixFQUFjO0FBQ1osYUFBSyxRQUFMLENBQWMsRUFBRSxrQkFBRixFQUFZLFFBQVEsS0FBcEIsRUFBZDtBQUNBLFlBQUksS0FBSyxLQUFMLENBQVcsUUFBZixFQUF5QjtBQUN2QixlQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLFFBQXBCO0FBQ0Q7QUFDRCxtQkFBVyxZQUFNO0FBQ2YsY0FBTSxnQkFBZ0IsbUJBQVMsV0FBVCxDQUFxQixPQUFLLElBQUwsQ0FBVSxTQUEvQixDQUF0QjtBQUNBLGNBQU0sV0FBVyxjQUFjLGFBQWQsQ0FBNEIsR0FBNUIsQ0FBakI7QUFDQSxjQUFJLFFBQUosRUFBYztBQUFFLHFCQUFTLEtBQVQ7QUFBbUI7QUFDcEMsU0FKRCxFQUlHLEVBSkg7QUFLRCxPQVZELE1BVU87QUFDTCxhQUFLLFFBQUwsQ0FBYyxFQUFFLFFBQVEsS0FBVixFQUFkO0FBQ0EsbUJBQVcsWUFBTTtBQUNmLGNBQU0sYUFBYSxtQkFBUyxXQUFULENBQXFCLE9BQUssSUFBTCxDQUFVLE1BQS9CLENBQW5CO0FBQ0EsY0FBTSxZQUFZLFdBQVcsYUFBWCxDQUF5QixPQUF6QixDQUFsQjtBQUNBLG9CQUFVLEtBQVY7QUFDRCxTQUpELEVBSUcsRUFKSDtBQUtEO0FBQ0QsVUFBSSxLQUFLLEtBQUwsQ0FBVyxVQUFmLEVBQTJCO0FBQ3pCLGFBQUssS0FBTCxDQUFXLFVBQVg7QUFDRDtBQUNGOzs7NENBRXVCO0FBQUE7O0FBQUEsMEJBQ2lCLEtBQUssS0FEdEIsQ0FDZCxNQURjO0FBQUEsVUFDZCxNQURjLGlDQUNMLEtBQUssS0FBTCxDQUFXLE1BRE47O0FBRXRCLFVBQUksQ0FBQyxNQUFMLEVBQWE7QUFDWCxhQUFLLGVBQUwsQ0FBcUIsS0FBSyxLQUFMLENBQVcsVUFBaEM7QUFDRCxPQUZELE1BRU87QUFDTCxhQUFLLFFBQUwsQ0FBYyxFQUFFLHFCQUFxQixJQUF2QixFQUFkO0FBQ0EsbUJBQVcsWUFBTTtBQUNmLGlCQUFLLFFBQUwsQ0FBYyxFQUFFLHFCQUFxQixLQUF2QixFQUFkO0FBQ0QsU0FGRCxFQUVHLEVBRkg7QUFHRDtBQUNGOzs7NkJBRVE7QUFBQTs7QUFDUCxpQkFBVyxZQUFNO0FBQ2YsWUFBSSxDQUFDLE9BQUssb0JBQUwsRUFBTCxFQUFrQztBQUNoQyxpQkFBSyxRQUFMLENBQWMsRUFBRSxRQUFRLEtBQVYsRUFBZDtBQUNBLGNBQUksT0FBSyxLQUFMLENBQVcsTUFBZixFQUF1QjtBQUNyQixtQkFBSyxLQUFMLENBQVcsTUFBWDtBQUNEO0FBQ0QsY0FBSSxPQUFLLEtBQUwsQ0FBVyxVQUFmLEVBQTJCO0FBQ3pCLG1CQUFLLEtBQUwsQ0FBVyxVQUFYO0FBQ0Q7QUFDRjtBQUNGLE9BVkQsRUFVRyxFQVZIO0FBV0Q7OzsyQ0FFc0I7QUFDckIsVUFBTSxTQUFTLG1CQUFTLFdBQVQsQ0FBcUIsSUFBckIsQ0FBZjtBQUNBLFVBQUksV0FBVyxTQUFTLGFBQXhCO0FBQ0EsYUFBTyxZQUFZLGFBQWEsTUFBaEMsRUFBd0M7QUFDdEMsbUJBQVcsU0FBUyxVQUFwQjtBQUNEO0FBQ0QsYUFBTyxDQUFDLENBQUMsUUFBVDtBQUNEOzs7NkJBRVE7QUFBQTs7QUFDUCxVQUFNLEtBQUssS0FBSyxLQUFMLENBQVcsRUFBWCxJQUFpQixLQUFLLEtBQUwsQ0FBVyxFQUF2QztBQURPLG9CQWdCSCxLQUFLLEtBaEJGO0FBQUEsVUFHTCxTQUhLLFdBR0wsU0FISztBQUFBLFVBR00sSUFITixXQUdNLElBSE47QUFBQSxVQUlMLEtBSkssV0FJTCxLQUpLO0FBQUEsVUFJRSxRQUpGLFdBSUUsUUFKRjtBQUFBLFVBSVksS0FKWixXQUlZLEtBSlo7QUFBQSxVQUtMLFNBTEssV0FLTCxTQUxLO0FBQUEscUNBTUwsUUFOSztBQUFBLFVBTUwsUUFOSyxvQ0FNTSxLQUFLLEtBQUwsQ0FBVyxRQU5qQjtBQUFBLFVBTTJCLGVBTjNCLFdBTTJCLGVBTjNCO0FBQUEsbUNBT0wsTUFQSztBQUFBLFVBT0wsTUFQSyxrQ0FPSSxLQUFLLEtBQUwsQ0FBVyxNQVBmO0FBQUEsVUFPdUIsYUFQdkIsV0FPdUIsYUFQdkI7QUFBQSx1Q0FRTCxVQVJLO0FBQUEsVUFRTCxVQVJLLHNDQVFRLEtBQUssS0FBTCxDQUFXLFVBUm5CO0FBQUEsVUFRK0IsaUJBUi9CLFdBUStCLGlCQVIvQjtBQUFBLHdDQVNMLFdBVEs7QUFBQSxVQVNMLFdBVEssdUNBU1MsS0FBSyxLQUFMLENBQVcsV0FUcEI7QUFBQSxVQVNpQyxrQkFUakMsV0FTaUMsa0JBVGpDO0FBQUEsVUFVTCxPQVZLLFdBVUwsT0FWSztBQUFBLFVBVUksWUFWSixXQVVJLFlBVko7QUFBQSxVQVdMLFVBWEssV0FXTCxVQVhLO0FBQUEsVUFXTyxVQVhQLFdBV08sVUFYUDtBQUFBLFVBWUwsSUFaSyxXQVlMLElBWks7QUFBQSxVQWFMLFFBYkssV0FhTCxRQWJLO0FBQUEsVUFhSyxNQWJMLFdBYUssTUFiTDtBQUFBLFVBYWEsVUFiYixXQWFhLFVBYmI7QUFBQSxVQWNMLGFBZEssV0FjTCxhQWRLO0FBQUEsVUFjVSxnQkFkVixXQWNVLGdCQWRWO0FBQUEsVUFjNEIsa0JBZDVCLFdBYzRCLGtCQWQ1QjtBQUFBLFVBY2dELGVBZGhELFdBY2dELGVBZGhEO0FBQUEsVUFlRixLQWZFOztBQWlCUCxVQUFNLFdBQ0osOEJBQUMsbUJBQUQ7QUFDRSxhQUFJLGVBRE47QUFFRSxjQUFPLElBRlQ7QUFHRSxlQUFRLEtBQUssS0FBTCxDQUFXLG1CQUhyQjtBQUlFLGdCQUFTLENBQUMsTUFKWjtBQUtFLGlCQUFVLE9BTFo7QUFNRSxnQkFBUyxlQUFlLFVBQUMsS0FBRDtBQUFBLGlCQUFXLGFBQWEsS0FBYixFQUFvQixVQUFwQixFQUFnQyxXQUFoQyxDQUFYO0FBQUEsU0FBZixHQUF5RSxTQU5wRjtBQU9FLGdCQUFTLFVBUFg7QUFRRSxnQkFBUyxVQVJYO0FBU0Usa0JBQVcsS0FBSyxrQkFBTCxDQUF3QixJQUF4QixDQUE2QixJQUE3QixDQVRiO0FBVUUsZ0JBQVMsS0FBSyxNQUFMLENBQVksSUFBWixDQUFpQixJQUFqQjtBQVZYLFFBREY7QUFjQSxVQUFNLG1CQUFtQiwwQkFDdkIsYUFEdUIsRUFFdkIsRUFBRSxzQkFBc0IsUUFBeEIsRUFGdUIsRUFHdkIsU0FIdUIsQ0FBekI7QUFLQSxVQUFNLGdCQUFnQixFQUFFLE1BQUYsRUFBTSxvQkFBTixFQUFpQixVQUFqQixFQUF1QixZQUF2QixFQUE4QixrQkFBOUIsRUFBd0MsWUFBeEMsRUFBK0Msa0JBQS9DLEVBQXRCO0FBQ0EsYUFDRTtBQUFBO1FBQWtCLGFBQWxCO1FBQ0U7QUFBQTtVQUFBLEVBQUssV0FBWSxnQkFBakI7QUFDRSwyQkFBWSxRQURkO0FBRUUsMEJBQWEsTUFBTSxNQUFOLEdBQWUsT0FBZixHQUF5QixRQUZ4QztBQUdFLDhCQUFpQjtBQUhuQjtVQU1JLFdBQ0EsOEJBQUMsZUFBRDtBQUNFLGdCQUFLLEVBRFA7QUFFRSxpQkFBSSxXQUZOO0FBR0Usc0JBQVcsUUFIYjtBQUlFLDhCQUFtQixLQUFLLGdCQUFMLENBQXNCLElBQXRCLENBQTJCLElBQTNCO0FBSnJCLFlBREEsR0FPQSw4QkFBQyxZQUFELDZCQUFtQixLQUFuQjtBQUNFLGdCQUFLLEVBRFA7QUFFRSxpQkFBSSxRQUZOO0FBR0Usd0JBQWEsVUFIZjtBQUlFLHlCQUFjLFdBSmhCO0FBS0UsOEJBQW1CLEtBQUssZ0JBQUwsQ0FBc0IsSUFBdEIsQ0FBMkIsSUFBM0IsQ0FMckI7QUFNRSwyQkFBZ0IsS0FBSyxhQUFMLENBQW1CLElBQW5CLENBQXdCLElBQXhCLENBTmxCO0FBT0Usc0JBQVcsS0FBSyxrQkFBTCxDQUF3QixJQUF4QixDQUE2QixJQUE3QixDQVBiO0FBUUUsc0JBQVc7QUFBQSxxQkFBTSxRQUFLLGVBQUwsQ0FBcUIsVUFBckIsQ0FBTjtBQUFBLGFBUmI7QUFTRSx5QkFBYyxLQUFLLHFCQUFMLENBQTJCLElBQTNCLENBQWdDLElBQWhDLENBVGhCO0FBVUUsd0JBQWEsS0FBSyxVQUFMLENBQWdCLElBQWhCLENBQXFCLElBQXJCLENBVmY7QUFXRSxvQkFBUyxLQUFLLE1BQUwsQ0FBWSxJQUFaLENBQWlCLElBQWpCO0FBWFg7QUFiSjtBQURGLE9BREY7QUFnQ0Q7Ozs7O2tCQTdMa0IsTTs7O0FBaU1yQixPQUFPLFNBQVAsR0FBbUI7QUFDakIsTUFBSSxpQkFBVSxNQURHO0FBRWpCLGFBQVcsaUJBQVUsTUFGSjtBQUdqQixTQUFPLGlCQUFVLE1BSEE7QUFJakIsWUFBVSxpQkFBVSxJQUpIO0FBS2pCLFNBQU8saUJBQVUsU0FBVixDQUFvQixDQUN6QixpQkFBVSxJQURlLEVBRXpCLGlCQUFVLE1BRmUsRUFHekIsaUJBQVUsS0FBVixDQUFnQjtBQUNkLGFBQVMsaUJBQVU7QUFETCxHQUFoQixDQUh5QixDQUFwQixDQUxVO0FBWWpCLFNBQU8saUJBQVUsTUFaQTtBQWFqQixnQkFBYyxpQkFBVSxNQWJQO0FBY2pCLFlBQVUsZUFkTztBQWVqQixtQkFBaUIsZUFmQTtBQWdCakIsVUFBUSxpQkFBVSxJQWhCRDtBQWlCakIsaUJBQWUsaUJBQVUsSUFqQlI7QUFrQmpCLGNBQVksaUJBQVUsTUFsQkw7QUFtQmpCLHFCQUFtQixpQkFBVSxNQW5CWjtBQW9CakIsV0FBUyxpQkFBVSxJQXBCRjtBQXFCakIsUUFBTSxpQkFBVSxPQUFWLENBQWtCLGVBQWxCLENBckJXO0FBc0JqQixnQkFBYyxpQkFBVSxJQXRCUDtBQXVCakIsY0FBWSxpQkFBVSxJQXZCTDtBQXdCakIsY0FBWSxpQkFBVSxJQXhCTDtBQXlCakIsVUFBUSxpQkFBVSxPQUFWLENBQ04saUJBQVUsS0FBVixDQUFnQjtBQUNkLFdBQU8saUJBQVUsTUFESDtBQUVkLFdBQU8saUJBQVUsTUFGSDtBQUdkLFVBQU0saUJBQVU7QUFIRixHQUFoQixDQURNLENBekJTO0FBZ0NqQixlQUFhLGlCQUFVLE1BaENOO0FBaUNqQixzQkFBb0IsaUJBQVUsTUFqQ2I7QUFrQ2pCLHNCQUFvQixpQkFBVSxJQWxDYjtBQW1DakIsb0JBQWtCLGlCQUFVLElBbkNYO0FBb0NqQixpQkFBZSxpQkFBVSxJQXBDUjtBQXFDakIsbUJBQWlCLGlCQUFVLElBckNWO0FBc0NqQixVQUFRLGlCQUFVLElBdENEO0FBdUNqQixZQUFVLGlCQUFVLElBdkNIO0FBd0NqQixjQUFZLGlCQUFVLElBeENMO0FBeUNqQixhQUFXLGlCQUFVLE1BekNKO0FBMENqQixRQUFNLGlCQUFVO0FBMUNDLENBQW5COztBQTZDQSxPQUFPLGFBQVAsR0FBdUIsSUFBdkIiLCJmaWxlIjoiTG9va3VwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB1dWlkIGZyb20gJ3V1aWQnO1xuaW1wb3J0IEZvcm1FbGVtZW50IGZyb20gJy4vRm9ybUVsZW1lbnQnO1xuaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcbmltcG9ydCBTcGlubmVyIGZyb20gJy4vU3Bpbm5lcic7XG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJztcbmltcG9ydCBEcm9wZG93bkJ1dHRvbiBmcm9tICcuL0Ryb3Bkb3duQnV0dG9uJztcbmltcG9ydCB7IERyb3Bkb3duTWVudUl0ZW0gfSBmcm9tICcuL0Ryb3Bkb3duTWVudSc7XG5pbXBvcnQgeyByZWdpc3RlclN0eWxlIH0gZnJvbSAnLi91dGlsJztcblxuLyoqXG4gKlxuICovXG5jbGFzcyBMb29rdXBTZWxlY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBvbktleURvd24oZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDggfHwgZS5rZXlDb2RlID09PSA0NikgeyAvLyBCYWNzcGFjZSAvIERFTFxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uUmVzZXRTZWxlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblJlc2V0U2VsZWN0aW9uKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyUGlsbChzZWxlY3RlZCkge1xuICAgIGNvbnN0IG9uUGlsbENsaWNrID0gKGUpID0+IHtcbiAgICAgIGUudGFyZ2V0LmZvY3VzKCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxhIGNsYXNzTmFtZT0nc2xkcy1waWxsJ1xuICAgICAgICBpZD17IHRoaXMucHJvcHMuaWQgfVxuICAgICAgICByZWY9J3BpbGwnXG4gICAgICAgIG9uS2V5RG93bj17IHRoaXMub25LZXlEb3duLmJpbmQodGhpcykgfVxuICAgICAgICBvbkNsaWNrPXsgb25QaWxsQ2xpY2sgfVxuICAgICAgICB0YWJJbmRleD17IDAgfVxuICAgICAgPlxuICAgICAgICB7XG4gICAgICAgICAgc2VsZWN0ZWQuaWNvbiA/XG4gICAgICAgICAgPEljb24gY2xhc3NOYW1lPSdzbGRzLXBpbGxfX2ljb24nIGNhdGVnb3J5PXsgc2VsZWN0ZWQuY2F0ZWdvcnkgfSBpY29uPXsgc2VsZWN0ZWQuaWNvbiB9IC8+IDpcbiAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgfVxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NsZHMtcGlsbF9fbGFiZWwnPnsgc2VsZWN0ZWQubGFiZWwgfTwvc3Bhbj5cbiAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9J3NsZHMtcGlsbF9fcmVtb3ZlJyB0eXBlPSdpY29uLWJhcmUnIGljb249J2Nsb3NlJyBhbHQ9J1JlbW92ZSdcbiAgICAgICAgICB0YWJJbmRleD17IC0xIH1cbiAgICAgICAgICBvbkNsaWNrPXsgdGhpcy5wcm9wcy5vblJlc2V0U2VsZWN0aW9uIH1cbiAgICAgICAgLz5cbiAgICAgIDwvYT5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaGlkZGVuLCBzZWxlY3RlZCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBsb29rdXBDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcbiAgICAgIHsgJ3NsZHMtaGlkZSc6IGhpZGRlbiB9XG4gICAgKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBsb29rdXBDbGFzc05hbWVzIH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLXBpbGxfX2NvbnRhaW5lcic+XG4gICAgICAgICAgeyBzZWxlY3RlZCA/IHRoaXMucmVuZGVyUGlsbChzZWxlY3RlZCkgOiB1bmRlZmluZWQgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufVxuXG5jb25zdCBMb29rdXBFbnRyeVR5cGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICBjYXRlZ29yeTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxufSk7XG5cbkxvb2t1cFNlbGVjdGlvbi5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzZWxlY3RlZDogTG9va3VwRW50cnlUeXBlLFxuICBoaWRkZW46IFByb3BUeXBlcy5ib29sLFxuICBvblJlc2V0U2VsZWN0aW9uOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cblxuLyoqXG4gKlxuICovXG5jbGFzcyBMb29rdXBTZWFyY2ggZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICByZWdpc3RlclN0eWxlKCdsb29rdXBTZWFyY2gnLCBbXG4gICAgICBbXG4gICAgICAgICcucmVhY3Qtc2xkcy1sb29rdXAtc2NvcGUtc2VsZWN0b3InLFxuICAgICAgICAneyB3aWR0aDogM3JlbTsgfScsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnLnJlYWN0LXNsZHMtbG9va3VwLXNjb3BlLXNlbGVjdG9yIC5zbGRzLWRyb3Bkb3duLXRyaWdnZXInLFxuICAgICAgICAneyBtYXJnaW4tbGVmdDogMDsgfScsXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICAnLnJlYWN0LXNsZHMtbG9va3VwLXNjb3BlLXNlbGVjdG9yIC5zbGRzLWRyb3Bkb3duLXRyaWdnZXIgLnNsZHMtYnV0dG9uJyxcbiAgICAgICAgJ3sgcGFkZGluZzogMCAwLjI1cmVtOyB9JyxcbiAgICAgIF0sXG4gICAgXSk7XG4gIH1cblxuICBvbkxvb2t1cEljb25DbGljaygpIHtcbiAgICB0aGlzLnByb3BzLm9uU3VibWl0KCk7XG4gIH1cblxuICBvbklucHV0S2V5RG93bihlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHsgLy8gcmV0dXJuIGtleVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGNvbnN0IHNlYXJjaFRleHQgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIGlmIChzZWFyY2hUZXh0KSB7XG4gICAgICAgIHRoaXMucHJvcHMub25TdWJtaXQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSA0MCkgeyAvLyBkb3duIGtleVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMucHJvcHMub25QcmVzc0Rvd24oKTtcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHsgLy8gRVNDXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLm9uS2V5RG93bikge1xuICAgICAgdGhpcy5wcm9wcy5vbktleURvd24oZSk7XG4gICAgfVxuICB9XG5cbiAgb25JbnB1dENoYW5nZShlKSB7XG4gICAgY29uc3Qgc2VhcmNoVGV4dCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoc2VhcmNoVGV4dCk7XG4gIH1cblxuICBvbklucHV0Qmx1cihlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25CbHVyKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQmx1cihlKTtcbiAgICB9XG4gIH1cblxuICBvblNjb3BlTWVudUNsaWNrKGUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vblNjb3BlTWVudUNsaWNrKSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2NvcGVNZW51Q2xpY2soZSk7XG4gICAgfVxuICB9XG5cbiAgb25NZW51SXRlbUNsaWNrKHNjb3BlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25TY29wZUNoYW5nZSkge1xuICAgICAgdGhpcy5wcm9wcy5vblNjb3BlQ2hhbmdlKHNjb3BlLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJTZWFyY2hJbnB1dChwcm9wcykge1xuICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBoaWRkZW4sIHNlYXJjaFRleHQgfSA9IHByb3BzO1xuICAgIGNvbnN0IHNlYXJjaElucHV0Q2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXG4gICAgICAnc2xkcy1ncmlkJyxcbiAgICAgICdzbGRzLWlucHV0LWhhcy1pY29uJyxcbiAgICAgICdzbGRzLWlucHV0LWhhcy1pY29uLS1yaWdodCcsXG4gICAgICB7ICdzbGRzLWhpZGUnOiBoaWRkZW4gfSxcbiAgICAgIGNsYXNzTmFtZVxuICAgICk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc2VhcmNoSW5wdXRDbGFzc05hbWVzIH0+XG4gICAgICAgIDxJbnB1dCB7IC4uLnByb3BzIH1cbiAgICAgICAgICByZWY9J2lucHV0J1xuICAgICAgICAgIHZhbHVlPXsgc2VhcmNoVGV4dCB9XG4gICAgICAgICAgb25LZXlEb3duPXsgdGhpcy5vbklucHV0S2V5RG93bi5iaW5kKHRoaXMpIH1cbiAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25JbnB1dENoYW5nZS5iaW5kKHRoaXMpIH1cbiAgICAgICAgICBvbkJsdXI9eyB0aGlzLm9uSW5wdXRCbHVyLmJpbmQodGhpcykgfVxuICAgICAgICAvPlxuICAgICAgICA8SWNvbiBpY29uPSdzZWFyY2gnIGNsYXNzTmFtZT0nc2xkcy1pbnB1dF9faWNvbicgc3R5bGU9eyB7IGN1cnNvcjogJ3BvaW50ZXInIH0gfVxuICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLm9uTG9va3VwSWNvbkNsaWNrLmJpbmQodGhpcykgfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlclNjb3BlU2VsZWN0b3Ioc2NvcGVzLCB0YXJnZXQpIHtcbiAgICBsZXQgdGFyZ2V0U2NvcGUgPSBzY29wZXNbMF0gfHwge307XG4gICAgZm9yIChjb25zdCBzY29wZSBvZiBzY29wZXMpIHtcbiAgICAgIGlmIChzY29wZS52YWx1ZSA9PT0gdGFyZ2V0KSB7XG4gICAgICAgIHRhcmdldFNjb3BlID0gc2NvcGU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBpY29uID0gPEljb24gaWNvbj17IHRhcmdldFNjb3BlLmljb24gfHwgJ25vbmUnIH0gc2l6ZT0neC1zbWFsbCcgLz47XG4gICAgY29uc3Qgc2VsZWN0b3JDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcbiAgICAgICdzbGRzLWdyaWQnLFxuICAgICAgJ3NsZHMtZ3JpZC0tYWxpZ24tY2VudGVyJyxcbiAgICAgICdzbGRzLWdyaWQtLXZlcnRpY2FsLWFsaWduLWNlbnRlcicsXG4gICAgICAncmVhY3Qtc2xkcy1sb29rdXAtc2NvcGUtc2VsZWN0b3InXG4gICAgKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBzZWxlY3RvckNsYXNzTmFtZXMgfT5cbiAgICAgICAgPERyb3Bkb3duQnV0dG9uIGxhYmVsPXsgaWNvbiB9XG4gICAgICAgICAgb25DbGljaz17IHRoaXMub25TY29wZU1lbnVDbGljay5iaW5kKHRoaXMpIH1cbiAgICAgICAgICBvbk1lbnVJdGVtQ2xpY2s9eyB0aGlzLm9uTWVudUl0ZW1DbGljay5iaW5kKHRoaXMpIH1cbiAgICAgICAgPlxuICAgICAgICAgIHsgc2NvcGVzLm1hcCgoc2NvcGUpID0+IDxEcm9wZG93bk1lbnVJdGVtIGtleT17IHNjb3BlLnZhbHVlIH0geyAuLi5zY29wZSB9IC8+KSB9XG4gICAgICAgIDwvRHJvcGRvd25CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc2NvcGVzLCBoaWRkZW4sIGNsYXNzTmFtZSwgdGFyZ2V0U2NvcGUsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmIChzY29wZXMpIHtcbiAgICAgIGNvbnN0IGxvb2t1cFNlYXJjaENsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxuICAgICAgICAnc2xkcy1ncmlkJyxcbiAgICAgICAgJ3NsZHMtZm9ybS1lbGVtZW50X19jb250cm9sJyxcbiAgICAgICAgJ3NsZHMtYm94LS1ib3JkZXInLFxuICAgICAgICB7ICdzbGRzLWhpZGUnOiBoaWRkZW4gfVxuICAgICAgKTtcbiAgICAgIGNvbnN0IHN0eWxlcyA9IHsgJ1dlYmtpdEZsZXhXcmFwJzogJ25vd3JhcCcsICdtc0ZsZXhXcmFwJzogJ25vd3JhcCcsIGZsZXhXcmFwOiAnbm93cmFwJyB9O1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBsb29rdXBTZWFyY2hDbGFzc05hbWVzIH0gc3R5bGU9eyBzdHlsZXMgfT5cbiAgICAgICAgICB7IHRoaXMucmVuZGVyU2NvcGVTZWxlY3RvcihzY29wZXMsIHRhcmdldFNjb3BlKSB9XG4gICAgICAgICAgeyB0aGlzLnJlbmRlclNlYXJjaElucHV0KHsgLi4ucHJvcHMsIGNsYXNzTmFtZTogJ3NsZHMtY29sJywgYmFyZTogdHJ1ZSB9KSB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucmVuZGVyU2VhcmNoSW5wdXQodGhpcy5wcm9wcyk7XG4gIH1cblxufVxuXG5cbkxvb2t1cFNlYXJjaC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaGlkZGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2VhcmNoVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2NvcGVzOiBQcm9wVHlwZXMuYXJyYXlPZihcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGljb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgfSlcbiAgKSxcbiAgdGFyZ2V0U2NvcGU6IFByb3BUeXBlcy5hbnksXG4gIG9uS2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25TY29wZU1lbnVDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU2NvcGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvblByZXNzRG93bjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU3VibWl0OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Db21wbGV0ZTogUHJvcFR5cGVzLmZ1bmMsXG59O1xuXG4vKipcbiAqXG4gKi9cbmNsYXNzIExvb2t1cENhbmRpZGF0ZUxpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLmZvY3VzKSB7XG4gICAgICB0aGlzLmZvY3VzVG9UYXJnZXRJdGVtRWwoMCk7XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgIGlmICh0aGlzLnByb3BzLmZvY3VzICYmICFwcmV2UHJvcHMuZm9jdXMpIHtcbiAgICAgIHRoaXMuZm9jdXNUb1RhcmdldEl0ZW1FbCgwKTtcbiAgICB9XG4gIH1cblxuICBvblNlbGVjdChlbnRyeSkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KGVudHJ5KTtcbiAgICB9XG4gIH1cblxuICBvbktleURvd24oZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDM4IHx8IGUua2V5Q29kZSA9PT0gNDApIHsgLy8gVVAvRE9XTlxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGNvbnN0IGN1cnJlbnRFbCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICBsZXQgaXRlbUVsID0gZS5rZXlDb2RlID09PSA0MCA/IGN1cnJlbnRFbC5uZXh0U2libGluZyA6IGN1cnJlbnRFbC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICB3aGlsZSAoaXRlbUVsKSB7XG4gICAgICAgIGNvbnN0IGFuY2hvckVsID0gaXRlbUVsLnF1ZXJ5U2VsZWN0b3IoJy5yZWFjdC1zbGRzLWNhbmRpZGF0ZVt0YWJJbmRleF0nKTtcbiAgICAgICAgaWYgKGFuY2hvckVsICYmICFhbmNob3JFbC5kaXNhYmxlZCkge1xuICAgICAgICAgIGFuY2hvckVsLmZvY3VzKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGl0ZW1FbCA9IGUua2V5Q29kZSA9PT0gNDAgPyBpdGVtRWwubmV4dFNpYmxpbmcgOiBpdGVtRWwucHJldmlvdXNTaWJsaW5nO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAyNykgeyAvLyBFU0NcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLm9uU2VsZWN0KG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIGZvY3VzVG9UYXJnZXRJdGVtRWwoaW5kZXgpIHtcbiAgICBjb25zdCBlbCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuICAgIGNvbnN0IGFuY2hvcnMgPSBlbC5xdWVyeVNlbGVjdG9yQWxsKCcucmVhY3Qtc2xkcy1jYW5kaWRhdGVbdGFiSW5kZXhdJyk7XG4gICAgaWYgKGFuY2hvcnNbaW5kZXhdKSB7XG4gICAgICBhbmNob3JzW2luZGV4XS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlckNhbmRpZGF0ZShlbnRyeSkge1xuICAgIHJldHVybiAoXG4gICAgICA8bGkgY2xhc3NOYW1lPSdzbGRzLWxvb2t1cF9faXRlbScga2V5PXsgZW50cnkudmFsdWUgfT5cbiAgICAgICAgPGEgY2xhc3NOYW1lPSdzbGRzLXRydW5jYXRlIHJlYWN0LXNsZHMtY2FuZGlkYXRlJyB0YWJJbmRleD17IC0xIH0gcm9sZT0nb3B0aW9uJ1xuICAgICAgICAgIG9uS2V5RG93bj17IChlKSA9PiBlLmtleUNvZGUgPT09IDEzICYmIHRoaXMub25TZWxlY3QoZW50cnkpIH1cbiAgICAgICAgICBvbkJsdXI9eyB0aGlzLnByb3BzLm9uQmx1ciB9XG4gICAgICAgICAgb25DbGljaz17ICgpID0+IHRoaXMub25TZWxlY3QoZW50cnkpIH1cbiAgICAgICAgPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGVudHJ5Lmljb24gP1xuICAgICAgICAgICAgPEljb24gY2F0ZWdvcnk9eyBlbnRyeS5jYXRlZ29yeSB9IGljb249eyBlbnRyeS5pY29uIH0gc2l6ZT0nc21hbGwnIC8+IDpcbiAgICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgICAgIH1cbiAgICAgICAgICB7IGVudHJ5LmxhYmVsIH1cbiAgICAgICAgPC9hPlxuICAgICAgPC9saT5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGF0YSA9IFtdLCBoaWRkZW4sIGxvYWRpbmcsIGhlYWRlciwgZm9vdGVyLCBmaWx0ZXIgPSAoKSA9PiB0cnVlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGxvb2t1cE1lbnVDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcbiAgICAgICdzbGRzLWxvb2t1cF9fbWVudScsXG4gICAgICB7ICdzbGRzLWhpZGUnOiBoaWRkZW4gfVxuICAgICk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgbG9va3VwTWVudUNsYXNzTmFtZXMgfSByb2xlPSdsaXN0Ym94J1xuICAgICAgICBvbktleURvd249eyB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpIH1cbiAgICAgID5cbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlciA/XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsZHMtbG9va3VwX19pdGVtJz57IGhlYWRlciB9PC9kaXY+IDpcbiAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgfVxuICAgICAgICA8dWwgY2xhc3NOYW1lPSdzbGRzLWxvb2t1cF9fbGlzdCcgcm9sZT0ncHJlc2VudGF0aW9uJz5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBkYXRhLmZpbHRlcihmaWx0ZXIpLm1hcCh0aGlzLnJlbmRlckNhbmRpZGF0ZS5iaW5kKHRoaXMpKVxuICAgICAgICAgIH1cbiAgICAgICAgICB7XG4gICAgICAgICAgICBsb2FkaW5nID9cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3NsZHMtbG9va3VwX19pdGVtJyBrZXk9J2xvYWRpbmcnPlxuICAgICAgICAgICAgICA8U3Bpbm5lciBzaXplPSdzbWFsbCcgc3R5bGU9eyB7IG1hcmdpbjogJzAgYXV0bycgfSB9IC8+XG4gICAgICAgICAgICA8L2xpPiA6XG4gICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgICB9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIHtcbiAgICAgICAgICBmb290ZXIgP1xuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLWxvb2t1cF9faXRlbSc+eyBmb290ZXIgfTwvZGl2PiA6XG4gICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxufVxuXG5Mb29rdXBDYW5kaWRhdGVMaXN0LnByb3BUeXBlcyA9IHtcbiAgZGF0YTogUHJvcFR5cGVzLmFycmF5T2YoTG9va3VwRW50cnlUeXBlKSxcbiAgZm9jdXM6IFByb3BUeXBlcy5ib29sLFxuICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgaGlkZGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgZmlsdGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxuICBoZWFkZXI6IFByb3BUeXBlcy5ub2RlLFxuICBmb290ZXI6IFByb3BUeXBlcy5ub2RlLFxufTtcblxuXG4vKipcbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvb2t1cCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpZDogYGZvcm0tZWxlbWVudC0ke3V1aWQoKX1gLFxuICAgICAgc2VsZWN0ZWQ6IHByb3BzLmRlZmF1bHRTZWxlY3RlZCxcbiAgICAgIG9wZW5lZDogcHJvcHMuZGVmYXVsdE9wZW5lZCxcbiAgICAgIHNlYXJjaFRleHQ6IHByb3BzLmRlZmF1bHRTZWFyY2hUZXh0LFxuICAgICAgdGFyZ2V0U2NvcGU6IHByb3BzLmRlZmF1bHRUYXJnZXRTY29wZSxcbiAgICAgIGZvY3VzRmlyc3RDYW5kaWRhdGU6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICBvblNjb3BlTWVudUNsaWNrKGUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICBpZiAodGhpcy5wcm9wcy5vblNjb3BlTWVudUNsaWNrKSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2NvcGVNZW51Q2xpY2soZSk7XG4gICAgfVxuICB9XG5cbiAgb25TY29wZUNoYW5nZSh0YXJnZXRTY29wZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB0YXJnZXRTY29wZSB9KTtcbiAgICBpZiAodGhpcy5wcm9wcy5vblNjb3BlQ2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2NvcGVDaGFuZ2UodGFyZ2V0U2NvcGUpO1xuICAgIH1cbiAgfVxuXG4gIG9uU2VhcmNoVGV4dENoYW5nZShzZWFyY2hUZXh0KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaFRleHQgfSk7XG4gICAgaWYgKHRoaXMucHJvcHMub25TZWFyY2hUZXh0Q2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VhcmNoVGV4dENoYW5nZShzZWFyY2hUZXh0KTtcbiAgICB9XG4gIH1cblxuICBvbkxvb2t1cFJlcXVlc3Qoc2VhcmNoVGV4dCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IHRydWUgfSk7XG4gICAgaWYgKHRoaXMucHJvcHMub25Mb29rdXBSZXF1ZXN0KSB7XG4gICAgICB0aGlzLnByb3BzLm9uTG9va3VwUmVxdWVzdChzZWFyY2hUZXh0KTtcbiAgICB9XG4gIH1cblxuICBvbkNvbXBsZXRlKCkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcbiAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uUmVzZXRTZWxlY3Rpb24oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkOiBudWxsIH0pO1xuICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KG51bGwpO1xuICAgIH1cbiAgICB0aGlzLm9uU2VhcmNoVGV4dENoYW5nZSgnJyk7XG4gICAgdGhpcy5vbkxvb2t1cFJlcXVlc3QoJycpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3Qgc2VhcmNoRWxlbSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy5zZWFyY2gpO1xuICAgICAgY29uc3QgaW5wdXRFbGVtID0gc2VhcmNoRWxlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgICAgaW5wdXRFbGVtLmZvY3VzKCk7XG4gICAgfSwgMTApO1xuICB9XG5cbiAgb25Mb29rdXBJdGVtU2VsZWN0KHNlbGVjdGVkKSB7XG4gICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWQsIG9wZW5lZDogZmFsc2UgfSk7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xuICAgICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KHNlbGVjdGVkKTtcbiAgICAgIH1cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3Rpb25FbGVtID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLnNlbGVjdGlvbik7XG4gICAgICAgIGNvbnN0IHBpbGxFbGVtID0gc2VsZWN0aW9uRWxlbS5xdWVyeVNlbGVjdG9yKCdhJyk7XG4gICAgICAgIGlmIChwaWxsRWxlbSkgeyBwaWxsRWxlbS5mb2N1cygpOyB9XG4gICAgICB9LCAxMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNlYXJjaEVsZW0gPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnMuc2VhcmNoKTtcbiAgICAgICAgY29uc3QgaW5wdXRFbGVtID0gc2VhcmNoRWxlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgICAgICBpbnB1dEVsZW0uZm9jdXMoKTtcbiAgICAgIH0sIDEwKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMub25Db21wbGV0ZSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKCk7XG4gICAgfVxuICB9XG5cbiAgb25Gb2N1c0ZpcnN0Q2FuZGlkYXRlKCkge1xuICAgIGNvbnN0IHsgb3BlbmVkID0gdGhpcy5zdGF0ZS5vcGVuZWQgfSA9IHRoaXMucHJvcHM7XG4gICAgaWYgKCFvcGVuZWQpIHtcbiAgICAgIHRoaXMub25Mb29rdXBSZXF1ZXN0KHRoaXMuc3RhdGUuc2VhcmNoVGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c0ZpcnN0Q2FuZGlkYXRlOiB0cnVlIH0pO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c0ZpcnN0Q2FuZGlkYXRlOiBmYWxzZSB9KTtcbiAgICAgIH0sIDEwKTtcbiAgICB9XG4gIH1cblxuICBvbkJsdXIoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNGb2N1c2VkSW5Db21wb25lbnQoKSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25CbHVyKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkJsdXIoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNvbXBsZXRlKSB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCAxMCk7XG4gIH1cblxuICBpc0ZvY3VzZWRJbkNvbXBvbmVudCgpIHtcbiAgICBjb25zdCByb290RWwgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICBsZXQgdGFyZ2V0RWwgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgIHdoaWxlICh0YXJnZXRFbCAmJiB0YXJnZXRFbCAhPT0gcm9vdEVsKSB7XG4gICAgICB0YXJnZXRFbCA9IHRhcmdldEVsLnBhcmVudE5vZGU7XG4gICAgfVxuICAgIHJldHVybiAhIXRhcmdldEVsO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGlkID0gdGhpcy5wcm9wcy5pZCB8fCB0aGlzLnN0YXRlLmlkO1xuICAgIGNvbnN0IHtcbiAgICAgIHRvdGFsQ29scywgY29scyxcbiAgICAgIGxhYmVsLCByZXF1aXJlZCwgZXJyb3IsXG4gICAgICBjbGFzc05hbWUsXG4gICAgICBzZWxlY3RlZCA9IHRoaXMuc3RhdGUuc2VsZWN0ZWQsIGRlZmF1bHRTZWxlY3RlZCxcbiAgICAgIG9wZW5lZCA9IHRoaXMuc3RhdGUub3BlbmVkLCBkZWZhdWx0T3BlbmVkLFxuICAgICAgc2VhcmNoVGV4dCA9IHRoaXMuc3RhdGUuc2VhcmNoVGV4dCwgZGVmYXVsdFNlYXJjaFRleHQsXG4gICAgICB0YXJnZXRTY29wZSA9IHRoaXMuc3RhdGUudGFyZ2V0U2NvcGUsIGRlZmF1bHRUYXJnZXRTY29wZSxcbiAgICAgIGxvYWRpbmcsIGxvb2t1cEZpbHRlcixcbiAgICAgIGxpc3RIZWFkZXIsIGxpc3RGb290ZXIsXG4gICAgICBkYXRhLFxuICAgICAgb25TZWxlY3QsIG9uQmx1ciwgb25Db21wbGV0ZSxcbiAgICAgIG9uU2NvcGVDaGFuZ2UsIG9uU2NvcGVNZW51Q2xpY2ssIG9uU2VhcmNoVGV4dENoYW5nZSwgb25Mb29rdXBSZXF1ZXN0LFxuICAgICAgLi4ucHJvcHMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZHJvcGRvd24gPSAoXG4gICAgICA8TG9va3VwQ2FuZGlkYXRlTGlzdFxuICAgICAgICByZWY9J2NhbmRpZGF0ZUxpc3QnXG4gICAgICAgIGRhdGE9eyBkYXRhIH1cbiAgICAgICAgZm9jdXM9eyB0aGlzLnN0YXRlLmZvY3VzRmlyc3RDYW5kaWRhdGUgfVxuICAgICAgICBoaWRkZW49eyAhb3BlbmVkIH1cbiAgICAgICAgbG9hZGluZz17IGxvYWRpbmcgfVxuICAgICAgICBmaWx0ZXI9eyBsb29rdXBGaWx0ZXIgPyAoZW50cnkpID0+IGxvb2t1cEZpbHRlcihlbnRyeSwgc2VhcmNoVGV4dCwgdGFyZ2V0U2NvcGUpIDogdW5kZWZpbmVkIH1cbiAgICAgICAgaGVhZGVyPXsgbGlzdEhlYWRlciB9XG4gICAgICAgIGZvb3Rlcj17IGxpc3RGb290ZXIgfVxuICAgICAgICBvblNlbGVjdD17IHRoaXMub25Mb29rdXBJdGVtU2VsZWN0LmJpbmQodGhpcykgfVxuICAgICAgICBvbkJsdXI9eyB0aGlzLm9uQmx1ci5iaW5kKHRoaXMpIH1cbiAgICAgIC8+XG4gICAgKTtcbiAgICBjb25zdCBsb29rdXBDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcbiAgICAgICdzbGRzLWxvb2t1cCcsXG4gICAgICB7ICdzbGRzLWhhcy1zZWxlY3Rpb24nOiBzZWxlY3RlZCB9LFxuICAgICAgY2xhc3NOYW1lXG4gICAgKTtcbiAgICBjb25zdCBmb3JtRWxlbVByb3BzID0geyBpZCwgdG90YWxDb2xzLCBjb2xzLCBsYWJlbCwgcmVxdWlyZWQsIGVycm9yLCBkcm9wZG93biB9O1xuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybUVsZW1lbnQgeyAuLi5mb3JtRWxlbVByb3BzIH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgbG9va3VwQ2xhc3NOYW1lcyB9XG4gICAgICAgICAgZGF0YS1zZWxlY3Q9J3NpbmdsZSdcbiAgICAgICAgICBkYXRhLXNjb3BlPXsgcHJvcHMuc2NvcGVzID8gJ211bHRpJyA6ICdzaW5nbGUnIH1cbiAgICAgICAgICBkYXRhLXR5cGVhaGVhZD17IGZhbHNlIH1cbiAgICAgICAgPlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdGVkID9cbiAgICAgICAgICAgIDxMb29rdXBTZWxlY3Rpb25cbiAgICAgICAgICAgICAgaWQ9eyBpZCB9XG4gICAgICAgICAgICAgIHJlZj0nc2VsZWN0aW9uJ1xuICAgICAgICAgICAgICBzZWxlY3RlZD17IHNlbGVjdGVkIH1cbiAgICAgICAgICAgICAgb25SZXNldFNlbGVjdGlvbj17IHRoaXMub25SZXNldFNlbGVjdGlvbi5iaW5kKHRoaXMpIH1cbiAgICAgICAgICAgIC8+IDpcbiAgICAgICAgICAgIDxMb29rdXBTZWFyY2ggeyAuLi5wcm9wcyB9XG4gICAgICAgICAgICAgIGlkPXsgaWQgfVxuICAgICAgICAgICAgICByZWY9J3NlYXJjaCdcbiAgICAgICAgICAgICAgc2VhcmNoVGV4dD17IHNlYXJjaFRleHQgfVxuICAgICAgICAgICAgICB0YXJnZXRTY29wZT17IHRhcmdldFNjb3BlIH1cbiAgICAgICAgICAgICAgb25TY29wZU1lbnVDbGljaz17IHRoaXMub25TY29wZU1lbnVDbGljay5iaW5kKHRoaXMpIH1cbiAgICAgICAgICAgICAgb25TY29wZUNoYW5nZT17IHRoaXMub25TY29wZUNoYW5nZS5iaW5kKHRoaXMpIH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uU2VhcmNoVGV4dENoYW5nZS5iaW5kKHRoaXMpIH1cbiAgICAgICAgICAgICAgb25TdWJtaXQ9eyAoKSA9PiB0aGlzLm9uTG9va3VwUmVxdWVzdChzZWFyY2hUZXh0KSB9XG4gICAgICAgICAgICAgIG9uUHJlc3NEb3duPXsgdGhpcy5vbkZvY3VzRmlyc3RDYW5kaWRhdGUuYmluZCh0aGlzKSB9XG4gICAgICAgICAgICAgIG9uQ29tcGxldGU9eyB0aGlzLm9uQ29tcGxldGUuYmluZCh0aGlzKSB9XG4gICAgICAgICAgICAgIG9uQmx1cj17IHRoaXMub25CbHVyLmJpbmQodGhpcykgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Gb3JtRWxlbWVudD5cbiAgICApO1xuICB9XG59XG5cblxuTG9va3VwLnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZXJyb3I6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5ib29sLFxuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIG1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgfSksXG4gIF0pLFxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzZWxlY3RlZDogTG9va3VwRW50cnlUeXBlLFxuICBkZWZhdWx0U2VsZWN0ZWQ6IExvb2t1cEVudHJ5VHlwZSxcbiAgb3BlbmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGVmYXVsdE9wZW5lZDogUHJvcFR5cGVzLmJvb2wsXG4gIHNlYXJjaFRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGRlZmF1bHRTZWFyY2hUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGF0YTogUHJvcFR5cGVzLmFycmF5T2YoTG9va3VwRW50cnlUeXBlKSxcbiAgbG9va3VwRmlsdGVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgbGlzdEhlYWRlcjogUHJvcFR5cGVzLm5vZGUsXG4gIGxpc3RGb290ZXI6IFByb3BUeXBlcy5ub2RlLFxuICBzY29wZXM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB9KVxuICApLFxuICB0YXJnZXRTY29wZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZGVmYXVsdFRhcmdldFNjb3BlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvblNlYXJjaFRleHRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvblNjb3BlTWVudUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25TY29wZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uTG9va3VwUmVxdWVzdDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgb25Db21wbGV0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIHRvdGFsQ29sczogUHJvcFR5cGVzLm51bWJlcixcbiAgY29sczogUHJvcFR5cGVzLm51bWJlcixcbn07XG5cbkxvb2t1cC5pc0Zvcm1FbGVtZW50ID0gdHJ1ZTtcbiJdfQ==