'use strict';

import menuFactory from '../menuFactory';

const styles = {

  pageWrap(isOpen, size, placement) {
    let _placement = '';

    switch (placement) {
      case 'left':
        // _placement = `translate3d(-${size}px, 0, 0)`;
        _placement = `translate3d(-${size}px, 0, 0) rotateY(15deg)`;
        break;
      case 'top':
        _placement = `translate3d(0, -${size}px, 0)`;
        break;
      case 'right':
        // _placement = `translate3d(${size}px, 0, 0)`;
        _placement = `translate3d(${size}px, 0, 0) rotateY(-15deg)`;
        break;
      case 'bottom':
        _placement = `translate3d(0, ${size}px, 0)`;
        break;
    }

    return {
      transform: isOpen ? '' : _placement,
      transformOrigin: placement ? '100% 50%' : '0% 50%',
      transformStyle: 'preserve-3d',
      transition: 'all 0.5s'
    };
  },

  outerContainer(isOpen) {
    return {
      perspective: '1500px',
      overflow: isOpen ? '' : 'hidden'
    };
  }
};

export default menuFactory(styles);
