
import navIcon from '../images/burger.svg';
import brandLogo from '../images/dp_logo.svg';
import globalLogo from '../images/globe.svg';


function renderNavCartItemNumber(items) {
    document.getElementById('navItems').innerHTML = items;
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
    htmlTag += '<div id="global"></div></div></nav></header>';
    htmlTag += '<section id="main"></section>';

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

};

function clearNavigation() {
    document.getElementById('navigation').innerHTML = '';
};

function hideNavigation() {
    document.getElementById('navigation').classList.add('hide');
    document.getElementById('navigation').classList.remove('show');
};

function showNavigation() {
    document.getElementById('navigation').classList.add('show');
    document.getElementById('navigation').classList.remove('hide');
};

export { renderNavigation, clearNavigation, hideNavigation, showNavigation };