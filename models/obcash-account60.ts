/*
Account Information API

In this document, you'll find the steps your organization needs to take to use our API services. Included in this guide are details of request and response messages used to support your organization’s integration. The intended audience for this document are **Technical Architects**, **Development Engineers**, **Test Engineers**, and **Operation & Maintenance Engineers** involved in development and support of your organization’s integration. Setting up our API Services is best completed with the assistance of your organization’s IT team, or someone with experience and knowledge of application programming interfaces. This should include experience with **JSON payloads**, **security** and **public key infrastructure (PKI)**. This Document describes the following request and response structure of HSBCnet - Account Information API. For detail implementation guidelines, please refer to the respective section from [develop.hsbc.com](https://develop.hsbc.com/ob-api-documentation/account-information-uk-personal-v319)


The version of the OpenAPI document: 3.1.11


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Unambiguous identification of the account of the creditor, in the case of a debit transaction.
 * @export
 * @interface OBCashAccount60
 */
export interface OBCashAccount60 {
    /**
     * Name of the identification scheme, in a coded form as published in an external list.
     * @type {string}
     * @memberof OBCashAccount60
     */
    'SchemeName'?: OBCashAccount60SchemeNameEnum;
    /**
     * Identification assigned by an institution to identify an account. This identification is known by the account owner.
     * @type {string}
     * @memberof OBCashAccount60
     */
    'Identification'?: string;
    /**
     * The account name is the name or names of the account owner(s) represented at an account level, as displayed by the ASPSP\'s online channels. Note, the account name is not the product name or the nickname of the account.
     * @type {string}
     * @memberof OBCashAccount60
     */
    'Name'?: string;
    /**
     * This is secondary identification of the account, as assigned by the account servicing institution.  This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination).
     * @type {string}
     * @memberof OBCashAccount60
     */
    'SecondaryIdentification'?: string;
}

type OBCashAccount60SchemeNameEnum = 'UK.OBIE.BBAN' | 'UK.OBIE.IBAN' | 'UK.OBIE.PAN' | 'UK.OBIE.Paym' | 'UK.OBIE.SortCodeAccountNumber' | 'UK.OBIE.Wallet'


