'use strict';

var server = require('server');

server.get('submitForm', function (req, res, next) {
    var template = 'formComplete';
      var random = req.form.random;

  
    res.render(template, {
            random : random});
    next();
});

module.exports = server.exports();