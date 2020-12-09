import express, { Request, Response } from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import session from 'express-session';

import passport from 'passport';
import path from 'path';
import lusca from 'lusca';
import { ClientRequest } from 'http';

import logger from './util/logger';

import * as auth from './auth';
import { PORT, SESSION_SECRET, TIMEOUT, FFDC_URL } from './util/config';
const httpPorxy = require('http-proxy');
const queryString = require('querystring');

// Controllers (route handlers)
import * as userController from './controllers/user';

// Create Express server
const app = express();
const proxy = httpPorxy.createProxyServer({
  changeOrigin: true,
  proxyTimeout: TIMEOUT,
  secure: false,
  timeout: TIMEOUT
});

proxy.on('proxyReq', (proxyReq: ClientRequest, req: Request, res: Response, options: any) => {
  if (req.user) {
    const user: any = req.user;
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
app.set('port', PORT);
app.set('timeout', TIMEOUT);
app.set('views', path.join(__dirname, '../../server/views'));
app.set('view engine', 'pug');
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Un comment these code to activate  cookie session
// app.use(
//   cookieSession({
//     maxAge: 24 * 60 * 60 * 60 * 1000,
//     name: 'FFDC_SSID',
//     secure: false,
//     secret: SESSION_SECRET,
//     httpOnly: true
//   })
// );

// InMemory Session
app.use(
  session({
    name: 'FFDC_SSID',
    secret: SESSION_SECRET || ''
  })
);

auth.initialize(app).catch(ex => {
  logger.error(ex);
});

app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.xssProtection(true));

app.get('/login', passport.authenticate('oidc'));
app.get('/login/callback', (req, res, next) => {
  if (req.query.error) {
    return res.redirect('/error');
  }
  passport.authenticate('oidc', (err, user, info) => {
    if (err || !user) {
      logger.error(err || info);
      return res.redirect('/login');
    }
    req.logIn(user, (error: any) => {
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
      logger.info('Session is destroyed');
    });
  }
  delete req.session;

  res.redirect('/login');
});

app.get('/api/user', auth.isAuthenticated, userController.getUser);
app.use('/proxy', (req, res) => {
  proxy.web(
    req,
    res,
    {
      target: `${FFDC_URL}/retail-us/me/account/v1`
    },
    (err: any) => {
      logger.error(err.message);
      res.writeHead(500, {
        'Content-Type': 'text/plain'
      });
      res.end('An error occurred while proxying the request');
    }
  );
});

const appFolder = path.join(__dirname, '../ffdc-sample-design-system');
app.use(auth.isAuthenticated, express.static(appFolder, { fallthrough: true }), (rep, res) => {
  res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
  res.header('Access-Control-Allow-Origin', '*');
  res.sendFile('index.html', { root: appFolder });
});

export default app;
