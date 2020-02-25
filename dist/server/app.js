"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const compression_1 = tslib_1.__importDefault(require("compression"));
const body_parser_1 = tslib_1.__importDefault(require("body-parser"));
const cookie_session_1 = tslib_1.__importDefault(require("cookie-session"));
const passport_1 = tslib_1.__importDefault(require("passport"));
const path_1 = tslib_1.__importDefault(require("path"));
const lusca_1 = tslib_1.__importDefault(require("lusca"));
const logger_1 = tslib_1.__importDefault(require("./util/logger"));
const auth = tslib_1.__importStar(require("./auth"));
const config_1 = require("./util/config");
const httpPorxy = require('http-proxy');
const queryString = require('querystring');
// Controllers (route handlers)
const userController = tslib_1.__importStar(require("./controllers/user"));
// Create Express server
const app = express_1.default();
const proxy = httpPorxy.createProxyServer({
    changeOrigin: true,
    proxyTimeout: config_1.TIMEOUT,
    secure: false,
    timeout: config_1.TIMEOUT
});
proxy.on('proxyReq', (proxyReq, req, res, options) => {
    if (req.user) {
        const user = req.user;
        proxyReq.setHeader('Authorization', `Bearer ${user.access_token}`);
    }
    if (!req.body || !Object.keys(req.body).length) {
        return;
    }
    const contentType = proxyReq.getHeader('Content-Type');
    let bodyData;
    if (contentType === 'application/json') {
        bodyData = JSON.stringify(req.body);
    }
    if (contentType === 'application/x-www-form-urlencoded') {
        bodyData = queryString.stringify(req.body);
    }
    if (bodyData) {
        proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
        proxyReq.write(bodyData);
    }
});
// Express configuration
app.set('port', config_1.PORT);
app.set('timeout', config_1.TIMEOUT);
app.set('views', path_1.default.join(__dirname, '../../server/views'));
app.set('view engine', 'pug');
app.use(compression_1.default());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(cookie_session_1.default({
    maxAge: 24 * 60 * 60 * 60 * 1000,
    name: 'FFDC_SSID',
    secure: false,
    secret: config_1.SESSION_SECRET,
    httpOnly: true
}));
auth.initialize(app).catch(ex => {
    logger_1.default.error(ex);
});
app.use(lusca_1.default.xframe('SAMEORIGIN'));
app.use(lusca_1.default.xssProtection(true));
app.get('/login', passport_1.default.authenticate('oidc'));
app.get('/login/callback', (req, res, next) => {
    if (req.query.error) {
        return res.redirect('/error');
    }
    passport_1.default.authenticate('oidc', (err, user, info) => {
        if (err || !user) {
            logger_1.default.error(err || info);
            return res.redirect('/login');
        }
        req.logIn(user, (error) => {
            if (error) {
                return res.redirect('/login');
            }
            return res.redirect('/');
        });
    })(req, res, next);
});
app.post('/refresh_token', auth.refreshToken);
app.get('/logout', (req, res) => {
    req.logout();
    if (req.session && typeof req.session.destroy === 'function') {
        req.session.destroy(() => {
            logger_1.default.info('Session is destroyed');
        });
    }
    delete req.session;
    res.redirect('/login');
});
app.get('/api/user', auth.isAuthenticated, userController.getUser);
app.use('/proxy', (req, res) => {
    proxy.web(req, res, {
        target: `${config_1.FFDC_URL}/retail-us/me/account/v1`
    }, (err) => {
        logger_1.default.error(err.message);
        res.writeHead(500, {
            'Content-Type': 'text/plain'
        });
        res.end('An error occurred while proxying the request');
    });
});
const appFolder = path_1.default.join(__dirname, '../ffdc-sample-design-system');
app.use(auth.isAuthenticated, express_1.default.static(appFolder, { fallthrough: true }), (rep, res) => {
    res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
    res.header('Access-Control-Allow-Origin', '*');
    res.sendFile('index.html', { root: appFolder });
});
exports.default = app;
//# sourceMappingURL=app.js.map