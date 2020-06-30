import './style.css'
import navIcon from './burger.svg';
import brandLogo from './dp_logo.svg';
import globalLogo from './globe.svg';

// Main images import
import main01 from './photo/main_01.jpg'

console.log("init webpack done")

// Navigation

const navMenuIcon = new Image();
const navBrand = new Image();
const navGlobal = new Image();
navMenuIcon.src = navIcon;
navBrand.src = brandLogo;
navGlobal.src = globalLogo;
document.getElementById('burger-menu').appendChild(navMenuIcon);
document.getElementById('brand-nav').appendChild(navBrand);
document.getElementById('global').appendChild(navGlobal);

//Main Section
const mainHero01 = new Image();
mainHero01.src = main01;
document.getElementById('hero-image').appendChild(mainHero01);

