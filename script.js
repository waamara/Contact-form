function valid() {
    const firstnameElement = document.getElementById("o");
    const lastnameElement = document.getElementById("kd");
    const emailaddElement = document.getElementById("tez");
    const messageElement = document.getElementById("smsss");
    const consentCheckbox = document.getElementById("jkhaha");

    const firname = firstnameElement.value.trim();
    const lasname = lastnameElement.value.trim();
    const emailadd = emailaddElement.value.trim();
    const messageel = messageElement.value.trim();
    const isConsentChecked = consentCheckbox.checked;
    const checkInput1 = document.getElementById("checkInput1");
    const checkInput2 = document.getElementById("checkInput2");

    let isValid = true;

    function setError(element, message) {
        element.classList.add("error-input");
        let errorElement = element.nextElementSibling;
        if (!errorElement || errorElement.className !== "error-message") {
            errorElement = document.createElement("p");
            errorElement.className = "error-message";
            errorElement.textContent = message;
            element.parentNode.insertBefore(errorElement, element.nextSibling);
        } else {
            errorElement.textContent = message; // Update existing error message
        }
    }

    function clearError(element) {
        element.classList.remove("error-input");
        let errorElement = element.nextElementSibling;
        if (errorElement && errorElement.className === "error-message") {
            errorElement.parentNode.removeChild(errorElement);
        }
    }

    // Validation logic
    if (firname === "") {
        setError(firstnameElement, "First Name is required");
        isValid = false;
    } else {
        clearError(firstnameElement);
    }

    if (lasname === "") {
        setError(lastnameElement, "Last Name is required");
        isValid = false;
    } else {
        clearError(lastnameElement);
    }

    if (emailadd === "") {
        setError(emailaddElement, "Email Address is required");
        isValid = false;
    } else if (!isValidEmail(emailadd)) {
        setError(emailaddElement, "Please enter a valid email address");
        isValid = false;
    } else {
        clearError(emailaddElement);
    }

    function isValidEmail(email) {
        // Basic email validation
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    if (!checkInput1.checked && !checkInput2.checked) {
        setError(document.getElementById("id"), "Please select a Query Type");
        isValid = false;
    } else {
        clearError(document.getElementById("id"));
    }

    if (messageel === "") {
        setError(messageElement, "Message is required");
        isValid = false;
    } else {
        clearError(messageElement);
    }

    if (!isConsentChecked) {
        setError(document.querySelector(".how"), "To submit this form, please consent to being contacted.");
        isValid = false;
    } else {
        clearError(document.querySelector(".how"));
    }

    // If form is valid, show success message
    if (isValid) {
        document.getElementById("successMessage").style.display = "block";
    } else {
        document.getElementById("successMessage").style.display = "none";
    }

    return isValid;
}
