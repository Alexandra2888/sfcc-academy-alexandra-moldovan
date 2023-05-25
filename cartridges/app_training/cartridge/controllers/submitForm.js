'use strict';

var server = require('server');

var csrfProtection = require('*/cartridge/scripts/middleware/csrf');
var consentTracking = require('*/cartridge/scripts/middleware/consentTracking');

server.get(
    'NewForm',
    server.middleware.https,
    csrfProtection.generateToken,
    consentTracking.consent,
    function (req, res, next) {
        var Resource = require('dw/web/Resource');
        var URLUtils = require('dw/web/URLUtils');

        var newForm = server.forms.getForm('form');
          var random = req.form.random;
               
        newForm.clear();
            res.render('submitForm', {
            title: Resource.msg("label.form.title.shipping", "forms", null),
            random:random,
            actionUrl: URLUtils.url("submitForm-SubmitInformation").toString()
        });
        next();
    }
);

server.post(
   "SubmitInformation",
   server.middleware.https,
   consentTracking.consent,
    csrfProtection.generateToken,
   function(req, res, next) {
           res.render("formComplete", {
       random:req.form.random
       });

       next();
   }
);

module.exports = server.exports();