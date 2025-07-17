'use client';

import { useAuth0 } from '@auth0/auth0-react';
import ClientSideAuthProvider from '../components/ClientSideAuthProvider';
import { AuthButton } from '../components/AuthButton';
import React from 'react';

function HomeContent() {
  const { isAuthenticated, isLoading, user } = useAuth0();

  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-2xl font-bold">Loading...</h1>
      </div>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-4">Hello, World!</h1>
      
      {isAuthenticated ? (
        <div className="flex flex-col items-center">
          <p className="text-xl mb-4">Welcome, {user?.name}!</p>
          <p className="text-md mb-8">You are authenticated with Auth0</p>
        </div>
      ) : (
        <p className="text-xl mb-8">Please log in to access protected content</p>
      )}
      
      <AuthButton />
    </main>
  );
}

export default function Home() {
  return (
    <ClientSideAuthProvider children={<HomeContent />}>
    </ClientSideAuthProvider>
  );
}
