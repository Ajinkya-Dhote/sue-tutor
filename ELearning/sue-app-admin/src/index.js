import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import MiniDrawer from './component/MiniDrawer';
import { Student } from './component/Student';
import { Teacher } from './component/Teacher';
import { Admin } from './component/Admin';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
import Login from './component/Login/Login';
import AuthProvider from './services/auth/AuthProvider';

const client = new ApolloClient({
  uri: '/app/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: "Bearer "+ localStorage.getItem("token")
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <ApolloProvider client={client}>
     <AuthProvider>
        <BrowserRouter>
              <Routes>
                    <Route path="/" element={<MiniDrawer/> } >
                      <Route path="student" element={<Student/>} />
                      <Route path="teacher" element={<Teacher/> }/>
                      <Route path="admin" element={<Admin/> } />
                    </Route>
                    <Route path="/login" element={<Login />} />
              </Routes>
        </BrowserRouter>
        </AuthProvider>
    </ApolloProvider>
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
