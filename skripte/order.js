import { renderCartQuantity } from "./sharedMVC/SharedView.js";
import * as viewOD from '../skripte/orderMVC/orderView.js'
import * as contOD from '../skripte/orderMVC/orderController.js';

viewOD.RenderOrdersView();
renderCartQuantity();
contOD.ListenForBuyItAgain();
