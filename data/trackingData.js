


export const trackingObj ={
    trackingItem: {
        dateOrder: "",

    },
    

    SaveToStorage()
    {
        localStorage.setItem('trackingItem',JSON.stringify(this.trackingItem));
    },
    GetFromStorage()
    {
        this.trackingItem = JSON.parse(localStorage.getItem('trackingItem'));   
    }
};


