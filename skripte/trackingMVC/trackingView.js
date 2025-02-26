import { trackingObj } from "../../data/trackingData.js";


let RenderProgressLabel = ()=>
{
    const progresLabel = document.querySelector('.progress-labels-container');
    const progresBar = document.querySelector(".progress-bar");
    


    let datumKadStize =  trackingObj.trackingItem.datumPosiljke;
    let datumKadJeNaruceno = new Date(trackingObj.trackingItem.dateOrder);
    const year = new Date().getFullYear();
    const fullDatum = `${datumKadStize},${year}`;
    const parsedDate = new Date(fullDatum);

    
    const today =new Date();


    const differenceInMs = (parsedDate - datumKadJeNaruceno);
    const differenceInDays = Math.ceil(differenceInMs / (1000 * 60 * 60 * 24));
    
    if(differenceInDays ===1)
    {
      progresLabel.children[1].classList.add('current-status'); 
      progresBar.style.width = "50%"; 

    }else if (today.toDateString() === datumKadJeNaruceno.toDateString()) {
      progresLabel.children[0].classList.add('current-status'); 
      progresBar.style.width = "10%";
  } else if (today > datumKadJeNaruceno && today < parsedDate) {
     
      progresLabel.children[1].classList.add('current-status'); 
      progresBar.style.width = "50%"; 
  } else if (today >= parsedDate) {
      
      progresLabel.children[2].classList.add('current-status'); 
      progresBar.style.width = "100%";
  }

}



export let RenderTrackingView = ()=>
{
        
        const glavniDiv = document.querySelector('.main');
        glavniDiv.innerHTML = `<div class="order-tracking">
        <a class="back-to-orders-link link-primary" href="orders.html">
          View all orders
        </a>

        <div class="delivery-date">
          Arriving on ${trackingObj.trackingItem.datumPosiljke}
        </div>

        <div class="product-info">
          ${trackingObj.trackingItem.produkt.name}
        </div>

        <div class="product-info">
          Quantity: ${trackingObj.trackingItem.brojnost}
        </div>

        <img class="product-image" src="${trackingObj.trackingItem.produkt.image}">

        <div class="progress-labels-container">
            <div class="progress-label">
            Preparing
          </div>
          <div class="progress-label">
            Shipped
          </div>
          <div class="progress-label">
            Delivered
          </div>
        </div>
        <div class="progress-bar-container">
          <div class="progress-bar"></div>
        </div>
      </div>`;


      setTimeout(() => {
        RenderProgressLabel(); 
      }, 500);     

}
