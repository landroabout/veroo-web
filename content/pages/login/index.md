---
title: Sign In
---

<div id="auth-container">
  <!-- Login Form -->
  <form id="login-form" onsubmit="event.preventDefault(); logIn();">
    <h2>Sign In</h2>
    <label for="email-login">Email:</label>
    <input type="email" id="email-login" required />
    <label for="password-login">Password:</label>
    <input type="password" id="password-login" required />
    <button type="submit">Sign In</button>
    <p>
      Don't have an account?
      <a href="#" onclick="showSignUpForm(); return false;">Sign Up</a>
    </p>
    <div style="margin-top: 1em;">
      <button type="button" onclick="signInWithGoogle()">Sign in with Google</button>
      <button type="button" onclick="signInWithAirbnb()">Sign in with Airbnb</button>
    </div>
  </form>

  <!-- Signup Form (hidden by default) -->
  <form id="signup-form" style="display:none;" onsubmit="event.preventDefault(); signUp();">
    <h2>Sign Up</h2>
    <label for="email-signup">Email:</label>
    <input type="email" id="email-signup" required />
    <label for="password-signup">Password:</label>
    <input type="password" id="password-signup" required />
    <button type="submit">Sign Up</button>
    <p>
      Already have an account?
      <a href="#" onclick="showLoginForm(); return false;">Sign In</a>
    </p>
    <div style="margin-top: 1em;">
      <button type="button" onclick="signInWithGoogle()">Sign up with Google</button>
      <button type="button" onclick="signInWithAirbnb()">Sign up with Airbnb</button>
    </div>
  </form>
</div>

<script src="/src/utils/indexer/app.js"></script>
<script>
function showSignUpForm() {
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('signup-form').style.display = 'block';
}
function showLoginForm() {
  document.getElementById('signup-form').style.display = 'none';
  document.getElementById('login-form').style.display = 'block';
}
function signInWithGoogle() {
  alert('Google sign-in is not implemented yet.');
}
function signInWithAirbnb() {
  alert('Airbnb sign-in is not implemented yet.');
}

// PATCH: Override the signUp and logIn functions to use correct IDs
async function signUp() {
  const email = document.getElementById("email-signup").value;
  const password = document.getElementById("password-signup").value;
  const response = await fetch("https://script.google.com/macros/s/AKfycbyugBT5A2vtbLC-j3kir_LCLRNw8KJMXtwS1_xaKOUcld2cIRDBkO91cbEtN691ENWY/exec", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ action: "signUp", email, password }),
  });
  const result = await response.json();
  alert(result.message);
}
async function logIn() {
  const email = document.getElementById("email-login").value;
  const password = document.getElementById("password-login").value;
  const response = await fetch("https://script.google.com/macros/s/AKfycbyugBT5A2vtbLC-j3kir_LCLRNw8KJMXtwS1_xaKOUcld2cIRDBkO91cbEtN691ENWY/exec", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ action: "logIn", email, password }),
  });
  const result = await response.json();
  if (result.success) {
    alert("Login successful!");
    // window.location = "/"; // Uncomment to redirect
  } else {
    alert(result.message);
  }
}
</script>
