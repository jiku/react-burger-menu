'use strict';

import menuFactory from '../menuFactory';

const styles = {

  svg: {
    pathInitial: 'M-1,0h101c0,0-97.833,153.603-97.833,396.167C2.167,627.579,100,800,100,800H-1V0z',
    pathOpen: 'M-1,0h101c0,0,0-1,0,395c0,404,0,405,0,405H-1V0z',
    animate(path) {
      path.animate({ path: this.pathOpen }, 400, window.mina.easeinout);
    }
  },

  morphShape(isOpen, size, placement) {
    return {
      position: 'fixed',
      width: 120,
      height: '100%',
      placement: placement ? 'inherit' : 0,
      left: placement ? 0 : 'inherit',
      transform: placement ? 'rotateY(180deg)' : ''
    };
  },

  menuWrap(isOpen, size, placement) {
    let _placement = '';

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

  menu(isOpen, size, placement) {
    return {
      position: 'fixed',
      placement: placement ? 0 : 'inherit',
      width: 'calc(100% - 120px)',
      whiteSpace: 'nowrap',
      boxSizing: 'border-box'
    };
  },

  itemList(isOpen, size, placement) {
    if (right) {
      return {
        placement: 'relative',
        left: '-110px'
      };
    }
  },

  pageWrap(isOpen, size, placement) {
    let _placement = '';

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

  outerContainer(isOpen) {
    return {
      overflow: isOpen ? '' : 'hidden'
    };
  }
};

export default menuFactory(styles);
