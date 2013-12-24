var dataRef = new Firebase("https://blog-store.firebaseio.com/");
// Log me in.
dataRef.auth(AUTH_TOKEN, function(error) {
  if(error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Login Succeeded!");
  }
});