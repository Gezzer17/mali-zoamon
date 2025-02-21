import { returnQuantityOfCart } from "../../data/cart.js";

export let renderCartQuantity = ()=>
  {
    const kvantitetUKorpi = document.querySelector('.cart-quantity');
    
    kvantitetUKorpi.innerHTML = returnQuantityOfCart();
  };