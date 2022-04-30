import React from 'react';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import './i18n';
import { Provider } from 'react-redux'

import store from './store/store';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import About from './components/About/About';
import SettingsHome from './components/Settings/SettingsHome';
import AppSettings from './components/Settings/AppSettings';
import ProfileSetttings from './components/Settings/ProfileSettings';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>}>
            <Route path="about" element={<About />} />
            <Route path="settings" element={<SettingsHome />}>
              <Route index element={<ProfileSetttings />}> </Route>
              <Route path="app-settings" element={<AppSettings />}> </Route>
            </Route>
          </Route>
            {/* <Route index element={<Home />} /> */}
          
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
