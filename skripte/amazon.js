import {stimanjeKorpe} from '../data/cart.js';
import { products } from '../data/products.js';
import { renderProductList,fjaPrikazPoruke } from './amazonMVC/amazonView.js';
import { renderCartQuantity } from './sharedMVC/SharedView.js';
import { listenerForClickOnButton } from './amazonMVC/amazonController.js';
//Productgrid

//Korpa load
stimanjeKorpe();
const productGrid = document.querySelector('.products-grid');
renderProductList(products,productGrid);
renderCartQuantity();
listenerForClickOnButton();








