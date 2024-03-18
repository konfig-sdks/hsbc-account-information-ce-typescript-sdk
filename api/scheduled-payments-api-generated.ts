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
import { OBReadScheduledPayment3 } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * ScheduledPaymentsApi - axios parameter creator
 * @export
 */
export const ScheduledPaymentsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This endpoint enables to get Scheduled Payments by AccountId. Supported product types -Personal Current Account, Savings Account, Foreign Currency Accounts, Global Money.
         * @summary Get Account Scheduled Payments
         * @param {string} accountId AccountId
         * @param {string} [xFapiAuthDate] The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC
         * @param {string} [xFapiCustomerIpAddress] The PSU\&#39;s IP address if the PSU is currently logged in with the TPP.
         * @param {string} [xFapiInteractionId] An RFC4122 UID used as a correlation id.
         * @param {string} [xCustomerUserAgent] Indicates the user-agent that the PSU is using.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getByAccountId: async (accountId: string, xFapiAuthDate?: string, xFapiCustomerIpAddress?: string, xFapiInteractionId?: string, xCustomerUserAgent?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountId' is not null or undefined
            assertParamExists('getByAccountId', 'accountId', accountId)
            const localVarPath = `/accounts/{AccountId}/scheduled-payments`
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
                pathTemplate: '/accounts/{AccountId}/scheduled-payments',
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
 * ScheduledPaymentsApi - functional programming interface
 * @export
 */
export const ScheduledPaymentsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ScheduledPaymentsApiAxiosParamCreator(configuration)
    return {
        /**
         * This endpoint enables to get Scheduled Payments by AccountId. Supported product types -Personal Current Account, Savings Account, Foreign Currency Accounts, Global Money.
         * @summary Get Account Scheduled Payments
         * @param {ScheduledPaymentsApiGetByAccountIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getByAccountId(requestParameters: ScheduledPaymentsApiGetByAccountIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OBReadScheduledPayment3>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getByAccountId(requestParameters.accountId, requestParameters.xFapiAuthDate, requestParameters.xFapiCustomerIpAddress, requestParameters.xFapiInteractionId, requestParameters.xCustomerUserAgent, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * ScheduledPaymentsApi - factory interface
 * @export
 */
export const ScheduledPaymentsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ScheduledPaymentsApiFp(configuration)
    return {
        /**
         * This endpoint enables to get Scheduled Payments by AccountId. Supported product types -Personal Current Account, Savings Account, Foreign Currency Accounts, Global Money.
         * @summary Get Account Scheduled Payments
         * @param {ScheduledPaymentsApiGetByAccountIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getByAccountId(requestParameters: ScheduledPaymentsApiGetByAccountIdRequest, options?: AxiosRequestConfig): AxiosPromise<OBReadScheduledPayment3> {
            return localVarFp.getByAccountId(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getByAccountId operation in ScheduledPaymentsApi.
 * @export
 * @interface ScheduledPaymentsApiGetByAccountIdRequest
 */
export type ScheduledPaymentsApiGetByAccountIdRequest = {
    
    /**
    * AccountId
    * @type {string}
    * @memberof ScheduledPaymentsApiGetByAccountId
    */
    readonly accountId: string
    
    /**
    * The time when the PSU last logged in with the TPP.  All dates in the HTTP headers are represented as RFC 7231 Full Dates. An example is below:  Sun, 10 Sep 2017 19:43:31 UTC
    * @type {string}
    * @memberof ScheduledPaymentsApiGetByAccountId
    */
    readonly xFapiAuthDate?: string
    
    /**
    * The PSU\'s IP address if the PSU is currently logged in with the TPP.
    * @type {string}
    * @memberof ScheduledPaymentsApiGetByAccountId
    */
    readonly xFapiCustomerIpAddress?: string
    
    /**
    * An RFC4122 UID used as a correlation id.
    * @type {string}
    * @memberof ScheduledPaymentsApiGetByAccountId
    */
    readonly xFapiInteractionId?: string
    
    /**
    * Indicates the user-agent that the PSU is using.
    * @type {string}
    * @memberof ScheduledPaymentsApiGetByAccountId
    */
    readonly xCustomerUserAgent?: string
    
}

/**
 * ScheduledPaymentsApiGenerated - object-oriented interface
 * @export
 * @class ScheduledPaymentsApiGenerated
 * @extends {BaseAPI}
 */
export class ScheduledPaymentsApiGenerated extends BaseAPI {
    /**
     * This endpoint enables to get Scheduled Payments by AccountId. Supported product types -Personal Current Account, Savings Account, Foreign Currency Accounts, Global Money.
     * @summary Get Account Scheduled Payments
     * @param {ScheduledPaymentsApiGetByAccountIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ScheduledPaymentsApiGenerated
     */
    public getByAccountId(requestParameters: ScheduledPaymentsApiGetByAccountIdRequest, options?: AxiosRequestConfig) {
        return ScheduledPaymentsApiFp(this.configuration).getByAccountId(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}