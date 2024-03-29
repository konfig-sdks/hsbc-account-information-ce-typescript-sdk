/*
Account Information API

In this document, you'll find the steps your organization needs to take to use our API services. Included in this guide are details of request and response messages used to support your organization’s integration. The intended audience for this document are **Technical Architects**, **Development Engineers**, **Test Engineers**, and **Operation & Maintenance Engineers** involved in development and support of your organization’s integration. Setting up our API Services is best completed with the assistance of your organization’s IT team, or someone with experience and knowledge of application programming interfaces. This should include experience with **JSON payloads**, **security** and **public key infrastructure (PKI)**. This Document describes the following request and response structure of HSBCnet - Account Information API. For detail implementation guidelines, please refer to the respective section from [develop.hsbc.com](https://develop.hsbc.com/ob-api-documentation/account-information-uk-personal-v319)


The version of the OpenAPI document: 3.1.11


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OBOtherCodeType10 } from './obother-code-type10';

/**
 * 
 * @export
 * @interface OBReadProduct2DataProductInnerOtherProductTypeProductDetails
 */
export interface OBReadProduct2DataProductInnerOtherProductTypeProductDetails {
    /**
     * 
     * @type {Array<string>}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeProductDetails
     */
    'Segment'?: Array<OBReadProduct2DataProductInnerOtherProductTypeProductDetailsSegmentEnum>;
    /**
     * The length/duration of the fee free period
     * @type {number}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeProductDetails
     */
    'FeeFreeLength'?: number;
    /**
     * The unit of period (days, weeks, months etc.) of the promotional length
     * @type {string}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeProductDetails
     */
    'FeeFreeLengthPeriod'?: OBReadProduct2DataProductInnerOtherProductTypeProductDetailsFeeFreeLengthPeriodEnum;
    /**
     * The maximum relevant charges that could accrue as defined fully in Part 7 of the CMA order
     * @type {string}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeProductDetails
     */
    'MonthlyMaximumCharge'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeProductDetails
     */
    'Notes'?: Array<string>;
    /**
     * 
     * @type {OBOtherCodeType10}
     * @memberof OBReadProduct2DataProductInnerOtherProductTypeProductDetails
     */
    'OtherSegment'?: OBOtherCodeType10;
}

type OBReadProduct2DataProductInnerOtherProductTypeProductDetailsSegmentEnum = 'GEAS' | 'GEBA' | 'GEBR' | 'GEBU' | 'GECI' | 'GECS' | 'GEFB' | 'GEFG' | 'GEG' | 'GEGR' | 'GEGS' | 'GEOT' | 'GEOV' | 'GEPA' | 'GEPR' | 'GERE' | 'GEST' | 'GEYA' | 'GEYO' | 'PSCA' | 'PSES' | 'PSNC' | 'PSNP' | 'PSRG' | 'PSSS' | 'PSST' | 'PSSW'
type OBReadProduct2DataProductInnerOtherProductTypeProductDetailsFeeFreeLengthPeriodEnum = 'PACT' | 'PDAY' | 'PHYR' | 'PMTH' | 'PQTR' | 'PWEK' | 'PYER'


