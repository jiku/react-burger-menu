import { expect } from 'chai';
import baseStyles from '../lib/baseStyles';

describe('baseStyles', () => {

  it('has correct overlay styles', () => {
    const overlay = baseStyles.overlay(false);
    expect(overlay.position).to.equal('fixed');
    expect(overlay.zIndex).to.equal(1);
    expect(overlay.width).to.equal('100%');
    expect(overlay.height).to.equal('100%');
    expect(overlay.background).to.equal('rgba(0, 0, 0, 0.3)');
    expect(overlay.opacity).to.equal(0);
  });

  it('has correct menuWrap styles for all placements', () => {
    let menuWrap = baseStyles.menuWrap(false, {width: 300}, 'left');
    expect(menuWrap.position).to.equal('fixed');
    expect(menuWrap.zIndex).to.equal(2);
    expect(menuWrap.width).to.equal(300);
    expect(menuWrap.height).to.equal('100%');

    menuWrap = baseStyles.menuWrap(false,  {height: 75}, 'top');
    expect(menuWrap.width).to.equal('100%');
    expect(menuWrap.height).to.equal(75);

    menuWrap = baseStyles.menuWrap(false, {width: 300}, 'right');
    expect(menuWrap.width).to.equal(300);
    expect(menuWrap.height).to.equal('100%');

    menuWrap = baseStyles.menuWrap(false, {height: 75}, 'bottom');
    expect(menuWrap.width).to.equal('100%');
    expect(menuWrap.height).to.equal(75);
  });

  it('has correct menu styles', () => {
    let menu = baseStyles.menu(false, {width: 300}, 'left');
    expect(menu.width).to.equal(300);
    expect(menu.height).to.equal('100%');
    expect(menu.boxSizing).to.equal('border-box');

    menu = baseStyles.menu(false, {height: 75}, 'top');
    expect(menu.width).to.equal('100%');
    expect(menu.height).to.equal(75);

    menu = baseStyles.menu(false, {width: 300}, 'right');
    expect(menu.width).to.equal(300);
    expect(menu.height).to.equal('100%');
    expect(menu.boxSizing).to.equal('border-box');

    menu = baseStyles.menu(false, {height: 75}, 'bottom');
    expect(menu.width).to.equal('100%');
    expect(menu.height).to.equal(75);
  });

  it('has correct itemList styles', () => {
    // const itemList = baseStyles.itemList();
    // expect(itemList.height).to.equal('100%');

    let itemList = baseStyles.itemList(false, {width: 300}, 'left');
    expect(itemList.width).to.equal(300);
    expect(itemList.height).to.equal('100%');

    itemList = baseStyles.itemList(false, {height: 75}, 'top');
    expect(itemList.width).to.equal('100%');
    expect(itemList.height).to.equal(75);
  });
});
