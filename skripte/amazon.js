import { products } from '../data/products.js';
import { renderProductList} from './amazonMVC/amazonView.js';
import { renderCartQuantity } from './sharedMVC/SharedView.js';
import { listenerForClickOnButton } from './amazonMVC/amazonController.js';


//Korpa load

const productGrid = document.querySelector('.products-grid');
renderProductList(products,productGrid);
renderCartQuantity();
listenerForClickOnButton();








