import { getElement } from '../utils.js';

const cartOverlay = getElement('.cart-overlay');
const shoppingCart = getElement('.toggle-cart');
const closeBtn = getElement('.cart-close');

shoppingCart.addEventListener('click', () => {
  cartOverlay.classList.add('show');
});
closeBtn.addEventListener('click', () => {
  cartOverlay.classList.remove('show');
});

export const openCart = () => {
  cartOverlay.classList.add('show');
};
