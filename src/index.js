// Create navigation tabs

import './style.css';

const nav = document.createElement('nav');
const content = document.body.querySelector('div#content');
content.insertAdjacentElement('beforebegin', nav);

const navList = document.createElement('ul');
const homeTab = document.createElement('li');
const menuTab = document.createElement('li');
const contactTab = document.createElement('li');

homeTab.classList.add('home');
homeTab.textContent = "Home";
menuTab.classList.add('menu');
menuTab.textContent = "Menu";
contactTab.classList.add('contact');
contactTab.textContent = "Contact";

nav.appendChild(navList);
navList.append(homeTab, menuTab, contactTab);


// Add functionality to tabs

import displayHomeTab from './home';
import displayMenuTab from './menu';
import displayContact from './contact'

const tabs = document.querySelectorAll('nav li');

tabs.forEach(tab =>
    tab.addEventListener('click', (e) => {
        if (e.target.classList.contains('home')) {
            content.replaceChildren();
            displayHomeTab();
        }

        if (e.target.classList.contains('menu')) {
            content.replaceChildren();
            displayMenuTab();
        }

        if (e.target.classList.contains('contact')) {
            content.replaceChildren();
            displayContact();
        }
    })
)

displayHomeTab();