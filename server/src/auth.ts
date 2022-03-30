import { Application, NextFunction, Request, Response } from 'express';
import passport from 'passport';
import request from 'request-promise';
import { v4 as uuidv4 } from 'uuid';
import { AuthConfig as config, LOGIN_URL, TIMEOUT } from './util/config';

const { Strategy, Issuer } = require('openid-client');
let issuer: any;

export async function initialize(app: Application) {
  passport.serializeUser<any, any>((user, done) => {
    done(undefined, user);
  });

  passport.deserializeUser((user, done) => {
    done(undefined, user);
  });

  app.use(passport.initialize());
  app.use(passport.session());

  Issuer.defaultHttpOptions = { timeout: TIMEOUT };
  issuer = await Issuer.discover(config.wellKnown);
  const client = new issuer.Client({
    client_id: config.client_id,
    client_secret: config.client_secret
  });
  client.CLOCK_TOLERANCE = 10;

  const params = {
    redirect_uri: config.redirect_uri,
    response_type: 'code',
    scope: config.scope,
    nonce: uuidv4()
  };

  passport.use(
    'oidc',
    new Strategy(
      { client, params, passReqToCallback: true },
      (req: Request, tokenset: any, done: (err: any, user: any) => void) => {
        done(null, {
          id: tokenset.claims.sub,
          username: tokenset.claims.name || tokenset.claims.username || tokenset.claims.sub,
          access_token: tokenset.access_token,
          refresh_token: tokenset.refresh_token,
          expires_at: tokenset.expires_at
        });
      }
    )
  );
}

export const refreshToken = (req: Request, res: Response, next: NextFunction) => {
  if (!issuer || !req.isAuthenticated()) {
    return next();
  }
  const user: any = req.user;

  const requestOptions = {
    uri: issuer.token_endpoint,
    method: 'POST',
    timeout: TIMEOUT,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    form: {
      client_id: config.client_id,
      client_secret: config.client_secret,
      grant_type: 'refresh_token',
      refresh_token: user.refresh_token,
      scope: config.scope
    }
  };

  request(requestOptions)
    .then(body => {
      const data = JSON.parse(body);
      req.user = { ...user, ...data };
      res.send('OK');
    })
    .catch(err => {
      console.error(err);
      res.status(401).send('Can not refresh token');
    });
};

export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect(LOGIN_URL);
};
