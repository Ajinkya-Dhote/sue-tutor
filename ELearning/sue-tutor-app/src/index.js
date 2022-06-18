import {
  ApolloClient, ApolloProvider, InMemoryCache
} from "@apollo/client";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react';
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import App from './App';
import About from './components/About/About';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import AppSettings from './components/Settings/AppSettings';
import ProfileSetttings from './components/Settings/ProfileSettings';
import SettingsHome from './components/Settings/SettingsHome';
import Courses from "./Courses/Courses";
import './i18n';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AuthProvider from './services/auth/AuthProvider';
import RequireAuth from './services/auth/RequireAuth';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import store from './store/store';






const root = ReactDOM.createRoot(document.getElementById("root"));

const client = new ApolloClient({
  uri: '/app/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: "Bearer "+ localStorage.getItem("token")
  }
});


root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
        <AuthProvider>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={ <RequireAuth> <App/> </RequireAuth>}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="courses" element={<Courses />} />
                <Route path="settings" element={<SettingsHome />}>
                  <Route index element={<ProfileSetttings />}> </Route>
                  <Route path="app-settings" element={<AppSettings />}> </Route>
                </Route>
              
              </Route>
              <Route path="login" element={<Login />} />
                {/* <Route index element={<Home />} /> */}
              
            </Routes>
          </BrowserRouter>
          </Provider>
        </AuthProvider>
    </ApolloProvider>
  </React.StrictMode>
);  

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
