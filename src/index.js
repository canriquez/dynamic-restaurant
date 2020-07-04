/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */

import './style.css';
import { clearAllSections } from './components/genericrender';
import {
  renderNavigation, clearNavigation, hideNavigation, showNavigation,
} from './components/navigation';
import {
  renderMainSection, clearMainSection, hideMainSection, showMainSection,
} from './components/mainsection';
import {
  renderMenuSection, clearMenuSection, hideMenuSection, showMenuSection,
} from './components/menusection';
import {
  renderCartSection, clearCartSection, hideCartSection, showCartSection,
} from './components/cartsection';
import {
  renderContactSection, clearContactSection, hideContactSection, showContactSection,
} from './components/contactsection';
import {
  renderFooterSection, clearFooterSection, hideFooterSection, showFooterSection,
} from './components/footersection';


function pageLoad() {
  renderNavigation();
  addListeners();
  renderMainSection();
  renderMenuSection();
  renderCartSection();
  renderContactSection();
  renderFooterSection();
}

// tab-switching logic

function showMobileMenu() {
  document.getElementById('action-wrap').classList.remove('hide');
  document.getElementById('action-wrap').classList.add('show');
  document.getElementById('burger-menu').classList.remove('show');
  document.getElementById('burger-menu').classList.add('hide');
  document.getElementById('x-mobile-menu').classList.remove('hide');
  document.getElementById('x-mobile-menu').classList.add('show');
}

function hideMobileMenu() {
  document.getElementById('action-wrap').classList.remove('show');
  document.getElementById('action-wrap').classList.add('hide');
  document.getElementById('burger-menu').classList.remove('hide');
  document.getElementById('burger-menu').classList.add('show');
  document.getElementById('x-mobile-menu').classList.remove('show');
  document.getElementById('x-mobile-menu').classList.add('hide');
}

function home() {
  clearAllSections();
  pageLoad();
}

function menu() {
  clearAllSections();
  renderNavigation();
  addListeners();
  renderMenuSection();
  renderFooterSection();
}

function cart() {
  clearAllSections();
  renderNavigation();
  addListeners();
  renderCartSection();
  renderFooterSection();
}

function contact() {
  clearAllSections();
  renderNavigation();
  addListeners();
  renderContactSection();
  renderFooterSection();
}

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
  document.getElementById('burger-menu').addEventListener('click', () => {
    showMobileMenu();
  });
  document.getElementById('x-mobile-menu').addEventListener('click', () => {
    hideMobileMenu();
  });
}


document.addEventListener('DOMContentLoaded', () => {
  pageLoad();

  window.addEventListener('resize', () => {
    if (window.screen.width < 768) {
      document.getElementById('action-wrap').classList.add('hide');
      document.getElementById('burger-menu').classList.add('show');
      document.getElementById('burger-menu').classList.remove('hide');
    } else {
      document.getElementById('burger-menu').classList.add('hide');
      document.getElementById('action-wrap').classList.remove('hide');
      document.getElementById('action-wrap').classList.add('show');
    }
  });
});