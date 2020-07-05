!function(n){var e={};function t(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return n[i].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=n,t.c=e,t.d=function(n,e,i){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:i})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var a in n)t.d(i,a,function(e){return n[e]}.bind(null,a));return i},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=9)}([function(n,e,t){var i=t(1),a=t(2);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var o={insert:"head",singleton:!1};i(a,o);n.exports=a.locals||{}},function(n,e,t){"use strict";var i,a=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),r=[];function d(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function s(n,e){for(var t={},i=[],a=0;a<n.length;a++){var o=n[a],s=e.base?o[0]+e.base:o[0],c=t[s]||0,l="".concat(s," ").concat(c);t[s]=c+1;var p=d(l),m={css:o[1],media:o[2],sourceMap:o[3]};-1!==p?(r[p].references++,r[p].updater(m)):r.push({identifier:l,updater:g(m,e),references:1}),i.push(l)}return i}function c(n){var e=document.createElement("style"),i=n.attributes||{};if(void 0===i.nonce){var a=t.nc;a&&(i.nonce=a)}if(Object.keys(i).forEach((function(n){e.setAttribute(n,i[n])})),"function"==typeof n.insert)n.insert(e);else{var r=o(n.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}return e}var l,p=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function m(n,e,t,i){var a=t?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(n.styleSheet)n.styleSheet.cssText=p(e,a);else{var o=document.createTextNode(a),r=n.childNodes;r[e]&&n.removeChild(r[e]),r.length?n.insertBefore(o,r[e]):n.appendChild(o)}}function u(n,e,t){var i=t.css,a=t.media,o=t.sourceMap;if(a?n.setAttribute("media",a):n.removeAttribute("media"),o&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=i;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(i))}}var f=null,h=0;function g(n,e){var t,i,a;if(e.singleton){var o=h++;t=f||(f=c(e)),i=m.bind(null,t,o,!1),a=m.bind(null,t,o,!0)}else t=c(e),i=u.bind(null,t,e),a=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return i(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;i(n=e)}else a()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=a());var t=s(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var i=0;i<t.length;i++){var a=d(t[i]);r[a].references--}for(var o=s(n,e),c=0;c<t.length;c++){var l=d(t[c]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}t=o}}}},function(n,e,t){var i=t(3),a=t(4),o=t(5),r=t(6),d=t(7),s=t(8);e=i(!1);var c=a(o),l=a(r),p=a(d),m=a(s);e.push([n.i,"/* stylelint-disable  no-descending-specificity */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #f8f9fa;\n  font-family: futura-light, sans-serif;\n}\n\n/* ================ fonts ================ */\n\n@font-face {\n  font-family: futura-bold;\n  src: url("+c+') format("ttf");\n  font-weight: 600;\n}\n\n@font-face {\n  font-family: futura-normal;\n  src: url('+l+') format("ttf");\n  font-weight: 400;\n}\n\n@font-face {\n  font-family: futura-light;\n  src: url('+p+') format("ttf");\n  font-weight: 200;\n}\n\n/* ================ generic ================ */\n\n.row-flex {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.col-flex {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.hide {\n  display: none !important;\n}\n\n.show {\n  display: "" !important;\n}\n\n/* ================ section ================ */\n\n.section-title {\n  width: 100%;\n  padding: 20px 0;\n}\n\n.section-title h1 {\n  font-family: futura-medium, sans-serif;\n  text-align: left;\n  align-self: flex-start;\n  font-size: 1.4rem;\n  margin: 0 10px;\n  text-transform: uppercase;\n  color: #d40028;\n}\n\n/* ================ header navigation ================ */\n\n#navigation {\n  background-color: white;\n  position: fixed;\n  display: block;\n  width: 100%;\n  top: 0;\n  left: 0;\n  border-bottom: 1px solid #e9ecef;\n  z-index: 1;\n  overflow: hidden;\n}\n\n.nav-wrap {\n  max-width: 1140px;\n  height: 90px;\n  width: 100%;\n  padding: 12px 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.left-wrap {\n  justify-content: flex-start;\n  width: 60%;\n}\n\n#burger-menu img {\n  width: 36px;\n  height: 24px;\n}\n\n#brand-nav {\n  padding-top: 24px;\n  padding-left: 10px;\n}\n\n#brand-nav img {\n  width: 100%;\n}\n\n#global img {\n  width: 2.5vw;\n  padding-right: 0;\n}\n\n.action-wrap {\n  width: 50%;\n  transition: all 400ms ease-in-out;\n}\n\n.action-wrap p {\n  font-family: futura-bold, sans-serif;\n  font-size: 0.8rem;\n  color: #d40028;\n  margin: 0;\n  text-transform: uppercase;\n  cursor: pointer;\n}\n\n.action-wrap span {\n  font-family: futura-bold, sans-serif;\n  font-size: 0.5rem;\n  padding: 0 5px;\n  margin-left: 5px;\n  color: #fff;\n  background-color: #d40028;\n  border-radius: 100%;\n}\n\n/* x-small devices (phones, 600px and down) */\n@media only screen and (max-width: 414px) {\n  #burger-menu {\n    display: block;\n  }\n\n  #navigation .nav-wrap {\n    height: 90px;\n    width: 100%;\n  }\n\n  #content .left-wrap {\n    width: 100%;\n  }\n\n  #x-mobile-menu img {\n    width: 36px;\n    height: 24px;\n  }\n\n  #brand-nav {\n    padding: 20px 20px 0 15px;\n    width: 100%;\n  }\n\n  #content .action-wrap {\n    position: fixed;\n    flex-direction: column;\n    width: 100vw;\n    height: 40vh;\n    top: 91px;\n    left: 50%;\n    transform: translateX(-50%);\n    background-color: rgba(212, 0, 40, 0.9);\n    padding-top: 10px;\n    transition: all 400ms ease-in-out;\n  }\n\n  #content .action-wrap p {\n    text-align: center;\n    margin: 10px auto;\n    font-size: 1.1rem;\n    color: #fff;\n  }\n\n  #content .action-wrap #navItems {\n    font-size: 0.8rem;\n  }\n\n  content .action-wrap #m3 {\n    justify-content: center;\n  }\n\n  #content .action-wrap span {\n    color: #d40028;\n    background-color: #fff;\n  }\n\n  #global img {\n    display: none;\n  }\n}\n\n/* =================== tablet display ====== */\n@media only screen and (min-width: 768px) and (max-width: 1200px) {\n  .action-wrap {\n    display: flex !important;\n    width: 60%;\n  }\n}\n\n/* =======  Buttons  =========   */\n.btn {\n  display: block;\n  padding: 0.5rem 1rem;\n  font-family: futura-light, sans-serif;\n  font-size: 0.9rem;\n  line-height: 1.5;\n  border-radius: 0.3rem;\n  opacity: 0.65;\n}\n\n.btn-dish {\n  font-family: futura-light, sans-serif;\n  border: 1px solid transparent;\n  padding: 0.375rem 0.75rem;\n  font-size: 0.8rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n  width: 85%;\n  margin: 0 15px 10px 15px;\n}\n\n.btn-dish:hover,\n.btn-dish:focus {\n  color: #fff;\n  background-color: #d40028;\n}\n\n.btn-action {\n  color: #fff;\n  background-color: #d40028;\n  border-color: #d40028;\n}\n\n.btn-opt {\n  color: #d40028;\n  background-color: transparent;\n  border-color: #d40028;\n}\n\n.btn-opt:hover,\n.btn-opt:focus {\n  color: #fff;\n  background-color: #d40028;\n}\n\n.btn-delete {\n  background-image: url('+m+");\n  position: relative;\n  display: inline-block;\n  width: 24px;\n  height: 24px;\n  margin: 0 20px;\n  fill: gray !important;\n}\n\n/* =======  Main Header ======   */\n\n#main {\n  max-width: 1160px;\n  padding: 84px 15px 0 15px;\n  margin-left: auto;\n  margin-right: auto;\n  z-index: 0;\n  overflow: hidden;\n}\n\n#main-section {\n  position: relative;\n}\n\n#hero-image img {\n  width: 100%;\n  height: 75vh;\n  object-fit: cover;\n  transition: opacity 1s ease-in-out;\n  opacity: 0.9;\n  transform: scaleX(-1);\n}\n\n.photo-credits {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  padding: 5px;\n  background-color: rgba(255, 255, 255, 0.6);\n}\n\n.photo-credits p {\n  font-size: 0.8rem;\n  color: gray;\n  margin: 3px;\n}\n\n.photo-credits a {\n  font-size: 0.8rem;\n  text-decoration: none;\n  color: gray;\n  margin: 3px;\n}\n\n.price-tag {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 5px;\n  margin: 5px;\n  background-color: rgba(255, 255, 255, 0.8);\n}\n\n.price-tag p {\n  font-family: futura-bold, sans-serif;\n  font-size: 1.1rem;\n  color: #d40028;\n  margin: 3px;\n}\n\n.brand-container {\n  position: absolute;\n  justify-content: space-around;\n  top: 50%;\n  left: 5%;\n  transform: translateY(-50%);\n  width: 30%;\n  height: 80%;\n  background-color: rgba(255, 255, 255, 0.7);\n  overflow: hidden;\n}\n\n#takeAwayBrand {\n  width: 100%;\n  padding: 20px 20px 0 20px;\n  text-align: center;\n}\n\n#takeAwayBrand img {\n  width: 100%;\n}\n\n.brand-mission,\n.action {\n  width: 100%;\n  text-align: center;\n}\n\n.brand-mission p {\n  padding: 0 10px;\n  font-family: futura-light, sans-serif;\n  font-size: 1.5vw;\n  line-height: 1.8rem;\n  margin: 0;\n  color: #48453c;\n}\n\n.options {\n  width: 100%;\n  padding: 0 10px;\n  text-align: center;\n}\n\n.action {\n  padding: 0 10px;\n}\n\n.action button {\n  width: 100%;\n  height: 50px;\n}\n\n.button-section {\n  width: 100%;\n}\n\n.options .button-section button {\n  width: 48%;\n  justify-content: space-between;\n}\n\n.options p {\n  align-self: flex-start;\n  font-family: futura-light, sans-serif;\n  font-size: 1.5vw;\n  line-height: 1.8rem;\n  color: #48453c;\n}\n\n/* x-small devices (phones, 600px and down) */\n@media only screen and (max-width: 414px) {\n  .btn-opt {\n    font-size: 0.8rem;\n    margin: 12px 0;\n  }\n\n  .btn-action {\n    font-size: 1rem;\n  }\n\n  .photo-credits {\n    padding: 2px;\n    margin: 2px;\n  }\n\n  .photo-credits p,\n  .photo-credits a {\n    font-family: futura-light, sans-serif;\n    font-size: 0.7rem;\n  }\n\n  .brand-container {\n    width: 90%;\n    height: 87%;\n    justify-content: space-around;\n    background-color: rgba(255, 255, 255, 0.8);\n  }\n\n  .brand-container .brand-mission p,\n  .brand-container .options p {\n    font-size: 1rem;\n  }\n}\n\n/* x-small devices (phones, 600px and down) */\n@media only screen and (min-width: 768px) and (max-width: 1200px) {\n  .brand-container {\n    width: 40%;\n    height: 60%;\n    top: 35%;\n    justify-content: space-around;\n    background-color: rgba(255, 255, 255, 0.8);\n  }\n\n  .brand-container .brand-mission p,\n  .brand-container .options p {\n    font-size: 1.2rem;\n  }\n}\n\n/* ============== menu cards ============= */\n\n.menuSection {\n  padding-top: 10vh;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n\n.menu-cards {\n  padding-top: 2vh;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n\n.dish-card {\n  position: relative;\n  justify-content: space-between;\n  align-items: center;\n  margin: 40px 10px;\n  width: 23%;\n  height: 38vh;\n  min-width: 260px;\n  min-height: 300px;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem;\n}\n\n.dish-image {\n  height: 40%;\n  overflow: hidden;\n}\n\n.dish-image img {\n  position: relative;\n  object-fit: cover;\n  object-position: 50% 50%;\n  width: 100%;\n  height: 100%;\n}\n\n.food {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 5px;\n  background-color: #d40028;\n}\n\n.food p {\n  font-family: futura-light, sans-serif;\n  font-size: 0.8rem;\n  color: #fff;\n  margin: 3px;\n}\n\n.dish-description {\n  color: #48453c;\n  margin: 0;\n  text-align: center;\n}\n\n.dish-description h1 {\n  padding-top: 10px;\n  font-size: 1.2rem;\n  margin: 0 5px;\n  text-transform: uppercase;\n}\n\n.dish-description p {\n  font-size: 0.8rem;\n  text-transform: capitalize;\n  margin: 4px 0;\n  padding: 0 10px;\n  line-height: 1.5rem;\n}\n\n.menu-cards .dish-card .photo-credits {\n  position: absolute;\n  top: 40%;\n  right: 0;\n  height: 10px;\n}\n\n.menu-cards .dish-card .photo-credits a,\n.menu-cards .dish-card .photo-credits p {\n  font-size: 0.5rem;\n}\n\n/* Quantity box */\n\n.quantity button {\n  padding: 3px 0;\n  width: 40px;\n  margin: 0 10px;\n}\n\n.quantity p {\n  font-family: futura-bold, sans-serif;\n  font-size: 1rem;\n  margin: 0 10px;\n  color: #d40028;\n}\n\n/* ============ Cart display ========== */\n.cart {\n  flex-wrap: wrap;\n  margin-bottom: 50px;\n}\n\n.dish-card-cart {\n  position: relative;\n  justify-content: space-between;\n  align-items: center;\n  margin: 15px 10px;\n  width: 100%;\n  height: 15vh;\n  min-width: 248px;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem;\n  overflow: hidden;\n}\n\n.dish-card-cart .dish-image {\n  height: 100%;\n  width: 25%;\n  overflow: hidden;\n}\n\n.dish-card-cart .dish-image img {\n  position: relative;\n  object-fit: cover;\n  object-position: 50% 50%;\n  width: 100%;\n  height: 100%;\n}\n\n.dish-card-cart .dish-description {\n  width: 30%;\n}\n\n.dish-card-cart .dish-description h1,\n.dish-card-cart .dish-description p {\n  text-align: left;\n  margin: 5px 10px;\n  padding: 0;\n}\n\n.dish-card-cart .dish-description h1 {\n  font-size: 1.6vw;\n}\n\n.dish-card-cart .dish-description p {\n  font-size: 1vw;\n}\n\n.dish-card-cart .price-tag {\n  position: relative;\n  flex-wrap: nowrap;\n}\n\n.dish-card-cart .quantity {\n  width: 10%;\n  margin: 0 30px;\n}\n\n.dish-card-cart .quantity button {\n  padding: 3px 0;\n  width: 30%;\n  margin: 0;\n}\n\n.dish-card-cart button {\n  width: 10%;\n}\n\n.cart .total {\n  margin: 0 auto;\n  border-top: 1px solid red;\n  width: 97%;\n  flex-wrap: wrap;\n}\n\n.cart .total p {\n  font-family: futura-bold, sans-serif;\n  font-size: 1.5rem;\n  color: #d40028;\n}\n\n.cart .total button {\n  font-family: futura-bold, sans-serif;\n  font-size: 1.8rem;\n  width: 100%;\n  height: 50px;\n  padding: 0;\n}\n\n/* x-small devices (phones, 600px and down) */\n@media only screen and (max-width: 414px) {\n  .btn-dish span {\n    padding: 0 3px;\n  }\n\n  .btn-delete {\n    position: absolute;\n    bottom: 8px;\n    left: 26vw;\n  }\n\n  .dish-card-cart {\n    flex-wrap: wrap;\n    height: 25vh;\n    margin-left: 0;\n    margin-right: 0;\n  }\n\n  .dish-card-cart .dish-image {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 30vw;\n  }\n\n  .dish-card-cart .food h1 {\n    font-size: 0.6rem;\n  }\n\n  .dish-card-cart .dish-description {\n    width: 100%;\n  }\n\n  .dish-card-cart .dish-description h1 {\n    padding-left: 30vw;\n    font-size: 0.8rem;\n    margin-bottom: 10px;\n  }\n\n  .dish-card-cart div:nth-child(4) {\n    /* unit price item */\n    margin-left: 36%;\n    background: none;\n  }\n\n  .dish-card-cart div:nth-child(6) {\n    /* quantity changer */\n    margin-left: 0;\n    margin-right: 6px;\n    width: 20vw;\n  }\n\n  .dish-card-cart div:nth-child(7) {\n    /* Total price item */\n    width: 100%;\n    padding-top: 0;\n    margin-top: 0;\n    margin-left: 40%;\n    justify-content: flex-end;\n  }\n\n  .dish-card-cart .dish-description p {\n    display: none;\n  }\n}\n\n/* ============ contact form ==== */\n\nform input {\n  height: 25px;\n  border-width: 1px;\n  background-color: #f8f9fa;\n  border: none;\n  padding: 6px 8px;\n}\n\nform textarea {\n  height: 45px;\n  border-width: 1px;\n  background-color: #f8f9fa;\n  border: none;\n}\n\nform button {\n  width: 100%;\n}\n\n.form {\n  flex-wrap: wrap;\n}\n\n#contactWrap {\n  width: 100%;\n}\n\n.contact-card {\n  position: relative;\n  justify-content: space-between;\n  align-items: center;\n  margin: 20px auto 40px auto;\n  width: 500px;\n  height: 400px;\n  background-color: #fff;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem;\n}\n\n#hero-form-image {\n  position: relative;\n  width: 100%;\n  height: 40%;\n}\n\n#hero-form-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: 50% 50%;\n}\n\n.form-message {\n  position: absolute;\n  top: 20%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  background: rgba(255, 255, 255, 0.9);\n  padding: 5px 15px;\n  width: 80%;\n}\n\n.form-message p {\n  font-family: futura-bold, sans-serif;\n  font-size: 1.5rem;\n  color: #d40028;\n  text-align: center;\n}\n\n.inputForm {\n  align-items: flex-start;\n}\n\n.formCol {\n  margin: 5px 0 15px 0;\n}\n\n.formRow {\n  margin: 15px 0 10px 0;\n}\n\n.inputForm label {\n  font-family: futura-medium, sans-serif;\n  font-size: 0.8rem;\n  color: #d40028;\n  margin: 5px 0;\n  text-transform: capitalize;\n}\n\n.inputForm textarea {\n  margin-bottom: 10px;\n  width: 100%;\n}\n\n/* x-small devices (phones, 600px and down) */\n@media only screen and (max-width: 414px) {\n  #formSection {\n    width: 100%;\n    margin: 0 auto;\n  }\n\n  #contactWrap {\n    width: 100%;\n  }\n\n  #contactForm {\n    width: 100%;\n    height: 85%;\n  }\n\n  #contactForm .formRow {\n    width: 98%;\n    flex-wrap: wrap;\n  }\n\n  #contactForm .formRow .inputForm {\n    width: 100%;\n    padding: 0 10px;\n    margin: 0 10px;\n  }\n\n  #contactForm input {\n    width: 100%;\n    height: 40px;\n  }\n\n  form div:nth-child(3) {\n    width: 93%;\n    padding: 0 10px;\n    margin: 0 10px;\n  }\n\n  form textarea {\n    margin: 0;\n    width: 100%;\n    height: 60px;\n  }\n\n  form .btn {\n    width: 90%;\n    margin: 0 auto;\n  }\n}\n\n/* ============ footer ========== */\n\n#page-footer {\n  color: #c0baa2;\n  background-color: #48453c;\n  padding: 20px;\n}\n\n.footer-wrap {\n  max-width: 1140px;\n  padding: 0 100px;\n  margin: 0 auto;\n  align-items: flex-start;\n  flex-wrap: wrap;\n}\n\n.col-wrap p {\n  font-family: futura-light, sans-serif;\n  font-size: 0.9rem;\n  min-width: 70px;\n  justify-content: center;\n}\n\n.col-wrap ul {\n  padding: 0;\n}\n\n.col-wrap ul li {\n  font-family: futura-light, sans-serif;\n  font-size: 0.8rem;\n  list-style: none;\n  line-height: 1.5rem;\n}\n\n/* stylelint-enable  no-descending-specificity */\n",""]),n.exports=e},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",i=n[3];if(!i)return t;if(e&&"function"==typeof btoa){var a=(r=i,d=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(d),"/*# ".concat(s," */")),o=i.sources.map((function(n){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(n," */")}));return[t].concat(o).concat([a]).join("\n")}var r,d,s;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,i){"string"==typeof n&&(n=[[null,n,""]]);var a={};if(i)for(var o=0;o<this.length;o++){var r=this[o][0];null!=r&&(a[r]=!0)}for(var d=0;d<n.length;d++){var s=[].concat(n[d]);i&&a[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},function(n,e,t){"use strict";n.exports=function(n,e){return e||(e={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,e,t){"use strict";t.r(e),e.default=t.p+"fonts/af72c25a6945b0f48abb1412d1ef5829.ttf"},function(n,e,t){"use strict";t.r(e),e.default=t.p+"fonts/4e762c29ef7b44ca51cbe3fa14901444.ttf"},function(n,e,t){"use strict";t.r(e),e.default=t.p+"fonts/ead7282f8edac7904e5314afb63c4932.ttf"},function(n,e,t){"use strict";t.r(e),e.default=t.p+"images/4843b5cbb25858fe1bd33f3b8ecf4a51.svg"},function(n,e,t){"use strict";t.r(e);t(0);function i(){document.getElementById("content").innerHTML=""}function a(n,e,t="",i=""){const a=document.getElementById(n),o=document.createElement(e);""!==t&&o.setAttribute("id",t),""!==i&&o.setAttribute("class",i),a.appendChild(o)}function o(n,e){const t=`<h1>${e}</h1>`;document.getElementById(n).innerHTML=t}function r(n,e,t){const i=document.getElementById(n),a=document.createElement("div");a.setAttribute("class",t),a.setAttribute("id",e),i.appendChild(a)}var d=t.p+"images/e397d6e724421467eed046f022500f1a.svg",s=t.p+"images/ede4ca972489f669fd8df16c3dccf417.svg",c=t.p+"images/8e0d1f60e363f50fa4b5dbb18daea76f.svg",l=t.p+"images/5ef68a8ac1df88d06fdd9edd134bed43.svg";function p(){let n='<header id="navigation">';n+='<nav class="nav-wrap row-flex">',n+='<div class="left-wrap row-flex">',n+='<div id="burger-menu"></div>',n+='<div id="x-mobile-menu" class="hide"></div>',n+='<div id="brand-nav"></div></div>',n+='<div id="action-wrap" class="action-wrap row-flex">',n+='<p id="m1">home</p>',n+='<p id="m2">our menu</p>',n+='<p id="m3" class="row-flex">your cart<span id="navItems">2</span></p>',n+='<p id="m4" class="row-flex">contact us</p>',n+='<div id="global"></div></div></nav></header>',n+='<section id="main"></section>',document.getElementById("content").innerHTML='<header id="navigation"><nav class="nav-wrap row-flex"><div class="left-wrap row-flex"><div id="burger-menu"></div><div id="x-mobile-menu" class="hide"></div><div id="brand-nav"></div></div><div id="action-wrap" class="action-wrap row-flex"><p id="m1">home</p><p id="m2">our menu</p><p id="m3" class="row-flex">your cart<span id="navItems">2</span></p><p id="m4" class="row-flex">contact us</p><div id="global"></div></div></nav></header><section id="main"></section>';const e=new Image,t=new Image,i=new Image,a=new Image;var o;e.src=d,t.src=s,i.src=c,a.src=l,document.getElementById("burger-menu").appendChild(e),document.getElementById("x-mobile-menu").appendChild(t),document.getElementById("brand-nav").appendChild(i),document.getElementById("global").appendChild(a),o=2,document.getElementById("navItems").innerHTML=o}var m=t.p+"images/ebec312017540eb6a311f4aa8485dd70.jpg",u=t.p+"images/06e9bab0d37d577c8b2832ab65ad88e5.svg",f=t.p+"images/78a59277341d84169d51f24886583e2e.svg",h=t.p+"images/7656bf9bf4f0b52fb1ea796feffaea94.svg",g=t.p+"images/f1e16715de64f0c065b9c32cee3b634c.svg",b=t.p+"images/2485cf3a11189182fcfe91de17d662b3.svg";function v(){a("main","div","main-section"),function(){let n='<div id="hero-image"></div>';n+='<div class="photo-credits row-flex">',n+="<p>Photo by</p>",n+='<a href="https://unsplash.com/@briewilly?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Chad Montano</a>',n+="<p>on</p>",n+='<a href="https://unsplash.com/s/photos/pizza?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',n+='</div><div class="brand-container col-flex">',n+='<div id="takeAwayBrand"></div><div class="brand-mission">',n+="<p>Take the yummy and the flavour home</p></div>",n+='<div class="options col-flex"><p>1. Choose your order type</p>',n+='<div class="button-section row-flex">',n+='<button class="btn btn-opt">pickup</button>',n+='<button class="btn btn-opt">delivery</button></div>',n+='</div><div class="action">',n+='<button class="btn btn-action">To the menu</button>',n+='</div><div id="payment-tags" class="row-flex"></div></div>',document.getElementById("main-section").innerHTML='<div id="hero-image"></div><div class="photo-credits row-flex"><p>Photo by</p><a href="https://unsplash.com/@briewilly?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Chad Montano</a><p>on</p><a href="https://unsplash.com/s/photos/pizza?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></div><div class="brand-container col-flex"><div id="takeAwayBrand"></div><div class="brand-mission"><p>Take the yummy and the flavour home</p></div><div class="options col-flex"><p>1. Choose your order type</p><div class="button-section row-flex"><button class="btn btn-opt">pickup</button><button class="btn btn-opt">delivery</button></div></div><div class="action"><button class="btn btn-action">To the menu</button></div><div id="payment-tags" class="row-flex"></div></div>'}(),function(){const n=new Image;n.src=m,document.getElementById("hero-image").appendChild(n);const e=new Image;e.src=u,document.getElementById("takeAwayBrand").appendChild(e);const t=new Image,i=new Image,a=new Image,o=new Image;t.src=f,i.src=h,a.src=g,o.src=b,document.getElementById("payment-tags").appendChild(a),document.getElementById("payment-tags").appendChild(t),document.getElementById("payment-tags").appendChild(i),document.getElementById("payment-tags").appendChild(o)}()}var x=[{dishName:"PIZZA MARGARITA",dishDescription:"Enjoy our very best home made pizza margerita. Tomato, basil and muzzarella",buttonDescription:"add Margarita to cart",priceTag:7.5,dishGroup:"PIZZA",photoId:"d01",photoSource1:'<a href="https://unsplash.com/@dabyki?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nadezhda Filatova</a>',photoSource2:'<a href="https://unsplash.com/s/photos/pizza-and-pasta?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'},{dishName:"PEPPE PIZZA",dishDescription:"Delicious Mozzarella, Parmesan, Tomato, Basil and Italian pepperoni.",buttonDescription:"add Peppe Pizza to cart",priceTag:8.5,dishGroup:"PIZZA",photoId:"d02",photoSource1:'<a href="https://unsplash.com/@shootdelicious?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Eiliv-Sonas Aceron</a>',photoSource2:'<a href="https://unsplash.com/s/photos/pizza-and-pasta?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'},{dishName:"PIZZA ANANA",dishDescription:"(Not in Naples!) Enjoy your flavours. Tomato, Pinnaple, Muzzarella and Jam!",buttonDescription:"add Pizza Anana to cart",priceTag:8.2,dishGroup:"PIZZA",photoId:"d03",photoSource1:'<a href="https://unsplash.com/@dabyki?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nadezhda Filatova</a>',photoSource2:'<a href="https://unsplash.com/s/photos/pizza-and-pasta?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'},{dishName:"PIZZA FUNGUI",dishDescription:"Mozzarella cheese, goat cheese, mashrooms and fresh herbs",buttonDescription:"add Pizza Fungui to cart",priceTag:9.1,dishGroup:"PIZZA",photoId:"d04",photoSource1:'<a href="https://unsplash.com/@pinarimsi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pinar Kucuk </a>',photoSource2:'<a href="https://unsplash.com/s/photos/pizza-and-pasta?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'},{dishName:"spagetti capresse",dishDescription:"Fresh tomatoes, mozzarella and basil. Is the perfect combination. Enjoy!",buttonDescription:"add capresse to cart",priceTag:9.75,dishGroup:"PASTA",photoId:"d05",photoSource1:'<a href="https://unsplash.com/@foxfox?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Natalia Y </a>',photoSource2:'<a href="https://unsplash.com/s/photos/pizza-and-pasta?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'},{dishName:"pasta pescatora",dishDescription:"Shrimp Tomato Spinach Pasta in Garlic Butter Sauce. Delicious!",buttonDescription:"add pescatora to cart",priceTag:11.2,dishGroup:"PASTA",photoId:"d06",photoSource1:'<a href="https://unsplash.com/@islandsandsunsets?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Olayinka Babalola </a>',photoSource2:'<a href="https://unsplash.com/s/photos/pizza-and-pasta?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'},{dishName:"Punch Tagliatelle",dishDescription:"Tagliatelle with pumpkin, pancetta, sage and a little chilli for nice punch.!",buttonDescription:"add Tagliatelle to cart",priceTag:10.5,dishGroup:"PASTA",photoId:"d07",photoSource1:'<a href="https://unsplash.com/@ib1994?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Izzy Boscawen </a>',photoSource2:'<a href="https://unsplash.com/s/photos/pizza-and-pasta?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'}],w=t.p+"images/995683362c8d365847a698ab724da21e.jpg",y=t.p+"images/88afe473a5ce3d698c7724b8bba552ba.jpg",I=t.p+"images/8920774c2f417eb614212d8e089817d8.jpg",z=t.p+"images/f2ed216542fc842ef2700af5235ecddc.jpg",E=t.p+"images/381923cc4fd18e71426f30250de2e8d3.jpg",B=t.p+"images/40b44f0a0cd4b2e71adb448ed33d2cf9.jpg",_=t.p+"images/e4eb66023f088d7851392b601e9a8951.jpg";function T(n){let e='<div class="dish-card col-flex">';return e+=`<div id="${n.photoId}" class="dish-image">`,e+=`</div><div class="food"><p>${n.dishGroup}</p></div>`,e+='<div class="photo-credits row-flex"><p>Photo by</p>',e+=n.photoSource1,e+=n.photoSource2,e+=`</div><div class="price-tag"><p>${n.priceTag.toFixed(2)} $</p></div>`,e+=`<div class="dish-description"><h1>${n.dishName}</h1>`,e+=`<p>${n.dishDescription}</p></div>`,e+='<div class="quantity row-flex">',e+='<button class="btn btn-dish"><span>-</span></button>',e+='<p>0</p><button class="btn btn-dish"><span>+</span></button></div>',e+=`<button class="btn btn-dish">${n.buttonDescription}</button></div>`,e}function C(){a("menuSection","div","menuWrap","menu-cards row-flex");let n=T(x[0]);n+=T(x[1]),n+=T(x[2]),n+=T(x[3]),n+=T(x[4]),n+=T(x[5]),n+=T(x[6]),document.getElementById("menuWrap").innerHTML=n,function(){const n=new Image,e=new Image,t=new Image,i=new Image,a=new Image,o=new Image,r=new Image;n.src=w,e.src=y,t.src=I,i.src=z,a.src=E,o.src=B,r.src=_,document.getElementById("d01").appendChild(n),document.getElementById("d02").appendChild(e),document.getElementById("d03").appendChild(t),document.getElementById("d04").appendChild(i),document.getElementById("d05").appendChild(a),document.getElementById("d06").appendChild(o),document.getElementById("d07").appendChild(r)}()}function S(){a("main","div","menuSection","menuSection row-flex"),r("menuSection","menu-section-title","section-title"),o("menu-section-title","our menu"),C()}function j(n,e){const t=e*n.priceTag;let i='<div class="dish-card-cart row-flex">';return i+=`<div id="${n.photoId}c" class="dish-image">`,i+=`</div><div class="food"><p>${n.dishGroup}</p></div>`,i+=`<div class="dish-description"><h1>${n.dishName}</h1>`,i+=`<p>${n.dishDescription}</p>`,i+='</div><div class="price-tag row-flex">',i+=`<p>$</p><p>${n.priceTag}</p></div>`,i+='<p>X</p><div class="quantity row-flex">',i+='<button class="btn btn-dish"><span>-</span></button>',i+=`<p>${e}</p>`,i+='<button class="btn btn-dish"><span>+</span></button></div>',i+='<div class="price-tag row-flex">',i+=`<p>=</p><p>$</p><p>${t.toFixed(2)}</p></div>`,i+='<div class="btn-delete"></div></div>',[t,i]}function k(){a("cartSection","div","cartWrap","cart row-flex");const n=j(x[4],1),e=j(x[6],2);let t=n[1]+e[1];t+=function(n){let e='<div class="total row-flex">';return e+=`<p>Total:</p><p>${n} $</p>`,e+='<button class="btn btn-action">Submit your Order</button></div>',e}(n[0]+e[0]),document.getElementById("cartWrap").innerHTML=t,function(){const n=new Image,e=new Image;n.src=E,e.src=_,document.getElementById("d05c").appendChild(n),document.getElementById("d07c").appendChild(e)}()}function L(){a("main","div","cartSection","cart row-flex"),r("cartSection","cart-section-title","section-title"),o("cart-section-title","your cart"),k()}var A=t.p+"images/2c67dad9c0ead756c69f35bec84950b5.jpg";function M(){a("main","div","formSection","form row-flex"),r("formSection","form-section-title","section-title"),o("form-section-title","contact us"),function(){const n=new Image;n.src=A,a("formSection","div","contactWrap"),a("contactWrap","div","contactForm","contact-card col-flex");let e='<div id="hero-form-image"></div>';e+='<div class="form-message">',e+="<p>Fillout the form to learn more</p></div>",e+='<div class="formCol col-flex"><form><div class="formRow row-flex">',e+='<div class="inputForm col-flex"><label for="name">first name</label>',e+='<input type="text" name="first_name" placeholder="John"/></div>',e+='<div class="inputForm col-flex"><label for="email">email</label>',e+='<input type="email" name="email" placeholder="john.smith@gmail.com"/></div></div>',e+='<div class="divider"></div>',e+='<div class="inputForm col-flex"><label for="comments">comments</label>',e+='<textarea name="comments"></textarea></div>',e+='<button class="btn btn-action">Send Message</button></div></form></div>',document.getElementById("contactForm").innerHTML='<div id="hero-form-image"></div><div class="form-message"><p>Fillout the form to learn more</p></div><div class="formCol col-flex"><form><div class="formRow row-flex"><div class="inputForm col-flex"><label for="name">first name</label><input type="text" name="first_name" placeholder="John"/></div><div class="inputForm col-flex"><label for="email">email</label><input type="email" name="email" placeholder="john.smith@gmail.com"/></div></div><div class="divider"></div><div class="inputForm col-flex"><label for="comments">comments</label><textarea name="comments"></textarea></div><button class="btn btn-action">Send Message</button></div></form></div>',document.getElementById("hero-form-image").appendChild(n)}()}function P(){a("main","footer","page-footer",""),a("page-footer","div","footerWrap","footer-wrap row-flex"),function(){let n='<div class="col-wrap"><p>About us</p><ul class="about">';n+="<li>Menu</li><li>Restaurants</li><li>Freshness</li><li>About us</li>",n+='</ul></div><div class="col-wrap"><p>Legal</p><ul class="about">',n+="<li>Terms and Conditions</li><li>Data Security</li></ul></div>",n+='<div class="col-wrap"><p>International</p><ul class="about">',n+="<li>Germany</li><li>Sweden</li><li>United Kingdom</li><li>Franchise Portal</li></ul></div>",document.getElementById("footerWrap").innerHTML='<div class="col-wrap"><p>About us</p><ul class="about"><li>Menu</li><li>Restaurants</li><li>Freshness</li><li>About us</li></ul></div><div class="col-wrap"><p>Legal</p><ul class="about"><li>Terms and Conditions</li><li>Data Security</li></ul></div><div class="col-wrap"><p>International</p><ul class="about"><li>Germany</li><li>Sweden</li><li>United Kingdom</li><li>Franchise Portal</li></ul></div>'}()}function F(){window.screen.width<768?(console.log("mobile screen detected :"+window.screen.width),document.getElementById("action-wrap").classList.add("hide"),document.getElementById("action-wrap").classList.remove("show"),document.getElementById("burger-menu").classList.add("show"),document.getElementById("burger-menu").classList.remove("hide")):(console.log("tablet and bigger screen detected :"+window.screen.width),document.getElementById("burger-menu").classList.add("hide"),document.getElementById("action-wrap").classList.remove("show"),document.getElementById("action-wrap").classList.remove("hide"),document.getElementById("action-wrap").classList.add("show"))}function N(){p(),F(),D(),v(),S(),L(),M(),P()}function D(){document.getElementById("m1").addEventListener("click",()=>{i(),N()}),document.getElementById("m2").addEventListener("click",()=>{i(),p(),F(),D(),S(),P()}),document.getElementById("m3").addEventListener("click",()=>{i(),p(),F(),D(),L(),P()}),document.getElementById("m4").addEventListener("click",()=>{i(),p(),F(),D(),M(),P()}),document.getElementById("burger-menu").addEventListener("click",()=>{document.getElementById("action-wrap").classList.remove("hide"),document.getElementById("action-wrap").classList.add("show"),document.getElementById("burger-menu").classList.remove("show"),document.getElementById("burger-menu").classList.add("hide"),document.getElementById("x-mobile-menu").classList.remove("hide"),document.getElementById("x-mobile-menu").classList.add("show")}),document.getElementById("x-mobile-menu").addEventListener("click",()=>{document.getElementById("action-wrap").classList.remove("show"),document.getElementById("action-wrap").classList.add("hide"),document.getElementById("burger-menu").classList.remove("hide"),document.getElementById("burger-menu").classList.add("show"),document.getElementById("x-mobile-menu").classList.remove("show"),document.getElementById("x-mobile-menu").classList.add("hide")})}document.addEventListener("DOMContentLoaded",()=>{N(),window.addEventListener("resize",()=>{F()})})}]);