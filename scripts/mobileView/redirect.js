function redirectBasedOnDevice() {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      // If a mobile device (Mobi or Android in user agent)
      window.location.href = "indexm.html";
    } else {
      // Otherwise, assume PC
      window.location.href = "index.html";
    }
  }

// Call the function when the page loads
window.onload = redirectBasedOnDevice;