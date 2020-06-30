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
