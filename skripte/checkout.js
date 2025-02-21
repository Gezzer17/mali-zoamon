import { stimanjeKorpe,DeleteFromTheCart, updateDatumDostave, } from "../data/cart.js";
import { renderNumberOfThingsInCart,renderCartBeforeCheckout } from "./checkoutMVC/checkoutView.js";
import {updateDeliveryDateInView, updatePaymentSummaryInView} from './checkoutMVC/checkoutController.js';

stimanjeKorpe();
renderCartBeforeCheckout();//Prikaz proizvoda
renderNumberOfThingsInCart();//Broj proizvoda u korpi
updatePaymentSummaryInView();//Summary prozor
updateDeliveryDateInView();//Klik na opciju mijenja sve






//Evenet Listnerei za brisanje



