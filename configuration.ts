/* tslint:disable */
/* eslint-disable */
/*
Account Information API

In this document, you'll find the steps your organization needs to take to use our API services. Included in this guide are details of request and response messages used to support your organization’s integration. The intended audience for this document are **Technical Architects**, **Development Engineers**, **Test Engineers**, and **Operation & Maintenance Engineers** involved in development and support of your organization’s integration. Setting up our API Services is best completed with the assistance of your organization’s IT team, or someone with experience and knowledge of application programming interfaces. This should include experience with **JSON payloads**, **security** and **public key infrastructure (PKI)**. This Document describes the following request and response structure of HSBCnet - Account Information API. For detail implementation guidelines, please refer to the respective section from [develop.hsbc.com](https://develop.hsbc.com/ob-api-documentation/account-information-uk-personal-v319)


The version of the OpenAPI document: 3.1.11


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/


type ApiKey =
  | string
  | ((keyParamName: string) => string)
  | ((keyParamName: string) => Promise<string>)
  | { [apiKeyName: string]: string | undefined };

export interface ConfigurationParameters {
    accessToken?: string | Promise<string> | ((name?: string, scopes?: string[]) => string) | ((name?: string, scopes?: string[]) => Promise<string>);

    basePath?: string;
    baseOptions?: any;
    oauthTokenUrl?: string;
    oauthClientId?: string;
    oauthClientSecret?: string;
    userAgent?: string;
    formDataCtor?: new () => any;
}

export class Configuration {
    /**
     * parameter for apiKey security
     * @param name security name
     * @memberof Configuration
     */
    apiKey?: ApiKey;
    /**
     * parameter for basic security
     *
     * @type {string}
     * @memberof Configuration
     */
    username?: string;
    /**
     * token url for OAuth2 Application flow
     */
    oauthTokenUrl?: string;
    /**
     * client id for OAuth2 Application flow
     */
    oauthClientId?: string;
    /**
     * client secret for OAuth2 Application flow
     */
    oauthClientSecret?: string;
    /**
     * parameter for basic security
     *
     * @type {string}
     * @memberof Configuration
     */
    password?: string;
    /**
     * parameter for oauth2 security
     * @param name security name
     * @param scopes oauth2 scope
     * @memberof Configuration
     */
    accessToken?: string | Promise<string> | ((name?: string, scopes?: string[]) => string) | ((name?: string, scopes?: string[]) => Promise<string>);
    /**
     * override base path
     *
     * @type {string}
     * @memberof Configuration
     */
    basePath?: string;
    /**
     * base options for axios calls
     *
     * @type {any}
     * @memberof Configuration
     */
    baseOptions?: any;
    /**
     * The FormData constructor that will be used to create multipart form data
     * requests. You can inject this here so that execution environments that
     * do not support the FormData class can still run the generated client.
     *
     * @type {new () => FormData}
     */
    formDataCtor?: new () => any;
    /**
     * Default User-Agent header
     */
    userAgent: string;

    constructor(param: ConfigurationParameters = {}) {

        
        if (this.apiKey === undefined) {
            this.apiKey = {}
        }
        this.accessToken = param.accessToken;
        
        this.basePath = param.basePath;
        this.baseOptions = param.baseOptions ?? {};
        this.userAgent = param.userAgent === undefined ? "Konfig/3.1.11/typescript" : param.userAgent;
        this.oauthTokenUrl = param.oauthTokenUrl;
        this.oauthClientId = param.oauthClientId;
        this.oauthClientSecret = param.oauthClientSecret;
        this.formDataCtor = param.formDataCtor;
    }

    /**
     * Check if the given MIME is a JSON MIME.
     * JSON MIME examples:
     *   application/json
     *   application/json; charset=UTF8
     *   APPLICATION/JSON
     *   application/vnd.company+json
     * @param mime - MIME (Multipurpose Internet Mail Extensions)
     * @return True if the given MIME is JSON, false otherwise.
     */
    public isJsonMime(mime: string): boolean {
        const jsonMime: RegExp = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime !== null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    }
}
