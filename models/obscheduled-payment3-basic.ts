/*
Account Information API

In this document, you'll find the steps your organization needs to take to use our API services. Included in this guide are details of request and response messages used to support your organization’s integration. The intended audience for this document are **Technical Architects**, **Development Engineers**, **Test Engineers**, and **Operation & Maintenance Engineers** involved in development and support of your organization’s integration. Setting up our API Services is best completed with the assistance of your organization’s IT team, or someone with experience and knowledge of application programming interfaces. This should include experience with **JSON payloads**, **security** and **public key infrastructure (PKI)**. This Document describes the following request and response structure of HSBCnet - Account Information API. For detail implementation guidelines, please refer to the respective section from [develop.hsbc.com](https://develop.hsbc.com/ob-api-documentation/account-information-uk-personal-v319)


The version of the OpenAPI document: 3.1.11


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OBActiveOrHistoricCurrencyAndAmount1 } from './obactive-or-historic-currency-and-amount1';
import { OBExternalScheduleType1Code } from './obexternal-schedule-type1-code';

/**
 * 
 * @export
 * @interface OBScheduledPayment3Basic
 */
export interface OBScheduledPayment3Basic {
    /**
     * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
     * @type {string}
     * @memberof OBScheduledPayment3Basic
     */
    'AccountId': string;
    /**
     * A unique and immutable identifier used to identify the scheduled payment resource. This identifier has no meaning to the account owner.
     * @type {string}
     * @memberof OBScheduledPayment3Basic
     */
    'ScheduledPaymentId'?: string;
    /**
     * The date on which the scheduled payment will be made.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00
     * @type {string}
     * @memberof OBScheduledPayment3Basic
     */
    'ScheduledPaymentDateTime': string;
    /**
     * Specifies the scheduled payment date type requested
     * @type {OBExternalScheduleType1Code}
     * @memberof OBScheduledPayment3Basic
     */
    'ScheduledType': OBExternalScheduleType1Code;
    /**
     * Unique reference, as assigned by the creditor, to unambiguously refer to the payment transaction. Usage: If available, the initiating party should provide this reference in the structured remittance information, to enable reconciliation by the creditor upon receipt of the amount of money. If the business context requires the use of a creditor reference or a payment remit identification, and only one identifier can be passed through the end-to-end chain, the creditor\'s reference or payment remittance identification should be quoted in the end-to-end transaction identification.
     * @type {string}
     * @memberof OBScheduledPayment3Basic
     */
    'Reference'?: string;
    /**
     * A reference value provided by the PSU to the PISP while setting up the scheduled payment.
     * @type {string}
     * @memberof OBScheduledPayment3Basic
     */
    'DebtorReference'?: string;
    /**
     * 
     * @type {OBActiveOrHistoricCurrencyAndAmount1}
     * @memberof OBScheduledPayment3Basic
     */
    'InstructedAmount': OBActiveOrHistoricCurrencyAndAmount1;
}
