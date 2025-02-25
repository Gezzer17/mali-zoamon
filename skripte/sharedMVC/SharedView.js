import { kart } from "../../data/kart.js";

export let renderCartQuantity = ()=>
  {
    const kvantitetUKorpi = document.querySelector('.cart-quantity');
    
    kvantitetUKorpi.innerHTML = kart.returnQuantityOfCart();
  };