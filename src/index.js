import './style.css'
import navIcon from './burger.svg';
console.log("init webpack done")

// Navigation

const navMenuIcon = new Image();
navMenuIcon.src = navIcon;
document.getElementById('burger-menu').appendChild(navMenuIcon);