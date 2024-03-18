/*
Account Information API

In this document, you'll find the steps your organization needs to take to use our API services. Included in this guide are details of request and response messages used to support your organization’s integration. The intended audience for this document are **Technical Architects**, **Development Engineers**, **Test Engineers**, and **Operation & Maintenance Engineers** involved in development and support of your organization’s integration. Setting up our API Services is best completed with the assistance of your organization’s IT team, or someone with experience and knowledge of application programming interfaces. This should include experience with **JSON payloads**, **security** and **public key infrastructure (PKI)**. This Document describes the following request and response structure of HSBCnet - Account Information API. For detail implementation guidelines, please refer to the respective section from [develop.hsbc.com](https://develop.hsbc.com/ob-api-documentation/account-information-uk-personal-v319)


The version of the OpenAPI document: 3.1.11


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OBMinMaxType1Code } from './obmin-max-type1-code';
import { OBPeriod1Code } from './obperiod1-code';
import { OBReadProduct2DataProductInnerOtherProductTypeOverdraftOverdraftTierBandSetInnerOverdraftTierBandInnerOverdraftFeesChargesInnerOverdraftFeeChargeCapInnerOtherFeeTypeInner } from './obread-product2-data-product-inner-other-product-type-overdraft-overdraft-tier-band-set-inner-overdraft-tier-band-inner-overdraft-fees-charges-inner-overdraft-fee-charge-cap-inner-other-fee-type-inner';

/**
 * RepaymentFeeChargeCap sets daily, weekly, monthly, yearly limits on the fees that are charged
 * @export
 * @interface OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapInner
 */
export interface OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapInner {
    /**
     * 
     * @type {Array<string>}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapInner
     */
    'FeeType': Array<OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapInnerFeeTypeEnum>;
    /**
     * Min Max type
     * @type {OBMinMaxType1Code}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapInner
     */
    'MinMaxType': OBMinMaxType1Code;
    /**
     * fee/charges are captured dependent on the number of occurrences rather than capped at a particular amount
     * @type {number}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapInner
     */
    'FeeCapOccurrence'?: number;
    /**
     * Cap amount charged for a fee/charge (where it is charged in terms of an amount rather than a rate)
     * @type {string}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapInner
     */
    'FeeCapAmount'?: string;
    /**
     * Period e.g. day, week, month etc. for which the fee/charge is capped
     * @type {OBPeriod1Code}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapInner
     */
    'CappingPeriod'?: OBPeriod1Code;
    /**
     * 
     * @type {Array<string>}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapInner
     */
    'Notes'?: Array<string>;
    /**
     * 
     * @type {Array<OBReadProduct2DataProductInnerOtherProductTypeOverdraftOverdraftTierBandSetInnerOverdraftTierBandInnerOverdraftFeesChargesInnerOverdraftFeeChargeCapInnerOtherFeeTypeInner>}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapInner
     */
    'OtherFeeType'?: Array<OBReadProduct2DataProductInnerOtherProductTypeOverdraftOverdraftTierBandSetInnerOverdraftTierBandInnerOverdraftFeesChargesInnerOverdraftFeeChargeCapInnerOtherFeeTypeInner>;
}

type OBReadProduct2DataProductInnerOtherProductTypeRepaymentRepaymentFeeChargesRepaymentFeeChargeCapInnerFeeTypeEnum = 'FEPF' | 'FTOT' | 'FYAF' | 'FYAM' | 'FYAQ' | 'FYCP' | 'FYDB' | 'FYMI' | 'FYXX'


