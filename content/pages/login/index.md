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

