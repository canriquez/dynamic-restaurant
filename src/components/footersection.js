import { addTagToContainerId } from './genericrender.js';


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

function renderFooterSection() {
    //Add Footer Section
    addTagToContainerId('main', 'footer', 'page-footer', '');
    addTagToContainerId('page-footer', 'div', 'footerWrap', 'footer-wrap row-flex');
    renderFooter();
    return;
}

function clearFooterSection() {
    document.getElementById('footer').innerHTML = '';
};

function hideFooterSection() {
    document.getElementById('footer').classList.add('hide');
    document.getElementById('footer').classList.remove('show');
};

function showFooterSection() {
    document.getElementById('footer').classList.add('show');
    document.getElementById('footer').classList.remove('hide');
};

export { renderFooterSection, clearFooterSection, hideFooterSection, showFooterSection };
