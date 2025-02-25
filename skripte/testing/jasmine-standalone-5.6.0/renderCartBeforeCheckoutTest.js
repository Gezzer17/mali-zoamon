import { renderCartBeforeCheckout } from '../../checkoutMVC/checkoutView.js';
import { deliveryOptions } from '../../../data/deliveryOptions.js';
import { kart } from '../../../data/kart.js';

describe('renderCartBeforeCheckout', () => {
    let container;

    beforeEach(() => {
  
        container = document.createElement('div');
        container.classList.add('order-summary');
        document.body.appendChild(container);

        
    });

    afterEach(() => {
 
        document.body.removeChild(container);
    });

    it('should display "Your cart is empty" when the cart is empty', () => {
       
        kart.productsInCart.length = 0;

    
        renderCartBeforeCheckout();

        
        expect(container.innerHTML).toContain('Your cart is empty');
        expect(container.innerHTML).toContain('View products');
    });

    it('should render cart items when the cart is not empty', () => {
        
        kart.productsInCart.length = 0; 
        kart.productsInCart.push({
            produkt: {
                id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                image: "images/products/athletic-cotton-socks-6-pairs.jpg",
                name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
                priceCents: 1090
            },
            brojnost: 2, 
            deliverOpcija: 1
        });

        
        renderCartBeforeCheckout();

        
       

       
        expect(container.innerHTML).toContain('Black and Gray Athletic Cotton Socks - 6 Pairs');
        expect(container.innerHTML).toContain('$10.90');
        expect(container.innerHTML).toContain('2');
    });
});