/* tslint:disable */
/* eslint-disable */
/*
Account Information API

In this document, you'll find the steps your organization needs to take to use our API services. Included in this guide are details of request and response messages used to support your organization’s integration. The intended audience for this document are **Technical Architects**, **Development Engineers**, **Test Engineers**, and **Operation & Maintenance Engineers** involved in development and support of your organization’s integration. Setting up our API Services is best completed with the assistance of your organization’s IT team, or someone with experience and knowledge of application programming interfaces. This should include experience with **JSON payloads**, **security** and **public key infrastructure (PKI)**. This Document describes the following request and response structure of HSBCnet - Account Information API. For detail implementation guidelines, please refer to the respective section from [develop.hsbc.com](https://develop.hsbc.com/ob-api-documentation/account-information-uk-personal-v319)


The version of the OpenAPI document: 3.1.11


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
import { setOAuthToObject } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { OBErrorResponse1 } from '../models';
// @ts-ignore
import { OBReadAccount6 } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * AccountsApi - axios parameter creator
 * @export
 */
export const AccountsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This endpoint enables to get Accounts. Supports all product types -Personal Current Account, Savings Account, Credit Cards, Foreign Currency Accounts, Global Money, Working Capital
         * @summary Get Accounts
         * @param {string} [xFapiAuthDate] The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC
         * @param {string} [xFapiCustomerIpAddress] The PSU\&#39;s IP address if the PSU is currently logged in with the TPP.
         * @param {string} [xFapiInteractionId] An RFC4122 UID used as a correlation id.
         * @param {string} [xCustomerUserAgent] Indicates the user-agent that the PSU is using.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAll: async (xFapiAuthDate?: string, xFapiCustomerIpAddress?: string, xFapiInteractionId?: string, xCustomerUserAgent?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/accounts`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)
            // authentication PSUOAuth2Security required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "PSUOAuth2Security", ["accounts"], configuration)
            if (xFapiAuthDate != null) {
                localVarHeaderParameter['x-fapi-auth-date'] = String(xFapiAuthDate);
            }

            if (xFapiCustomerIpAddress != null) {
                localVarHeaderParameter['x-fapi-customer-ip-address'] = String(xFapiCustomerIpAddress);
            }

            if (xFapiInteractionId != null) {
                localVarHeaderParameter['x-fapi-interaction-id'] = String(xFapiInteractionId);
            }

            if (xCustomerUserAgent != null) {
                localVarHeaderParameter['x-customer-user-agent'] = String(xCustomerUserAgent);
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/accounts',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This endpoint enables to get Balances by AccountId. Supports all product types -Personal Current Account, Savings Account, Credit Cards, Foreign Currency Accounts, Global Money, Working Capital
         * @summary Get Accounts by AccountId
         * @param {string} accountId AccountId
         * @param {string} [xFapiAuthDate] The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC
         * @param {string} [xFapiCustomerIpAddress] The PSU\&#39;s IP address if the PSU is currently logged in with the TPP.
         * @param {string} [xFapiInteractionId] An RFC4122 UID used as a correlation id.
         * @param {string} [xCustomerUserAgent] Indicates the user-agent that the PSU is using.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBalancesByAccountId: async (accountId: string, xFapiAuthDate?: string, xFapiCustomerIpAddress?: string, xFapiInteractionId?: string, xCustomerUserAgent?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('getBalancesByAccountId', 'accountId', accountId)
            const localVarPath = `/accounts/{AccountId}`
                .replace(`{${"AccountId"}}`, encodeURIComponent(String(accountId !== undefined ? accountId : `-AccountId-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)
            // authentication PSUOAuth2Security required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "PSUOAuth2Security", ["accounts"], configuration)
            if (xFapiAuthDate != null) {
                localVarHeaderParameter['x-fapi-auth-date'] = String(xFapiAuthDate);
            }

            if (xFapiCustomerIpAddress != null) {
                localVarHeaderParameter['x-fapi-customer-ip-address'] = String(xFapiCustomerIpAddress);
            }

            if (xFapiInteractionId != null) {
                localVarHeaderParameter['x-fapi-interaction-id'] = String(xFapiInteractionId);
            }

            if (xCustomerUserAgent != null) {
                localVarHeaderParameter['x-customer-user-agent'] = String(xCustomerUserAgent);
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/accounts/{AccountId}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AccountsApi - functional programming interface
 * @export
 */
export const AccountsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AccountsApiAxiosParamCreator(configuration)
    return {
        /**
         * This endpoint enables to get Accounts. Supports all product types -Personal Current Account, Savings Account, Credit Cards, Foreign Currency Accounts, Global Money, Working Capital
         * @summary Get Accounts
         * @param {AccountsApiGetAllRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAll(requestParameters: AccountsApiGetAllRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OBReadAccount6>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAll(requestParameters.xFapiAuthDate, requestParameters.xFapiCustomerIpAddress, requestParameters.xFapiInteractionId, requestParameters.xCustomerUserAgent, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * This endpoint enables to get Balances by AccountId. Supports all product types -Personal Current Account, Savings Account, Credit Cards, Foreign Currency Accounts, Global Money, Working Capital
         * @summary Get Accounts by AccountId
         * @param {AccountsApiGetBalancesByAccountIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getBalancesByAccountId(requestParameters: AccountsApiGetBalancesByAccountIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OBReadAccount6>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getBalancesByAccountId(requestParameters.accountId, requestParameters.xFapiAuthDate, requestParameters.xFapiCustomerIpAddress, requestParameters.xFapiInteractionId, requestParameters.xCustomerUserAgent, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AccountsApi - factory interface
 * @export
 */
export const AccountsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AccountsApiFp(configuration)
    return {
        /**
         * This endpoint enables to get Accounts. Supports all product types -Personal Current Account, Savings Account, Credit Cards, Foreign Currency Accounts, Global Money, Working Capital
         * @summary Get Accounts
         * @param {AccountsApiGetAllRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAll(requestParameters: AccountsApiGetAllRequest = {}, options?: AxiosRequestConfig): AxiosPromise<OBReadAccount6> {
            return localVarFp.getAll(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * This endpoint enables to get Balances by AccountId. Supports all product types -Personal Current Account, Savings Account, Credit Cards, Foreign Currency Accounts, Global Money, Working Capital
         * @summary Get Accounts by AccountId
         * @param {AccountsApiGetBalancesByAccountIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBalancesByAccountId(requestParameters: AccountsApiGetBalancesByAccountIdRequest, options?: AxiosRequestConfig): AxiosPromise<OBReadAccount6> {
            return localVarFp.getBalancesByAccountId(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getAll operation in AccountsApi.
 * @export
 * @interface AccountsApiGetAllRequest
 */
export type AccountsApiGetAllRequest = {
    
    /**
    * The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC
    * @type {string}
    * @memberof AccountsApiGetAll
    */
    readonly xFapiAuthDate?: string
    
    /**
    * The PSU\'s IP address if the PSU is currently logged in with the TPP.
    * @type {string}
    * @memberof AccountsApiGetAll
    */
    readonly xFapiCustomerIpAddress?: string
    
    /**
    * An RFC4122 UID used as a correlation id.
    * @type {string}
    * @memberof AccountsApiGetAll
    */
    readonly xFapiInteractionId?: string
    
    /**
    * Indicates the user-agent that the PSU is using.
    * @type {string}
    * @memberof AccountsApiGetAll
    */
    readonly xCustomerUserAgent?: string
    
}

/**
 * Request parameters for getBalancesByAccountId operation in AccountsApi.
 * @export
 * @interface AccountsApiGetBalancesByAccountIdRequest
 */
export type AccountsApiGetBalancesByAccountIdRequest = {
    
    /**
    * AccountId
    * @type {string}
    * @memberof AccountsApiGetBalancesByAccountId
    */
    readonly accountId: string
    
    /**
    * The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC
    * @type {string}
    * @memberof AccountsApiGetBalancesByAccountId
    */
    readonly xFapiAuthDate?: string
    
    /**
    * The PSU\'s IP address if the PSU is currently logged in with the TPP.
    * @type {string}
    * @memberof AccountsApiGetBalancesByAccountId
    */
    readonly xFapiCustomerIpAddress?: string
    
    /**
    * An RFC4122 UID used as a correlation id.
    * @type {string}
    * @memberof AccountsApiGetBalancesByAccountId
    */
    readonly xFapiInteractionId?: string
    
    /**
    * Indicates the user-agent that the PSU is using.
    * @type {string}
    * @memberof AccountsApiGetBalancesByAccountId
    */
    readonly xCustomerUserAgent?: string
    
}

/**
 * AccountsApiGenerated - object-oriented interface
 * @export
 * @class AccountsApiGenerated
 * @extends {BaseAPI}
 */
export class AccountsApiGenerated extends BaseAPI {
    /**
     * This endpoint enables to get Accounts. Supports all product types -Personal Current Account, Savings Account, Credit Cards, Foreign Currency Accounts, Global Money, Working Capital
     * @summary Get Accounts
     * @param {AccountsApiGetAllRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsApiGenerated
     */
    public getAll(requestParameters: AccountsApiGetAllRequest = {}, options?: AxiosRequestConfig) {
        return AccountsApiFp(this.configuration).getAll(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This endpoint enables to get Balances by AccountId. Supports all product types -Personal Current Account, Savings Account, Credit Cards, Foreign Currency Accounts, Global Money, Working Capital
     * @summary Get Accounts by AccountId
     * @param {AccountsApiGetBalancesByAccountIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsApiGenerated
     */
    public getBalancesByAccountId(requestParameters: AccountsApiGetBalancesByAccountIdRequest, options?: AxiosRequestConfig) {
        return AccountsApiFp(this.configuration).getBalancesByAccountId(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
