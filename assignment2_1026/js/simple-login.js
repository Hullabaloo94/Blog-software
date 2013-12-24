// Attempt at Authentication, Validation is shown in create.js (Task 6)

var chatRef = new Firebase('https://blog-store.firebaseio.com/');
var auth = new FirebaseSimpleLogin(chatRef, function(error, user) {
  if (error) {
    alert(error);
  } else if (user) {
    alert('User ID: ' + user.id + ', Provider: ' + user.provider);
  } else {
  }
});

auth.login('facebook');

//-------------The outcome of this file is shown below----------------------------------------------

/* FirebaseSimpleLogin(): Due to browser security restrictions, loading applications via `file://*` 
URLs will prevent popup-based authentication providers from working properly. When testing locally, 
you'll need to run a barebones webserver on your machine rather than loading your test files via 
`file://*`. The easiest way to run a barebones server on your local 
machine is to `cd` to the root directory of your code and run `python -m
SimpleHTTPServer`, which will allow you to access your content via `http://127.0.0.1:8000/*`. */