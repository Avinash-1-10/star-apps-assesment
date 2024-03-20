// Execute the following code when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const umbrellaImg = document.querySelector(".umbrell-img");
    const umbrella = document.querySelector(".umbrella");
    const logoImg = document.querySelector(".logo-img");
    const colorOptions = document.querySelectorAll(".color-option");
    const uploadButton = document.querySelector("button");
    const body = document.querySelector("body");

    // Function to change umbrella color and apply spinning animation
    function changeUmbrellaColor(color) {
        // Change the source of the umbrella image to the corresponding color image
        umbrellaImg.src = `./assets/${color} umbrella.png`;
        // Remove and then reapply the animation to the umbrella container
        umbrella.classList.remove("scale-animation");
        void umbrella.offsetWidth;
        umbrella.classList.add("scale-animation");

        // Remove the 'selected' class from all color options
        colorOptions.forEach(option => {
            option.classList.remove("selected");
        });

        // Add the 'selected' class to the clicked color option
        colorOptions.forEach(option => {
            if (option.id === color) {
                option.classList.add("selected");
            }
        });
    }

    // Event listeners for each color option
    colorOptions.forEach((colorOption) => {
        colorOption.addEventListener("click", () => {
            const color = colorOption.id;
            // Change the background color of the body based on the selected color
            if (color === "Blue") {
                body.style.backgroundColor = "#E7F6FD";
            } else if (color === "Pink") {
                body.style.backgroundColor = "#FFE1F8";
            } else {
                body.style.backgroundColor = "#FFFBEF";
            }

            // Call the function to change umbrella color
            changeUmbrellaColor(color);
        });
    });

    // Event listener for the upload button
    uploadButton.addEventListener("click", () => {
        // Create an input element for file upload
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "image/png, image/jpeg";
        input.onchange = (event) => {
            const file = event.target.files[0];
            const reader = new FileReader();

            // Event handler for when the file is loaded
            reader.onload = (e) => {
                logoImg.style.display = "block";
                logoImg.src = e.target.result;
            };

            reader.readAsDataURL(file); // Read the contents of the selected file as a data URL
        };

        input.click(); // Trigger a click event on the input element to open the file dialog
    });
});
