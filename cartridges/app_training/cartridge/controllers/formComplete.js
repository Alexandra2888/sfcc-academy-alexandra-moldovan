'use strict';

var server = require('server');

server.get('submitForm', function (req, res, next) {
    var template='formComplete';
  
    res.render(template);
    next();
});

module.exports = server.exports();