// script.js

// Function to handle video downloads
function downloadVideo(url) {
    const a = document.createElement('a');
    a.href = url;
    a.download = ''; // You can set a specific filename here if needed
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
    const videoUrl = document.getElementById('video-url').value;
    downloadVideo(videoUrl);
    // Add any additional form handling logic here.
}

// Event listener for form submission
const form = document.getElementById('video-form');
if (form) {
    form.addEventListener('submit', handleFormSubmit);
}