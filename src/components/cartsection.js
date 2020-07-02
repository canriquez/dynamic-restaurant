import { addTagToContainerId, updateSectionName, renderSectionContainer } from './genericrender.js';
import { dishes } from './dishmenu.js';

//Dish Images
import d05 from '../images/photo/d05.jpg'
import d07 from '../images/photo/d07.jpg'

function addImagesCartContainer() {
    //Dish images cart
    const d05cIcon = new Image();
    const d07cIcon = new Image();
    d05cIcon.src = d05;
    d07cIcon.src = d07;
    document.getElementById('d05c').appendChild(d05cIcon);
    document.getElementById('d07c').appendChild(d07cIcon);
}

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

function renderCartSection() {
    addTagToContainerId('main', 'div', 'cartSection', 'cart row-flex');
    renderSectionContainer('cartSection', 'cart-section-title', 'section-title');
    updateSectionName('cart-section-title', 'your cart');
    buildCart();
    return;
};


function clearCartSection() {
    document.getElementById('menuSection').innerHTML = '';
};

function hideCartSection() {
    document.getElementById('menuSection').classList.add('hide');
    document.getElementById('menuSection').classList.remove('show');
};

function showCartSection() {
    document.getElementById('menuSection').classList.add('show');
    document.getElementById('menuSection').classList.remove('hide');
};

export { renderCartSection, clearCartSection, hideCartSection, showCartSection };