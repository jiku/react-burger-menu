'use strict';

import menuFactory from '../menuFactory';

const styles = {

  menuWrap(isOpen, size, placement) {
    size += 20;
    let _placement = '';

    switch (placement) {
      case 'left':
        _placement = `translate3d(-${size}px, 0, 0)`;
        break;
      case 'top':
        _placement = `translate3d(0, -${size}px, 0)`;
        break;
      case 'right':
        _placement = `translate3d(${size}px, 0, 0)`;
        break;
      case 'bottom':
        _placement = `translate3d(0, ${size}px, 0)`;
        break;
    }

    return {
      transform: isOpen ? '' : _placement,
      transition: isOpen ? 'transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)' : 'transform 0.4s cubic-bezier(0.7, 0, 0.3, 1)'
    };
  },

  item(isOpen, size, placement, nthChild) {
    return {
      transform: isOpen ? '' : 'translate3d(0, ' + nthChild * 500 + 'px, 0)',
      transition: isOpen ? 'transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)' : 'transform 0s 0.2s cubic-bezier(0.7, 0, 0.3, 1)'
    };
  }
};

export default menuFactory(styles);
