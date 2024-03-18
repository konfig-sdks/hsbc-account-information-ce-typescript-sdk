/*
Account Information API

In this document, you'll find the steps your organization needs to take to use our API services. Included in this guide are details of request and response messages used to support your organization’s integration. The intended audience for this document are **Technical Architects**, **Development Engineers**, **Test Engineers**, and **Operation & Maintenance Engineers** involved in development and support of your organization’s integration. Setting up our API Services is best completed with the assistance of your organization’s IT team, or someone with experience and knowledge of application programming interfaces. This should include experience with **JSON payloads**, **security** and **public key infrastructure (PKI)**. This Document describes the following request and response structure of HSBCnet - Account Information API. For detail implementation guidelines, please refer to the respective section from [develop.hsbc.com](https://develop.hsbc.com/ob-api-documentation/account-information-uk-personal-v319)


The version of the OpenAPI document: 3.1.11


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OtherFeeTypeProperty1Inner } from './other-fee-type-property1-inner';

/**
 * Details about any caps (maximum charges) that apply to a particular fee/charge. Capping can either be based on an amount (in gbp), an amount (in items) or a rate.
 * @export
 * @interface OverdraftFeeChargeCapPropertyInner2
 */
export interface OverdraftFeeChargeCapPropertyInner2 {
    /**
     * Fee/charge type which is being capped
     * @type {Array<string>}
     * @memberof OverdraftFeeChargeCapPropertyInner2
     */
    'FeeType': Array<OverdraftFeeChargeCapPropertyInner2FeeTypeEnum>;
    /**
     * Min Max type
     * @type {string}
     * @memberof OverdraftFeeChargeCapPropertyInner2
     */
    'MinMaxType': OverdraftFeeChargeCapPropertyInner2MinMaxTypeEnum;
    /**
     * Indicates whether the advertised overdraft rate is guaranteed to be offered to a borrower by the bank e.g. if it’s part of a government scheme, or whether the rate may vary dependent on the applicant’s circumstances.
     * @type {number}
     * @memberof OverdraftFeeChargeCapPropertyInner2
     */
    'FeeCapOccurrence'?: number;
    /**
     * Cap amount charged for a fee/charge
     * @type {string}
     * @memberof OverdraftFeeChargeCapPropertyInner2
     */
    'FeeCapAmount'?: string;
    /**
     * Period e.g. day, week, month etc. for which the fee/charge is capped
     * @type {string}
     * @memberof OverdraftFeeChargeCapPropertyInner2
     */
    'CappingPeriod'?: OverdraftFeeChargeCapPropertyInner2CappingPeriodEnum;
    /**
     * Notes related to Overdraft fee charge cap
     * @type {Array<string>}
     * @memberof OverdraftFeeChargeCapPropertyInner2
     */
    'Notes'?: Array<string>;
    /**
     * Other fee type code which is not available in the standard code set
     * @type {Array<OtherFeeTypeProperty1Inner>}
     * @memberof OverdraftFeeChargeCapPropertyInner2
     */
    'OtherFeeType'?: Array<OtherFeeTypeProperty1Inner>;
}

type OverdraftFeeChargeCapPropertyInner2FeeTypeEnum = 'ArrangedOverdraft' | 'AnnualReview' | 'EmergencyBorrowing' | 'BorrowingItem' | 'OverdraftRenewal' | 'OverdraftSetup' | 'Surcharge' | 'TempOverdraft' | 'UnauthorisedBorrowing' | 'UnauthorisedPaidTrans' | 'Other' | 'UnauthorisedUnpaidTrans'
type OverdraftFeeChargeCapPropertyInner2MinMaxTypeEnum = 'Minimum' | 'Maximum'
type OverdraftFeeChargeCapPropertyInner2CappingPeriodEnum = 'Day' | 'Half Year' | 'Month' | 'Quarter' | 'Week' | 'Year'


