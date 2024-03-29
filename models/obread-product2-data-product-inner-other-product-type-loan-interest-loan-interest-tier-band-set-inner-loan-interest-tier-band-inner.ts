/*
Account Information API

In this document, you'll find the steps your organization needs to take to use our API services. Included in this guide are details of request and response messages used to support your organization’s integration. The intended audience for this document are **Technical Architects**, **Development Engineers**, **Test Engineers**, and **Operation & Maintenance Engineers** involved in development and support of your organization’s integration. Setting up our API Services is best completed with the assistance of your organization’s IT team, or someone with experience and knowledge of application programming interfaces. This should include experience with **JSON payloads**, **security** and **public key infrastructure (PKI)**. This Document describes the following request and response structure of HSBCnet - Account Information API. For detail implementation guidelines, please refer to the respective section from [develop.hsbc.com](https://develop.hsbc.com/ob-api-documentation/account-information-uk-personal-v319)


The version of the OpenAPI document: 3.1.11


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OBInterestFixedVariableType1Code } from './obinterest-fixed-variable-type1-code';
import { OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestTierBandInnerLoanInterestFeesChargesInner } from './obread-product2-data-product-inner-other-product-type-loan-interest-loan-interest-tier-band-set-inner-loan-interest-tier-band-inner-loan-interest-fees-charges-inner';
import { OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestTierBandInnerOtherLoanProviderInterestRateType } from './obread-product2-data-product-inner-other-product-type-loan-interest-loan-interest-tier-band-set-inner-loan-interest-tier-band-inner-other-loan-provider-interest-rate-type';

/**
 * Tier Band Details
 * @export
 * @interface OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestTierBandInner
 */
export interface OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestTierBandInner {
    /**
     * Unique and unambiguous identification of a  Tier Band for a SME Loan.
     * @type {string}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestTierBandInner
     */
    'Identification'?: string;
    /**
     * Minimum loan value for which the loan interest tier applies.
     * @type {string}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestTierBandInner
     */
    'TierValueMinimum': string;
    /**
     * Maximum loan value for which the loan interest tier applies.
     * @type {string}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestTierBandInner
     */
    'TierValueMaximum'?: string;
    /**
     * Minimum loan term for which the loan interest tier applies.
     * @type {number}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestTierBandInner
     */
    'TierValueMinTerm': number;
    /**
     * The unit of period (days, weeks, months etc.) of the Minimum Term
     * @type {string}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestTierBandInner
     */
    'MinTermPeriod': OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestTierBandInnerMinTermPeriodEnum;
    /**
     * Maximum loan term for which the loan interest tier applies.
     * @type {number}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestTierBandInner
     */
    'TierValueMaxTerm'?: number;
    /**
     * The unit of period (days, weeks, months etc.) of the Maximum Term
     * @type {string}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestTierBandInner
     */
    'MaxTermPeriod'?: OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestTierBandInnerMaxTermPeriodEnum;
    /**
     * Type of interest rate, Fixed or Variable
     * @type {OBInterestFixedVariableType1Code}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestTierBandInner
     */
    'FixedVariableInterestRateType': OBInterestFixedVariableType1Code;
    /**
     * The annual equivalent rate (AER) is interest that is calculated under the assumption that any interest paid is combined with the original balance and the next interest payment will be based on the slightly higher account balance. Overall, this means that interest can be compounded several times in a year depending on the number of times that interest payments are made.  For SME Loan, this APR is the representative APR which includes any account fees.
     * @type {string}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestTierBandInner
     */
    'RepAPR': string;
    /**
     * Interest rate types, other than APR, which financial institutions may use to describe the annual interest rate payable for the SME Loan.
     * @type {string}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestTierBandInner
     */
    'LoanProviderInterestRateType'?: OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestTierBandInnerLoanProviderInterestRateTypeEnum;
    /**
     * Loan provider Interest for the SME Loan product
     * @type {string}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestTierBandInner
     */
    'LoanProviderInterestRate'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestTierBandInner
     */
    'Notes'?: Array<string>;
    /**
     * 
     * @type {OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestTierBandInnerOtherLoanProviderInterestRateType}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestTierBandInner
     */
    'OtherLoanProviderInterestRateType'?: OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestTierBandInnerOtherLoanProviderInterestRateType;
    /**
     * 
     * @type {Array<OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestTierBandInnerLoanInterestFeesChargesInner>}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestTierBandInner
     */
    'LoanInterestFeesCharges'?: Array<OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestTierBandInnerLoanInterestFeesChargesInner>;
}

type OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestTierBandInnerMinTermPeriodEnum = 'PACT' | 'PDAY' | 'PHYR' | 'PMTH' | 'PQTR' | 'PWEK' | 'PYER'
type OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestTierBandInnerMaxTermPeriodEnum = 'PACT' | 'PDAY' | 'PHYR' | 'PMTH' | 'PQTR' | 'PWEK' | 'PYER'
type OBReadProduct2DataProductInnerOtherProductTypeLoanInterestLoanInterestTierBandSetInnerLoanInterestTierBandInnerLoanProviderInterestRateTypeEnum = 'INBB' | 'INFR' | 'INGR' | 'INLR' | 'INNE' | 'INOT'


