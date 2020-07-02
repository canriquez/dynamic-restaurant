import { addTagToContainerId } from './genericrender.js';

// Main images import
import main01 from '../images/photo/main_01.jpg';
import takeAway from '../images/takeaway.svg';

// Payment Icons
import visa from '../icons/visa.svg';
import master from '../icons/mastercard.svg';
import paypal from '../icons/paypal.svg';
import stripe from '../icons/stripe.svg';


function renderMainSectionContainer() {
    let htmlTag = '<div id="hero-image"></div>';
    htmlTag += '<div class="photo-credits row-flex">';
    htmlTag += '<p>Photo by</p>';
    htmlTag += '<a href="https://unsplash.com/@briewilly?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Chad Montano</a>';
    htmlTag += '<p>on</p>';
    htmlTag += '<a href="https://unsplash.com/s/photos/pizza?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
    htmlTag += '</div><div class="brand-container col-flex">';
    htmlTag += '<div id="takeAwayBrand"></div><div class="brand-mission">'
    htmlTag += '<p>Take the yummy and the flavour home</p></div>';
    htmlTag += '<div class="options col-flex"><p>1. Choose your order type</p>';
    htmlTag += '<div class="button-section row-flex">';
    htmlTag += '<button class="btn btn-opt">pickup</button>';
    htmlTag += '<button class="btn btn-opt">delivery</button></div>';
    htmlTag += '</div><div class="action">';
    htmlTag += '<button class="btn btn-action">To the menu</button>';
    htmlTag += '</div><div id="payment-tags" class="row-flex"></div></div>';
    document.getElementById('main-section').innerHTML = htmlTag;
    return;
};

function addImagesMainContainer() {
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
}


function renderMainSection() {
    addTagToContainerId('content', 'section', 'main');
    addTagToContainerId('main', 'div', 'main-section');
    renderMainSectionContainer();
    addImagesMainContainer();
};

function clearMainSection() {
    document.getElementById('main-section').innerHTML = '';
};

function hideMainSection() {
    document.getElementById('main-section').classList.add('hide');
    document.getElementById('main-section').classList.remove('show');
};

function showMainSection() {
    document.getElementById('main-section').classList.add('show');
    document.getElementById('main-section').classList.remove('hide');
};

export { renderMainSection, clearMainSection, hideMainSection, showMainSection };