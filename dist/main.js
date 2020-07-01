!function(n){var t={};function e(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return n[a].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=n,e.c=t,e.d=function(n,t,a){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:a})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var a=Object.create(null);if(e.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var i in n)e.d(a,i,function(t){return n[t]}.bind(null,i));return a},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=7)}([function(n,t,e){var a=e(1),i=e(2);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var o={insert:"head",singleton:!1};a(i,o);n.exports=i.locals||{}},function(n,t,e){"use strict";var a,i=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},o=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),r=[];function s(n){for(var t=-1,e=0;e<r.length;e++)if(r[e].identifier===n){t=e;break}return t}function d(n,t){for(var e={},a=[],i=0;i<n.length;i++){var o=n[i],d=t.base?o[0]+t.base:o[0],c=e[d]||0,p="".concat(d," ").concat(c);e[d]=c+1;var u=s(p),l={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(r[u].references++,r[u].updater(l)):r.push({identifier:p,updater:g(l,t),references:1}),a.push(p)}return a}function c(n){var t=document.createElement("style"),a=n.attributes||{};if(void 0===a.nonce){var i=e.nc;i&&(a.nonce=i)}if(Object.keys(a).forEach((function(n){t.setAttribute(n,a[n])})),"function"==typeof n.insert)n.insert(t);else{var r=o(n.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var p,u=(p=[],function(n,t){return p[n]=t,p.filter(Boolean).join("\n")});function l(n,t,e,a){var i=e?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(n.styleSheet)n.styleSheet.cssText=u(t,i);else{var o=document.createTextNode(i),r=n.childNodes;r[t]&&n.removeChild(r[t]),r.length?n.insertBefore(o,r[t]):n.appendChild(o)}}function m(n,t,e){var a=e.css,i=e.media,o=e.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),o&&btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=a;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(a))}}var f=null,h=0;function g(n,t){var e,a,i;if(t.singleton){var o=h++;e=f||(f=c(t)),a=l.bind(null,e,o,!1),i=l.bind(null,e,o,!0)}else e=c(t),a=m.bind(null,e,t),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return a(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;a(n=t)}else i()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var e=d(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var a=0;a<e.length;a++){var i=s(e[a]);r[i].references--}for(var o=d(n,t),c=0;c<e.length;c++){var p=s(e[c]);0===r[p].references&&(r[p].updater(),r.splice(p,1))}e=o}}}},function(n,t,e){var a=e(3),i=e(4),o=e(8),r=e(5),s=e(6),d=e(9);t=a(!1);var c=i(o),p=i(r),u=i(s),l=i(d);t.push([n.i,"*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\nbody {\n    background-color: #f8f9fa;\n    font-family: futura-light, sans-serif;\n}\n\n/* ================ fonts ================ */\n\n@font-face {\n    font-family: futura-bold;\n    src: url("+c+') format("ttf");\n    font-weight: 600;\n}\n\n@font-face {\n    font-family: futura-normal;\n    src: url('+p+') format("ttf");\n    font-weight: 400;\n}\n\n@font-face {\n    font-family: futura-light;\n    src: url('+u+') format("ttf");\n    font-weight: 200;\n}\n\n/* ================ generic ================ */\n\n.row-flex {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.col-flex {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.hide {\n    display: none;\n}\n.show {\n    display: block;\n}\n\n/* ================ section ================ */\n\n.section-title {\n    width: 100%;\n    padding: 20px 0;\n}\n.section-title h1 {\n    font-family: futura-medium, sans-serif;\n    text-align: left;\n    align-self: flex-start;\n    font-size: 1.4rem;\n    margin: 0 10px;\n    text-transform: uppercase;\n    color: #d40028;\n}\n\n/* ================ header navigation ================ */\n\n#navigation {\n    background-color: white;\n    position: fixed;\n    display: block;\n    width: 100%;\n    top: 0;\n    left: 0;\n    border-bottom: 1px solid #e9ecef;\n    z-index: 1;\n}\n\n.nav-wrap {\n    max-width: 1140px;\n    height: 90px;\n    width: 100%;\n    padding: 12px 15px;\n    margin-right: auto;\n    margin-left: auto;\n}\n\n#burger-menu img {\n    width: 36px;\n    height: 24px;\n}\n\n#brand-nav {\n    padding-top: 24px;\n    padding-left: 36px;\n}\n\n#brand-nav img {\n    width: 296px;\n}\n#global img {\n    width: 30px;\n    padding-right: 0px;\n}\n\n.action-wrap {\n    width: 45%;\n}\n\n.action-wrap p {\n    font-family: futura-bold, sans-serif;\n    font-size: 1.5rem;\n    color: #d40028;\n    margin: 0;\n    text-transform: uppercase;\n}\n.action-wrap span {\n    font-family: futura-bold, sans-serif;\n    font-size: 1rem;\n    padding: 0 5px;\n    margin-left: 5px;\n    color: #fff;\n    background-color: #d40028;\n    border-radius: 100%;\n}\n/* =======  Buttons  =========   */\n.btn {\n    display: block;\n    padding: 0.5rem 1rem;\n    font-family: futura-light, sans-serif;\n    font-size: 0.9rem;\n    line-height: 1.5;\n    border-radius: 0.3rem;\n    opacity: 0.65;\n}\n\n.btn-dish {\n    font-family: futura-light, sans-serif;\n    border: 1px solid transparent;\n    padding: 0.375rem 0.75rem;\n    font-size: 1rem;\n    line-height: 1.5;\n    border-radius: 0.25rem;\n    width: 85%;\n    margin: 0 15px 10px 15px;\n}\n\n.btn-dish:hover,\n.btn-dish:focus {\n    color: #fff;\n    background-color: #d40028;\n}\n\n.btn-action {\n    color: #fff;\n    background-color: #d40028;\n    border-color: #d40028;\n}\n\n.btn-opt {\n    color: #d40028;\n    background-color: transparent;\n    border-color: #d40028;\n}\n\n.btn-opt:hover,\n.btn-opt:focus {\n    color: #fff;\n    background-color: #d40028;\n}\n\n.btn-delete {\n    background-image: url('+l+");\n    position: relative;\n    display: inline-block;\n    margin-right: 8px;\n    width: 24px;\n    height: 24px;\n    margin: 0 20px;\n    fill: gray !important;\n}\n\n/* =======  Main Header ======   */\n\n#main {\n    max-width: 1160px;\n    padding: 84px 15px 0px 15px;\n    margin-left: auto;\n    margin-right: auto;\n    z-index: 0;\n}\n\n#main-section {\n    position: relative;\n}\n\n#hero-image img {\n    width: 100%;\n    height: 75vh;\n    object-fit: cover;\n    transition: opacity 1s ease-in-out;\n    opacity: 0.9;\n    transform: scaleX(-1);\n}\n.photo-credits {\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    padding: 5px;\n    background-color: rgba(255, 255, 255, 0.6);\n}\n\n.photo-credits p {\n    font-size: 0.8rem;\n    margin: 0;\n    color: gray;\n    margin: 3px;\n}\n.photo-credits a {\n    font-size: 0.8rem;\n    text-decoration: none;\n    color: gray;\n    margin: 3px;\n}\n\n.price-tag {\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: 5px;\n    margin: 5px;\n    background-color: rgba(255, 255, 255, 0.8);\n}\n\n.price-tag p {\n    font-family: futura-bold, sans-serif;\n    font-size: 1.1rem;\n    margin: 0;\n    color: #d40028;\n    margin: 3px;\n}\n\n.brand-container {\n    position: absolute;\n    justify-content: space-around;\n    top: 50%;\n    left: 5%;\n    transform: translateY(-50%);\n    width: 30%;\n    height: 80%;\n    background-color: rgba(255, 255, 255, 0.7);\n    overflow: hidden;\n}\n\n#takeAwayBrand {\n    width: 100%;\n    padding: 20px 20px 0px 20px;\n    text-align: center;\n}\n\n#takeAwayBrand img {\n    width: 100%;\n}\n\n.brand-mission,\n.action {\n    width: 100%;\n    text-align: center;\n}\n\n.brand-mission p {\n    padding: 0 10px;\n    font-family: futura-light, sans-serif;\n    font-size: 1.5vw;\n    line-height: 1.8rem;\n    margin: 0;\n    color: #48453c;\n}\n\n.options {\n    width: 100%;\n    padding: 0 10px;\n    text-align: center;\n}\n\n.action {\n    padding: 0 10px;\n}\n\n.action button {\n    width: 100%;\n    height: 50px;\n}\n\n.button-section {\n    width: 100%;\n}\n\n.options .button-section button {\n    width: 48%;\n    justify-content: space-between;\n}\n\n.options p {\n    align-self: flex-start;\n    font-family: futura-light, sans-serif;\n    font-size: 1.5vw;\n    line-height: 1.8rem;\n    color: #48453c;\n}\n\n/* ============== menu cards ============= */\n\n.menu-cards {\n    padding-top: 10vh;\n    flex-wrap: wrap;\n    justify-content: space-around;\n}\n\n.dish-card {\n    position: relative;\n    justify-content: space-between;\n    align-items: center;\n    position: relative;\n    margin: 40px 10px;\n    width: 22%;\n    height: 45vh;\n    min-width: 248px;\n    background-color: #fff;\n    border: 1px solid rgba(0, 0, 0, 0.125);\n    border-radius: 0.25rem;\n}\n\n.dish-image {\n    height: 40%;\n    overflow: hidden;\n}\n\n.dish-image img {\n    position: relative;\n    object-fit: cover;\n    object-position: 50% 50%;\n    width: 100%;\n    height: 100%;\n}\n\n.food {\n    position: absolute;\n    top: 0;\n    left: 0;\n    padding: 5px;\n    /*     background-color: rgba(255, 255, 255, 0.6);\n    color: transparent; */\n    background-color: #d40028;\n}\n\n.food p {\n    font-family: futura-light, sans-serif;\n    font-size: 0.8rem;\n    margin: 0;\n    color: #fff;\n    margin: 3px;\n}\n\n.dish-description {\n    color: #48453c;\n    margin: 0;\n    text-align: center;\n}\n\n.dish-description h1 {\n    padding-top: 10px;\n    font-size: 1.1rem;\n    margin: 0 5px;\n    text-transform: uppercase;\n}\n.dish-description p {\n    text-transform: capitalize;\n}\n.dish-description p {\n    font-size: 0.7rem;\n    margin: 10px 0;\n    padding: 0 15px;\n    line-height: 1.5rem;\n}\n\n.menu-cards .dish-card .photo-credits {\n    position: absolute;\n    top: 40%;\n    right: 0;\n    height: 10px;\n}\n.menu-cards .dish-card .photo-credits a,\n.menu-cards .dish-card .photo-credits p {\n    font-size: 0.5rem;\n}\n\n/* Quantity box */\n\n.quantity {\n}\n.quantity button {\n    padding: 3px 0;\n    width: 40px;\n    margin: 0 10px;\n}\n\n.quantity p {\n    font-family: futura-bold, sans-serif;\n    margin: 0 10px;\n    color: #d40028;\n}\n\n/* ============ Cart display ========== */\n.cart {\n    flex-wrap: wrap;\n    margin-bottom: 50px;\n}\n\n.dish-card-cart {\n    position: relative;\n    justify-content: space-between;\n    align-items: center;\n    position: relative;\n    margin: 15px 10px;\n    width: 100%;\n    height: 15vh;\n    min-width: 248px;\n    background-color: #fff;\n    border: 1px solid rgba(0, 0, 0, 0.125);\n    border-radius: 0.25rem;\n    overflow: hidden;\n}\n\n.dish-card-cart .dish-image {\n    height: 100%;\n    width: 25%;\n    overflow: hidden;\n}\n\n.dish-card-cart .dish-image img {\n    position: relative;\n    object-fit: cover;\n    object-position: 50% 50%;\n    width: 100%;\n    height: 100%;\n}\n\n.dish-card-cart .dish-description {\n    width: 30%;\n}\n\n.dish-card-cart .dish-description h1,\n.dish-card-cart .dish-description p {\n    text-align: left;\n    margin: 5px 10px;\n    padding: 0;\n}\n\n.dish-card-cart .dish-description h1 {\n    font-size: 1.6vw;\n}\n.dish-card-cart .dish-description p {\n    font-size: 1vw;\n}\n\n.dish-card-cart .price-tag {\n    position: relative;\n    flex-wrap: nowrap;\n}\n\n.dish-card-cart .quantity {\n    width: 10%;\n    margin: 0 30px;\n}\n\n.dish-card-cart .quantity button {\n    padding: 3px 0;\n    width: 30%;\n    margin: 0;\n}\n\n.dish-card-cart button {\n    width: 10%;\n}\n\n.cart .total {\n    margin: 0 auto;\n    border-top: 1px solid red;\n    width: 97%;\n    flex-wrap: wrap;\n}\n\n.cart .total p {\n    font-family: futura-bold, sans-serif;\n    font-size: 1.5rem;\n    color: #d40028;\n}\n\n.cart .total button {\n    font-family: futura-bold, sans-serif;\n    font-size: 1.8rem;\n    width: 100%;\n    height: 50px;\n    padding: 0;\n}\n\n/* ============ footer ========== */\n\n#page-footer {\n    color: #c0baa2;\n    background-color: #48453c;\n    padding: 20px;\n}\n.footer-wrap {\n    max-width: 1140px;\n    padding: 0 100px;\n    margin: 0 auto;\n    align-items: flex-start;\n    flex-wrap: wrap;\n}\n\n.col-wrap p {\n    font-family: futura-light, sans-serif;\n    font-size: 0.9rem;\n    min-width: 70px;\n    justify-content: center;\n}\n\n.col-wrap ul {\n    padding: 0;\n}\n\n.col-wrap ul li {\n    font-family: futura-light, sans-serif;\n    font-size: 0.8rem;\n    list-style: none;\n    line-height: 1.5rem;\n}\n",""]),n.exports=t},function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=function(n,t){var e=n[1]||"",a=n[3];if(!a)return e;if(t&&"function"==typeof btoa){var i=(r=a,s=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(d," */")),o=a.sources.map((function(n){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(n," */")}));return[e].concat(o).concat([i]).join("\n")}var r,s,d;return[e].join("\n")}(t,n);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,a){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(a)for(var o=0;o<this.length;o++){var r=this[o][0];null!=r&&(i[r]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);a&&i[d[0]]||(e&&(d[2]?d[2]="".concat(e," and ").concat(d[2]):d[2]=e),t.push(d))}},t}},function(n,t,e){"use strict";n.exports=function(n,t){return t||(t={}),"string"!=typeof(n=n&&n.__esModule?n.default:n)?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n)}},function(n,t,e){"use strict";e.r(t),t.default=e.p+"fonts/4e762c29ef7b44ca51cbe3fa14901444.ttf"},function(n,t,e){"use strict";e.r(t),t.default=e.p+"fonts/ead7282f8edac7904e5314afb63c4932.ttf"},function(n,t,e){"use strict";e.r(t);e(0);var a=e.p+"images/e397d6e724421467eed046f022500f1a.svg",i=e.p+"images/8e0d1f60e363f50fa4b5dbb18daea76f.svg",o=e.p+"images/5ef68a8ac1df88d06fdd9edd134bed43.svg",r=e.p+"images/4c066971ce4367c6e0bc32054a5255b3.jpg",s=e.p+"images/06e9bab0d37d577c8b2832ab65ad88e5.svg",d=e.p+"images/78a59277341d84169d51f24886583e2e.svg",c=e.p+"images/7656bf9bf4f0b52fb1ea796feffaea94.svg",p=e.p+"images/f1e16715de64f0c065b9c32cee3b634c.svg",u=e.p+"images/2485cf3a11189182fcfe91de17d662b3.svg",l=e.p+"images/250d293f158eeec1ec660e833a0bb710.jpg",m=e.p+"images/980b4687cd433e0585c8f21443817cdd.jpg",f=e.p+"images/60c0947ca54aa789c1ba0b670ebd2eab.jpg",h=e.p+"images/3e98f918269814a9d2043bc1ee43d364.jpg",g=e.p+"images/15661812d53eefbbe97ad83897e22611.jpg",b=e.p+"images/d12cec684ed69b07c1ec725784cfcbb6.jpg",v=e.p+"images/ac7d29fcaad195ba935711d1431a7c29.jpg";const x=[{dishName:"PIZZA MARGARITA",dishDescription:"Enjoy our very best home made pizza margerita. Tomato, basil and muzzarella",buttonDescription:"add Margarita to cart",priceTag:"$ 7.50",dishGroup:"PIZZA",photoId:"d01",photoSource1:'<a href="https://unsplash.com/@dabyki?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nadezhda Filatova</a>',photoSource2:'<a href="https://unsplash.com/s/photos/pizza-and-pasta?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'},{dishName:"PEPPE PIZZA",dishDescription:"Delicious Shredded Mozzarella, Parmesan, Tomato Souce, Basil and Italian pepperoni.",buttonDescription:"add Peppe Pizza to cart",priceTag:"$ 8.50",dishGroup:"PIZZA",photoId:"d02",photoSource1:'<a href="https://unsplash.com/@shootdelicious?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Eiliv-Sonas Aceron</a>',photoSource2:'<a href="https://unsplash.com/s/photos/pizza-and-pasta?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'},{dishName:"PIZZA ANANA",dishDescription:"(Not in Naples!) Enjoy your flavours. Tomato, Pinnaple, Muzzarella and Jam!",buttonDescription:"add Pizza Anana to cart",priceTag:"$ 8.20",dishGroup:"PIZZA",photoId:"d03",photoSource1:'<a href="https://unsplash.com/@dabyki?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Nadezhda Filatova</a>',photoSource2:'<a href="https://unsplash.com/s/photos/pizza-and-pasta?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'},{dishName:"PIZZA FUNGUI",dishDescription:"Mozzarella cheese, goat cheese, mashrooms and fresh herbs",buttonDescription:"add Pizza Fungui to cart",priceTag:"$ 9.10",dishGroup:"PIZZA",photoId:"d04",photoSource1:'<a href="https://unsplash.com/@pinarimsi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pinar Kucuk </a>',photoSource2:'<a href="https://unsplash.com/s/photos/pizza-and-pasta?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'},{dishName:"spagetti capresse",dishDescription:"Fresh tomatoes, mozzarella and basil. Is the perfect combination. Enjoy!",buttonDescription:"add capresse to cart",priceTag:"$ 9.75",dishGroup:"PASTA",photoId:"d05",photoSource1:'<a href="https://unsplash.com/@foxfox?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Natalia Y </a>',photoSource2:'<a href="https://unsplash.com/s/photos/pizza-and-pasta?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'},{dishName:"pasta pescatora",dishDescription:"Shrimp Tomato Spinach Pasta in Garlic Butter Sauce. Delicious!",buttonDescription:"add pescatora to cart",priceTag:"$ 11.20",dishGroup:"PASTA",photoId:"d06",photoSource1:'<a href="https://unsplash.com/@islandsandsunsets?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Olayinka Babalola </a>',photoSource2:'<a href="https://unsplash.com/s/photos/pizza-and-pasta?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'},{dishName:"Punch Tagliatelle",dishDescription:"Tagliatelle with pumpkin, pancetta, sage and a little chilli for nice punch.!",buttonDescription:"add Tagliatelle to cart",priceTag:"$ 10.50",dishGroup:"PASTA",photoId:"d07",photoSource1:'<a href="https://unsplash.com/@ib1994?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Izzy Boscawen </a>',photoSource2:'<a href="https://unsplash.com/s/photos/pizza-and-pasta?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'}];function y(n,t,e="",a=""){let i=document.getElementById(n),o=document.createElement(t);""!=e&&o.setAttribute("id",e),""!=a&&o.setAttribute("class",a),i.appendChild(o)}function w(n){let t='<div class="dish-card col-flex">';return t+='<div id="'+n.photoId+'" class="dish-image">',t+='</div><div class="food"><p>'+n.dishGroup+"</p></div>",t+='<div class="photo-credits row-flex"><p>Photo by</p>',t+=n.photoSource1,t+=n.photoSource2,t+='</div><div class="price-tag"><p>'+n.priceTag+"</p></div>",t+='<div class="dish-description"><h1>'+n.dishName+"</h1>",t+="<p>"+n.dishDescription+"</p></div>",t+='<div class="quantity row-flex">',t+='<button class="btn btn-dish"><span>-</span></button>',t+='<p>0</p><button class="btn btn-dish"><span>+</span></button></div>',t+='<button class="btn btn-dish">'+n.buttonDescription+"</button></div>",t}function I(){let n=w(x[0]);n+=w(x[1]),n+=w(x[2]),n+=w(x[3]),n+=w(x[4]),n+=w(x[5]),n+=w(x[6]),document.getElementById("menuSection").innerHTML=n,function(){const n=new Image,t=new Image,e=new Image,a=new Image,i=new Image,o=new Image,r=new Image;n.src=l,t.src=m,e.src=f,a.src=h,i.src=g,o.src=b,r.src=v,document.getElementById("d01").appendChild(n),document.getElementById("d02").appendChild(t),document.getElementById("d03").appendChild(e),document.getElementById("d04").appendChild(a),document.getElementById("d05").appendChild(i),document.getElementById("d06").appendChild(o),document.getElementById("d07").appendChild(r)}()}console.log("init webpack done"),function(){let n='<header id="navigation">';n+='<nav class="nav-wrap row-flex">',n+='<div class="left-wrap row-flex">',n+='<div id="burger-menu"></div>',n+='<div id="brand-nav"></div></div>',n+='<div class="action-wrap row-flex">',n+='<p id="m1">home</p>',n+='<p id="m2">our menu</p>',n+='<p id="m3" class="row-flex">your cart<span id="navItems">2</span></p>',n+='</div><div id="global"></div></nav></header>',document.getElementById("content").innerHTML='<header id="navigation"><nav class="nav-wrap row-flex"><div class="left-wrap row-flex"><div id="burger-menu"></div><div id="brand-nav"></div></div><div class="action-wrap row-flex"><p id="m1">home</p><p id="m2">our menu</p><p id="m3" class="row-flex">your cart<span id="navItems">2</span></p></div><div id="global"></div></nav></header>';const t=new Image,e=new Image,r=new Image;var s;t.src=a,e.src=i,r.src=o,document.getElementById("burger-menu").appendChild(t),document.getElementById("brand-nav").appendChild(e),document.getElementById("global").appendChild(r),s=3,document.getElementById("navItems").innerHTML=s}(),y("content","section","main"),y("main","div","main-section"),function(){let n='<div id="hero-image"></div>';n+='<div class="photo-credits row-flex">',n+="<p>Photo by</p>",n+='<a href="https://unsplash.com/@briewilly?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Chad Montano</a>',n+="<p>on</p>",n+='<a href="https://unsplash.com/s/photos/pizza?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>',n+='</div><div class="brand-container col-flex">',n+='<div id="takeAwayBrand"></div><div class="brand-mission">',n+="<p>Take the yummy and the flavour home</p></div>",n+='<div class="options col-flex"><p>1. Choose your order type</p>',n+='<div class="button-section row-flex">',n+='<button class="btn btn-opt">pickup</button>',n+='<button class="btn btn-opt">delivery</button></div>',n+='</div><div class="action">',n+='<button class="btn btn-action">To the menu</button>',n+='</div><div id="payment-tags" class="row-flex"></div></div>',document.getElementById("main-section").innerHTML='<div id="hero-image"></div><div class="photo-credits row-flex"><p>Photo by</p><a href="https://unsplash.com/@briewilly?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Chad Montano</a><p>on</p><a href="https://unsplash.com/s/photos/pizza?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></div><div class="brand-container col-flex"><div id="takeAwayBrand"></div><div class="brand-mission"><p>Take the yummy and the flavour home</p></div><div class="options col-flex"><p>1. Choose your order type</p><div class="button-section row-flex"><button class="btn btn-opt">pickup</button><button class="btn btn-opt">delivery</button></div></div><div class="action"><button class="btn btn-action">To the menu</button></div><div id="payment-tags" class="row-flex"></div></div>'}(),function(){const n=new Image;n.src=r,document.getElementById("hero-image").appendChild(n);const t=new Image;t.src=s,document.getElementById("takeAwayBrand").appendChild(t);const e=new Image,a=new Image,i=new Image,o=new Image;e.src=d,a.src=c,i.src=p,o.src=u,document.getElementById("payment-tags").appendChild(i),document.getElementById("payment-tags").appendChild(e),document.getElementById("payment-tags").appendChild(a),document.getElementById("payment-tags").appendChild(o)}(),y("main","div","menuSection","menu-cards row-flex"),function(n,t){let e=document.getElementById(n),a=document.createElement("div");a.setAttribute("class",t),a.setAttribute("id",t),e.appendChild(a)}("menuSection","section-title"),function(n,t){let e="<h1>"+t+"</h1>";document.getElementById(n).innerHTML=e}("section-title","our menu"),I()},function(n,t,e){"use strict";e.r(t),t.default=e.p+"fonts/af72c25a6945b0f48abb1412d1ef5829.ttf"},function(n,t,e){"use strict";e.r(t),t.default=e.p+"images/4843b5cbb25858fe1bd33f3b8ecf4a51.svg"}]);