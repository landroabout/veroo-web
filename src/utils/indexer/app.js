// JavaScript file for front-end interaction

// Function to handle user sign-up
export async function signUp(data) {
    //const email = document.getElementById("email").value;
   // const password = document.getElementById("password").value;

    const response = await fetch("https://script.google.com/macros/s/AKfycbzGf4wwSogWbOqQn34GZ6MP7izZlVixg7YdCRTRTs0z7653qu-8QE6l-JxjEJFN-6mC/exec", {
        method: "POST",
        headers: {
            "Content-Type": "application/json", 
        },
        body:JSON.stringify({
            action: "signUp",
            email: data.get('email'),
            password: data.get('password')
        }),
    });

    const result = await response.json();
    alert(result.message); // Show success or error message
    return result.message;
}

// Function to handle user log-in
export async function logIn(email, password) {
   // const email = document.getElementById("email").value;
   // const password = document.getElementById("password").value;

    const response = await fetch("https://script.google.com/macros/s/AKfycbyugBT5A2vtbLC-j3kir_LCLRNw8KJMXtwS1_xaKOUcld2cIRDBkO91cbEtN691ENWY/exec", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            action: "logIn",
            email: email,
            password: password,
        }),
    });

    const result = await response.json();
    if (result.success) {
        alert("Login successful!");
        // Redirect or perform other actions
    } else {
        alert(result.message);
    }
}
