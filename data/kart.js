import { deliveryOptions } from "../data/deliveryOptions.js";
import formatIznos from "../skripte/utils/formatCurrency.js";


export const kart = {
    productsInCart: [],
    stimanjeKorpe()
        {
            if(!localStorage.getItem('proizvodiUKorpi'))
                {
                    localStorage.setItem('proizvodiUKorpi',JSON.stringify(this.productsInCart));
                }
                else
                {
                    this.productsInCart = JSON.parse(localStorage.getItem('proizvodiUKorpi'));  
                }},
    savePrijeIzlaska(){

        localStorage.setItem('proizvodiUKorpi',JSON.stringify(this.productsInCart));
    },
    returnQuantityOfCart()
        {
            let suma = this.productsInCart.reduce((acc,vrijednost)=>
                {
                    return acc + vrijednost.brojnost;
        
                },0);
        
            return suma;
    },
    returnTotalPriceWithoutShipping()
        {
        
                let cijena = this.productsInCart.reduce((acc,objekat)=>
                {
                    acc += (formatIznos(objekat.produkt.priceCents))*objekat.brojnost;
                    return acc;
                },0);
               
               
               return cijena; 
    },
    DeleteFromTheCart(produktId)
        {
            //Primamo produktId
            let index = this.productsInCart.findIndex(obj=> obj.produkt.id === produktId);
        
            if(index !== -1)
            {
                
                this.productsInCart.splice(index,1);
                
            }
            this.savePrijeIzlaska();
        
    },
    UpdateKvanitetTogItema(produktID,kvantitet)
        {
            
            let objekat = this.productsInCart.find(obj=> obj.produkt.id === produktID);
            
            if(objekat)
            {
                
                objekat.brojnost = kvantitet;
               
            }
            else
            {
                console.log("Nismo nasli nista");
            }
            this.savePrijeIzlaska();
        
    },
    updateDatumDostave(produktID,deliveryID)
        {
                let objekat = this.productsInCart.find(objekat=> objekat.produkt.id === produktID);
                if(objekat != -1)
                {
                    objekat.deliverOpcija = Number(deliveryID);
                }
                this.savePrijeIzlaska();
    },
    returnShippingFee()
        {
        
            let sumaShippingaFee = this.productsInCart.reduce((acc,objekat)=>
            {
                    let objekatKojiImaCijenuShippinga = deliveryOptions.find(obj=> obj.id === objekat.deliverOpcija);
                    acc += objekatKojiImaCijenuShippinga.priceCents;
        
                    return acc;
        
            },0)
        
            return (formatIznos(sumaShippingaFee));
    },
    DodajUKorpu(produkt,kvantitet)
        {
        
            if(this.productsInCart.some(objekat => objekat.produkt.id === produkt.id))
            {
                
                let objekatKojiTrazimo = this.productsInCart.find(objekat => objekat.produkt.id === produkt.id);
                objekatKojiTrazimo.brojnost += kvantitet;
                
            }
            else
            {
                
                this.productsInCart.push({produkt: produkt, brojnost: kvantitet, deliverOpcija:1});
                
            }
            this.savePrijeIzlaska();
    },
    returnSubTotalPriceAndShipping()
        {
            let vrijednost = Number(this.returnShippingFee() + this.returnTotalPriceWithoutShipping());
            if(vrijednost)
            {
                return vrijednost;
            }
           
            
        
            return 0;
    },
    retrunPriceOfTax()
        {
            let vrijednost = Number(this.returnSubTotalPriceAndShipping()/10);
            if(vrijednost)
            {
                return vrijednost;
            }
            
            return 0;
    },
    grandTotalPrice()
        {
            let vrijednost = Number(this.returnSubTotalPriceAndShipping()+this.retrunPriceOfTax());
            if(vrijednost)
            {
                return vrijednost;
            }
           
            return 0;
        }    
};


kart.stimanjeKorpe();





 
    


















    