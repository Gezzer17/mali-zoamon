import formatiranjeIznos from '../utils/formatCurrency.js';




console.log("Test suite: formatCurrency");  
let provjeraFormatiranjeIznosa = () =>
{
    console.log("Converts cents into dollars")
    if(formatiranjeIznos(2005) === 20.05)
    {
        console.log("Test passed");
    }
    else
    {
        console.log("Test failed");
    }
    console.log("Works with zero")
    if(formatiranjeIznos(0) === 0.00)
    {
        console.log("Test passed")
    }
    else
    {
        console.log("Test failed");
    }  

    console.log("Rounds up to the nearest cent")
    if(formatiranjeIznos(2000.5) === 20.01)
    {
        console.log('Test passed');
    }
    else
    {
        console.log('Test failed');
    }
    if(formatiranjeIznos(2000.4) === 20.00)
    {
        console.log("Test passed");
    }
    else
    {
        console.log("Test failed");
    }
        
    



}

provjeraFormatiranjeIznosa();
