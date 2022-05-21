const sueAuthProvider = {
    isAuthenticated: false,
    signin(callback) {
        sueAuthProvider.isAuthenticated = true;
        console.log("SIngning successfull");
      setTimeout(callback, 100); // fake async
    },
    signout(callback) {
        sueAuthProvider.isAuthenticated = false;
        console.log("SIngning fail");
      setTimeout(callback, 100);
    },
  };
  
  export { sueAuthProvider };