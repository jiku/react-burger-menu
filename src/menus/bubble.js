'use strict';

import menuFactory from '../menuFactory';

const styles = {

  svg: {
    pathInitial: 'M-7.312,0H0c0,0,0,113.839,0,400c0,264.506,0,400,0,400h-7.312V0z',
    pathOpen: 'M-7.312,0H15c0,0,66,113.339,66,399.5C81,664.006,15,800,15,800H-7.312V0z;M-7.312,0H100c0,0,0,113.839,0,400c0,264.506,0,400,0,400H-7.312V0z',
    animate(path) {
      let pos = 0;
      let steps = this.pathOpen.split(';');
      let stepsTotal = steps.length;
      let mina = window.mina;

      let nextStep = function() {
        if (pos > stepsTotal - 1) return;

        path.animate({ path: steps[pos] }, pos === 0 ? 400 : 500, pos === 0 ? mina.easein : mina.elastic, () => {
          nextStep();
        });

        pos++;
      };

      nextStep();
    }
  },

  morphShape(isOpen, size, placement) {
    let _transform = '';
    let _placement = '';
    switch (placement) {
      case 'left':
        _placement = {
          left: 0,
          transform: 'rotateY(0deg)'
        };
        break;
      case 'top':
        _placement = {
          top: 0,
          transform: 'rotateY(90deg)' // TODO: ...
        };
        break;
      case 'right':
        _placement = {
          right: 0,
          transform: 'rotateY(180deg)'
        };
        break;
      case 'bottom':
        _placement = {
          bottom: 0,
          transform: 'rotateY(270deg)' // TODO: ...
        };
        break;
    }

    let _style = {
      position: 'fixed',
      width: '100%',
      height: '100%'
    };

    _style = Object.assign(_style, _placement);

    return _style;
  },

  menuWrap(isOpen, size, placement) {
    let _placement = '';
    switch (placement) {
      case 'left':
        _placement = 'translate3d(-100%, 0, 0)';
        break;
      case 'top':
        _placement = 'translate3d(0, -100%, 0)';
        break;
      case 'right':
        _placement = 'translate3d(100%, 0, 0)';
        break;
      case 'bottom':
        _placement = 'translate3d(0, 100%, 0)';
        break;
    }

    return {
      transform: isOpen ? 'translate3d(0, 0, 0)' : _placement,
      transition: isOpen ? 'transform 0.4s 0s' : 'transform 0.4s'
    };
  },

  menu(isOpen, size, placement) {
    // size -= 140;

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
      position: 'fixed',
      transform: isOpen ? '' : _placement,
      transition: isOpen ? 'opacity 0.1s 0.4s cubic-bezier(.17, .67, .1, 1.27), transform 0.1s 0.4s cubic-bezier(.17, .67, .1, 1.27)' : 'opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)',
      opacity: isOpen ? 1 : 0
    };
  },

  item(isOpen, size, placement, nthChild) {
    // size -= 140;

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
      transform: isOpen ? 'translate3d(0, 0, 0)' : _placement,
      transition: isOpen ? 'opacity 0.3s 0.4s, transform 0.3s 0.4s' : 'opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)',
      opacity: isOpen ? 1 : 0
    };
  },

  closeButton(isOpen, size, placement) {
    // size -= 140;

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
      transform: isOpen ? 'translate3d(0, 0, 0)' : _placement,
      transition: isOpen ? 'opacity 0.3s 0.4s cubic-bezier(.17, .67, .1, 1.27), transform 0.3s 0.4s cubic-bezier(.17, .67, .1, 1.27)' : 'opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)',
      opacity: isOpen ? 1 : 0
    };
  }
};

export default menuFactory(styles);
