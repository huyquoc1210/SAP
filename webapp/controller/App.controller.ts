import Controller from "sap/ui/core/mvc/Controller";
import MessageToast from "sap/m/MessageToast";
import JSONModel from "sap/ui/model/json/JSONModel";
import ResourceModel from "sap/ui/model/resource/ResourceModel";
import ResourceBundle from "sap/base/i18n/ResourceBundle";

/**
 * @name ui5.walkthrough.controller.App
 */
export default class AppController extends Controller {
  onInit(): void {
    // set data model on view
    const data = {
      recipient: {
        name: "Huy",
      },
    };
    const dataModel = new JSONModel(data);
    console.log(dataModel);
    this.getView()?.setModel(dataModel);

    // set i18n model on view
    const i18nModel = new ResourceModel({
      bundleName: "ui5.walkthrough.i18n.i18n",
    });
    console.log(i18nModel);
    this.getView()?.setModel(i18nModel, "i18n");
  }

  onShowHello(): void {
    // read msg from i18n model
    const recipient = (this.getView()?.getModel() as JSONModel)?.getProperty(
      "/recipient/name"
    );

    const resourceBundle = (
      this.getView()?.getModel("i18n") as ResourceModel
    )?.getResourceBundle() as ResourceBundle;
    console.log(resourceBundle);
    const msg =
      resourceBundle.getText("helloMsg", [recipient]) || "no text defined";
    // show message
    MessageToast.show(msg);
  }
}
