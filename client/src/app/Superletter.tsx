import React from 'react';
import { useRoutes } from 'react-router-dom';
import appRouter from '@/router/appRouter';
import { FloatingNavDemo } from '@/components/Navbar/Navbar';
import { Suspense } from 'react';
import routes from '@/router/routes';
export default function AppRouter() {
  // Generate the routes using useRoutes
  const element = useRoutes(routes.default);

  return (
    <>
      <FloatingNavDemo />
      <Suspense fallback={<div>Loading...</div>}>
        {element}
      </Suspense>
    </>
  );
}
