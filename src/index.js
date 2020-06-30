import './style.css'
import navIcon from './burger.svg';
import brandLogo from './dp_logo.svg';
import globalLogo from './globe.svg';

// Main images import
import main01 from './photo/main_01.jpg'
import takeAway from './takeaway.svg'

// Payment Icons

import visa from './icons/visa.svg'
import master from './icons/mastercard.svg'
import paypal from './icons/paypal.svg'
import stripe from './icons/stripe.svg'

// Dish Images
import d01 from './photo/d01.jpg'
import d02 from './photo/d02.jpg'
import d03 from './photo/d03.jpg'
import d04 from './photo/d04.jpg'
import d05 from './photo/d05.jpg'
import d06 from './photo/d06.jpg'
import d07 from './photo/d07.jpg'


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

//Takeaway Brand Logo
const takeAwayBrand = new Image();
takeAwayBrand.src = takeAway;
document.getElementById('takeAwayBrand').appendChild(takeAwayBrand);

//Payment Icons
const visaIcon = new Image();
const masterIcon = new Image();
const paypalIcon = new Image();
const stripeIcon = new Image();
visaIcon.src = visa;
masterIcon.src = master;
paypalIcon.src = paypal;
stripeIcon.src = stripe;
document.getElementById('payment-tags').appendChild(paypalIcon);
document.getElementById('payment-tags').appendChild(visaIcon);
document.getElementById('payment-tags').appendChild(masterIcon);
document.getElementById('payment-tags').appendChild(stripeIcon);

//Dish images
const d01Icon = new Image();
const d02Icon = new Image();
const d03Icon = new Image();
const d04Icon = new Image();
d01Icon.src = d01;
d02Icon.src = d02;
d03Icon.src = d03;
d04Icon.src = d04;
document.getElementById('d01').appendChild(d01Icon);
document.getElementById('d02').appendChild(d02Icon);
document.getElementById('d03').appendChild(d03Icon);
document.getElementById('d04').appendChild(d04Icon);
