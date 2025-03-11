document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let errorMessage = document.getElementById("errorMessage");

    // Set valid username and password (Replace with database validation in real projects)
    let validUsername = "admin";
    let validPassword = "12345";

    if (username === validUsername && password === validPassword) {
        errorMessage.textContent = "";
        alert("Login Successful!");
        window.location.href = "dashboard.html"; // Redirect to another page
    } else {
        errorMessage.textContent = "Invalid username or password!";
    }
});

// Show/Hide Password Toggle
document.getElementById("showPassword").addEventListener("change", function() {
    let passwordInput = document.getElementById("password");
    passwordInput.type = this.checked ? "text" : "password";
});
