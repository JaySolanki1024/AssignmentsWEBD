// ImageP2.js: Adds interactivity to the image gallery

// Selecting elements
const mainImage = document.getElementById("main-image");
const thumbnails = document.querySelectorAll(".thumbnail");
const toggleThemeButton = document.getElementById("toggle-theme");

// Change main image on thumbnail click
thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
        mainImage.src = thumbnail.src;
        mainImage.alt = thumbnail.alt;
    });
});

// Toggle dark and light theme
toggleThemeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
});

// Add dark theme styles
const style = document.createElement("style");
style.innerHTML = `
    body.dark-theme {
        background-color: #333;
        color: #f9f9f9;
    }

    body.dark-theme header {
        background-color: #000;
    }

    body.dark-theme #toggle-theme {
        background-color: #ff5722;
    }

    body.dark-theme #toggle-theme:hover {
        background-color: #e64a19;
    }
`;
document.head.appendChild(style);
