// Constants for query selector
const customNumberInput = document.getElementById('customNumber');
const customColorButton = document.querySelector('.custColor');
const randomColorButton = document.querySelector('.randColor');
const imageSelect = document.getElementById('imageSelect');
const images = document.getElementById('images');
const myStudentId = document.getElementById('myStudentId');
const id = 200556508;

function changeCustomColor() {
    const number = parseInt(customNumberInput.value);
    myStudentId.textContent = "Student ID: " + id; // Display student ID
    document.body.style.backgroundColor = getBackgroundColor(number); // Set background color based on custom number
}

function changeRandomColor() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    myStudentId.textContent = "Your Student ID: " + id; // Display student ID
    document.body.style.backgroundColor = getBackgroundColor(randomNumber);  // Set background color based on custom number
}

function addList() {
    const imgOptions = ["img1.jpg", "img2.jpg", "img3.jpg","img4.jpg","img5.jpg"]; 
    for (let i = 0; i < imgOptions.length; i++) {
        const option = document.createElement('option'); // Create a new option element
        option.text = imgOptions[i];
        imageSelect.add(option);
    }
}

function changeImage() {
    const selectedImage = imageSelect.value;
    images.src = "./img/" + selectedImage;
}
// Event listeners for button clicks and image selection change
customColorButton.addEventListener('click', changeCustomColor);
randomColorButton.addEventListener('click', changeRandomColor);
imageSelect.addEventListener('change', changeImage);

// Function to determine background color based on number input
function getBackgroundColor(number) {
    if (number < 0 || number > 100) {
        return 'red';
    } else if (number >= 0 && number <= 20) {
        return 'green';
    } else if (number > 20 && number <= 40) {
        return 'blue';
    } else if (number > 40 && number <= 60) {
        return 'orange';
    } else if (number > 60 && number <= 80) {
        return 'purple';
    } else {
        return 'yellow';
    }
}

addList();
