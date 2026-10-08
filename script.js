// Handle Login Form on index.html
const loginForm = document.getElementById("login-form");

if (loginForm) {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const messageBox = document.getElementById("message-box");

  loginForm.addEventListener("submit", function (event) {
    // Prevent default form submission / page reload
    event.preventDefault();

    // Read input values (strip leading/trailing whitespace for username)
    const username = usernameInput.value.trim();
    const password = passwordInput.value;

    // Case 1: Both fields empty
    if (username === "" && password === "") {
      showMessage("Please enter your username and password.", "error");
    }
    // Case 2: Username empty
    else if (username === "") {
      showMessage("Please enter your username.", "error");
    }
    // Case 3: Password empty
    else if (password === "") {
      showMessage("Please enter your password.", "error");
    }
    // Case 4: Both fields filled -> Redirect to landing.html
    else {
      window.location.href = "landing.html";
    }
  });

  // Helper function to display messages
  function showMessage(text, type) {
    messageBox.textContent = text;
    messageBox.className = "message-box " + type;
  }
}

// Handle Logout Button on landing.html
const logoutBtn = document.getElementById("logout-btn");

if (logoutBtn) {
  logoutBtn.addEventListener("click", function () {
    // Redirect back to login page
    window.location.href = "index.html";
  });
}
