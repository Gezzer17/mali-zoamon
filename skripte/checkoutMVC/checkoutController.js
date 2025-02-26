import * as viewCh from "../checkoutMVC/checkoutView.js" 
import { returnFormatBrojDana } from "../../data/deliveryOptions.js";
import { kart } from "../../data/kart.js";
import { Order,orderiSvi } from "../../data/orderData.js";
import { deliveryOptions } from "../../data/deliveryOptions.js";
import { dodajDane } from "../utils/formatDana.js";



export let updatePaymentSummaryInView = () =>
{
    const UkupnoProizodaUKorpi = kart.returnQuantityOfCart();
    const ukupnaCijenaBezShippinga = kart.returnTotalPriceWithoutShipping();
    const vrijednostShippinga = kart.returnShippingFee();
    
    const UkupnaVrijednostBezTaxi = kart.returnSubTotalPriceAndShipping();
    const vrijednostTaxe = kart.retrunPriceOfTax();
    const konacnaCijena = kart.grandTotalPrice();
    

    viewCh.updatePaymentSummaryPrviRed(UkupnoProizodaUKorpi,ukupnaCijenaBezShippinga.toFixed(2));
    viewCh.updatePaymentSummaryShippingFee(vrijednostShippinga);
    viewCh.updatePaymentSummaryTotalBeforeTaxes(UkupnaVrijednostBezTaxi.toFixed(2));
    viewCh.updatePaymentSummaryTotalTax(vrijednostTaxe.toFixed(2));
    viewCh.updatePaymentSummaryGrandTotal(konacnaCijena.toFixed(2));
    viewCh.disabledButton(konacnaCijena <= 0);

}


export let  updateDeliveryDateInView = () =>
{
    const cijelaKorpa = document.querySelector('.order-summary');
    

    cijelaKorpa.addEventListener('click',(e)=>
    {
        
        const opcija = e.target.closest('.delivery-option');
        const opcija2 = e.target.closest('.js-delete-link');
        const opcija3 = e.target.closest('.update-quantity-link');
        const opcija4 = e.target.closest('.save-quantity-link');
        if(opcija) 
        {
                let cartItemContainer = opcija.closest('.cart-item-container')
                let potrebniInput = opcija.querySelector('.delivery-option-input');

                let idDeliverya = Number(opcija.dataset.deliveryOptionId);
                let datum = returnFormatBrojDana(idDeliverya);

                
                let idProdukta = cartItemContainer.dataset.cartItemId;
                //UpdateCartDeliveryTime
                kart.updateDatumDostave(idProdukta,idDeliverya);

                //Ne pitaj me nista sto je ovo ovdje
                let objekat = kart.productsInCart.find(item=> item.produkt.id ===  idProdukta);
                let dajMiDatumDeliveryId = objekat.deliverOpcija;
                let datumPotrebni = deliveryOptions.find(opcija => opcija.id === Number(dajMiDatumDeliveryId));
                objekat.datumPosiljke = dodajDane(new Date(),datumPotrebni.deliveryDays);
                
                //
                //RerenderDateAndCheckbox
                viewCh.updateDeliveryDateAndCheckBox(datum,cartItemContainer,potrebniInput);
                
                //UpdateSummary
                updatePaymentSummaryInView();
        }
        //EventListenerZaBrisanjeProdukta
        if(opcija2)
        {
            let idProdukta = opcija2.dataset.productId;
            kart.DeleteFromTheCart(idProdukta);
            viewCh.renderNumberOfThingsInCart();
            viewCh.renderCartBeforeCheckout();
            updatePaymentSummaryInView();
        }
        //EventListenerZaUpdate
        if(opcija3)
        {
            viewCh.toggleQuantityElements(opcija3);
        }
        //EventListenerZaSave
        if(opcija4)
        {
            //LogikaZaUpdateKvaniteta
            const vrijednostPromjene = viewCh.toggleQuantityElements(opcija4);
            const vrijednostID = opcija4.closest('.cart-item-container').dataset.cartItemId;
            kart.UpdateKvanitetTogItema(vrijednostID,vrijednostPromjene);
            updatePaymentSummaryInView();
            viewCh.renderNumberOfThingsInCart();


        }

    })


}

export let checkForClickOnButton = ()=>
{
    document.querySelector('.place-order-button').addEventListener('click', () => {

            const novaNarudzba = new Order(new Date().toLocaleDateString(),kart.grandTotalPrice(),kart.returnProductsFromCart());
            orderiSvi.DodajUKorpu(novaNarudzba);
            window.location.href = "orders.html";
    });

}