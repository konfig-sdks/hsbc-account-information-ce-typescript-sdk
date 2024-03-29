/*
Account Information API

In this document, you'll find the steps your organization needs to take to use our API services. Included in this guide are details of request and response messages used to support your organization’s integration. The intended audience for this document are **Technical Architects**, **Development Engineers**, **Test Engineers**, and **Operation & Maintenance Engineers** involved in development and support of your organization’s integration. Setting up our API Services is best completed with the assistance of your organization’s IT team, or someone with experience and knowledge of application programming interfaces. This should include experience with **JSON payloads**, **security** and **public key infrastructure (PKI)**. This Document describes the following request and response structure of HSBCnet - Account Information API. For detail implementation guidelines, please refer to the respective section from [develop.hsbc.com](https://develop.hsbc.com/ob-api-documentation/account-information-uk-personal-v319)


The version of the OpenAPI document: 3.1.11


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface OBReadConsent1Data
 */
export interface OBReadConsent1Data {
    /**
     * 
     * @type {Array<string>}
     * @memberof OBReadConsent1Data
     */
    'Permissions': Array<OBReadConsent1DataPermissionsEnum>;
    /**
     * Specified date and time the permissions will expire. If this is not populated, the permissions will be open ended.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00
     * @type {string}
     * @memberof OBReadConsent1Data
     */
    'ExpirationDateTime'?: string;
    /**
     * Specified start date and time for the transaction query period. If this is not populated, the start date will be open ended, and data will be returned from the earliest available transaction.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00
     * @type {string}
     * @memberof OBReadConsent1Data
     */
    'TransactionFromDateTime'?: string;
    /**
     * Specified end date and time for the transaction query period. If this is not populated, the end date will be open ended, and data will be returned to the latest available transaction.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00
     * @type {string}
     * @memberof OBReadConsent1Data
     */
    'TransactionToDateTime'?: string;
}

type OBReadConsent1DataPermissionsEnum = 'ReadAccountsBasic' | 'ReadAccountsDetail' | 'ReadBalances' | 'ReadDirectDebits' | 'ReadPAN' | 'ReadScheduledPaymentsBasic' | 'ReadScheduledPaymentsDetail' | 'ReadStandingOrdersBasic' | 'ReadStandingOrdersDetail' | 'ReadTransactionsBasic' | 'ReadTransactionsCredits' | 'ReadTransactionsDebits' | 'ReadTransactionsDetail' | 'ReadBeneficiariesBasic' | 'ReadBeneficiariesDetail' | 'ReadProducts' | 'ReadParty'


