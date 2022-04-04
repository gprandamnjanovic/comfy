import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupPrice = (store) => {
  // console.log(store);
  const priceInput = getElement('.price-filter');
  const pirceValue = getElement('.price-value');

  //setup filter
  let maxPrice = store.map((product) => product.price);
  // console.log(maxPrice);
  maxPrice = Math.max(...maxPrice);
  // console.log(maxPrice);
  maxPrice = Math.ceil(maxPrice / 100);
  // console.log(maxPrice);
  priceInput.value = maxPrice;
  // console.log(priceInput.value);
  priceInput.max = maxPrice;
  // console.log(priceInput.max);
  pirceValue.min = 0;
  pirceValue.textContent = `Value : $${maxPrice}`;

  //EL
  priceInput.addEventListener('input', () => {
    // const value = priceInput.value;
    // console.log(typeof value);--string

    const value = parseInt(priceInput.value);
    // console.log(typeof value);--number
    pirceValue.textContent = `Value : $${value}`;
    let newStore = store.filter((product) => product.price / 100 <= value);
    // console.log(newStore);
    display(newStore, getElement('.products-container'), true);
    if (newStore.length < 1) {
      const product = getElement('.products-container');
      product.innerHTML = `<h3 class="filter-error">sorry, no products match your search...</h3>`;
    }
  });
};

export default setupPrice;
