import Controller from "sap/ui/core/mvc/Controller";
import MessageToast from "sap/m/MessageToast";
import JSONModel from "sap/ui/model/json/JSONModel";

/**
 * @name ui5.walkthrough.controller.App
 */
export default class AppController extends Controller {
  onInit(): void {
    // set data model on view
    const data = {
      recipient: {
        name: "World",
      },
    };
    const dataModel = new JSONModel(data);
    console.log(dataModel);
    this.getView()?.setModel(dataModel);
  }

  onShowHello(): void {
    // show a native JavaScript alert
    MessageToast.show("Hello World");
  }
}
