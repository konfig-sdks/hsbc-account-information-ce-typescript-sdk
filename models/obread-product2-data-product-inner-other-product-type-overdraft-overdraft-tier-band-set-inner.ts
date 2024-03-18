/*
Account Information API

In this document, you'll find the steps your organization needs to take to use our API services. Included in this guide are details of request and response messages used to support your organization’s integration. The intended audience for this document are **Technical Architects**, **Development Engineers**, **Test Engineers**, and **Operation & Maintenance Engineers** involved in development and support of your organization’s integration. Setting up our API Services is best completed with the assistance of your organization’s IT team, or someone with experience and knowledge of application programming interfaces. This should include experience with **JSON payloads**, **security** and **public key infrastructure (PKI)**. This Document describes the following request and response structure of HSBCnet - Account Information API. For detail implementation guidelines, please refer to the respective section from [develop.hsbc.com](https://develop.hsbc.com/ob-api-documentation/account-information-uk-personal-v319)


The version of the OpenAPI document: 3.1.11


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OBReadProduct2DataProductInnerOtherProductTypeOverdraftOverdraftTierBandSetInnerOverdraftFeesChargesInner } from './obread-product2-data-product-inner-other-product-type-overdraft-overdraft-tier-band-set-inner-overdraft-fees-charges-inner';
import { OBReadProduct2DataProductInnerOtherProductTypeOverdraftOverdraftTierBandSetInnerOverdraftTierBandInner } from './obread-product2-data-product-inner-other-product-type-overdraft-overdraft-tier-band-set-inner-overdraft-tier-band-inner';

/**
 * Tier band set details
 * @export
 * @interface OBReadProduct2DataProductInnerOtherProductTypeOverdraftOverdraftTierBandSetInner
 */
export interface OBReadProduct2DataProductInnerOtherProductTypeOverdraftOverdraftTierBandSetInner {
    /**
     * The methodology of how overdraft is charged. It can be: \'Whole\'  Where the same charge/rate is applied to the entirety of the overdraft balance (where charges are applicable).  \'Tiered\' Where different charges/rates are applied dependent on overdraft maximum and minimum balance amount tiers defined by the lending financial organisation \'Banded\' Where different charges/rates are applied dependent on overdraft maximum and minimum balance amount bands defined by a government organisation.
     * @type {string}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeOverdraftOverdraftTierBandSetInner
     */
    'TierBandMethod': OBReadProduct2DataProductInnerOtherProductTypeOverdraftOverdraftTierBandSetInnerTierBandMethodEnum;
    /**
     * An overdraft can either be \'committed\' which means that the facility cannot be withdrawn without reasonable notification before it\'s agreed end date, or \'on demand\' which means that the financial institution can demand repayment at any point in time.
     * @type {string}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeOverdraftOverdraftTierBandSetInner
     */
    'OverdraftType'?: OBReadProduct2DataProductInnerOtherProductTypeOverdraftOverdraftTierBandSetInnerOverdraftTypeEnum;
    /**
     * Unique and unambiguous identification of a  Tier Band for a overdraft product.
     * @type {string}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeOverdraftOverdraftTierBandSetInner
     */
    'Identification'?: string;
    /**
     * Indicates if the Overdraft is authorised (Y) or unauthorised (N)
     * @type {boolean}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeOverdraftOverdraftTierBandSetInner
     */
    'AuthorisedIndicator'?: boolean;
    /**
     * When a customer exceeds their credit limit, a financial institution will not charge the customer unauthorised overdraft charges if they do not exceed by more than the buffer amount. Note: Authorised overdraft charges may still apply.
     * @type {string}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeOverdraftOverdraftTierBandSetInner
     */
    'BufferAmount'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeOverdraftOverdraftTierBandSetInner
     */
    'Notes'?: Array<string>;
    /**
     * 
     * @type {Array<OBReadProduct2DataProductInnerOtherProductTypeOverdraftOverdraftTierBandSetInnerOverdraftTierBandInner>}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeOverdraftOverdraftTierBandSetInner
     */
    'OverdraftTierBand': Array<OBReadProduct2DataProductInnerOtherProductTypeOverdraftOverdraftTierBandSetInnerOverdraftTierBandInner>;
    /**
     * 
     * @type {Array<OBReadProduct2DataProductInnerOtherProductTypeOverdraftOverdraftTierBandSetInnerOverdraftFeesChargesInner>}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeOverdraftOverdraftTierBandSetInner
     */
    'OverdraftFeesCharges'?: Array<OBReadProduct2DataProductInnerOtherProductTypeOverdraftOverdraftTierBandSetInnerOverdraftFeesChargesInner>;
}

type OBReadProduct2DataProductInnerOtherProductTypeOverdraftOverdraftTierBandSetInnerTierBandMethodEnum = 'INBA' | 'INTI' | 'INWH'
type OBReadProduct2DataProductInnerOtherProductTypeOverdraftOverdraftTierBandSetInnerOverdraftTypeEnum = 'OVCO' | 'OVOD' | 'OVOT'

