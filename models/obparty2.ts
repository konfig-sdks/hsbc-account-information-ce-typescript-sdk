/*
Account Information API

In this document, you'll find the steps your organization needs to take to use our API services. Included in this guide are details of request and response messages used to support your organization’s integration. The intended audience for this document are **Technical Architects**, **Development Engineers**, **Test Engineers**, and **Operation & Maintenance Engineers** involved in development and support of your organization’s integration. Setting up our API Services is best completed with the assistance of your organization’s IT team, or someone with experience and knowledge of application programming interfaces. This should include experience with **JSON payloads**, **security** and **public key infrastructure (PKI)**. This Document describes the following request and response structure of HSBCnet - Account Information API. For detail implementation guidelines, please refer to the respective section from [develop.hsbc.com](https://develop.hsbc.com/ob-api-documentation/account-information-uk-personal-v319)


The version of the OpenAPI document: 3.1.11


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OBExternalAccountRole1Code } from './obexternal-account-role1-code';
import { OBExternalLegalStructureType1Code } from './obexternal-legal-structure-type1-code';
import { OBExternalPartyType1Code } from './obexternal-party-type1-code';
import { OBParty2AddressInner } from './obparty2-address-inner';
import { OBPartyRelationships1 } from './obparty-relationships1';

/**
 * 
 * @export
 * @interface OBParty2
 */
export interface OBParty2 {
    /**
     * A unique and immutable identifier used to identify the customer resource. This identifier has no meaning to the account owner.
     * @type {string}
     * @memberof OBParty2
     */
    'PartyId': string;
    /**
     * Number assigned by an agent to identify its customer.
     * @type {string}
     * @memberof OBParty2
     */
    'PartyNumber'?: string;
    /**
     * Party type, in a coded form.
     * @type {OBExternalPartyType1Code}
     * @memberof OBParty2
     */
    'PartyType'?: OBExternalPartyType1Code;
    /**
     * Name by which a party is known and which is usually used to identify that party.
     * @type {string}
     * @memberof OBParty2
     */
    'Name'?: string;
    /**
     * Specifies a character string with a maximum length of 350 characters.
     * @type {string}
     * @memberof OBParty2
     */
    'FullLegalName'?: string;
    /**
     * Legal standing of the party.
     * @type {OBExternalLegalStructureType1Code}
     * @memberof OBParty2
     */
    'LegalStructure'?: OBExternalLegalStructureType1Code;
    /**
     * 
     * @type {boolean}
     * @memberof OBParty2
     */
    'BeneficialOwnership'?: boolean;
    /**
     * A party’s role with respect to the related account.
     * @type {OBExternalAccountRole1Code}
     * @memberof OBParty2
     */
    'AccountRole'?: OBExternalAccountRole1Code;
    /**
     * Address for electronic mail (e-mail).
     * @type {string}
     * @memberof OBParty2
     */
    'EmailAddress'?: string;
    /**
     * Collection of information that identifies a phone number, as defined by telecom services.
     * @type {string}
     * @memberof OBParty2
     */
    'Phone'?: string;
    /**
     * Collection of information that identifies a mobile phone number, as defined by telecom services.
     * @type {string}
     * @memberof OBParty2
     */
    'Mobile'?: string;
    /**
     * 
     * @type {OBPartyRelationships1}
     * @memberof OBParty2
     */
    'Relationships'?: OBPartyRelationships1;
    /**
     * 
     * @type {Array<OBParty2AddressInner>}
     * @memberof OBParty2
     */
    'Address'?: Array<OBParty2AddressInner>;
}

