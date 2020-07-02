import { addTagToContainerId, updateSectionName, renderSectionContainer } from './genericrender.js';
import { dishes } from './dishmenu.js';

//Dish Images
import d01 from '../images/photo/d01.jpg'
import d02 from '../images/photo/d02.jpg'
import d03 from '../images/photo/d03.jpg'
import d04 from '../images/photo/d04.jpg'
import d05 from '../images/photo/d05.jpg'
import d06 from '../images/photo/d06.jpg'
import d07 from '../images/photo/d07.jpg'


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

function renderMenuSection() {
    //Add Menu Section
    addTagToContainerId('main', 'div', 'menuSection', 'menuSection row-flex');
    renderSectionContainer('menuSection', 'menu-section-title', 'section-title');
    updateSectionName('menu-section-title', 'our menu');

    //build dish menu
    buildDishMenu();

};

function clearMenuSection() {
    document.getElementById('menuSection').innerHTML = '';
};

function hideMenuSection() {
    document.getElementById('menuSection').classList.add('hide');
    document.getElementById('menuSection').classList.remove('show');
};

function showMenuSection() {
    document.getElementById('menuSection').classList.add('show');
    document.getElementById('menuSection').classList.remove('hide');
};

export { renderMenuSection, clearMenuSection, hideMenuSection, showMenuSection };