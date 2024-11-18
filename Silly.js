// SSGenerator.js: JavaScript for Silly Story Generator

document.getElementById("generate").addEventListener("click", function() {
    const customName = document.getElementById("customName").value;
    const temperature = document.querySelector("input[name='temperature']:checked").value;
    const storyContainer = document.getElementById("story");
    
    const name = customName || "Bob";
    const tempFormat = temperature === "us" ? "Fahrenheit" : "Celsius";
    const story = `Once upon a time, ${name} went to a magical forest where temperatures soared in ${tempFormat}!`;
    
    storyContainer.textContent = story;
    storyContainer.hidden = false;
});
