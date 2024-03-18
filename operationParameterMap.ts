type Parameter = {
    name: string
}
type Entry = {
    parameters: Parameter[]
}
export const operationParameterMap: Record<string, Entry> = {
    '/account-access-consents-POST': {
        parameters: [
            {
                name: 'Data'
            },
            {
                name: 'Risk'
            },
            {
                name: 'x-fapi-auth-date'
            },
            {
                name: 'x-fapi-customer-ip-address'
            },
            {
                name: 'x-fapi-interaction-id'
            },
            {
                name: 'x-customer-user-agent'
            },
        ]
    },
    '/account-access-consents/{ConsentId}-DELETE': {
        parameters: [
            {
                name: 'ConsentId'
            },
            {
                name: 'x-fapi-auth-date'
            },
            {
                name: 'x-fapi-customer-ip-address'
            },
            {
                name: 'x-fapi-interaction-id'
            },
            {
                name: 'x-customer-user-agent'
            },
        ]
    },
    '/account-access-consents/{ConsentId}-GET': {
        parameters: [
            {
                name: 'ConsentId'
            },
            {
                name: 'x-fapi-auth-date'
            },
            {
                name: 'x-fapi-customer-ip-address'
            },
            {
                name: 'x-fapi-interaction-id'
            },
            {
                name: 'x-customer-user-agent'
            },
        ]
    },
    '/accounts-GET': {
        parameters: [
            {
                name: 'x-fapi-auth-date'
            },
            {
                name: 'x-fapi-customer-ip-address'
            },
            {
                name: 'x-fapi-interaction-id'
            },
            {
                name: 'x-customer-user-agent'
            },
        ]
    },
    '/accounts/{AccountId}-GET': {
        parameters: [
            {
                name: 'AccountId'
            },
            {
                name: 'x-fapi-auth-date'
            },
            {
                name: 'x-fapi-customer-ip-address'
            },
            {
                name: 'x-fapi-interaction-id'
            },
            {
                name: 'x-customer-user-agent'
            },
        ]
    },
    '/accounts/{AccountId}/balances-GET': {
        parameters: [
            {
                name: 'AccountId'
            },
            {
                name: 'x-fapi-auth-date'
            },
            {
                name: 'x-fapi-customer-ip-address'
            },
            {
                name: 'x-fapi-interaction-id'
            },
            {
                name: 'x-customer-user-agent'
            },
        ]
    },
    '/accounts/{AccountId}/beneficiaries-GET': {
        parameters: [
            {
                name: 'AccountId'
            },
            {
                name: 'x-fapi-auth-date'
            },
            {
                name: 'x-fapi-customer-ip-address'
            },
            {
                name: 'x-fapi-interaction-id'
            },
            {
                name: 'x-customer-user-agent'
            },
        ]
    },
    '/accounts/{AccountId}/direct-debits-GET': {
        parameters: [
            {
                name: 'AccountId'
            },
            {
                name: 'x-fapi-auth-date'
            },
            {
                name: 'x-fapi-customer-ip-address'
            },
            {
                name: 'x-fapi-interaction-id'
            },
            {
                name: 'x-customer-user-agent'
            },
        ]
    },
    '/accounts/{AccountId}/parties-GET': {
        parameters: [
            {
                name: 'AccountId'
            },
            {
                name: 'x-fapi-auth-date'
            },
            {
                name: 'x-fapi-customer-ip-address'
            },
            {
                name: 'x-fapi-interaction-id'
            },
            {
                name: 'x-customer-user-agent'
            },
        ]
    },
    '/accounts/{AccountId}/product-GET': {
        parameters: [
            {
                name: 'AccountId'
            },
            {
                name: 'x-fapi-auth-date'
            },
            {
                name: 'x-fapi-customer-ip-address'
            },
            {
                name: 'x-fapi-interaction-id'
            },
            {
                name: 'x-customer-user-agent'
            },
        ]
    },
    '/accounts/{AccountId}/scheduled-payments-GET': {
        parameters: [
            {
                name: 'AccountId'
            },
            {
                name: 'x-fapi-auth-date'
            },
            {
                name: 'x-fapi-customer-ip-address'
            },
            {
                name: 'x-fapi-interaction-id'
            },
            {
                name: 'x-customer-user-agent'
            },
        ]
    },
    '/accounts/{AccountId}/standing-orders-GET': {
        parameters: [
            {
                name: 'AccountId'
            },
            {
                name: 'x-fapi-auth-date'
            },
            {
                name: 'x-fapi-customer-ip-address'
            },
            {
                name: 'x-fapi-interaction-id'
            },
            {
                name: 'x-customer-user-agent'
            },
        ]
    },
    '/accounts/{AccountId}/transactions-GET': {
        parameters: [
            {
                name: 'AccountId'
            },
            {
                name: 'x-fapi-auth-date'
            },
            {
                name: 'x-fapi-customer-ip-address'
            },
            {
                name: 'x-fapi-interaction-id'
            },
            {
                name: 'x-customer-user-agent'
            },
            {
                name: 'fromBookingDateTime'
            },
            {
                name: 'toBookingDateTime'
            },
        ]
    },
}