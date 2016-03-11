'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _menuFactory = require('../menuFactory');

var _menuFactory2 = _interopRequireDefault(_menuFactory);

var styles = {

  svg: {
    pathInitial: 'M-1,0h101c0,0-97.833,153.603-97.833,396.167C2.167,627.579,100,800,100,800H-1V0z',
    pathOpen: 'M-1,0h101c0,0,0-1,0,395c0,404,0,405,0,405H-1V0z',
    animate: function animate(path) {
      path.animate({ path: this.pathOpen }, 400, window.mina.easeinout);
    }
  },

  morphShape: function morphShape(isOpen, size, placement) {
    return {
      position: 'fixed',
      width: 120,
      height: '100%',
      placement: placement ? 'inherit' : 0,
      left: placement ? 0 : 'inherit',
      transform: placement ? 'rotateY(180deg)' : ''
    };
  },

  menuWrap: function menuWrap(isOpen, size, placement) {
    var _placement = '';

    switch (placement) {
      case 'left':
        _placement = 'translate3d(100%, 0, 0)';
        break;
      case 'top':
        break;
      case 'right':
        _placement = 'translate3d(-100%, 0, 0)';
        break;
      case 'bottom':
        break;
    }

    return {
      transform: isOpen ? 'translate3d(0, 0, 0)' : _placement,
      transition: 'all 0.3s'
    };
  },

  menu: function menu(isOpen, size, placement) {
    return {
      position: 'fixed',
      placement: placement ? 0 : 'inherit',
      width: 'calc(100% - 120px)',
      whiteSpace: 'nowrap',
      boxSizing: 'border-box'
    };
  },

  itemList: function itemList(isOpen, size, placement) {
    if (right) {
      return {
        placement: 'relative',
        left: '-110px'
      };
    }
  },

  pageWrap: function pageWrap(isOpen, size, placement) {
    var _placement = '';

    switch (placement) {
      case 'left':
        _placement = 'translate3d(-100px, 0, 0)';
        break;
      case 'top':
        break;
      case 'right':
        _placement = 'translate3d(100px, 0, 0)';
        break;
      case 'bottom':
        break;
    }

    return {
      transform: isOpen ? '' : _placement,
      transition: isOpen ? 'all 0.3s' : 'all 0.3s 0.1s'
    };
  },

  outerContainer: function outerContainer(isOpen) {
    return {
      overflow: isOpen ? '' : 'hidden'
    };
  }
};

exports['default'] = (0, _menuFactory2['default'])(styles);
module.exports = exports['default'];