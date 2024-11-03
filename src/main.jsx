
import App from "./App.jsx";
// import { ToastContainer, toast } from 'react-hot-toast';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from 'react-router-dom';  
import { Helmet } from 'react-helmet-async';
import "./index.css";
import "modern-normalize";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Helmet>
            <App />
          </Helmet>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
