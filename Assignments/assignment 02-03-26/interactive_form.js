document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent default reload

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let message = document.getElementById("message");

    // Check for empty fields
    if (name === "" || email === "" || password === "") {
        message.textContent = "Error: All fields are required.";
        message.className = "error";
        return;
    }

    // Validate email
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        message.textContent = "Error: Enter a valid email address.";
        message.className = "error";
        return;
    }

    // Validate password length
    if (password.length < 6) {
        message.textContent = "Error: Password must be at least 6 characters.";
        message.className = "error";
        return;
    }

    // All validations passed → redirect to thank-you page
    window.location.href = "thankyou.html?name=" + encodeURIComponent(name);
});