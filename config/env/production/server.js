const dotenv = require('dotenv');
dotenv.config({ path: '.env.production' });

module.exports = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    url: env('PUBLIC_URL', ''),
    admin: {
        auth: {
            secret: env('ADMIN_JWT_SECRET', ''),
        },
    },
    app: {
        keys: env.array('APP_KEYS', [
            'SrctwrjF3JlOJQjtR1m/cV7Mqji9zfvSAwqI5ra2LbU=',
            'MgWduYqv9wUYTBi9jGg/LedxCR+4K3hVRiEQ8Xb3jjU=',
            'V2KaCFGFqnix9XYHLyiLdDaFIot1tPIvpGXY0Xx/beg=',
        ]),
    },
    webhooks: {
        populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
    },
});