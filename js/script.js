function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
    
    if (username === "Yashrajsalunkhe" && password === "Yashraj@123") {
        window.location.href = "home.html";
        return false;
    } else {
        errorMessage.textContent = "Invalid username or password!";
        return false;
    }
}