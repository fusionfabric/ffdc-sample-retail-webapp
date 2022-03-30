"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const logger_1 = tslib_1.__importDefault(require("./logger"));
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
const path_1 = require("path");
dotenv_1.default.config({ path: path_1.resolve(__dirname, '../../../.env') });
exports.ENVIRONMENT = process.env.NODE_ENV;
const prod = exports.ENVIRONMENT === 'production'; // Anything else is treated as 'dev'
// Required variables
exports.SESSION_SECRET = process.env.SESSION_SECRET;
exports.CLIENT_ID = process.env.CLIENT_ID;
exports.CLIENT_SECRET = process.env.CLIENT_SECRET;
exports.SCOPE = process.env.SCOPE;
// Tolerable variables
exports.FFDC_URL = process.env.FFDC_URL || 'https://api.fusionfabric.cloud';
exports.PORT = process.env.PORT || 3000;
exports.AUTHORIZATION_WELLKNOWN = process.env.AUTHORIZATION_WELLKNOWN || `${exports.FFDC_URL}/login/v1/sandbox/.well-known/openid-configuration`;
exports.LOGOUT_URL = process.env.LOGOUT_URL || 'https://login.microsoftonline.com/finastra.onmicrosoft.com/oauth2/v2.0/logout';
exports.HOST = process.env.HOST || (process.env.WEBSITE_HOSTNAME ? `https://${process.env.WEBSITE_HOSTNAME}` : '');
exports.ROOT_URL = exports.HOST ? exports.HOST : `http://localhost:${exports.PORT}`;
exports.TIMEOUT = process.env.TIMEOUT ? parseInt(process.env.TIMEOUT, 0) : 6000;
exports.LOGIN_URL = `${exports.ROOT_URL}/login`;
if (!exports.SESSION_SECRET) {
    logger_1.default.error('No client secret. Set SESSION_SECRET environment variable.');
    process.exit(1);
}
if (!exports.CLIENT_ID) {
    logger_1.default.error('No client id. Set CLIENT_ID environment variable.');
    process.exit(1);
}
if (!exports.CLIENT_SECRET) {
    logger_1.default.error('No client secret. Set CLIENT_SECRET environment variable.');
    process.exit(1);
}
exports.AuthConfig = {
    client_id: exports.CLIENT_ID,
    client_secret: exports.CLIENT_SECRET,
    wellKnown: exports.AUTHORIZATION_WELLKNOWN,
    redirect_uri: `${exports.LOGIN_URL}/callback`,
    logoutRedirect: `${exports.LOGOUT_URL}?post_logout_redirect_uri=${exports.LOGIN_URL}`,
    scope: exports.SCOPE
};
//# sourceMappingURL=config.js.map