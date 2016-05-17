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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0xvb2t1cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0lBS00sZTs7Ozs7Ozs7Ozs4QkFDTSxDLEVBQUc7QUFDWCxVQUFJLEVBQUUsT0FBRixLQUFjLENBQWQsSUFBbUIsRUFBRSxPQUFGLEtBQWMsRUFBckMsRUFBeUM7O0FBQ3ZDLFVBQUUsY0FBRjtBQUNBLFVBQUUsZUFBRjtBQUNBLFlBQUksS0FBSyxLQUFMLENBQVcsZ0JBQWYsRUFBaUM7QUFDL0IsZUFBSyxLQUFMLENBQVcsZ0JBQVg7QUFDRDtBQUNGO0FBQ0Y7OzsrQkFFVSxRLEVBQVU7QUFDbkIsVUFBTSxjQUFjLFNBQWQsV0FBYyxDQUFDLENBQUQsRUFBTztBQUN6QixVQUFFLE1BQUYsQ0FBUyxLQUFUO0FBQ0EsVUFBRSxjQUFGO0FBQ0EsVUFBRSxlQUFGO0FBQ0QsT0FKRDtBQUtBLGFBQ0U7QUFBQTtRQUFBLEVBQUcsV0FBVSxXQUFiO0FBQ0UsY0FBSyxLQUFLLEtBQUwsQ0FBVyxFQURsQjtBQUVFLGVBQUksTUFGTjtBQUdFLHFCQUFZLEtBQUssU0FBTCxDQUFlLElBQWYsQ0FBb0IsSUFBcEIsQ0FIZDtBQUlFLG1CQUFVLFdBSlo7QUFLRSxvQkFBVztBQUxiO1FBUUksU0FBUyxJQUFULEdBQ0EsZ0RBQU0sV0FBVSxpQkFBaEIsRUFBa0MsVUFBVyxTQUFTLFFBQXRELEVBQWlFLE1BQU8sU0FBUyxJQUFqRixHQURBLEdBRUEsU0FWSjtRQVlFO0FBQUE7VUFBQSxFQUFNLFdBQVUsa0JBQWhCO1VBQXFDLFNBQVM7QUFBOUMsU0FaRjtRQWFFLGtEQUFRLFdBQVUsbUJBQWxCLEVBQXNDLE1BQUssV0FBM0MsRUFBdUQsTUFB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LFNBQU8saUJBQVUsTUFaQTtBQWFqQixnQkFBYyxpQkFBVSxNQWJQO0FBY2pCLFlBQVUsZUFkTztBQWVqQixtQkFBaUIsZUFmQTtBQWdCakIsVUFBUSxpQkFBVSxJQWhCRDtBQWlCakIsaUJBQWUsaUJBQVUsSUFqQlI7QUFrQmpCLGNBQVksaUJBQVUsTUFsQkw7QUFtQmpCLHFCQUFtQixpQkFBVSxNQW5CWjtBQW9CakIsV0FBUyxpQkFBVSxJQXBCRjtBQXFCakIsUUFBTSxpQkFBVSxPQUFWLENBQWtCLGVBQWxCLENBckJXO0FBc0JqQixnQkFBYyxpQkFBVSxJQXRCUDtBQXVCakIsY0FBWSxpQkFBVSxJQXZCTDtBQXdCakIsY0FBWSxpQkFBVSxJQXhCTDtBQXlCakIsVUFBUSxpQkFBVSxPQUFWLENBQ04saUJBQVUsS0FBVixDQUFnQjtBQUNkLFdBQU8saUJBQVUsTUFESDtBQUVkLFdBQU8saUJBQVUsTUFGSDtBQUdkLFVBQU0saUJBQVU7QUFIRixHQUFoQixDQURNLENBekJTO0FBZ0NqQixlQUFhLGlCQUFVLE1BaENOO0FBaUNqQixzQkFBb0IsaUJBQVUsTUFqQ2I7QUFrQ2pCLHNCQUFvQixpQkFBVSxJQWxDYjtBQW1DakIsb0JBQWtCLGlCQUFVLElBbkNYO0FBb0NqQixpQkFBZSxpQkFBVSxJQXBDUjtBQXFDakIsbUJBQWlCLGlCQUFVLElBckNWO0FBc0NqQixVQUFRLGlCQUFVLElBdENEO0FBdUNqQixZQUFVLGlCQUFVLElBdkNIO0FBd0NqQixjQUFZLGlCQUFVLElBeENMO0FBeUNqQixhQUFXLGlCQUFVLE1BekNKO0FBMENqQixRQUFNLGlCQUFVO0FBMUNDLENBQW5COztBQTZDQSxPQUFPLGFBQVAsR0FBdUIsSUFBdkIiLCJmaWxlIjoiTG9va3VwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XHJcbmltcG9ydCB1dWlkIGZyb20gJ3V1aWQnO1xyXG5pbXBvcnQgRm9ybUVsZW1lbnQgZnJvbSAnLi9Gb3JtRWxlbWVudCc7XHJcbmltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0JztcclxuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi9TcGlubmVyJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbic7XHJcbmltcG9ydCBEcm9wZG93bkJ1dHRvbiBmcm9tICcuL0Ryb3Bkb3duQnV0dG9uJztcclxuaW1wb3J0IHsgRHJvcGRvd25NZW51SXRlbSB9IGZyb20gJy4vRHJvcGRvd25NZW51JztcclxuaW1wb3J0IHsgcmVnaXN0ZXJTdHlsZSB9IGZyb20gJy4vdXRpbCc7XHJcblxyXG4vKipcclxuICpcclxuICovXHJcbmNsYXNzIExvb2t1cFNlbGVjdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgb25LZXlEb3duKGUpIHtcclxuICAgIGlmIChlLmtleUNvZGUgPT09IDggfHwgZS5rZXlDb2RlID09PSA0NikgeyAvLyBCYWNzcGFjZSAvIERFTFxyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uUmVzZXRTZWxlY3Rpb24pIHtcclxuICAgICAgICB0aGlzLnByb3BzLm9uUmVzZXRTZWxlY3Rpb24oKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyUGlsbChzZWxlY3RlZCkge1xyXG4gICAgY29uc3Qgb25QaWxsQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICBlLnRhcmdldC5mb2N1cygpO1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGEgY2xhc3NOYW1lPSdzbGRzLXBpbGwnXHJcbiAgICAgICAgaWQ9eyB0aGlzLnByb3BzLmlkIH1cclxuICAgICAgICByZWY9J3BpbGwnXHJcbiAgICAgICAgb25LZXlEb3duPXsgdGhpcy5vbktleURvd24uYmluZCh0aGlzKSB9XHJcbiAgICAgICAgb25DbGljaz17IG9uUGlsbENsaWNrIH1cclxuICAgICAgICB0YWJJbmRleD17IDAgfVxyXG4gICAgICA+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgc2VsZWN0ZWQuaWNvbiA/XHJcbiAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9J3NsZHMtcGlsbF9faWNvbicgY2F0ZWdvcnk9eyBzZWxlY3RlZC5jYXRlZ29yeSB9IGljb249eyBzZWxlY3RlZC5pY29uIH0gLz4gOlxyXG4gICAgICAgICAgdW5kZWZpbmVkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc2xkcy1waWxsX19sYWJlbCc+eyBzZWxlY3RlZC5sYWJlbCB9PC9zcGFuPlxyXG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPSdzbGRzLXBpbGxfX3JlbW92ZScgdHlwZT0naWNvbi1iYXJlJyBpY29uPSdjbG9zZScgYWx0PSdSZW1vdmUnXHJcbiAgICAgICAgICB0YWJJbmRleD17IC0xIH1cclxuICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLnByb3BzLm9uUmVzZXRTZWxlY3Rpb24gfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvYT5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGhpZGRlbiwgc2VsZWN0ZWQgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCBsb29rdXBDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcclxuICAgICAgeyAnc2xkcy1oaWRlJzogaGlkZGVuIH1cclxuICAgICk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IGxvb2t1cENsYXNzTmFtZXMgfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1waWxsX19jb250YWluZXInPlxyXG4gICAgICAgICAgeyBzZWxlY3RlZCA/IHRoaXMucmVuZGVyUGlsbChzZWxlY3RlZCkgOiB1bmRlZmluZWQgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuY29uc3QgTG9va3VwRW50cnlUeXBlID0gUHJvcFR5cGVzLnNoYXBlKHtcclxuICBjYXRlZ29yeTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG59KTtcclxuXHJcbkxvb2t1cFNlbGVjdGlvbi5wcm9wVHlwZXMgPSB7XHJcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgc2VsZWN0ZWQ6IExvb2t1cEVudHJ5VHlwZSxcclxuICBoaWRkZW46IFByb3BUeXBlcy5ib29sLFxyXG4gIG9uUmVzZXRTZWxlY3Rpb246IFByb3BUeXBlcy5mdW5jLFxyXG59O1xyXG5cclxuXHJcbi8qKlxyXG4gKlxyXG4gKi9cclxuY2xhc3MgTG9va3VwU2VhcmNoIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgcmVnaXN0ZXJTdHlsZSgnbG9va3VwU2VhcmNoJywgW1xyXG4gICAgICBbXHJcbiAgICAgICAgJy5yZWFjdC1zbGRzLWxvb2t1cC1zY29wZS1zZWxlY3RvcicsXHJcbiAgICAgICAgJ3sgd2lkdGg6IDNyZW07IH0nLFxyXG4gICAgICBdLFxyXG4gICAgICBbXHJcbiAgICAgICAgJy5yZWFjdC1zbGRzLWxvb2t1cC1zY29wZS1zZWxlY3RvciAuc2xkcy1kcm9wZG93bi10cmlnZ2VyJyxcclxuICAgICAgICAneyBtYXJnaW4tbGVmdDogMDsgfScsXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICAnLnJlYWN0LXNsZHMtbG9va3VwLXNjb3BlLXNlbGVjdG9yIC5zbGRzLWRyb3Bkb3duLXRyaWdnZXIgLnNsZHMtYnV0dG9uJyxcclxuICAgICAgICAneyBwYWRkaW5nOiAwIDAuMjVyZW07IH0nLFxyXG4gICAgICBdLFxyXG4gICAgXSk7XHJcbiAgfVxyXG5cclxuICBvbkxvb2t1cEljb25DbGljaygpIHtcclxuICAgIHRoaXMucHJvcHMub25TdWJtaXQoKTtcclxuICB9XHJcblxyXG4gIG9uSW5wdXRLZXlEb3duKGUpIHtcclxuICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7IC8vIHJldHVybiBrZXlcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICBjb25zdCBzZWFyY2hUZXh0ID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICAgIGlmIChzZWFyY2hUZXh0KSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vblN1Ym1pdCgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucHJvcHMub25Db21wbGV0ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gNDApIHsgLy8gZG93biBrZXlcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICB0aGlzLnByb3BzLm9uUHJlc3NEb3duKCk7XHJcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHsgLy8gRVNDXHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5wcm9wcy5vbktleURvd24pIHtcclxuICAgICAgdGhpcy5wcm9wcy5vbktleURvd24oZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbklucHV0Q2hhbmdlKGUpIHtcclxuICAgIGNvbnN0IHNlYXJjaFRleHQgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoc2VhcmNoVGV4dCk7XHJcbiAgfVxyXG5cclxuICBvbklucHV0Qmx1cihlKSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5vbkJsdXIpIHtcclxuICAgICAgdGhpcy5wcm9wcy5vbkJsdXIoZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblNjb3BlTWVudUNsaWNrKGUpIHtcclxuICAgIGlmICh0aGlzLnByb3BzLm9uU2NvcGVNZW51Q2xpY2spIHtcclxuICAgICAgdGhpcy5wcm9wcy5vblNjb3BlTWVudUNsaWNrKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25NZW51SXRlbUNsaWNrKHNjb3BlKSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5vblNjb3BlQ2hhbmdlKSB7XHJcbiAgICAgIHRoaXMucHJvcHMub25TY29wZUNoYW5nZShzY29wZS52YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXJTZWFyY2hJbnB1dChwcm9wcykge1xyXG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGhpZGRlbiwgc2VhcmNoVGV4dCB9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBzZWFyY2hJbnB1dENsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxyXG4gICAgICAnc2xkcy1ncmlkJyxcclxuICAgICAgJ3NsZHMtaW5wdXQtaGFzLWljb24nLFxyXG4gICAgICAnc2xkcy1pbnB1dC1oYXMtaWNvbi0tcmlnaHQnLFxyXG4gICAgICB7ICdzbGRzLWhpZGUnOiBoaWRkZW4gfSxcclxuICAgICAgY2xhc3NOYW1lXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBzZWFyY2hJbnB1dENsYXNzTmFtZXMgfT5cclxuICAgICAgICA8SW5wdXQgeyAuLi5wcm9wcyB9XHJcbiAgICAgICAgICByZWY9J2lucHV0J1xyXG4gICAgICAgICAgdmFsdWU9eyBzZWFyY2hUZXh0IH1cclxuICAgICAgICAgIG9uS2V5RG93bj17IHRoaXMub25JbnB1dEtleURvd24uYmluZCh0aGlzKSB9XHJcbiAgICAgICAgICBvbkNoYW5nZT17IHRoaXMub25JbnB1dENoYW5nZS5iaW5kKHRoaXMpIH1cclxuICAgICAgICAgIG9uQmx1cj17IHRoaXMub25JbnB1dEJsdXIuYmluZCh0aGlzKSB9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8SWNvbiBpY29uPSdzZWFyY2gnIGNsYXNzTmFtZT0nc2xkcy1pbnB1dF9faWNvbicgc3R5bGU9eyB7IGN1cnNvcjogJ3BvaW50ZXInIH0gfVxyXG4gICAgICAgICAgb25DbGljaz17IHRoaXMub25Mb29rdXBJY29uQ2xpY2suYmluZCh0aGlzKSB9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyU2NvcGVTZWxlY3RvcihzY29wZXMsIHRhcmdldCkge1xyXG4gICAgbGV0IHRhcmdldFNjb3BlID0gc2NvcGVzWzBdIHx8IHt9O1xyXG4gICAgZm9yIChjb25zdCBzY29wZSBvZiBzY29wZXMpIHtcclxuICAgICAgaWYgKHNjb3BlLnZhbHVlID09PSB0YXJnZXQpIHtcclxuICAgICAgICB0YXJnZXRTY29wZSA9IHNjb3BlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBpY29uID0gPEljb24gaWNvbj17IHRhcmdldFNjb3BlLmljb24gfHwgJ25vbmUnIH0gc2l6ZT0neC1zbWFsbCcgLz47XHJcbiAgICBjb25zdCBzZWxlY3RvckNsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxyXG4gICAgICAnc2xkcy1ncmlkJyxcclxuICAgICAgJ3NsZHMtZ3JpZC0tYWxpZ24tY2VudGVyJyxcclxuICAgICAgJ3NsZHMtZ3JpZC0tdmVydGljYWwtYWxpZ24tY2VudGVyJyxcclxuICAgICAgJ3JlYWN0LXNsZHMtbG9va3VwLXNjb3BlLXNlbGVjdG9yJ1xyXG4gICAgKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc2VsZWN0b3JDbGFzc05hbWVzIH0+XHJcbiAgICAgICAgPERyb3Bkb3duQnV0dG9uIGxhYmVsPXsgaWNvbiB9XHJcbiAgICAgICAgICBvbkNsaWNrPXsgdGhpcy5vblNjb3BlTWVudUNsaWNrLmJpbmQodGhpcykgfVxyXG4gICAgICAgICAgb25NZW51SXRlbUNsaWNrPXsgdGhpcy5vbk1lbnVJdGVtQ2xpY2suYmluZCh0aGlzKSB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgeyBzY29wZXMubWFwKChzY29wZSkgPT4gPERyb3Bkb3duTWVudUl0ZW0ga2V5PXsgc2NvcGUudmFsdWUgfSB7IC4uLnNjb3BlIH0gLz4pIH1cclxuICAgICAgICA8L0Ryb3Bkb3duQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IHNjb3BlcywgaGlkZGVuLCBjbGFzc05hbWUsIHRhcmdldFNjb3BlLCAuLi5wcm9wcyB9ID0gdGhpcy5wcm9wcztcclxuICAgIGlmIChzY29wZXMpIHtcclxuICAgICAgY29uc3QgbG9va3VwU2VhcmNoQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXHJcbiAgICAgICAgJ3NsZHMtZ3JpZCcsXHJcbiAgICAgICAgJ3NsZHMtZm9ybS1lbGVtZW50X19jb250cm9sJyxcclxuICAgICAgICAnc2xkcy1ib3gtLWJvcmRlcicsXHJcbiAgICAgICAgeyAnc2xkcy1oaWRlJzogaGlkZGVuIH1cclxuICAgICAgKTtcclxuICAgICAgY29uc3Qgc3R5bGVzID0geyAnV2Via2l0RmxleFdyYXAnOiAnbm93cmFwJywgJ21zRmxleFdyYXAnOiAnbm93cmFwJywgZmxleFdyYXA6ICdub3dyYXAnIH07XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBsb29rdXBTZWFyY2hDbGFzc05hbWVzIH0gc3R5bGU9eyBzdHlsZXMgfT5cclxuICAgICAgICAgIHsgdGhpcy5yZW5kZXJTY29wZVNlbGVjdG9yKHNjb3BlcywgdGFyZ2V0U2NvcGUpIH1cclxuICAgICAgICAgIHsgdGhpcy5yZW5kZXJTZWFyY2hJbnB1dCh7IC4uLnByb3BzLCBjbGFzc05hbWU6ICdzbGRzLWNvbCcsIGJhcmU6IHRydWUgfSkgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMucmVuZGVyU2VhcmNoSW5wdXQodGhpcy5wcm9wcyk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbkxvb2t1cFNlYXJjaC5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGhpZGRlbjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgc2VhcmNoVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBzY29wZXM6IFByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgfSlcclxuICApLFxyXG4gIHRhcmdldFNjb3BlOiBQcm9wVHlwZXMuYW55LFxyXG4gIG9uS2V5RG93bjogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcclxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgb25TY29wZU1lbnVDbGljazogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgb25TY29wZUNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgb25QcmVzc0Rvd246IFByb3BUeXBlcy5mdW5jLFxyXG4gIG9uU3VibWl0OiBQcm9wVHlwZXMuZnVuYyxcclxuICBvbkNvbXBsZXRlOiBQcm9wVHlwZXMuZnVuYyxcclxufTtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKi9cclxuY2xhc3MgTG9va3VwQ2FuZGlkYXRlTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgaWYgKHRoaXMucHJvcHMuZm9jdXMpIHtcclxuICAgICAgdGhpcy5mb2N1c1RvVGFyZ2V0SXRlbUVsKDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xyXG4gICAgaWYgKHRoaXMucHJvcHMuZm9jdXMgJiYgIXByZXZQcm9wcy5mb2N1cykge1xyXG4gICAgICB0aGlzLmZvY3VzVG9UYXJnZXRJdGVtRWwoMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblNlbGVjdChlbnRyeSkge1xyXG4gICAgaWYgKHRoaXMucHJvcHMub25TZWxlY3QpIHtcclxuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdChlbnRyeSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbktleURvd24oZSkge1xyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMzggfHwgZS5rZXlDb2RlID09PSA0MCkgeyAvLyBVUC9ET1dOXHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgY29uc3QgY3VycmVudEVsID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcclxuICAgICAgbGV0IGl0ZW1FbCA9IGUua2V5Q29kZSA9PT0gNDAgPyBjdXJyZW50RWwubmV4dFNpYmxpbmcgOiBjdXJyZW50RWwucHJldmlvdXNTaWJsaW5nO1xyXG4gICAgICB3aGlsZSAoaXRlbUVsKSB7XHJcbiAgICAgICAgY29uc3QgYW5jaG9yRWwgPSBpdGVtRWwucXVlcnlTZWxlY3RvcignLnJlYWN0LXNsZHMtY2FuZGlkYXRlW3RhYkluZGV4XScpO1xyXG4gICAgICAgIGlmIChhbmNob3JFbCAmJiAhYW5jaG9yRWwuZGlzYWJsZWQpIHtcclxuICAgICAgICAgIGFuY2hvckVsLmZvY3VzKCk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGl0ZW1FbCA9IGUua2V5Q29kZSA9PT0gNDAgPyBpdGVtRWwubmV4dFNpYmxpbmcgOiBpdGVtRWwucHJldmlvdXNTaWJsaW5nO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHsgLy8gRVNDXHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgdGhpcy5vblNlbGVjdChudWxsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvY3VzVG9UYXJnZXRJdGVtRWwoaW5kZXgpIHtcclxuICAgIGNvbnN0IGVsID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XHJcbiAgICBjb25zdCBhbmNob3JzID0gZWwucXVlcnlTZWxlY3RvckFsbCgnLnJlYWN0LXNsZHMtY2FuZGlkYXRlW3RhYkluZGV4XScpO1xyXG4gICAgaWYgKGFuY2hvcnNbaW5kZXhdKSB7XHJcbiAgICAgIGFuY2hvcnNbaW5kZXhdLmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXJDYW5kaWRhdGUoZW50cnkpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxsaSBjbGFzc05hbWU9J3NsZHMtbG9va3VwX19pdGVtJyBrZXk9eyBlbnRyeS52YWx1ZSB9PlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT0nc2xkcy10cnVuY2F0ZSByZWFjdC1zbGRzLWNhbmRpZGF0ZScgdGFiSW5kZXg9eyAtMSB9IHJvbGU9J29wdGlvbidcclxuICAgICAgICAgIG9uS2V5RG93bj17IChlKSA9PiBlLmtleUNvZGUgPT09IDEzICYmIHRoaXMub25TZWxlY3QoZW50cnkpIH1cclxuICAgICAgICAgIG9uQmx1cj17IHRoaXMucHJvcHMub25CbHVyIH1cclxuICAgICAgICAgIG9uQ2xpY2s9eyAoKSA9PiB0aGlzLm9uU2VsZWN0KGVudHJ5KSB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBlbnRyeS5pY29uID9cclxuICAgICAgICAgICAgPEljb24gY2F0ZWdvcnk9eyBlbnRyeS5jYXRlZ29yeSB9IGljb249eyBlbnRyeS5pY29uIH0gc2l6ZT0nc21hbGwnIC8+IDpcclxuICAgICAgICAgICAgdW5kZWZpbmVkXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB7IGVudHJ5LmxhYmVsIH1cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvbGk+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBkYXRhID0gW10sIGhpZGRlbiwgbG9hZGluZywgaGVhZGVyLCBmb290ZXIsIGZpbHRlciA9ICgpID0+IHRydWUgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCBsb29rdXBNZW51Q2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXHJcbiAgICAgICdzbGRzLWxvb2t1cF9fbWVudScsXHJcbiAgICAgIHsgJ3NsZHMtaGlkZSc6IGhpZGRlbiB9XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBsb29rdXBNZW51Q2xhc3NOYW1lcyB9IHJvbGU9J2xpc3Rib3gnXHJcbiAgICAgICAgb25LZXlEb3duPXsgdGhpcy5vbktleURvd24uYmluZCh0aGlzKSB9XHJcbiAgICAgID5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBoZWFkZXIgP1xyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NsZHMtbG9va3VwX19pdGVtJz57IGhlYWRlciB9PC9kaXY+IDpcclxuICAgICAgICAgIHVuZGVmaW5lZFxyXG4gICAgICAgIH1cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPSdzbGRzLWxvb2t1cF9fbGlzdCcgcm9sZT0ncHJlc2VudGF0aW9uJz5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZGF0YS5maWx0ZXIoZmlsdGVyKS5tYXAodGhpcy5yZW5kZXJDYW5kaWRhdGUuYmluZCh0aGlzKSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbG9hZGluZyA/XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3NsZHMtbG9va3VwX19pdGVtJyBrZXk9J2xvYWRpbmcnPlxyXG4gICAgICAgICAgICAgIDxTcGlubmVyIHNpemU9J3NtYWxsJyBzdHlsZT17IHsgbWFyZ2luOiAnMCBhdXRvJyB9IH0gLz5cclxuICAgICAgICAgICAgPC9saT4gOlxyXG4gICAgICAgICAgICB1bmRlZmluZWRcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGZvb3RlciA/XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1sb29rdXBfX2l0ZW0nPnsgZm9vdGVyIH08L2Rpdj4gOlxyXG4gICAgICAgICAgdW5kZWZpbmVkXHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuTG9va3VwQ2FuZGlkYXRlTGlzdC5wcm9wVHlwZXMgPSB7XHJcbiAgZGF0YTogUHJvcFR5cGVzLmFycmF5T2YoTG9va3VwRW50cnlUeXBlKSxcclxuICBmb2N1czogUHJvcFR5cGVzLmJvb2wsXHJcbiAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXHJcbiAgaGlkZGVuOiBQcm9wVHlwZXMuYm9vbCxcclxuICBmaWx0ZXI6IFByb3BUeXBlcy5mdW5jLFxyXG4gIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcclxuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxyXG4gIGhlYWRlcjogUHJvcFR5cGVzLm5vZGUsXHJcbiAgZm9vdGVyOiBQcm9wVHlwZXMubm9kZSxcclxufTtcclxuXHJcblxyXG4vKipcclxuICpcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvb2t1cCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGlkOiBgZm9ybS1lbGVtZW50LSR7dXVpZCgpfWAsXHJcbiAgICAgIHNlbGVjdGVkOiBwcm9wcy5kZWZhdWx0U2VsZWN0ZWQsXHJcbiAgICAgIG9wZW5lZDogcHJvcHMuZGVmYXVsdE9wZW5lZCxcclxuICAgICAgc2VhcmNoVGV4dDogcHJvcHMuZGVmYXVsdFNlYXJjaFRleHQsXHJcbiAgICAgIHRhcmdldFNjb3BlOiBwcm9wcy5kZWZhdWx0VGFyZ2V0U2NvcGUsXHJcbiAgICAgIGZvY3VzRmlyc3RDYW5kaWRhdGU6IGZhbHNlLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIG9uU2NvcGVNZW51Q2xpY2soZSkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5vblNjb3BlTWVudUNsaWNrKSB7XHJcbiAgICAgIHRoaXMucHJvcHMub25TY29wZU1lbnVDbGljayhlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uU2NvcGVDaGFuZ2UodGFyZ2V0U2NvcGUpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyB0YXJnZXRTY29wZSB9KTtcclxuICAgIGlmICh0aGlzLnByb3BzLm9uU2NvcGVDaGFuZ2UpIHtcclxuICAgICAgdGhpcy5wcm9wcy5vblNjb3BlQ2hhbmdlKHRhcmdldFNjb3BlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uU2VhcmNoVGV4dENoYW5nZShzZWFyY2hUZXh0KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoVGV4dCB9KTtcclxuICAgIGlmICh0aGlzLnByb3BzLm9uU2VhcmNoVGV4dENoYW5nZSkge1xyXG4gICAgICB0aGlzLnByb3BzLm9uU2VhcmNoVGV4dENoYW5nZShzZWFyY2hUZXh0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uTG9va3VwUmVxdWVzdChzZWFyY2hUZXh0KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiB0cnVlIH0pO1xyXG4gICAgaWYgKHRoaXMucHJvcHMub25Mb29rdXBSZXF1ZXN0KSB7XHJcbiAgICAgIHRoaXMucHJvcHMub25Mb29rdXBSZXF1ZXN0KHNlYXJjaFRleHQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Db21wbGV0ZSgpIHtcclxuICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcclxuICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvblJlc2V0U2VsZWN0aW9uKCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkOiBudWxsIH0pO1xyXG4gICAgaWYgKHRoaXMucHJvcHMub25TZWxlY3QpIHtcclxuICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdChudWxsKTtcclxuICAgIH1cclxuICAgIHRoaXMub25TZWFyY2hUZXh0Q2hhbmdlKCcnKTtcclxuICAgIHRoaXMub25Mb29rdXBSZXF1ZXN0KCcnKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBjb25zdCBzZWFyY2hFbGVtID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLnNlYXJjaCk7XHJcbiAgICAgIGNvbnN0IGlucHV0RWxlbSA9IHNlYXJjaEVsZW0ucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcclxuICAgICAgaW5wdXRFbGVtLmZvY3VzKCk7XHJcbiAgICB9LCAxMCk7XHJcbiAgfVxyXG5cclxuICBvbkxvb2t1cEl0ZW1TZWxlY3Qoc2VsZWN0ZWQpIHtcclxuICAgIGlmIChzZWxlY3RlZCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWQsIG9wZW5lZDogZmFsc2UgfSk7XHJcbiAgICAgIGlmICh0aGlzLnByb3BzLm9uU2VsZWN0KSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vblNlbGVjdChzZWxlY3RlZCk7XHJcbiAgICAgIH1cclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uRWxlbSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy5zZWxlY3Rpb24pO1xyXG4gICAgICAgIGNvbnN0IHBpbGxFbGVtID0gc2VsZWN0aW9uRWxlbS5xdWVyeVNlbGVjdG9yKCdhJyk7XHJcbiAgICAgICAgaWYgKHBpbGxFbGVtKSB7IHBpbGxFbGVtLmZvY3VzKCk7IH1cclxuICAgICAgfSwgMTApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNlYXJjaEVsZW0gPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnMuc2VhcmNoKTtcclxuICAgICAgICBjb25zdCBpbnB1dEVsZW0gPSBzZWFyY2hFbGVtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XHJcbiAgICAgICAgaW5wdXRFbGVtLmZvY3VzKCk7XHJcbiAgICAgIH0sIDEwKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnByb3BzLm9uQ29tcGxldGUpIHtcclxuICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkZvY3VzRmlyc3RDYW5kaWRhdGUoKSB7XHJcbiAgICBjb25zdCB7IG9wZW5lZCA9IHRoaXMuc3RhdGUub3BlbmVkIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgaWYgKCFvcGVuZWQpIHtcclxuICAgICAgdGhpcy5vbkxvb2t1cFJlcXVlc3QodGhpcy5zdGF0ZS5zZWFyY2hUZXh0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c0ZpcnN0Q2FuZGlkYXRlOiB0cnVlIH0pO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXNGaXJzdENhbmRpZGF0ZTogZmFsc2UgfSk7XHJcbiAgICAgIH0sIDEwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQmx1cigpIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAoIXRoaXMuaXNGb2N1c2VkSW5Db21wb25lbnQoKSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGZhbHNlIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQmx1cikge1xyXG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkJsdXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25Db21wbGV0ZSkge1xyXG4gICAgICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LCAxMCk7XHJcbiAgfVxyXG5cclxuICBpc0ZvY3VzZWRJbkNvbXBvbmVudCgpIHtcclxuICAgIGNvbnN0IHJvb3RFbCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xyXG4gICAgbGV0IHRhcmdldEVsID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcclxuICAgIHdoaWxlICh0YXJnZXRFbCAmJiB0YXJnZXRFbCAhPT0gcm9vdEVsKSB7XHJcbiAgICAgIHRhcmdldEVsID0gdGFyZ2V0RWwucGFyZW50Tm9kZTtcclxuICAgIH1cclxuICAgIHJldHVybiAhIXRhcmdldEVsO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgaWQgPSB0aGlzLnByb3BzLmlkIHx8IHRoaXMuc3RhdGUuaWQ7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgIHRvdGFsQ29scywgY29scyxcclxuICAgICAgbGFiZWwsIHJlcXVpcmVkLCBlcnJvcixcclxuICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICBzZWxlY3RlZCA9IHRoaXMuc3RhdGUuc2VsZWN0ZWQsIGRlZmF1bHRTZWxlY3RlZCxcclxuICAgICAgb3BlbmVkID0gdGhpcy5zdGF0ZS5vcGVuZWQsIGRlZmF1bHRPcGVuZWQsXHJcbiAgICAgIHNlYXJjaFRleHQgPSB0aGlzLnN0YXRlLnNlYXJjaFRleHQsIGRlZmF1bHRTZWFyY2hUZXh0LFxyXG4gICAgICB0YXJnZXRTY29wZSA9IHRoaXMuc3RhdGUudGFyZ2V0U2NvcGUsIGRlZmF1bHRUYXJnZXRTY29wZSxcclxuICAgICAgbG9hZGluZywgbG9va3VwRmlsdGVyLFxyXG4gICAgICBsaXN0SGVhZGVyLCBsaXN0Rm9vdGVyLFxyXG4gICAgICBkYXRhLFxyXG4gICAgICBvblNlbGVjdCwgb25CbHVyLCBvbkNvbXBsZXRlLFxyXG4gICAgICBvblNjb3BlQ2hhbmdlLCBvblNjb3BlTWVudUNsaWNrLCBvblNlYXJjaFRleHRDaGFuZ2UsIG9uTG9va3VwUmVxdWVzdCxcclxuICAgICAgLi4ucHJvcHMsXHJcbiAgICB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IGRyb3Bkb3duID0gKFxyXG4gICAgICA8TG9va3VwQ2FuZGlkYXRlTGlzdFxyXG4gICAgICAgIHJlZj0nY2FuZGlkYXRlTGlzdCdcclxuICAgICAgICBkYXRhPXsgZGF0YSB9XHJcbiAgICAgICAgZm9jdXM9eyB0aGlzLnN0YXRlLmZvY3VzRmlyc3RDYW5kaWRhdGUgfVxyXG4gICAgICAgIGhpZGRlbj17ICFvcGVuZWQgfVxyXG4gICAgICAgIGxvYWRpbmc9eyBsb2FkaW5nIH1cclxuICAgICAgICBmaWx0ZXI9eyBsb29rdXBGaWx0ZXIgPyAoZW50cnkpID0+IGxvb2t1cEZpbHRlcihlbnRyeSwgc2VhcmNoVGV4dCwgdGFyZ2V0U2NvcGUpIDogdW5kZWZpbmVkIH1cclxuICAgICAgICBoZWFkZXI9eyBsaXN0SGVhZGVyIH1cclxuICAgICAgICBmb290ZXI9eyBsaXN0Rm9vdGVyIH1cclxuICAgICAgICBvblNlbGVjdD17IHRoaXMub25Mb29rdXBJdGVtU2VsZWN0LmJpbmQodGhpcykgfVxyXG4gICAgICAgIG9uQmx1cj17IHRoaXMub25CbHVyLmJpbmQodGhpcykgfVxyXG4gICAgICAvPlxyXG4gICAgKTtcclxuICAgIGNvbnN0IGxvb2t1cENsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxyXG4gICAgICAnc2xkcy1sb29rdXAnLFxyXG4gICAgICB7ICdzbGRzLWhhcy1zZWxlY3Rpb24nOiBzZWxlY3RlZCB9LFxyXG4gICAgICBjbGFzc05hbWVcclxuICAgICk7XHJcbiAgICBjb25zdCBmb3JtRWxlbVByb3BzID0geyBpZCwgdG90YWxDb2xzLCBjb2xzLCBsYWJlbCwgcmVxdWlyZWQsIGVycm9yLCBkcm9wZG93biB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEZvcm1FbGVtZW50IHsgLi4uZm9ybUVsZW1Qcm9wcyB9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgbG9va3VwQ2xhc3NOYW1lcyB9XHJcbiAgICAgICAgICBkYXRhLXNlbGVjdD0nc2luZ2xlJ1xyXG4gICAgICAgICAgZGF0YS1zY29wZT17IHByb3BzLnNjb3BlcyA/ICdtdWx0aScgOiAnc2luZ2xlJyB9XHJcbiAgICAgICAgICBkYXRhLXR5cGVhaGVhZD17IGZhbHNlIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkID9cclxuICAgICAgICAgICAgPExvb2t1cFNlbGVjdGlvblxyXG4gICAgICAgICAgICAgIGlkPXsgaWQgfVxyXG4gICAgICAgICAgICAgIHJlZj0nc2VsZWN0aW9uJ1xyXG4gICAgICAgICAgICAgIHNlbGVjdGVkPXsgc2VsZWN0ZWQgfVxyXG4gICAgICAgICAgICAgIG9uUmVzZXRTZWxlY3Rpb249eyB0aGlzLm9uUmVzZXRTZWxlY3Rpb24uYmluZCh0aGlzKSB9XHJcbiAgICAgICAgICAgIC8+IDpcclxuICAgICAgICAgICAgPExvb2t1cFNlYXJjaCB7IC4uLnByb3BzIH1cclxuICAgICAgICAgICAgICBpZD17IGlkIH1cclxuICAgICAgICAgICAgICByZWY9J3NlYXJjaCdcclxuICAgICAgICAgICAgICBzZWFyY2hUZXh0PXsgc2VhcmNoVGV4dCB9XHJcbiAgICAgICAgICAgICAgdGFyZ2V0U2NvcGU9eyB0YXJnZXRTY29wZSB9XHJcbiAgICAgICAgICAgICAgb25TY29wZU1lbnVDbGljaz17IHRoaXMub25TY29wZU1lbnVDbGljay5iaW5kKHRoaXMpIH1cclxuICAgICAgICAgICAgICBvblNjb3BlQ2hhbmdlPXsgdGhpcy5vblNjb3BlQ2hhbmdlLmJpbmQodGhpcykgfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vblNlYXJjaFRleHRDaGFuZ2UuYmluZCh0aGlzKSB9XHJcbiAgICAgICAgICAgICAgb25TdWJtaXQ9eyAoKSA9PiB0aGlzLm9uTG9va3VwUmVxdWVzdChzZWFyY2hUZXh0KSB9XHJcbiAgICAgICAgICAgICAgb25QcmVzc0Rvd249eyB0aGlzLm9uRm9jdXNGaXJzdENhbmRpZGF0ZS5iaW5kKHRoaXMpIH1cclxuICAgICAgICAgICAgICBvbkNvbXBsZXRlPXsgdGhpcy5vbkNvbXBsZXRlLmJpbmQodGhpcykgfVxyXG4gICAgICAgICAgICAgIG9uQmx1cj17IHRoaXMub25CbHVyLmJpbmQodGhpcykgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0Zvcm1FbGVtZW50PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5Mb29rdXAucHJvcFR5cGVzID0ge1xyXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcclxuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgZXJyb3I6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xyXG4gICAgUHJvcFR5cGVzLmJvb2wsXHJcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgbWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIH0pLFxyXG4gIF0pLFxyXG4gIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBzZWxlY3RlZDogTG9va3VwRW50cnlUeXBlLFxyXG4gIGRlZmF1bHRTZWxlY3RlZDogTG9va3VwRW50cnlUeXBlLFxyXG4gIG9wZW5lZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgZGVmYXVsdE9wZW5lZDogUHJvcFR5cGVzLmJvb2wsXHJcbiAgc2VhcmNoVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBkZWZhdWx0U2VhcmNoVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcclxuICBkYXRhOiBQcm9wVHlwZXMuYXJyYXlPZihMb29rdXBFbnRyeVR5cGUpLFxyXG4gIGxvb2t1cEZpbHRlcjogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgbGlzdEhlYWRlcjogUHJvcFR5cGVzLm5vZGUsXHJcbiAgbGlzdEZvb3RlcjogUHJvcFR5cGVzLm5vZGUsXHJcbiAgc2NvcGVzOiBQcm9wVHlwZXMuYXJyYXlPZihcclxuICAgIFByb3BUeXBlcy5zaGFwZSh7XHJcbiAgICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgaWNvbjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIH0pXHJcbiAgKSxcclxuICB0YXJnZXRTY29wZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBkZWZhdWx0VGFyZ2V0U2NvcGU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgb25TZWFyY2hUZXh0Q2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcclxuICBvblNjb3BlTWVudUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcclxuICBvblNjb3BlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcclxuICBvbkxvb2t1cFJlcXVlc3Q6IFByb3BUeXBlcy5mdW5jLFxyXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxyXG4gIG9uQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLFxyXG4gIHRvdGFsQ29sczogUHJvcFR5cGVzLm51bWJlcixcclxuICBjb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxyXG59O1xyXG5cclxuTG9va3VwLmlzRm9ybUVsZW1lbnQgPSB0cnVlO1xyXG4iXX0=