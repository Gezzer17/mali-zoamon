import { deliveryOptions } from "../data/deliveryOptions.js";
import formatIznos from "../skripte/utils/formatCurrency.js";

export let productsInCart = [];

export let stimanjeKorpe = ()=>
{
    if(!localStorage.getItem('proizvodiUKorpi'))
        {
            localStorage.setItem('proizvodiUKorpi',JSON.stringify(productsInCart));
        }
        else
        {
            productsInCart = JSON.parse(localStorage.getItem('proizvodiUKorpi'));  
        }
}

//Ovaj chunk ovdje save prilikom unloada, tako da ne moramo stalno mijenjati storage
let savePrijeIzlaska = ()=>{

    localStorage.setItem('proizvodiUKorpi',JSON.stringify(productsInCart));
}
window.addEventListener('beforeunload',savePrijeIzlaska);


export let returnQuantityOfCart = ()=>
{
    let suma = productsInCart.reduce((acc,vrijednost)=>
        {
            return acc + vrijednost.brojnost;

        },0);

    return suma;
}
export let returnTotalPriceWithoutShipping = ()=>
    {
    
            let cijena = productsInCart.reduce((acc,objekat)=>
            {
                acc += (formatIznos(objekat.produkt.priceCents))*objekat.brojnost;
                return acc;
            },0);
           
           
           return cijena; 
    };

 
    



export let DeleteFromTheCart = (produktId) =>
{
    //Primamo produktId
    let index = productsInCart.findIndex(obj=> obj.produkt.id === produktId);

    if(index !== -1)
    {
        
        productsInCart.splice(index,1);
        console.log(productsInCart);
    }
  

}

export let UpdateKvanitetTogItema = (produktID,kvantitet)=>
{
    
    let objekat = productsInCart.find(obj=> obj.produkt.id === produktID);
    
    if(objekat)
    {
        
        objekat.brojnost = kvantitet;
       
    }
    else
    {
        console.log("Nismo nasli nista");
    }


}

export let updateDatumDostave = (produktID,deliveryID)=>
{
        let objekat = productsInCart.find(objekat=> objekat.produkt.id === produktID);
        if(objekat != -1)
        {
            objekat.deliverOpcija = Number(deliveryID);
        }
        


}

export let returnShippingFee = ()=>
{

    let sumaShippingaFee = productsInCart.reduce((acc,objekat)=>
    {
            let objekatKojiImaCijenuShippinga = deliveryOptions.find(obj=> obj.id === objekat.deliverOpcija);
            acc += objekatKojiImaCijenuShippinga.priceCents;

            return acc;

    },0)

    return (formatIznos(sumaShippingaFee));
}

export let DodajUKorpu = (produkt,kvantitet)=> 
{

    if(productsInCart.some(objekat => objekat.produkt.id === produkt.id))
    {
        
        let objekatKojiTrazimo = productsInCart.find(objekat => objekat.produkt.id === produkt.id);
        objekatKojiTrazimo.brojnost += kvantitet;
        
    }
    else
    {
        
        productsInCart.push({produkt: produkt, brojnost: kvantitet, deliverOpcija:1});
        
    }
}

export let returnSubTotalPriceAndShipping = ()=>
{
    let vrijednost = Number(returnShippingFee() + returnTotalPriceWithoutShipping());
    if(vrijednost)
    {
        return vrijednost;
    }
    console.log(vrijednost);
    

    return 0;
}
export let retrunPriceOfTax = ()=>
{
    let vrijednost = Number(returnSubTotalPriceAndShipping()/10);
    if(vrijednost)
    {
        return vrijednost;
    }
    
    return 0;
}

export let grandTotalPrice = ()=>
{
    let vrijednost = Number(returnSubTotalPriceAndShipping()+retrunPriceOfTax());
    if(vrijednost)
    {
        return vrijednost;
    }
   
    return 0;
}




    