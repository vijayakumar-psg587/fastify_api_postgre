export const APP_CONSTANTS = {
    CHAR: {
        COMMA: ',',
        HYPEN: '-',
        SLASH: '/',
        FULL_STOP: '.',
    },
    SERVER: {
        REQ_ID: 'FASTIFY-GRAPHQL',
    },
    COMMON: {
        APP_ENV_DEV: 'dev',
        APP_ENV_PROD: 'prod',
        APP_NAME: 'fastify-auth-sample',
        DEFAULT_DATE_TIME_FORMAT: 'HHHH-MM-DD hh:mm:ss:SSSS',
        DEFAULT_DNS_FORMAT: 'yyyy-MM-dd HH:mm:ss.SSSS',
        USER_ID: 'APP-ID',
    },
    CORS: {
        HEADERS: [
            'Access-Control-Allow-Origin',
            'Access-Control-Allow-Methods',
            'Access-Control-Allow-Headers',
            'Access-Control-Max-Age',
            'Access-Control-Allow-Credentials',
        ],
        WHITELIST: ['127.0.0.0', '127.0.0.0:3002', 'localhost:3002', '0.0.0.0:3002', '*', 'localhost', '*'],
        ALLOW_HEADERS: ['Content-type', 'Authorization', 'Origin', 'X-Forwaded-for', 'Referrer', 'Origin'],
        ALLOW_METHODS: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
        ALLOW_CRED: true,
    },
    DATABASE: {
        CONN_NAME: 'graphQLConnection',
    },
    REGEX: {
        USER: /^[aA]{1}[\d]{6}$/,
        EMAIL: /^[a-zA-Z0-9]+\@[a-zA-Z0-9]+.com$/
    },
    DECORATORS: {
        REQ: {
            CAP_TYPE_CREATE : 'capabilityTypeCreate',
            ASSOCIATE_CREATE : 'associateCreate'
        },
        RES: {
            CAP_TYPE_DETAIL : 'CapabilityTypeDetail'
        }
    }
};
