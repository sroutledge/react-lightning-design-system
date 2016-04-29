'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Col = exports.Row = undefined;

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Grid = function (_Component) {
  (0, _inherits3.default)(Grid, _Component);

  function Grid() {
    (0, _classCallCheck3.default)(this, Grid);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Grid).apply(this, arguments));
  }

  (0, _createClass3.default)(Grid, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var className = _props.className;
      var frame = _props.frame;
      var children = _props.children;
      var props = (0, _objectWithoutProperties3.default)(_props, ['className', 'frame', 'children']);

      var gridClassNames = (0, _classnames2.default)(className, 'slds-grid', 'slds-grid--vertical', frame ? 'slds-grid--frame' : null);
      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: gridClassNames }, props),
        children
      );
    }
  }]);
  return Grid;
}(_react.Component);

Grid.propTypes = {
  className: _react.PropTypes.string,
  frame: _react.PropTypes.bool,
  children: _react.PropTypes.node
};

var Row = exports.Row = function (_Component2) {
  (0, _inherits3.default)(Row, _Component2);

  function Row() {
    (0, _classCallCheck3.default)(this, Row);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Row).apply(this, arguments));
  }

  (0, _createClass3.default)(Row, [{
    key: 'renderColumn',
    value: function renderColumn(colProps, child) {
      /* eslint-disable no-use-before-define */
      if (child.type !== Col) {
        return _react2.default.createElement(
          Col,
          colProps,
          child
        );
      }

      var childProps = (0, _keys2.default)(colProps).reduce(function (cprops, key) {
        cprops[key] = child.props[key] || colProps[key];
        return cprops;
      }, {});
      return _react2.default.cloneElement(child, childProps);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props;
      var className = _props2.className;
      var align = _props2.align;
      var nowrap = _props2.nowrap;
      var nowrapSmall = _props2.nowrapSmall;
      var nowrapMedium = _props2.nowrapMedium;
      var nowrapLarge = _props2.nowrapLarge;
      var cols = _props2.cols;
      var colsSmall = _props2.colsSmall;
      var colsMedium = _props2.colsMedium;
      var colsLarge = _props2.colsLarge;
      var children = _props2.children;
      var props = (0, _objectWithoutProperties3.default)(_props2, ['className', 'align', 'nowrap', 'nowrapSmall', 'nowrapMedium', 'nowrapLarge', 'cols', 'colsSmall', 'colsMedium', 'colsLarge', 'children']);

      var rowClassNames = (0, _classnames2.default)(className, 'slds-grid', align ? 'slds-grid--align-' + align : null, nowrap ? 'slds-nowrap' : 'slds-wrap', nowrapSmall ? 'slds-nowrap--small' : null, nowrapMedium ? 'slds-nowrap--medium' : null, nowrapLarge ? 'slds-nowrap--large' : null);
      var totalCols = cols || function () {
        var cnt = 0;
        _react2.default.Children.forEach(children, function (child) {
          return cnt += child.props.cols || 1;
        });
        return cnt;
      }();
      var colProps = {
        totalCols: totalCols,
        totalColsSmall: colsSmall || totalCols,
        totalColsMedium: colsMedium || totalCols,
        totalColsLarge: colsLarge || totalCols
      };
      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: rowClassNames }, props),
        _react2.default.Children.map(children, this.renderColumn.bind(this, colProps))
      );
    }
  }]);
  return Row;
}(_react.Component);

var ROW_ALIGNS = ['center', 'space', 'spread'];

Row.propTypes = {
  className: _react.PropTypes.string,
  align: _react.PropTypes.oneOf(ROW_ALIGNS),
  nowrap: _react.PropTypes.bool,
  nowrapSmall: _react.PropTypes.bool,
  nowrapMedium: _react.PropTypes.bool,
  nowrapLarge: _react.PropTypes.bool,
  cols: _react.PropTypes.number,
  colsSmall: _react.PropTypes.number,
  colsMedium: _react.PropTypes.number,
  colsLarge: _react.PropTypes.number,
  children: _react.PropTypes.node
};

function adjustCols(colNum, large) {
  if (colNum > 6) {
    return large ? 12 : 6;
  }
  return colNum;
}

var Col = exports.Col = function (_Component3) {
  (0, _inherits3.default)(Col, _Component3);

  function Col() {
    (0, _classCallCheck3.default)(this, Col);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Col).apply(this, arguments));
  }

  (0, _createClass3.default)(Col, [{
    key: 'render',
    value: function render() {
      var _props3 = this.props;
      var className = _props3.className;
      var padded = _props3.padded;
      var align = _props3.align;
      var noFlex = _props3.noFlex;
      var order = _props3.order;
      var orderSmall = _props3.orderSmall;
      var orderMedium = _props3.orderMedium;
      var orderLarge = _props3.orderLarge;
      var cols = _props3.cols;
      var colsSmall = _props3.colsSmall;
      var colsMedium = _props3.colsMedium;
      var colsLarge = _props3.colsLarge;
      var totalCols = _props3.totalCols;
      var totalColsSmall = _props3.totalColsSmall;
      var totalColsMedium = _props3.totalColsMedium;
      var totalColsLarge = _props3.totalColsLarge;
      var children = _props3.children;
      var props = (0, _objectWithoutProperties3.default)(_props3, ['className', 'padded', 'align', 'noFlex', 'order', 'orderSmall', 'orderMedium', 'orderLarge', 'cols', 'colsSmall', 'colsMedium', 'colsLarge', 'totalCols', 'totalColsSmall', 'totalColsMedium', 'totalColsLarge', 'children']);

      var rowClassNames = (0, _classnames2.default)(className, padded ? 'slds-col--padded' + (/^(medium|large)$/.test(padded) ? '-' + padded : '') : 'slds-col', align ? 'slds-align-' + align : null, noFlex ? 'slds-no-flex' : null, order ? 'slds-order--' + order : null, orderSmall ? 'slds-small-order--' + orderSmall : null, orderMedium ? 'slds-medium-order--' + orderMedium : null, orderLarge ? 'slds-large-order--' + orderLarge : null, cols && totalCols ? 'slds-size--' + cols + '-of-' + adjustCols(totalCols, true) : null, colsSmall && totalColsSmall ? 'slds-small-size--' + colsSmall + '-of-' + adjustCols(totalColsSmall) : null, colsMedium && totalColsMedium ? 'slds-medium-size--' + colsMedium + '-of-' + adjustCols(totalColsMedium) : null, colsLarge && totalColsMedium ? 'slds-large-size--' + colsLarge + '-of-' + adjustCols(totalColsLarge, true) : null);
      return _react2.default.createElement(
        'div',
        (0, _extends3.default)({ className: rowClassNames }, props),
        children
      );
    }
  }]);
  return Col;
}(_react.Component);

var COL_ALIGNS = ['top', 'medium', 'bottom'];

Col.propTypes = {
  className: _react.PropTypes.string,
  padded: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.string]),
  align: _react.PropTypes.oneOf(COL_ALIGNS),
  noFlex: _react.PropTypes.bool,
  order: _react.PropTypes.number,
  orderSmall: _react.PropTypes.number,
  orderMedium: _react.PropTypes.number,
  orderLarge: _react.PropTypes.number,
  nowrap: _react.PropTypes.bool,
  cols: _react.PropTypes.number,
  colsSmall: _react.PropTypes.number,
  colsMedium: _react.PropTypes.number,
  colsLarge: _react.PropTypes.number,
  totalCols: _react.PropTypes.number,
  totalColsSmall: _react.PropTypes.number,
  totalColsMedium: _react.PropTypes.number,
  totalColsLarge: _react.PropTypes.number,
  children: _react.PropTypes.node
};

exports.default = Grid;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL0dyaWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0lBRU07Ozs7Ozs7Ozs7NkJBQ0s7bUJBQzBDLEtBQUssS0FBTCxDQUQxQztVQUNDLDZCQUREO1VBQ1kscUJBRFo7VUFDbUIsMkJBRG5CO1VBQ2dDLDJGQURoQzs7QUFFUCxVQUFNLGlCQUFpQiwwQkFDckIsU0FEcUIsRUFDVixXQURVLEVBQ0cscUJBREgsRUFFckIsUUFBUSxrQkFBUixHQUE2QixJQUE3QixDQUZJLENBRkM7QUFNUCxhQUNFOztpQ0FBSyxXQUFZLGNBQVosSUFBa0MsTUFBdkM7UUFDSSxRQURKO09BREYsQ0FOTzs7O1NBREw7OztBQWVOLEtBQUssU0FBTCxHQUFpQjtBQUNmLGFBQVcsaUJBQVUsTUFBVjtBQUNYLFNBQU8saUJBQVUsSUFBVjtBQUNQLFlBQVUsaUJBQVUsSUFBVjtDQUhaOztJQU1hOzs7Ozs7Ozs7O2lDQUNFLFVBQVUsT0FBTzs7QUFFNUIsVUFBSSxNQUFNLElBQU4sS0FBZSxHQUFmLEVBQW9CO0FBQ3RCLGVBQU87QUFBQyxhQUFEO1VBQVUsUUFBVjtVQUF1QixLQUF2QjtTQUFQLENBRHNCO09BQXhCOztBQUlBLFVBQU0sYUFBYSxvQkFBWSxRQUFaLEVBQXNCLE1BQXRCLENBQTZCLFVBQUMsTUFBRCxFQUFTLEdBQVQsRUFBaUI7QUFDL0QsZUFBTyxHQUFQLElBQWMsTUFBTSxLQUFOLENBQVksR0FBWixLQUFvQixTQUFTLEdBQVQsQ0FBcEIsQ0FEaUQ7QUFFL0QsZUFBTyxNQUFQLENBRitEO09BQWpCLEVBRzdDLEVBSGdCLENBQWIsQ0FOc0I7QUFVNUIsYUFBTyxnQkFBTSxZQUFOLENBQW1CLEtBQW5CLEVBQTBCLFVBQTFCLENBQVAsQ0FWNEI7Ozs7NkJBYXJCO29CQUtILEtBQUssS0FBTCxDQUxHO1VBRUwsOEJBRks7VUFFTSxzQkFG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WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5cclxuY2xhc3MgR3JpZCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjbGFzc05hbWUsIGZyYW1lLCBjaGlsZHJlbiwgLi4ucHJvcHMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCBncmlkQ2xhc3NOYW1lcyA9IGNsYXNzbmFtZXMoXHJcbiAgICAgIGNsYXNzTmFtZSwgJ3NsZHMtZ3JpZCcsICdzbGRzLWdyaWQtLXZlcnRpY2FsJyxcclxuICAgICAgZnJhbWUgPyAnc2xkcy1ncmlkLS1mcmFtZScgOiBudWxsXHJcbiAgICApO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBncmlkQ2xhc3NOYW1lcyB9IHsgLi4ucHJvcHMgfT5cclxuICAgICAgICB7IGNoaWxkcmVuIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuR3JpZC5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGZyYW1lOiBQcm9wVHlwZXMuYm9vbCxcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgUm93IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICByZW5kZXJDb2x1bW4oY29sUHJvcHMsIGNoaWxkKSB7XHJcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xyXG4gICAgaWYgKGNoaWxkLnR5cGUgIT09IENvbCkge1xyXG4gICAgICByZXR1cm4gPENvbCB7IC4uLmNvbFByb3BzIH0+eyBjaGlsZCB9PC9Db2w+O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNoaWxkUHJvcHMgPSBPYmplY3Qua2V5cyhjb2xQcm9wcykucmVkdWNlKChjcHJvcHMsIGtleSkgPT4ge1xyXG4gICAgICBjcHJvcHNba2V5XSA9IGNoaWxkLnByb3BzW2tleV0gfHwgY29sUHJvcHNba2V5XTtcclxuICAgICAgcmV0dXJuIGNwcm9wcztcclxuICAgIH0sIHt9KTtcclxuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBjbGFzc05hbWUsIGFsaWduLCBub3dyYXAsIG5vd3JhcFNtYWxsLCBub3dyYXBNZWRpdW0sIG5vd3JhcExhcmdlLFxyXG4gICAgICBjb2xzLCBjb2xzU21hbGwsIGNvbHNNZWRpdW0sIGNvbHNMYXJnZSxcclxuICAgICAgY2hpbGRyZW4sIC4uLnByb3BzLFxyXG4gICAgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCByb3dDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcclxuICAgICAgY2xhc3NOYW1lLCAnc2xkcy1ncmlkJyxcclxuICAgICAgYWxpZ24gPyBgc2xkcy1ncmlkLS1hbGlnbi0ke2FsaWdufWAgOiBudWxsLFxyXG4gICAgICBub3dyYXAgPyBgc2xkcy1ub3dyYXBgIDogJ3NsZHMtd3JhcCcsXHJcbiAgICAgIG5vd3JhcFNtYWxsID8gJ3NsZHMtbm93cmFwLS1zbWFsbCcgOiBudWxsLFxyXG4gICAgICBub3dyYXBNZWRpdW0gPyAnc2xkcy1ub3dyYXAtLW1lZGl1bScgOiBudWxsLFxyXG4gICAgICBub3dyYXBMYXJnZSA/ICdzbGRzLW5vd3JhcC0tbGFyZ2UnIDogbnVsbFxyXG4gICAgKTtcclxuICAgIGNvbnN0IHRvdGFsQ29scyA9IGNvbHMgfHwgKCgpID0+IHtcclxuICAgICAgbGV0IGNudCA9IDA7XHJcbiAgICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIChjaGlsZCkgPT4gY250ICs9IGNoaWxkLnByb3BzLmNvbHMgfHwgMSk7XHJcbiAgICAgIHJldHVybiBjbnQ7XHJcbiAgICB9KSgpO1xyXG4gICAgY29uc3QgY29sUHJvcHMgPSB7XHJcbiAgICAgIHRvdGFsQ29scyxcclxuICAgICAgdG90YWxDb2xzU21hbGw6IGNvbHNTbWFsbCB8fCB0b3RhbENvbHMsXHJcbiAgICAgIHRvdGFsQ29sc01lZGl1bTogY29sc01lZGl1bSB8fCB0b3RhbENvbHMsXHJcbiAgICAgIHRvdGFsQ29sc0xhcmdlOiBjb2xzTGFyZ2UgfHwgdG90YWxDb2xzLFxyXG4gICAgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgcm93Q2xhc3NOYW1lcyB9IHsgLi4ucHJvcHMgfT5cclxuICAgICAgICB7IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgdGhpcy5yZW5kZXJDb2x1bW4uYmluZCh0aGlzLCBjb2xQcm9wcykpIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgUk9XX0FMSUdOUyA9IFtcclxuICAnY2VudGVyJyxcclxuICAnc3BhY2UnLFxyXG4gICdzcHJlYWQnLFxyXG5dO1xyXG5cclxuUm93LnByb3BUeXBlcyA9IHtcclxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgYWxpZ246IFByb3BUeXBlcy5vbmVPZihST1dfQUxJR05TKSxcclxuICBub3dyYXA6IFByb3BUeXBlcy5ib29sLFxyXG4gIG5vd3JhcFNtYWxsOiBQcm9wVHlwZXMuYm9vbCxcclxuICBub3dyYXBNZWRpdW06IFByb3BUeXBlcy5ib29sLFxyXG4gIG5vd3JhcExhcmdlOiBQcm9wVHlwZXMuYm9vbCxcclxuICBjb2xzOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIGNvbHNTbWFsbDogUHJvcFR5cGVzLm51bWJlcixcclxuICBjb2xzTWVkaXVtOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIGNvbHNMYXJnZTogUHJvcFR5cGVzLm51bWJlcixcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXHJcbn07XHJcblxyXG5cclxuZnVuY3Rpb24gYWRqdXN0Q29scyhjb2xOdW0sIGxhcmdlKSB7XHJcbiAgaWYgKGNvbE51bSA+IDYpIHtcclxuICAgIHJldHVybiBsYXJnZSA/IDEyIDogNjtcclxuICB9XHJcbiAgcmV0dXJuIGNvbE51bTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBjbGFzc05hbWUsIHBhZGRlZCwgYWxpZ24sIG5vRmxleCxcclxuICAgICAgb3JkZXIsIG9yZGVyU21hbGwsIG9yZGVyTWVkaXVtLCBvcmRlckxhcmdlLFxyXG4gICAgICBjb2xzLCBjb2xzU21hbGwsIGNvbHNNZWRpdW0sIGNvbHNMYXJnZSxcclxuICAgICAgdG90YWxDb2xzLCB0b3RhbENvbHNTbWFsbCwgdG90YWxDb2xzTWVkaXVtLCB0b3RhbENvbHNMYXJnZSxcclxuICAgICAgY2hpbGRyZW4sIC4uLnByb3BzLFxyXG4gICAgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCByb3dDbGFzc05hbWVzID0gY2xhc3NuYW1lcyhcclxuICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICBwYWRkZWQgP1xyXG4gICAgICAgIGBzbGRzLWNvbC0tcGFkZGVkJHsvXihtZWRpdW18bGFyZ2UpJC8udGVzdChwYWRkZWQpID8gJy0nICsgcGFkZGVkIDogJyd9YCA6XHJcbiAgICAgICAgJ3NsZHMtY29sJyxcclxuICAgICAgYWxpZ24gPyBgc2xkcy1hbGlnbi0ke2FsaWdufWAgOiBudWxsLFxyXG4gICAgICBub0ZsZXggPyAnc2xkcy1uby1mbGV4JyA6IG51bGwsXHJcbiAgICAgIG9yZGVyID8gYHNsZHMtb3JkZXItLSR7b3JkZXJ9YCA6IG51bGwsXHJcbiAgICAgIG9yZGVyU21hbGwgPyBgc2xkcy1zbWFsbC1vcmRlci0tJHtvcmRlclNtYWxsfWAgOiBudWxsLFxyXG4gICAgICBvcmRlck1lZGl1bSA/IGBzbGRzLW1lZGl1bS1vcmRlci0tJHtvcmRlck1lZGl1bX1gIDogbnVsbCxcclxuICAgICAgb3JkZXJMYXJnZSA/IGBzbGRzLWxhcmdlLW9yZGVyLS0ke29yZGVyTGFyZ2V9YCA6IG51bGwsXHJcbiAgICAgIGNvbHMgJiYgdG90YWxDb2xzID8gYHNsZHMtc2l6ZS0tJHtjb2xzfS1vZi0ke2FkanVzdENvbHModG90YWxDb2xzLCB0cnVlKX1gIDogbnVsbCxcclxuICAgICAgY29sc1NtYWxsICYmIHRvdGFsQ29sc1NtYWxsID8gYHNsZHMtc21hbGwtc2l6ZS0tJHtjb2xzU21hbGx9LW9mLSR7YWRqdXN0Q29scyh0b3RhbENvbHNTbWFsbCl9YCA6IG51bGwsXHJcbiAgICAgIGNvbHNNZWRpdW0gJiYgdG90YWxDb2xzTWVkaXVtID8gYHNsZHMtbWVkaXVtLXNpemUtLSR7Y29sc01lZGl1bX0tb2YtJHthZGp1c3RDb2xzKHRvdGFsQ29sc01lZGl1bSl9YCA6IG51bGwsXHJcbiAgICAgIGNvbHNMYXJnZSAmJiB0b3RhbENvbHNNZWRpdW0gPyBgc2xkcy1sYXJnZS1zaXplLS0ke2NvbHNMYXJnZX0tb2YtJHthZGp1c3RDb2xzKHRvdGFsQ29sc0xhcmdlLCB0cnVlKX1gIDogbnVsbFxyXG4gICAgKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgcm93Q2xhc3NOYW1lcyB9IHsgLi4ucHJvcHMgfT5cclxuICAgICAgICB7IGNoaWxkcmVuIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgQ09MX0FMSUdOUyA9IFtcclxuICAndG9wJyxcclxuICAnbWVkaXVtJyxcclxuICAnYm90dG9tJyxcclxuXTtcclxuXHJcbkNvbC5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHBhZGRlZDogUHJvcFR5cGVzLm9uZU9mVHlwZShbXHJcbiAgICBQcm9wVHlwZXMuYm9vbCxcclxuICAgIFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgXSksXHJcbiAgYWxpZ246IFByb3BUeXBlcy5vbmVPZihDT0xfQUxJR05TKSxcclxuICBub0ZsZXg6IFByb3BUeXBlcy5ib29sLFxyXG4gIG9yZGVyOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIG9yZGVyU21hbGw6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgb3JkZXJNZWRpdW06IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgb3JkZXJMYXJnZTogUHJvcFR5cGVzLm51bWJlcixcclxuICBub3dyYXA6IFByb3BUeXBlcy5ib29sLFxyXG4gIGNvbHM6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgY29sc1NtYWxsOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIGNvbHNNZWRpdW06IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgY29sc0xhcmdlOiBQcm9wVHlwZXMubnVtYmVyLFxyXG4gIHRvdGFsQ29sczogUHJvcFR5cGVzLm51bWJlcixcclxuICB0b3RhbENvbHNTbWFsbDogUHJvcFR5cGVzLm51bWJlcixcclxuICB0b3RhbENvbHNNZWRpdW06IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgdG90YWxDb2xzTGFyZ2U6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdyaWQ7XHJcbiJdfQ==