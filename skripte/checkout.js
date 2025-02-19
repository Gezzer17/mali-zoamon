const gridKorpe = document.querySelector('.order-summary');
const brojStvari = document.querySelector('.return-to-home-link');



let dodajDane = (datum,brojDana)=>
{
    const rezultat = new Date(datum);

    rezultat.setDate(rezultat.getDate()+brojDana);
    const opcije = {weekday:'long',month:'long',day:'numeric'};
    const formatiraniDatum = rezultat.toLocaleDateString('US',opcije);

    return formatiraniDatum;
}


let UcitajKorpu = () =>
{
    

    console.log(productsInCart);

        if(!productsInCart.length)
        {
            gridKorpe.innerHTML = "";
        }
        else
        {
            gridKorpe.innerHTML ="";
            productsInCart.forEach(objekat=>
            {
                gridKorpe.innerHTML +=`<div class="cart-item-container" data-cart-item-id="${objekat.produkt.id}">
                                <div class="delivery-date">
                                Delivery date: Tuesday, June 21
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
                                    </span>
                                    <span class="update-quantity-link link-primary">
                                        Update
                                    </span>
                                    <span class="delete-quantity-link link-primary">
                                        Delete
                                    </span>
                                    </div>
                                </div>

                                <div class="delivery-options">
                                    <div class="delivery-options-title">
                                    Choose a delivery option:
                                    </div>
                                    <div class="delivery-option" data-delivery-option-id="f297d333-a5c4-452f-840b-15a662257b3f">
                                    <input type="radio" checked
                                        class="delivery-option-input"
                                        name="${objekat.produkt.id}-delivery-option">
                                    <div class="cijenaDatum">
                                        <div class="delivery-option-date">
                                        ${dodajDane(new Date(),1)}
                                        </div>
                                        <div class="delivery-option-price">
                                        FREE Shipping
                                        </div>
                                    </div>
                                    </div>
                                    <div class="delivery-option" data-delivery-option-id="6e2dd65a-6665-4f24-bcdc-f2ecdbc6e156">
                                    <input type="radio"
                                        class="delivery-option-input"
                                        name="${objekat.produkt.id}-delivery-option">
                                    <div class="cijenaDatum">
                                        <div class="delivery-option-date">
                                        ${dodajDane(new Date(),5)}
                                        </div>
                                        <div class="delivery-option-price">
                                        $4.99 - Shipping
                                        </div>
                                    </div>
                                    </div>
                                    <div class="delivery-option" data-delivery-option-id="178aa766-de75-4686-8442-038c1a027003">
                                    <input type="radio"
                                        class="delivery-option-input"
                                        name="${objekat.produkt.id}-delivery-option">
                                    <div class="cijenaDatum">
                                        <div class="delivery-option-date">
                                        ${dodajDane(new Date(),9)}
                                        </div>
                                        <div class="delivery-option-price">
                                        $9.99 - Shipping
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>`
            }
            );
        }

}
let UcitajBroj = ()=>
{
    brojStvari.innerHTML = productsInCart.length;
}






UcitajKorpu();
UcitajBroj();



/*Nakon ucitavanja korpe dodaj event listenere za svaki datum u slucaju cijene i posiljke */
const deliverOpcija = document.querySelectorAll('.delivery-option');

deliverOpcija.forEach(deliver=>{
    
    deliver.addEventListener('click',(e)=>
    {
        let dani = deliver.querySelector('.cijenaDatum .delivery-option-date')
        let cijena = deliver.querySelector('.cijenaDatum .delivery-option-price')
        
    })
})

