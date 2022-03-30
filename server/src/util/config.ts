import logger from './logger';
import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config({ path: resolve(__dirname, '../../../.env') });

export const ENVIRONMENT = process.env.NODE_ENV;
const prod = ENVIRONMENT === 'production'; // Anything else is treated as 'dev'

// Required variables
export const SESSION_SECRET = process.env.SESSION_SECRET;
export const CLIENT_ID = process.env.CLIENT_ID;
export const CLIENT_SECRET = process.env.CLIENT_SECRET;
export const SCOPE = process.env.SCOPE;

// Tolerable variables
export const FFDC_URL = process.env.FFDC_URL || 'https://api.fusionfabric.cloud';
export const PORT = process.env.PORT || 3000;
export const AUTHORIZATION_WELLKNOWN =
  process.env.AUTHORIZATION_WELLKNOWN || `${FFDC_URL}/login/v1/sandbox/.well-known/openid-configuration`;
export const LOGOUT_URL =
  process.env.LOGOUT_URL || 'https://login.microsoftonline.com/finastra.onmicrosoft.com/oauth2/v2.0/logout';

export const HOST = process.env.HOST || (process.env.WEBSITE_HOSTNAME ? `https://${process.env.WEBSITE_HOSTNAME}` : '');
export const ROOT_URL = HOST ? HOST : `http://localhost:${PORT}`;
export const TIMEOUT = process.env.TIMEOUT ? parseInt(process.env.TIMEOUT, 0) : 6000;

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
  logoutRedirect: `${LOGOUT_URL}?post_logout_redirect_uri=${LOGIN_URL}`,
  scope: SCOPE
};
