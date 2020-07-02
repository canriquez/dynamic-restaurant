import './style.css'
import { renderNavigation, clearNavigation, hideNavigation, showNavigation } from './components/navigation';
import { renderMainSection, clearMainSection, hideMainSection, showMainSection } from './components/mainsection';
import { renderMenuSection, clearMenuSection, hideMenuSection, showMenuSection } from './components/menusection';
import { renderCartSection, clearCartSection, hideCartSection, showCartSection } from './components/cartsection';
import { renderContactSection, clearContactSection, hideContactSection, showContactSection } from './components/contactsection';
import { renderFooterSection, clearFooterSection, hideFooterSection, showFooterSection } from './components/footersection';

console.log("init webpack done");


//================== RENDERING ENGINE ==========

renderNavigation();
renderMainSection();
renderMenuSection();
renderCartSection();
//clearMainSection();
renderContactSection();
renderFooterSection();

//==============================================

