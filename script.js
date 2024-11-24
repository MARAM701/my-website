document.addEventListener("DOMContentLoaded", function () {
    const allowLocationButton = document.getElementById("allow-location-button");
    const customDialog = document.getElementById("custom-dialog");

    // Show the custom dialog when location button is clicked
    allowLocationButton.addEventListener("click", function () {
        customDialog.style.display = "flex";
    });
});

// Close the custom dialog
function closeDialog() {
    document.getElementById("custom-dialog").style.display = "none";
}


// Handle location permission
function handleLocationPermission(allowed) {
    if (allowed) {
        showCustomAlert("Location access granted."); // Use custom alert dialog
    } else {
        showCustomAlert("Location access denied."); // Use custom alert dialog
    }
    closeDialog();
}

// Custom function to show the alert dialog
function showCustomAlert(message) {
    const customAlert = document.getElementById("custom-alert");
    const alertMessage = document.getElementById("alert-message");
    alertMessage.innerText = message;
    customAlert.style.display = "flex"; // Display the alert dialog
}

// Function to close the alert dialog
function closeCustomAlert() {
    document.getElementById("custom-alert").style.display = "none";
}
