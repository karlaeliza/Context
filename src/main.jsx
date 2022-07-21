import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { GlobalProvider } from './context/Context';
import { I18nextProvider } from "react-i18next";
import i18n from "./config/localizacion/I18next";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <I18nextProvider i18n={i18n}>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </I18nextProvider>
</React.StrictMode>
)
