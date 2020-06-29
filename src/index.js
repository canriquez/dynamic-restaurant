import './style.css'
import navIcon from './burger.svg';
console.log("init webpack done")

// Navigation

const navIconElement = document.getElementById('burger-menu')
const navMenuIcon = new Image();
navMenuIcon.src = navIcon;
navIconElement = appendChild(navMenuIcon);