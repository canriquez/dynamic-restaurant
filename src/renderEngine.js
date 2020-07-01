
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



// Dish Array

const dishes = [
    {
        dishName: 'PIZZA MARGARITA',
        dishDescription: 'Enjoy our very best home made pizza margerita. Tomato, basil and muzzarella',
        buttonDescription: 'add Margarita to cart',
        priceTag: '$ 7.50',
        dishGroup: 'PIZZA',
        photoId: 'd01',
        photoSource1: '<a href="https://unsplash.com/@dabyki?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nadezhda Filatova</a>',
        photoSource2: '<a href="https://unsplash.com/s/photos/pizza-and-pasta?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    },
    {
        dishName: 'PEPPE PIZZA',
        dishDescription: 'Delicious Shredded Mozzarella, Parmesan, Tomato Souce, Basil and Italian pepperoni.',
        buttonDescription: 'add Peppe Pizza to cart',
        priceTag: '$ 8.50',
        dishGroup: 'PIZZA',
        photoId: 'd02',
        photoSource1: '<a href="https://unsplash.com/@shootdelicious?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Eiliv-Sonas Aceron</a>',
        photoSource2: '<a href="https://unsplash.com/s/photos/pizza-and-pasta?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    },
    {
        dishName: 'PIZZA ANANA',
        dishDescription: '(Not in Naples!) Enjoy your flavours. Tomato, Pinnaple, Muzzarella and Jam!',
        buttonDescription: 'add Pizza Anana to cart',
        priceTag: '$ 8.20',
        dishGroup: 'PIZZA',
        photoId: 'd03',
        photoSource1: '<a href="https://unsplash.com/@dabyki?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nadezhda Filatova</a>',
        photoSource2: '<a href="https://unsplash.com/s/photos/pizza-and-pasta?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    },
    {
        dishName: 'PIZZA FUNGUI',
        dishDescription: 'Mozzarella cheese, goat cheese, mashrooms and fresh herbs',
        buttonDescription: 'add Pizza Fungui to cart',
        priceTag: '$ 9.10',
        dishGroup: 'PIZZA',
        photoId: 'd04',
        photoSource1: '<a href="https://unsplash.com/@pinarimsi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pinar Kucuk </a>',
        photoSource2: '<a href="https://unsplash.com/s/photos/pizza-and-pasta?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    },
    {
        dishName: 'spagetti capresse',
        dishDescription: 'Fresh tomatoes, mozzarella and basil. Is the perfect combination. Enjoy!',
        buttonDescription: 'add capresse to cart',
        priceTag: '$ 9.75',
        dishGroup: 'PASTA',
        photoId: 'd05',
        photoSource1: '<a href="https://unsplash.com/@foxfox?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Natalia Y </a>',
        photoSource2: '<a href="https://unsplash.com/s/photos/pizza-and-pasta?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    },

    {
        dishName: 'pasta pescatora',
        dishDescription: 'Shrimp Tomato Spinach Pasta in Garlic Butter Sauce. Delicious!',
        buttonDescription: 'add pescatora to cart',
        priceTag: '$ 11.20',
        dishGroup: 'PASTA',
        photoId: 'd06',
        photoSource1: '<a href="https://unsplash.com/@islandsandsunsets?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Olayinka Babalola </a>',
        photoSource2: '<a href="https://unsplash.com/s/photos/pizza-and-pasta?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    },
    {
        dishName: 'Punch Tagliatelle',
        dishDescription: 'Tagliatelle with pumpkin, pancetta, sage and a little chilli for nice punch.!',
        buttonDescription: 'add Tagliatelle to cart',
        priceTag: '$ 10.50',
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
    //const d05cIcon = new Image();
    const d06Icon = new Image();
    const d07Icon = new Image();
    //onst d07cIcon = new Image();
    d01Icon.src = d01;
    d02Icon.src = d02;
    d03Icon.src = d03;
    d04Icon.src = d04;
    d05Icon.src = d05;
    //d05cIcon.src = d05;
    d06Icon.src = d06;
    d07Icon.src = d07;
    //d07cIcon.src = d07;

    document.getElementById('d01').appendChild(d01Icon);
    document.getElementById('d02').appendChild(d02Icon);
    document.getElementById('d03').appendChild(d03Icon);
    document.getElementById('d04').appendChild(d04Icon);
    document.getElementById('d05').appendChild(d05Icon);
    //document.getElementById('d05c').appendChild(d05cIcon);
    document.getElementById('d06').appendChild(d06Icon);
    document.getElementById('d07').appendChild(d07Icon);
    //document.getElementById('d07c').appendChild(d07cIcon);


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

function renderSectionContainer(childOfId, name) {
    let contentTag = document.getElementById(childOfId);

    let newTag = document.createElement('div');
    newTag.setAttribute("class", name);
    newTag.setAttribute("id", name);

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
    htmlTag += '</div><div class="price-tag"><p>' + dish.priceTag + '</p></div>';
    htmlTag += '<div class="dish-description"><h1>' + dish.dishName + '</h1>';
    htmlTag += '<p>' + dish.dishDescription + '</p></div>';
    htmlTag += '<div class="quantity row-flex">';
    htmlTag += '<button class="btn btn-dish"><span>-</span></button>';
    htmlTag += '<p>0</p><button class="btn btn-dish"><span>+</span></button></div>';
    htmlTag += '<button class="btn btn-dish">' + dish.buttonDescription + '</button></div>';
    return htmlTag;
}

function buildDishMenu() {

    let dish = renderDishCard(dishes[0]);
    dish += renderDishCard(dishes[1]);
    dish += renderDishCard(dishes[2]);
    dish += renderDishCard(dishes[3]);
    dish += renderDishCard(dishes[4]);
    dish += renderDishCard(dishes[5]);
    dish += renderDishCard(dishes[6]);
    document.getElementById('menuSection').innerHTML = dish;
    addImagesMenuContainer();
    return


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
}

function renderMainContent() {
    addTagToContainerId('content', 'section', 'main');
    addTagToContainerId('main', 'div', 'main-section');
    renderMainSectionContainer();
    addImagesMainContainer();

    //Add Menu Section
    addTagToContainerId('main', 'div', 'menuSection', 'menu-cards row-flex');
    renderSectionContainer('menuSection', 'section-title');
    updateSectionName('section-title', 'our menu');

    //build dish menu

    buildDishMenu();
}




export { renderNavigation, renderMainContent };
