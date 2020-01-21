var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import { BaseApplicationCustomizer } from '@microsoft/sp-application-base';
import { Dialog } from '@microsoft/sp-dialog';
import * as strings from 'HelloWorldApplicationCustomizerStrings';
var LOG_SOURCE = 'HelloWorldApplicationCustomizer';
/** A Custom Action which can be run during execution of a Client Side Application */
var HelloWorldApplicationCustomizer = /** @class */ (function (_super) {
    __extends(HelloWorldApplicationCustomizer, _super);
    function HelloWorldApplicationCustomizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelloWorldApplicationCustomizer.prototype.onInit = function () {
        Log.info(LOG_SOURCE, "Initialized " + strings.Title);
        var message = this.properties.testMessage;
        if (!message) {
            message = '(No properties were provided.)';
        }
        Dialog.alert("Hello from " + strings.Title + ":\n\n" + message);
        return Promise.resolve();
    };
    __decorate([
        override
    ], HelloWorldApplicationCustomizer.prototype, "onInit", null);
    return HelloWorldApplicationCustomizer;
}(BaseApplicationCustomizer));
export default HelloWorldApplicationCustomizer;
//# sourceMappingURL=HelloWorldApplicationCustomizer.js.map