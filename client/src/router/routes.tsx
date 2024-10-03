import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

// Lazy load components
const ProfileContent = lazy(() => import("@/pages/Profile"));
const CreatePage = lazy(() => import("@/pages/CreatePage"));
const Homepage = lazy(() => import("@/pages/Homepage"));
const Newsletter = lazy(() => import("@/components/Newletter/Newsletter"));
const Example = lazy(() => import("@/components/Mailcomponents/Mail"));
const Login = lazy(() => import('@/components/Login/Login'));
const Signup = lazy(() => import('@/components/Signup/Singup')); 

let routes = {
    default: [
        { path: '/', element: <Homepage /> },
        { path: '/dashboard', element: <CreatePage /> },
        { path: '/sample', element: <Newsletter /> },
        { path: '/mail*', element: <Example /> },
        { path: '/login', element: <Login /> },
        { path: '/logout', element: <Navigate to="/login" replace /> },
        { path: '/signup', element: <Signup /> }
    ]
};

export default routes;
