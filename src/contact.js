function displayContact() {
    const contactUs = document.createElement('div');
    contactUs.textContent = 'Contact Us';

    const phone = document.createElement('div');
    phone.textContent = 'Phone: 555-555-5555';

    const email = document.createElement('div');
    email.textContent = 'Email: pizza@pizza.com';

    content.appendChild(contactUs);
    content.appendChild(phone);
    content.appendChild(email);
}

export default function displayContactTab() {
    displayContact()
}