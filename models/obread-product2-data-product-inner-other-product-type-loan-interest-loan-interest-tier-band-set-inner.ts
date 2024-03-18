/*
Account Information API

In this document, you'll find the steps your organization needs to take to use our API services. Included in this guide are details of request and response messages used to support your organization’s integration. The intended audience for this document are **Technical Architects**, **Development Engineers**, **Test Engineers**, and **Operation & Maintenance Engineers** involved in development and support of your organization’s integration. Setting up our API Services is best completed with the assistance of your organization’s IT team, or someone with experience and knowledge of application programming interfaces. This should include experience with **JSON payloads**, **security** and **public key infrastructure (PKI)**. This Document describes the following request and response structure of HSBCnet - Account Information API. For detail implementation guidelines, please refer to the respective section from [develop.hsbc.com](https://develop.hsbc.com/ob-api-documentation/account-information-uk-personal-v319)


The version of the OpenAPI document: 3.1.11


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OBInterestCalculationMethod1Code } from './obinterest-calculation-method1-code';
import { OBOtherCodeType10 } from './obother-code-type10';
import { OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestTierBandInner } from './obread-product2-data-product-inner-other-product-type-loan-interest-loan-interest-tier-band-set-inner-loan-interest-tier-band-inner';
import { OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestTierBandInnerLoanInterestFeesChargesInner } from './obread-product2-data-product-inner-other-product-type-loan-interest-loan-interest-tier-band-set-inner-loan-interest-tier-band-inner-loan-interest-fees-charges-inner';

/**
 * The group of tiers or bands for which debit interest can be applied.
 * @export
 * @interface OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInner
 */
export interface OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInner {
    /**
     * The methodology of how credit interest is charged. It can be:- 1. Banded Interest rates are banded. i.e. Increasing rate on whole balance as balance increases. 2. Tiered Interest rates are tiered. i.e. increasing rate for each tier as balance increases, but interest paid on tier fixed for that tier and not on whole balance. 3. Whole The same interest rate is applied irrespective of the SME Loan balance
     * @type {string}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInner
     */
    'TierBandMethod': OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerTierBandMethodEnum;
    /**
     * Loan interest tierbandset identification. Used by  loan providers for internal use purpose.
     * @type {string}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInner
     */
    'Identification'?: string;
    /**
     * Methods of calculating interest
     * @type {OBInterestCalculationMethod1Code}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInner
     */
    'CalculationMethod': OBInterestCalculationMethod1Code;
    /**
     * 
     * @type {Array<string>}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInner
     */
    'Notes'?: Array<string>;
    /**
     * 
     * @type {OBOtherCodeType10}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInner
     */
    'OtherCalculationMethod'?: OBOtherCodeType10;
    /**
     * 
     * @type {Array<OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestTierBandInner>}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInner
     */
    'LoanInterestTierBand': Array<OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestTierBandInner>;
    /**
     * 
     * @type {Array<OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestTierBandInnerLoanInterestFeesChargesInner>}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInner
     */
    'LoanInterestFeesCharges'?: Array<OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestTierBandInnerLoanInterestFeesChargesInner>;
}

type OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerTierBandMethodEnum = 'INBA' | 'INTI' | 'INWH'

