'use strict';

let styles = {

  overlay(isOpen) {
    return {
      position: 'fixed',
      left: 0,
      top: 0,
      zIndex: 1,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.3)',
      opacity: isOpen ? 1 : 0,
      transform: isOpen ? '' : 'translate3d(-100%, 0, 0)',
      transition: isOpen ? 'opacity 0.3s' : 'opacity 0.3s, transform 0s 0.3s'
    };
  },

  menuWrap(isOpen, size, placement) {
    let _transform = '';
    let _placement = {};
    let _dimensions = {};

    switch (placement) {
      case 'left':
        _transform = 'translate3d(-100%, 0, 0)';
        _placement = {
          left: 0,
          top: 0
        };
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

    let _style = {
      position: 'fixed',
      zIndex: 2,
      transform: isOpen ? '' : _transform,
      transition: 'all 0.5s'
    };

    _style = Object.assign(_style, _placement, _dimensions);

    return _style;
  },

  menu(isOpen, size, placement) {
    let _style = {};
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

  itemList(isOpen, size, placement) {
    let _style = {};
    if (placement === 'left' || placement === 'right') {
      _style = {
        width: size.width,
        height: '100%',
      };
    } else {
      _style = {
        width: '100%',
        height: size.height
      };
    }

    return _style;
  },

  item(isOpen, size, placement) {
    let _style = {};
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

export default styles;
