import { DodajUKorpu } from "../../data/cart.js";
import { fjaPrikazPoruke } from "./amazonView.js";
import { renderCartQuantity } from "../sharedMVC/SharedView.js";
import { products } from "../../data/products.js";

export let listenerForClickOnButton = ()=>
{
const dodajUKorpuDugmad = Array.from(document.querySelectorAll('.add-to-cart-button'));
dodajUKorpuDugmad.forEach((dugme)=>
{
    dugme.addEventListener('click',(e)=>
    {
            let odabraniProdukt = e.target.closest('.product-container');
            const idProdukta = odabraniProdukt.getAttribute('data-product-id');
            const kvantitet = odabraniProdukt.querySelector('select').value;
            odabraniProdukt = products.find(objekat => objekat.id === idProdukta)
            
            if(odabraniProdukt)
            {
              DodajUKorpu(odabraniProdukt,Number(kvantitet));
              fjaPrikazPoruke(dugme.closest('.product-container').querySelector('.added-to-cart'));
              renderCartQuantity();
            }
    })
})
};