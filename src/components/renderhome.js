
import { addTagToContainerId } from './components/genericrender';

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


export { renderHome };