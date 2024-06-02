// Function to validate the phone number (10 digits)
function validatePhoneNumber() {
    var phoneNumber = document.getElementById("PhoneNumber").value;
    if (/^\d{10}$/.test(phoneNumber)) {
        return true;
    } else {
        alert("Please enter a valid 10-digit phone number.");
        return false;
    }
}

// Function to validate the email address format
function validateEmail() {
    var email = document.getElementById("email").value;
    var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (emailRegex.test(email)) {
        return true;
    } else {
        alert("Please enter a valid email address.");
        return false;
    }
}

// Function to handle form submission
function validateForm() {
    if (validatePhoneNumber() && validateEmail()) {
        return true; // Submit the form
    } else {
        return false; // Prevent form submission
    }
}

// Attach the form submission handler to the form
var form = document.querySelector("form");
form.addEventListener("submit", validateForm);
