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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0xvb2t1cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0lBS007Ozs7Ozs7Ozs7OEJBQ00sR0FBRztBQUNYLFVBQUksRUFBRSxPQUFGLEtBQWMsQ0FBZCxJQUFtQixFQUFFLE9BQUYsS0FBYyxFQUFkLEVBQWtCOztBQUN2QyxVQUFFLGNBQUYsR0FEdUM7QUFFdkMsVUFBRSxlQUFGLEdBRnVDO0FBR3ZDLFlBQUksS0FBSyxLQUFMLENBQVcsZ0JBQVgsRUFBNkI7QUFDL0IsZUFBSyxLQUFMLENBQVcsZ0JBQVgsR0FEK0I7U0FBakM7T0FIRjs7OzsrQkFTUyxVQUFVO0FBQ25CLFVBQU0sY0FBYyxTQUFkLFdBQWMsQ0FBQyxDQUFELEVBQU87QUFDekIsVUFBRSxNQUFGLENBQVMsS0FBVCxHQUR5QjtBQUV6QixVQUFFLGNBQUYsR0FGeUI7QUFHekIsVUFBRSxlQUFGLEdBSHlCO09BQVAsQ0FERDtBQU1uQixhQUNFOztVQUFHLFdBQVUsV0FBVjtBQUNELGNBQUssS0FBSyxLQUFMLENBQVcsRUFBWDtBQUNMLGVBQUksTUFBSjtBQUNBLHFCQUFZLEtBQUssU0FBTCxDQUFlLElBQWYsQ0FBb0IsSUFBcEIsQ0FBWjtBQUNBLG1CQUFVLFdBQVY7QUFDQSxvQkFBVyxDQUFYO1NBTEY7UUFRSSxTQUFTLElBQVQsR0FDQSxnREFBTSxXQUFVLGlCQUFWLEVBQTRCLFVBQVcsU0FBUyxRQUFULEVBQW9CLE1BQU8sU0FBUyxJQUFULEVBQXhFLENBREEsR0FFQSxTQUZBO1FBSUY7O1lBQU0sV0FBVSxrQkFBVixFQUFOO1VBQXFDLFNBQVMsS0FBVDtTQVp2QztRQWFFLGtEQUFRLFdBQVUsbUJBQVYsRUFB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aUJBQVUsTUFBVjtBQUNiLHNCQUFvQixpQkFBVSxNQUFWO0FBQ3BCLHNCQUFvQixpQkFBVSxJQUFWO0FBQ3BCLG9CQUFrQixpQkFBVSxJQUFWO0FBQ2xCLGlCQUFlLGlCQUFVLElBQVY7QUFDZixtQkFBaUIsaUJBQVUsSUFBVjtBQUNqQixVQUFRLGlCQUFVLElBQVY7QUFDUixZQUFVLGlCQUFVLElBQVY7QUFDVixjQUFZLGlCQUFVLElBQVY7QUFDWixhQUFXLGlCQUFVLE1BQVY7QUFDWCxRQUFNLGlCQUFVLE1BQVY7Q0ExQ1I7O0FBNkNBLE9BQU8sYUFBUCxHQUF1QixJQUF2QiIsImZpbGUiOiJMb29rdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHV1aWQgZnJvbSAndXVpZCc7XHJcbmltcG9ydCBGb3JtRWxlbWVudCBmcm9tICcuL0Zvcm1FbGVtZW50JztcclxuaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnO1xyXG5pbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuL1NwaW5uZXInO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJztcclxuaW1wb3J0IERyb3Bkb3duQnV0dG9uIGZyb20gJy4vRHJvcGRvd25CdXR0b24nO1xyXG5pbXBvcnQgeyBEcm9wZG93bk1lbnVJdGVtIH0gZnJvbSAnLi9Ecm9wZG93bk1lbnUnO1xyXG5pbXBvcnQgeyByZWdpc3RlclN0eWxlIH0gZnJvbSAnLi91dGlsJztcclxuXHJcbi8qKlxyXG4gKlxyXG4gKi9cclxuY2xhc3MgTG9va3VwU2VsZWN0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBvbktleURvd24oZSkge1xyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gOCB8fCBlLmtleUNvZGUgPT09IDQ2KSB7IC8vIEJhY3NwYWNlIC8gREVMXHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgaWYgKHRoaXMucHJvcHMub25SZXNldFNlbGVjdGlvbikge1xyXG4gICAgICAgIHRoaXMucHJvcHMub25SZXNldFNlbGVjdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXJQaWxsKHNlbGVjdGVkKSB7XHJcbiAgICBjb25zdCBvblBpbGxDbGljayA9IChlKSA9PiB7XHJcbiAgICAgIGUudGFyZ2V0LmZvY3VzKCk7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8YSBjbGFzc05hbWU9J3NsZHMtcGlsbCdcclxuICAgICAgICBpZD17IHRoaXMucHJvcHMuaWQgfVxyXG4gICAgICAgIHJlZj0ncGlsbCdcclxuICAgICAgICBvbktleURvd249eyB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpIH1cclxuICAgICAgICBvbkNsaWNrPXsgb25QaWxsQ2xpY2sgfVxyXG4gICAgICAgIHRhYkluZGV4PXsgMCB9XHJcbiAgICAgID5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBzZWxlY3RlZC5pY29uID9cclxuICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT0nc2xkcy1waWxsX19pY29uJyBjYXRlZ29yeT17IHNlbGVjdGVkLmNhdGVnb3J5IH0gaWNvbj17IHNlbGVjdGVkLmljb24gfSAvPiA6XHJcbiAgICAgICAgICB1bmRlZmluZWRcclxuICAgICAgICB9XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzbGRzLXBpbGxfX2xhYmVsJz57IHNlbGVjdGVkLmxhYmVsIH08L3NwYW4+XHJcbiAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9J3NsZHMtcGlsbF9fcmVtb3ZlJyB0eXBlPSdpY29uLWJhcmUnIGljb249J2Nsb3NlJyBhbHQ9J1JlbW92ZSdcclxuICAgICAgICAgIHRhYkluZGV4PXsgLTEgfVxyXG4gICAgICAgICAgb25DbGljaz17IHRoaXMucHJvcHMub25SZXNldFNlbGVjdGlvbiB9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9hPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgaGlkZGVuLCBzZWxlY3RlZCB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IGxvb2t1cENsYXNzTmFtZXMgPSBjbGFzc25hbWVzKFxyXG4gICAgICB7ICdzbGRzLWhpZGUnOiBoaWRkZW4gfVxyXG4gICAgKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgbG9va3VwQ2xhc3NOYW1lcyB9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLXBpbGxfX2NvbnRhaW5lcic+XHJcbiAgICAgICAgICB7IHNlbGVjdGVkID8gdGhpcy5yZW5kZXJQaWxsKHNlbGVjdGVkKSA6IHVuZGVmaW5lZCB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5jb25zdCBMb29rdXBFbnRyeVR5cGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gIGNhdGVnb3J5OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGljb246IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbn0pO1xyXG5cclxuTG9va3VwU2VsZWN0aW9uLnByb3BUeXBlcyA9IHtcclxuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcclxuICBzZWxlY3RlZDogTG9va3VwRW50cnlUeXBlLFxyXG4gIGhpZGRlbjogUHJvcFR5cGVzLmJvb2wsXHJcbiAgb25SZXNldFNlbGVjdGlvbjogUHJvcFR5cGVzLmZ1bmMsXHJcbn07XHJcblxyXG5cclxuLyoqXHJcbiAqXHJcbiAqL1xyXG5jbGFzcyBMb29rdXBTZWFyY2ggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICByZWdpc3RlclN0eWxlKCdsb29rdXBTZWFyY2gnLCBbXHJcbiAgICAgIFtcclxuICAgICAgICAnLnJlYWN0LXNsZHMtbG9va3VwLXNjb3BlLXNlbGVjdG9yJyxcclxuICAgICAgICAneyB3aWR0aDogM3JlbTsgfScsXHJcbiAgICAgIF0sXHJcbiAgICAgIFtcclxuICAgICAgICAnLnJlYWN0LXNsZHMtbG9va3VwLXNjb3BlLXNlbGVjdG9yIC5zbGRzLWRyb3Bkb3duLXRyaWdnZXInLFxyXG4gICAgICAgICd7IG1hcmdpbi1sZWZ0OiAwOyB9JyxcclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgICcucmVhY3Qtc2xkcy1sb29rdXAtc2NvcGUtc2VsZWN0b3IgLnNsZHMtZHJvcGRvd24tdHJpZ2dlciAuc2xkcy1idXR0b24nLFxyXG4gICAgICAgICd7IHBhZGRpbmc6IDAgMC4yNXJlbTsgfScsXHJcbiAgICAgIF0sXHJcbiAgICBdKTtcclxuICB9XHJcblxyXG4gIG9uTG9va3VwSWNvbkNsaWNrKCkge1xyXG4gICAgdGhpcy5wcm9wcy5vblN1Ym1pdCgpO1xyXG4gIH1cclxuXHJcbiAgb25JbnB1dEtleURvd24oZSkge1xyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHsgLy8gcmV0dXJuIGtleVxyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIGNvbnN0IHNlYXJjaFRleHQgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgaWYgKHNlYXJjaFRleHQpIHtcclxuICAgICAgICB0aGlzLnByb3BzLm9uU3VibWl0KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vbkNvbXBsZXRlKCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSA0MCkgeyAvLyBkb3duIGtleVxyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIHRoaXMucHJvcHMub25QcmVzc0Rvd24oKTtcclxuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAyNykgeyAvLyBFU0NcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUoKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnByb3BzLm9uS2V5RG93bikge1xyXG4gICAgICB0aGlzLnByb3BzLm9uS2V5RG93bihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uSW5wdXRDaGFuZ2UoZSkge1xyXG4gICAgY29uc3Qgc2VhcmNoVGV4dCA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShzZWFyY2hUZXh0KTtcclxuICB9XHJcblxyXG4gIG9uSW5wdXRCbHVyKGUpIHtcclxuICAgIGlmICh0aGlzLnByb3BzLm9uQmx1cikge1xyXG4gICAgICB0aGlzLnByb3BzLm9uQmx1cihlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uU2NvcGVNZW51Q2xpY2soZSkge1xyXG4gICAgaWYgKHRoaXMucHJvcHMub25TY29wZU1lbnVDbGljaykge1xyXG4gICAgICB0aGlzLnByb3BzLm9uU2NvcGVNZW51Q2xpY2soZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbk1lbnVJdGVtQ2xpY2soc2NvcGUpIHtcclxuICAgIGlmICh0aGlzLnByb3BzLm9uU2NvcGVDaGFuZ2UpIHtcclxuICAgICAgdGhpcy5wcm9wcy5vblNjb3BlQ2hhbmdlKHNjb3BlLnZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlclNlYXJjaElucHV0KHByb3BzKSB7XHJcbiAgICBjb25zdCB7IGNsYXNzTmFtZSwgaGlkZGVuLCBzZWFyY2hUZXh0IH0gPSBwcm9wcztcclxuICAgIGNvbnN0IHNlYXJjaElucHV0Q2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXHJcbiAgICAgICdzbGRzLWdyaWQnLFxyXG4gICAgICAnc2xkcy1pbnB1dC1oYXMtaWNvbicsXHJcbiAgICAgICdzbGRzLWlucHV0LWhhcy1pY29uLS1yaWdodCcsXHJcbiAgICAgIHsgJ3NsZHMtaGlkZSc6IGhpZGRlbiB9LFxyXG4gICAgICBjbGFzc05hbWVcclxuICAgICk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IHNlYXJjaElucHV0Q2xhc3NOYW1lcyB9PlxyXG4gICAgICAgIDxJbnB1dCB7IC4uLnByb3BzIH1cclxuICAgICAgICAgIHJlZj0naW5wdXQnXHJcbiAgICAgICAgICB2YWx1ZT17IHNlYXJjaFRleHQgfVxyXG4gICAgICAgICAgb25LZXlEb3duPXsgdGhpcy5vbklucHV0S2V5RG93bi5iaW5kKHRoaXMpIH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsgdGhpcy5vbklucHV0Q2hhbmdlLmJpbmQodGhpcykgfVxyXG4gICAgICAgICAgb25CbHVyPXsgdGhpcy5vbklucHV0Qmx1ci5iaW5kKHRoaXMpIH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxJY29uIGljb249J3NlYXJjaCcgY2xhc3NOYW1lPSdzbGRzLWlucHV0X19pY29uJyBzdHlsZT17IHsgY3Vyc29yOiAncG9pbnRlcicgfSB9XHJcbiAgICAgICAgICBvbkNsaWNrPXsgdGhpcy5vbkxvb2t1cEljb25DbGljay5iaW5kKHRoaXMpIH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJTY29wZVNlbGVjdG9yKHNjb3BlcywgdGFyZ2V0KSB7XHJcbiAgICBsZXQgdGFyZ2V0U2NvcGUgPSBzY29wZXNbMF0gfHwge307XHJcbiAgICBmb3IgKGNvbnN0IHNjb3BlIG9mIHNjb3Blcykge1xyXG4gICAgICBpZiAoc2NvcGUudmFsdWUgPT09IHRhcmdldCkge1xyXG4gICAgICAgIHRhcmdldFNjb3BlID0gc2NvcGU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGljb24gPSA8SWNvbiBpY29uPXsgdGFyZ2V0U2NvcGUuaWNvbiB8fCAnbm9uZScgfSBzaXplPSd4LXNtYWxsJyAvPjtcclxuICAgIGNvbnN0IHNlbGVjdG9yQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXHJcbiAgICAgICdzbGRzLWdyaWQnLFxyXG4gICAgICAnc2xkcy1ncmlkLS1hbGlnbi1jZW50ZXInLFxyXG4gICAgICAnc2xkcy1ncmlkLS12ZXJ0aWNhbC1hbGlnbi1jZW50ZXInLFxyXG4gICAgICAncmVhY3Qtc2xkcy1sb29rdXAtc2NvcGUtc2VsZWN0b3InXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBzZWxlY3RvckNsYXNzTmFtZXMgfT5cclxuICAgICAgICA8RHJvcGRvd25CdXR0b24gbGFiZWw9eyBpY29uIH1cclxuICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLm9uU2NvcGVNZW51Q2xpY2suYmluZCh0aGlzKSB9XHJcbiAgICAgICAgICBvbk1lbnVJdGVtQ2xpY2s9eyB0aGlzLm9uTWVudUl0ZW1DbGljay5iaW5kKHRoaXMpIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7IHNjb3Blcy5tYXAoKHNjb3BlKSA9PiA8RHJvcGRvd25NZW51SXRlbSBrZXk9eyBzY29wZS52YWx1ZSB9IHsgLi4uc2NvcGUgfSAvPikgfVxyXG4gICAgICAgIDwvRHJvcGRvd25CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHsgc2NvcGVzLCBoaWRkZW4sIGNsYXNzTmFtZSwgdGFyZ2V0U2NvcGUsIC4uLnByb3BzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgaWYgKHNjb3Blcykge1xyXG4gICAgICBjb25zdCBsb29rdXBTZWFyY2hDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcclxuICAgICAgICAnc2xkcy1ncmlkJyxcclxuICAgICAgICAnc2xkcy1mb3JtLWVsZW1lbnRfX2NvbnRyb2wnLFxyXG4gICAgICAgICdzbGRzLWJveC0tYm9yZGVyJyxcclxuICAgICAgICB7ICdzbGRzLWhpZGUnOiBoaWRkZW4gfVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBzdHlsZXMgPSB7ICdXZWJraXRGbGV4V3JhcCc6ICdub3dyYXAnLCAnbXNGbGV4V3JhcCc6ICdub3dyYXAnLCBmbGV4V3JhcDogJ25vd3JhcCcgfTtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGxvb2t1cFNlYXJjaENsYXNzTmFtZXMgfSBzdHlsZT17IHN0eWxlcyB9PlxyXG4gICAgICAgICAgeyB0aGlzLnJlbmRlclNjb3BlU2VsZWN0b3Ioc2NvcGVzLCB0YXJnZXRTY29wZSkgfVxyXG4gICAgICAgICAgeyB0aGlzLnJlbmRlclNlYXJjaElucHV0KHsgLi4ucHJvcHMsIGNsYXNzTmFtZTogJ3NsZHMtY29sJywgYmFyZTogdHJ1ZSB9KSB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5yZW5kZXJTZWFyY2hJbnB1dCh0aGlzLnByb3BzKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuTG9va3VwU2VhcmNoLnByb3BUeXBlcyA9IHtcclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgaGlkZGVuOiBQcm9wVHlwZXMuYm9vbCxcclxuICBzZWFyY2hUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHNjb3BlczogUHJvcFR5cGVzLmFycmF5T2YoXHJcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgIGljb246IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICB9KVxyXG4gICksXHJcbiAgdGFyZ2V0U2NvcGU6IFByb3BUeXBlcy5hbnksXHJcbiAgb25LZXlEb3duOiBQcm9wVHlwZXMuZnVuYyxcclxuICBvbkJsdXI6IFByb3BUeXBlcy5mdW5jLFxyXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcclxuICBvblNjb3BlTWVudUNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcclxuICBvblNjb3BlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcclxuICBvblByZXNzRG93bjogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgb25TdWJtaXQ6IFByb3BUeXBlcy5mdW5jLFxyXG4gIG9uQ29tcGxldGU6IFByb3BUeXBlcy5mdW5jLFxyXG59O1xyXG5cclxuLyoqXHJcbiAqXHJcbiAqL1xyXG5jbGFzcyBMb29rdXBDYW5kaWRhdGVMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5mb2N1cykge1xyXG4gICAgICB0aGlzLmZvY3VzVG9UYXJnZXRJdGVtRWwoMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5mb2N1cyAmJiAhcHJldlByb3BzLmZvY3VzKSB7XHJcbiAgICAgIHRoaXMuZm9jdXNUb1RhcmdldEl0ZW1FbCgwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uU2VsZWN0KGVudHJ5KSB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xyXG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KGVudHJ5KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uS2V5RG93bihlKSB7XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSAzOCB8fCBlLmtleUNvZGUgPT09IDQwKSB7IC8vIFVQL0RPV05cclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICBjb25zdCBjdXJyZW50RWwgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICBsZXQgaXRlbUVsID0gZS5rZXlDb2RlID09PSA0MCA/IGN1cnJlbnRFbC5uZXh0U2libGluZyA6IGN1cnJlbnRFbC5wcmV2aW91c1NpYmxpbmc7XHJcbiAgICAgIHdoaWxlIChpdGVtRWwpIHtcclxuICAgICAgICBjb25zdCBhbmNob3JFbCA9IGl0ZW1FbC5xdWVyeVNlbGVjdG9yKCcucmVhY3Qtc2xkcy1jYW5kaWRhdGVbdGFiSW5kZXhdJyk7XHJcbiAgICAgICAgaWYgKGFuY2hvckVsICYmICFhbmNob3JFbC5kaXNhYmxlZCkge1xyXG4gICAgICAgICAgYW5jaG9yRWwuZm9jdXMoKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaXRlbUVsID0gZS5rZXlDb2RlID09PSA0MCA/IGl0ZW1FbC5uZXh0U2libGluZyA6IGl0ZW1FbC5wcmV2aW91c1NpYmxpbmc7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSAyNykgeyAvLyBFU0NcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICB0aGlzLm9uU2VsZWN0KG51bGwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9jdXNUb1RhcmdldEl0ZW1FbChpbmRleCkge1xyXG4gICAgY29uc3QgZWwgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcclxuICAgIGNvbnN0IGFuY2hvcnMgPSBlbC5xdWVyeVNlbGVjdG9yQWxsKCcucmVhY3Qtc2xkcy1jYW5kaWRhdGVbdGFiSW5kZXhdJyk7XHJcbiAgICBpZiAoYW5jaG9yc1tpbmRleF0pIHtcclxuICAgICAgYW5jaG9yc1tpbmRleF0uZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlckNhbmRpZGF0ZShlbnRyeSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGxpIGNsYXNzTmFtZT0nc2xkcy1sb29rdXBfX2l0ZW0nIGtleT17IGVudHJ5LnZhbHVlIH0+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPSdzbGRzLXRydW5jYXRlIHJlYWN0LXNsZHMtY2FuZGlkYXRlJyB0YWJJbmRleD17IC0xIH0gcm9sZT0nb3B0aW9uJ1xyXG4gICAgICAgICAgb25LZXlEb3duPXsgKGUpID0+IGUua2V5Q29kZSA9PT0gMTMgJiYgdGhpcy5vblNlbGVjdChlbnRyeSkgfVxyXG4gICAgICAgICAgb25CbHVyPXsgdGhpcy5wcm9wcy5vbkJsdXIgfVxyXG4gICAgICAgICAgb25DbGljaz17ICgpID0+IHRoaXMub25TZWxlY3QoZW50cnkpIH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGVudHJ5Lmljb24gP1xyXG4gICAgICAgICAgICA8SWNvbiBjYXRlZ29yeT17IGVudHJ5LmNhdGVnb3J5IH0gaWNvbj17IGVudHJ5Lmljb24gfSBzaXplPSdzbWFsbCcgLz4gOlxyXG4gICAgICAgICAgICB1bmRlZmluZWRcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHsgZW50cnkubGFiZWwgfVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9saT5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGRhdGEgPSBbXSwgaGlkZGVuLCBsb2FkaW5nLCBoZWFkZXIsIGZvb3RlciwgZmlsdGVyID0gKCkgPT4gdHJ1ZSB9ID0gdGhpcy5wcm9wcztcclxuICAgIGNvbnN0IGxvb2t1cE1lbnVDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcclxuICAgICAgJ3NsZHMtbG9va3VwX19tZW51JyxcclxuICAgICAgeyAnc2xkcy1oaWRlJzogaGlkZGVuIH1cclxuICAgICk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IGxvb2t1cE1lbnVDbGFzc05hbWVzIH0gcm9sZT0nbGlzdGJveCdcclxuICAgICAgICBvbktleURvd249eyB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpIH1cclxuICAgICAgPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhlYWRlciA/XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2xkcy1sb29rdXBfX2l0ZW0nPnsgaGVhZGVyIH08L2Rpdj4gOlxyXG4gICAgICAgICAgdW5kZWZpbmVkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9J3NsZHMtbG9va3VwX19saXN0JyByb2xlPSdwcmVzZW50YXRpb24nPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBkYXRhLmZpbHRlcihmaWx0ZXIpLm1hcCh0aGlzLnJlbmRlckNhbmRpZGF0ZS5iaW5kKHRoaXMpKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsb2FkaW5nID9cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nc2xkcy1sb29rdXBfX2l0ZW0nIGtleT0nbG9hZGluZyc+XHJcbiAgICAgICAgICAgICAgPFNwaW5uZXIgc2l6ZT0nc21hbGwnIHN0eWxlPXsgeyBtYXJnaW46ICcwIGF1dG8nIH0gfSAvPlxyXG4gICAgICAgICAgICA8L2xpPiA6XHJcbiAgICAgICAgICAgIHVuZGVmaW5lZFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZm9vdGVyID9cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzbGRzLWxvb2t1cF9faXRlbSc+eyBmb290ZXIgfTwvZGl2PiA6XHJcbiAgICAgICAgICB1bmRlZmluZWRcclxuICAgICAgICB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5Mb29rdXBDYW5kaWRhdGVMaXN0LnByb3BUeXBlcyA9IHtcclxuICBkYXRhOiBQcm9wVHlwZXMuYXJyYXlPZihMb29rdXBFbnRyeVR5cGUpLFxyXG4gIGZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcclxuICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbCxcclxuICBoaWRkZW46IFByb3BUeXBlcy5ib29sLFxyXG4gIGZpbHRlcjogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgb25TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLFxyXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgaGVhZGVyOiBQcm9wVHlwZXMubm9kZSxcclxuICBmb290ZXI6IFByb3BUeXBlcy5ub2RlLFxyXG59O1xyXG5cclxuXHJcbi8qKlxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9va3VwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaWQ6IGBmb3JtLWVsZW1lbnQtJHt1dWlkKCl9YCxcclxuICAgICAgc2VsZWN0ZWQ6IHByb3BzLmRlZmF1bHRTZWxlY3RlZCxcclxuICAgICAgb3BlbmVkOiBwcm9wcy5kZWZhdWx0T3BlbmVkLFxyXG4gICAgICBzZWFyY2hUZXh0OiBwcm9wcy5kZWZhdWx0U2VhcmNoVGV4dCxcclxuICAgICAgdGFyZ2V0U2NvcGU6IHByb3BzLmRlZmF1bHRUYXJnZXRTY29wZSxcclxuICAgICAgZm9jdXNGaXJzdENhbmRpZGF0ZTogZmFsc2UsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgb25TY29wZU1lbnVDbGljayhlKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcclxuICAgIGlmICh0aGlzLnByb3BzLm9uU2NvcGVNZW51Q2xpY2spIHtcclxuICAgICAgdGhpcy5wcm9wcy5vblNjb3BlTWVudUNsaWNrKGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25TY29wZUNoYW5nZSh0YXJnZXRTY29wZSkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRhcmdldFNjb3BlIH0pO1xyXG4gICAgaWYgKHRoaXMucHJvcHMub25TY29wZUNoYW5nZSkge1xyXG4gICAgICB0aGlzLnByb3BzLm9uU2NvcGVDaGFuZ2UodGFyZ2V0U2NvcGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25TZWFyY2hUZXh0Q2hhbmdlKHNlYXJjaFRleHQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hUZXh0IH0pO1xyXG4gICAgaWYgKHRoaXMucHJvcHMub25TZWFyY2hUZXh0Q2hhbmdlKSB7XHJcbiAgICAgIHRoaXMucHJvcHMub25TZWFyY2hUZXh0Q2hhbmdlKHNlYXJjaFRleHQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Mb29rdXBSZXF1ZXN0KHNlYXJjaFRleHQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IHRydWUgfSk7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5vbkxvb2t1cFJlcXVlc3QpIHtcclxuICAgICAgdGhpcy5wcm9wcy5vbkxvb2t1cFJlcXVlc3Qoc2VhcmNoVGV4dCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNvbXBsZXRlKCkge1xyXG4gICAgaWYgKHRoaXMucHJvcHMub25Db21wbGV0ZSkge1xyXG4gICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uUmVzZXRTZWxlY3Rpb24oKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWQ6IG51bGwgfSk7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5vblNlbGVjdCkge1xyXG4gICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KG51bGwpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5vblNlYXJjaFRleHRDaGFuZ2UoJycpO1xyXG4gICAgdGhpcy5vbkxvb2t1cFJlcXVlc3QoJycpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNlYXJjaEVsZW0gPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnJlZnMuc2VhcmNoKTtcclxuICAgICAgY29uc3QgaW5wdXRFbGVtID0gc2VhcmNoRWxlbS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xyXG4gICAgICBpbnB1dEVsZW0uZm9jdXMoKTtcclxuICAgIH0sIDEwKTtcclxuICB9XHJcblxyXG4gIG9uTG9va3VwSXRlbVNlbGVjdChzZWxlY3RlZCkge1xyXG4gICAgaWYgKHNlbGVjdGVkKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZCwgb3BlbmVkOiBmYWxzZSB9KTtcclxuICAgICAgaWYgKHRoaXMucHJvcHMub25TZWxlY3QpIHtcclxuICAgICAgICB0aGlzLnByb3BzLm9uU2VsZWN0KHNlbGVjdGVkKTtcclxuICAgICAgfVxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBzZWxlY3Rpb25FbGVtID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLnNlbGVjdGlvbik7XHJcbiAgICAgICAgY29uc3QgcGlsbEVsZW0gPSBzZWxlY3Rpb25FbGVtLnF1ZXJ5U2VsZWN0b3IoJ2EnKTtcclxuICAgICAgICBpZiAocGlsbEVsZW0pIHsgcGlsbEVsZW0uZm9jdXMoKTsgfVxyXG4gICAgICB9LCAxMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBmYWxzZSB9KTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc2VhcmNoRWxlbSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMucmVmcy5zZWFyY2gpO1xyXG4gICAgICAgIGNvbnN0IGlucHV0RWxlbSA9IHNlYXJjaEVsZW0ucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcclxuICAgICAgICBpbnB1dEVsZW0uZm9jdXMoKTtcclxuICAgICAgfSwgMTApO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucHJvcHMub25Db21wbGV0ZSkge1xyXG4gICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uRm9jdXNGaXJzdENhbmRpZGF0ZSgpIHtcclxuICAgIGNvbnN0IHsgb3BlbmVkID0gdGhpcy5zdGF0ZS5vcGVuZWQgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBpZiAoIW9wZW5lZCkge1xyXG4gICAgICB0aGlzLm9uTG9va3VwUmVxdWVzdCh0aGlzLnN0YXRlLnNlYXJjaFRleHQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzRmlyc3RDYW5kaWRhdGU6IHRydWUgfSk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c0ZpcnN0Q2FuZGlkYXRlOiBmYWxzZSB9KTtcclxuICAgICAgfSwgMTApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25CbHVyKCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICghdGhpcy5pc0ZvY3VzZWRJbkNvbXBvbmVudCgpKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogZmFsc2UgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25CbHVyKSB7XHJcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQmx1cigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNvbXBsZXRlKSB7XHJcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQ29tcGxldGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sIDEwKTtcclxuICB9XHJcblxyXG4gIGlzRm9jdXNlZEluQ29tcG9uZW50KCkge1xyXG4gICAgY29uc3Qgcm9vdEVsID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XHJcbiAgICBsZXQgdGFyZ2V0RWwgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xyXG4gICAgd2hpbGUgKHRhcmdldEVsICYmIHRhcmdldEVsICE9PSByb290RWwpIHtcclxuICAgICAgdGFyZ2V0RWwgPSB0YXJnZXRFbC5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICEhdGFyZ2V0RWw7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBpZCA9IHRoaXMucHJvcHMuaWQgfHwgdGhpcy5zdGF0ZS5pZDtcclxuICAgIGNvbnN0IHtcclxuICAgICAgdG90YWxDb2xzLCBjb2xzLFxyXG4gICAgICBsYWJlbCwgcmVxdWlyZWQsIGVycm9yLFxyXG4gICAgICBjbGFzc05hbWUsXHJcbiAgICAgIHNlbGVjdGVkID0gdGhpcy5zdGF0ZS5zZWxlY3RlZCwgZGVmYXVsdFNlbGVjdGVkLFxyXG4gICAgICBvcGVuZWQgPSB0aGlzLnN0YXRlLm9wZW5lZCwgZGVmYXVsdE9wZW5lZCxcclxuICAgICAgc2VhcmNoVGV4dCA9IHRoaXMuc3RhdGUuc2VhcmNoVGV4dCwgZGVmYXVsdFNlYXJjaFRleHQsXHJcbiAgICAgIHRhcmdldFNjb3BlID0gdGhpcy5zdGF0ZS50YXJnZXRTY29wZSwgZGVmYXVsdFRhcmdldFNjb3BlLFxyXG4gICAgICBsb2FkaW5nLCBsb29rdXBGaWx0ZXIsXHJcbiAgICAgIGxpc3RIZWFkZXIsIGxpc3RGb290ZXIsXHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIG9uU2VsZWN0LCBvbkJsdXIsIG9uQ29tcGxldGUsXHJcbiAgICAgIG9uU2NvcGVDaGFuZ2UsIG9uU2NvcGVNZW51Q2xpY2ssIG9uU2VhcmNoVGV4dENoYW5nZSwgb25Mb29rdXBSZXF1ZXN0LFxyXG4gICAgICAuLi5wcm9wcyxcclxuICAgIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgY29uc3QgZHJvcGRvd24gPSAoXHJcbiAgICAgIDxMb29rdXBDYW5kaWRhdGVMaXN0XHJcbiAgICAgICAgcmVmPSdjYW5kaWRhdGVMaXN0J1xyXG4gICAgICAgIGRhdGE9eyBkYXRhIH1cclxuICAgICAgICBmb2N1cz17IHRoaXMuc3RhdGUuZm9jdXNGaXJzdENhbmRpZGF0ZSB9XHJcbiAgICAgICAgaGlkZGVuPXsgIW9wZW5lZCB9XHJcbiAgICAgICAgbG9hZGluZz17IGxvYWRpbmcgfVxyXG4gICAgICAgIGZpbHRlcj17IGxvb2t1cEZpbHRlciA/IChlbnRyeSkgPT4gbG9va3VwRmlsdGVyKGVudHJ5LCBzZWFyY2hUZXh0LCB0YXJnZXRTY29wZSkgOiB1bmRlZmluZWQgfVxyXG4gICAgICAgIGhlYWRlcj17IGxpc3RIZWFkZXIgfVxyXG4gICAgICAgIGZvb3Rlcj17IGxpc3RGb290ZXIgfVxyXG4gICAgICAgIG9uU2VsZWN0PXsgdGhpcy5vbkxvb2t1cEl0ZW1TZWxlY3QuYmluZCh0aGlzKSB9XHJcbiAgICAgICAgb25CbHVyPXsgdGhpcy5vbkJsdXIuYmluZCh0aGlzKSB9XHJcbiAgICAgIC8+XHJcbiAgICApO1xyXG4gICAgY29uc3QgbG9va3VwQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXHJcbiAgICAgICdzbGRzLWxvb2t1cCcsXHJcbiAgICAgIHsgJ3NsZHMtaGFzLXNlbGVjdGlvbic6IHNlbGVjdGVkIH0sXHJcbiAgICAgIGNsYXNzTmFtZVxyXG4gICAgKTtcclxuICAgIGNvbnN0IGZvcm1FbGVtUHJvcHMgPSB7IGlkLCB0b3RhbENvbHMsIGNvbHMsIGxhYmVsLCByZXF1aXJlZCwgZXJyb3IsIGRyb3Bkb3duIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Rm9ybUVsZW1lbnQgeyAuLi5mb3JtRWxlbVByb3BzIH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBsb29rdXBDbGFzc05hbWVzIH1cclxuICAgICAgICAgIGRhdGEtc2VsZWN0PSdzaW5nbGUnXHJcbiAgICAgICAgICBkYXRhLXNjb3BlPXsgcHJvcHMuc2NvcGVzID8gJ211bHRpJyA6ICdzaW5nbGUnIH1cclxuICAgICAgICAgIGRhdGEtdHlwZWFoZWFkPXsgZmFsc2UgfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgc2VsZWN0ZWQgP1xyXG4gICAgICAgICAgICA8TG9va3VwU2VsZWN0aW9uXHJcbiAgICAgICAgICAgICAgaWQ9eyBpZCB9XHJcbiAgICAgICAgICAgICAgcmVmPSdzZWxlY3Rpb24nXHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWQ9eyBzZWxlY3RlZCB9XHJcbiAgICAgICAgICAgICAgb25SZXNldFNlbGVjdGlvbj17IHRoaXMub25SZXNldFNlbGVjdGlvbi5iaW5kKHRoaXMpIH1cclxuICAgICAgICAgICAgLz4gOlxyXG4gICAgICAgICAgICA8TG9va3VwU2VhcmNoIHsgLi4ucHJvcHMgfVxyXG4gICAgICAgICAgICAgIGlkPXsgaWQgfVxyXG4gICAgICAgICAgICAgIHJlZj0nc2VhcmNoJ1xyXG4gICAgICAgICAgICAgIHNlYXJjaFRleHQ9eyBzZWFyY2hUZXh0IH1cclxuICAgICAgICAgICAgICB0YXJnZXRTY29wZT17IHRhcmdldFNjb3BlIH1cclxuICAgICAgICAgICAgICBvblNjb3BlTWVudUNsaWNrPXsgdGhpcy5vblNjb3BlTWVudUNsaWNrLmJpbmQodGhpcykgfVxyXG4gICAgICAgICAgICAgIG9uU2NvcGVDaGFuZ2U9eyB0aGlzLm9uU2NvcGVDaGFuZ2UuYmluZCh0aGlzKSB9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyB0aGlzLm9uU2VhcmNoVGV4dENoYW5nZS5iaW5kKHRoaXMpIH1cclxuICAgICAgICAgICAgICBvblN1Ym1pdD17ICgpID0+IHRoaXMub25Mb29rdXBSZXF1ZXN0KHNlYXJjaFRleHQpIH1cclxuICAgICAgICAgICAgICBvblByZXNzRG93bj17IHRoaXMub25Gb2N1c0ZpcnN0Q2FuZGlkYXRlLmJpbmQodGhpcykgfVxyXG4gICAgICAgICAgICAgIG9uQ29tcGxldGU9eyB0aGlzLm9uQ29tcGxldGUuYmluZCh0aGlzKSB9XHJcbiAgICAgICAgICAgICAgb25CbHVyPXsgdGhpcy5vbkJsdXIuYmluZCh0aGlzKSB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvRm9ybUVsZW1lbnQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkxvb2t1cC5wcm9wVHlwZXMgPSB7XHJcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICBlcnJvcjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICBQcm9wVHlwZXMuYm9vbCxcclxuICAgIFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICBtZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgfSksXHJcbiAgXSksXHJcbiAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHNlbGVjdGVkOiBMb29rdXBFbnRyeVR5cGUsXHJcbiAgZGVmYXVsdFNlbGVjdGVkOiBMb29rdXBFbnRyeVR5cGUsXHJcbiAgb3BlbmVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICBkZWZhdWx0T3BlbmVkOiBQcm9wVHlwZXMuYm9vbCxcclxuICBzZWFyY2hUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGRlZmF1bHRTZWFyY2hUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLFxyXG4gIGRhdGE6IFByb3BUeXBlcy5hcnJheU9mKExvb2t1cEVudHJ5VHlwZSksXHJcbiAgbG9va3VwRmlsdGVyOiBQcm9wVHlwZXMuZnVuYyxcclxuICBsaXN0SGVhZGVyOiBQcm9wVHlwZXMubm9kZSxcclxuICBsaXN0Rm9vdGVyOiBQcm9wVHlwZXMubm9kZSxcclxuICBzY29wZXM6IFByb3BUeXBlcy5hcnJheU9mKFxyXG4gICAgUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgfSlcclxuICApLFxyXG4gIHRhcmdldFNjb3BlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGRlZmF1bHRUYXJnZXRTY29wZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICBvblNlYXJjaFRleHRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gIG9uU2NvcGVNZW51Q2xpY2s6IFByb3BUeXBlcy5mdW5jLFxyXG4gIG9uU2NvcGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxyXG4gIG9uTG9va3VwUmVxdWVzdDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcclxuICBvblNlbGVjdDogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgb25Db21wbGV0ZTogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgdG90YWxDb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIGNvbHM6IFByb3BUeXBlcy5udW1iZXIsXHJcbn07XHJcblxyXG5Mb29rdXAuaXNGb3JtRWxlbWVudCA9IHRydWU7XHJcbiJdfQ==