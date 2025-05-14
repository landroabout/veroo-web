---
title: Login & Signup
slug: /login-signup
---

# Welcome to Veroo

Use the buttons below to log in or sign up!

<div style="text-align: center; margin-top: 30px;">
    <button id="loginButton" style="margin: 10px; padding: 10px 20px; font-size: 16px; cursor: pointer;">Login</button>
    <button id="setupButton" style="margin: 10px; padding: 10px 20px; font-size: 16px; cursor: pointer;">Sign Up</button>
</div>

<script>
    // Function to simulate login
    function login() {
        alert("Login function called!");
        // Add your login logic here
    }

    // Function to simulate sign-up
    function signUp() {
        alert("Sign-Up function called!");
        // Add your sign-up logic here
    }

    // Attach event listeners to buttons
    document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("loginButton").addEventListener("click", login);
        document.getElementById("setupButton").addEventListener("click", signUp);
    });
</script>