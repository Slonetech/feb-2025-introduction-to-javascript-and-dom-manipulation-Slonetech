// Function to change text content and style
function changeTextAndStyle() {
    const title = document.getElementById('main-title');
    const description = document.getElementById('description');

    // Change text content
    title.textContent = "DOM Manipulation in Action!";
    description.textContent = "You've successfully changed the text and style.";

    // Modify CSS styles
    title.style.color = "blue";
    title.style.fontWeight = "bold";
    description.style.fontStyle = "italic";
}

// Function to add or remove an element
function toggleElement() {
    const container = document.getElementById('toggle-container');
    const newElement = document.createElement('p');
    newElement.textContent = "This is a dynamically added element!";
    newElement.classList.add('dynamic-element');

    // Check if the element already exists
    if (container.contains(newElement)) {
        container.removeChild(newElement);
    } else {
        container.appendChild(newElement);
    }
}

// Event listeners for buttons
document.getElementById('change-btn').addEventListener('click', changeTextAndStyle);
document.getElementById('toggle-btn').addEventListener('click', toggleElement);
