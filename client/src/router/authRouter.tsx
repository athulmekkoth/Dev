// import { Suspense, lazy } from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';


// // Lazy load the components

// // const ResetPassword = lazy(() => import('@/pages/ResetPassword'));

// export default function AuthRouter() {
//   const dispatch = useDispatch();

//   return (
//     <Suspense fallback={<div>Loading...</div>}>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/logout" element={<Navigate to="/login" replace />} />
//         <Route path="/singup" element={<Singup />} />
//         {/* <Route path="/resetpassword/:userId/:resetToken" element={<ResetPassword />} /> */}
//         {/* <Route path="*" element={<NotFound />} /> */}
//       </Routes>
//     </Suspense>
//   );
// }
