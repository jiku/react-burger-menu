'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var styles = {

  overlay: function overlay(isOpen) {
    return {
      position: 'fixed',
      zIndex: 1,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.3)',
      opacity: isOpen ? 1 : 0,
      transform: isOpen ? '' : 'translate3d(-100%, 0, 0)',
      transition: isOpen ? 'opacity 0.3s' : 'opacity 0.3s, transform 0s 0.3s'
    };
  },

  menuWrap: function menuWrap(isOpen, size, placement) {
    var _transform = '';
    var _placement = {};
    var _dimensions = {};

    console.log("Yo then", isOpen, size, placement);

    switch (placement) {
      case 'left':
        _transform = 'translate3d(-100%, 0, 0)';
        _placement = {
          left: 0,
          top: 0
        };
        // _right = 0; // Screen width - this width, etc. But really don't inform.
        break;
      case 'top':
        _transform = 'translate3d(0, -100%, 0)';
        _placement = {
          left: 0,
          top: 0
        };
        break;
      case 'right':
        _transform = 'translate3d(100%, 0, 0)';
        _placement = {
          top: 0,
          right: 0
        };
        break;
      case 'bottom':
        _transform = 'translate3d(0, 100%, 0)';
        _placement = {
          left: 0,
          bottom: 0
        };
        break;
    }

    if (placement === 'left' || placement === 'right') {
      _dimensions = {
        width: size.width,
        height: '100%'
      };
    } else {
      _dimensions = {
        width: '100%',
        height: size.height
      };
    }

    var _style = {
      position: 'fixed',
      zIndex: 2,
      transform: isOpen ? '' : _transform,
      transition: 'all 0.5s'
    };

    _style = _extends(_style, _placement, _dimensions);

    return _style;
  },

  menu: function menu(isOpen, size, placement) {
    var _style = {};
    if (placement === 'left' || placement === 'right') {
      _style = {
        width: size.width,
        height: '100%',
        boxSizing: 'border-box'
      };
    } else {
      _style = {
        width: '100%',
        height: size.height,
        boxSizing: 'border-box'
      };
    }
    return _style;
  },

  itemList: function itemList(isOpen, size, placement) {
    console.log("list says", placement, size);
    var _style = {};
    if (placement === 'left' || placement === 'right') {
      _style = {
        width: size.width,
        height: '100%'
      };
    } else {
      _style = {
        width: '100%',
        height: size.height
      };
    }
    return _style;
  },

  item: function item(isOpen, size, placement) {
    var _style = {};
    if (placement === 'left' || placement === 'right') {
      _style = {
        display: 'block',
        outline: 'none'
      };
    } else {
      _style = {
        outline: 'none'
      };
    }
    return _style;
  }
};

exports['default'] = styles;
module.exports = exports['default'];