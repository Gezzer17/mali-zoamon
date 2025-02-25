
import { kart } from "../../../data/kart.js";

describe('Testing the addToTheCart function', () => {
    let elementProbaNovi;
    let elementProbaVecTu;

    beforeEach(()=>
    {
        kart.productsInCart.length = 0;
        console.log(kart.productsInCart.length);

        elementProbaNovi ={produkt:{id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            image: "images/products/athletic-cotton-socks-6-pairs.jpg",
            name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
            rating: {
              stars: 4.5,
              count: 87
            },
            priceCents: 1090,
            keywords: [
              "socks",
              "sports",
              "apparel"
            ]},brojnost:1,deliverOpcija:1};
            elementProbaVecTu = {produkt:{id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
            image: "images/products/intermediate-composite-basketball.jpg",
            name: "Intermediate Size Basketball",
            rating: {
              stars: 4,
              count: 127
            },
            priceCents: 2095,
            keywords: [
              "sports",
              "basketballs"
            ]},brojnost:1,deliverOpcija:1};
            
            kart.productsInCart.push(elementProbaVecTu);
    });


    it("Testing if the element is already there, just update the quantity of element",()=>
    {
            let objectThatWeNeed = kart.productsInCart.find(item=> item.produkt.id === elementProbaVecTu.produkt.id);
            let pocetnaBrojnost = objectThatWeNeed.brojnost;
            let velcinaNiza = kart.productsInCart.length;

            //Calling the function
            kart.DodajUKorpu(elementProbaVecTu.produkt,3);

            let updatedItem = kart.productsInCart.find(item=> item.produkt.id === elementProbaVecTu.produkt.id);
            expect(kart.productsInCart.length).toEqual(velcinaNiza);
            expect(updatedItem.brojnost).toBe(pocetnaBrojnost+3);


    });

    it("Testing if the element is not there, add it to the cart",()=>
    {
            let pocetnaVelicinaNiza = kart.productsInCart.length;

            kart.DodajUKorpu(elementProbaNovi.produkt,1);

            let dodaniElementUnizu = kart.productsInCart.find(item => item.produkt.id === elementProbaNovi.produkt.id);

            expect(kart.productsInCart.length).toBe(pocetnaVelicinaNiza+1); 
            expect(dodaniElementUnizu).toBeDefined();
            expect(dodaniElementUnizu.brojnost).toBe(1);
            expect(dodaniElementUnizu.deliverOpcija).toBe(1);
    });




});