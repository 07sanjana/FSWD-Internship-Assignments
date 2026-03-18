document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Error elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");
    const successMsg = document.getElementById("successMsg");

    // Clear previous messages
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";
    successMsg.textContent = "";

    let isValid = true;

    // Name validation
    if (name === "") {
        nameError.textContent = "Name must not be empty";
        isValid = false;
    }

    // Email validation
    if (!email.includes("@")) {
        emailError.textContent = "Email must contain @";
        isValid = false;
    }

    // Password length validation
    if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        isValid = false;
    }

    // Password match validation
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords must match";
        isValid = false;
    }

    // Success
    if (isValid) {
        successMsg.textContent = "Registration successful!";
    }
});
