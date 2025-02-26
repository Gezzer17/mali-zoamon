


//RenderSvihProdukata
export let renderProductList = (products,targetElement)=>
{
    targetElement.innerHTML = "";
    products.forEach(produkt => 
        {      
            let divProdukt = ` <div class="product-container" data-product-id =${produkt.id}>
          <div class="product-image-container">
            <img class="product-image"
              src="${produkt.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${produkt.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"   
              src="${produkt.getSlika()}">
            <div class="product-rating-count link-primary">
              ${produkt.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${produkt.getPrice()}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary">
            Add to Cart
          </button>
        </div>`
        targetElement.innerHTML += divProdukt;
            
        });

}
export let fjaPrikazPoruke = (div)=>
    {
    
            div.style.opacity = "100";
            setTimeout(() => {
                
                div.style.opacity ="0";
    
            }, 2000);
    }