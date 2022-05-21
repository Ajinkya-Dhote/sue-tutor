import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
// let AuthContext = React.createContext(null);

function RequireAuth({ children }) {
    let auth = useAuth();
    let location = useLocation();
  
    if (auth == null) {
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
  }

  export function useAuth() {
    return React.useContext(AuthContext);
  }

  export default RequireAuth;