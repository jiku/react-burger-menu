'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _menuFactory = require('../menuFactory');

var _menuFactory2 = _interopRequireDefault(_menuFactory);

var styles = {

  pageWrap: function pageWrap(isOpen, size, placement) {
    var _placement = '';

    switch (placement) {
      case 'left':
        // _placement = `translate3d(-${size}px, 0, 0)`;
        _placement = 'translate3d(' + size + 'px, 0, 0) rotateY(-15deg)';
        break;
      case 'top':
        _placement = 'translate3d(0, -' + size + 'px, 0)';
        break;
      case 'right':
        // _placement = `translate3d(${size}px, 0, 0)`;
        _placement = 'translate3d(-100px, 0, -600px) rotateY(20deg)';
        break;
      case 'bottom':
        _placement = 'translate3d(0, ' + size + 'px, 0)';
        break;
    }

    return {
      transform: isOpen ? '' : _placement,
      transformStyle: 'preserve-3d',
      transition: 'all 0.5s',
      overflow: isOpen ? '' : 'hidden'
    };
  },

  outerContainer: function outerContainer(isOpen) {
    return {
      perspective: '1500px',
      overflow: isOpen ? '' : 'hidden'
    };
  }
};

exports['default'] = (0, _menuFactory2['default'])(styles);
module.exports = exports['default'];