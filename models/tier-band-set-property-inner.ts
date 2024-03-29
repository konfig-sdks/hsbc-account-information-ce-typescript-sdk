/*
Account Information API

In this document, you'll find the steps your organization needs to take to use our API services. Included in this guide are details of request and response messages used to support your organization’s integration. The intended audience for this document are **Technical Architects**, **Development Engineers**, **Test Engineers**, and **Operation & Maintenance Engineers** involved in development and support of your organization’s integration. Setting up our API Services is best completed with the assistance of your organization’s IT team, or someone with experience and knowledge of application programming interfaces. This should include experience with **JSON payloads**, **security** and **public key infrastructure (PKI)**. This Document describes the following request and response structure of HSBCnet - Account Information API. For detail implementation guidelines, please refer to the respective section from [develop.hsbc.com](https://develop.hsbc.com/ob-api-documentation/account-information-uk-personal-v319)


The version of the OpenAPI document: 3.1.11


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { TierBandPropertyInner } from './tier-band-property-inner';

/**
 * The group of tiers or bands for which credit interest can be applied.
 * @export
 * @interface TierBandSetPropertyInner
 */
export interface TierBandSetPropertyInner {
    /**
     * The methodology of how credit interest is paid/applied. It can be:-  1. Banded Interest rates are banded. i.e. Increasing rate on whole balance as balance increases.  2. Tiered Interest rates are tiered. i.e. increasing rate for each tier as balance increases, but interest paid on tier fixed for that tier and not on whole balance.  3. Whole The same interest rate is applied irrespective of the BCA balance
     * @type {string}
     * @memberof TierBandSetPropertyInner
     */
    'TierBandMethod': TierBandSetPropertyInnerTierBandMethodEnum;
    /**
     * Methods of calculating interest
     * @type {string}
     * @memberof TierBandSetPropertyInner
     */
    'CalculationMethod'?: TierBandSetPropertyInnerCalculationMethodEnum;
    /**
     * Describes whether accrued interest is payable only to the BCA or to another bank account
     * @type {string}
     * @memberof TierBandSetPropertyInner
     */
    'Destination': TierBandSetPropertyInnerDestinationEnum;
    /**
     * Optional additional notes to supplement the Tier Band Set details
     * @type {Array<string>}
     * @memberof TierBandSetPropertyInner
     */
    'Notes'?: Array<string>;
    /**
     * Tier Band Details
     * @type {Array<TierBandPropertyInner>}
     * @memberof TierBandSetPropertyInner
     */
    'TierBand': Array<TierBandPropertyInner>;
}

type TierBandSetPropertyInnerTierBandMethodEnum = 'Banded' | 'Tiered' | 'Whole'
type TierBandSetPropertyInnerCalculationMethodEnum = 'Compound' | 'SimpleInterest'
type TierBandSetPropertyInnerDestinationEnum = 'PayAway' | 'SelfCredit'


