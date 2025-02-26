import { trackingObj } from "../data/trackingData.js";
import * as viewTrack from "../skripte/trackingMVC/trackingView.js";
import { renderCartQuantity } from "./sharedMVC/SharedView.js";


trackingObj.GetFromStorage();

viewTrack.RenderTrackingView();
renderCartQuantity();


