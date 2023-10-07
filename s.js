// File Upload
document.getElementById("file-upload-button").addEventListener("click", function () {
    const fileInput = document.getElementById("file-input");
    const files = fileInput.files;

    if (files.length > 0) {
        // You can handle file upload here (e.g., send files to the server)
        console.log("Uploading files:", files);
    }
});

// Profile Picture Upload
document.getElementById("upload-button").addEventListener("click", function () {
    const profilePictureInput = document.getElementById("profile-picture-input");
    profilePictureInput.click();

    profilePictureInput.addEventListener("change", function () {
        const profileImage = document.getElementById("profile-image");
        const file = profilePictureInput.files[0];

        if (file) {
            // Display the selected image as the profile picture
            const reader = new FileReader();
            reader.onload = function (e) {
                profileImage.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
});


document.getElementById("sp").addEventListener("click", function() {
    window.location.href = "file:///C:/Users/Dell/OneDrive/Desktop/web%20development/vrp/index.html";
  });