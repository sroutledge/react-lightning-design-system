'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

exports.setAssetRoot = setAssetRoot;
exports.getAssetRoot = getAssetRoot;
exports.clearSymbolPaths = clearSymbolPaths;
exports.getAllSymbolsPaths = getAllSymbolsPaths;
exports.getSymbolsFilePath = getSymbolsFilePath;
exports.setSymbolsFilePath = setSymbolsFilePath;
exports.registerStyle = registerStyle;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var assetRoot = '/assets';
var symbolFiles = {};

function setAssetRoot(path) {
  assetRoot = path;
}

function getAssetRoot() {
  return assetRoot;
}

function clearSymbolPaths() {
  (0, _keys2.default)(symbolFiles).forEach(function (key) {
    delete symbolFiles[key];
  });
}

function getAllSymbolsPaths() {
  return symbolFiles;
}

// get the file path for a single symbols file by type
function getSymbolsFilePath(type) {
  return symbolFiles[type];
}

// updates the symbols file object by assigning
// all differences passed in
function setSymbolsFilePath(updates) {
  return (0, _assign2.default)(symbolFiles, updates);
}

function registerStyle(styleName, rules) {
  var styleId = 'react-slds-cssfix-' + styleName;
  var style = document.getElementById(styleId);
  if (style) {
    return;
  }
  style = document.createElement('style');
  style.id = styleId;
  style.appendChild(document.createTextNode(''));
  document.documentElement.appendChild(style);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = (0, _getIterator3.default)(rules), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var ruleSet = _step.value;

      var declaration = ruleSet.pop();
      var selectors = ruleSet;
      selectors = selectors.concat(selectors.map(function (s) {
        return '.slds ' + s;
      }));
      var rule = selectors.join(', ') + ' ' + declaration;
      style.sheet.insertRule(rule, 0);
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
}

exports.default = { setAssetRoot: setAssetRoot, getAssetRoot: getAssetRoot, registerStyle: registerStyle, getSymbolsFilePath: getSymbolsFilePath, setSymbolsFilePath: setSymbolsFilePath };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL3V0aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBR2dCLFksR0FBQSxZO1FBSUEsWSxHQUFBLFk7UUFJQSxnQixHQUFBLGdCO1FBTUEsa0IsR0FBQSxrQjtRQUtBLGtCLEdBQUEsa0I7UUFNQSxrQixHQUFBLGtCO1FBSUEsYSxHQUFBLGE7Ozs7QUFoQ2hCLElBQUksWUFBWSxTQUFoQjtBQUNBLElBQU0sY0FBYyxFQUFwQjs7QUFFTyxTQUFTLFlBQVQsQ0FBc0IsSUFBdEIsRUFBNEI7QUFDakMsY0FBWSxJQUFaO0FBQ0Q7O0FBRU0sU0FBUyxZQUFULEdBQXdCO0FBQzdCLFNBQU8sU0FBUDtBQUNEOztBQUVNLFNBQVMsZ0JBQVQsR0FBNEI7QUFDakMsc0JBQVksV0FBWixFQUF5QixPQUF6QixDQUFpQyxlQUFPO0FBQ3RDLFdBQU8sWUFBWSxHQUFaLENBQVA7QUFDRCxHQUZEO0FBR0Q7O0FBRU0sU0FBUyxrQkFBVCxHQUE4QjtBQUNuQyxTQUFPLFdBQVA7QUFDRDs7O0FBR00sU0FBUyxrQkFBVCxDQUE0QixJQUE1QixFQUFrQztBQUN2QyxTQUFPLFlBQVksSUFBWixDQUFQO0FBQ0Q7Ozs7QUFJTSxTQUFTLGtCQUFULENBQTRCLE9BQTVCLEVBQXFDO0FBQzFDLFNBQU8sc0JBQWMsV0FBZCxFQUEyQixPQUEzQixDQUFQO0FBQ0Q7O0FBRU0sU0FBUyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLEtBQWxDLEVBQXlDO0FBQzlDLE1BQU0sVUFBVSx1QkFBdUIsU0FBdkM7QUFDQSxNQUFJLFFBQVEsU0FBUyxjQUFULENBQXdCLE9BQXhCLENBQVo7QUFDQSxNQUFJLEtBQUosRUFBVztBQUFFO0FBQVM7QUFDdEIsVUFBUSxTQUFTLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBUjtBQUNBLFFBQU0sRUFBTixHQUFXLE9BQVg7QUFDQSxRQUFNLFdBQU4sQ0FBa0IsU0FBUyxjQUFULENBQXdCLEVBQXhCLENBQWxCO0FBQ0EsV0FBUyxlQUFULENBQXlCLFdBQXpCLENBQXFDLEtBQXJDO0FBUDhDO0FBQUE7QUFBQTs7QUFBQTtBQVE5QyxvREFBc0IsS0FBdEIsNEdBQTZCO0FBQUEsVUFBbEIsT0FBa0I7O0FBQzNCLFVBQU0sY0FBYyxRQUFRLEdBQVIsRUFBcEI7QUFDQSxVQUFJLFlBQVksT0FBaEI7QUFDQSxrQkFBWSxVQUFVLE1BQVYsQ0FBaUIsVUFBVSxHQUFWLENBQWMsVUFBQyxDQUFEO0FBQUEsZUFBTyxXQUFXLENBQWxCO0FBQUEsT0FBZCxDQUFqQixDQUFaO0FBQ0EsVUFBTSxPQUFPLFVBQVUsSUFBVixDQUFlLElBQWYsSUFBdUIsR0FBdkIsR0FBNkIsV0FBMUM7QUFDQSxZQUFNLEtBQU4sQ0FBWSxVQUFaLENBQXVCLElBQXZCLEVBQTZCLENBQTdCO0FBQ0Q7QUFkNkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWUvQzs7a0JBRWMsRUFBRSwwQkFBRixFQUFnQiwwQkFBaEIsRUFBOEIsNEJBQTlCLEVBQTZDLHNDQUE3QyxFQUFpRSxzQ0FBakUsRSIsImZpbGUiOiJ1dGlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGFzc2V0Um9vdCA9ICcvYXNzZXRzJztcclxuY29uc3Qgc3ltYm9sRmlsZXMgPSB7fTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRBc3NldFJvb3QocGF0aCkge1xyXG4gIGFzc2V0Um9vdCA9IHBhdGg7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBc3NldFJvb3QoKSB7XHJcbiAgcmV0dXJuIGFzc2V0Um9vdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyU3ltYm9sUGF0aHMoKSB7XHJcbiAgT2JqZWN0LmtleXMoc3ltYm9sRmlsZXMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgIGRlbGV0ZSBzeW1ib2xGaWxlc1trZXldO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsU3ltYm9sc1BhdGhzKCkge1xyXG4gIHJldHVybiBzeW1ib2xGaWxlcztcclxufVxyXG5cclxuLy8gZ2V0IHRoZSBmaWxlIHBhdGggZm9yIGEgc2luZ2xlIHN5bWJvbHMgZmlsZSBieSB0eXBlXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTeW1ib2xzRmlsZVBhdGgodHlwZSkge1xyXG4gIHJldHVybiBzeW1ib2xGaWxlc1t0eXBlXTtcclxufVxyXG5cclxuLy8gdXBkYXRlcyB0aGUgc3ltYm9scyBmaWxlIG9iamVjdCBieSBhc3NpZ25pbmdcclxuLy8gYWxsIGRpZmZlcmVuY2VzIHBhc3NlZCBpblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0U3ltYm9sc0ZpbGVQYXRoKHVwZGF0ZXMpIHtcclxuICByZXR1cm4gT2JqZWN0LmFzc2lnbihzeW1ib2xGaWxlcywgdXBkYXRlcyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlclN0eWxlKHN0eWxlTmFtZSwgcnVsZXMpIHtcclxuICBjb25zdCBzdHlsZUlkID0gJ3JlYWN0LXNsZHMtY3NzZml4LScgKyBzdHlsZU5hbWU7XHJcbiAgbGV0IHN0eWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc3R5bGVJZCk7XHJcbiAgaWYgKHN0eWxlKSB7IHJldHVybjsgfVxyXG4gIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuICBzdHlsZS5pZCA9IHN0eWxlSWQ7XHJcbiAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpKTtcclxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xyXG4gIGZvciAoY29uc3QgcnVsZVNldCBvZiBydWxlcykge1xyXG4gICAgY29uc3QgZGVjbGFyYXRpb24gPSBydWxlU2V0LnBvcCgpO1xyXG4gICAgbGV0IHNlbGVjdG9ycyA9IHJ1bGVTZXQ7XHJcbiAgICBzZWxlY3RvcnMgPSBzZWxlY3RvcnMuY29uY2F0KHNlbGVjdG9ycy5tYXAoKHMpID0+ICcuc2xkcyAnICsgcykpO1xyXG4gICAgY29uc3QgcnVsZSA9IHNlbGVjdG9ycy5qb2luKCcsICcpICsgJyAnICsgZGVjbGFyYXRpb247XHJcbiAgICBzdHlsZS5zaGVldC5pbnNlcnRSdWxlKHJ1bGUsIDApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgeyBzZXRBc3NldFJvb3QsIGdldEFzc2V0Um9vdCwgcmVnaXN0ZXJTdHlsZSwgZ2V0U3ltYm9sc0ZpbGVQYXRoLCBzZXRTeW1ib2xzRmlsZVBhdGggfTtcclxuIl19