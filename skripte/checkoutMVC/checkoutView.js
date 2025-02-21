import { returnQuantityOfCart } from "../../data/cart.js";
import { deliveryOptions } from "../../data/deliveryOptions.js";
import { productsInCart } from "../../data/cart.js";
import {dodajDane} from "../utils/formatDana.js";

export let renderNumberOfThingsInCart = ()=>
{
    const brojStvari = document.querySelector('.return-to-home-link');
    brojStvari.innerHTML = returnQuantityOfCart();
}


//RenderKompletneKorpe
export let renderCartBeforeCheckout = () =>
{
    
    const gridKorpe = document.querySelector('.order-summary');
        if(!returnQuantityOfCart())
        {
            gridKorpe.innerHTML = ` <div data-testid="empty-cart-message" style="margin-bottom:10px">
                        Your cart is empty.
                    </div>
                    <a class="button-primary view-products-link" href="amazon.html" data-testid="view-products-link" style="text-decoration:none; padding:5px 10px;margin-top:100px;">
                        View products
                    </a>`;
            
                    
                    
        }
        else
        {
            gridKorpe.innerHTML ="";
            productsInCart.forEach(objekat=>
            {
                let dajMiDatum = objekat.deliverOpcija;
                console.log(dajMiDatum);
                let datumPotrebni = deliveryOptions.find(opcija => opcija.id === Number(dajMiDatum));
                gridKorpe.innerHTML +=`<div class="cart-item-container" data-cart-item-id="${objekat.produkt.id}">
                                <div class="delivery-date">
                                    ${dodajDane(new Date(),datumPotrebni.deliveryDays)}
                                </div>

                                <div class="cart-item-details-grid">
                                <img class="product-image"
                                    src="${objekat.produkt.image}">

                                <div class="cart-item-details">
                                    <div class="product-name">
                                    ${objekat.produkt.name}
                                    </div>
                                    <div class="product-price">
                                    $${(objekat.produkt.priceCents/100).toFixed(2)}
                                    </div>
                                    <div class="product-quantity">
                                    <span>
                                        Quantity: <span class="quantity-label">${objekat.brojnost}</span>
                                        <input type="number" class="new-quantity-input sakriveni" style="width:40px;" min=1>
                                    </span>
                                    <span class="save-quantity-link link-primary sakriveni">Save</span>
                                    
                                    <span class="update-quantity-link link-primary">
                                        Update
                                    </span>
                                    <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${objekat.produkt.id}">
                                        Delete
                                    </span>
                                    </div>
                                </div>

                                <div class="delivery-options">
                                    <div class="delivery-options-title">
                                    Choose a delivery option:
                                    </div>
                                    ${deliveryOpcijeHTML(objekat)}
                                
                                    
                                    </div>
                                </div>
                            </div>`
            }
            );
        }


};
let deliveryOpcijeHTML = (objekat)=>
{
    let html = '';
    deliveryOptions.forEach(deliveryOpcija=>{

            let daLiJeCheckiran = deliveryOpcija.id === objekat.deliverOpcija ? 'checked' : '';
            
            html +=`
                <div class="delivery-option" data-delivery-option-id="${deliveryOpcija.id}">
                                            <input type="radio" class="delivery-option-input" name="${objekat.produkt.id}-delivery-option" ${daLiJeCheckiran}>
                                                <div class="cijenaDatum cijena3">
                                                <div class="delivery-option-date">
                                                ${dodajDane(new Date(),deliveryOpcija.deliveryDays)}
                                                </div>
                                                <div class="delivery-option-price">
                                                $${(deliveryOpcija.priceCents/100)===0?'FREE' :(deliveryOpcija.priceCents/100)} - Shipping
                                                </div>
                                        </div>
                                        </div>
                
                                    `
    });

    return html;
}


export let updatePaymentSummaryPrviRed = (kvantitet,Iznos)=>
{
    const prviDivZaIzracunat = document.querySelector('.payment-summary-row');
    const prvoDijeteBrojProizvoda = prviDivZaIzracunat.children[0];
    const drugoDijeteCijenaProizvoda = prviDivZaIzracunat.children[1];
    prvoDijeteBrojProizvoda.innerHTML = `Items (${kvantitet}):`
    drugoDijeteCijenaProizvoda.innerHTML = `$${Iznos}`;
}

export let updatePaymentSummaryShippingFee = (iznos)=>
{
    const vrijednostShippingaDiv = document.querySelector('.js-shipping-fee').children[1];
    vrijednostShippingaDiv.innerHTML = `$${iznos}`;
}

export let updatePaymentSummaryTotalBeforeTaxes = (iznos)=>
{
    const divZaSubTotal = document.querySelector('.subtotal-row').children[1];
    divZaSubTotal.innerHTML =`$${iznos}`;
}

export let updatePaymentSummaryTotalTax = (iznos)=>
{
    const divKojiNamTreba = document.querySelector('.payment-summary-row .js-taksa');
    divKojiNamTreba.innerHTML =`${iznos}`;
}
export let updatePaymentSummaryGrandTotal = (iznos)=>
{
    const divGrandTotal = document.querySelector('.total-row ').children[1];
    divGrandTotal.innerHTML = `$${iznos}`;
}

export let updateDeliveryDateAndCheckBox = (datum,divDelivery,input)=>
{
    let deliveryDate  = divDelivery.querySelector('.delivery-date');
    deliveryDate.innerHTML = datum;
    input.checked = true

};

export let disabledButton = (istina)=>
{
    const dugme = document.querySelector('.place-order-button');
    dugme.disabled = istina;

}

export let hideUpdateButtonAndShowOthers = (dugme)=>
{
    let elementiPotrebni = dugme.closest('.product-quantity');
    let input = elementiPotrebni.querySelector('.new-quantity-input');
    let quantityLabel =elementiPotrebni.querySelector('.quantity-label');
    let spanSave = elementiPotrebni.querySelector('.save-quantity-link')
    
    quantityLabel.classList.toggle('sakriveni');
    dugme.classList.toggle('sakriveni');
    input.classList.toggle('sakriveni');
    spanSave.classList.toggle('sakriveni');
    input.value = Number(quantityLabel.innerHTML);

}