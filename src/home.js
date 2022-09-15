function displayName() {
    const name = document.createElement('div');
    name.textContent = "Pizza Restaurant";
    content.appendChild(name);
}

function displayDescription() {
    const description = document.createElement('div');
    description.textContent = "Best pizza in the world!";
    content.appendChild(description);
}

function displayHours() {
    const hours = document.createElement('div');
    hours.textContent = "Open 24 hours";
    content.appendChild(hours);
}

function displayLocation() {
    const location = document.createElement('div');
    location.textContent = "New York City, NY";
    content.appendChild(location);
}

export default function displayHomeTab() {
    displayName();
    displayDescription();
    displayHours();
    displayLocation();
}