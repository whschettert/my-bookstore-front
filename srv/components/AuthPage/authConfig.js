const authConfig = {
    clientId: 'YOUR_CLIENT_ID',              // OAuth2 client ID
    redirectUri: 'YOUR_REDIRECT_URI',        // Redirect URI after authentication
    authUri: 'YOUR_XSUAA_AUTH_URI',          // XSUAA authorization endpoint
    tokenUri: 'YOUR_XSUAA_TOKEN_URI',        // XSUAA token endpoint
    scope: 'openid',                         // OAuth2 scope (e.g., 'openid', 'profile')
  };
  
  export default authConfig;
  