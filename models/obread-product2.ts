/*
Account Information API

In this document, you'll find the steps your organization needs to take to use our API services. Included in this guide are details of request and response messages used to support your organization’s integration. The intended audience for this document are **Technical Architects**, **Development Engineers**, **Test Engineers**, and **Operation & Maintenance Engineers** involved in development and support of your organization’s integration. Setting up our API Services is best completed with the assistance of your organization’s IT team, or someone with experience and knowledge of application programming interfaces. This should include experience with **JSON payloads**, **security** and **public key infrastructure (PKI)**. This Document describes the following request and response structure of HSBCnet - Account Information API. For detail implementation guidelines, please refer to the respective section from [develop.hsbc.com](https://develop.hsbc.com/ob-api-documentation/account-information-uk-personal-v319)


The version of the OpenAPI document: 3.1.11


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Links } from './links';
import { Meta } from './meta';
import { OBReadProduct2Data } from './obread-product2-data';

/**
 * Product details of Other Product which is not avaiable in the standard list
 * @export
 * @interface OBReadProduct2
 */
export interface OBReadProduct2 {
    /**
     * 
     * @type {OBReadProduct2Data}
     * @memberof OBReadProduct2
     */
    'Data': OBReadProduct2Data;
    /**
     * 
     * @type {Links}
     * @memberof OBReadProduct2
     */
    'Links'?: Links;
    /**
     * 
     * @type {Meta}
     * @memberof OBReadProduct2
     */
    'Meta'?: Meta;
}

