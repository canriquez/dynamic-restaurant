
import { addTagToContainerId, updateSectionName, renderSectionContainer } from './genericrender';
// form images
import restaurant from '../images/photo/restaurant.jpg';

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


function renderContactSection() {
  // Add Form Section
  addTagToContainerId('main', 'div', 'formSection', 'form row-flex');
  renderSectionContainer('formSection', 'form-section-title', 'section-title');
  updateSectionName('form-section-title', 'contact us');
  renderContactForm();
}

function clearContactSection() {
  document.getElementById('formSection').innerHTML = '';
}

function hideContactSection() {
  document.getElementById('formSection').classList.add('hide');
  document.getElementById('formSection').classList.remove('show');
}

function showContactSection() {
  document.getElementById('formSection').classList.add('show');
  document.getElementById('formSection').classList.remove('hide');
}

export {
  renderContactSection, clearContactSection, hideContactSection, showContactSection,
};
