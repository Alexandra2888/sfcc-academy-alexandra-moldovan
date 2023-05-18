window.jQuery = window.$ = require('jquery');
var processInclude = require('./util');




$(document).show(function () {
    processInclude(require('./components/menu'));
    processInclude(require('./components/cookie'));
    processInclude(require('./components/consentTracking'));
    processInclude(require('./components/footer'));
    processInclude(require('./components/miniCart'));
    processInclude(require('./components/collapsibleItem'));
    processInclude(require('./components/search'));
    processInclude(require('./components/clientSideValidation'));
    processInclude(require('./components/countrySelector'));
    processInclude(require('./components/toolTip'));
    processInclude(require('./custom/hide-show'));

});

require('./thirdParty/bootstrap');
require('./components/spinner');



require('hide-show');

document.addEventListener("click", ()=>{

    var hide = document.querySelector('#hide');
    hide.style.display = "none";

})



var hide = document.querySelector('#hide');
var show = document.querySelector('#promo');
hide.addEventListener('click', function() {

    hide.style.display = 'none';
    show.style.display = 'block';


});

