import { orderiSvi } from "../../data/orderData.js";





let renderTheProductsAlone = (listaPremdeta)=>
{
        let html = '';
      
        listaPremdeta.forEach(predmet=>{

            html +=`<div class="product-image-container">
              <img src="${predmet.produkt.image}">
            </div>

            <div class="product-details">
              <div class="product-name">
                ${predmet.produkt.name}
              </div>
              <div class="product-delivery-date">
                ${predmet.datumPosiljke}
              </div>
              <div class="product-quantity">
                ${predmet.brojnost}
              </div>
              <button class="buy-again-button button-primary" data-product-id="${predmet.produkt.id}">
                <img class="buy-again-icon" src="images/icons/buy-again.png">
                <span class="buy-again-message">Buy it again</span>
                <span class="dodano-u-korpu">✔ Added to cart</span>
              </button>
            </div>

            <div class="product-actions">
              <a href="tracking.html">
                <button class="track-package-button button-secondary" data-product-id="${predmet.produkt.id}">
                  Track package
                </button>
              </a>
            </div>
            `
        })


        return html;
}


export let RenderOrdersView = ()=>
{
    const orderGrid = document.querySelector('.orders-grid');
    orderGrid.innerHTML ="";


    if(orderiSvi.ReturnOrders().length === 0)
    {
        orderGrid.innerHTML = "<div>There are no previous orders!</div>";
    }
    else
    {
    orderiSvi.ReturnOrders().forEach(order => {
        
        orderGrid.innerHTML +=`<div class="order-container">
          
          <div class="order-header">
            <div class="order-header-left-section">
              <div class="order-date">
                <div class="order-header-label">Order Placed:</div>
                <div>${order.datumNarudzbe}</div>
              </div>
              <div class="order-total">
                <div class="order-header-label">Total:</div>
                <div>$${order.ukupanIznos}</div>
              </div>
            </div>

            <div class="order-header-right-section">
              <div class="order-header-label">Order ID:</div>
              <div>${order.orderID}</div>
            </div>
          </div>

          <div class="order-details-grid">
            ${renderTheProductsAlone(order.predmetiNaruceni)}
          </div>
        </div>`
    });
    }
}



export let renderSuccessMessage = (dugme)=>
{
    dugme.classList.toggle('added-to-cart');
    setTimeout(() => {
        dugme.classList.toggle('added-to-cart');
    }, 2000);
    
}