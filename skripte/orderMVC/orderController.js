import { kart } from "../../data/kart.js";
import { pronadjiProdukt } from "../../data/products.js";
import { renderCartQuantity } from "../sharedMVC/SharedView.js";
import * as viewOD from '../orderMVC/orderView.js';
import { trackingObj } from "../../data/trackingData.js";
import { orderiSvi } from "../../data/orderData.js";


export let ListenForBuyItAgain = ()=>
{
    const kompletanGrid = document.querySelector('.orders-grid');

    kompletanGrid.addEventListener('click',(e)=>
    {
        const opcija = e.target.closest('.button-primary');
        const opcija2 = e.target.closest('.track-package-button')
        
        
        if(opcija)
        {
            //We add this product back to cart
            const produktID = opcija.dataset.productId;
            const produkt = pronadjiProdukt(produktID);
            kart.DodajUKorpu(produkt,1);
            viewOD.renderSuccessMessage(opcija);
            renderCartQuantity();

        }
        if(opcija2)
        {
            e.preventDefault();
            const glavniDIv = opcija2.closest('.order-container');
            const orderId = glavniDIv.querySelector('.order-header-right-section').children[1].innerHTML;
            const produktId = opcija2.dataset.productId;
            trackingObj.trackingItem = {...orderiSvi.ReturnProductFromOrder(orderId,produktId)};
            trackingObj.trackingItem.dateOrder = orderiSvi.ReturnDatumNarduzbe(orderId);
            trackingObj.SaveToStorage();
            window.location.href = "tracking.html";
            
        }


    })


}