import logger from './logger';
import dotenv from 'dotenv';

dotenv.config();

export const ENVIRONMENT = process.env.NODE_ENV;
const prod = ENVIRONMENT === 'production'; // Anything else is treated as 'dev'

// Required variables
export const SESSION_SECRET = process.env.SESSION_SECRET;
export const CLIENT_ID = process.env.CLIENT_ID;
export const CLIENT_SECRET = process.env.CLIENT_SECRET;

// Tolerable variables
export const FFDC_URL = process.env.FFDC_URL || 'https://api.fusionfabric.cloud';
export const PORT = process.env.PORT || 3000;
export const AUTHORIZATION_WELLKNOWN =
  process.env.AUTHORIZATION_WELLKNOWN || `${FFDC_URL}/login/v1/sandbox/.well-known/openid-configuration`;
export const LOGOUT_URL =
  process.env.LOGOUT_URL || 'https://login.microsoftonline.com/finastra.onmicrosoft.com/oauth2/v2.0/logout';

export let ROOT_URL = process.env.ROOT_URL;
export const TIMEOUT = process.env.TIMEOUT ? parseInt(process.env.TIMEOUT, 0) : 6000;

if (!ROOT_URL) {
  if (!prod) {
    ROOT_URL = 'http://localhost:3000';
  } else {
    logger.error('No redirect url. Set REDIRECT_URI environment variable.');
    process.exit(1);
  }
}

export const LOGIN_URL = `${ROOT_URL}/login`;

if (!SESSION_SECRET) {
  logger.error('No client secret. Set SESSION_SECRET environment variable.');
  process.exit(1);
}

if (!CLIENT_ID) {
  logger.error('No client id. Set CLIENT_ID environment variable.');
  process.exit(1);
}

if (!CLIENT_SECRET) {
  logger.error('No client secret. Set CLIENT_SECRET environment variable.');
  process.exit(1);
}


export const AuthConfig = {
  client_id: CLIENT_ID!,
  client_secret: CLIENT_SECRET!,
  wellKnown: AUTHORIZATION_WELLKNOWN,
  redirect_uri: `${LOGIN_URL}/callback`,
  logoutRedirect: `${LOGOUT_URL}?post_logout_redirect_uri=${LOGIN_URL}`
};
