import './style.css'
import { clearAllSections } from './components/genericrender';
import { renderNavigation, clearNavigation, hideNavigation, showNavigation } from './components/navigation';
import { renderMainSection, clearMainSection, hideMainSection, showMainSection } from './components/mainsection';
import { renderMenuSection, clearMenuSection, hideMenuSection, showMenuSection } from './components/menusection';
import { renderCartSection, clearCartSection, hideCartSection, showCartSection } from './components/cartsection';
import { renderContactSection, clearContactSection, hideContactSection, showContactSection } from './components/contactsection';
import { renderFooterSection, clearFooterSection, hideFooterSection, showFooterSection } from './components/footersection';

function addListeners() {
    // add event listeners to menu options on each render
    document.getElementById('m1').addEventListener('click', () => {
        home();
    });
    document.getElementById('m2').addEventListener('click', () => {
        menu();
    });
    document.getElementById('m3').addEventListener('click', () => {
        cart();
    });
    document.getElementById('m4').addEventListener('click', () => {
        contact();
    });
    return;
}

function pageLoad() {
    renderNavigation();
    addListeners();
    renderMainSection();
    renderMenuSection();
    renderCartSection();
    renderContactSection();
    renderFooterSection();
    return;
};

// tab-switching logic

function home() {
    clearAllSections();
    pageLoad();
    return;
};

function menu() {
    clearAllSections();
    renderNavigation();
    addListeners()
    renderMenuSection();
    renderFooterSection();
    return;
};

function cart() {
    clearAllSections();
    renderNavigation();
    addListeners()
    renderCartSection();
    renderFooterSection();
    return;
};

function contact() {
    clearAllSections();
    renderNavigation();
    addListeners()
    renderContactSection();
    renderFooterSection();
    return;
};


document.addEventListener('DOMContentLoaded', () => {
    pageLoad();
});