'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _menuFactory = require('../menuFactory');

var _menuFactory2 = _interopRequireDefault(_menuFactory);

var styles = {

  menuWrap: function menuWrap(isOpen, size, placement) {
    size += 20;
    var _placement = '';

    switch (placement) {
      case 'left':
        _placement = 'translate3d(-' + size + 'px, 0, 0)';
        break;
      case 'top':
        _placement = 'translate3d(0, -' + size + 'px, 0)';
        break;
      case 'right':
        _placement = 'translate3d(' + size + 'px, 0, 0)';
        break;
      case 'bottom':
        _placement = 'translate3d(0, ' + size + 'px, 0)';
        break;
    }

    return {
      transform: isOpen ? '' : _placement,
      transition: isOpen ? 'transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)' : 'transform 0.4s cubic-bezier(0.7, 0, 0.3, 1)'
    };
  },

  item: function item(isOpen, size, placement, nthChild) {
    return {
      transform: isOpen ? '' : 'translate3d(0, ' + nthChild * 500 + 'px, 0)',
      transition: isOpen ? 'transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)' : 'transform 0s 0.2s cubic-bezier(0.7, 0, 0.3, 1)'
    };
  }
};

exports['default'] = (0, _menuFactory2['default'])(styles);
module.exports = exports['default'];