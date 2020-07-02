
import navIcon from './images/burger.svg';
import brandLogo from './images/dp_logo.svg';
import globalLogo from './images/globe.svg';

// Main images import
import main01 from './images/photo/main_01.jpg';
import takeAway from './images/takeaway.svg';

// Payment Icons

import visa from './icons/visa.svg';
import master from './icons/mastercard.svg';
import paypal from './icons/paypal.svg';
import stripe from './icons/stripe.svg';

//Dish Images
import d01 from './images/photo/d01.jpg'
import d02 from './images/photo/d02.jpg'
import d03 from './images/photo/d03.jpg'
import d04 from './images/photo/d04.jpg'
import d05 from './images/photo/d05.jpg'
import d06 from './images/photo/d06.jpg'
import d07 from './images/photo/d07.jpg'

//form images
import restaurant from './images/photo/restaurant.jpg'


// Dish Array

const dishes = [
    {
        dishName: 'PIZZA MARGARITA',
        dishDescription: 'Enjoy our very best home made pizza margerita. Tomato, basil and muzzarella',
        buttonDescription: 'add Margarita to cart',
        priceTag: 7.50,
        dishGroup: 'PIZZA',
        photoId: 'd01',
        photoSource1: '<a href="https://unsplash.com/@dabyki?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nadezhda Filatova</a>',
        photoSource2: '<a href="https://unsplash.com/s/photos/pizza-and-pasta?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    },
    {
        dishName: 'PEPPE PIZZA',
        dishDescription: 'Delicious Mozzarella, Parmesan, Tomato, Basil and Italian pepperoni.',
        buttonDescription: 'add Peppe Pizza to cart',
        priceTag: 8.50,
        dishGroup: 'PIZZA',
        photoId: 'd02',
        photoSource1: '<a href="https://unsplash.com/@shootdelicious?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Eiliv-Sonas Aceron</a>',
        photoSource2: '<a href="https://unsplash.com/s/photos/pizza-and-pasta?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    },
    {
        dishName: 'PIZZA ANANA',
        dishDescription: '(Not in Naples!) Enjoy your flavours. Tomato, Pinnaple, Muzzarella and Jam!',
        buttonDescription: 'add Pizza Anana to cart',
        priceTag: 8.20,
        dishGroup: 'PIZZA',
        photoId: 'd03',
        photoSource1: '<a href="https://unsplash.com/@dabyki?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nadezhda Filatova</a>',
        photoSource2: '<a href="https://unsplash.com/s/photos/pizza-and-pasta?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    },
    {
        dishName: 'PIZZA FUNGUI',
        dishDescription: 'Mozzarella cheese, goat cheese, mashrooms and fresh herbs',
        buttonDescription: 'add Pizza Fungui to cart',
        priceTag: 9.10,
        dishGroup: 'PIZZA',
        photoId: 'd04',
        photoSource1: '<a href="https://unsplash.com/@pinarimsi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pinar Kucuk </a>',
        photoSource2: '<a href="https://unsplash.com/s/photos/pizza-and-pasta?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    },
    {
        dishName: 'spagetti capresse',
        dishDescription: 'Fresh tomatoes, mozzarella and basil. Is the perfect combination. Enjoy!',
        buttonDescription: 'add capresse to cart',
        priceTag: 9.75,
        dishGroup: 'PASTA',
        photoId: 'd05',
        photoSource1: '<a href="https://unsplash.com/@foxfox?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Natalia Y </a>',
        photoSource2: '<a href="https://unsplash.com/s/photos/pizza-and-pasta?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    },

    {
        dishName: 'pasta pescatora',
        dishDescription: 'Shrimp Tomato Spinach Pasta in Garlic Butter Sauce. Delicious!',
        buttonDescription: 'add pescatora to cart',
        priceTag: 11.20,
        dishGroup: 'PASTA',
        photoId: 'd06',
        photoSource1: '<a href="https://unsplash.com/@islandsandsunsets?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Olayinka Babalola </a>',
        photoSource2: '<a href="https://unsplash.com/s/photos/pizza-and-pasta?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    },
    {
        dishName: 'Punch Tagliatelle',
        dishDescription: 'Tagliatelle with pumpkin, pancetta, sage and a little chilli for nice punch.!',
        buttonDescription: 'add Tagliatelle to cart',
        priceTag: 10.50,
        dishGroup: 'PASTA',
        photoId: 'd07',
        photoSource1: '<a href="https://unsplash.com/@ib1994?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Izzy Boscawen </a>',
        photoSource2: '<a href="https://unsplash.com/s/photos/pizza-and-pasta?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    },

];


function renderNavCartItemNumber(items) {
    document.getElementById('navItems').innerHTML = items;
}

function addTagToContainerId(containerId, tagType, tagId = '', classes = '') {
    let contentTag = document.getElementById(containerId);
    let newTag = document.createElement(tagType);
    if (tagId != '') {
        newTag.setAttribute("id", tagId);
    }

    if (classes != '') {
        newTag.setAttribute("class", classes);
    };
    contentTag.appendChild(newTag);
    return
}

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

function addImagesMenuContainer() {
    //Dish images menu
    const d01Icon = new Image();
    const d02Icon = new Image();
    const d03Icon = new Image();
    const d04Icon = new Image();
    const d05Icon = new Image();

    const d06Icon = new Image();
    const d07Icon = new Image();

    d01Icon.src = d01;
    d02Icon.src = d02;
    d03Icon.src = d03;
    d04Icon.src = d04;
    d05Icon.src = d05;

    d06Icon.src = d06;
    d07Icon.src = d07;


    document.getElementById('d01').appendChild(d01Icon);
    document.getElementById('d02').appendChild(d02Icon);
    document.getElementById('d03').appendChild(d03Icon);
    document.getElementById('d04').appendChild(d04Icon);
    document.getElementById('d05').appendChild(d05Icon);

    document.getElementById('d06').appendChild(d06Icon);
    document.getElementById('d07').appendChild(d07Icon);


}

function addImagesCartContainer() {
    //Dish images cart
    const d05cIcon = new Image();
    const d07cIcon = new Image();
    d05cIcon.src = d05;
    d07cIcon.src = d07;
    document.getElementById('d05c').appendChild(d05cIcon);
    document.getElementById('d07c').appendChild(d07cIcon);
}

function renderNavigation() {
    let htmlTag = '<header id="navigation">';
    htmlTag += '<nav class="nav-wrap row-flex">';
    htmlTag += '<div class="left-wrap row-flex">';
    htmlTag += '<div id="burger-menu"></div>';
    htmlTag += '<div id="brand-nav"></div></div>';
    htmlTag += '<div class="action-wrap row-flex">';
    htmlTag += '<p id="m1">home</p>';
    htmlTag += '<p id="m2">our menu</p>';
    htmlTag += '<p id="m3" class="row-flex">your cart<span id="navItems">2</span></p>';
    htmlTag += '<p id="m4" class="row-flex">contact us</p>';
    htmlTag += '</div><div id="global"></div></nav></header>';

    document.getElementById('content').innerHTML = htmlTag;
    // Add Navigation Icons

    const navMenuIcon = new Image();
    const navBrand = new Image();
    const navGlobal = new Image();
    navMenuIcon.src = navIcon;
    navBrand.src = brandLogo;
    navGlobal.src = globalLogo;
    document.getElementById('burger-menu').appendChild(navMenuIcon);
    document.getElementById('brand-nav').appendChild(navBrand);
    document.getElementById('global').appendChild(navGlobal);

    renderNavCartItemNumber(3);
    return
};

function updateSectionName(sectionName, name) {
    let htmlTag = '<h1>' + name + '</h1>';
    document.getElementById(sectionName).innerHTML = htmlTag;
}

function renderSectionContainer(childOfId, idName, className) {
    let contentTag = document.getElementById(childOfId);

    let newTag = document.createElement('div');
    newTag.setAttribute("class", className);
    newTag.setAttribute("id", idName);

    contentTag.appendChild(newTag);
    return;
}

function renderDishCard(dish) {
    let htmlTag = '<div class="dish-card col-flex">';
    htmlTag += '<div id="' + dish.photoId + '" class="dish-image">';
    htmlTag += '</div><div class="food"><p>' + dish.dishGroup + '</p></div>';
    htmlTag += '<div class="photo-credits row-flex"><p>Photo by</p>';
    htmlTag += dish.photoSource1;
    htmlTag += dish.photoSource2;
    htmlTag += '</div><div class="price-tag"><p>' + dish.priceTag.toFixed(2) + ' $</p></div>';
    htmlTag += '<div class="dish-description"><h1>' + dish.dishName + '</h1>';
    htmlTag += '<p>' + dish.dishDescription + '</p></div>';
    htmlTag += '<div class="quantity row-flex">';
    htmlTag += '<button class="btn btn-dish"><span>-</span></button>';
    htmlTag += '<p>0</p><button class="btn btn-dish"><span>+</span></button></div>';
    htmlTag += '<button class="btn btn-dish">' + dish.buttonDescription + '</button></div>';
    return htmlTag;
}

function buildDishMenu() {
    addTagToContainerId('menuSection', 'div', 'menuWrap', 'menu-cards row-flex');
    let dish = renderDishCard(dishes[0]);
    dish += renderDishCard(dishes[1]);
    dish += renderDishCard(dishes[2]);
    dish += renderDishCard(dishes[3]);
    dish += renderDishCard(dishes[4]);
    dish += renderDishCard(dishes[5]);
    dish += renderDishCard(dishes[6]);
    document.getElementById('menuWrap').innerHTML = dish;
    addImagesMenuContainer();
    return
};

function renderCartItem(dish, q) {
    let subtotal = q * dish.priceTag;
    let htmlTag = '<div class="dish-card-cart row-flex">';
    htmlTag += '<div id="' + dish.photoId + 'c" class="dish-image">';
    htmlTag += '</div><div class="food"><p>' + dish.dishGroup + '</p></div>';
    htmlTag += '<div class="dish-description"><h1>' + dish.dishName + '</h1>';
    htmlTag += '<p>' + dish.dishDescription + '</p>';
    htmlTag += '</div><div class="price-tag row-flex">'
    htmlTag += '<p>$</p><p>' + dish.priceTag + '</p></div>';
    htmlTag += '<p>X</p><div class="quantity row-flex">';
    htmlTag += '<button class="btn btn-dish"><span>-</span></button>';
    htmlTag += '<p>' + q + '</p>';
    htmlTag += '<button class="btn btn-dish"><span>+</span></button></div>';
    htmlTag += '<div class="price-tag row-flex">';
    htmlTag += '<p>=</p><p>$</p><p>' + subtotal.toFixed(2) + '</p></div>';
    htmlTag += '<div class="btn-delete"></div></div>';
    return [subtotal, htmlTag];
}

function renderCartTotal(total) {
    let htmlTag = '<div class="total row-flex">';
    htmlTag += '<p>Total:</p><p>' + total + ' $</p>';
    htmlTag += '<button class="btn btn-action">Submit your Order</button></div>';
    return htmlTag;
}

function buildCart() {
    addTagToContainerId('cartSection', 'div', 'cartWrap', 'cart row-flex');
    let item1 = renderCartItem(dishes[4], 1);
    let item2 = renderCartItem(dishes[6], 2);
    let htmlTag = item1[1] + item2[1];
    let total = item1[0] + item2[0];
    htmlTag += renderCartTotal(total);
    document.getElementById('cartWrap').innerHTML = htmlTag;
    addImagesCartContainer();
}

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

function renderFooter() {
    let htmlTag = '<div class="col-wrap"><p>About us</p><ul class="about">';
    htmlTag += '<li>Menu</li><li>Restaurants</li><li>Freshness</li><li>About us</li>';
    htmlTag += '</ul></div><div class="col-wrap"><p>Legal</p><ul class="about">';
    htmlTag += '<li>Terms and Conditions</li><li>Data Security</li></ul></div>';
    htmlTag += '<div class="col-wrap"><p>International</p><ul class="about">';
    htmlTag += '<li>Germany</li><li>Sweden</li><li>United Kingdom</li><li>Franchise Portal</li></ul></div>';
    document.getElementById('footerWrap').innerHTML = htmlTag;
    return;
}

function renderContactForm() {
    const formImage = new Image();
    formImage.src = restaurant;
    addTagToContainerId('formSection', 'div', 'contactWrap');
    addTagToContainerId('contactWrap', 'div', 'contactForm', 'contact-card col-flex');
    let htmlTag = '<div id="hero-form-image"></div>';
    htmlTag += '<div class="form-message">';
    htmlTag += '<p>Fillout the form to learn more</p></div>';
    htmlTag += '<div class="formCol col-flex"><form><div class="formRow row-flex">';
    htmlTag += '<div class="inputForm col-flex"><label for="name">first name</label>';
    htmlTag += '<input type="text" name="first_name" placeholder="John"/></div>';
    htmlTag += '<div class="inputForm col-flex"><label for="email">email</label>';
    htmlTag += '<input type="email" name="email" placeholder="john.smith@gmail.com"/></div></div>';
    htmlTag += '<div class="divider"></div>';
    htmlTag += '<div class="inputForm col-flex"><label for="comments">comments</label>';
    htmlTag += '<textarea cols="46" rows="3" name="comments"></textarea></div>';
    htmlTag += '<button class="btn btn-action">Send Message</button></div></form></div>';


    document.getElementById('contactForm').innerHTML = htmlTag;
    document.getElementById('hero-form-image').appendChild(formImage);

}

function renderHome() {
    addTagToContainerId('content', 'section', 'main');
    addTagToContainerId('main', 'div', 'main-section');
    renderMainSectionContainer();
    addImagesMainContainer();

    //Add Menu Section
    addTagToContainerId('main', 'div', 'menuSection', 'menuSection row-flex');
    renderSectionContainer('menuSection', 'menu-section-title', 'section-title');
    updateSectionName('menu-section-title', 'our menu');


    //build dish menu
    buildDishMenu();


    //Add Cart Section
    addTagToContainerId('main', 'div', 'cartSection', 'cart row-flex');
    renderSectionContainer('cartSection', 'cart-section-title', 'section-title');
    updateSectionName('cart-section-title', 'your cart');

    //build cart
    buildCart();

    // Add Form Section
    addTagToContainerId('main', 'div', 'formSection', 'form row-flex');
    renderSectionContainer('formSection', 'form-section-title', 'section-title');
    updateSectionName('form-section-title', 'contact us');
    renderContactForm();


    //Add Footer Section
    addTagToContainerId('main', 'footer', 'page-footer', '');
    addTagToContainerId('page-footer', 'div', 'footerWrap', 'footer-wrap row-flex');
    renderFooter();



}


export { renderHome, renderMainContent };
