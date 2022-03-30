"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const passport_1 = tslib_1.__importDefault(require("passport"));
const request_promise_1 = tslib_1.__importDefault(require("request-promise"));
const uuid_1 = require("uuid");
const config_1 = require("./util/config");
const { Strategy, Issuer } = require('openid-client');
let issuer;
function initialize(app) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        passport_1.default.serializeUser((user, done) => {
            done(undefined, user);
        });
        passport_1.default.deserializeUser((user, done) => {
            done(undefined, user);
        });
        app.use(passport_1.default.initialize());
        app.use(passport_1.default.session());
        Issuer.defaultHttpOptions = { timeout: config_1.TIMEOUT };
        issuer = yield Issuer.discover(config_1.AuthConfig.wellKnown);
        const client = new issuer.Client({
            client_id: config_1.AuthConfig.client_id,
            client_secret: config_1.AuthConfig.client_secret
        });
        client.CLOCK_TOLERANCE = 10;
        const params = {
            redirect_uri: config_1.AuthConfig.redirect_uri,
            response_type: 'code',
            scope: config_1.AuthConfig.scope,
            nonce: uuid_1.v4()
        };
        passport_1.default.use('oidc', new Strategy({ client, params, passReqToCallback: true }, (req, tokenset, done) => {
            done(null, {
                id: tokenset.claims.sub,
                username: tokenset.claims.name || tokenset.claims.username || tokenset.claims.sub,
                access_token: tokenset.access_token,
                refresh_token: tokenset.refresh_token,
                expires_at: tokenset.expires_at
            });
        }));
    });
}
exports.initialize = initialize;
exports.refreshToken = (req, res, next) => {
    if (!issuer || !req.isAuthenticated()) {
        return next();
    }
    const user = req.user;
    const requestOptions = {
        uri: issuer.token_endpoint,
        method: 'POST',
        timeout: config_1.TIMEOUT,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        form: {
            client_id: config_1.AuthConfig.client_id,
            client_secret: config_1.AuthConfig.client_secret,
            grant_type: 'refresh_token',
            refresh_token: user.refresh_token,
            scope: config_1.AuthConfig.scope
        }
    };
    request_promise_1.default(requestOptions)
        .then(body => {
        const data = JSON.parse(body);
        req.user = Object.assign({}, user, data);
        res.send('OK');
    })
        .catch(err => {
        console.error(err);
        res.status(401).send('Can not refresh token');
    });
};
exports.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect(config_1.LOGIN_URL);
};
//# sourceMappingURL=auth.js.map