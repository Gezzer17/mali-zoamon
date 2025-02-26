
export class Order
{
    orderID;
    datumNarudzbe;
    ukupanIznos;
    predmetiNaruceni = [];

    /**
     *
     */
    constructor(datumNarudzbe,ukupanIznos,predmetiNaruceniId) {
        this.datumNarudzbe = datumNarudzbe,
        this.orderID = this.generateBigOrderID(),
        this.ukupanIznos = ukupanIznos.toFixed(2),
        this.predmetiNaruceni = predmetiNaruceniId;
    }
    generateBigOrderID() {
        const timestamp = Date.now().toString(36);
        const randomPart = Math.random().toString(36).substring(2, 12); 
        return `ORDER-${timestamp}-${randomPart}`.toUpperCase();
    }

}

class Orders
{
    #orders = [];
    
    constructor() {
        this.#SetOrders();
    }

    #SetOrders()
    {
            if(!localStorage.getItem('orders'))
            {
                localStorage.setItem('orders',JSON.stringify(this.#orders));
            }
            else
            {
                this.#orders = JSON.parse(localStorage.getItem('orders'));
            }
    }
    DodajUKorpu(order)
    {
        this.#orders.unshift(order);
        this.#SaveToStorage();
    }
    ReturnOrders()
    {
        return this.#orders;
    }
    #SaveToStorage()
    {
        localStorage.setItem('orders',JSON.stringify(this.#orders));
    }
    ReturnProductFromOrder = (orderId,produktId)=>
    {
        let potrebniOrder = this.#orders.find(order=> order.orderID === orderId);
        let potrebniPredmet = potrebniOrder.predmetiNaruceni.find(predmet=> predmet.produkt.id === produktId);
        return potrebniPredmet;
    }
    ReturnDatumNarduzbe = (orderId)=>
    {
            return this.#orders.find(order => order.orderID === orderId).datumNarudzbe;
    }

}



export const orderiSvi = new Orders();
