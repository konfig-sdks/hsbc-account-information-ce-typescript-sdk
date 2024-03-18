/*
Account Information API

In this document, you'll find the steps your organization needs to take to use our API services. Included in this guide are details of request and response messages used to support your organization’s integration. The intended audience for this document are **Technical Architects**, **Development Engineers**, **Test Engineers**, and **Operation & Maintenance Engineers** involved in development and support of your organization’s integration. Setting up our API Services is best completed with the assistance of your organization’s IT team, or someone with experience and knowledge of application programming interfaces. This should include experience with **JSON payloads**, **security** and **public key infrastructure (PKI)**. This Document describes the following request and response structure of HSBCnet - Account Information API. For detail implementation guidelines, please refer to the respective section from [develop.hsbc.com](https://develop.hsbc.com/ob-api-documentation/account-information-uk-personal-v319)


The version of the OpenAPI document: 3.1.11


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OBReadProduct2DataProductInnerOtherProductTypeRepaymentOtherAmountType } from './obread-product2-data-product-inner-other-product-type-repayment-other-amount-type';
import { OBReadProduct2DataProductInnerOtherProductTypeRepaymentOtherRepaymentFrequency } from './obread-product2-data-product-inner-other-product-type-repayment-other-repayment-frequency';
import { OBReadProduct2DataProductInnerOtherProductTypeRepaymentOtherRepaymentType } from './obread-product2-data-product-inner-other-product-type-repayment-other-repayment-type';
import { OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentFeeCharges } from './obread-product2-data-product-inner-other-product-type-repayment-repayment-fee-charges';
import { OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentHolidayInner } from './obread-product2-data-product-inner-other-product-type-repayment-repayment-holiday-inner';

/**
 * Repayment details of the Loan product
 * @export
 * @interface OBReadProduct2DataProductInnerOtherProductTypeRepayment
 */
export interface OBReadProduct2DataProductInnerOtherProductTypeRepayment {
    /**
     * Repayment type
     * @type {string}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeRepayment
     */
    'RepaymentType'?: OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentTypeEnum;
    /**
     * Repayment frequency
     * @type {string}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeRepayment
     */
    'RepaymentFrequency'?: OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentFrequencyEnum;
    /**
     * The repayment is for paying just the interest only or both interest and capital or bullet amount or balance to date etc
     * @type {string}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeRepayment
     */
    'AmountType'?: OBReadProduct2DataProductInnerOtherProductTypeRepaymentAmountTypeEnum;
    /**
     * 
     * @type {Array<string>}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeRepayment
     */
    'Notes'?: Array<string>;
    /**
     * 
     * @type {OBReadProduct2DataProductInnerOtherProductTypeRepaymentOtherRepaymentType}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeRepayment
     */
    'OtherRepaymentType'?: OBReadProduct2DataProductInnerOtherProductTypeRepaymentOtherRepaymentType;
    /**
     * 
     * @type {OBReadProduct2DataProductInnerOtherProductTypeRepaymentOtherRepaymentFrequency}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeRepayment
     */
    'OtherRepaymentFrequency'?: OBReadProduct2DataProductInnerOtherProductTypeRepaymentOtherRepaymentFrequency;
    /**
     * 
     * @type {OBReadProduct2DataProductInnerOtherProductTypeRepaymentOtherAmountType}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeRepayment
     */
    'OtherAmountType'?: OBReadProduct2DataProductInnerOtherProductTypeRepaymentOtherAmountType;
    /**
     * 
     * @type {OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentFeeCharges}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeRepayment
     */
    'RepaymentFeeCharges'?: OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentFeeCharges;
    /**
     * 
     * @type {Array<OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentHolidayInner>}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeRepayment
     */
    'RepaymentHoliday'?: Array<OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentHolidayInner>;
}

type OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentTypeEnum = 'USBA' | 'USBU' | 'USCI' | 'USCS' | 'USER' | 'USFA' | 'USFB' | 'USFI' | 'USIO' | 'USOT' | 'USPF' | 'USRW' | 'USSL'
type OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentFrequencyEnum = 'SMDA' | 'SMFL' | 'SMFO' | 'SMHY' | 'SMMO' | 'SMOT' | 'SMQU' | 'SMWE' | 'SMYE'
type OBReadProduct2DataProductInnerOtherProductTypeRepaymentAmountTypeEnum = 'RABD' | 'RABL' | 'RACI' | 'RAFC' | 'RAIO' | 'RALT' | 'USOT'


