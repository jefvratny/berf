import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';

export const AuthButton = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  return (
    <div className="flex flex-col items-center gap-2">
      {isAuthenticated ? (
        <>
          <div className="text-sm mb-2">
            Logged in as: <span className="font-bold">{user?.name}</span>
          </div>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Log Out
          </button>
        </>
      ) : (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => loginWithRedirect()}
        >
          Log In
        </button>
      )}
    </div>
  );
};
