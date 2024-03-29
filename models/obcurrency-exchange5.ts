/*
Account Information API

In this document, you'll find the steps your organization needs to take to use our API services. Included in this guide are details of request and response messages used to support your organization’s integration. The intended audience for this document are **Technical Architects**, **Development Engineers**, **Test Engineers**, and **Operation & Maintenance Engineers** involved in development and support of your organization’s integration. Setting up our API Services is best completed with the assistance of your organization’s IT team, or someone with experience and knowledge of application programming interfaces. This should include experience with **JSON payloads**, **security** and **public key infrastructure (PKI)**. This Document describes the following request and response structure of HSBCnet - Account Information API. For detail implementation guidelines, please refer to the respective section from [develop.hsbc.com](https://develop.hsbc.com/ob-api-documentation/account-information-uk-personal-v319)


The version of the OpenAPI document: 3.1.11


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OBCurrencyExchange5InstructedAmount } from './obcurrency-exchange5-instructed-amount';

/**
 * Set of elements used to provide details on the currency exchange.
 * @export
 * @interface OBCurrencyExchange5
 */
export interface OBCurrencyExchange5 {
    /**
     * Currency from which an amount is to be converted in a currency conversion.
     * @type {string}
     * @memberof OBCurrencyExchange5
     */
    'SourceCurrency': string;
    /**
     * Currency into which an amount is to be converted in a currency conversion.
     * @type {string}
     * @memberof OBCurrencyExchange5
     */
    'TargetCurrency'?: string;
    /**
     * Currency in which the rate of exchange is expressed in a currency exchange. In the example 1GBP = xxxCUR, the unit currency is GBP.
     * @type {string}
     * @memberof OBCurrencyExchange5
     */
    'UnitCurrency'?: string;
    /**
     * Factor used to convert an amount from one currency into another. This reflects the price at which one currency was bought with another currency. Usage: ExchangeRate expresses the ratio between UnitCurrency and QuotedCurrency (ExchangeRate = UnitCurrency/QuotedCurrency).
     * @type {number}
     * @memberof OBCurrencyExchange5
     */
    'ExchangeRate': number;
    /**
     * Unique identification to unambiguously identify the foreign exchange contract.
     * @type {string}
     * @memberof OBCurrencyExchange5
     */
    'ContractIdentification'?: string;
    /**
     * Date and time at which an exchange rate is quoted.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00
     * @type {string}
     * @memberof OBCurrencyExchange5
     */
    'QuotationDate'?: string;
    /**
     * 
     * @type {OBCurrencyExchange5InstructedAmount}
     * @memberof OBCurrencyExchange5
     */
    'InstructedAmount'?: OBCurrencyExchange5InstructedAmount;
}

