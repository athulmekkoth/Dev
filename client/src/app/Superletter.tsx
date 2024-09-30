import React from 'react';
import { useRoutes } from 'react-router-dom';
import appRouter from '@/router/appRouter';
import { Navbar } from '@/components/Navbar/Navbar';
import { navItems } from "@/data/navitems.js"
export default function AppRouter() {
  // Generate the routes using useRoutes
  const element = useRoutes(appRouter());

  return (
    <>
    <Navbar  navItems={navItems}  className='temp'/>
      {element}
    </>
  );
}
