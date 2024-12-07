import Controller from "sap/ui/core/mvc/Controller";
import MessageToast from "sap/m/MessageToast";

/**
 * @name ui5.walkthrough.controller.App
 */
export default class AppController extends Controller {
  onShowHello(): void {
    // show a native JavaScript alert
    MessageToast.show("Hello World");
  }
}
