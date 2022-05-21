import React from "react";
import { sueAuthProvider } from "./auth";


export let AuthContext = React.createContext();

function AuthProvider({ children }) {
    let [user, setUser] = React.useState(null);
  
    let signin = (newUser, callback) => {
      return sueAuthProvider.signin(() => {
        setUser(newUser);
        callback();
      });
    };
  
    let signout = (callback) => {
      return sueAuthProvider.signout(() => {
        setUser(null);
        callback();
      });
    };
  
    let value = { user, signin, signout };
  
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
  }

  export default AuthProvider;