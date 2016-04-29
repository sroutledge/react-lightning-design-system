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

exports.default = { setAssetRoot: setAssetRoot, getAssetRoot: getAssetRoot, registerStyle: registerStyle };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY3JpcHRzL3V0aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBR2dCO1FBSUE7UUFJQTtRQU1BO1FBS0E7UUFNQTtRQUlBOzs7O0FBaENoQixJQUFJLFlBQVksU0FBWjtBQUNKLElBQU0sY0FBYyxFQUFkOztBQUVDLFNBQVMsWUFBVCxDQUFzQixJQUF0QixFQUE0QjtBQUNqQyxjQUFZLElBQVosQ0FEaUM7Q0FBNUI7O0FBSUEsU0FBUyxZQUFULEdBQXdCO0FBQzdCLFNBQU8sU0FBUCxDQUQ2QjtDQUF4Qjs7QUFJQSxTQUFTLGdCQUFULEdBQTRCO0FBQ2pDLHNCQUFZLFdBQVosRUFBeUIsT0FBekIsQ0FBaUMsZUFBTztBQUN0QyxXQUFPLFlBQVksR0FBWixDQUFQLENBRHNDO0dBQVAsQ0FBakMsQ0FEaUM7Q0FBNUI7O0FBTUEsU0FBUyxrQkFBVCxHQUE4QjtBQUNuQyxTQUFPLFdBQVAsQ0FEbUM7Q0FBOUI7OztBQUtBLFNBQVMsa0JBQVQsQ0FBNEIsSUFBNUIsRUFBa0M7QUFDdkMsU0FBTyxZQUFZLElBQVosQ0FBUCxDQUR1QztDQUFsQzs7OztBQU1BLFNBQVMsa0JBQVQsQ0FBNEIsT0FBNUIsRUFBcUM7QUFDMUMsU0FBTyxzQkFBYyxXQUFkLEVBQTJCLE9BQTNCLENBQVAsQ0FEMEM7Q0FBckM7O0FBSUEsU0FBUyxhQUFULENBQXVCLFNBQXZCLEVBQWtDLEtBQWxDLEVBQXlDO0FBQzlDLE1BQU0sVUFBVSx1QkFBdUIsU0FBdkIsQ0FEOEI7QUFFOUMsTUFBSSxRQUFRLFNBQVMsY0FBVCxDQUF3QixPQUF4QixDQUFSLENBRjBDO0FBRzlDLE1BQUksS0FBSixFQUFXO0FBQUUsV0FBRjtHQUFYO0FBQ0EsVUFBUSxTQUFTLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBUixDQUo4QztBQUs5QyxRQUFNLEVBQU4sR0FBVyxPQUFYLENBTDhDO0FBTTlDLFFBQU0sV0FBTixDQUFrQixTQUFTLGNBQVQsQ0FBd0IsRUFBeEIsQ0FBbEIsRUFOOEM7QUFPOUMsV0FBUyxlQUFULENBQXlCLFdBQXpCLENBQXFDLEtBQXJDLEVBUDhDOzs7Ozs7QUFROUMsb0RBQXNCLGFBQXRCLG9HQUE2QjtVQUFsQixzQkFBa0I7O0FBQzNCLFVBQU0sY0FBYyxRQUFRLEdBQVIsRUFBZCxDQURxQjtBQUUzQixVQUFJLFlBQVksT0FBWixDQUZ1QjtBQUczQixrQkFBWSxVQUFVLE1BQVYsQ0FBaUIsVUFBVSxHQUFWLENBQWMsVUFBQyxDQUFEO2VBQU8sV0FBVyxDQUFYO09BQVAsQ0FBL0IsQ0FBWixDQUgyQjtBQUkzQixVQUFNLE9BQU8sVUFBVSxJQUFWLENBQWUsSUFBZixJQUF1QixHQUF2QixHQUE2QixXQUE3QixDQUpjO0FBSzNCLFlBQU0sS0FBTixDQUFZLFVBQVosQ0FBdUIsSUFBdkIsRUFBNkIsQ0FBN0IsRUFMMkI7S0FBN0I7Ozs7Ozs7Ozs7Ozs7O0dBUjhDO0NBQXpDOztrQkFpQlEsRUFBRSwwQkFBRixFQUFnQiwwQkFBaEIsRUFBOEIsNEJBQTlCIiwiZmlsZSI6InV0aWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgYXNzZXRSb290ID0gJy9hc3NldHMnO1xyXG5jb25zdCBzeW1ib2xGaWxlcyA9IHt9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEFzc2V0Um9vdChwYXRoKSB7XHJcbiAgYXNzZXRSb290ID0gcGF0aDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFzc2V0Um9vdCgpIHtcclxuICByZXR1cm4gYXNzZXRSb290O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJTeW1ib2xQYXRocygpIHtcclxuICBPYmplY3Qua2V5cyhzeW1ib2xGaWxlcykuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgZGVsZXRlIHN5bWJvbEZpbGVzW2tleV07XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxTeW1ib2xzUGF0aHMoKSB7XHJcbiAgcmV0dXJuIHN5bWJvbEZpbGVzO1xyXG59XHJcblxyXG4vLyBnZXQgdGhlIGZpbGUgcGF0aCBmb3IgYSBzaW5nbGUgc3ltYm9scyBmaWxlIGJ5IHR5cGVcclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN5bWJvbHNGaWxlUGF0aCh0eXBlKSB7XHJcbiAgcmV0dXJuIHN5bWJvbEZpbGVzW3R5cGVdO1xyXG59XHJcblxyXG4vLyB1cGRhdGVzIHRoZSBzeW1ib2xzIGZpbGUgb2JqZWN0IGJ5IGFzc2lnbmluZ1xyXG4vLyBhbGwgZGlmZmVyZW5jZXMgcGFzc2VkIGluXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRTeW1ib2xzRmlsZVBhdGgodXBkYXRlcykge1xyXG4gIHJldHVybiBPYmplY3QuYXNzaWduKHN5bWJvbEZpbGVzLCB1cGRhdGVzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lzdGVyU3R5bGUoc3R5bGVOYW1lLCBydWxlcykge1xyXG4gIGNvbnN0IHN0eWxlSWQgPSAncmVhY3Qtc2xkcy1jc3NmaXgtJyArIHN0eWxlTmFtZTtcclxuICBsZXQgc3R5bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzdHlsZUlkKTtcclxuICBpZiAoc3R5bGUpIHsgcmV0dXJuOyB9XHJcbiAgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gIHN0eWxlLmlkID0gc3R5bGVJZDtcclxuICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJykpO1xyXG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChzdHlsZSk7XHJcbiAgZm9yIChjb25zdCBydWxlU2V0IG9mIHJ1bGVzKSB7XHJcbiAgICBjb25zdCBkZWNsYXJhdGlvbiA9IHJ1bGVTZXQucG9wKCk7XHJcbiAgICBsZXQgc2VsZWN0b3JzID0gcnVsZVNldDtcclxuICAgIHNlbGVjdG9ycyA9IHNlbGVjdG9ycy5jb25jYXQoc2VsZWN0b3JzLm1hcCgocykgPT4gJy5zbGRzICcgKyBzKSk7XHJcbiAgICBjb25zdCBydWxlID0gc2VsZWN0b3JzLmpvaW4oJywgJykgKyAnICcgKyBkZWNsYXJhdGlvbjtcclxuICAgIHN0eWxlLnNoZWV0Lmluc2VydFJ1bGUocnVsZSwgMCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7IHNldEFzc2V0Um9vdCwgZ2V0QXNzZXRSb290LCByZWdpc3RlclN0eWxlIH07XHJcbiJdfQ==