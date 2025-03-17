document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const errorMessage = document.getElementById("error-message");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === "" & password === "") {
            errorMessage.textContent = "username and password cannot be null";
            return;
        }

        if (username === "admin" & password === "1234") {
            alert("Login Successfully");
            window.location.href = "homepage.html";
        } else {
            errorMessage.textContent = "username and password incorrect"
        }
    });
});