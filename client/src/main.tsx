import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { PersistGate } from 'redux-persist/integration/react';
import {store,persistor} from "./redux/store/store.tsx"
import { BrowserRouter, Route,Router } from 'react-router-dom'
import { Provider } from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
<PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
  </BrowserRouter>
</React.StrictMode>

)
