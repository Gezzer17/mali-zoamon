
//Productgrid
const productGrid = document.querySelector('.products-grid');

let PopulateDate = (mjesto,data)  =>
{
        mjesto.innerHTML = "";
        
        

        data.forEach(produkt => 
        {
            let priprepremaSlike = `rating-${produkt.rating.stars * 10}.png`;
            let pripremaCijene = (produkt.priceCents/100).toFixed(2);
            
            
            let data = ` <div class="product-container" data-product-id =${produkt.id}>
          <div class="product-image-container">
            <img class="product-image"
              src="${produkt.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${produkt.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"   
              src="/images/ratings/${[priprepremaSlike]}">
            <div class="product-rating-count link-primary">
              ${produkt.rating.count}
            </div>
          </div>

          <div class="product-price">
            \$${pripremaCijene}
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
        mjesto.innerHTML += data;
            
        });




}
PopulateDate(productGrid,products);

