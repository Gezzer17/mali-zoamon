let productsInCart = [];

if(!localStorage.getItem('proizvodiUKorpi'))
{
    localStorage.setItem('proizvodiUKorpi',JSON.stringify(productsInCart));
}
else
{
    productsInCart = JSON.parse(localStorage.getItem('proizvodiUKorpi'));
    
}


let savePrijeIzlaska = ()=>{

    localStorage.setItem('proizvodiUKorpi',JSON.stringify(productsInCart));
}
window.addEventListener('beforeunload',savePrijeIzlaska);