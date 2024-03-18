/*
Account Information API

In this document, you'll find the steps your organization needs to take to use our API services. Included in this guide are details of request and response messages used to support your organization’s integration. The intended audience for this document are **Technical Architects**, **Development Engineers**, **Test Engineers**, and **Operation & Maintenance Engineers** involved in development and support of your organization’s integration. Setting up our API Services is best completed with the assistance of your organization’s IT team, or someone with experience and knowledge of application programming interfaces. This should include experience with **JSON payloads**, **security** and **public key infrastructure (PKI)**. This Document describes the following request and response structure of HSBCnet - Account Information API. For detail implementation guidelines, please refer to the respective section from [develop.hsbc.com](https://develop.hsbc.com/ob-api-documentation/account-information-uk-personal-v319)


The version of the OpenAPI document: 3.1.11


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Other fee rate type which is not available in the standard code set
 * @export
 * @interface OBOtherCodeType18
 */
export interface OBOtherCodeType18 {
    /**
     * The four letter Mnemonic used within an XML file to identify a code
     * @type {string}
     * @memberof OBOtherCodeType18
     */
    'Code'?: string;
    /**
     * Long name associated with the code
     * @type {string}
     * @memberof OBOtherCodeType18
     */
    'Name': string;
    /**
     * Description to describe the purpose of the code
     * @type {string}
     * @memberof OBOtherCodeType18
     */
    'Description': string;
}

