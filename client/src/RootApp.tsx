// import { useState } from "react";

// import "./App.css";
// import { Route, Routes } from "react-router-dom";

// import Homepage from "./pages/Homepage.tsx";

// import { Navbar } from "./components/Navbar/Navbar.tsx";
// import Example from "./components/Mailcomponents/Mail.tsx";
// import Footer from "./components/Footer/Footer.tsx";


// import Newsletter from "./components/Newletter/Newsletter.tsx";
// import CreatePage from "./pages/CreatePage.tsx";
// function App() {
//   return (
//     <div id="parent">
//       <Navbar />
//       <div  id="elements">
//         <Routes>
//           <Route path="/" element={<Homepage />} />
//           <Route path="/profile" element={<ProfileContent />} />
//           <Route path="/dashboard" element={<CreatePage />} />
//           <Route path="/sample" element={<Newsletter />} />
//           <Route path="/mail/*" element={<Example />} />
          
//         </Routes>
//       </div>
//       <div id="Footer">
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default App;
// import './style/app.css';

import { Suspense, lazy } from 'react';
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store/store.tsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import PageLoader from '@/components/Pageloader/Pagelaoder.tsx'; // assuming you have a loader component

const Superletter = lazy(() => import('@/app/Superletter.tsx'));

export default function RoutApp() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Suspense fallback={<PageLoader />}> {/* Handles loading state for lazy-loaded component */}
            <Superletter />
          </Suspense>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}
