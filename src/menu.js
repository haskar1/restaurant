function displayMenuTitle() {
    const menuTitle = document.createElement('div');
    menuTitle.textContent = "Menu";
    content.appendChild(menuTitle);
}

function displayAppetizers() {
    const appetizersTitle = document.createElement('div');
    appetizersTitle.textContent = "Appetizers";
    content.appendChild(appetizersTitle);
    
    const appetizers = ['garlic knots', 'breadsticks', 'salad'];
    
    for (let i = 0; i < appetizers.length; i++) {
        const appetizer = document.createElement('div');
        appetizer.textContent = appetizers[i];
        content.appendChild(appetizer);
    }
}

export default function displayMenuTab() {
    displayMenuTitle();
    displayAppetizers();
}