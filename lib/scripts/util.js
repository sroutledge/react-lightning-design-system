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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL3V0aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBR2dCO1FBSUE7UUFJQTtRQU1BO1FBS0E7UUFNQTtRQUlBOzs7O0FBaENoQixJQUFJLFlBQVksU0FBWjtBQUNKLElBQU0sY0FBYyxFQUFkOztBQUVDLFNBQVMsWUFBVCxDQUFzQixJQUF0QixFQUE0QjtBQUNqQyxjQUFZLElBQVosQ0FEaUM7Q0FBNUI7O0FBSUEsU0FBUyxZQUFULEdBQXdCO0FBQzdCLFNBQU8sU0FBUCxDQUQ2QjtDQUF4Qjs7QUFJQSxTQUFTLGdCQUFULEdBQTRCO0FBQ2pDLHNCQUFZLFdBQVosRUFBeUIsT0FBekIsQ0FBaUMsZUFBTztBQUN0QyxXQUFPLFlBQVksR0FBWixDQUFQLENBRHNDO0dBQVAsQ0FBakMsQ0FEaUM7Q0FBNUI7O0FBTUEsU0FBUyxrQkFBVCxHQUE4QjtBQUNuQyxTQUFPLFdBQVAsQ0FEbUM7Q0FBOUI7OztBQUtBLFNBQVMsa0JBQVQsQ0FBNEIsSUFBNUIsRUFBa0M7QUFDdkMsU0FBTyxZQUFZLElBQVosQ0FBUCxDQUR1QztDQUFsQzs7OztBQU1BLFNBQVMsa0JBQVQsQ0FBNEIsT0FBNUIsRUFBcUM7QUFDMUMsU0FBTyxzQkFBYyxXQUFkLEVBQTJCLE9BQTNCLENBQVAsQ0FEMEM7Q0FBckM7O0FBSUEsU0FBUyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLEtBQWxDLEVBQXlDO0FBQzlDLE1BQU0sVUFBVSx1QkFBdUIsU0FBdkIsQ0FEOEI7QUFFOUMsTUFBSSxRQUFRLFNBQVMsY0FBVCxDQUF3QixPQUF4QixDQUFSLENBRjBDO0FBRzlDLE1BQUksS0FBSixFQUFXO0FBQUUsV0FBRjtHQUFYO0FBQ0EsVUFBUSxTQUFTLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBUixDQUo4QztBQUs5QyxRQUFNLEVBQU4sR0FBVyxPQUFYLENBTDhDO0FBTTlDLFFBQU0sV0FBTixDQUFrQixTQUFTLGNBQVQsQ0FBd0IsRUFBeEIsQ0FBbEIsRUFOOEM7QUFPOUMsV0FBUyxlQUFULENBQXlCLFdBQXpCLENBQXFDLEtBQXJDLEVBUDhDOzs7Ozs7QUFROUMsb0RBQXNCLGFBQXRCLG9HQUE2QjtVQUFsQixzQkFBa0I7O0FBQzNCLFVBQU0sY0FBYyxRQUFRLEdBQVIsRUFBZCxDQURxQjtBQUUzQixVQUFJLFlBQVksT0FBWixDQUZ1QjtBQUczQixrQkFBWSxVQUFVLE1BQVYsQ0FBaUIsVUFBVSxHQUFWLENBQWMsVUFBQyxDQUFEO2VBQU8sV0FBVyxDQUFYO09BQVAsQ0FBL0IsQ0FBWixDQUgyQjtBQUkzQixVQUFNLE9BQU8sVUFBVSxJQUFWLENBQWUsSUFBZixJQUF1QixHQUF2QixHQUE2QixXQUE3QixDQUpjO0FBSzNCLFlBQU0sS0FBTixDQUFZLFVBQVosQ0FBdUIsSUFBdkIsRUFBNkIsQ0FBN0IsRUFMMkI7S0FBN0I7Ozs7Ozs7Ozs7Ozs7O0dBUjhDO0NBQXpDOztrQkFpQlEsRUFBRSwwQkFBRixFQUFnQiwwQkFBaEIsRUFBOEIsNEJBQTlCLEVBQTZDLHNDQUE3QyxFQUFpRSxzQ0FBakUiLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBhc3NldFJvb3QgPSAnL2Fzc2V0cyc7XHJcbmNvbnN0IHN5bWJvbEZpbGVzID0ge307XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0QXNzZXRSb290KHBhdGgpIHtcclxuICBhc3NldFJvb3QgPSBwYXRoO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QXNzZXRSb290KCkge1xyXG4gIHJldHVybiBhc3NldFJvb3Q7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGVhclN5bWJvbFBhdGhzKCkge1xyXG4gIE9iamVjdC5rZXlzKHN5bWJvbEZpbGVzKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICBkZWxldGUgc3ltYm9sRmlsZXNba2V5XTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbFN5bWJvbHNQYXRocygpIHtcclxuICByZXR1cm4gc3ltYm9sRmlsZXM7XHJcbn1cclxuXHJcbi8vIGdldCB0aGUgZmlsZSBwYXRoIGZvciBhIHNpbmdsZSBzeW1ib2xzIGZpbGUgYnkgdHlwZVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3ltYm9sc0ZpbGVQYXRoKHR5cGUpIHtcclxuICByZXR1cm4gc3ltYm9sRmlsZXNbdHlwZV07XHJcbn1cclxuXHJcbi8vIHVwZGF0ZXMgdGhlIHN5bWJvbHMgZmlsZSBvYmplY3QgYnkgYXNzaWduaW5nXHJcbi8vIGFsbCBkaWZmZXJlbmNlcyBwYXNzZWQgaW5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFN5bWJvbHNGaWxlUGF0aCh1cGRhdGVzKSB7XHJcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oc3ltYm9sRmlsZXMsIHVwZGF0ZXMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJTdHlsZShzdHlsZU5hbWUsIHJ1bGVzKSB7XHJcbiAgY29uc3Qgc3R5bGVJZCA9ICdyZWFjdC1zbGRzLWNzc2ZpeC0nICsgc3R5bGVOYW1lO1xyXG4gIGxldCBzdHlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHN0eWxlSWQpO1xyXG4gIGlmIChzdHlsZSkgeyByZXR1cm47IH1cclxuICBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XHJcbiAgc3R5bGUuaWQgPSBzdHlsZUlkO1xyXG4gIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKSk7XHJcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKHN0eWxlKTtcclxuICBmb3IgKGNvbnN0IHJ1bGVTZXQgb2YgcnVsZXMpIHtcclxuICAgIGNvbnN0IGRlY2xhcmF0aW9uID0gcnVsZVNldC5wb3AoKTtcclxuICAgIGxldCBzZWxlY3RvcnMgPSBydWxlU2V0O1xyXG4gICAgc2VsZWN0b3JzID0gc2VsZWN0b3JzLmNvbmNhdChzZWxlY3RvcnMubWFwKChzKSA9PiAnLnNsZHMgJyArIHMpKTtcclxuICAgIGNvbnN0IHJ1bGUgPSBzZWxlY3RvcnMuam9pbignLCAnKSArICcgJyArIGRlY2xhcmF0aW9uO1xyXG4gICAgc3R5bGUuc2hlZXQuaW5zZXJ0UnVsZShydWxlLCAwKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHsgc2V0QXNzZXRSb290LCBnZXRBc3NldFJvb3QsIHJlZ2lzdGVyU3R5bGUsIGdldFN5bWJvbHNGaWxlUGF0aCwgc2V0U3ltYm9sc0ZpbGVQYXRoIH07XHJcbiJdfQ==