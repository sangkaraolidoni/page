document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "user" && password === "pass") {
        window.location.href = "adminsangkara.html"; // Redirect to dashboard on successful login
    } else {
        document.getElementById("error-message").textContent = "Invalid username or password";
    }
});
