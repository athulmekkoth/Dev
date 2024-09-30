import React from 'react';
import routes from './routes';
import { RouteObject } from 'react-router-dom';

interface Links {
  path: string;
  element: React.ReactNode;
}

const appRouter = (): RouteObject[] => {
  const routesList: Links[] = [];

  // Iterate over the routes object to push the routes into the array
  Object.entries(routes).forEach(([key, value]) => {
    routesList.push(...(value as Links[]));  // Ensure type matches Links[]
  });

  // Return the routesList to be used in useRoutes
  return routesList;
};

export default appRouter;
