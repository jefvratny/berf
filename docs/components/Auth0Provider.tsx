import { Auth0Provider } from '@auth0/auth0-react';
import { useRouter } from 'next/router';
import { auth0Config } from '../utils/auth0-config';
import React, { ReactNode } from 'react';

interface Auth0ProviderWithNavigateProps {
  children: ReactNode;
}

export const Auth0ProviderWithNavigate = ({ children }: Auth0ProviderWithNavigateProps) => {
  const { domain, clientId, redirectUri } = auth0Config;

  if (!domain || !clientId) {
    return <>{children}</>;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
    >
      {children}
    </Auth0Provider>
  );
};
