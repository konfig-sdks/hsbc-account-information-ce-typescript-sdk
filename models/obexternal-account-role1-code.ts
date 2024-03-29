/*
Account Information API

In this document, you'll find the steps your organization needs to take to use our API services. Included in this guide are details of request and response messages used to support your organization’s integration. The intended audience for this document are **Technical Architects**, **Development Engineers**, **Test Engineers**, and **Operation & Maintenance Engineers** involved in development and support of your organization’s integration. Setting up our API Services is best completed with the assistance of your organization’s IT team, or someone with experience and knowledge of application programming interfaces. This should include experience with **JSON payloads**, **security** and **public key infrastructure (PKI)**. This Document describes the following request and response structure of HSBCnet - Account Information API. For detail implementation guidelines, please refer to the respective section from [develop.hsbc.com](https://develop.hsbc.com/ob-api-documentation/account-information-uk-personal-v319)


The version of the OpenAPI document: 3.1.11


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * A party’s role with respect to the related account.
 * @export
 * @enum {string}
 */
export type OBExternalAccountRole1Code = 'UK.OBIE.Administrator' | 'UK.OBIE.Beneficiary' | 'UK.OBIE.CustodianForMinor' | 'UK.OBIE.Granter' | 'UK.OBIE.LegalGuardian' | 'UK.OBIE.OtherParty' | 'UK.OBIE.PowerOfAttorney' | 'UK.OBIE.Principal' | 'UK.OBIE.Protector' | 'UK.OBIE.RegisteredShareholderName' | 'UK.OBIE.SecondaryOwner' | 'UK.OBIE.SeniorManagingOfficial' | 'UK.OBIE.Settlor' | 'UK.OBIE.SuccessorOnDeath'

