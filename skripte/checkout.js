
import { renderNumberOfThingsInCart,renderCartBeforeCheckout } from "./checkoutMVC/checkoutView.js";
import {updateDeliveryDateInView, updatePaymentSummaryInView,checkForClickOnButton} from './checkoutMVC/checkoutController.js';


renderCartBeforeCheckout();//Prikaz proizvoda
renderNumberOfThingsInCart();//Broj proizvoda u korpi
updatePaymentSummaryInView();//Summary prozor
updateDeliveryDateInView();//Klik na opciju mijenja sve
checkForClickOnButton();//Sumbmit Ordera








