const forms = document.querySelectorAll(".auth-form");

forms.forEach(form => {

    form.addEventListener("submit", (event) => {

        event.preventDefault();

        // Hide previous error
        hideError();

        // LOGIN
        if (form.classList.contains("panel-login")) {

            const email = form.querySelector(".email").value.trim();
            const password = form.querySelector(".password").value;

            if (!email || !password) {
                sendError(
                    "Sign-in issue",
                    "Please fill in all fields."
                );
                return;
            }

            if (!validateEmail(email)) {
                sendError(
                    "Sign-in issue",
                    "Please enter a valid email."
                );
                return;
            }

            form.submit();
        }

        // REGISTER
        if (form.classList.contains("panel-register")) {

            const firstName = form.querySelector("#firstName").value.trim();
            const lastName = form.querySelector("#lastName").value.trim();

            const email = form.querySelector(".email").value.trim();

            const password = form.querySelector("#password").value;

            const confirmPassword =
                form.querySelector("#confirmPassword").value;

            if (
                !firstName ||
                !lastName ||
                !email ||
                !password ||
                !confirmPassword
            ) {
                sendError(
                    "Registration issue",
                    "Please fill in all fields."
                );
                return;
            }

            if (!validateEmail(email)) {
                sendError(
                    "Registration issue",
                    "Invalid email."
                );
                return;
            }

            if (password.length < 6) {
                sendError(
                    "Registration issue",
                    "Password must be at least 6 characters."
                );
                return;
            }

            if (password !== confirmPassword) {
                sendError(
                    "Registration issue",
                    "Passwords do not match."
                );
                return;
            }

            form.submit();
        }

    });

});

function sendError(title, description) {
    const errorPanel = document.querySelector(".error-panel");
    const issueTitle = document.getElementById("issue-title");
    const issueDescription = document.getElementById("issue-description");

    issueTitle.textContent = title;
    issueDescription.textContent = description;

    errorPanel.style.display = "flex";
}

function hideError() {
    const errorPanel = document.querySelector(".error-panel");
    errorPanel.style.display = "none";
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}