<div align="left">

[![Visit Hsbc](./header.png)](https://hsbc.com)

# [Hsbc](https://hsbc.com)<a id="hsbc"></a>

In this document, you'll find the steps your organization needs to take to use our API services. Included in this guide are details of request and response messages used to support your organization’s integration. The intended audience for this document are **Technical Architects**, **Development Engineers**, **Test Engineers**, and **Operation & Maintenance Engineers** involved in development and support of your organization’s integration. Setting up our API Services is best completed with the assistance of your organization’s IT team, or someone with experience and knowledge of application programming interfaces. This should include experience with **JSON payloads**, **security** and **public key infrastructure (PKI)**. This Document describes the following request and response structure of HSBCnet - Account Information API. For detail implementation guidelines, please refer to the respective section from [develop.hsbc.com](https://develop.hsbc.com/ob-api-documentation/account-information-uk-personal-v319)


</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`hsbcaccountinformationce.accountAccessConsents.createConsent`](#hsbcaccountinformationceaccountaccessconsentscreateconsent)
  * [`hsbcaccountinformationce.accountAccessConsents.deleteConsent`](#hsbcaccountinformationceaccountaccessconsentsdeleteconsent)
  * [`hsbcaccountinformationce.accountAccessConsents.getByConsentId`](#hsbcaccountinformationceaccountaccessconsentsgetbyconsentid)
  * [`hsbcaccountinformationce.accounts.getAll`](#hsbcaccountinformationceaccountsgetall)
  * [`hsbcaccountinformationce.accounts.getBalancesByAccountId`](#hsbcaccountinformationceaccountsgetbalancesbyaccountid)
  * [`hsbcaccountinformationce.balances.getByAccountId`](#hsbcaccountinformationcebalancesgetbyaccountid)
  * [`hsbcaccountinformationce.beneficiaries.getByAccountId`](#hsbcaccountinformationcebeneficiariesgetbyaccountid)
  * [`hsbcaccountinformationce.directDebits.getByAccountId`](#hsbcaccountinformationcedirectdebitsgetbyaccountid)
  * [`hsbcaccountinformationce.parties.getByAccountId`](#hsbcaccountinformationcepartiesgetbyaccountid)
  * [`hsbcaccountinformationce.products.getByAccountId`](#hsbcaccountinformationceproductsgetbyaccountid)
  * [`hsbcaccountinformationce.scheduledPayments.getByAccountId`](#hsbcaccountinformationcescheduledpaymentsgetbyaccountid)
  * [`hsbcaccountinformationce.standingOrders.getByAccountId`](#hsbcaccountinformationcestandingordersgetbyaccountid)
  * [`hsbcaccountinformationce.transactions.getByAccountId`](#hsbcaccountinformationcetransactionsgetbyaccountid)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=HSBC&serviceName=AccountInformationCE&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { HsbcAccountInformationCe } from "hsbc-account-information-ce-typescript-sdk";

const hsbcaccountinformationce = new HsbcAccountInformationCe({
  // Defining the base path is optional and defaults to https://sandbox.ob.hsbcnet.com/mock/ce/obie/open-banking/v3.1/aisp
  // basePath: "https://sandbox.ob.hsbcnet.com/mock/ce/obie/open-banking/v3.1/aisp",
  accessToken: "ACCESS_TOKEN",
  oauthClientId: "CLIENT_ID",
  oauthClientSecret: "CLIENT_SECRET",
});

const createConsentResponse =
  await hsbcaccountinformationce.accountAccessConsents.createConsent({
    Data: {
      Permissions: ["ReadAccountsBasic"],
      ExpirationDateTime: "2022-11-15 09:14:41",
      TransactionFromDateTime: "test value",
      TransactionToDateTime: "2022-11-15 09:14:49",
    },
    Risk: {},
  });

console.log(createConsentResponse);
```

## Reference<a id="reference"></a>


### `hsbcaccountinformationce.accountAccessConsents.createConsent`<a id="hsbcaccountinformationceaccountaccessconsentscreateconsent"></a>

This endpoint enables TPP to create account access consent. Supports all product types -Personal Current Account, Savings Account, Credit Cards, Foreign Currency Accounts, Global Money, Working Capital

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createConsentResponse =
  await hsbcaccountinformationce.accountAccessConsents.createConsent({
    Data: {
      Permissions: ["ReadAccountsBasic"],
      ExpirationDateTime: "2022-11-15 09:14:41",
      TransactionFromDateTime: "test value",
      TransactionToDateTime: "2022-11-15 09:14:49",
    },
    Risk: {},
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### Data: [`OBReadConsent1Data`](./models/obread-consent1-data.ts)<a id="data-obreadconsent1datamodelsobread-consent1-datats"></a>

##### Risk: `object`<a id="risk-object"></a>

The Risk section is sent by the initiating party to the ASPSP. It is used to specify additional details for risk scoring for Account Info.

##### xFapiAuthDate: `string`<a id="xfapiauthdate-string"></a>

The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC

##### xFapiCustomerIpAddress: `string`<a id="xfapicustomeripaddress-string"></a>

The PSU\'s IP address if the PSU is currently logged in with the TPP.

##### xFapiInteractionId: `string`<a id="xfapiinteractionid-string"></a>

An RFC4122 UID used as a correlation id.

##### xCustomerUserAgent: `string`<a id="xcustomeruseragent-string"></a>

Indicates the user-agent that the PSU is using.

#### 🔄 Return<a id="🔄-return"></a>

[OBReadConsentResponse1](./models/obread-consent-response1.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account-access-consents` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hsbcaccountinformationce.accountAccessConsents.deleteConsent`<a id="hsbcaccountinformationceaccountaccessconsentsdeleteconsent"></a>

This endpoint enables TPP to delete account access consent

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteConsentResponse =
  await hsbcaccountinformationce.accountAccessConsents.deleteConsent({
    consentId: "consentId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### consentId: `string`<a id="consentid-string"></a>

ConsentId

##### xFapiAuthDate: `string`<a id="xfapiauthdate-string"></a>

The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC

##### xFapiCustomerIpAddress: `string`<a id="xfapicustomeripaddress-string"></a>

The PSU\'s IP address if the PSU is currently logged in with the TPP.

##### xFapiInteractionId: `string`<a id="xfapiinteractionid-string"></a>

An RFC4122 UID used as a correlation id.

##### xCustomerUserAgent: `string`<a id="xcustomeruseragent-string"></a>

Indicates the user-agent that the PSU is using.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account-access-consents/{ConsentId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hsbcaccountinformationce.accountAccessConsents.getByConsentId`<a id="hsbcaccountinformationceaccountaccessconsentsgetbyconsentid"></a>

This endpoint enables TPP to get account access consent by ConsentId. Supports all product types -Personal Current Account, Savings Account, Credit Cards, Foreign Currency Accounts, Global Money Working Capital

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByConsentIdResponse =
  await hsbcaccountinformationce.accountAccessConsents.getByConsentId({
    consentId: "consentId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### consentId: `string`<a id="consentid-string"></a>

ConsentId

##### xFapiAuthDate: `string`<a id="xfapiauthdate-string"></a>

The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC

##### xFapiCustomerIpAddress: `string`<a id="xfapicustomeripaddress-string"></a>

The PSU\'s IP address if the PSU is currently logged in with the TPP.

##### xFapiInteractionId: `string`<a id="xfapiinteractionid-string"></a>

An RFC4122 UID used as a correlation id.

##### xCustomerUserAgent: `string`<a id="xcustomeruseragent-string"></a>

Indicates the user-agent that the PSU is using.

#### 🔄 Return<a id="🔄-return"></a>

[OBReadConsentResponse1](./models/obread-consent-response1.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account-access-consents/{ConsentId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hsbcaccountinformationce.accounts.getAll`<a id="hsbcaccountinformationceaccountsgetall"></a>

This endpoint enables to get Accounts. Supports all product types -Personal Current Account, Savings Account, Credit Cards, Foreign Currency Accounts, Global Money, Working Capital

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllResponse = await hsbcaccountinformationce.accounts.getAll({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### xFapiAuthDate: `string`<a id="xfapiauthdate-string"></a>

The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC

##### xFapiCustomerIpAddress: `string`<a id="xfapicustomeripaddress-string"></a>

The PSU\'s IP address if the PSU is currently logged in with the TPP.

##### xFapiInteractionId: `string`<a id="xfapiinteractionid-string"></a>

An RFC4122 UID used as a correlation id.

##### xCustomerUserAgent: `string`<a id="xcustomeruseragent-string"></a>

Indicates the user-agent that the PSU is using.

#### 🔄 Return<a id="🔄-return"></a>

[OBReadAccount6](./models/obread-account6.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hsbcaccountinformationce.accounts.getBalancesByAccountId`<a id="hsbcaccountinformationceaccountsgetbalancesbyaccountid"></a>

This endpoint enables to get Balances by AccountId. Supports all product types -Personal Current Account, Savings Account, Credit Cards, Foreign Currency Accounts, Global Money, Working Capital

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBalancesByAccountIdResponse =
  await hsbcaccountinformationce.accounts.getBalancesByAccountId({
    accountId: "accountId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### accountId: `string`<a id="accountid-string"></a>

AccountId

##### xFapiAuthDate: `string`<a id="xfapiauthdate-string"></a>

The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC

##### xFapiCustomerIpAddress: `string`<a id="xfapicustomeripaddress-string"></a>

The PSU\'s IP address if the PSU is currently logged in with the TPP.

##### xFapiInteractionId: `string`<a id="xfapiinteractionid-string"></a>

An RFC4122 UID used as a correlation id.

##### xCustomerUserAgent: `string`<a id="xcustomeruseragent-string"></a>

Indicates the user-agent that the PSU is using.

#### 🔄 Return<a id="🔄-return"></a>

[OBReadAccount6](./models/obread-account6.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{AccountId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hsbcaccountinformationce.balances.getByAccountId`<a id="hsbcaccountinformationcebalancesgetbyaccountid"></a>

This endpoint enables to get Balances by AccountId. Supports all product types -Personal Current Account, Savings Account, Credit Cards, Foreign Currency Accounts, Global Money, Working Capital

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByAccountIdResponse =
  await hsbcaccountinformationce.balances.getByAccountId({
    accountId: "accountId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### accountId: `string`<a id="accountid-string"></a>

AccountId

##### xFapiAuthDate: `string`<a id="xfapiauthdate-string"></a>

The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC

##### xFapiCustomerIpAddress: `string`<a id="xfapicustomeripaddress-string"></a>

The PSU\'s IP address if the PSU is currently logged in with the TPP.

##### xFapiInteractionId: `string`<a id="xfapiinteractionid-string"></a>

An RFC4122 UID used as a correlation id.

##### xCustomerUserAgent: `string`<a id="xcustomeruseragent-string"></a>

Indicates the user-agent that the PSU is using.

#### 🔄 Return<a id="🔄-return"></a>

[OBReadBalance1](./models/obread-balance1.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{AccountId}/balances` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hsbcaccountinformationce.beneficiaries.getByAccountId`<a id="hsbcaccountinformationcebeneficiariesgetbyaccountid"></a>

This endpoint enables to get Beneficiaries by AccountId

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByAccountIdResponse =
  await hsbcaccountinformationce.beneficiaries.getByAccountId({
    accountId: "accountId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### accountId: `string`<a id="accountid-string"></a>

AccountId

##### xFapiAuthDate: `string`<a id="xfapiauthdate-string"></a>

The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC

##### xFapiCustomerIpAddress: `string`<a id="xfapicustomeripaddress-string"></a>

The PSU\'s IP address if the PSU is currently logged in with the TPP.

##### xFapiInteractionId: `string`<a id="xfapiinteractionid-string"></a>

An RFC4122 UID used as a correlation id.

##### xCustomerUserAgent: `string`<a id="xcustomeruseragent-string"></a>

Indicates the user-agent that the PSU is using.

#### 🔄 Return<a id="🔄-return"></a>

[OBReadBeneficiary5](./models/obread-beneficiary5.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{AccountId}/beneficiaries` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hsbcaccountinformationce.directDebits.getByAccountId`<a id="hsbcaccountinformationcedirectdebitsgetbyaccountid"></a>

This endpoint enables to get Direct Debits by AccountId. Supported product type is Personal Current Account

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByAccountIdResponse =
  await hsbcaccountinformationce.directDebits.getByAccountId({
    accountId: "accountId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### accountId: `string`<a id="accountid-string"></a>

AccountId

##### xFapiAuthDate: `string`<a id="xfapiauthdate-string"></a>

The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC

##### xFapiCustomerIpAddress: `string`<a id="xfapicustomeripaddress-string"></a>

The PSU\'s IP address if the PSU is currently logged in with the TPP.

##### xFapiInteractionId: `string`<a id="xfapiinteractionid-string"></a>

An RFC4122 UID used as a correlation id.

##### xCustomerUserAgent: `string`<a id="xcustomeruseragent-string"></a>

Indicates the user-agent that the PSU is using.

#### 🔄 Return<a id="🔄-return"></a>

[OBReadDirectDebit2](./models/obread-direct-debit2.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{AccountId}/direct-debits` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hsbcaccountinformationce.parties.getByAccountId`<a id="hsbcaccountinformationcepartiesgetbyaccountid"></a>

This endpoint enables to get Parties by AccountId

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByAccountIdResponse =
  await hsbcaccountinformationce.parties.getByAccountId({
    accountId: "accountId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### accountId: `string`<a id="accountid-string"></a>

AccountId

##### xFapiAuthDate: `string`<a id="xfapiauthdate-string"></a>

The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC

##### xFapiCustomerIpAddress: `string`<a id="xfapicustomeripaddress-string"></a>

The PSU\'s IP address if the PSU is currently logged in with the TPP.

##### xFapiInteractionId: `string`<a id="xfapiinteractionid-string"></a>

An RFC4122 UID used as a correlation id.

##### xCustomerUserAgent: `string`<a id="xcustomeruseragent-string"></a>

Indicates the user-agent that the PSU is using.

#### 🔄 Return<a id="🔄-return"></a>

[OBReadParty3](./models/obread-party3.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{AccountId}/parties` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hsbcaccountinformationce.products.getByAccountId`<a id="hsbcaccountinformationceproductsgetbyaccountid"></a>

This endpoint enables to get Products by AccountId

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByAccountIdResponse =
  await hsbcaccountinformationce.products.getByAccountId({
    accountId: "accountId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### accountId: `string`<a id="accountid-string"></a>

AccountId

##### xFapiAuthDate: `string`<a id="xfapiauthdate-string"></a>

The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC

##### xFapiCustomerIpAddress: `string`<a id="xfapicustomeripaddress-string"></a>

The PSU\'s IP address if the PSU is currently logged in with the TPP.

##### xFapiInteractionId: `string`<a id="xfapiinteractionid-string"></a>

An RFC4122 UID used as a correlation id.

##### xCustomerUserAgent: `string`<a id="xcustomeruseragent-string"></a>

Indicates the user-agent that the PSU is using.

#### 🔄 Return<a id="🔄-return"></a>

[OBReadProduct2](./models/obread-product2.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{AccountId}/product` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hsbcaccountinformationce.scheduledPayments.getByAccountId`<a id="hsbcaccountinformationcescheduledpaymentsgetbyaccountid"></a>

This endpoint enables to get Scheduled Payments by AccountId. Supported product types -Personal Current Account, Savings Account, Foreign Currency Accounts, Global Money.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByAccountIdResponse =
  await hsbcaccountinformationce.scheduledPayments.getByAccountId({
    accountId: "accountId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### accountId: `string`<a id="accountid-string"></a>

AccountId

##### xFapiAuthDate: `string`<a id="xfapiauthdate-string"></a>

The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC

##### xFapiCustomerIpAddress: `string`<a id="xfapicustomeripaddress-string"></a>

The PSU\'s IP address if the PSU is currently logged in with the TPP.

##### xFapiInteractionId: `string`<a id="xfapiinteractionid-string"></a>

An RFC4122 UID used as a correlation id.

##### xCustomerUserAgent: `string`<a id="xcustomeruseragent-string"></a>

Indicates the user-agent that the PSU is using.

#### 🔄 Return<a id="🔄-return"></a>

[OBReadScheduledPayment3](./models/obread-scheduled-payment3.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{AccountId}/scheduled-payments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hsbcaccountinformationce.standingOrders.getByAccountId`<a id="hsbcaccountinformationcestandingordersgetbyaccountid"></a>

This endpoint enables to get Standing Orders by AccountId. Supported product types -Personal Current Account, Foreign Currency Accounts.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByAccountIdResponse =
  await hsbcaccountinformationce.standingOrders.getByAccountId({
    accountId: "accountId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### accountId: `string`<a id="accountid-string"></a>

AccountId

##### xFapiAuthDate: `string`<a id="xfapiauthdate-string"></a>

The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC

##### xFapiCustomerIpAddress: `string`<a id="xfapicustomeripaddress-string"></a>

The PSU\'s IP address if the PSU is currently logged in with the TPP.

##### xFapiInteractionId: `string`<a id="xfapiinteractionid-string"></a>

An RFC4122 UID used as a correlation id.

##### xCustomerUserAgent: `string`<a id="xcustomeruseragent-string"></a>

Indicates the user-agent that the PSU is using.

#### 🔄 Return<a id="🔄-return"></a>

[OBReadStandingOrder6](./models/obread-standing-order6.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{AccountId}/standing-orders` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `hsbcaccountinformationce.transactions.getByAccountId`<a id="hsbcaccountinformationcetransactionsgetbyaccountid"></a>

This endpoint enables to get account Transactions by AccountId. Supports all product types -Personal Current Account, Savings Account, Credit Cards, Foreign Currency Accounts, Global Money, Working Capital

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByAccountIdResponse =
  await hsbcaccountinformationce.transactions.getByAccountId({
    accountId: "accountId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### accountId: `string`<a id="accountid-string"></a>

AccountId

##### xFapiAuthDate: `string`<a id="xfapiauthdate-string"></a>

The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC

##### xFapiCustomerIpAddress: `string`<a id="xfapicustomeripaddress-string"></a>

The PSU\'s IP address if the PSU is currently logged in with the TPP.

##### xFapiInteractionId: `string`<a id="xfapiinteractionid-string"></a>

An RFC4122 UID used as a correlation id.

##### xCustomerUserAgent: `string`<a id="xcustomeruseragent-string"></a>

Indicates the user-agent that the PSU is using.

##### fromBookingDateTime: `string`<a id="frombookingdatetime-string"></a>

The UTC ISO 8601 Date Time to filter transactions FROM NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the ASPSP must ignore the timezone component.

##### toBookingDateTime: `string`<a id="tobookingdatetime-string"></a>

The UTC ISO 8601 Date Time to filter transactions TO NB Time component is optional - set to 00:00:00 for just Date. If the Date Time contains a timezone, the ASPSP must ignore the timezone component.

#### 🔄 Return<a id="🔄-return"></a>

[OBReadTransaction6](./models/obread-transaction6.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/accounts/{AccountId}/transactions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
