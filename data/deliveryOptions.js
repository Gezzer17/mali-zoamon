import {dodajDane} from '../skripte/utils/formatDana.js';


export const deliveryOptions = [
    {id: 1,
     deliveryDays:9,
     priceCents:0
    },
    {
        id:2,
        deliveryDays:5,
        priceCents:499
    },
    {
        id:3,
        deliveryDays:1,
        priceCents:999
    }
];


export let returnFormatBrojDana = (id)=>{

    let obj = deliveryOptions.find(obj=> obj.id === id);
    
    let DatumPotrebniVrati = dodajDane(new Date(),obj.deliveryDays);


    return DatumPotrebniVrati;
}