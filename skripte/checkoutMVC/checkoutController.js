import { returnShippingFee, returnSubTotalPriceAndShipping, retrunPriceOfTax, returnQuantityOfCart, returnTotalPriceWithoutShipping, grandTotalPrice,updateDatumDostave, DeleteFromTheCart } from "../../data/cart.js"
import * as viewCh from "../checkoutMVC/checkoutView.js" 
import { returnFormatBrojDana } from "../../data/deliveryOptions.js";




export let updatePaymentSummaryInView = () =>
{
    const UkupnoProizodaUKorpi = returnQuantityOfCart();
    const ukupnaCijenaBezShippinga = returnTotalPriceWithoutShipping();
    const vrijednostShippinga = returnShippingFee();
    
    const UkupnaVrijednostBezTaxi = returnSubTotalPriceAndShipping();
    const vrijednostTaxe = retrunPriceOfTax();
    const konacnaCijena = grandTotalPrice();
    

    viewCh.updatePaymentSummaryPrviRed(UkupnoProizodaUKorpi,ukupnaCijenaBezShippinga.toFixed(2));
    viewCh.updatePaymentSummaryShippingFee(vrijednostShippinga.toFixed(2));
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
                updateDatumDostave(idProdukta,idDeliverya);
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
            DeleteFromTheCart(idProdukta);
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
            viewCh.toggleQuantityElements(opcija4);
        }

    })


}